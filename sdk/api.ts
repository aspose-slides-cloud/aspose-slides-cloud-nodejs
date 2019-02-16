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


import http = require("http");
import request = require("request");

import { ObjectSerializer } from "./internal/objectSerializer";
import { addQueryParameterToUrl, addPathParameterToUrl, invokeApiMethod, checkMultipartContent } from "./internal/requestHelper";
import { ApiBase } from "./apiBase";
import * as model from "./model";
import * as requests from "./requests";

export * from "./model";
export * from "./requests";


export class DocumentApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Get API info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesApiInfo(requestObj: requests.GetSlidesApiInfoRequest): Promise<{response: http.ClientResponse, body: model.ApiInfoResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesApiInfo.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/info";
        const queryParameters: any = {};

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ApiInfoResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read presentation info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesDocument(requestObj: requests.GetSlidesDocumentRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesDocument.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesDocument.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Export presentation to some format. 
     * @param requestObj contains request parameters
     */
    public async getSlidesDocumentWithFormat(requestObj: requests.GetSlidesDocumentWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesDocumentWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/saveAs/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesDocumentWithFormat.');
        }
            // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getSlidesDocumentWithFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "jpegQuality", requestObj.jpegQuality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }
    /**
     * Create presentation  
     * @param requestObj contains request parameters
     */
    public async postSlidesDocument(requestObj: requests.PostSlidesDocumentRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesDocument.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesDocument.');
        }
            // verify required parameter 'requestObj.data' is not null or undefined
        if (requestObj.data === null || requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was null or undefined when calling postSlidesDocument.');
        }
            // verify required parameter 'requestObj.templatePath' is not null or undefined
        if (requestObj.templatePath === null || requestObj.templatePath === undefined) {
            throw new Error('Required parameter "requestObj.templatePath" was null or undefined when calling postSlidesDocument.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "templatePath", requestObj.templatePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "templateStorage", requestObj.templateStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isImageDataEmbedded", requestObj.isImageDataEmbedded);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            body: requestObj.data,
            json: false
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(JSON.parse(response.body), "DocumentResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Performs slides pipeline. Http-request contains pipeline DTO. 
     * @param requestObj contains request parameters
     */
    public async postSlidesPipeline(requestObj: requests.PostSlidesPipelineRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesPipeline.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/pipeline";
        const queryParameters: any = {};

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.pipeline,
            encoding: null
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }
    /**
     * Saves presentation with options 
     * @param requestObj contains request parameters
     */
    public async postSlidesSaveAs(requestObj: requests.PostSlidesSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/saveAs/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesSaveAs.');
        }
            // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling postSlidesSaveAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options,
            encoding: null
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }
    /**
     * Splitting presentations. Create one image per slide. 
     * @param requestObj contains request parameters
     */
    public async postSlidesSplit(requestObj: requests.PostSlidesSplitRequest): Promise<{response: http.ClientResponse, body: model.SplitDocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesSplit.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/split";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesSplit.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "to", requestObj.to);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "from", requestObj.from);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFolder", requestObj.destFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SplitDocumentResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Create presentation  
     * @param requestObj contains request parameters
     */
    public async putNewPresentation(requestObj: requests.PutNewPresentationRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putNewPresentation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putNewPresentation.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "templatePath", requestObj.templatePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "templatePassword", requestObj.templatePassword);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "templateStorage", requestObj.templateStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            body: requestObj.stream,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Convert presentation from request content to format specified. 
     * @param requestObj contains request parameters
     */
    public async putSlidesConvert(requestObj: requests.PutSlidesConvertRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlidesConvert.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/convert";
        const queryParameters: any = {};
            // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling putSlidesConvert.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            body: requestObj.document,
            encoding: null
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }
    /**
     * Create presentation document from html 
     * @param requestObj contains request parameters
     */
    public async putSlidesDocumentFromHtml(requestObj: requests.PutSlidesDocumentFromHtmlRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlidesDocumentFromHtml.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromHtml";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSlidesDocumentFromHtml.');
        }
            // verify required parameter 'requestObj.html' is not null or undefined
        if (requestObj.html === null || requestObj.html === undefined) {
            throw new Error('Required parameter "requestObj.html" was null or undefined when calling putSlidesDocumentFromHtml.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            body: requestObj.html,
            json: false
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(JSON.parse(response.body), "DocumentResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Set slide size for the presentation. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSlideSize(requestObj: requests.PutSlidesSlideSizeRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlidesSlideSize.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slidesize";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSlidesSlideSize.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sizeType", requestObj.sizeType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleType", requestObj.scaleType);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }
}

export class ImagesApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Get image in specified format. 
     * @param requestObj contains request parameters
     */
    public async getSlidesImageWithFormat(requestObj: requests.GetSlidesImageWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesImageWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/images/{index}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "index", String(requestObj.index));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesImageWithFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read presentation images info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesImages(requestObj: requests.GetSlidesImagesRequest): Promise<{response: http.ClientResponse, body: model.ImagesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesImages.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/images";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesImages.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ImagesResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide images info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideImages(requestObj: requests.GetSlidesSlideImagesRequest): Promise<{response: http.ClientResponse, body: model.ImagesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesSlideImages.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/images";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesSlideImages.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ImagesResponse");
        return Promise.resolve({body: result, response});
    }
}

export class LayoutSlidesApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Read presentation layoutSlide info. 
     * @param requestObj contains request parameters
     */
    public async getLayoutSlide(requestObj: requests.GetLayoutSlideRequest): Promise<{response: http.ClientResponse, body: model.LayoutSlideResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getLayoutSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/layoutSlides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getLayoutSlide.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlideResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read presentation layoutSlides info. 
     * @param requestObj contains request parameters
     */
    public async getLayoutSlidesList(requestObj: requests.GetLayoutSlidesListRequest): Promise<{response: http.ClientResponse, body: model.LayoutSlideListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getLayoutSlidesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/layoutSlides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getLayoutSlidesList.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlideListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Copy layoutSlide from source presentation. 
     * @param requestObj contains request parameters
     */
    public async postCopyLayoutSlideFromSourcePresentation(requestObj: requests.PostCopyLayoutSlideFromSourcePresentationRequest): Promise<{response: http.ClientResponse, body: model.LayoutSlideResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCopyLayoutSlideFromSourcePresentation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/layoutSlides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postCopyLayoutSlideFromSourcePresentation.');
        }
            // verify required parameter 'requestObj.cloneFrom' is not null or undefined
        if (requestObj.cloneFrom === null || requestObj.cloneFrom === undefined) {
            throw new Error('Required parameter "requestObj.cloneFrom" was null or undefined when calling postCopyLayoutSlideFromSourcePresentation.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFrom", requestObj.cloneFrom);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromPosition", requestObj.cloneFromPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromPassword", requestObj.cloneFromPassword);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromStorage", requestObj.cloneFromStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlideResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Update a layoutSlide. 
     * @param requestObj contains request parameters
     */
    public async putLayoutSlide(requestObj: requests.PutLayoutSlideRequest): Promise<{response: http.ClientResponse, body: model.LayoutSlideResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putLayoutSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/layoutSlides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putLayoutSlide.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.slideDto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlideResponse");
        return Promise.resolve({body: result, response});
    }
}

export class MasterSlidesApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Read presentation masterSlide info. 
     * @param requestObj contains request parameters
     */
    public async getMasterSlide(requestObj: requests.GetMasterSlideRequest): Promise<{response: http.ClientResponse, body: model.MasterSlideResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getMasterSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/masterSlides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getMasterSlide.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "MasterSlideResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read presentation masterSlides info. 
     * @param requestObj contains request parameters
     */
    public async getMasterSlidesList(requestObj: requests.GetMasterSlidesListRequest): Promise<{response: http.ClientResponse, body: model.MasterSlideListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getMasterSlidesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/masterSlides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getMasterSlidesList.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "MasterSlideListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Copy masterSlide from source presentation. 
     * @param requestObj contains request parameters
     */
    public async postCopyMasterSlideFromSourcePresentation(requestObj: requests.PostCopyMasterSlideFromSourcePresentationRequest): Promise<{response: http.ClientResponse, body: model.MasterSlideResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCopyMasterSlideFromSourcePresentation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/masterSlides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postCopyMasterSlideFromSourcePresentation.');
        }
            // verify required parameter 'requestObj.cloneFrom' is not null or undefined
        if (requestObj.cloneFrom === null || requestObj.cloneFrom === undefined) {
            throw new Error('Required parameter "requestObj.cloneFrom" was null or undefined when calling postCopyMasterSlideFromSourcePresentation.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFrom", requestObj.cloneFrom);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromPosition", requestObj.cloneFromPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromPassword", requestObj.cloneFromPassword);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromStorage", requestObj.cloneFromStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "applyToAll", requestObj.applyToAll);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "MasterSlideResponse");
        return Promise.resolve({body: result, response});
    }
}

export class MergeDocumentApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Merge the presentation with other presentations specified in the request parameter. 
     * @param requestObj contains request parameters
     */
    public async postPresentationMerge(requestObj: requests.PostPresentationMergeRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postPresentationMerge.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/merge";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postPresentationMerge.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.request
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Merge the presentation with other presentations or some of their slides specified in the request parameter. 
     * @param requestObj contains request parameters
     */
    public async putPresentationMerge(requestObj: requests.PutPresentationMergeRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putPresentationMerge.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/merge";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putPresentationMerge.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.request
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }
}

export class NotesSlideApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Remove Notes Slide. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlide(requestObj: requests.DeleteNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.SlideResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteNotesSlide.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read Notes slide info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlide(requestObj: requests.GetNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.NotesSlideResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getNotesSlide.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlideResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Convert Notes Slide to the specified picture format. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideWithFormat(requestObj: requests.GetNotesSlideWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getNotesSlideWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/saveAs/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getNotesSlideWithFormat.');
        }
            // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getNotesSlideWithFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }
    /**
     * Add new Notes Slide. 
     * @param requestObj contains request parameters
     */
    public async postAddNotesSlide(requestObj: requests.PostAddNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.NotesSlideResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAddNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postAddNotesSlide.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlideResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Update Notes Slide properties. 
     * @param requestObj contains request parameters
     */
    public async putUpdateNotesSlide(requestObj: requests.PutUpdateNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.NotesSlideResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putUpdateNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putUpdateNotesSlide.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlideResponse");
        return Promise.resolve({body: result, response});
    }
}

export class NotesSlideShapesApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Removes a shape, specified shapes or all shapes. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlideParagraph(requestObj: requests.DeleteNotesSlideParagraphRequest): Promise<{response: http.ClientResponse, body: model.ParagraphListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteNotesSlideParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteNotesSlideParagraph.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteNotesSlideParagraph.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ParagraphListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Removes a shape, specified shapes or all shapes. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlideParagraphs(requestObj: requests.DeleteNotesSlideParagraphsRequest): Promise<{response: http.ClientResponse, body: model.ParagraphListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteNotesSlideParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteNotesSlideParagraphs.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteNotesSlideParagraphs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "paragraphs", requestObj.paragraphs);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ParagraphListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Removes a shape, specified shapes or all shapes. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlidePortion(requestObj: requests.DeleteNotesSlidePortionRequest): Promise<{response: http.ClientResponse, body: model.PortionListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteNotesSlidePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", String(requestObj.portionIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteNotesSlidePortion.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteNotesSlidePortion.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PortionListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Removes a shape, specified shapes or all shapes. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlidePortions(requestObj: requests.DeleteNotesSlidePortionsRequest): Promise<{response: http.ClientResponse, body: model.PortionListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteNotesSlidePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteNotesSlidePortions.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteNotesSlidePortions.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "portions", requestObj.portions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PortionListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Removes a shape, specified shapes or all shapes. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlideShape(requestObj: requests.DeleteNotesSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteNotesSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteNotesSlideShape.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteNotesSlideShape.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Removes a shape, specified shapes or all shapes. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlideShapes(requestObj: requests.DeleteNotesSlideShapesRequest): Promise<{response: http.ClientResponse, body: model.ShapeListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteNotesSlideShapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteNotesSlideShapes.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteNotesSlideShapes.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapes", requestObj.shapes);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide shapes or shape info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShape(requestObj: requests.GetNotesSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getNotesSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getNotesSlideShape.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getNotesSlideShape.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide shapes or shape info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapeParagraph(requestObj: requests.GetNotesSlideShapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.ParagraphResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getNotesSlideShapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getNotesSlideShapeParagraph.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getNotesSlideShapeParagraph.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide shapes or shape info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapeParagraphs(requestObj: requests.GetNotesSlideShapeParagraphsRequest): Promise<{response: http.ClientResponse, body: model.ParagraphListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getNotesSlideShapeParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getNotesSlideShapeParagraphs.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getNotesSlideShapeParagraphs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ParagraphListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide shapes or shape info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapePortion(requestObj: requests.GetNotesSlideShapePortionRequest): Promise<{response: http.ClientResponse, body: model.PortionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getNotesSlideShapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", String(requestObj.portionIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getNotesSlideShapePortion.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getNotesSlideShapePortion.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PortionResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide shapes or shape info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapePortions(requestObj: requests.GetNotesSlideShapePortionsRequest): Promise<{response: http.ClientResponse, body: model.PortionListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getNotesSlideShapePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getNotesSlideShapePortions.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getNotesSlideShapePortions.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PortionListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapeWithFormat(requestObj: requests.GetNotesSlideShapeWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getNotesSlideShapeWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/saveAs/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getNotesSlideShapeWithFormat.');
        }
            // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getNotesSlideShapeWithFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide shapes or shape info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapes(requestObj: requests.GetNotesSlideShapesRequest): Promise<{response: http.ClientResponse, body: model.ShapeListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getNotesSlideShapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getNotesSlideShapes.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getNotesSlideShapes.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Creates new paragraph. 
     * @param requestObj contains request parameters
     */
    public async postNotesSlideAddNewParagraph(requestObj: requests.PostNotesSlideAddNewParagraphRequest): Promise<{response: http.ClientResponse, body: model.ParagraphResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postNotesSlideAddNewParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postNotesSlideAddNewParagraph.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling postNotesSlideAddNewParagraph.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Creates new portion. 
     * @param requestObj contains request parameters
     */
    public async postNotesSlideAddNewPortion(requestObj: requests.PostNotesSlideAddNewPortionRequest): Promise<{response: http.ClientResponse, body: model.PortionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postNotesSlideAddNewPortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postNotesSlideAddNewPortion.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling postNotesSlideAddNewPortion.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PortionResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Creates new shape. 
     * @param requestObj contains request parameters
     */
    public async postNotesSlideAddNewShape(requestObj: requests.PostNotesSlideAddNewShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postNotesSlideAddNewShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postNotesSlideAddNewShape.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling postNotesSlideAddNewShape.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeToClone", requestObj.shapeToClone);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async postNotesSlideShapeSaveAs(requestObj: requests.PostNotesSlideShapeSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/saveAs/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }
            // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options,
            encoding: null
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }
    /**
     * Updates shape properties. 
     * @param requestObj contains request parameters
     */
    public async putUpdateNotesSlideShape(requestObj: requests.PutUpdateNotesSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putUpdateNotesSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putUpdateNotesSlideShape.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling putUpdateNotesSlideShape.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Updates shape properties. 
     * @param requestObj contains request parameters
     */
    public async putUpdateNotesSlideShapeParagraph(requestObj: requests.PutUpdateNotesSlideShapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.ParagraphResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Updates shape properties. 
     * @param requestObj contains request parameters
     */
    public async putUpdateNotesSlideShapePortion(requestObj: requests.PutUpdateNotesSlideShapePortionRequest): Promise<{response: http.ClientResponse, body: model.PortionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", String(requestObj.portionIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PortionResponse");
        return Promise.resolve({body: result, response});
    }
}

export class PlaceholdersApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Read slide placeholder info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesPlaceholder(requestObj: requests.GetSlidesPlaceholderRequest): Promise<{response: http.ClientResponse, body: model.PlaceholderResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesPlaceholder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/placeholders/{placeholderIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "placeholderIndex", String(requestObj.placeholderIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesPlaceholder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PlaceholderResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide placeholders info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesPlaceholders(requestObj: requests.GetSlidesPlaceholdersRequest): Promise<{response: http.ClientResponse, body: model.PlaceholdersResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesPlaceholders.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/placeholders";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesPlaceholders.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PlaceholdersResponse");
        return Promise.resolve({body: result, response});
    }
}

export class PropertiesApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Clean document properties. 
     * @param requestObj contains request parameters
     */
    public async deleteSlidesDocumentProperties(requestObj: requests.DeleteSlidesDocumentPropertiesRequest): Promise<{response: http.ClientResponse, body: model.DocumentPropertiesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSlidesDocumentProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteSlidesDocumentProperties.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentPropertiesResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Delete document property. 
     * @param requestObj contains request parameters
     */
    public async deleteSlidesDocumentProperty(requestObj: requests.DeleteSlidesDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.DocumentPropertiesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSlidesDocumentProperty.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties/{propertyName}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "propertyName", String(requestObj.propertyName));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteSlidesDocumentProperty.');
        }
            // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling deleteSlidesDocumentProperty.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentPropertiesResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read presentation document properties. 
     * @param requestObj contains request parameters
     */
    public async getSlidesDocumentProperties(requestObj: requests.GetSlidesDocumentPropertiesRequest): Promise<{response: http.ClientResponse, body: model.DocumentPropertiesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesDocumentProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesDocumentProperties.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentPropertiesResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read presentation document property. 
     * @param requestObj contains request parameters
     */
    public async getSlidesDocumentProperty(requestObj: requests.GetSlidesDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.DocumentPropertyResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesDocumentProperty.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties/{propertyName}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "propertyName", String(requestObj.propertyName));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesDocumentProperty.');
        }
            // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling getSlidesDocumentProperty.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Set document properties. 
     * @param requestObj contains request parameters
     */
    public async postSlidesSetDocumentProperties(requestObj: requests.PostSlidesSetDocumentPropertiesRequest): Promise<{response: http.ClientResponse, body: model.DocumentPropertiesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesSetDocumentProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesSetDocumentProperties.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.properties
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentPropertiesResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Set document property. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSetDocumentProperty(requestObj: requests.PutSlidesSetDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.DocumentPropertyResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlidesSetDocumentProperty.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties/{propertyName}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "propertyName", String(requestObj.propertyName));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSlidesSetDocumentProperty.');
        }
            // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling putSlidesSetDocumentProperty.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.property
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
        return Promise.resolve({body: result, response});
    }
}

export class ShapesApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Removes a shape, specified shapes or all shapes. 
     * @param requestObj contains request parameters
     */
    public async deleteParagraph(requestObj: requests.DeleteParagraphRequest): Promise<{response: http.ClientResponse, body: model.ParagraphListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteParagraph.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteParagraph.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ParagraphListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Removes a shape, specified shapes or all shapes. 
     * @param requestObj contains request parameters
     */
    public async deleteParagraphs(requestObj: requests.DeleteParagraphsRequest): Promise<{response: http.ClientResponse, body: model.ParagraphListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteParagraphs.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteParagraphs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "paragraphs", requestObj.paragraphs);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ParagraphListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Removes a shape, specified shapes or all shapes. 
     * @param requestObj contains request parameters
     */
    public async deletePortion(requestObj: requests.DeletePortionRequest): Promise<{response: http.ClientResponse, body: model.PortionListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deletePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", String(requestObj.portionIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deletePortion.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deletePortion.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PortionListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Removes a shape, specified shapes or all shapes. 
     * @param requestObj contains request parameters
     */
    public async deletePortions(requestObj: requests.DeletePortionsRequest): Promise<{response: http.ClientResponse, body: model.PortionListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deletePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deletePortions.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deletePortions.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "portions", requestObj.portions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PortionListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Removes a shape, specified shapes or all shapes. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideShape(requestObj: requests.DeleteSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteSlideShape.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteSlideShape.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Removes a shape, specified shapes or all shapes. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideShapes(requestObj: requests.DeleteSlideShapesRequest): Promise<{response: http.ClientResponse, body: model.ShapeListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSlideShapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteSlideShapes.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteSlideShapes.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapes", requestObj.shapes);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide shapes or shape info. 
     * @param requestObj contains request parameters
     */
    public async getParagraphPortion(requestObj: requests.GetParagraphPortionRequest): Promise<{response: http.ClientResponse, body: model.PortionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphPortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", String(requestObj.portionIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getParagraphPortion.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getParagraphPortion.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PortionResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide shapes or shape info. 
     * @param requestObj contains request parameters
     */
    public async getParagraphPortions(requestObj: requests.GetParagraphPortionsRequest): Promise<{response: http.ClientResponse, body: model.PortionListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphPortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getParagraphPortions.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getParagraphPortions.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PortionListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide shapes or shape info. 
     * @param requestObj contains request parameters
     */
    public async getShapeParagraph(requestObj: requests.GetShapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.ParagraphResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getShapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getShapeParagraph.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getShapeParagraph.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async getShapeWithFormat(requestObj: requests.GetShapeWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getShapeWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/saveAs/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getShapeWithFormat.');
        }
            // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getShapeWithFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide shapes or shape info. 
     * @param requestObj contains request parameters
     */
    public async getSlideShape(requestObj: requests.GetSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlideShape.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getSlideShape.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide shapes or shape info. 
     * @param requestObj contains request parameters
     */
    public async getSlideShapeParagraphs(requestObj: requests.GetSlideShapeParagraphsRequest): Promise<{response: http.ClientResponse, body: model.ParagraphListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlideShapeParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlideShapeParagraphs.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getSlideShapeParagraphs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ParagraphListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide shapes or shape info. 
     * @param requestObj contains request parameters
     */
    public async getSlideShapes(requestObj: requests.GetSlideShapesRequest): Promise<{response: http.ClientResponse, body: model.ShapeListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlideShapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlideShapes.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getSlideShapes.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Creates new shape. 
     * @param requestObj contains request parameters
     */
    public async postAddNewParagraph(requestObj: requests.PostAddNewParagraphRequest): Promise<{response: http.ClientResponse, body: model.ParagraphResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAddNewParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postAddNewParagraph.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling postAddNewParagraph.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Creates new shape. 
     * @param requestObj contains request parameters
     */
    public async postAddNewPortion(requestObj: requests.PostAddNewPortionRequest): Promise<{response: http.ClientResponse, body: model.PortionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAddNewPortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postAddNewPortion.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling postAddNewPortion.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PortionResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Creates new shape. 
     * @param requestObj contains request parameters
     */
    public async postAddNewShape(requestObj: requests.PostAddNewShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAddNewShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postAddNewShape.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling postAddNewShape.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeToClone", requestObj.shapeToClone);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async postShapeSaveAs(requestObj: requests.PostShapeSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/saveAs/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postShapeSaveAs.');
        }
            // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling postShapeSaveAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options,
            encoding: null
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }
    /**
     * Updates shape properties. 
     * @param requestObj contains request parameters
     */
    public async putSetParagraphPortionProperties(requestObj: requests.PutSetParagraphPortionPropertiesRequest): Promise<{response: http.ClientResponse, body: model.PortionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", String(requestObj.portionIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSetParagraphPortionProperties.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling putSetParagraphPortionProperties.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PortionResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Updates shape properties. 
     * @param requestObj contains request parameters
     */
    public async putSetParagraphProperties(requestObj: requests.PutSetParagraphPropertiesRequest): Promise<{response: http.ClientResponse, body: model.ParagraphResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSetParagraphProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", String(requestObj.paragraphIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSetParagraphProperties.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling putSetParagraphProperties.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Updates shape properties. 
     * @param requestObj contains request parameters
     */
    public async putSlideShapeInfo(requestObj: requests.PutSlideShapeInfoRequest): Promise<{response: http.ClientResponse, body: model.ShapeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlideShapeInfo.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSlideShapeInfo.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling putSlideShapeInfo.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.dto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeResponse");
        return Promise.resolve({body: result, response});
    }
}

export class SlidesApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Delete a presentation slide by its index. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideByIndex(requestObj: requests.DeleteSlideByIndexRequest): Promise<{response: http.ClientResponse, body: model.SlideListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSlideByIndex.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteSlideByIndex.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Delete presentation slides. 
     * @param requestObj contains request parameters
     */
    public async deleteSlidesCleanSlidesList(requestObj: requests.DeleteSlidesCleanSlidesListRequest): Promise<{response: http.ClientResponse, body: model.SlideListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSlidesCleanSlidesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteSlidesCleanSlidesList.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slides", requestObj.slides);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Remove background from a slide. 
     * @param requestObj contains request parameters
     */
    public async deleteSlidesSlideBackground(requestObj: requests.DeleteSlidesSlideBackgroundRequest): Promise<{response: http.ClientResponse, body: model.SlideBackgroundResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSlidesSlideBackground.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/background";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteSlidesSlideBackground.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackgroundResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Convert a slide to some format. 
     * @param requestObj contains request parameters
     */
    public async getSlideWithFormat(requestObj: requests.GetSlideWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlideWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/saveAs/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlideWithFormat.');
        }
            // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getSlideWithFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read a slide info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlide(requestObj: requests.GetSlidesSlideRequest): Promise<{response: http.ClientResponse, body: model.SlideResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesSlide.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read background info for a slide. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideBackground(requestObj: requests.GetSlidesSlideBackgroundRequest): Promise<{response: http.ClientResponse, body: model.SlideBackgroundResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesSlideBackground.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/background";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesSlideBackground.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackgroundResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read presentation slide comments. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideComments(requestObj: requests.GetSlidesSlideCommentsRequest): Promise<{response: http.ClientResponse, body: model.SlideCommentsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesSlideComments.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/comments";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesSlideComments.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideCommentsResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read presentation slides info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlidesList(requestObj: requests.GetSlidesSlidesListRequest): Promise<{response: http.ClientResponse, body: model.SlideListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesSlidesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesSlidesList.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Convert a slide to some format. 
     * @param requestObj contains request parameters
     */
    public async postSlideSaveAs(requestObj: requests.PostSlideSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlideSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/saveAs/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlideSaveAs.');
        }
            // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling postSlideSaveAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options,
            encoding: null
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }
    /**
     * Create a slide. 
     * @param requestObj contains request parameters
     */
    public async postSlidesAdd(requestObj: requests.PostSlidesAddRequest): Promise<{response: http.ClientResponse, body: model.SlideListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesAdd.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/add";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesAdd.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "layoutAlias", requestObj.layoutAlias);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Copy a slide from the current or another presentation. 
     * @param requestObj contains request parameters
     */
    public async postSlidesCopy(requestObj: requests.PostSlidesCopyRequest): Promise<{response: http.ClientResponse, body: model.SlideListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesCopy.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/copy";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesCopy.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slideToCopy", requestObj.slideToCopy);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "source", requestObj.source);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourcePassword", requestObj.sourcePassword);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Reorder presentation slide position. 
     * @param requestObj contains request parameters
     */
    public async postSlidesReorder(requestObj: requests.PostSlidesReorderRequest): Promise<{response: http.ClientResponse, body: model.SlideListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesReorder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/move";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesReorder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newPosition", requestObj.newPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Reorder presentation slides positions. 
     * @param requestObj contains request parameters
     */
    public async postSlidesReorderMany(requestObj: requests.PostSlidesReorderManyRequest): Promise<{response: http.ClientResponse, body: model.SlideListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesReorderMany.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/reorder";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesReorderMany.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldPositions", requestObj.oldPositions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newPositions", requestObj.newPositions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Create, copy or reorder presentation slides. 
     * @param requestObj contains request parameters
     */
    public async postSlidesReorderPosition(requestObj: requests.PostSlidesReorderPositionRequest): Promise<{response: http.ClientResponse, body: model.SlideListResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesReorderPosition.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesReorderPosition.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldPosition", requestObj.oldPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newPosition", requestObj.newPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldPositions", requestObj.oldPositions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newPositions", requestObj.newPositions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slideToCopy", requestObj.slideToCopy);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slideToClone", requestObj.slideToClone);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "source", requestObj.source);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "layoutAlias", requestObj.layoutAlias);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideListResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Update a slide. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSlide(requestObj: requests.PutSlidesSlideRequest): Promise<{response: http.ClientResponse, body: model.SlideResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlidesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSlidesSlide.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.slideDto
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Set background for a slide. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSlideBackground(requestObj: requests.PutSlidesSlideBackgroundRequest): Promise<{response: http.ClientResponse, body: model.SlideBackgroundResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlidesSlideBackground.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/background";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSlidesSlideBackground.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "color", requestObj.color);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.background
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackgroundResponse");
        return Promise.resolve({body: result, response});
    }
}

export class TextApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Extract presentation text items. 
     * @param requestObj contains request parameters
     */
    public async getSlidesPresentationTextItems(requestObj: requests.GetSlidesPresentationTextItemsRequest): Promise<{response: http.ClientResponse, body: model.TextItemsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesPresentationTextItems.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/textItems";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesPresentationTextItems.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withEmpty", requestObj.withEmpty);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Extract slide text items. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideTextItems(requestObj: requests.GetSlidesSlideTextItemsRequest): Promise<{response: http.ClientResponse, body: model.TextItemsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesSlideTextItems.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/textItems";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesSlideTextItems.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withEmpty", requestObj.withEmpty);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Replace text with a new value. 
     * @param requestObj contains request parameters
     */
    public async postSlidesPresentationReplaceText(requestObj: requests.PostSlidesPresentationReplaceTextRequest): Promise<{response: http.ClientResponse, body: model.PresentationStringReplaceResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesPresentationReplaceText.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/replaceText";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesPresentationReplaceText.');
        }
            // verify required parameter 'requestObj.oldValue' is not null or undefined
        if (requestObj.oldValue === null || requestObj.oldValue === undefined) {
            throw new Error('Required parameter "requestObj.oldValue" was null or undefined when calling postSlidesPresentationReplaceText.');
        }
            // verify required parameter 'requestObj.newValue' is not null or undefined
        if (requestObj.newValue === null || requestObj.newValue === undefined) {
            throw new Error('Required parameter "requestObj.newValue" was null or undefined when calling postSlidesPresentationReplaceText.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldValue", requestObj.oldValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newValue", requestObj.newValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreCase", requestObj.ignoreCase);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "PresentationStringReplaceResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Replace text with a new value. 
     * @param requestObj contains request parameters
     */
    public async postSlidesSlideReplaceText(requestObj: requests.PostSlidesSlideReplaceTextRequest): Promise<{response: http.ClientResponse, body: model.SlideStringReplaceResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesSlideReplaceText.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/replaceText";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesSlideReplaceText.');
        }
            // verify required parameter 'requestObj.oldValue' is not null or undefined
        if (requestObj.oldValue === null || requestObj.oldValue === undefined) {
            throw new Error('Required parameter "requestObj.oldValue" was null or undefined when calling postSlidesSlideReplaceText.');
        }
            // verify required parameter 'requestObj.newValue' is not null or undefined
        if (requestObj.newValue === null || requestObj.newValue === undefined) {
            throw new Error('Required parameter "requestObj.newValue" was null or undefined when calling postSlidesSlideReplaceText.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldValue", requestObj.oldValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newValue", requestObj.newValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreCase", requestObj.ignoreCase);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideStringReplaceResponse");
        return Promise.resolve({body: result, response});
    }
}

export class ThemeApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Read slide theme info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesTheme(requestObj: requests.GetSlidesThemeRequest): Promise<{response: http.ClientResponse, body: model.ThemeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesTheme.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/theme";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesTheme.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ThemeResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide theme color scheme info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesThemeColorScheme(requestObj: requests.GetSlidesThemeColorSchemeRequest): Promise<{response: http.ClientResponse, body: model.ColorSchemeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesThemeColorScheme.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/theme/colorScheme";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesThemeColorScheme.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ColorSchemeResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide theme font scheme info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesThemeFontScheme(requestObj: requests.GetSlidesThemeFontSchemeRequest): Promise<{response: http.ClientResponse, body: model.FontSchemeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesThemeFontScheme.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/theme/fontScheme";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesThemeFontScheme.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FontSchemeResponse");
        return Promise.resolve({body: result, response});
    }
    /**
     * Read slide theme color scheme info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesThemeFormatScheme(requestObj: requests.GetSlidesThemeFormatSchemeRequest): Promise<{response: http.ClientResponse, body: model.FormatSchemeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesThemeFormatScheme.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/theme/formatScheme";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesThemeFormatScheme.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        checkMultipartContent(requestOptions, requestObj);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FormatSchemeResponse");
        return Promise.resolve({body: result, response});
    }
}
