/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/


import request = require("request");
import requestDebug = require("request-debug");
import { Configuration } from "./configuration";
import { ObjectSerializer } from "./objectSerializer";

export function checkMultipartContent(options: request.Options, files: any) {
    if (files && files.length) {
        const data = {
            pipeline: null,
            attachments: []
        };
        if (options.json !== true && options.json) {
            data.pipeline = JSON.stringify(options.json);
        } else {
            delete data.pipeline;
        }
        for (var i = 0; i < files.length; i++) {
            data.attachments.push(files[i]);
        }        
        options.formData = data;
        options.json = null;
    }
}

/**
 * Invoke api method
 * @param requestOptions request parameters
 * @param confguration api configuration
 * @param notApplyAuthToRequest if setted to true, auth is not applied to request
 */
export async function invokeApiMethod(requestOptions: request.Options, confguration: Configuration, notApplyAuthToRequest?: boolean): Promise<request.RequestResponse> {
    try {
        return await invokeApiMethodInternal(requestOptions, confguration, notApplyAuthToRequest);
    } catch (e) {
        if (e instanceof NeedRepeatException) {
            return await invokeApiMethodInternal(requestOptions, confguration, notApplyAuthToRequest);
        }
        throw e;
    }
}

/**
 * Add parameter to query
 * @param url url
 * @param queryParameters queryParameters
 * @param parameterName parameterName
 * @param parameterValue parameterValue
 */
export function addQueryParameterToUrl(url: string, queryParameters: Array<string>, parameterName: string, parameterValue: any) {
    if (parameterValue !== undefined && parameterValue != null) {
        if (Array.isArray(parameterValue)) {
            parameterValue = parameterValue.join(",");
        }
        if (url.indexOf("{" + parameterName + "}") >= 0) {
            url = url.replace("{" + parameterName + "}", String(parameterValue));
        } else {
            queryParameters[parameterName] = String(parameterValue);
        }
    } else {
        url = url.replace("/{" + parameterName + "}", "");
    }

    return url;
}

/**
 * Add parameter to query
 * @param url url
 * @param queryParameters queryParameters
 * @param parameterName parameterName
 * @param parameterValue parameterValue
 */
export function addPathParameterToUrl(url: string, parameterName: string, parameterValue: string) {
    if (!parameterValue) {
        return url.replace("/{" + parameterName + "}", "");
    }
    return url.replace("{" + parameterName + "}", parameterValue);
}

/**
 * Add parameter to headers
 * @param headers headers
 * @param parameterName parameterName
 * @param parameterValue parameterValue
 */
export function addHeaderParameter(headers: any, parameterName: string, parameterValue: any) {
    if (parameterValue) {
        headers[parameterName] = String(parameterValue);
    }
}

/**
 * Invoke api method
 * @param requestOptions request parameters
 * @param confguration api configuration
 * @param notApplyAuthToRequest if setted to true, auth is not applied to request
 */
async function invokeApiMethodInternal(requestOptions: request.Options, confguration: Configuration, notApplyAuthToRequest?: boolean): Promise<request.RequestResponse> {
    requestDebug(request, (type, data, r) => {
        if (r.writeDebugToConsole) {
            const toLog = {};
            toLog[type] = data;
            // tslint:disable-next-line:no-console
            console.log(JSON.stringify(toLog, undefined, 2));
        }
    });

    if (!requestOptions.headers) {
        requestOptions.headers = {};
    }

    requestOptions.headers["x-aspose-client"] = "nodejs sdk v22.8.0";
    if (confguration.timeout) {
        requestOptions.headers["x-aspose-timeout"] = confguration.timeout;
    }
    for (var key in confguration.customHeaders) {
        requestOptions.headers[key] = confguration.customHeaders[key];
    }

    if (!notApplyAuthToRequest) {
        await addAuthHeader(requestOptions, confguration);
    }

    return new Promise<request.RequestResponse>((resolve, reject) => {
        const r = request(requestOptions, async (error, response) => {
            if (error) {
                reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    resolve(response);
                } else if (!notApplyAuthToRequest && response.statusCode === 401) {
                    await requestToken(confguration);
                    reject(new NeedRepeatException());
                } else {
                    try {
                        if (response.statusCode == 400 && response.body && response.body.error && typeof response.body.error == "string") {
                            reject({ message: response.body.error, code: 401 });
                        } else if (response.body && (response.body.length === undefined || response.body.length)) {
                            let bodyContent = response.body;
                            let bodyString = bodyContent;
                            if (bodyContent instanceof Buffer) {
                                bodyString = bodyContent.toString("utf8");
                                bodyContent = JSON.parse(bodyString);
                            }
                            let result = ObjectSerializer.deserialize(bodyContent, "SlidesApiErrorResponse");
                            try {
                                result = JSON.parse(result);
                            } catch {
                                //Error means the object is already deserialized
                                reject({ message: result.error ? result.error.message : bodyString, code: response.statusCode });
                            }
                        } else {
                            reject({ message: response.statusMessage, code: response.statusCode });
                        }
                    } catch (error) {
                        reject({ message: "Error while parse server error: " + error });
                    }
                }
            }
        });
        (r as any).writeDebugToConsole = confguration.debugMode;
    });
}

async function addAuthHeader(requestOptions: request.Options, configuration: Configuration): Promise<void> {
    if (configuration.appSid || configuration.appKey) {
        if (isRequestTokenPending) {
            await requestingToken;
        }
        if (!configuration.accessToken) {
            isRequestTokenPending = true;
            requestingToken = requestToken(configuration).catch((err) => { isRequestTokenPending = false; throw(err); });
            await requestingToken;
        }
        isRequestTokenPending = false;
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers.Authorization = "Bearer " + configuration.accessToken;
        }
    }
    return Promise.resolve();
}

async function requestToken(configuration: Configuration): Promise<void> {
    const requestOptions: request.Options = {
        method: "POST",
        json: true,
        uri: configuration.authBaseUrl + "/connect/token",
        form: {
            grant_type: "client_credentials",
            client_id: configuration.appSid,
            client_secret: configuration.appKey,
        },
    };
    const response = await invokeApiMethod(requestOptions, configuration, true);
    configuration.accessToken = response.body.access_token;
    return Promise.resolve();
}

var requestingToken : Promise<void> = null;
var isRequestTokenPending : boolean = false;

/**
 * Exception, indicating necessity of request repeat
 */
class NeedRepeatException extends Error {
}
