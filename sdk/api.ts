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

import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { addQueryParameterToUrl, addPathParameterToUrl, addHeaderParameter, invokeApiMethod, checkMultipartContent } from "./internal/requestHelper";
import * as model from "./model";
import * as requests from "./requests";

export * from "./model";
export * from "./requests";


export class SlidesApi {
    private _configuration: Configuration;
    public get configuration(): Configuration {
        return this._configuration;
    }

    /**
     * @param appSid Client Id.
     * @param appKey Client Secret.
     * @param baseUrl Base api Url.
     * @param authBaseUrl Base authentication Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     * @param timeout Timeout (in seconds) for an operation. Applies to the Slides operation, not to the HTTP request.
     */
    constructor(appSid: string, appKey: string, baseUrl?: string, authBaseUrl?: string, debugMode?: boolean, timeout?: number) {
        this._configuration = new Configuration(appSid, appKey, baseUrl, authBaseUrl, debugMode, timeout);
    }

    /**
     * Copy file 
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: requests.CopyFileRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling copyFile.');
        }
        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('The required parameter "requestObj.srcPath" was null or undefined when calling copyFile.');
        }
        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('The required parameter "requestObj.destPath" was null or undefined when calling copyFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/copy/{srcPath}";
        localVarPath = addPathParameterToUrl(localVarPath, "srcPath", ObjectSerializer.toString(requestObj.srcPath));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }
    /**
     * Copy folder 
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: requests.CopyFolderRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling copyFolder.');
        }
        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('The required parameter "requestObj.srcPath" was null or undefined when calling copyFolder.');
        }
        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('The required parameter "requestObj.destPath" was null or undefined when calling copyFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/copy/{srcPath}";
        localVarPath = addPathParameterToUrl(localVarPath, "srcPath", ObjectSerializer.toString(requestObj.srcPath));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }
    /**
     * Create the folder 
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: requests.CreateFolderRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling createFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }
    /**
     * Delete a category from a chart. 
     * @param requestObj contains request parameters
     */
    public async deleteChartCategory(requestObj: requests.DeleteChartCategoryRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteChartCategory.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteChartCategory.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteChartCategory.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteChartCategory.');
        }
        // verify required parameter 'requestObj.categoryIndex' is not null or undefined
        if (requestObj.categoryIndex === null || requestObj.categoryIndex === undefined) {
            throw new Error('The required parameter "requestObj.categoryIndex" was null or undefined when calling deleteChartCategory.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/categories/{categoryIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "categoryIndex", ObjectSerializer.toString(requestObj.categoryIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Delete a data point from a chart series. 
     * @param requestObj contains request parameters
     */
    public async deleteChartDataPoint(requestObj: requests.DeleteChartDataPointRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteChartDataPoint.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteChartDataPoint.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteChartDataPoint.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteChartDataPoint.');
        }
        // verify required parameter 'requestObj.seriesIndex' is not null or undefined
        if (requestObj.seriesIndex === null || requestObj.seriesIndex === undefined) {
            throw new Error('The required parameter "requestObj.seriesIndex" was null or undefined when calling deleteChartDataPoint.');
        }
        // verify required parameter 'requestObj.pointIndex' is not null or undefined
        if (requestObj.pointIndex === null || requestObj.pointIndex === undefined) {
            throw new Error('The required parameter "requestObj.pointIndex" was null or undefined when calling deleteChartDataPoint.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/series/{seriesIndex}/dataPoints/{pointIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "seriesIndex", ObjectSerializer.toString(requestObj.seriesIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "pointIndex", ObjectSerializer.toString(requestObj.pointIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Delete a series from a chart. 
     * @param requestObj contains request parameters
     */
    public async deleteChartSeries(requestObj: requests.DeleteChartSeriesRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteChartSeries.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteChartSeries.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteChartSeries.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteChartSeries.');
        }
        // verify required parameter 'requestObj.seriesIndex' is not null or undefined
        if (requestObj.seriesIndex === null || requestObj.seriesIndex === undefined) {
            throw new Error('The required parameter "requestObj.seriesIndex" was null or undefined when calling deleteChartSeries.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/series/{seriesIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "seriesIndex", ObjectSerializer.toString(requestObj.seriesIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Delete file 
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: requests.DeleteFileRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }
    /**
     * Delete folder 
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: requests.DeleteFolderRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recursive", requestObj.recursive);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }
    /**
     * Remove notes slide. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlide(requestObj: requests.DeleteNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.Slide}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteNotesSlide.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteNotesSlide.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a paragraph. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlideParagraph(requestObj: requests.DeleteNotesSlideParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteNotesSlideParagraph.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteNotesSlideParagraph.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteNotesSlideParagraph.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteNotesSlideParagraph.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling deleteNotesSlideParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a range of paragraphs. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlideParagraphs(requestObj: requests.DeleteNotesSlideParagraphsRequest): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteNotesSlideParagraphs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteNotesSlideParagraphs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteNotesSlideParagraphs.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteNotesSlideParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "paragraphs", requestObj.paragraphs);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a portion. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlidePortion(requestObj: requests.DeleteNotesSlidePortionRequest): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteNotesSlidePortion.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteNotesSlidePortion.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteNotesSlidePortion.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteNotesSlidePortion.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling deleteNotesSlidePortion.');
        }
        // verify required parameter 'requestObj.portionIndex' is not null or undefined
        if (requestObj.portionIndex === null || requestObj.portionIndex === undefined) {
            throw new Error('The required parameter "requestObj.portionIndex" was null or undefined when calling deleteNotesSlidePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(requestObj.portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a range of portions. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlidePortions(requestObj: requests.DeleteNotesSlidePortionsRequest): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteNotesSlidePortions.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteNotesSlidePortions.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteNotesSlidePortions.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteNotesSlidePortions.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling deleteNotesSlidePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "portions", requestObj.portions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a shape. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlideShape(requestObj: requests.DeleteNotesSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteNotesSlideShape.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteNotesSlideShape.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteNotesSlideShape.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteNotesSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a range of shapes. 
     * @param requestObj contains request parameters
     */
    public async deleteNotesSlideShapes(requestObj: requests.DeleteNotesSlideShapesRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteNotesSlideShapes.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteNotesSlideShapes.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteNotesSlideShapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapes", requestObj.shapes);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a paragraph. 
     * @param requestObj contains request parameters
     */
    public async deleteParagraph(requestObj: requests.DeleteParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteParagraph.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteParagraph.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteParagraph.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteParagraph.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling deleteParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a range of paragraphs. 
     * @param requestObj contains request parameters
     */
    public async deleteParagraphs(requestObj: requests.DeleteParagraphsRequest): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteParagraphs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteParagraphs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteParagraphs.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "paragraphs", requestObj.paragraphs);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a portion. 
     * @param requestObj contains request parameters
     */
    public async deletePortion(requestObj: requests.DeletePortionRequest): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deletePortion.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deletePortion.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deletePortion.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deletePortion.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling deletePortion.');
        }
        // verify required parameter 'requestObj.portionIndex' is not null or undefined
        if (requestObj.portionIndex === null || requestObj.portionIndex === undefined) {
            throw new Error('The required parameter "requestObj.portionIndex" was null or undefined when calling deletePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(requestObj.portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a range of portions. 
     * @param requestObj contains request parameters
     */
    public async deletePortions(requestObj: requests.DeletePortionsRequest): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deletePortions.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deletePortions.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deletePortions.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deletePortions.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling deletePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "portions", requestObj.portions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Delete a presentation section. 
     * @param requestObj contains request parameters
     */
    public async deleteSection(requestObj: requests.DeleteSectionRequest): Promise<{response: http.ClientResponse, body: model.Sections}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSection.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSection.');
        }
        // verify required parameter 'requestObj.sectionIndex' is not null or undefined
        if (requestObj.sectionIndex === null || requestObj.sectionIndex === undefined) {
            throw new Error('The required parameter "requestObj.sectionIndex" was null or undefined when calling deleteSection.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections/{sectionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "sectionIndex", ObjectSerializer.toString(requestObj.sectionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withSlides", requestObj.withSlides);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Delete presentation sections. 
     * @param requestObj contains request parameters
     */
    public async deleteSections(requestObj: requests.DeleteSectionsRequest): Promise<{response: http.ClientResponse, body: model.Sections}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSections.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSections.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sections", requestObj.sections);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withSlides", requestObj.withSlides);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove animation from a slide. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideAnimation(requestObj: requests.DeleteSlideAnimationRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlideAnimation.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlideAnimation.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSlideAnimation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove an effect from slide animation. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideAnimationEffect(requestObj: requests.DeleteSlideAnimationEffectRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlideAnimationEffect.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlideAnimationEffect.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSlideAnimationEffect.');
        }
        // verify required parameter 'requestObj.effectIndex' is not null or undefined
        if (requestObj.effectIndex === null || requestObj.effectIndex === undefined) {
            throw new Error('The required parameter "requestObj.effectIndex" was null or undefined when calling deleteSlideAnimationEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/mainSequence/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "effectIndex", ObjectSerializer.toString(requestObj.effectIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove an interactive sequence from slide animation. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideAnimationInteractiveSequence(requestObj: requests.DeleteSlideAnimationInteractiveSequenceRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'requestObj.sequenceIndex' is not null or undefined
        if (requestObj.sequenceIndex === null || requestObj.sequenceIndex === undefined) {
            throw new Error('The required parameter "requestObj.sequenceIndex" was null or undefined when calling deleteSlideAnimationInteractiveSequence.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences/{sequenceIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "sequenceIndex", ObjectSerializer.toString(requestObj.sequenceIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove an effect from slide animation interactive sequence. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideAnimationInteractiveSequenceEffect(requestObj: requests.DeleteSlideAnimationInteractiveSequenceEffectRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'requestObj.sequenceIndex' is not null or undefined
        if (requestObj.sequenceIndex === null || requestObj.sequenceIndex === undefined) {
            throw new Error('The required parameter "requestObj.sequenceIndex" was null or undefined when calling deleteSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'requestObj.effectIndex' is not null or undefined
        if (requestObj.effectIndex === null || requestObj.effectIndex === undefined) {
            throw new Error('The required parameter "requestObj.effectIndex" was null or undefined when calling deleteSlideAnimationInteractiveSequenceEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences/{sequenceIndex}/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "sequenceIndex", ObjectSerializer.toString(requestObj.sequenceIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "effectIndex", ObjectSerializer.toString(requestObj.effectIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Clear all interactive sequences from slide animation. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideAnimationInteractiveSequences(requestObj: requests.DeleteSlideAnimationInteractiveSequencesRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlideAnimationInteractiveSequences.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlideAnimationInteractiveSequences.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSlideAnimationInteractiveSequences.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Clear main sequence in slide animation. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideAnimationMainSequence(requestObj: requests.DeleteSlideAnimationMainSequenceRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlideAnimationMainSequence.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlideAnimationMainSequence.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSlideAnimationMainSequence.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/mainSequence";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Delete a presentation slide by index. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideByIndex(requestObj: requests.DeleteSlideByIndexRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlideByIndex.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlideByIndex.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSlideByIndex.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a shape. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideShape(requestObj: requests.DeleteSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlideShape.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlideShape.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSlideShape.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a range of shapes. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideShapes(requestObj: requests.DeleteSlideShapesRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlideShapes.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlideShapes.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSlideShapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapes", requestObj.shapes);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a shape (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async deleteSlideSubshape(requestObj: requests.DeleteSlideSubshapeRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlideSubshape.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlideSubshape.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSlideSubshape.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteSlideSubshape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a range of shapes (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async deleteSlideSubshapes(requestObj: requests.DeleteSlideSubshapesRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlideSubshapes.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlideSubshapes.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSlideSubshapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapes", requestObj.shapes);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Delete presentation slides. 
     * @param requestObj contains request parameters
     */
    public async deleteSlidesCleanSlidesList(requestObj: requests.DeleteSlidesCleanSlidesListRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlidesCleanSlidesList.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlidesCleanSlidesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slides", requestObj.slides);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Clean document properties. 
     * @param requestObj contains request parameters
     */
    public async deleteSlidesDocumentProperties(requestObj: requests.DeleteSlidesDocumentPropertiesRequest): Promise<{response: http.ClientResponse, body: model.DocumentProperties}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlidesDocumentProperties.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlidesDocumentProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperties");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Delete document property. 
     * @param requestObj contains request parameters
     */
    public async deleteSlidesDocumentProperty(requestObj: requests.DeleteSlidesDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.DocumentProperties}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlidesDocumentProperty.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlidesDocumentProperty.');
        }
        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('The required parameter "requestObj.propertyName" was null or undefined when calling deleteSlidesDocumentProperty.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties/{propertyName}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "propertyName", ObjectSerializer.toString(requestObj.propertyName));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperties");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove background from a slide. 
     * @param requestObj contains request parameters
     */
    public async deleteSlidesSlideBackground(requestObj: requests.DeleteSlidesSlideBackgroundRequest): Promise<{response: http.ClientResponse, body: model.SlideBackground}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSlidesSlideBackground.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSlidesSlideBackground.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSlidesSlideBackground.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/background";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a paragraph (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async deleteSubshapeParagraph(requestObj: requests.DeleteSubshapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSubshapeParagraph.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSubshapeParagraph.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSubshapeParagraph.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteSubshapeParagraph.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling deleteSubshapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a range of paragraphs (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async deleteSubshapeParagraphs(requestObj: requests.DeleteSubshapeParagraphsRequest): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSubshapeParagraphs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSubshapeParagraphs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSubshapeParagraphs.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteSubshapeParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "paragraphs", requestObj.paragraphs);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a portion (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async deleteSubshapePortion(requestObj: requests.DeleteSubshapePortionRequest): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSubshapePortion.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSubshapePortion.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSubshapePortion.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteSubshapePortion.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling deleteSubshapePortion.');
        }
        // verify required parameter 'requestObj.portionIndex' is not null or undefined
        if (requestObj.portionIndex === null || requestObj.portionIndex === undefined) {
            throw new Error('The required parameter "requestObj.portionIndex" was null or undefined when calling deleteSubshapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(requestObj.portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove a range of portions (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async deleteSubshapePortions(requestObj: requests.DeleteSubshapePortionsRequest): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling deleteSubshapePortions.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling deleteSubshapePortions.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling deleteSubshapePortions.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling deleteSubshapePortions.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling deleteSubshapePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "portions", requestObj.portions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Download file 
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: requests.DownloadFileRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling downloadFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Get disc usage 
     * @param requestObj contains request parameters
     */
    public async getDiscUsage(requestObj: requests.GetDiscUsageRequest): Promise<{response: http.ClientResponse, body: model.DiscUsage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getDiscUsage.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/disc";
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DiscUsage");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Get file versions 
     * @param requestObj contains request parameters
     */
    public async getFileVersions(requestObj: requests.GetFileVersionsRequest): Promise<{response: http.ClientResponse, body: model.FileVersions}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getFileVersions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/version/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FileVersions");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Get all files and folders within a folder 
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: requests.GetFilesListRequest): Promise<{response: http.ClientResponse, body: model.FilesList}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getFilesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FilesList");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation layoutSlide info. 
     * @param requestObj contains request parameters
     */
    public async getLayoutSlide(requestObj: requests.GetLayoutSlideRequest): Promise<{response: http.ClientResponse, body: model.LayoutSlide}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getLayoutSlide.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getLayoutSlide.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getLayoutSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/layoutSlides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation layoutSlides info. 
     * @param requestObj contains request parameters
     */
    public async getLayoutSlidesList(requestObj: requests.GetLayoutSlidesListRequest): Promise<{response: http.ClientResponse, body: model.LayoutSlides}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getLayoutSlidesList.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getLayoutSlidesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/layoutSlides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlides");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation masterSlide info. 
     * @param requestObj contains request parameters
     */
    public async getMasterSlide(requestObj: requests.GetMasterSlideRequest): Promise<{response: http.ClientResponse, body: model.MasterSlide}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getMasterSlide.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getMasterSlide.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getMasterSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/masterSlides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "MasterSlide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation masterSlides info. 
     * @param requestObj contains request parameters
     */
    public async getMasterSlidesList(requestObj: requests.GetMasterSlidesListRequest): Promise<{response: http.ClientResponse, body: model.MasterSlides}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getMasterSlidesList.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getMasterSlidesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/masterSlides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "MasterSlides");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read notes slide info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlide(requestObj: requests.GetNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getNotesSlide.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getNotesSlide.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Get info whether a notes slide exists. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideExists(requestObj: requests.GetNotesSlideExistsRequest): Promise<{response: http.ClientResponse, body: model.EntityExists}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getNotesSlideExists.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getNotesSlideExists.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getNotesSlideExists.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/exist";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "EntityExists");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Get header/footer info for the notes slide. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideHeaderFooter(requestObj: requests.GetNotesSlideHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.NotesSlideHeaderFooter}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getNotesSlideHeaderFooter.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getNotesSlideHeaderFooter.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getNotesSlideHeaderFooter.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/headerFooter";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlideHeaderFooter");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide shape info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShape(requestObj: requests.GetNotesSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getNotesSlideShape.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getNotesSlideShape.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getNotesSlideShape.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getNotesSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read shape paragraph info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapeParagraph(requestObj: requests.GetNotesSlideShapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getNotesSlideShapeParagraph.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getNotesSlideShapeParagraph.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getNotesSlideShapeParagraph.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getNotesSlideShapeParagraph.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling getNotesSlideShapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read shape paragraphs info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapeParagraphs(requestObj: requests.GetNotesSlideShapeParagraphsRequest): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getNotesSlideShapeParagraphs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getNotesSlideShapeParagraphs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getNotesSlideShapeParagraphs.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getNotesSlideShapeParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read paragraph portion info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapePortion(requestObj: requests.GetNotesSlideShapePortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getNotesSlideShapePortion.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getNotesSlideShapePortion.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getNotesSlideShapePortion.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getNotesSlideShapePortion.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling getNotesSlideShapePortion.');
        }
        // verify required parameter 'requestObj.portionIndex' is not null or undefined
        if (requestObj.portionIndex === null || requestObj.portionIndex === undefined) {
            throw new Error('The required parameter "requestObj.portionIndex" was null or undefined when calling getNotesSlideShapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(requestObj.portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read paragraph portions info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapePortions(requestObj: requests.GetNotesSlideShapePortionsRequest): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getNotesSlideShapePortions.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getNotesSlideShapePortions.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getNotesSlideShapePortions.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getNotesSlideShapePortions.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling getNotesSlideShapePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide shapes info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapes(requestObj: requests.GetNotesSlideShapesRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getNotesSlideShapes.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getNotesSlideShapes.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getNotesSlideShapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Convert notes slide to the specified image format. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideWithFormat(requestObj: requests.GetNotesSlideWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getNotesSlideWithFormat.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getNotesSlideWithFormat.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getNotesSlideWithFormat.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling getNotesSlideWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read paragraph portion info. 
     * @param requestObj contains request parameters
     */
    public async getParagraphPortion(requestObj: requests.GetParagraphPortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getParagraphPortion.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getParagraphPortion.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getParagraphPortion.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getParagraphPortion.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling getParagraphPortion.');
        }
        // verify required parameter 'requestObj.portionIndex' is not null or undefined
        if (requestObj.portionIndex === null || requestObj.portionIndex === undefined) {
            throw new Error('The required parameter "requestObj.portionIndex" was null or undefined when calling getParagraphPortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(requestObj.portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read paragraph portions info. 
     * @param requestObj contains request parameters
     */
    public async getParagraphPortions(requestObj: requests.GetParagraphPortionsRequest): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getParagraphPortions.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getParagraphPortions.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getParagraphPortions.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getParagraphPortions.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling getParagraphPortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation sections info. 
     * @param requestObj contains request parameters
     */
    public async getSections(requestObj: requests.GetSectionsRequest): Promise<{response: http.ClientResponse, body: model.Sections}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSections.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSections.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide animation effects. 
     * @param requestObj contains request parameters
     */
    public async getSlideAnimation(requestObj: requests.GetSlideAnimationRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlideAnimation.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlideAnimation.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlideAnimation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeIndex", requestObj.shapeIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Get footer info for the slide. 
     * @param requestObj contains request parameters
     */
    public async getSlideHeaderFooter(requestObj: requests.GetSlideHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.HeaderFooter}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlideHeaderFooter.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlideHeaderFooter.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlideHeaderFooter.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/headerFooter";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "HeaderFooter");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide shape info. 
     * @param requestObj contains request parameters
     */
    public async getSlideShape(requestObj: requests.GetSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlideShape.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlideShape.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlideShape.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read shape paragraph info. 
     * @param requestObj contains request parameters
     */
    public async getSlideShapeParagraph(requestObj: requests.GetSlideShapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlideShapeParagraph.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlideShapeParagraph.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlideShapeParagraph.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getSlideShapeParagraph.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling getSlideShapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read shape paragraphs info. 
     * @param requestObj contains request parameters
     */
    public async getSlideShapeParagraphs(requestObj: requests.GetSlideShapeParagraphsRequest): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlideShapeParagraphs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlideShapeParagraphs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlideShapeParagraphs.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getSlideShapeParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide shapes info. 
     * @param requestObj contains request parameters
     */
    public async getSlideShapes(requestObj: requests.GetSlideShapesRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlideShapes.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlideShapes.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlideShapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide shape info (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async getSlideSubshape(requestObj: requests.GetSlideSubshapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlideSubshape.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlideSubshape.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlideSubshape.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getSlideSubshape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read shape paragraph info (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async getSlideSubshapeParagraph(requestObj: requests.GetSlideSubshapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlideSubshapeParagraph.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlideSubshapeParagraph.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlideSubshapeParagraph.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getSlideSubshapeParagraph.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling getSlideSubshapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read shape paragraphs info (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async getSlideSubshapeParagraphs(requestObj: requests.GetSlideSubshapeParagraphsRequest): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlideSubshapeParagraphs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlideSubshapeParagraphs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlideSubshapeParagraphs.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getSlideSubshapeParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide shapes info. 
     * @param requestObj contains request parameters
     */
    public async getSlideSubshapes(requestObj: requests.GetSlideSubshapesRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlideSubshapes.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlideSubshapes.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlideSubshapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Get API info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesApiInfo(): Promise<{response: http.ClientResponse, body: model.ApiInfo}> {
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/info";
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ApiInfo");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesDocument(requestObj: requests.GetSlidesDocumentRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesDocument.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesDocument.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation document properties. 
     * @param requestObj contains request parameters
     */
    public async getSlidesDocumentProperties(requestObj: requests.GetSlidesDocumentPropertiesRequest): Promise<{response: http.ClientResponse, body: model.DocumentProperties}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesDocumentProperties.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesDocumentProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperties");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation document property. 
     * @param requestObj contains request parameters
     */
    public async getSlidesDocumentProperty(requestObj: requests.GetSlidesDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.DocumentProperty}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesDocumentProperty.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesDocumentProperty.');
        }
        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('The required parameter "requestObj.propertyName" was null or undefined when calling getSlidesDocumentProperty.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties/{propertyName}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "propertyName", ObjectSerializer.toString(requestObj.propertyName));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperty");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Get image binary data. 
     * @param requestObj contains request parameters
     */
    public async getSlidesImageWithDefaultFormat(requestObj: requests.GetSlidesImageWithDefaultFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesImageWithDefaultFormat.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesImageWithDefaultFormat.');
        }
        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('The required parameter "requestObj.index" was null or undefined when calling getSlidesImageWithDefaultFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/images/{index}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "index", ObjectSerializer.toString(requestObj.index));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Get image in specified format. 
     * @param requestObj contains request parameters
     */
    public async getSlidesImageWithFormat(requestObj: requests.GetSlidesImageWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesImageWithFormat.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesImageWithFormat.');
        }
        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('The required parameter "requestObj.index" was null or undefined when calling getSlidesImageWithFormat.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling getSlidesImageWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/images/{index}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "index", ObjectSerializer.toString(requestObj.index));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation images info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesImages(requestObj: requests.GetSlidesImagesRequest): Promise<{response: http.ClientResponse, body: model.Images}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesImages.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesImages.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/images";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Images");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide placeholder info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesPlaceholder(requestObj: requests.GetSlidesPlaceholderRequest): Promise<{response: http.ClientResponse, body: model.Placeholder}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesPlaceholder.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesPlaceholder.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlidesPlaceholder.');
        }
        // verify required parameter 'requestObj.placeholderIndex' is not null or undefined
        if (requestObj.placeholderIndex === null || requestObj.placeholderIndex === undefined) {
            throw new Error('The required parameter "requestObj.placeholderIndex" was null or undefined when calling getSlidesPlaceholder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/placeholders/{placeholderIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "placeholderIndex", ObjectSerializer.toString(requestObj.placeholderIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Placeholder");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide placeholders info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesPlaceholders(requestObj: requests.GetSlidesPlaceholdersRequest): Promise<{response: http.ClientResponse, body: model.Placeholders}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesPlaceholders.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesPlaceholders.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlidesPlaceholders.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/placeholders";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Placeholders");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Extract presentation text items. 
     * @param requestObj contains request parameters
     */
    public async getSlidesPresentationTextItems(requestObj: requests.GetSlidesPresentationTextItemsRequest): Promise<{response: http.ClientResponse, body: model.TextItems}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesPresentationTextItems.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesPresentationTextItems.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/textItems";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withEmpty", requestObj.withEmpty);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "TextItems");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation protection properties. 
     * @param requestObj contains request parameters
     */
    public async getSlidesProtectionProperties(requestObj: requests.GetSlidesProtectionPropertiesRequest): Promise<{response: http.ClientResponse, body: model.ProtectionProperties}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesProtectionProperties.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesProtectionProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/protectionProperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ProtectionProperties");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation slide info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlide(requestObj: requests.GetSlidesSlideRequest): Promise<{response: http.ClientResponse, body: model.Slide}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesSlide.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesSlide.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlidesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide background info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideBackground(requestObj: requests.GetSlidesSlideBackgroundRequest): Promise<{response: http.ClientResponse, body: model.SlideBackground}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesSlideBackground.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesSlideBackground.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlidesSlideBackground.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/background";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation slide comments. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideComments(requestObj: requests.GetSlidesSlideCommentsRequest): Promise<{response: http.ClientResponse, body: model.SlideComments}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesSlideComments.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesSlideComments.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlidesSlideComments.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/comments";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideComments");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide images info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideImages(requestObj: requests.GetSlidesSlideImagesRequest): Promise<{response: http.ClientResponse, body: model.Images}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesSlideImages.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesSlideImages.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlidesSlideImages.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/images";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Images");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation slide properties. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideProperties(requestObj: requests.GetSlidesSlidePropertiesRequest): Promise<{response: http.ClientResponse, body: model.SlideProperties}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesSlideProperties.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesSlideProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slideProperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideProperties");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Extract slide text items. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideTextItems(requestObj: requests.GetSlidesSlideTextItemsRequest): Promise<{response: http.ClientResponse, body: model.TextItems}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesSlideTextItems.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesSlideTextItems.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlidesSlideTextItems.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/textItems";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withEmpty", requestObj.withEmpty);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "TextItems");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation slides info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlidesList(requestObj: requests.GetSlidesSlidesListRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesSlidesList.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesSlidesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide theme info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesTheme(requestObj: requests.GetSlidesThemeRequest): Promise<{response: http.ClientResponse, body: model.Theme}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesTheme.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesTheme.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlidesTheme.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/theme";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Theme");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide theme color scheme info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesThemeColorScheme(requestObj: requests.GetSlidesThemeColorSchemeRequest): Promise<{response: http.ClientResponse, body: model.ColorScheme}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesThemeColorScheme.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesThemeColorScheme.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlidesThemeColorScheme.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/theme/colorScheme";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ColorScheme");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide theme font scheme info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesThemeFontScheme(requestObj: requests.GetSlidesThemeFontSchemeRequest): Promise<{response: http.ClientResponse, body: model.FontScheme}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesThemeFontScheme.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesThemeFontScheme.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlidesThemeFontScheme.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/theme/fontScheme";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FontScheme");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide theme format scheme info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesThemeFormatScheme(requestObj: requests.GetSlidesThemeFormatSchemeRequest): Promise<{response: http.ClientResponse, body: model.FormatScheme}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesThemeFormatScheme.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesThemeFormatScheme.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSlidesThemeFormatScheme.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/theme/formatScheme";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FormatScheme");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation document properties. 
     * @param requestObj contains request parameters
     */
    public async getSlidesViewProperties(requestObj: requests.GetSlidesViewPropertiesRequest): Promise<{response: http.ClientResponse, body: model.ViewProperties}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSlidesViewProperties.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSlidesViewProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/viewProperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ViewProperties");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read paragraph portion info (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async getSubshapeParagraphPortion(requestObj: requests.GetSubshapeParagraphPortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSubshapeParagraphPortion.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSubshapeParagraphPortion.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSubshapeParagraphPortion.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getSubshapeParagraphPortion.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling getSubshapeParagraphPortion.');
        }
        // verify required parameter 'requestObj.portionIndex' is not null or undefined
        if (requestObj.portionIndex === null || requestObj.portionIndex === undefined) {
            throw new Error('The required parameter "requestObj.portionIndex" was null or undefined when calling getSubshapeParagraphPortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(requestObj.portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read paragraph portions info (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async getSubshapeParagraphPortions(requestObj: requests.GetSubshapeParagraphPortionsRequest): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling getSubshapeParagraphPortions.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling getSubshapeParagraphPortions.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling getSubshapeParagraphPortions.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling getSubshapeParagraphPortions.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling getSubshapeParagraphPortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Move file 
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: requests.MoveFileRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling moveFile.');
        }
        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('The required parameter "requestObj.srcPath" was null or undefined when calling moveFile.');
        }
        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('The required parameter "requestObj.destPath" was null or undefined when calling moveFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/move/{srcPath}";
        localVarPath = addPathParameterToUrl(localVarPath, "srcPath", ObjectSerializer.toString(requestObj.srcPath));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }
    /**
     * Move folder 
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: requests.MoveFolderRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling moveFolder.');
        }
        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('The required parameter "requestObj.srcPath" was null or undefined when calling moveFolder.');
        }
        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('The required parameter "requestObj.destPath" was null or undefined when calling moveFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/move/{srcPath}";
        localVarPath = addPathParameterToUrl(localVarPath, "srcPath", ObjectSerializer.toString(requestObj.srcPath));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }
    /**
     * Check if file or folder exists 
     * @param requestObj contains request parameters
     */
    public async objectExists(requestObj: requests.ObjectExistsRequest): Promise<{response: http.ClientResponse, body: model.ObjectExist}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling objectExists.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/exist/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ObjectExist");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Creates new paragraph. 
     * @param requestObj contains request parameters
     */
    public async postAddNewParagraph(requestObj: requests.PostAddNewParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postAddNewParagraph.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postAddNewParagraph.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postAddNewParagraph.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling postAddNewParagraph.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling postAddNewParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Creates new portion. 
     * @param requestObj contains request parameters
     */
    public async postAddNewPortion(requestObj: requests.PostAddNewPortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postAddNewPortion.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postAddNewPortion.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postAddNewPortion.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling postAddNewPortion.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling postAddNewPortion.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling postAddNewPortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Create new shape. 
     * @param requestObj contains request parameters
     */
    public async postAddNewShape(requestObj: requests.PostAddNewShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postAddNewShape.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postAddNewShape.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postAddNewShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeToClone", requestObj.shapeToClone);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Create new shape (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async postAddNewSubshape(requestObj: requests.PostAddNewSubshapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postAddNewSubshape.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postAddNewSubshape.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postAddNewSubshape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeToClone", requestObj.shapeToClone);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Creates new paragraph (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async postAddNewSubshapeParagraph(requestObj: requests.PostAddNewSubshapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postAddNewSubshapeParagraph.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postAddNewSubshapeParagraph.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postAddNewSubshapeParagraph.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling postAddNewSubshapeParagraph.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling postAddNewSubshapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Creates new portion (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async postAddNewSubshapePortion(requestObj: requests.PostAddNewSubshapePortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postAddNewSubshapePortion.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postAddNewSubshapePortion.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postAddNewSubshapePortion.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling postAddNewSubshapePortion.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling postAddNewSubshapePortion.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling postAddNewSubshapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Add new notes slide. 
     * @param requestObj contains request parameters
     */
    public async postAddNotesSlide(requestObj: requests.PostAddNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postAddNotesSlide.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postAddNotesSlide.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postAddNotesSlide.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling postAddNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Add a new category to a chart. 
     * @param requestObj contains request parameters
     */
    public async postChartCategory(requestObj: requests.PostChartCategoryRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postChartCategory.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postChartCategory.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postChartCategory.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling postChartCategory.');
        }
        // verify required parameter 'requestObj.category' is not null or undefined
        if (requestObj.category === null || requestObj.category === undefined) {
            throw new Error('The required parameter "requestObj.category" was null or undefined when calling postChartCategory.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/categories";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.category
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Add a new data point to a chart series. 
     * @param requestObj contains request parameters
     */
    public async postChartDataPoint(requestObj: requests.PostChartDataPointRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postChartDataPoint.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postChartDataPoint.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postChartDataPoint.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling postChartDataPoint.');
        }
        // verify required parameter 'requestObj.seriesIndex' is not null or undefined
        if (requestObj.seriesIndex === null || requestObj.seriesIndex === undefined) {
            throw new Error('The required parameter "requestObj.seriesIndex" was null or undefined when calling postChartDataPoint.');
        }
        // verify required parameter 'requestObj.dataPoint' is not null or undefined
        if (requestObj.dataPoint === null || requestObj.dataPoint === undefined) {
            throw new Error('The required parameter "requestObj.dataPoint" was null or undefined when calling postChartDataPoint.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/series/{seriesIndex}/dataPoints";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "seriesIndex", ObjectSerializer.toString(requestObj.seriesIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dataPoint
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Add a new series to a chart. 
     * @param requestObj contains request parameters
     */
    public async postChartSeries(requestObj: requests.PostChartSeriesRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postChartSeries.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postChartSeries.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postChartSeries.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling postChartSeries.');
        }
        // verify required parameter 'requestObj.series' is not null or undefined
        if (requestObj.series === null || requestObj.series === undefined) {
            throw new Error('The required parameter "requestObj.series" was null or undefined when calling postChartSeries.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/series";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.series
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Copy layoutSlide from source presentation. 
     * @param requestObj contains request parameters
     */
    public async postCopyLayoutSlideFromSourcePresentation(requestObj: requests.PostCopyLayoutSlideFromSourcePresentationRequest): Promise<{response: http.ClientResponse, body: model.LayoutSlide}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postCopyLayoutSlideFromSourcePresentation.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postCopyLayoutSlideFromSourcePresentation.');
        }
        // verify required parameter 'requestObj.cloneFrom' is not null or undefined
        if (requestObj.cloneFrom === null || requestObj.cloneFrom === undefined) {
            throw new Error('The required parameter "requestObj.cloneFrom" was null or undefined when calling postCopyLayoutSlideFromSourcePresentation.');
        }
        // verify required parameter 'requestObj.cloneFromPosition' is not null or undefined
        if (requestObj.cloneFromPosition === null || requestObj.cloneFromPosition === undefined) {
            throw new Error('The required parameter "requestObj.cloneFromPosition" was null or undefined when calling postCopyLayoutSlideFromSourcePresentation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/layoutSlides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFrom", requestObj.cloneFrom);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromPosition", requestObj.cloneFromPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromStorage", requestObj.cloneFromStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "cloneFromPassword", requestObj.cloneFromPassword);
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Copy masterSlide from source presentation. 
     * @param requestObj contains request parameters
     */
    public async postCopyMasterSlideFromSourcePresentation(requestObj: requests.PostCopyMasterSlideFromSourcePresentationRequest): Promise<{response: http.ClientResponse, body: model.MasterSlide}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postCopyMasterSlideFromSourcePresentation.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postCopyMasterSlideFromSourcePresentation.');
        }
        // verify required parameter 'requestObj.cloneFrom' is not null or undefined
        if (requestObj.cloneFrom === null || requestObj.cloneFrom === undefined) {
            throw new Error('The required parameter "requestObj.cloneFrom" was null or undefined when calling postCopyMasterSlideFromSourcePresentation.');
        }
        // verify required parameter 'requestObj.cloneFromPosition' is not null or undefined
        if (requestObj.cloneFromPosition === null || requestObj.cloneFromPosition === undefined) {
            throw new Error('The required parameter "requestObj.cloneFromPosition" was null or undefined when calling postCopyMasterSlideFromSourcePresentation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/masterSlides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFrom", requestObj.cloneFrom);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromPosition", requestObj.cloneFromPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromStorage", requestObj.cloneFromStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "applyToAll", requestObj.applyToAll);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "cloneFromPassword", requestObj.cloneFromPassword);
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "MasterSlide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read notes slide info. 
     * @param requestObj contains request parameters
     */
    public async postGetNotesSlide(requestObj: requests.PostGetNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postGetNotesSlide.');
        }
        // verify required parameter 'requestObj.document' is not null or undefined
        if (requestObj.document === null || requestObj.document === undefined) {
            throw new Error('The required parameter "requestObj.document" was null or undefined when calling postGetNotesSlide.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postGetNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        if (requestObj.document != null) 
        {
            localVarFiles.push(requestObj.document);
        }
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Get info whether a notes slide exists. 
     * @param requestObj contains request parameters
     */
    public async postGetNotesSlideExists(requestObj: requests.PostGetNotesSlideExistsRequest): Promise<{response: http.ClientResponse, body: model.EntityExists}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postGetNotesSlideExists.');
        }
        // verify required parameter 'requestObj.document' is not null or undefined
        if (requestObj.document === null || requestObj.document === undefined) {
            throw new Error('The required parameter "requestObj.document" was null or undefined when calling postGetNotesSlideExists.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postGetNotesSlideExists.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/slides/{slideIndex}/notesSlide/exist";
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        if (requestObj.document != null) 
        {
            localVarFiles.push(requestObj.document);
        }
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "EntityExists");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Convert notes slide to the specified image format. 
     * @param requestObj contains request parameters
     */
    public async postGetNotesSlideWithFormat(requestObj: requests.PostGetNotesSlideWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postGetNotesSlideWithFormat.');
        }
        // verify required parameter 'requestObj.document' is not null or undefined
        if (requestObj.document === null || requestObj.document === undefined) {
            throw new Error('The required parameter "requestObj.document" was null or undefined when calling postGetNotesSlideWithFormat.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postGetNotesSlideWithFormat.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling postGetNotesSlideWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/slides/{slideIndex}/notesSlide/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        if (requestObj.document != null) 
        {
            localVarFiles.push(requestObj.document);
        }
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Creates new paragraph. 
     * @param requestObj contains request parameters
     */
    public async postNotesSlideAddNewParagraph(requestObj: requests.PostNotesSlideAddNewParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postNotesSlideAddNewParagraph.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postNotesSlideAddNewParagraph.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postNotesSlideAddNewParagraph.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling postNotesSlideAddNewParagraph.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling postNotesSlideAddNewParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Creates new portion. 
     * @param requestObj contains request parameters
     */
    public async postNotesSlideAddNewPortion(requestObj: requests.PostNotesSlideAddNewPortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postNotesSlideAddNewPortion.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postNotesSlideAddNewPortion.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postNotesSlideAddNewPortion.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling postNotesSlideAddNewPortion.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling postNotesSlideAddNewPortion.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling postNotesSlideAddNewPortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Create new shape. 
     * @param requestObj contains request parameters
     */
    public async postNotesSlideAddNewShape(requestObj: requests.PostNotesSlideAddNewShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postNotesSlideAddNewShape.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postNotesSlideAddNewShape.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postNotesSlideAddNewShape.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling postNotesSlideAddNewShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeToClone", requestObj.shapeToClone);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async postNotesSlideShapeSaveAs(requestObj: requests.PostNotesSlideShapeSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.options,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Merge the presentation with other presentations specified in the request parameter. 
     * @param requestObj contains request parameters
     */
    public async postPresentationMerge(requestObj: requests.PostPresentationMergeRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postPresentationMerge.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postPresentationMerge.');
        }
        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('The required parameter "requestObj.request" was null or undefined when calling postPresentationMerge.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/merge";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.request
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Create a section starting at a specified slide index. 
     * @param requestObj contains request parameters
     */
    public async postSection(requestObj: requests.PostSectionRequest): Promise<{response: http.ClientResponse, body: model.Sections}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSection.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSection.');
        }
        // verify required parameter 'requestObj.sectionName' is not null or undefined
        if (requestObj.sectionName === null || requestObj.sectionName === undefined) {
            throw new Error('The required parameter "requestObj.sectionName" was null or undefined when calling postSection.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postSection.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sectionName", requestObj.sectionName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slideIndex", requestObj.slideIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Move presentation section to a specified position. 
     * @param requestObj contains request parameters
     */
    public async postSectionMove(requestObj: requests.PostSectionMoveRequest): Promise<{response: http.ClientResponse, body: model.Sections}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSectionMove.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSectionMove.');
        }
        // verify required parameter 'requestObj.sectionIndex' is not null or undefined
        if (requestObj.sectionIndex === null || requestObj.sectionIndex === undefined) {
            throw new Error('The required parameter "requestObj.sectionIndex" was null or undefined when calling postSectionMove.');
        }
        // verify required parameter 'requestObj.newPosition' is not null or undefined
        if (requestObj.newPosition === null || requestObj.newPosition === undefined) {
            throw new Error('The required parameter "requestObj.newPosition" was null or undefined when calling postSectionMove.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections/{sectionIndex}/move";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "sectionIndex", ObjectSerializer.toString(requestObj.sectionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newPosition", requestObj.newPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async postShapeSaveAs(requestObj: requests.PostShapeSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postShapeSaveAs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postShapeSaveAs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postShapeSaveAs.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling postShapeSaveAs.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling postShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.options,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Add an effect to slide animation. 
     * @param requestObj contains request parameters
     */
    public async postSlideAnimationEffect(requestObj: requests.PostSlideAnimationEffectRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlideAnimationEffect.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlideAnimationEffect.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postSlideAnimationEffect.');
        }
        // verify required parameter 'requestObj.effect' is not null or undefined
        if (requestObj.effect === null || requestObj.effect === undefined) {
            throw new Error('The required parameter "requestObj.effect" was null or undefined when calling postSlideAnimationEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/mainSequence";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.effect
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Set slide animation. 
     * @param requestObj contains request parameters
     */
    public async postSlideAnimationInteractiveSequence(requestObj: requests.PostSlideAnimationInteractiveSequenceRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'requestObj.sequence' is not null or undefined
        if (requestObj.sequence === null || requestObj.sequence === undefined) {
            throw new Error('The required parameter "requestObj.sequence" was null or undefined when calling postSlideAnimationInteractiveSequence.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.sequence
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Add an animation effect to a slide interactive sequence. 
     * @param requestObj contains request parameters
     */
    public async postSlideAnimationInteractiveSequenceEffect(requestObj: requests.PostSlideAnimationInteractiveSequenceEffectRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'requestObj.sequenceIndex' is not null or undefined
        if (requestObj.sequenceIndex === null || requestObj.sequenceIndex === undefined) {
            throw new Error('The required parameter "requestObj.sequenceIndex" was null or undefined when calling postSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'requestObj.effect' is not null or undefined
        if (requestObj.effect === null || requestObj.effect === undefined) {
            throw new Error('The required parameter "requestObj.effect" was null or undefined when calling postSlideAnimationInteractiveSequenceEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences/{sequenceIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "sequenceIndex", ObjectSerializer.toString(requestObj.sequenceIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.effect
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Save a slide to a specified format. 
     * @param requestObj contains request parameters
     */
    public async postSlideSaveAs(requestObj: requests.PostSlideSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlideSaveAs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlideSaveAs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postSlideSaveAs.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling postSlideSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.options,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Create a slide. 
     * @param requestObj contains request parameters
     */
    public async postSlidesAdd(requestObj: requests.PostSlidesAddRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesAdd.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesAdd.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "layoutAlias", requestObj.layoutAlias);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Convert presentation from request content to format specified. 
     * @param requestObj contains request parameters
     */
    public async postSlidesConvert(requestObj: requests.PostSlidesConvertRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesConvert.');
        }
        // verify required parameter 'requestObj.document' is not null or undefined
        if (requestObj.document === null || requestObj.document === undefined) {
            throw new Error('The required parameter "requestObj.document" was null or undefined when calling postSlidesConvert.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling postSlidesConvert.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/convert/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        if (requestObj.document != null) 
        {
            localVarFiles.push(requestObj.document);
        }
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Copy a slide from the current or another presentation. 
     * @param requestObj contains request parameters
     */
    public async postSlidesCopy(requestObj: requests.PostSlidesCopyRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesCopy.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesCopy.');
        }
        // verify required parameter 'requestObj.slideToCopy' is not null or undefined
        if (requestObj.slideToCopy === null || requestObj.slideToCopy === undefined) {
            throw new Error('The required parameter "requestObj.slideToCopy" was null or undefined when calling postSlidesCopy.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/copy";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slideToCopy", requestObj.slideToCopy);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "source", requestObj.source);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourceStorage", requestObj.sourceStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "sourcePassword", requestObj.sourcePassword);
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Create a presentation. 
     * @param requestObj contains request parameters
     */
    public async postSlidesDocument(requestObj: requests.PostSlidesDocumentRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesDocument.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesDocument.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "inputPassword", requestObj.inputPassword);
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        if (requestObj.data != null) 
        {
            localVarFiles.push(requestObj.data);
        }
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Create presentation document from html. 
     * @param requestObj contains request parameters
     */
    public async postSlidesDocumentFromHtml(requestObj: requests.PostSlidesDocumentFromHtmlRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesDocumentFromHtml.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesDocumentFromHtml.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromHtml";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            body: requestObj.html,
            json: false
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(JSON.parse(response.body), "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Create presentation document from pdf or append pdf to an existing presentation. 
     * @param requestObj contains request parameters
     */
    public async postSlidesDocumentFromPdf(requestObj: requests.PostSlidesDocumentFromPdfRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesDocumentFromPdf.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesDocumentFromPdf.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromPdf";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        if (requestObj.pdf != null) 
        {
            localVarFiles.push(requestObj.pdf);
        }
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Create a presentation from an existing source. 
     * @param requestObj contains request parameters
     */
    public async postSlidesDocumentFromSource(requestObj: requests.PostSlidesDocumentFromSourceRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesDocumentFromSource.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesDocumentFromSource.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromSource";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourcePath", requestObj.sourcePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourceStorage", requestObj.sourceStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "sourcePassword", requestObj.sourcePassword);
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Create a presentation. 
     * @param requestObj contains request parameters
     */
    public async postSlidesDocumentFromTemplate(requestObj: requests.PostSlidesDocumentFromTemplateRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesDocumentFromTemplate.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesDocumentFromTemplate.');
        }
        // verify required parameter 'requestObj.templatePath' is not null or undefined
        if (requestObj.templatePath === null || requestObj.templatePath === undefined) {
            throw new Error('The required parameter "requestObj.templatePath" was null or undefined when calling postSlidesDocumentFromTemplate.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromTemplate";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "templatePath", requestObj.templatePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "templateStorage", requestObj.templateStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isImageDataEmbedded", requestObj.isImageDataEmbedded);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            body: requestObj.data,
            json: false
        };
        addHeaderParameter(requestOptions.headers, "templatePassword", requestObj.templatePassword);
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(JSON.parse(response.body), "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Performs slides pipeline. 
     * @param requestObj contains request parameters
     */
    public async postSlidesPipeline(requestObj: requests.PostSlidesPipelineRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesPipeline.');
        }
        // verify required parameter 'requestObj.pipeline' is not null or undefined
        if (requestObj.pipeline === null || requestObj.pipeline === undefined) {
            throw new Error('The required parameter "requestObj.pipeline" was null or undefined when calling postSlidesPipeline.');
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Replace text with a new value. 
     * @param requestObj contains request parameters
     */
    public async postSlidesPresentationReplaceText(requestObj: requests.PostSlidesPresentationReplaceTextRequest): Promise<{response: http.ClientResponse, body: model.DocumentReplaceResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesPresentationReplaceText.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesPresentationReplaceText.');
        }
        // verify required parameter 'requestObj.oldValue' is not null or undefined
        if (requestObj.oldValue === null || requestObj.oldValue === undefined) {
            throw new Error('The required parameter "requestObj.oldValue" was null or undefined when calling postSlidesPresentationReplaceText.');
        }
        // verify required parameter 'requestObj.newValue' is not null or undefined
        if (requestObj.newValue === null || requestObj.newValue === undefined) {
            throw new Error('The required parameter "requestObj.newValue" was null or undefined when calling postSlidesPresentationReplaceText.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/replaceText";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldValue", requestObj.oldValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newValue", requestObj.newValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreCase", requestObj.ignoreCase);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentReplaceResult");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Reorder presentation slide position. 
     * @param requestObj contains request parameters
     */
    public async postSlidesReorder(requestObj: requests.PostSlidesReorderRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesReorder.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesReorder.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postSlidesReorder.');
        }
        // verify required parameter 'requestObj.newPosition' is not null or undefined
        if (requestObj.newPosition === null || requestObj.newPosition === undefined) {
            throw new Error('The required parameter "requestObj.newPosition" was null or undefined when calling postSlidesReorder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/move";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newPosition", requestObj.newPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Reorder presentation slides positions. 
     * @param requestObj contains request parameters
     */
    public async postSlidesReorderMany(requestObj: requests.PostSlidesReorderManyRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesReorderMany.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesReorderMany.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/reorder";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldPositions", requestObj.oldPositions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newPositions", requestObj.newPositions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Save a presentation to a specified format. 
     * @param requestObj contains request parameters
     */
    public async postSlidesSaveAs(requestObj: requests.PostSlidesSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesSaveAs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesSaveAs.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling postSlidesSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.options,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Set document properties. 
     * @param requestObj contains request parameters
     */
    public async postSlidesSetDocumentProperties(requestObj: requests.PostSlidesSetDocumentPropertiesRequest): Promise<{response: http.ClientResponse, body: model.DocumentProperties}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesSetDocumentProperties.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesSetDocumentProperties.');
        }
        // verify required parameter 'requestObj.properties' is not null or undefined
        if (requestObj.properties === null || requestObj.properties === undefined) {
            throw new Error('The required parameter "requestObj.properties" was null or undefined when calling postSlidesSetDocumentProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.properties
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperties");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Replace text with a new value. 
     * @param requestObj contains request parameters
     */
    public async postSlidesSlideReplaceText(requestObj: requests.PostSlidesSlideReplaceTextRequest): Promise<{response: http.ClientResponse, body: model.SlideReplaceResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesSlideReplaceText.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesSlideReplaceText.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postSlidesSlideReplaceText.');
        }
        // verify required parameter 'requestObj.oldValue' is not null or undefined
        if (requestObj.oldValue === null || requestObj.oldValue === undefined) {
            throw new Error('The required parameter "requestObj.oldValue" was null or undefined when calling postSlidesSlideReplaceText.');
        }
        // verify required parameter 'requestObj.newValue' is not null or undefined
        if (requestObj.newValue === null || requestObj.newValue === undefined) {
            throw new Error('The required parameter "requestObj.newValue" was null or undefined when calling postSlidesSlideReplaceText.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/replaceText";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldValue", requestObj.oldValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newValue", requestObj.newValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreCase", requestObj.ignoreCase);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideReplaceResult");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Splitting presentations. Create one image per slide. 
     * @param requestObj contains request parameters
     */
    public async postSlidesSplit(requestObj: requests.PostSlidesSplitRequest): Promise<{response: http.ClientResponse, body: model.SplitDocumentResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSlidesSplit.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSlidesSplit.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/split";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "to", requestObj.to);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "from", requestObj.from);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFolder", requestObj.destFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.options
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SplitDocumentResult");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Render shape to specified picture format (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async postSubshapeSaveAs(requestObj: requests.PostSubshapeSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling postSubshapeSaveAs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling postSubshapeSaveAs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling postSubshapeSaveAs.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling postSubshapeSaveAs.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling postSubshapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.options,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update a chart category. 
     * @param requestObj contains request parameters
     */
    public async putChartCategory(requestObj: requests.PutChartCategoryRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putChartCategory.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putChartCategory.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putChartCategory.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putChartCategory.');
        }
        // verify required parameter 'requestObj.categoryIndex' is not null or undefined
        if (requestObj.categoryIndex === null || requestObj.categoryIndex === undefined) {
            throw new Error('The required parameter "requestObj.categoryIndex" was null or undefined when calling putChartCategory.');
        }
        // verify required parameter 'requestObj.category' is not null or undefined
        if (requestObj.category === null || requestObj.category === undefined) {
            throw new Error('The required parameter "requestObj.category" was null or undefined when calling putChartCategory.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/categories/{categoryIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "categoryIndex", ObjectSerializer.toString(requestObj.categoryIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.category
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update a data point in a chart series. 
     * @param requestObj contains request parameters
     */
    public async putChartDataPoint(requestObj: requests.PutChartDataPointRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putChartDataPoint.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putChartDataPoint.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putChartDataPoint.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putChartDataPoint.');
        }
        // verify required parameter 'requestObj.seriesIndex' is not null or undefined
        if (requestObj.seriesIndex === null || requestObj.seriesIndex === undefined) {
            throw new Error('The required parameter "requestObj.seriesIndex" was null or undefined when calling putChartDataPoint.');
        }
        // verify required parameter 'requestObj.pointIndex' is not null or undefined
        if (requestObj.pointIndex === null || requestObj.pointIndex === undefined) {
            throw new Error('The required parameter "requestObj.pointIndex" was null or undefined when calling putChartDataPoint.');
        }
        // verify required parameter 'requestObj.dataPoint' is not null or undefined
        if (requestObj.dataPoint === null || requestObj.dataPoint === undefined) {
            throw new Error('The required parameter "requestObj.dataPoint" was null or undefined when calling putChartDataPoint.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/series/{seriesIndex}/dataPoints/{pointIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "seriesIndex", ObjectSerializer.toString(requestObj.seriesIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "pointIndex", ObjectSerializer.toString(requestObj.pointIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dataPoint
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update a series in a chart. 
     * @param requestObj contains request parameters
     */
    public async putChartSeries(requestObj: requests.PutChartSeriesRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putChartSeries.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putChartSeries.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putChartSeries.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putChartSeries.');
        }
        // verify required parameter 'requestObj.seriesIndex' is not null or undefined
        if (requestObj.seriesIndex === null || requestObj.seriesIndex === undefined) {
            throw new Error('The required parameter "requestObj.seriesIndex" was null or undefined when calling putChartSeries.');
        }
        // verify required parameter 'requestObj.series' is not null or undefined
        if (requestObj.series === null || requestObj.series === undefined) {
            throw new Error('The required parameter "requestObj.series" was null or undefined when calling putChartSeries.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/series/{seriesIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "seriesIndex", ObjectSerializer.toString(requestObj.seriesIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.series
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update a layoutSlide. 
     * @param requestObj contains request parameters
     */
    public async putLayoutSlide(requestObj: requests.PutLayoutSlideRequest): Promise<{response: http.ClientResponse, body: model.LayoutSlide}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putLayoutSlide.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putLayoutSlide.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putLayoutSlide.');
        }
        // verify required parameter 'requestObj.slideDto' is not null or undefined
        if (requestObj.slideDto === null || requestObj.slideDto === undefined) {
            throw new Error('The required parameter "requestObj.slideDto" was null or undefined when calling putLayoutSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/layoutSlides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.slideDto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Set header/footer the notes slide. 
     * @param requestObj contains request parameters
     */
    public async putNotesSlideHeaderFooter(requestObj: requests.PutNotesSlideHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.NotesSlideHeaderFooter}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putNotesSlideHeaderFooter.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putNotesSlideHeaderFooter.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putNotesSlideHeaderFooter.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putNotesSlideHeaderFooter.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/headerFooter";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlideHeaderFooter");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async putNotesSlideShapeSaveAs(requestObj: requests.PutNotesSlideShapeSaveAsRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'requestObj.outPath' is not null or undefined
        if (requestObj.outPath === null || requestObj.outPath === undefined) {
            throw new Error('The required parameter "requestObj.outPath" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.options
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }
    /**
     * Merge the presentation with other presentations or some of their slides specified in the request parameter. 
     * @param requestObj contains request parameters
     */
    public async putPresentationMerge(requestObj: requests.PutPresentationMergeRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putPresentationMerge.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putPresentationMerge.');
        }
        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('The required parameter "requestObj.request" was null or undefined when calling putPresentationMerge.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/merge";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.request
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update section name. 
     * @param requestObj contains request parameters
     */
    public async putSection(requestObj: requests.PutSectionRequest): Promise<{response: http.ClientResponse, body: model.Sections}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSection.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSection.');
        }
        // verify required parameter 'requestObj.sectionIndex' is not null or undefined
        if (requestObj.sectionIndex === null || requestObj.sectionIndex === undefined) {
            throw new Error('The required parameter "requestObj.sectionIndex" was null or undefined when calling putSection.');
        }
        // verify required parameter 'requestObj.sectionName' is not null or undefined
        if (requestObj.sectionName === null || requestObj.sectionName === undefined) {
            throw new Error('The required parameter "requestObj.sectionName" was null or undefined when calling putSection.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections/{sectionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "sectionIndex", ObjectSerializer.toString(requestObj.sectionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sectionName", requestObj.sectionName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Replace existing presentation sections with the ones provided in the sections DTO. 
     * @param requestObj contains request parameters
     */
    public async putSections(requestObj: requests.PutSectionsRequest): Promise<{response: http.ClientResponse, body: model.Sections}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSections.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSections.');
        }
        // verify required parameter 'requestObj.sections' is not null or undefined
        if (requestObj.sections === null || requestObj.sections === undefined) {
            throw new Error('The required parameter "requestObj.sections" was null or undefined when calling putSections.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.sections
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update portion properties. 
     * @param requestObj contains request parameters
     */
    public async putSetParagraphPortionProperties(requestObj: requests.PutSetParagraphPortionPropertiesRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        // verify required parameter 'requestObj.portionIndex' is not null or undefined
        if (requestObj.portionIndex === null || requestObj.portionIndex === undefined) {
            throw new Error('The required parameter "requestObj.portionIndex" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(requestObj.portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update paragraph properties. 
     * @param requestObj contains request parameters
     */
    public async putSetParagraphProperties(requestObj: requests.PutSetParagraphPropertiesRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSetParagraphProperties.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSetParagraphProperties.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSetParagraphProperties.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putSetParagraphProperties.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling putSetParagraphProperties.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putSetParagraphProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update portion properties (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async putSetSubshapeParagraphPortionProperties(requestObj: requests.PutSetSubshapeParagraphPortionPropertiesRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSetSubshapeParagraphPortionProperties.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSetSubshapeParagraphPortionProperties.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSetSubshapeParagraphPortionProperties.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putSetSubshapeParagraphPortionProperties.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling putSetSubshapeParagraphPortionProperties.');
        }
        // verify required parameter 'requestObj.portionIndex' is not null or undefined
        if (requestObj.portionIndex === null || requestObj.portionIndex === undefined) {
            throw new Error('The required parameter "requestObj.portionIndex" was null or undefined when calling putSetSubshapeParagraphPortionProperties.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putSetSubshapeParagraphPortionProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(requestObj.portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update paragraph properties (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async putSetSubshapeParagraphProperties(requestObj: requests.PutSetSubshapeParagraphPropertiesRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSetSubshapeParagraphProperties.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSetSubshapeParagraphProperties.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSetSubshapeParagraphProperties.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putSetSubshapeParagraphProperties.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling putSetSubshapeParagraphProperties.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putSetSubshapeParagraphProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async putShapeSaveAs(requestObj: requests.PutShapeSaveAsRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putShapeSaveAs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putShapeSaveAs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putShapeSaveAs.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putShapeSaveAs.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling putShapeSaveAs.');
        }
        // verify required parameter 'requestObj.outPath' is not null or undefined
        if (requestObj.outPath === null || requestObj.outPath === undefined) {
            throw new Error('The required parameter "requestObj.outPath" was null or undefined when calling putShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.options
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }
    /**
     * Set slide animation. 
     * @param requestObj contains request parameters
     */
    public async putSlideAnimation(requestObj: requests.PutSlideAnimationRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlideAnimation.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlideAnimation.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSlideAnimation.');
        }
        // verify required parameter 'requestObj.animation' is not null or undefined
        if (requestObj.animation === null || requestObj.animation === undefined) {
            throw new Error('The required parameter "requestObj.animation" was null or undefined when calling putSlideAnimation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.animation
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Modify an animation effect for a slide. 
     * @param requestObj contains request parameters
     */
    public async putSlideAnimationEffect(requestObj: requests.PutSlideAnimationEffectRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlideAnimationEffect.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlideAnimationEffect.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSlideAnimationEffect.');
        }
        // verify required parameter 'requestObj.effectIndex' is not null or undefined
        if (requestObj.effectIndex === null || requestObj.effectIndex === undefined) {
            throw new Error('The required parameter "requestObj.effectIndex" was null or undefined when calling putSlideAnimationEffect.');
        }
        // verify required parameter 'requestObj.effect' is not null or undefined
        if (requestObj.effect === null || requestObj.effect === undefined) {
            throw new Error('The required parameter "requestObj.effect" was null or undefined when calling putSlideAnimationEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/mainSequence/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "effectIndex", ObjectSerializer.toString(requestObj.effectIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.effect
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Modify an animation effect for a slide interactive sequence. 
     * @param requestObj contains request parameters
     */
    public async putSlideAnimationInteractiveSequenceEffect(requestObj: requests.PutSlideAnimationInteractiveSequenceEffectRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'requestObj.sequenceIndex' is not null or undefined
        if (requestObj.sequenceIndex === null || requestObj.sequenceIndex === undefined) {
            throw new Error('The required parameter "requestObj.sequenceIndex" was null or undefined when calling putSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'requestObj.effectIndex' is not null or undefined
        if (requestObj.effectIndex === null || requestObj.effectIndex === undefined) {
            throw new Error('The required parameter "requestObj.effectIndex" was null or undefined when calling putSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'requestObj.effect' is not null or undefined
        if (requestObj.effect === null || requestObj.effect === undefined) {
            throw new Error('The required parameter "requestObj.effect" was null or undefined when calling putSlideAnimationInteractiveSequenceEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences/{sequenceIndex}/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "sequenceIndex", ObjectSerializer.toString(requestObj.sequenceIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "effectIndex", ObjectSerializer.toString(requestObj.effectIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.effect
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Set footer the slide. 
     * @param requestObj contains request parameters
     */
    public async putSlideHeaderFooter(requestObj: requests.PutSlideHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.HeaderFooter}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlideHeaderFooter.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlideHeaderFooter.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSlideHeaderFooter.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putSlideHeaderFooter.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/headerFooter";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "HeaderFooter");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Save a slide to a specified format. 
     * @param requestObj contains request parameters
     */
    public async putSlideSaveAs(requestObj: requests.PutSlideSaveAsRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlideSaveAs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlideSaveAs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSlideSaveAs.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling putSlideSaveAs.');
        }
        // verify required parameter 'requestObj.outPath' is not null or undefined
        if (requestObj.outPath === null || requestObj.outPath === undefined) {
            throw new Error('The required parameter "requestObj.outPath" was null or undefined when calling putSlideSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.options
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }
    /**
     * Update shape properties. 
     * @param requestObj contains request parameters
     */
    public async putSlideShapeInfo(requestObj: requests.PutSlideShapeInfoRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlideShapeInfo.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlideShapeInfo.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSlideShapeInfo.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putSlideShapeInfo.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putSlideShapeInfo.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update shape properties (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async putSlideSubshapeInfo(requestObj: requests.PutSlideSubshapeInfoRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlideSubshapeInfo.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlideSubshapeInfo.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSlideSubshapeInfo.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putSlideSubshapeInfo.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putSlideSubshapeInfo.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Convert presentation from request content to format specified. 
     * @param requestObj contains request parameters
     */
    public async putSlidesConvert(requestObj: requests.PutSlidesConvertRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlidesConvert.');
        }
        // verify required parameter 'requestObj.document' is not null or undefined
        if (requestObj.document === null || requestObj.document === undefined) {
            throw new Error('The required parameter "requestObj.document" was null or undefined when calling putSlidesConvert.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling putSlidesConvert.');
        }
        // verify required parameter 'requestObj.outPath' is not null or undefined
        if (requestObj.outPath === null || requestObj.outPath === undefined) {
            throw new Error('The required parameter "requestObj.outPath" was null or undefined when calling putSlidesConvert.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/convert/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        if (requestObj.document != null) 
        {
            localVarFiles.push(requestObj.document);
        }
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }
    /**
     * Update presentation document from html. 
     * @param requestObj contains request parameters
     */
    public async putSlidesDocumentFromHtml(requestObj: requests.PutSlidesDocumentFromHtmlRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlidesDocumentFromHtml.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlidesDocumentFromHtml.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromHtml";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            body: requestObj.html,
            json: false
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(JSON.parse(response.body), "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Set footers for all slides in a presentation. 
     * @param requestObj contains request parameters
     */
    public async putSlidesHeaderFooter(requestObj: requests.PutSlidesHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlidesHeaderFooter.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlidesHeaderFooter.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putSlidesHeaderFooter.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/headerFooter";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update presentation protection properties. 
     * @param requestObj contains request parameters
     */
    public async putSlidesProtectionProperties(requestObj: requests.PutSlidesProtectionPropertiesRequest): Promise<{response: http.ClientResponse, body: model.ProtectionProperties}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlidesProtectionProperties.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlidesProtectionProperties.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putSlidesProtectionProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/protectionProperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ProtectionProperties");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Save a presentation to a specified format. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSaveAs(requestObj: requests.PutSlidesSaveAsRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlidesSaveAs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlidesSaveAs.');
        }
        // verify required parameter 'requestObj.outPath' is not null or undefined
        if (requestObj.outPath === null || requestObj.outPath === undefined) {
            throw new Error('The required parameter "requestObj.outPath" was null or undefined when calling putSlidesSaveAs.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling putSlidesSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.options
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }
    /**
     * Set document property. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSetDocumentProperty(requestObj: requests.PutSlidesSetDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.DocumentProperty}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlidesSetDocumentProperty.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlidesSetDocumentProperty.');
        }
        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('The required parameter "requestObj.propertyName" was null or undefined when calling putSlidesSetDocumentProperty.');
        }
        // verify required parameter 'requestObj.property' is not null or undefined
        if (requestObj.property === null || requestObj.property === undefined) {
            throw new Error('The required parameter "requestObj.property" was null or undefined when calling putSlidesSetDocumentProperty.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties/{propertyName}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "propertyName", ObjectSerializer.toString(requestObj.propertyName));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.property
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperty");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update a slide. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSlide(requestObj: requests.PutSlidesSlideRequest): Promise<{response: http.ClientResponse, body: model.Slide}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlidesSlide.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlidesSlide.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSlidesSlide.');
        }
        // verify required parameter 'requestObj.slideDto' is not null or undefined
        if (requestObj.slideDto === null || requestObj.slideDto === undefined) {
            throw new Error('The required parameter "requestObj.slideDto" was null or undefined when calling putSlidesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.slideDto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Set background for a slide. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSlideBackground(requestObj: requests.PutSlidesSlideBackgroundRequest): Promise<{response: http.ClientResponse, body: model.SlideBackground}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlidesSlideBackground.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlidesSlideBackground.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSlidesSlideBackground.');
        }
        // verify required parameter 'requestObj.background' is not null or undefined
        if (requestObj.background === null || requestObj.background === undefined) {
            throw new Error('The required parameter "requestObj.background" was null or undefined when calling putSlidesSlideBackground.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/background";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.background
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Set background color for a slide. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSlideBackgroundColor(requestObj: requests.PutSlidesSlideBackgroundColorRequest): Promise<{response: http.ClientResponse, body: model.SlideBackground}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlidesSlideBackgroundColor.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlidesSlideBackgroundColor.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSlidesSlideBackgroundColor.');
        }
        // verify required parameter 'requestObj.color' is not null or undefined
        if (requestObj.color === null || requestObj.color === undefined) {
            throw new Error('The required parameter "requestObj.color" was null or undefined when calling putSlidesSlideBackgroundColor.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/backgroundColor";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "color", requestObj.color);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update presentation slide properties. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSlideProperties(requestObj: requests.PutSlidesSlidePropertiesRequest): Promise<{response: http.ClientResponse, body: model.SlideProperties}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlidesSlideProperties.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlidesSlideProperties.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putSlidesSlideProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slideProperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideProperties");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Set slide size for a presentation. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSlideSize(requestObj: requests.PutSlidesSlideSizeRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlidesSlideSize.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlidesSlideSize.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slideSize";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sizeType", requestObj.sizeType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleType", requestObj.scaleType);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update presentation document properties. 
     * @param requestObj contains request parameters
     */
    public async putSlidesViewProperties(requestObj: requests.PutSlidesViewPropertiesRequest): Promise<{response: http.ClientResponse, body: model.ViewProperties}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSlidesViewProperties.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSlidesViewProperties.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putSlidesViewProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/viewProperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ViewProperties");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async putSubshapeSaveAs(requestObj: requests.PutSubshapeSaveAsRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putSubshapeSaveAs.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putSubshapeSaveAs.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putSubshapeSaveAs.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putSubshapeSaveAs.');
        }
        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('The required parameter "requestObj.format" was null or undefined when calling putSubshapeSaveAs.');
        }
        // verify required parameter 'requestObj.outPath' is not null or undefined
        if (requestObj.outPath === null || requestObj.outPath === undefined) {
            throw new Error('The required parameter "requestObj.outPath" was null or undefined when calling putSubshapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(requestObj.format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.options
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }
    /**
     * Update notes slide properties. 
     * @param requestObj contains request parameters
     */
    public async putUpdateNotesSlide(requestObj: requests.PutUpdateNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putUpdateNotesSlide.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putUpdateNotesSlide.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putUpdateNotesSlide.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putUpdateNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update shape properties. 
     * @param requestObj contains request parameters
     */
    public async putUpdateNotesSlideShape(requestObj: requests.PutUpdateNotesSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putUpdateNotesSlideShape.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putUpdateNotesSlideShape.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putUpdateNotesSlideShape.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putUpdateNotesSlideShape.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putUpdateNotesSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update paragraph properties. 
     * @param requestObj contains request parameters
     */
    public async putUpdateNotesSlideShapeParagraph(requestObj: requests.PutUpdateNotesSlideShapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update portion properties. 
     * @param requestObj contains request parameters
     */
    public async putUpdateNotesSlideShapePortion(requestObj: requests.PutUpdateNotesSlideShapePortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('The required parameter "requestObj.name" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        // verify required parameter 'requestObj.slideIndex' is not null or undefined
        if (requestObj.slideIndex === null || requestObj.slideIndex === undefined) {
            throw new Error('The required parameter "requestObj.slideIndex" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        // verify required parameter 'requestObj.shapeIndex' is not null or undefined
        if (requestObj.shapeIndex === null || requestObj.shapeIndex === undefined) {
            throw new Error('The required parameter "requestObj.shapeIndex" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        // verify required parameter 'requestObj.paragraphIndex' is not null or undefined
        if (requestObj.paragraphIndex === null || requestObj.paragraphIndex === undefined) {
            throw new Error('The required parameter "requestObj.paragraphIndex" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        // verify required parameter 'requestObj.portionIndex' is not null or undefined
        if (requestObj.portionIndex === null || requestObj.portionIndex === undefined) {
            throw new Error('The required parameter "requestObj.portionIndex" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('The required parameter "requestObj.dto" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(requestObj.paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(requestObj.portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: requestObj.dto
        };
        addHeaderParameter(requestOptions.headers, "password", requestObj.password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Check if storage exists 
     * @param requestObj contains request parameters
     */
    public async storageExists(requestObj: requests.StorageExistsRequest): Promise<{response: http.ClientResponse, body: model.StorageExist}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling storageExists.');
        }
        // verify required parameter 'requestObj.storageName' is not null or undefined
        if (requestObj.storageName === null || requestObj.storageName === undefined) {
            throw new Error('The required parameter "requestObj.storageName" was null or undefined when calling storageExists.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/{storageName}/exist";
        localVarPath = addPathParameterToUrl(localVarPath, "storageName", ObjectSerializer.toString(requestObj.storageName));
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "StorageExist");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Upload file 
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: requests.UploadFileRequest): Promise<{response: http.ClientResponse, body: model.FilesUploadResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('The required parameter "requestObj" was null or undefined when calling uploadFile.');
        }
        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('The required parameter "requestObj.file" was null or undefined when calling uploadFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(requestObj.path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        if (requestObj.file != null) 
        {
            localVarFiles.push(requestObj.file);
        }
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        return Promise.resolve({ body: result, response });
    }
}
