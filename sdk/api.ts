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


export class SlidesApi extends ApiBase {
    /**
     * @param appSid App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param authBaseUrl Base authentication Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, authBaseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, authBaseUrl, debugMode);
    }

    /**
     * Copy file 
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: requests.CopyFileRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/copy/{srcPath}";
        localVarPath = addPathParameterToUrl(localVarPath, "srcPath", String(requestObj.srcPath));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFile.');
        }
            // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFile.');
        }

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
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/copy/{srcPath}";
        localVarPath = addPathParameterToUrl(localVarPath, "srcPath", String(requestObj.srcPath));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFolder.');
        }
            // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFolder.');
        }

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
            throw new Error('Required parameter "requestObj" was null or undefined when calling createFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling createFolder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
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
     * Delete file 
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: requests.DeleteFileRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFile.');
        }

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
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFolder.');
        }

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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Remove animation from a slide. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideAnimation(requestObj: requests.DeleteSlideAnimationRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSlideAnimation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteSlideAnimation.');
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSlideAnimationEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/mainSequence/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "effectIndex", String(requestObj.effectIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteSlideAnimationEffect.');
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSlideAnimationInteractiveSequence.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences/{sequenceIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "sequenceIndex", String(requestObj.sequenceIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteSlideAnimationInteractiveSequence.');
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSlideAnimationInteractiveSequenceEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences/{sequenceIndex}/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "sequenceIndex", String(requestObj.sequenceIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "effectIndex", String(requestObj.effectIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteSlideAnimationInteractiveSequenceEffect.');
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSlideAnimationInteractiveSequences.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteSlideAnimationInteractiveSequences.');
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSlideAnimationMainSequence.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/mainSequence";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteSlideAnimationMainSequence.');
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Download file 
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: requests.DownloadFileRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling downloadFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling downloadFile.');
        }

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
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDiscUsage.');
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFileVersions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/version/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFileVersions.');
        }

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
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFilesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFilesList.');
        }

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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide shape info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShape(requestObj: requests.GetNotesSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling getNotesSlideWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getNotesSlideWithFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
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
     * Read paragraph portion info. 
     * @param requestObj contains request parameters
     */
    public async getParagraphPortion(requestObj: requests.GetParagraphPortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide animation effects. 
     * @param requestObj contains request parameters
     */
    public async getSlideAnimation(requestObj: requests.GetSlideAnimationRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlideAnimation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlideAnimation.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeIndex", requestObj.shapeIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read slide shape info. 
     * @param requestObj contains request parameters
     */
    public async getSlideShape(requestObj: requests.GetSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlideShapeParagraph.');
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
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlideShapeParagraph.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getSlideShapeParagraph.');
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
    public async getSlidesApiInfo(requestObj: requests.GetSlidesApiInfoRequest): Promise<{response: http.ClientResponse, body: model.ApiInfo}> {
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesImageWithDefaultFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/images/{index}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "index", String(requestObj.index));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesImageWithDefaultFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
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
     * Get image in specified format. 
     * @param requestObj contains request parameters
     */
    public async getSlidesImageWithFormat(requestObj: requests.GetSlidesImageWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSlidesImageWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/images/{index}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "index", String(requestObj.index));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSlidesImageWithFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
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
     * Read presentation images info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesImages(requestObj: requests.GetSlidesImagesRequest): Promise<{response: http.ClientResponse, body: model.Images}> {
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "TextItems");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Read presentation slide info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlide(requestObj: requests.GetSlidesSlideRequest): Promise<{response: http.ClientResponse, body: model.Slide}> {
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Images");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Extract slide text items. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideTextItems(requestObj: requests.GetSlidesSlideTextItemsRequest): Promise<{response: http.ClientResponse, body: model.TextItems}> {
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FormatScheme");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Move file 
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: requests.MoveFileRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/move/{srcPath}";
        localVarPath = addPathParameterToUrl(localVarPath, "srcPath", String(requestObj.srcPath));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFile.');
        }
            // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFile.');
        }

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
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/move/{srcPath}";
        localVarPath = addPathParameterToUrl(localVarPath, "srcPath", String(requestObj.srcPath));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFolder.');
        }
            // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFolder.');
        }

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
            throw new Error('Required parameter "requestObj" was null or undefined when calling objectExists.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/exist/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling objectExists.');
        }

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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Add new notes slide. 
     * @param requestObj contains request parameters
     */
    public async postAddNotesSlide(requestObj: requests.PostAddNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Copy layoutSlide from source presentation. 
     * @param requestObj contains request parameters
     */
    public async postCopyLayoutSlideFromSourcePresentation(requestObj: requests.PostCopyLayoutSlideFromSourcePresentationRequest): Promise<{response: http.ClientResponse, body: model.LayoutSlide}> {
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "MasterSlide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Creates new paragraph. 
     * @param requestObj contains request parameters
     */
    public async postNotesSlideAddNewParagraph(requestObj: requests.PostNotesSlideAddNewParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options,
            encoding: null
        };
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async postShapeSaveAs(requestObj: requests.PostShapeSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postShapeSaveAs.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling postShapeSaveAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options,
            encoding: null
        };
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlideAnimationEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/mainSequence";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlideAnimationEffect.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.effect
        };
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlideAnimationInteractiveSequence.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlideAnimationInteractiveSequence.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.sequence
        };
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlideAnimationInteractiveSequenceEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences/{sequenceIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "sequenceIndex", String(requestObj.sequenceIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlideAnimationInteractiveSequenceEffect.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.effect
        };
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlideSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlideSaveAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options,
            encoding: null
        };
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesAdd.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides";
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesConvert.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/convert/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            body: requestObj.document,
            encoding: null
        };
        let localVarFiles = [];
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
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourceStorage", requestObj.sourceStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesDocument.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesDocument.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "inputPassword", requestObj.inputPassword);
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
        let localVarFiles = [];
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesDocumentFromHtml.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromHtml";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesDocumentFromHtml.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            body: requestObj.html,
            json: false
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(JSON.parse(response.body), "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Create a presentation from an existing source. 
     * @param requestObj contains request parameters
     */
    public async postSlidesDocumentFromSource(requestObj: requests.PostSlidesDocumentFromSourceRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesDocumentFromSource.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromSource";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesDocumentFromSource.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourcePath", requestObj.sourcePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourcePassword", requestObj.sourcePassword);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourceStorage", requestObj.sourceStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesDocumentFromTemplate.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromTemplate";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesDocumentFromTemplate.');
        }
            // verify required parameter 'requestObj.templatePath' is not null or undefined
        if (requestObj.templatePath === null || requestObj.templatePath === undefined) {
            throw new Error('Required parameter "requestObj.templatePath" was null or undefined when calling postSlidesDocumentFromTemplate.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "templatePath", requestObj.templatePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "templatePassword", requestObj.templatePassword);
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSlidesSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSlidesSaveAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options,
            encoding: null
        };
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
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SplitDocumentResult");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update a layoutSlide. 
     * @param requestObj contains request parameters
     */
    public async putLayoutSlide(requestObj: requests.PutLayoutSlideRequest): Promise<{response: http.ClientResponse, body: model.LayoutSlide}> {
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlide");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async putNotesSlideShapeSaveAs(requestObj: requests.PutNotesSlideShapeSaveAsRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{path}/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
            // verify required parameter 'requestObj.outPath' is not null or undefined
        if (requestObj.outPath === null || requestObj.outPath === undefined) {
            throw new Error('Required parameter "requestObj.outPath" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options
        };
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update portion properties. 
     * @param requestObj contains request parameters
     */
    public async putSetParagraphPortionProperties(requestObj: requests.PutSetParagraphPortionPropertiesRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling putShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", String(requestObj.shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putShapeSaveAs.');
        }
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling putShapeSaveAs.');
        }
            // verify required parameter 'requestObj.outPath' is not null or undefined
        if (requestObj.outPath === null || requestObj.outPath === undefined) {
            throw new Error('Required parameter "requestObj.outPath" was null or undefined when calling putShapeSaveAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", requestObj.bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options
        };
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlideAnimation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSlideAnimation.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.animation
        };
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlideAnimationEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/mainSequence/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "effectIndex", String(requestObj.effectIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSlideAnimationEffect.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.effect
        };
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlideAnimationInteractiveSequenceEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences/{sequenceIndex}/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "sequenceIndex", String(requestObj.sequenceIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "effectIndex", String(requestObj.effectIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSlideAnimationInteractiveSequenceEffect.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.effect
        };
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
    public async putSlideSaveAs(requestObj: requests.PutSlideSaveAsRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlideSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSlideSaveAs.');
        }
            // verify required parameter 'requestObj.outPath' is not null or undefined
        if (requestObj.outPath === null || requestObj.outPath === undefined) {
            throw new Error('Required parameter "requestObj.outPath" was null or undefined when calling putSlideSaveAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options
        };
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlidesConvert.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/convert/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.outPath' is not null or undefined
        if (requestObj.outPath === null || requestObj.outPath === undefined) {
            throw new Error('Required parameter "requestObj.outPath" was null or undefined when calling putSlidesConvert.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            body: requestObj.document,
            json: false
        };
        let localVarFiles = [];
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlidesDocumentFromHtml.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromHtml";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSlidesDocumentFromHtml.');
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(JSON.parse(response.body), "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Save a presentation to a specified format. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSaveAs(requestObj: requests.PutSlidesSaveAsRequest): Promise<{response: http.ClientResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlidesSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "format", String(requestObj.format));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSlidesSaveAs.');
        }
            // verify required parameter 'requestObj.outPath' is not null or undefined
        if (requestObj.outPath === null || requestObj.outPath === undefined) {
            throw new Error('Required parameter "requestObj.outPath" was null or undefined when calling putSlidesSaveAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.options
        };
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
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: requestObj.background
        };
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlidesSlideBackgroundColor.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/backgroundColor";
        localVarPath = addPathParameterToUrl(localVarPath, "name", String(requestObj.name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", String(requestObj.slideIndex));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putSlidesSlideBackgroundColor.');
        }
            // verify required parameter 'requestObj.color' is not null or undefined
        if (requestObj.color === null || requestObj.color === undefined) {
            throw new Error('Required parameter "requestObj.color" was null or undefined when calling putSlidesSlideBackgroundColor.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "color", requestObj.color);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Set slide size for a presentation. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSlideSize(requestObj: requests.PutSlidesSlideSizeRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSlidesSlideSize.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slideSize";
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
        let localVarFiles = [];
        checkMultipartContent(requestOptions, requestObj, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }
    /**
     * Update notes slide properties. 
     * @param requestObj contains request parameters
     */
    public async putUpdateNotesSlide(requestObj: requests.PutUpdateNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
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
            throw new Error('Required parameter "requestObj" was null or undefined when calling storageExists.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/{storageName}/exist";
        localVarPath = addPathParameterToUrl(localVarPath, "storageName", String(requestObj.storageName));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.storageName' is not null or undefined
        if (requestObj.storageName === null || requestObj.storageName === undefined) {
            throw new Error('Required parameter "requestObj.storageName" was null or undefined when calling storageExists.');
        }

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
            throw new Error('Required parameter "requestObj" was null or undefined when calling uploadFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", String(requestObj.path));
        const queryParameters: any = {};
            // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling uploadFile.');
        }
            // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling uploadFile.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
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
