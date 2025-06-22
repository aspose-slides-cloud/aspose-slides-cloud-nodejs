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


import axios from "axios";
const https = require('https');

axios.interceptors.request.use(request => {
    if ((request as any).debug) {
        console.log('>> Request');
        console.log((request as any).method + ' ' + (request as any).url);
        console.log('Headers\n' + (request as any).headers);
        console.log('Data: ' + JSON.stringify((request as any).data));
    }
    return request;
});

axios.interceptors.response.use(response => {
    if ((response.config as any).debug) {
        console.log('<< Response');
        console.log('Status: ' + (response as any).status);
        console.log('Headers\n' + (response as any).headers);
        if (Buffer.isBuffer((response as any).data)) {
            console.log('Data: binary (' + Buffer.byteLength(((response as any).data) as Buffer) + ' bytes)');
        } else {
            console.log('Data: ' + JSON.stringify((response as any).data));
        }
    }
    return response;
});

import { Configuration } from "./configuration";
import { ObjectSerializer } from "./objectSerializer";

export function checkMultipartContent(options: any, files: any) {
    if (files && files.length) {
        const data = {
            pipeline: null,
            attachments: []
        };
        if (options.data) {
            data.pipeline = JSON.stringify(options.data);
        } else {
            delete data.pipeline;
        }
        for (var i = 0; i < files.length; i++) {
            data.attachments.push(files[i]);
        }        
        options.data = data;
        if (!options.headers) {
            options.headers = {};
        }
        options.headers["Content-type"] = "multipart/form-data";
    }
}

/**
 * Invoke api method
 * @param requestOptions request parameters
 * @param confguration api configuration
 * @param notApplyAuthToRequest if setted to true, auth is not applied to request
 */
export async function invokeApiMethod(requestOptions: any, confguration: Configuration, notApplyAuthToRequest?: boolean): Promise<any> {
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
 * @param configuration api configuration
 * @param notApplyAuthToRequest if setted to true, auth is not applied to request
 */
async function invokeApiMethodInternal(requestOptions: any, configuration: Configuration, notApplyAuthToRequest?: boolean): Promise<any> {

    if (configuration.allowInsecureRequests) {
        requestOptions.httpsAgent = new https.Agent({  
            rejectUnauthorized: false
        });
    }

    if (!requestOptions.headers) {
        requestOptions.headers = {};
    }

    requestOptions.headers["x-aspose-client"] = "nodejs sdk v25.6.0";
    if (configuration.timeout) {
        requestOptions.headers["x-aspose-timeout"] = configuration.timeout;
    }
    if (configuration.httpRequestTimeout) {
        requestOptions.timeout = configuration.httpRequestTimeout * 1000;
    }
    for (var key in configuration.customHeaders) {
        requestOptions.headers[key] = configuration.customHeaders[key];
    }

    if (!notApplyAuthToRequest) {
        await addAuthHeader(requestOptions, configuration);
    } else {
        requestOptions.headers["Content-type"] = "application/x-www-form-urlencoded";
    }
    requestOptions.debug = configuration.debugMode;

    return new Promise<any>((resolve, reject) => {
        const r = axios(requestOptions)
            .then(async (response: any) => {
                //compatibility with request library responses
                response.body = response.data;
                response.statusCode = response.status;
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    resolve(response);
                } else {
                    await rejectResponse(reject, response, configuration, notApplyAuthToRequest);
                }
            })
            .catch(async (error: any) => {
                if (error.response) {
                    error.response.body = error.response.data;
                    error.response.statusCode = error.response.status;
                    await rejectResponse(reject, error.response, configuration, notApplyAuthToRequest);
                } else if (error.request && error.request.res) {
                    await rejectResponse(reject, error.request.res, configuration, notApplyAuthToRequest);
                }
                reject(error);
            });
        (r as any).writeDebugToConsole = configuration.debugMode;
    });
}

async function addAuthHeader(requestOptions: any, configuration: Configuration): Promise<void> {
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
    const requestOptions = {
        method: "POST",
        url: configuration.authBaseUrl + "/connect/token",
        data: {
            grant_type: "client_credentials",
            client_id: configuration.appSid,
            client_secret: configuration.appKey,
        }
    };
    const response = await invokeApiMethod(requestOptions, configuration, true);
    configuration.accessToken = response.body.access_token;
    return Promise.resolve();
}

async function rejectResponse(reject, response, configuration, notApplyAuthToRequest) {
    if (!notApplyAuthToRequest && response.statusCode === 401) {
        await requestToken(configuration);
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

var requestingToken : Promise<void> = null;
var isRequestTokenPending : boolean = false;

/**
 * Exception, indicating necessity of request repeat
 */
class NeedRepeatException extends Error {
}
