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
     * @param srcPath Source file path e.g. '/folder/file.ext'
     * @param destPath Destination file path
     * @param srcStorageName Source storage name
     * @param destStorageName Destination storage name
     * @param versionId File version ID to copy
     */
    public async copyFile(srcPath: any = null, destPath: string = null, srcStorageName: string = null, destStorageName: string = null, versionId: string = null): Promise<{response: http.ClientResponse}> {
        if (srcPath instanceof requests.CopyFileRequest) {
            const requestObject = srcPath as requests.CopyFileRequest;
            srcPath = requestObject.srcPath;
            destPath = requestObject.destPath;
            srcStorageName = requestObject.srcStorageName;
            destStorageName = requestObject.destStorageName;
            versionId = requestObject.versionId;
        }
        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('The required parameter "srcPath" was null or undefined when calling copyFile.');
        }
        // verify required parameter 'destPath' is not null or undefined
        if (destPath === null || destPath === undefined) {
            throw new Error('The required parameter "destPath" was null or undefined when calling copyFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/copy/{srcPath}";
        localVarPath = addPathParameterToUrl(localVarPath, "srcPath", ObjectSerializer.toString(srcPath));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * Copy folder 
     * @param srcPath Source folder path e.g. '/src'
     * @param destPath Destination folder path e.g. '/dst'
     * @param srcStorageName Source storage name
     * @param destStorageName Destination storage name
     */
    public async copyFolder(srcPath: any = null, destPath: string = null, srcStorageName: string = null, destStorageName: string = null): Promise<{response: http.ClientResponse}> {
        if (srcPath instanceof requests.CopyFolderRequest) {
            const requestObject = srcPath as requests.CopyFolderRequest;
            srcPath = requestObject.srcPath;
            destPath = requestObject.destPath;
            srcStorageName = requestObject.srcStorageName;
            destStorageName = requestObject.destStorageName;
        }
        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('The required parameter "srcPath" was null or undefined when calling copyFolder.');
        }
        // verify required parameter 'destPath' is not null or undefined
        if (destPath === null || destPath === undefined) {
            throw new Error('The required parameter "destPath" was null or undefined when calling copyFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/copy/{srcPath}";
        localVarPath = addPathParameterToUrl(localVarPath, "srcPath", ObjectSerializer.toString(srcPath));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * Create the folder 
     * @param path Folder path to create e.g. 'folder_1/folder_2/'
     * @param storageName Storage name
     */
    public async createFolder(path: any = null, storageName: string = null): Promise<{response: http.ClientResponse}> {
        if (path instanceof requests.CreateFolderRequest) {
            const requestObject = path as requests.CreateFolderRequest;
            path = requestObject.path;
            storageName = requestObject.storageName;
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * Delete a category from a chart. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param categoryIndex Category index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteChartCategory(name: any = null, slideIndex: number = null, shapeIndex: number = null, categoryIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Chart}> {
        if (name instanceof requests.DeleteChartCategoryRequest) {
            const requestObject = name as requests.DeleteChartCategoryRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapeIndex = requestObject.shapeIndex;
            categoryIndex = requestObject.categoryIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteChartCategory.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteChartCategory.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteChartCategory.');
        }
        // verify required parameter 'categoryIndex' is not null or undefined
        if (categoryIndex === null || categoryIndex === undefined) {
            throw new Error('The required parameter "categoryIndex" was null or undefined when calling deleteChartCategory.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/categories/{categoryIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "categoryIndex", ObjectSerializer.toString(categoryIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Delete a data point from a chart series. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param seriesIndex Series index.
     * @param pointIndex Data point index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteChartDataPoint(name: any = null, slideIndex: number = null, shapeIndex: number = null, seriesIndex: number = null, pointIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Chart}> {
        if (name instanceof requests.DeleteChartDataPointRequest) {
            const requestObject = name as requests.DeleteChartDataPointRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapeIndex = requestObject.shapeIndex;
            seriesIndex = requestObject.seriesIndex;
            pointIndex = requestObject.pointIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteChartDataPoint.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteChartDataPoint.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteChartDataPoint.');
        }
        // verify required parameter 'seriesIndex' is not null or undefined
        if (seriesIndex === null || seriesIndex === undefined) {
            throw new Error('The required parameter "seriesIndex" was null or undefined when calling deleteChartDataPoint.');
        }
        // verify required parameter 'pointIndex' is not null or undefined
        if (pointIndex === null || pointIndex === undefined) {
            throw new Error('The required parameter "pointIndex" was null or undefined when calling deleteChartDataPoint.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/series/{seriesIndex}/dataPoints/{pointIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "seriesIndex", ObjectSerializer.toString(seriesIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "pointIndex", ObjectSerializer.toString(pointIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Delete a series from a chart. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index (must be a chart).
     * @param seriesIndex Series index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteChartSeries(name: any = null, slideIndex: number = null, shapeIndex: number = null, seriesIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Chart}> {
        if (name instanceof requests.DeleteChartSeriesRequest) {
            const requestObject = name as requests.DeleteChartSeriesRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapeIndex = requestObject.shapeIndex;
            seriesIndex = requestObject.seriesIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteChartSeries.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteChartSeries.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteChartSeries.');
        }
        // verify required parameter 'seriesIndex' is not null or undefined
        if (seriesIndex === null || seriesIndex === undefined) {
            throw new Error('The required parameter "seriesIndex" was null or undefined when calling deleteChartSeries.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/series/{seriesIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "seriesIndex", ObjectSerializer.toString(seriesIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Delete file 
     * @param path File path e.g. '/folder/file.ext'
     * @param storageName Storage name
     * @param versionId File version ID to delete
     */
    public async deleteFile(path: any = null, storageName: string = null, versionId: string = null): Promise<{response: http.ClientResponse}> {
        if (path instanceof requests.DeleteFileRequest) {
            const requestObject = path as requests.DeleteFileRequest;
            path = requestObject.path;
            storageName = requestObject.storageName;
            versionId = requestObject.versionId;
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", versionId);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * Delete folder 
     * @param path Folder path e.g. '/folder'
     * @param storageName Storage name
     * @param recursive Enable to delete folders, subfolders and files
     */
    public async deleteFolder(path: any = null, storageName: string = null, recursive: boolean = null): Promise<{response: http.ClientResponse}> {
        if (path instanceof requests.DeleteFolderRequest) {
            const requestObject = path as requests.DeleteFolderRequest;
            path = requestObject.path;
            storageName = requestObject.storageName;
            recursive = requestObject.recursive;
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recursive", recursive);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * Remove notes slide. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteNotesSlide(name: any = null, slideIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Slide}> {
        if (name instanceof requests.DeleteNotesSlideRequest) {
            const requestObject = name as requests.DeleteNotesSlideRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteNotesSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a paragraph. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteNotesSlideParagraph(name: any = null, slideIndex: number = null, shapeIndex: number = null, paragraphIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (name instanceof requests.DeleteNotesSlideParagraphRequest) {
            const requestObject = name as requests.DeleteNotesSlideParagraphRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapeIndex = requestObject.shapeIndex;
            paragraphIndex = requestObject.paragraphIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteNotesSlideParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteNotesSlideParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteNotesSlideParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deleteNotesSlideParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of paragraphs. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphs The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteNotesSlideParagraphs(name: any = null, slideIndex: number = null, shapeIndex: number = null, paragraphs: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (name instanceof requests.DeleteNotesSlideParagraphsRequest) {
            const requestObject = name as requests.DeleteNotesSlideParagraphsRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapeIndex = requestObject.shapeIndex;
            paragraphs = requestObject.paragraphs;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteNotesSlideParagraphs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteNotesSlideParagraphs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteNotesSlideParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "paragraphs", paragraphs);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a portion. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteNotesSlidePortion(name: any = null, slideIndex: number = null, shapeIndex: number = null, paragraphIndex: number = null, portionIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (name instanceof requests.DeleteNotesSlidePortionRequest) {
            const requestObject = name as requests.DeleteNotesSlidePortionRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapeIndex = requestObject.shapeIndex;
            paragraphIndex = requestObject.paragraphIndex;
            portionIndex = requestObject.portionIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteNotesSlidePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteNotesSlidePortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteNotesSlidePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deleteNotesSlidePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling deleteNotesSlidePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of portions. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portions The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteNotesSlidePortions(name: any = null, slideIndex: number = null, shapeIndex: number = null, paragraphIndex: number = null, portions: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (name instanceof requests.DeleteNotesSlidePortionsRequest) {
            const requestObject = name as requests.DeleteNotesSlidePortionsRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapeIndex = requestObject.shapeIndex;
            paragraphIndex = requestObject.paragraphIndex;
            portions = requestObject.portions;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteNotesSlidePortions.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteNotesSlidePortions.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteNotesSlidePortions.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deleteNotesSlidePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "portions", portions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a shape. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteNotesSlideShape(name: any = null, slideIndex: number = null, shapeIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        if (name instanceof requests.DeleteNotesSlideShapeRequest) {
            const requestObject = name as requests.DeleteNotesSlideShapeRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapeIndex = requestObject.shapeIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteNotesSlideShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteNotesSlideShape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteNotesSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of shapes. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapes The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteNotesSlideShapes(name: any = null, slideIndex: number = null, shapes: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        if (name instanceof requests.DeleteNotesSlideShapesRequest) {
            const requestObject = name as requests.DeleteNotesSlideShapesRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapes = requestObject.shapes;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteNotesSlideShapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteNotesSlideShapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapes", shapes);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a paragraph. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteParagraph(name: any = null, slideIndex: number = null, shapeIndex: number = null, paragraphIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (name instanceof requests.DeleteParagraphRequest) {
            const requestObject = name as requests.DeleteParagraphRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapeIndex = requestObject.shapeIndex;
            paragraphIndex = requestObject.paragraphIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deleteParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of paragraphs. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphs The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteParagraphs(name: any = null, slideIndex: number = null, shapeIndex: number = null, paragraphs: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (name instanceof requests.DeleteParagraphsRequest) {
            const requestObject = name as requests.DeleteParagraphsRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapeIndex = requestObject.shapeIndex;
            paragraphs = requestObject.paragraphs;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteParagraphs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteParagraphs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "paragraphs", paragraphs);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a portion. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deletePortion(name: any = null, slideIndex: number = null, shapeIndex: number = null, paragraphIndex: number = null, portionIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (name instanceof requests.DeletePortionRequest) {
            const requestObject = name as requests.DeletePortionRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapeIndex = requestObject.shapeIndex;
            paragraphIndex = requestObject.paragraphIndex;
            portionIndex = requestObject.portionIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deletePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deletePortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deletePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deletePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling deletePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of portions. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portions The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deletePortions(name: any = null, slideIndex: number = null, shapeIndex: number = null, paragraphIndex: number = null, portions: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (name instanceof requests.DeletePortionsRequest) {
            const requestObject = name as requests.DeletePortionsRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapeIndex = requestObject.shapeIndex;
            paragraphIndex = requestObject.paragraphIndex;
            portions = requestObject.portions;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deletePortions.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deletePortions.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deletePortions.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deletePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "portions", portions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Delete a presentation section. 
     * @param name Document name.
     * @param sectionIndex Section index.
     * @param withSlides True to delete the slides related to the deleted section; move them to the remaining sections otherwise.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSection(name: any = null, sectionIndex: number = null, withSlides: boolean = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Sections}> {
        if (name instanceof requests.DeleteSectionRequest) {
            const requestObject = name as requests.DeleteSectionRequest;
            name = requestObject.name;
            sectionIndex = requestObject.sectionIndex;
            withSlides = requestObject.withSlides;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSection.');
        }
        // verify required parameter 'sectionIndex' is not null or undefined
        if (sectionIndex === null || sectionIndex === undefined) {
            throw new Error('The required parameter "sectionIndex" was null or undefined when calling deleteSection.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections/{sectionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "sectionIndex", ObjectSerializer.toString(sectionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withSlides", withSlides);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Delete presentation sections. 
     * @param name Document name.
     * @param sections The indices of the sections to be deleted; delete all by default.
     * @param withSlides True to delete the slides related to the deleted sections; move them to the remaining sections otherwise.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSections(name: any = null, sections: Array<number> = null, withSlides: boolean = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Sections}> {
        if (name instanceof requests.DeleteSectionsRequest) {
            const requestObject = name as requests.DeleteSectionsRequest;
            name = requestObject.name;
            sections = requestObject.sections;
            withSlides = requestObject.withSlides;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSections.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sections", sections);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withSlides", withSlides);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove animation from a slide. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteAnimation(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlideAnimation.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlideAnimation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteAnimation.
     * Remove animation from a slide. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideAnimation(requestObj: requests.DeleteSlideAnimationRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        return await this.deleteAnimation(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Remove an effect from slide animation. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param effectIndex Index of the effect to be removed.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteAnimationEffect(name: string, slideIndex: number, effectIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlideAnimationEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlideAnimationEffect.');
        }
        // verify required parameter 'effectIndex' is not null or undefined
        if (effectIndex === null || effectIndex === undefined) {
            throw new Error('The required parameter "effectIndex" was null or undefined when calling deleteSlideAnimationEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/mainSequence/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "effectIndex", ObjectSerializer.toString(effectIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteAnimationEffect.
     * Remove an effect from slide animation. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideAnimationEffect(requestObj: requests.DeleteSlideAnimationEffectRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        return await this.deleteAnimationEffect(requestObj.name, requestObj.slideIndex, requestObj.effectIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Remove an interactive sequence from slide animation. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param sequenceIndex The index of an interactive sequence to be deleted.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteAnimationInteractiveSequence(name: string, slideIndex: number, sequenceIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'sequenceIndex' is not null or undefined
        if (sequenceIndex === null || sequenceIndex === undefined) {
            throw new Error('The required parameter "sequenceIndex" was null or undefined when calling deleteSlideAnimationInteractiveSequence.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences/{sequenceIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "sequenceIndex", ObjectSerializer.toString(sequenceIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteAnimationInteractiveSequence.
     * Remove an interactive sequence from slide animation. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideAnimationInteractiveSequence(requestObj: requests.DeleteSlideAnimationInteractiveSequenceRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        return await this.deleteAnimationInteractiveSequence(requestObj.name, requestObj.slideIndex, requestObj.sequenceIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Remove an effect from slide animation interactive sequence. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param sequenceIndex Interactive sequence index.
     * @param effectIndex Index of the effect to be removed.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteAnimationInteractiveSequenceEffect(name: string, slideIndex: number, sequenceIndex: number, effectIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'sequenceIndex' is not null or undefined
        if (sequenceIndex === null || sequenceIndex === undefined) {
            throw new Error('The required parameter "sequenceIndex" was null or undefined when calling deleteSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'effectIndex' is not null or undefined
        if (effectIndex === null || effectIndex === undefined) {
            throw new Error('The required parameter "effectIndex" was null or undefined when calling deleteSlideAnimationInteractiveSequenceEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences/{sequenceIndex}/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "sequenceIndex", ObjectSerializer.toString(sequenceIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "effectIndex", ObjectSerializer.toString(effectIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteAnimationInteractiveSequenceEffect.
     * Remove an effect from slide animation interactive sequence. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideAnimationInteractiveSequenceEffect(requestObj: requests.DeleteSlideAnimationInteractiveSequenceEffectRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        return await this.deleteAnimationInteractiveSequenceEffect(requestObj.name, requestObj.slideIndex, requestObj.sequenceIndex, requestObj.effectIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Clear all interactive sequences from slide animation. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteAnimationInteractiveSequences(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlideAnimationInteractiveSequences.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlideAnimationInteractiveSequences.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteAnimationInteractiveSequences.
     * Clear all interactive sequences from slide animation. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideAnimationInteractiveSequences(requestObj: requests.DeleteSlideAnimationInteractiveSequencesRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        return await this.deleteAnimationInteractiveSequences(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Clear main sequence in slide animation. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteAnimationMainSequence(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlideAnimationMainSequence.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlideAnimationMainSequence.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/mainSequence";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteAnimationMainSequence.
     * Clear main sequence in slide animation. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideAnimationMainSequence(requestObj: requests.DeleteSlideAnimationMainSequenceRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        return await this.deleteAnimationMainSequence(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Delete a presentation slide by index. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSlide(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Slides}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlideByIndex.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlideByIndex.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteSlide.
     * Delete a presentation slide by index. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideByIndex(requestObj: requests.DeleteSlideByIndexRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        return await this.deleteSlide(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Remove a shape. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteShape(name: string, slideIndex: number, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlideShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlideShape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteShape.
     * Remove a shape. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideShape(requestObj: requests.DeleteSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        return await this.deleteShape(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Remove a range of shapes. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapes The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteShapes(name: string, slideIndex: number, shapes: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlideShapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlideShapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapes", shapes);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteShapes.
     * Remove a range of shapes. 
     * @param requestObj contains request parameters
     */
    public async deleteSlideShapes(requestObj: requests.DeleteSlideShapesRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        return await this.deleteShapes(requestObj.name, requestObj.slideIndex, requestObj.shapes, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Remove a shape (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSubshape(name: string, slideIndex: number, path: string = null, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlideSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlideSubshape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSlideSubshape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteSubshape.
     * Remove a shape (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async deleteSlideSubshape(requestObj: requests.DeleteSlideSubshapeRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        return await this.deleteSubshape(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapeIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Remove a range of shapes (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapes The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSubshapes(name: string, slideIndex: number, path: string = null, shapes: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlideSubshapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlideSubshapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapes", shapes);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteSubshapes.
     * Remove a range of shapes (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async deleteSlideSubshapes(requestObj: requests.DeleteSlideSubshapesRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        return await this.deleteSubshapes(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapes, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Delete presentation slides. 
     * @param name Document name.
     * @param slides The indices of the slides to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSlides(name: string, slides: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Slides}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlidesCleanSlidesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slides", slides);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteSlides.
     * Delete presentation slides. 
     * @param requestObj contains request parameters
     */
    public async deleteSlidesCleanSlidesList(requestObj: requests.DeleteSlidesCleanSlidesListRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        return await this.deleteSlides(requestObj.name, requestObj.slides, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Clean document properties. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteDocumentProperties(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.DocumentProperties}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlidesDocumentProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteDocumentProperties.
     * Clean document properties. 
     * @param requestObj contains request parameters
     */
    public async deleteSlidesDocumentProperties(requestObj: requests.DeleteSlidesDocumentPropertiesRequest): Promise<{response: http.ClientResponse, body: model.DocumentProperties}> {
        return await this.deleteDocumentProperties(requestObj.name, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Delete document property. 
     * @param name Document name.
     * @param propertyName The property name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteDocumentProperty(name: string, propertyName: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.DocumentProperties}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlidesDocumentProperty.');
        }
        // verify required parameter 'propertyName' is not null or undefined
        if (propertyName === null || propertyName === undefined) {
            throw new Error('The required parameter "propertyName" was null or undefined when calling deleteSlidesDocumentProperty.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties/{propertyName}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "propertyName", ObjectSerializer.toString(propertyName));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteDocumentProperty.
     * Delete document property. 
     * @param requestObj contains request parameters
     */
    public async deleteSlidesDocumentProperty(requestObj: requests.DeleteSlidesDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.DocumentProperties}> {
        return await this.deleteDocumentProperty(requestObj.name, requestObj.propertyName, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Resets all presentation protection settings.  
     * @param name Document name.
     * @param password Presentation password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteProtection(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ProtectionProperties}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlidesProtectionProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/protection";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ProtectionProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteProtection.
     * Resets all presentation protection settings.  
     * @param requestObj contains request parameters
     */
    public async deleteSlidesProtectionProperties(requestObj: requests.DeleteSlidesProtectionPropertiesRequest): Promise<{response: http.ClientResponse, body: model.ProtectionProperties}> {
        return await this.deleteProtection(requestObj.name, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Resets all presentation protection settings.  
     * @param document Document data.
     * @param password Presentation password.
     */
    public async deleteProtectionOnline(document: Buffer, password: string): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling deleteSlidesProtectionPropertiesOnline.');
        }
        // verify required parameter 'password' is not null or undefined
        if (password === null || password === undefined) {
            throw new Error('The required parameter "password" was null or undefined when calling deleteSlidesProtectionPropertiesOnline.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/protection/delete";
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteProtectionOnline.
     * Resets all presentation protection settings.  
     * @param requestObj contains request parameters
     */
    public async deleteSlidesProtectionPropertiesOnline(requestObj: requests.DeleteSlidesProtectionPropertiesOnlineRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.deleteProtectionOnline(requestObj.document, requestObj.password);
    }

    /**
     * Remove background from a slide. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteBackground(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideBackground}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlidesSlideBackground.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlidesSlideBackground.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/background";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteBackground.
     * Remove background from a slide. 
     * @param requestObj contains request parameters
     */
    public async deleteSlidesSlideBackground(requestObj: requests.DeleteSlidesSlideBackgroundRequest): Promise<{response: http.ClientResponse, body: model.SlideBackground}> {
        return await this.deleteBackground(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Remove a paragraph (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSubshapeParagraph(name: any = null, slideIndex: number = null, path: string = null, shapeIndex: number = null, paragraphIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (name instanceof requests.DeleteSubshapeParagraphRequest) {
            const requestObject = name as requests.DeleteSubshapeParagraphRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            path = requestObject.path;
            shapeIndex = requestObject.shapeIndex;
            paragraphIndex = requestObject.paragraphIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSubshapeParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSubshapeParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSubshapeParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deleteSubshapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of paragraphs (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphs The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSubshapeParagraphs(name: any = null, slideIndex: number = null, path: string = null, shapeIndex: number = null, paragraphs: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        if (name instanceof requests.DeleteSubshapeParagraphsRequest) {
            const requestObject = name as requests.DeleteSubshapeParagraphsRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            path = requestObject.path;
            shapeIndex = requestObject.shapeIndex;
            paragraphs = requestObject.paragraphs;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSubshapeParagraphs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSubshapeParagraphs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSubshapeParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "paragraphs", paragraphs);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a portion (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSubshapePortion(name: any = null, slideIndex: number = null, path: string = null, shapeIndex: number = null, paragraphIndex: number = null, portionIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (name instanceof requests.DeleteSubshapePortionRequest) {
            const requestObject = name as requests.DeleteSubshapePortionRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            path = requestObject.path;
            shapeIndex = requestObject.shapeIndex;
            paragraphIndex = requestObject.paragraphIndex;
            portionIndex = requestObject.portionIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSubshapePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSubshapePortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSubshapePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deleteSubshapePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling deleteSubshapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of portions (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portions The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSubshapePortions(name: any = null, slideIndex: number = null, path: string = null, shapeIndex: number = null, paragraphIndex: number = null, portions: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        if (name instanceof requests.DeleteSubshapePortionsRequest) {
            const requestObject = name as requests.DeleteSubshapePortionsRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            path = requestObject.path;
            shapeIndex = requestObject.shapeIndex;
            paragraphIndex = requestObject.paragraphIndex;
            portions = requestObject.portions;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSubshapePortions.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSubshapePortions.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSubshapePortions.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deleteSubshapePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "portions", portions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Removes shapes with name \&quot;watermark\&quot; from the presentation. 
     * @param name Document name.
     * @param shapeName Name of the watermark shape. If null, default value \"watermark\"is used.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteWatermark(name: any = null, shapeName: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse}> {
        if (name instanceof requests.DeleteWatermarkRequest) {
            const requestObject = name as requests.DeleteWatermarkRequest;
            name = requestObject.name;
            shapeName = requestObject.shapeName;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteWatermark.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/watermark/delete";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeName", shapeName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * Download file 
     * @param path File path e.g. '/folder/file.ext'
     * @param storageName Storage name
     * @param versionId File version ID to download
     */
    public async downloadFile(path: any = null, storageName: string = null, versionId: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (path instanceof requests.DownloadFileRequest) {
            const requestObject = path as requests.DownloadFileRequest;
            path = requestObject.path;
            storageName = requestObject.storageName;
            versionId = requestObject.versionId;
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Get disc usage 
     * @param storageName Storage name
     */
    public async getDiscUsage(storageName: any = null): Promise<{response: http.ClientResponse, body: model.DiscUsage}> {
        if (storageName instanceof requests.GetDiscUsageRequest) {
            const requestObject = storageName as requests.GetDiscUsageRequest;
            storageName = requestObject.storageName;
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/disc";
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DiscUsage");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Get file versions 
     * @param path File path e.g. '/file.ext'
     * @param storageName Storage name
     */
    public async getFileVersions(path: any = null, storageName: string = null): Promise<{response: http.ClientResponse, body: model.FileVersions}> {
        if (path instanceof requests.GetFileVersionsRequest) {
            const requestObject = path as requests.GetFileVersionsRequest;
            path = requestObject.path;
            storageName = requestObject.storageName;
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/version/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FileVersions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Get all files and folders within a folder 
     * @param path Folder path e.g. '/folder'
     * @param storageName Storage name
     */
    public async getFilesList(path: any = null, storageName: string = null): Promise<{response: http.ClientResponse, body: model.FilesList}> {
        if (path instanceof requests.GetFilesListRequest) {
            const requestObject = path as requests.GetFilesListRequest;
            path = requestObject.path;
            storageName = requestObject.storageName;
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FilesList");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read presentation layoutSlide info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getLayoutSlide(name: any = null, slideIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.LayoutSlide}> {
        if (name instanceof requests.GetLayoutSlideRequest) {
            const requestObject = name as requests.GetLayoutSlideRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getLayoutSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getLayoutSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/layoutSlides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read presentation layoutSlides info. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getLayoutSlides(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.LayoutSlides}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getLayoutSlidesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/layoutSlides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getLayoutSlides.
     * Read presentation layoutSlides info. 
     * @param requestObj contains request parameters
     */
    public async getLayoutSlidesList(requestObj: requests.GetLayoutSlidesListRequest): Promise<{response: http.ClientResponse, body: model.LayoutSlides}> {
        return await this.getLayoutSlides(requestObj.name, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read presentation masterSlide info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getMasterSlide(name: any = null, slideIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.MasterSlide}> {
        if (name instanceof requests.GetMasterSlideRequest) {
            const requestObject = name as requests.GetMasterSlideRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getMasterSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getMasterSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/masterSlides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "MasterSlide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read presentation masterSlides info. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getMasterSlides(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.MasterSlides}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getMasterSlidesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/masterSlides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "MasterSlides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getMasterSlides.
     * Read presentation masterSlides info. 
     * @param requestObj contains request parameters
     */
    public async getMasterSlidesList(requestObj: requests.GetMasterSlidesListRequest): Promise<{response: http.ClientResponse, body: model.MasterSlides}> {
        return await this.getMasterSlides(requestObj.name, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read notes slide info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getNotesSlide(name: any = null, slideIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
        if (name instanceof requests.GetNotesSlideRequest) {
            const requestObject = name as requests.GetNotesSlideRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getNotesSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Get info whether a notes slide exists. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async notesSlideExists(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.EntityExists}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getNotesSlideExists.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getNotesSlideExists.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/exist";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "EntityExists");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use notesSlideExists.
     * Get info whether a notes slide exists. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideExists(requestObj: requests.GetNotesSlideExistsRequest): Promise<{response: http.ClientResponse, body: model.EntityExists}> {
        return await this.notesSlideExists(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Get header/footer info for the notes slide. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getNotesSlideHeaderFooter(name: any = null, slideIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.NotesSlideHeaderFooter}> {
        if (name instanceof requests.GetNotesSlideHeaderFooterRequest) {
            const requestObject = name as requests.GetNotesSlideHeaderFooterRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getNotesSlideHeaderFooter.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getNotesSlideHeaderFooter.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/headerFooter";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlideHeaderFooter");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read slide shape info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getNotesSlideShape(name: any = null, slideIndex: number = null, shapeIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        if (name instanceof requests.GetNotesSlideShapeRequest) {
            const requestObject = name as requests.GetNotesSlideShapeRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            shapeIndex = requestObject.shapeIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getNotesSlideShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getNotesSlideShape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getNotesSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read shape paragraph info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getNotesSlideParagraph(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getNotesSlideShapeParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getNotesSlideShapeParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getNotesSlideShapeParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getNotesSlideShapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getNotesSlideParagraph.
     * Read shape paragraph info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapeParagraph(requestObj: requests.GetNotesSlideShapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        return await this.getNotesSlideParagraph(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read shape paragraphs info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getNotesSlideParagraphs(name: string, slideIndex: number, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getNotesSlideShapeParagraphs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getNotesSlideShapeParagraphs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getNotesSlideShapeParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getNotesSlideParagraphs.
     * Read shape paragraphs info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapeParagraphs(requestObj: requests.GetNotesSlideShapeParagraphsRequest): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        return await this.getNotesSlideParagraphs(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read paragraph portion info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getNotesSlidePortion(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, portionIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getNotesSlideShapePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getNotesSlideShapePortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getNotesSlideShapePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getNotesSlideShapePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling getNotesSlideShapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getNotesSlidePortion.
     * Read paragraph portion info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapePortion(requestObj: requests.GetNotesSlideShapePortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        return await this.getNotesSlidePortion(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.portionIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read paragraph portions info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getNotesSlidePortions(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getNotesSlideShapePortions.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getNotesSlideShapePortions.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getNotesSlideShapePortions.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getNotesSlideShapePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getNotesSlidePortions.
     * Read paragraph portions info. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideShapePortions(requestObj: requests.GetNotesSlideShapePortionsRequest): Promise<{response: http.ClientResponse, body: model.Portions}> {
        return await this.getNotesSlidePortions(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read slide shapes info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getNotesSlideShapes(name: any = null, slideIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        if (name instanceof requests.GetNotesSlideShapesRequest) {
            const requestObject = name as requests.GetNotesSlideShapesRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getNotesSlideShapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getNotesSlideShapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Convert notes slide to the specified image format. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param format Output file format.
     * @param width Output file width.
     * @param height Output file height.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     * @param fontsFolder Storage folder containing custom fonts to be used with the document.
     */
    public async downloadNotesSlide(name: string, slideIndex: number, format: string, width: number = null, height: number = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getNotesSlideWithFormat.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getNotesSlideWithFormat.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling getNotesSlideWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadNotesSlide.
     * Convert notes slide to the specified image format. 
     * @param requestObj contains request parameters
     */
    public async getNotesSlideWithFormat(requestObj: requests.GetNotesSlideWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadNotesSlide(requestObj.name, requestObj.slideIndex, requestObj.format, requestObj.width, requestObj.height, requestObj.password, requestObj.folder, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Read paragraph portion info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getPortion(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, portionIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getParagraphPortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getParagraphPortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getParagraphPortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getParagraphPortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling getParagraphPortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getPortion.
     * Read paragraph portion info. 
     * @param requestObj contains request parameters
     */
    public async getParagraphPortion(requestObj: requests.GetParagraphPortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        return await this.getPortion(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.portionIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read paragraph portions info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getPortions(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getParagraphPortions.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getParagraphPortions.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getParagraphPortions.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getParagraphPortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getPortions.
     * Read paragraph portions info. 
     * @param requestObj contains request parameters
     */
    public async getParagraphPortions(requestObj: requests.GetParagraphPortionsRequest): Promise<{response: http.ClientResponse, body: model.Portions}> {
        return await this.getPortions(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read presentation sections info. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSections(name: any = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Sections}> {
        if (name instanceof requests.GetSectionsRequest) {
            const requestObject = name as requests.GetSectionsRequest;
            name = requestObject.name;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSections.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read slide animation effects. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index. If specified, only effects related to that shape are returned.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getAnimation(name: string, slideIndex: number, shapeIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlideAnimation.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlideAnimation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeIndex", shapeIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getAnimation.
     * Read slide animation effects. 
     * @param requestObj contains request parameters
     */
    public async getSlideAnimation(requestObj: requests.GetSlideAnimationRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        return await this.getAnimation(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Get footer info for the slide. 
     * @param name Document name.
     * @param slideIndex The position of the slide to be reordered.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSlideHeaderFooter(name: any = null, slideIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.HeaderFooter}> {
        if (name instanceof requests.GetSlideHeaderFooterRequest) {
            const requestObject = name as requests.GetSlideHeaderFooterRequest;
            name = requestObject.name;
            slideIndex = requestObject.slideIndex;
            password = requestObject.password;
            folder = requestObject.folder;
            storage = requestObject.storage;
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlideHeaderFooter.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlideHeaderFooter.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/headerFooter";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "HeaderFooter");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read slide shape info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getShape(name: string, slideIndex: number, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlideShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlideShape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getShape.
     * Read slide shape info. 
     * @param requestObj contains request parameters
     */
    public async getSlideShape(requestObj: requests.GetSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        return await this.getShape(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read shape paragraph info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getParagraph(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlideShapeParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlideShapeParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSlideShapeParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getSlideShapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getParagraph.
     * Read shape paragraph info. 
     * @param requestObj contains request parameters
     */
    public async getSlideShapeParagraph(requestObj: requests.GetSlideShapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        return await this.getParagraph(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read shape paragraphs info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getParagraphs(name: string, slideIndex: number, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlideShapeParagraphs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlideShapeParagraphs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSlideShapeParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getParagraphs.
     * Read shape paragraphs info. 
     * @param requestObj contains request parameters
     */
    public async getSlideShapeParagraphs(requestObj: requests.GetSlideShapeParagraphsRequest): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        return await this.getParagraphs(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read slide shapes info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getShapes(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlideShapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlideShapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getShapes.
     * Read slide shapes info. 
     * @param requestObj contains request parameters
     */
    public async getSlideShapes(requestObj: requests.GetSlideShapesRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        return await this.getShapes(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read slide shape info (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSubshape(name: string, slideIndex: number, path: string = null, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlideSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlideSubshape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSlideSubshape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getSubshape.
     * Read slide shape info (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async getSlideSubshape(requestObj: requests.GetSlideSubshapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        return await this.getSubshape(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapeIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read shape paragraph info (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSubshapeParagraph(name: string, slideIndex: number, path: string = null, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlideSubshapeParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlideSubshapeParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSlideSubshapeParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getSlideSubshapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getSubshapeParagraph.
     * Read shape paragraph info (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async getSlideSubshapeParagraph(requestObj: requests.GetSlideSubshapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        return await this.getSubshapeParagraph(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read shape paragraphs info (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSubshapeParagraphs(name: string, slideIndex: number, path: string = null, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlideSubshapeParagraphs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlideSubshapeParagraphs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSlideSubshapeParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getSubshapeParagraphs.
     * Read shape paragraphs info (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async getSlideSubshapeParagraphs(requestObj: requests.GetSlideSubshapeParagraphsRequest): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        return await this.getSubshapeParagraphs(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapeIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read slide shapes info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path (for smart art and group shapes).
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSubshapes(name: string, slideIndex: number, path: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlideSubshapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlideSubshapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getSubshapes.
     * Read slide shapes info. 
     * @param requestObj contains request parameters
     */
    public async getSlideSubshapes(requestObj: requests.GetSlideSubshapesRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        return await this.getSubshapes(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Get API info. 
     */
    public async getApiInfo(): Promise<{response: http.ClientResponse, body: model.ApiInfo}> {
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
     * @deprecated Use getApiInfo.
     * Get API info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesApiInfo(): Promise<{response: http.ClientResponse, body: model.ApiInfo}> {
        return await this.getApiInfo();
    }

    /**
     * Read presentation info. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getPresentation(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Document}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesDocument.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getPresentation.
     * Read presentation info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesDocument(requestObj: requests.GetSlidesDocumentRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        return await this.getPresentation(requestObj.name, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read presentation document properties. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getDocumentProperties(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.DocumentProperties}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesDocumentProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getDocumentProperties.
     * Read presentation document properties. 
     * @param requestObj contains request parameters
     */
    public async getSlidesDocumentProperties(requestObj: requests.GetSlidesDocumentPropertiesRequest): Promise<{response: http.ClientResponse, body: model.DocumentProperties}> {
        return await this.getDocumentProperties(requestObj.name, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read presentation document property. 
     * @param name Document name.
     * @param propertyName The property name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getDocumentProperty(name: string, propertyName: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.DocumentProperty}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesDocumentProperty.');
        }
        // verify required parameter 'propertyName' is not null or undefined
        if (propertyName === null || propertyName === undefined) {
            throw new Error('The required parameter "propertyName" was null or undefined when calling getSlidesDocumentProperty.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties/{propertyName}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "propertyName", ObjectSerializer.toString(propertyName));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperty");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getDocumentProperty.
     * Read presentation document property. 
     * @param requestObj contains request parameters
     */
    public async getSlidesDocumentProperty(requestObj: requests.GetSlidesDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.DocumentProperty}> {
        return await this.getDocumentProperty(requestObj.name, requestObj.propertyName, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Get image binary data. 
     * @param name Document name.
     * @param index Image index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async downloadImageDefaultFormat(name: string, index: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesImageWithDefaultFormat.');
        }
        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new Error('The required parameter "index" was null or undefined when calling getSlidesImageWithDefaultFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/images/{index}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "index", ObjectSerializer.toString(index));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadImageDefaultFormat.
     * Get image binary data. 
     * @param requestObj contains request parameters
     */
    public async getSlidesImageWithDefaultFormat(requestObj: requests.GetSlidesImageWithDefaultFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadImageDefaultFormat(requestObj.name, requestObj.index, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Get image in specified format. 
     * @param name Document name.
     * @param index Image index.
     * @param format Export format (png, jpg, gif).
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async downloadImage(name: string, index: number, format: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesImageWithFormat.');
        }
        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new Error('The required parameter "index" was null or undefined when calling getSlidesImageWithFormat.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling getSlidesImageWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/images/{index}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "index", ObjectSerializer.toString(index));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadImage.
     * Get image in specified format. 
     * @param requestObj contains request parameters
     */
    public async getSlidesImageWithFormat(requestObj: requests.GetSlidesImageWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadImage(requestObj.name, requestObj.index, requestObj.format, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read presentation images info. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getPresentationImages(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Images}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesImages.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/images";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Images");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getPresentationImages.
     * Read presentation images info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesImages(requestObj: requests.GetSlidesImagesRequest): Promise<{response: http.ClientResponse, body: model.Images}> {
        return await this.getPresentationImages(requestObj.name, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read slide placeholder info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param placeholderIndex Placeholder index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getPlaceholder(name: string, slideIndex: number, placeholderIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Placeholder}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesPlaceholder.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlidesPlaceholder.');
        }
        // verify required parameter 'placeholderIndex' is not null or undefined
        if (placeholderIndex === null || placeholderIndex === undefined) {
            throw new Error('The required parameter "placeholderIndex" was null or undefined when calling getSlidesPlaceholder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/placeholders/{placeholderIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "placeholderIndex", ObjectSerializer.toString(placeholderIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Placeholder");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getPlaceholder.
     * Read slide placeholder info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesPlaceholder(requestObj: requests.GetSlidesPlaceholderRequest): Promise<{response: http.ClientResponse, body: model.Placeholder}> {
        return await this.getPlaceholder(requestObj.name, requestObj.slideIndex, requestObj.placeholderIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read slide placeholders info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getPlaceholders(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Placeholders}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesPlaceholders.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlidesPlaceholders.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/placeholders";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Placeholders");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getPlaceholders.
     * Read slide placeholders info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesPlaceholders(requestObj: requests.GetSlidesPlaceholdersRequest): Promise<{response: http.ClientResponse, body: model.Placeholders}> {
        return await this.getPlaceholders(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Extract presentation text items. 
     * @param name Document name.
     * @param withEmpty True to incude empty items.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getPresentationTextItems(name: string, withEmpty: boolean = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.TextItems}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesPresentationTextItems.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/textItems";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withEmpty", withEmpty);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "TextItems");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getPresentationTextItems.
     * Extract presentation text items. 
     * @param requestObj contains request parameters
     */
    public async getSlidesPresentationTextItems(requestObj: requests.GetSlidesPresentationTextItemsRequest): Promise<{response: http.ClientResponse, body: model.TextItems}> {
        return await this.getPresentationTextItems(requestObj.name, requestObj.withEmpty, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read presentation protection properties. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getProtectionProperties(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ProtectionProperties}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesProtectionProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/protection";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ProtectionProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getProtectionProperties.
     * Read presentation protection properties. 
     * @param requestObj contains request parameters
     */
    public async getSlidesProtectionProperties(requestObj: requests.GetSlidesProtectionPropertiesRequest): Promise<{response: http.ClientResponse, body: model.ProtectionProperties}> {
        return await this.getProtectionProperties(requestObj.name, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read presentation slide info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSlide(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Slide}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlidesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getSlide.
     * Read presentation slide info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlide(requestObj: requests.GetSlidesSlideRequest): Promise<{response: http.ClientResponse, body: model.Slide}> {
        return await this.getSlide(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read slide background info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getBackground(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideBackground}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesSlideBackground.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlidesSlideBackground.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/background";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getBackground.
     * Read slide background info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideBackground(requestObj: requests.GetSlidesSlideBackgroundRequest): Promise<{response: http.ClientResponse, body: model.SlideBackground}> {
        return await this.getBackground(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read presentation slide comments. 
     * @param name Document name.
     * @param slideIndex The position of the slide to be reordered.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getComments(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideComments}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesSlideComments.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlidesSlideComments.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/comments";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideComments");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getComments.
     * Read presentation slide comments. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideComments(requestObj: requests.GetSlidesSlideCommentsRequest): Promise<{response: http.ClientResponse, body: model.SlideComments}> {
        return await this.getComments(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read slide images info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSlideImages(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Images}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesSlideImages.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlidesSlideImages.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/images";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Images");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getSlideImages.
     * Read slide images info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideImages(requestObj: requests.GetSlidesSlideImagesRequest): Promise<{response: http.ClientResponse, body: model.Images}> {
        return await this.getSlideImages(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read presentation slide properties. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSlideProperties(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideProperties}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesSlideProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slideProperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getSlideProperties.
     * Read presentation slide properties. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideProperties(requestObj: requests.GetSlidesSlidePropertiesRequest): Promise<{response: http.ClientResponse, body: model.SlideProperties}> {
        return await this.getSlideProperties(requestObj.name, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Extract slide text items. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param withEmpty True to include empty items.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSlideTextItems(name: string, slideIndex: number, withEmpty: boolean = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.TextItems}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesSlideTextItems.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlidesSlideTextItems.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/textItems";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withEmpty", withEmpty);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "TextItems");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getSlideTextItems.
     * Extract slide text items. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlideTextItems(requestObj: requests.GetSlidesSlideTextItemsRequest): Promise<{response: http.ClientResponse, body: model.TextItems}> {
        return await this.getSlideTextItems(requestObj.name, requestObj.slideIndex, requestObj.withEmpty, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read presentation slides info. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSlides(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Slides}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesSlidesList.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getSlides.
     * Read presentation slides info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesSlidesList(requestObj: requests.GetSlidesSlidesListRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        return await this.getSlides(requestObj.name, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read slide theme info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getTheme(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Theme}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesTheme.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlidesTheme.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/theme";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Theme");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getTheme.
     * Read slide theme info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesTheme(requestObj: requests.GetSlidesThemeRequest): Promise<{response: http.ClientResponse, body: model.Theme}> {
        return await this.getTheme(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read slide theme color scheme info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getColorScheme(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ColorScheme}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesThemeColorScheme.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlidesThemeColorScheme.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/theme/colorScheme";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ColorScheme");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getColorScheme.
     * Read slide theme color scheme info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesThemeColorScheme(requestObj: requests.GetSlidesThemeColorSchemeRequest): Promise<{response: http.ClientResponse, body: model.ColorScheme}> {
        return await this.getColorScheme(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read slide theme font scheme info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getFontScheme(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.FontScheme}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesThemeFontScheme.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlidesThemeFontScheme.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/theme/fontScheme";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FontScheme");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getFontScheme.
     * Read slide theme font scheme info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesThemeFontScheme(requestObj: requests.GetSlidesThemeFontSchemeRequest): Promise<{response: http.ClientResponse, body: model.FontScheme}> {
        return await this.getFontScheme(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read slide theme format scheme info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getFormatScheme(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.FormatScheme}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesThemeFormatScheme.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlidesThemeFormatScheme.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/theme/formatScheme";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FormatScheme");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getFormatScheme.
     * Read slide theme format scheme info. 
     * @param requestObj contains request parameters
     */
    public async getSlidesThemeFormatScheme(requestObj: requests.GetSlidesThemeFormatSchemeRequest): Promise<{response: http.ClientResponse, body: model.FormatScheme}> {
        return await this.getFormatScheme(requestObj.name, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read presentation document properties. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getViewProperties(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ViewProperties}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlidesViewProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/viewProperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ViewProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getViewProperties.
     * Read presentation document properties. 
     * @param requestObj contains request parameters
     */
    public async getSlidesViewProperties(requestObj: requests.GetSlidesViewPropertiesRequest): Promise<{response: http.ClientResponse, body: model.ViewProperties}> {
        return await this.getViewProperties(requestObj.name, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read paragraph portion info (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSubshapePortion(name: string, slideIndex: number, path: string = null, shapeIndex: number, paragraphIndex: number, portionIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSubshapeParagraphPortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSubshapeParagraphPortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSubshapeParagraphPortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getSubshapeParagraphPortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling getSubshapeParagraphPortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getSubshapePortion.
     * Read paragraph portion info (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async getSubshapeParagraphPortion(requestObj: requests.GetSubshapeParagraphPortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        return await this.getSubshapePortion(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.portionIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Read paragraph portions info (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSubshapePortions(name: string, slideIndex: number, path: string = null, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSubshapeParagraphPortions.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSubshapeParagraphPortions.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSubshapeParagraphPortions.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getSubshapeParagraphPortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getSubshapePortions.
     * Read paragraph portions info (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async getSubshapeParagraphPortions(requestObj: requests.GetSubshapeParagraphPortionsRequest): Promise<{response: http.ClientResponse, body: model.Portions}> {
        return await this.getSubshapePortions(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Move file 
     * @param srcPath Source file path e.g. '/src.ext'
     * @param destPath Destination file path e.g. '/dest.ext'
     * @param srcStorageName Source storage name
     * @param destStorageName Destination storage name
     * @param versionId File version ID to move
     */
    public async moveFile(srcPath: any = null, destPath: string = null, srcStorageName: string = null, destStorageName: string = null, versionId: string = null): Promise<{response: http.ClientResponse}> {
        if (srcPath instanceof requests.MoveFileRequest) {
            const requestObject = srcPath as requests.MoveFileRequest;
            srcPath = requestObject.srcPath;
            destPath = requestObject.destPath;
            srcStorageName = requestObject.srcStorageName;
            destStorageName = requestObject.destStorageName;
            versionId = requestObject.versionId;
        }
        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('The required parameter "srcPath" was null or undefined when calling moveFile.');
        }
        // verify required parameter 'destPath' is not null or undefined
        if (destPath === null || destPath === undefined) {
            throw new Error('The required parameter "destPath" was null or undefined when calling moveFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/move/{srcPath}";
        localVarPath = addPathParameterToUrl(localVarPath, "srcPath", ObjectSerializer.toString(srcPath));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * Move folder 
     * @param srcPath Folder path to move e.g. '/folder'
     * @param destPath Destination folder path to move to e.g '/dst'
     * @param srcStorageName Source storage name
     * @param destStorageName Destination storage name
     */
    public async moveFolder(srcPath: any = null, destPath: string = null, srcStorageName: string = null, destStorageName: string = null): Promise<{response: http.ClientResponse}> {
        if (srcPath instanceof requests.MoveFolderRequest) {
            const requestObject = srcPath as requests.MoveFolderRequest;
            srcPath = requestObject.srcPath;
            destPath = requestObject.destPath;
            srcStorageName = requestObject.srcStorageName;
            destStorageName = requestObject.destStorageName;
        }
        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('The required parameter "srcPath" was null or undefined when calling moveFolder.');
        }
        // verify required parameter 'destPath' is not null or undefined
        if (destPath === null || destPath === undefined) {
            throw new Error('The required parameter "destPath" was null or undefined when calling moveFolder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/folder/move/{srcPath}";
        localVarPath = addPathParameterToUrl(localVarPath, "srcPath", ObjectSerializer.toString(srcPath));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * Check if file or folder exists 
     * @param path File or folder path e.g. '/file.ext' or '/folder'
     * @param storageName Storage name
     * @param versionId File version ID
     */
    public async objectExists(path: any = null, storageName: string = null, versionId: string = null): Promise<{response: http.ClientResponse, body: model.ObjectExist}> {
        if (path instanceof requests.ObjectExistsRequest) {
            const requestObject = path as requests.ObjectExistsRequest;
            path = requestObject.path;
            storageName = requestObject.storageName;
            versionId = requestObject.versionId;
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/exist/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ObjectExist");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Creates new paragraph. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param dto Paragraph DTO.
     * @param position Position of the new paragraph in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createParagraph(name: string, slideIndex: number, shapeIndex: number, dto: model.Paragraph, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postAddNewParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postAddNewParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling postAddNewParagraph.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling postAddNewParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createParagraph.
     * Creates new paragraph. 
     * @param requestObj contains request parameters
     */
    public async postAddNewParagraph(requestObj: requests.PostAddNewParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        return await this.createParagraph(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.dto, requestObj.position, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Creates new portion. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param dto Portion DTO.
     * @param position Position of the new portion in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createPortion(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, dto: model.Portion, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postAddNewPortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postAddNewPortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling postAddNewPortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling postAddNewPortion.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling postAddNewPortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createPortion.
     * Creates new portion. 
     * @param requestObj contains request parameters
     */
    public async postAddNewPortion(requestObj: requests.PostAddNewPortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        return await this.createPortion(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.dto, requestObj.position, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Create new shape. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param dto Shape DTO.
     * @param shapeToClone Optional index for clone shape instead of adding a new one.
     * @param position Position of the new shape in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createShape(name: string, slideIndex: number, dto: model.ShapeBase = null, shapeToClone: number = null, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postAddNewShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postAddNewShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeToClone", shapeToClone);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createShape.
     * Create new shape. 
     * @param requestObj contains request parameters
     */
    public async postAddNewShape(requestObj: requests.PostAddNewShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        return await this.createShape(requestObj.name, requestObj.slideIndex, requestObj.dto, requestObj.shapeToClone, requestObj.position, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Create new shape (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param dto Shape DTO.
     * @param shapeToClone Optional index for clone shape instead of adding a new one.
     * @param position Position of the new shape in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSubshape(name: string, slideIndex: number, path: string = null, dto: model.ShapeBase = null, shapeToClone: number = null, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postAddNewSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postAddNewSubshape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeToClone", shapeToClone);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createSubshape.
     * Create new shape (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async postAddNewSubshape(requestObj: requests.PostAddNewSubshapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        return await this.createSubshape(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.dto, requestObj.shapeToClone, requestObj.position, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Creates new paragraph (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param dto Paragraph DTO.
     * @param position Position of the new paragraph in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSubshapeParagraph(name: string, slideIndex: number, path: string = null, shapeIndex: number, dto: model.Paragraph, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postAddNewSubshapeParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postAddNewSubshapeParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling postAddNewSubshapeParagraph.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling postAddNewSubshapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createSubshapeParagraph.
     * Creates new paragraph (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async postAddNewSubshapeParagraph(requestObj: requests.PostAddNewSubshapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        return await this.createSubshapeParagraph(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapeIndex, requestObj.dto, requestObj.position, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Creates new portion (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param dto Portion DTO.
     * @param position Position of the new portion in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSubshapePortion(name: string, slideIndex: number, path: string = null, shapeIndex: number, paragraphIndex: number, dto: model.Portion, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postAddNewSubshapePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postAddNewSubshapePortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling postAddNewSubshapePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling postAddNewSubshapePortion.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling postAddNewSubshapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createSubshapePortion.
     * Creates new portion (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async postAddNewSubshapePortion(requestObj: requests.PostAddNewSubshapePortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        return await this.createSubshapePortion(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.dto, requestObj.position, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Add new notes slide. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param dto A NotesSlide object with notes slide data.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createNotesSlide(name: string, slideIndex: number, dto: model.NotesSlide, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postAddNotesSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postAddNotesSlide.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling postAddNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createNotesSlide.
     * Add new notes slide. 
     * @param requestObj contains request parameters
     */
    public async postAddNotesSlide(requestObj: requests.PostAddNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
        return await this.createNotesSlide(requestObj.name, requestObj.slideIndex, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Changes the placement of selected shapes on the slide. Aligns shapes to the margins or the edge of the slide or aligns them relative to each other. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param alignmentType Alignment type that will be applied to the shapes.
     * @param alignToSlide If true, shapes will be aligned relative to the slide edges.
     * @param shapes Shapes indexes.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async alignShapes(name: string, slideIndex: number, alignmentType: string, alignToSlide: boolean = null, shapes: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postAlignShapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postAlignShapes.');
        }
        // verify required parameter 'alignmentType' is not null or undefined
        if (alignmentType === null || alignmentType === undefined) {
            throw new Error('The required parameter "alignmentType" was null or undefined when calling postAlignShapes.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/align/{alignmentType}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "alignmentType", ObjectSerializer.toString(alignmentType));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "alignToSlide", alignToSlide);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapes", shapes);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use alignShapes.
     * Changes the placement of selected shapes on the slide. Aligns shapes to the margins or the edge of the slide or aligns them relative to each other. 
     * @param requestObj contains request parameters
     */
    public async postAlignShapes(requestObj: requests.PostAlignShapesRequest): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        return await this.alignShapes(requestObj.name, requestObj.slideIndex, requestObj.alignmentType, requestObj.alignToSlide, requestObj.shapes, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Add a new category to a chart. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param category Category DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createChartCategory(name: string, slideIndex: number, shapeIndex: number, category: model.ChartCategory, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Chart}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postChartCategory.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postChartCategory.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling postChartCategory.');
        }
        // verify required parameter 'category' is not null or undefined
        if (category === null || category === undefined) {
            throw new Error('The required parameter "category" was null or undefined when calling postChartCategory.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/categories";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: category
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createChartCategory.
     * Add a new category to a chart. 
     * @param requestObj contains request parameters
     */
    public async postChartCategory(requestObj: requests.PostChartCategoryRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        return await this.createChartCategory(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.category, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Add a new data point to a chart series. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param seriesIndex Series index.
     * @param dataPoint Data point DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createChartDataPoint(name: string, slideIndex: number, shapeIndex: number, seriesIndex: number, dataPoint: model.DataPoint, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Chart}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postChartDataPoint.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postChartDataPoint.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling postChartDataPoint.');
        }
        // verify required parameter 'seriesIndex' is not null or undefined
        if (seriesIndex === null || seriesIndex === undefined) {
            throw new Error('The required parameter "seriesIndex" was null or undefined when calling postChartDataPoint.');
        }
        // verify required parameter 'dataPoint' is not null or undefined
        if (dataPoint === null || dataPoint === undefined) {
            throw new Error('The required parameter "dataPoint" was null or undefined when calling postChartDataPoint.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/series/{seriesIndex}/dataPoints";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "seriesIndex", ObjectSerializer.toString(seriesIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dataPoint
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createChartDataPoint.
     * Add a new data point to a chart series. 
     * @param requestObj contains request parameters
     */
    public async postChartDataPoint(requestObj: requests.PostChartDataPointRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        return await this.createChartDataPoint(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.seriesIndex, requestObj.dataPoint, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Add a new series to a chart. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index (must be a chart).
     * @param series Series DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createChartSeries(name: string, slideIndex: number, shapeIndex: number, series: model.Series, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Chart}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postChartSeries.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postChartSeries.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling postChartSeries.');
        }
        // verify required parameter 'series' is not null or undefined
        if (series === null || series === undefined) {
            throw new Error('The required parameter "series" was null or undefined when calling postChartSeries.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/series";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: series
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createChartSeries.
     * Add a new series to a chart. 
     * @param requestObj contains request parameters
     */
    public async postChartSeries(requestObj: requests.PostChartSeriesRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        return await this.createChartSeries(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.series, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Copy layoutSlide from source presentation. 
     * @param name Document name.
     * @param cloneFrom Name of the document to clone layoutSlide from.
     * @param cloneFromPosition Position of cloned layout slide.
     * @param cloneFromPassword Password for the document to clone layoutSlide from.
     * @param cloneFromStorage Storage of the document to clone layoutSlide from.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async copyLayoutSlide(name: string, cloneFrom: string, cloneFromPosition: number, cloneFromPassword: string = null, cloneFromStorage: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.LayoutSlide}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postCopyLayoutSlideFromSourcePresentation.');
        }
        // verify required parameter 'cloneFrom' is not null or undefined
        if (cloneFrom === null || cloneFrom === undefined) {
            throw new Error('The required parameter "cloneFrom" was null or undefined when calling postCopyLayoutSlideFromSourcePresentation.');
        }
        // verify required parameter 'cloneFromPosition' is not null or undefined
        if (cloneFromPosition === null || cloneFromPosition === undefined) {
            throw new Error('The required parameter "cloneFromPosition" was null or undefined when calling postCopyLayoutSlideFromSourcePresentation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/layoutSlides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFrom", cloneFrom);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromPosition", cloneFromPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromStorage", cloneFromStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "cloneFromPassword", cloneFromPassword);
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use copyLayoutSlide.
     * Copy layoutSlide from source presentation. 
     * @param requestObj contains request parameters
     */
    public async postCopyLayoutSlideFromSourcePresentation(requestObj: requests.PostCopyLayoutSlideFromSourcePresentationRequest): Promise<{response: http.ClientResponse, body: model.LayoutSlide}> {
        return await this.copyLayoutSlide(requestObj.name, requestObj.cloneFrom, requestObj.cloneFromPosition, requestObj.cloneFromPassword, requestObj.cloneFromStorage, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Copy masterSlide from source presentation. 
     * @param name Document name.
     * @param cloneFrom Name of the document to clone masterSlide from.
     * @param cloneFromPosition Position of cloned master slide.
     * @param cloneFromPassword Password for the document to clone masterSlide from.
     * @param cloneFromStorage Storage of the document to clone masterSlide from.
     * @param applyToAll True to apply cloned master slide to every existing slide.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async copyMasterSlide(name: string, cloneFrom: string, cloneFromPosition: number, cloneFromPassword: string = null, cloneFromStorage: string = null, applyToAll: boolean = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.MasterSlide}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postCopyMasterSlideFromSourcePresentation.');
        }
        // verify required parameter 'cloneFrom' is not null or undefined
        if (cloneFrom === null || cloneFrom === undefined) {
            throw new Error('The required parameter "cloneFrom" was null or undefined when calling postCopyMasterSlideFromSourcePresentation.');
        }
        // verify required parameter 'cloneFromPosition' is not null or undefined
        if (cloneFromPosition === null || cloneFromPosition === undefined) {
            throw new Error('The required parameter "cloneFromPosition" was null or undefined when calling postCopyMasterSlideFromSourcePresentation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/masterSlides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFrom", cloneFrom);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromPosition", cloneFromPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cloneFromStorage", cloneFromStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "applyToAll", applyToAll);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "cloneFromPassword", cloneFromPassword);
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "MasterSlide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use copyMasterSlide.
     * Copy masterSlide from source presentation. 
     * @param requestObj contains request parameters
     */
    public async postCopyMasterSlideFromSourcePresentation(requestObj: requests.PostCopyMasterSlideFromSourcePresentationRequest): Promise<{response: http.ClientResponse, body: model.MasterSlide}> {
        return await this.copyMasterSlide(requestObj.name, requestObj.cloneFrom, requestObj.cloneFromPosition, requestObj.cloneFromPassword, requestObj.cloneFromStorage, requestObj.applyToAll, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Get image binary data. 
     * @param document Document data.
     * @param index Image index.
     * @param password Document password.
     */
    public async downloadImageDefaultFormatOnline(document: Buffer, index: number, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postExportImageWithDefaultFormat.');
        }
        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new Error('The required parameter "index" was null or undefined when calling postExportImageWithDefaultFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/images/{index}";
        localVarPath = addPathParameterToUrl(localVarPath, "index", ObjectSerializer.toString(index));
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadImageDefaultFormatOnline.
     * Get image binary data. 
     * @param requestObj contains request parameters
     */
    public async postExportImageWithDefaultFormat(requestObj: requests.PostExportImageWithDefaultFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadImageDefaultFormatOnline(requestObj.document, requestObj.index, requestObj.password);
    }

    /**
     * Get image in specified format. 
     * @param document Document data.
     * @param index Image index.
     * @param format Export format (png, jpg, gif).
     * @param password Document password.
     */
    public async downloadImageOnline(document: Buffer, index: number, format: string, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postExportImageWithFormat.');
        }
        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new Error('The required parameter "index" was null or undefined when calling postExportImageWithFormat.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling postExportImageWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/images/{index}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "index", ObjectSerializer.toString(index));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadImageOnline.
     * Get image in specified format. 
     * @param requestObj contains request parameters
     */
    public async postExportImageWithFormat(requestObj: requests.PostExportImageWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadImageOnline(requestObj.document, requestObj.index, requestObj.format, requestObj.password);
    }

    /**
     * Get all presentation images in specified format.  
     * @param document Document data.
     * @param format Export format (png, jpg, gif).
     * @param password Document password.
     */
    public async downloadImagesOnline(document: Buffer, format: string, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postExportImagesFromRequestWithFormat.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling postExportImagesFromRequestWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/images/download/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadImagesOnline.
     * Get all presentation images in specified format.  
     * @param requestObj contains request parameters
     */
    public async postExportImagesFromRequestWithFormat(requestObj: requests.PostExportImagesFromRequestWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadImagesOnline(requestObj.document, requestObj.format, requestObj.password);
    }

    /**
     * Get all presentation images. 
     * @param name 
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async downloadImagesDefaultFormat(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postExportImagesWithDefaultFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/images/download";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadImagesDefaultFormat.
     * Get all presentation images. 
     * @param requestObj contains request parameters
     */
    public async postExportImagesWithDefaultFormat(requestObj: requests.PostExportImagesWithDefaultFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadImagesDefaultFormat(requestObj.name, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Get all presentation images in specified format. 
     * @param name 
     * @param format Export format (png, jpg, gif).
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async downloadImages(name: string, format: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postExportImagesWithFormat.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling postExportImagesWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/images/download/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadImages.
     * Get all presentation images in specified format. 
     * @param requestObj contains request parameters
     */
    public async postExportImagesWithFormat(requestObj: requests.PostExportImagesWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadImages(requestObj.name, requestObj.format, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Render shape to specified picture format. 
     * @param document Document data.
     * @param slideIndex Slide index.
     * @param shapeIndex Index of shape starting from 1
     * @param format Export picture format.
     * @param scaleX X scale ratio.
     * @param scaleY Y scale ratio.
     * @param bounds Shape thumbnail bounds type.
     * @param password Document password.
     * @param storage Document storage.
     * @param fontsFolder Fonts folder.
     */
    public async downloadShapeOnline(document: Buffer, slideIndex: number, shapeIndex: number, format: string, scaleX: number = null, scaleY: number = null, bounds: string = null, password: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postExportShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postExportShape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling postExportShape.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling postExportShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/slides/{slideIndex}/shapes/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadShapeOnline.
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async postExportShape(requestObj: requests.PostExportShapeRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadShapeOnline(requestObj.document, requestObj.slideIndex, requestObj.shapeIndex, requestObj.format, requestObj.scaleX, requestObj.scaleY, requestObj.bounds, requestObj.password, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Save a slide to a specified format. 
     * @param document Document data.
     * @param slideIndex Slide index.
     * @param format Output file format.
     * @param width Output file width; 0 to not adjust the size. Default is 0.
     * @param height Output file height; 0 to not adjust the size. Default is 0.
     * @param password Document password.
     * @param storage Document storage.
     * @param fontsFolder Storage folder containing custom fonts to be used with the document.
     */
    public async downloadSlideOnline(document: Buffer, slideIndex: number, format: string, width: number = null, height: number = null, password: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postExportSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postExportSlide.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling postExportSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/slides/{slideIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadSlideOnline.
     * Save a slide to a specified format. 
     * @param requestObj contains request parameters
     */
    public async postExportSlide(requestObj: requests.PostExportSlideRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadSlideOnline(requestObj.document, requestObj.slideIndex, requestObj.format, requestObj.width, requestObj.height, requestObj.password, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Read notes slide info. 
     * @param document Document data.
     * @param slideIndex Slide index.
     * @param password Document password.
     */
    public async getNotesSlideOnline(document: Buffer, slideIndex: number, password: string = null): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postGetNotesSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postGetNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use getNotesSlideOnline.
     * Read notes slide info. 
     * @param requestObj contains request parameters
     */
    public async postGetNotesSlide(requestObj: requests.PostGetNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
        return await this.getNotesSlideOnline(requestObj.document, requestObj.slideIndex, requestObj.password);
    }

    /**
     * Get info whether a notes slide exists. 
     * @param document Document data.
     * @param slideIndex Slide index.
     * @param password Document password.
     */
    public async notesSlideExistsOnline(document: Buffer, slideIndex: number, password: string = null): Promise<{response: http.ClientResponse, body: model.EntityExists}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postGetNotesSlideExists.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postGetNotesSlideExists.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/slides/{slideIndex}/notesSlide/exist";
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "EntityExists");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use notesSlideExistsOnline.
     * Get info whether a notes slide exists. 
     * @param requestObj contains request parameters
     */
    public async postGetNotesSlideExists(requestObj: requests.PostGetNotesSlideExistsRequest): Promise<{response: http.ClientResponse, body: model.EntityExists}> {
        return await this.notesSlideExistsOnline(requestObj.document, requestObj.slideIndex, requestObj.password);
    }

    /**
     * Convert notes slide to the specified image format. 
     * @param document Document data.
     * @param slideIndex Slide index.
     * @param format Output file format.
     * @param width Output file width.
     * @param height Output file height.
     * @param password Document password.
     * @param fontsFolder Storage folder containing custom fonts to be used with the document.
     */
    public async downloadNotesSlideOnline(document: Buffer, slideIndex: number, format: string, width: number = null, height: number = null, password: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postGetNotesSlideWithFormat.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postGetNotesSlideWithFormat.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling postGetNotesSlideWithFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/slides/{slideIndex}/notesSlide/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadNotesSlideOnline.
     * Convert notes slide to the specified image format. 
     * @param requestObj contains request parameters
     */
    public async postGetNotesSlideWithFormat(requestObj: requests.PostGetNotesSlideWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadNotesSlideOnline(requestObj.document, requestObj.slideIndex, requestObj.format, requestObj.width, requestObj.height, requestObj.password, requestObj.fontsFolder);
    }

    /**
     * Adds an image watermark to each slide of the presentation.  Image can be provided as a part of the form or withing PictureFrame DTO for detailed customization. Both options are applicable simultaneously.  
     * @param name Document name.
     * @param image Image data.
     * @param pictureFrame PictureFrame DTO
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createImageWatermark(name: string, image: Buffer = null, pictureFrame: model.PictureFrame = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postImageWatermark.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/watermark/image";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: pictureFrame
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (image != null) 
        {
            localVarFiles.push(image);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * @deprecated Use createImageWatermark.
     * Adds an image watermark to each slide of the presentation.  Image can be provided as a part of the form or withing PictureFrame DTO for detailed customization. Both options are applicable simultaneously.  
     * @param requestObj contains request parameters
     */
    public async postImageWatermark(requestObj: requests.PostImageWatermarkRequest): Promise<{response: http.ClientResponse}> {
        return await this.createImageWatermark(requestObj.name, requestObj.image, requestObj.pictureFrame, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Adds an image watermark to each slide of the presentation.  Image can be provided as a part of the form or withing PictureFrame DTO for detailed customization. Both options are applicable simultaneously.  
     * @param document Document data.
     * @param image Image data.
     * @param pictureFrame PictureFrame DTO.
     * @param password Document password.
     */
    public async createImageWatermarkOnline(document: Buffer, image: Buffer = null, pictureFrame: model.PictureFrame = null, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postImageWatermarkOnline.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/watermark/image";
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: pictureFrame,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        if (image != null) 
        {
            localVarFiles.push(image);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createImageWatermarkOnline.
     * Adds an image watermark to each slide of the presentation.  Image can be provided as a part of the form or withing PictureFrame DTO for detailed customization. Both options are applicable simultaneously.  
     * @param requestObj contains request parameters
     */
    public async postImageWatermarkOnline(requestObj: requests.PostImageWatermarkOnlineRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.createImageWatermarkOnline(requestObj.document, requestObj.image, requestObj.pictureFrame, requestObj.password);
    }

    /**
     * Get all presentation images. 
     * @param document Document data.
     * @param password Document password.
     */
    public async downloadImagesDefaultFormatOnline(document: Buffer, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postImagesFromRequestWithDefaultFormat.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/images/download";
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadImagesDefaultFormatOnline.
     * Get all presentation images. 
     * @param requestObj contains request parameters
     */
    public async postImagesFromRequestWithDefaultFormat(requestObj: requests.PostImagesFromRequestWithDefaultFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadImagesDefaultFormatOnline(requestObj.document, requestObj.password);
    }

    /**
     * Creates new paragraph. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param dto Paragraph DTO.
     * @param position Position of the new paragraph in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createNotesSlideParagraph(name: string, slideIndex: number, shapeIndex: number, dto: model.Paragraph, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postNotesSlideAddNewParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postNotesSlideAddNewParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling postNotesSlideAddNewParagraph.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling postNotesSlideAddNewParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createNotesSlideParagraph.
     * Creates new paragraph. 
     * @param requestObj contains request parameters
     */
    public async postNotesSlideAddNewParagraph(requestObj: requests.PostNotesSlideAddNewParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        return await this.createNotesSlideParagraph(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.dto, requestObj.position, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Creates new portion. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param dto Portion DTO.
     * @param position Position of the new portion in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createNotesSlidePortion(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, dto: model.Portion, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postNotesSlideAddNewPortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postNotesSlideAddNewPortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling postNotesSlideAddNewPortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling postNotesSlideAddNewPortion.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling postNotesSlideAddNewPortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createNotesSlidePortion.
     * Creates new portion. 
     * @param requestObj contains request parameters
     */
    public async postNotesSlideAddNewPortion(requestObj: requests.PostNotesSlideAddNewPortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        return await this.createNotesSlidePortion(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.dto, requestObj.position, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Create new shape. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param dto Shape DTO.
     * @param shapeToClone Optional index for clone shape instead of adding a new one.
     * @param position Position of the new shape in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createNotesSlideShape(name: string, slideIndex: number, dto: model.ShapeBase, shapeToClone: number = null, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postNotesSlideAddNewShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postNotesSlideAddNewShape.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling postNotesSlideAddNewShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeToClone", shapeToClone);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createNotesSlideShape.
     * Create new shape. 
     * @param requestObj contains request parameters
     */
    public async postNotesSlideAddNewShape(requestObj: requests.PostNotesSlideAddNewShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        return await this.createNotesSlideShape(requestObj.name, requestObj.slideIndex, requestObj.dto, requestObj.shapeToClone, requestObj.position, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Render shape to specified picture format. 
     * @param name Presentation name.
     * @param slideIndex Slide index.
     * @param shapeIndex Index of shape starting from 1
     * @param format Export picture format.
     * @param options export options
     * @param scaleX X scale ratio.
     * @param scaleY Y scale ratio.
     * @param bounds Shape thumbnail bounds type.
     * @param password Document password.
     * @param folder Presentation folder.
     * @param storage Presentation storage.
     * @param fontsFolder Fonts folder.
     */
    public async downloadNotesSlideShape(name: string, slideIndex: number, shapeIndex: number, format: string, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: string = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling postNotesSlideShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadNotesSlideShape.
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async postNotesSlideShapeSaveAs(requestObj: requests.PostNotesSlideShapeSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadNotesSlideShape(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.format, requestObj.options, requestObj.scaleX, requestObj.scaleY, requestObj.bounds, requestObj.password, requestObj.folder, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Merge the presentation with other presentations specified in the request parameter. 
     * @param name Document name.
     * @param request PresentationsMergeRequest with a list of presentations to merge.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async merge(name: string, request: model.PresentationsMergeRequest, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Document}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postPresentationMerge.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('The required parameter "request" was null or undefined when calling postPresentationMerge.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/merge";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: request
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use merge.
     * Merge the presentation with other presentations specified in the request parameter. 
     * @param requestObj contains request parameters
     */
    public async postPresentationMerge(requestObj: requests.PostPresentationMergeRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        return await this.merge(requestObj.name, requestObj.request, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Replace text with a new value. 
     * @param document Document data.
     * @param oldValue Text value to be replaced.
     * @param newValue Text value to replace with.
     * @param ignoreCase True if character case must be ignored.
     * @param password Document password.
     */
    public async replacePresentationTextOnline(document: Buffer, oldValue: string, newValue: string, ignoreCase: boolean = null, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postPresentationReplaceText.');
        }
        // verify required parameter 'oldValue' is not null or undefined
        if (oldValue === null || oldValue === undefined) {
            throw new Error('The required parameter "oldValue" was null or undefined when calling postPresentationReplaceText.');
        }
        // verify required parameter 'newValue' is not null or undefined
        if (newValue === null || newValue === undefined) {
            throw new Error('The required parameter "newValue" was null or undefined when calling postPresentationReplaceText.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/replaceText";
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldValue", oldValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newValue", newValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreCase", ignoreCase);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use replacePresentationTextOnline.
     * Replace text with a new value. 
     * @param requestObj contains request parameters
     */
    public async postPresentationReplaceText(requestObj: requests.PostPresentationReplaceTextRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.replacePresentationTextOnline(requestObj.document, requestObj.oldValue, requestObj.newValue, requestObj.ignoreCase, requestObj.password);
    }

    /**
     * Splits PowerPoint presentation slides from the specified range into separate files and exports them in the specified file format. If the range is not provided all slides will be processed.  
     * @param document Document data.
     * @param format ExportFormat
     * @param width Slide width.
     * @param height Slide height.
     * @param from The start slide number for splitting, if is not specified splitting starts from the first slide of the presentation.
     * @param to The last slide number for splitting, if is not specified splitting ends at the last slide of the document.
     * @param password Document password.
     * @param storage Document storage.
     * @param fontsFolder Custom fonts folder.
     */
    public async splitOnline(document: Buffer, format: string, width: number = null, height: number = null, from: number = null, to: number = null, password: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postPresentationSplit.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling postPresentationSplit.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/split/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "from", from);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "to", to);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use splitOnline.
     * Splits PowerPoint presentation slides from the specified range into separate files and exports them in the specified file format. If the range is not provided all slides will be processed.  
     * @param requestObj contains request parameters
     */
    public async postPresentationSplit(requestObj: requests.PostPresentationSplitRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.splitOnline(requestObj.document, requestObj.format, requestObj.width, requestObj.height, requestObj.from, requestObj.to, requestObj.password, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Create a section starting at a specified slide index. 
     * @param name Document name.
     * @param sectionName Section name.
     * @param slideIndex Slide index (one-based).
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSection(name: string, sectionName: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Sections}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSection.');
        }
        // verify required parameter 'sectionName' is not null or undefined
        if (sectionName === null || sectionName === undefined) {
            throw new Error('The required parameter "sectionName" was null or undefined when calling postSection.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postSection.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sectionName", sectionName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slideIndex", slideIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createSection.
     * Create a section starting at a specified slide index. 
     * @param requestObj contains request parameters
     */
    public async postSection(requestObj: requests.PostSectionRequest): Promise<{response: http.ClientResponse, body: model.Sections}> {
        return await this.createSection(requestObj.name, requestObj.sectionName, requestObj.slideIndex, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Move presentation section to a specified position. 
     * @param name Document name.
     * @param sectionIndex The position of the section to be reordered.
     * @param newPosition The new position of the reordered section.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async moveSection(name: string, sectionIndex: number, newPosition: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Sections}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSectionMove.');
        }
        // verify required parameter 'sectionIndex' is not null or undefined
        if (sectionIndex === null || sectionIndex === undefined) {
            throw new Error('The required parameter "sectionIndex" was null or undefined when calling postSectionMove.');
        }
        // verify required parameter 'newPosition' is not null or undefined
        if (newPosition === null || newPosition === undefined) {
            throw new Error('The required parameter "newPosition" was null or undefined when calling postSectionMove.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections/{sectionIndex}/move";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "sectionIndex", ObjectSerializer.toString(sectionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newPosition", newPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use moveSection.
     * Move presentation section to a specified position. 
     * @param requestObj contains request parameters
     */
    public async postSectionMove(requestObj: requests.PostSectionMoveRequest): Promise<{response: http.ClientResponse, body: model.Sections}> {
        return await this.moveSection(requestObj.name, requestObj.sectionIndex, requestObj.newPosition, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Render shape to specified picture format. 
     * @param name Presentation name.
     * @param slideIndex Slide index.
     * @param shapeIndex Index of shape starting from 1
     * @param format Export picture format.
     * @param options export options
     * @param scaleX X scale ratio.
     * @param scaleY Y scale ratio.
     * @param bounds Shape thumbnail bounds type.
     * @param password Document password.
     * @param folder Presentation folder.
     * @param storage Presentation storage.
     * @param fontsFolder Fonts folder.
     */
    public async downloadShape(name: string, slideIndex: number, shapeIndex: number, format: string, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: string = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postShapeSaveAs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postShapeSaveAs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling postShapeSaveAs.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling postShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadShape.
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async postShapeSaveAs(requestObj: requests.PostShapeSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadShape(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.format, requestObj.options, requestObj.scaleX, requestObj.scaleY, requestObj.bounds, requestObj.password, requestObj.folder, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Add an effect to slide animation. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param effect Animation effect DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createAnimationEffect(name: string, slideIndex: number, effect: model.Effect, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlideAnimationEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postSlideAnimationEffect.');
        }
        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('The required parameter "effect" was null or undefined when calling postSlideAnimationEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/mainSequence";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: effect
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createAnimationEffect.
     * Add an effect to slide animation. 
     * @param requestObj contains request parameters
     */
    public async postSlideAnimationEffect(requestObj: requests.PostSlideAnimationEffectRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        return await this.createAnimationEffect(requestObj.name, requestObj.slideIndex, requestObj.effect, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Set slide animation. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param sequence Animation sequence DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createAnimationInteractiveSequence(name: string, slideIndex: number, sequence: model.InteractiveSequence, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'sequence' is not null or undefined
        if (sequence === null || sequence === undefined) {
            throw new Error('The required parameter "sequence" was null or undefined when calling postSlideAnimationInteractiveSequence.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: sequence
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createAnimationInteractiveSequence.
     * Set slide animation. 
     * @param requestObj contains request parameters
     */
    public async postSlideAnimationInteractiveSequence(requestObj: requests.PostSlideAnimationInteractiveSequenceRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        return await this.createAnimationInteractiveSequence(requestObj.name, requestObj.slideIndex, requestObj.sequence, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Add an animation effect to a slide interactive sequence. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param sequenceIndex The position of the interactive sequence.
     * @param effect Animation effect DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createAnimationInteractiveSequenceEffect(name: string, slideIndex: number, sequenceIndex: number, effect: model.Effect, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'sequenceIndex' is not null or undefined
        if (sequenceIndex === null || sequenceIndex === undefined) {
            throw new Error('The required parameter "sequenceIndex" was null or undefined when calling postSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('The required parameter "effect" was null or undefined when calling postSlideAnimationInteractiveSequenceEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences/{sequenceIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "sequenceIndex", ObjectSerializer.toString(sequenceIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: effect
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createAnimationInteractiveSequenceEffect.
     * Add an animation effect to a slide interactive sequence. 
     * @param requestObj contains request parameters
     */
    public async postSlideAnimationInteractiveSequenceEffect(requestObj: requests.PostSlideAnimationInteractiveSequenceEffectRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        return await this.createAnimationInteractiveSequenceEffect(requestObj.name, requestObj.slideIndex, requestObj.sequenceIndex, requestObj.effect, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Replace slide text with a new value. 
     * @param document Document data.
     * @param slideIndex Index of target slide.
     * @param oldValue Text value to be replaced.
     * @param newValue Text value to replace with.
     * @param ignoreCase True if character case must be ignored.
     * @param password Document password.
     */
    public async replaceSlideTextOnline(document: Buffer, slideIndex: number, oldValue: string, newValue: string, ignoreCase: boolean = null, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postSlideReplaceText.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postSlideReplaceText.');
        }
        // verify required parameter 'oldValue' is not null or undefined
        if (oldValue === null || oldValue === undefined) {
            throw new Error('The required parameter "oldValue" was null or undefined when calling postSlideReplaceText.');
        }
        // verify required parameter 'newValue' is not null or undefined
        if (newValue === null || newValue === undefined) {
            throw new Error('The required parameter "newValue" was null or undefined when calling postSlideReplaceText.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/slides/{slideIndex}/replaceText";
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldValue", oldValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newValue", newValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreCase", ignoreCase);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use replaceSlideTextOnline.
     * Replace slide text with a new value. 
     * @param requestObj contains request parameters
     */
    public async postSlideReplaceText(requestObj: requests.PostSlideReplaceTextRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.replaceSlideTextOnline(requestObj.document, requestObj.slideIndex, requestObj.oldValue, requestObj.newValue, requestObj.ignoreCase, requestObj.password);
    }

    /**
     * Save a slide to a specified format. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param format Output file format.
     * @param options Export options.
     * @param width Output file width; 0 to not adjust the size. Default is 0.
     * @param height Output file height; 0 to not adjust the size. Default is 0.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     * @param fontsFolder Storage folder containing custom fonts to be used with the document.
     */
    public async downloadSlide(name: string, slideIndex: number, format: string, options: model.ExportOptions = null, width: number = null, height: number = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlideSaveAs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postSlideSaveAs.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling postSlideSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadSlide.
     * Save a slide to a specified format. 
     * @param requestObj contains request parameters
     */
    public async postSlideSaveAs(requestObj: requests.PostSlideSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadSlide(requestObj.name, requestObj.slideIndex, requestObj.format, requestObj.options, requestObj.width, requestObj.height, requestObj.password, requestObj.folder, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Create a slide. 
     * @param name Document name.
     * @param layoutAlias Alias of layout slide for new slide. Alias may be the type of layout, name of layout slide or index
     * @param position The target position at which to create the slide. Add to the end by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSlide(name: string, layoutAlias: string = null, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Slides}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesAdd.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "layoutAlias", layoutAlias);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createSlide.
     * Create a slide. 
     * @param requestObj contains request parameters
     */
    public async postSlidesAdd(requestObj: requests.PostSlidesAddRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        return await this.createSlide(requestObj.name, requestObj.layoutAlias, requestObj.position, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Convert presentation from request content to format specified. 
     * @param document Document data.
     * @param format Export format.
     * @param password Document password.
     * @param storage Document storage.
     * @param fontsFolder Custom fonts folder.
     */
    public async convert(document: Buffer, format: string, password: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postSlidesConvert.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling postSlidesConvert.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/convert/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use convert.
     * Convert presentation from request content to format specified. 
     * @param requestObj contains request parameters
     */
    public async postSlidesConvert(requestObj: requests.PostSlidesConvertRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.convert(requestObj.document, requestObj.format, requestObj.password, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Copy a slide from the current or another presentation. 
     * @param name Document name.
     * @param slideToCopy The index of the slide to be copied from the source presentation.
     * @param position The target position at which to copy the slide. Copy to the end by default.
     * @param source Name of the document to copy a slide from.
     * @param sourcePassword Password for the document to copy a slide from.
     * @param sourceStorage Template storage name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async copySlide(name: string, slideToCopy: number, position: number = null, source: string = null, sourcePassword: string = null, sourceStorage: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Slides}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesCopy.');
        }
        // verify required parameter 'slideToCopy' is not null or undefined
        if (slideToCopy === null || slideToCopy === undefined) {
            throw new Error('The required parameter "slideToCopy" was null or undefined when calling postSlidesCopy.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/copy";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slideToCopy", slideToCopy);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "source", source);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourceStorage", sourceStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "sourcePassword", sourcePassword);
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use copySlide.
     * Copy a slide from the current or another presentation. 
     * @param requestObj contains request parameters
     */
    public async postSlidesCopy(requestObj: requests.PostSlidesCopyRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        return await this.copySlide(requestObj.name, requestObj.slideToCopy, requestObj.position, requestObj.source, requestObj.sourcePassword, requestObj.sourceStorage, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Create a presentation. 
     * @param name Document name.
     * @param data Document input data.
     * @param inputPassword The password for input document.
     * @param password The document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createPresentation(name: string, data: Buffer = null, inputPassword: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Document}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesDocument.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "inputPassword", inputPassword);
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (data != null) 
        {
            localVarFiles.push(data);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createPresentation.
     * Create a presentation. 
     * @param requestObj contains request parameters
     */
    public async postSlidesDocument(requestObj: requests.PostSlidesDocumentRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        return await this.createPresentation(requestObj.name, requestObj.data, requestObj.inputPassword, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Create presentation document from html. 
     * @param name Document name.
     * @param html HTML data.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async importFromHtml(name: string, html: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Document}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesDocumentFromHtml.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromHtml";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            body: html,
            json: false
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(JSON.parse(response.body), "Document");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use importFromHtml.
     * Create presentation document from html. 
     * @param requestObj contains request parameters
     */
    public async postSlidesDocumentFromHtml(requestObj: requests.PostSlidesDocumentFromHtmlRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        return await this.importFromHtml(requestObj.name, requestObj.html, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Create presentation document from pdf or append pdf to an existing presentation. 
     * @param name Document name.
     * @param pdf PDF data.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async importFromPdf(name: string, pdf: Buffer = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Document}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesDocumentFromPdf.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromPdf";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (pdf != null) 
        {
            localVarFiles.push(pdf);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use importFromPdf.
     * Create presentation document from pdf or append pdf to an existing presentation. 
     * @param requestObj contains request parameters
     */
    public async postSlidesDocumentFromPdf(requestObj: requests.PostSlidesDocumentFromPdfRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        return await this.importFromPdf(requestObj.name, requestObj.pdf, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Create a presentation from an existing source. 
     * @param name Document name.
     * @param sourcePath Template file path.
     * @param sourcePassword Template file password.
     * @param sourceStorage Template storage name.
     * @param password The document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createPresentationFromSource(name: string, sourcePath: string = null, sourcePassword: string = null, sourceStorage: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Document}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesDocumentFromSource.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromSource";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourcePath", sourcePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourceStorage", sourceStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "sourcePassword", sourcePassword);
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createPresentationFromSource.
     * Create a presentation from an existing source. 
     * @param requestObj contains request parameters
     */
    public async postSlidesDocumentFromSource(requestObj: requests.PostSlidesDocumentFromSourceRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        return await this.createPresentationFromSource(requestObj.name, requestObj.sourcePath, requestObj.sourcePassword, requestObj.sourceStorage, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Create a presentation. 
     * @param name Document name.
     * @param templatePath Template file path.
     * @param data Document input data.
     * @param templatePassword Template file password.
     * @param templateStorage Template storage name.
     * @param isImageDataEmbedded True if image data is embedded.
     * @param password The document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createPresentationFromTemplate(name: string, templatePath: string, data: string = null, templatePassword: string = null, templateStorage: string = null, isImageDataEmbedded: boolean = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Document}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesDocumentFromTemplate.');
        }
        // verify required parameter 'templatePath' is not null or undefined
        if (templatePath === null || templatePath === undefined) {
            throw new Error('The required parameter "templatePath" was null or undefined when calling postSlidesDocumentFromTemplate.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/fromTemplate";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "templatePath", templatePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "templateStorage", templateStorage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isImageDataEmbedded", isImageDataEmbedded);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            body: data,
            json: false
        };
        addHeaderParameter(requestOptions.headers, "templatePassword", templatePassword);
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(JSON.parse(response.body), "Document");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createPresentationFromTemplate.
     * Create a presentation. 
     * @param requestObj contains request parameters
     */
    public async postSlidesDocumentFromTemplate(requestObj: requests.PostSlidesDocumentFromTemplateRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        return await this.createPresentationFromTemplate(requestObj.name, requestObj.templatePath, requestObj.data, requestObj.templatePassword, requestObj.templateStorage, requestObj.isImageDataEmbedded, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Merges the presentation with other presentations or some of their slides specified in the request parameter. Returns result file in the response.  
     * @param files Files to merge
     * @param request Merge request.
     * @param password Document password.
     */
    public async mergeOnline(files: Array<Buffer> = null, request: model.OrderedMergeRequest = null, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/merge";
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: request,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (files != null) {
            localVarFiles = localVarFiles.concat(files);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use mergeOnline.
     * Merges the presentation with other presentations or some of their slides specified in the request parameter. Returns result file in the response.  
     * @param requestObj contains request parameters
     */
    public async postSlidesMerge(requestObj: requests.PostSlidesMergeRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.mergeOnline(requestObj.files, requestObj.request, requestObj.password);
    }

    /**
     * Performs slides pipeline. 
     * @param pipeline A Pipeline object.
     * @param files Files to upload with the pipeline
     */
    public async pipeline(pipeline: model.Pipeline, files: Array<Buffer> = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'pipeline' is not null or undefined
        if (pipeline === null || pipeline === undefined) {
            throw new Error('The required parameter "pipeline" was null or undefined when calling postSlidesPipeline.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/pipeline";
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: pipeline,
            encoding: null
        };
        let localVarFiles = [];
        if (files != null) {
            localVarFiles = localVarFiles.concat(files);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use pipeline.
     * Performs slides pipeline. 
     * @param requestObj contains request parameters
     */
    public async postSlidesPipeline(requestObj: requests.PostSlidesPipelineRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.pipeline(requestObj.pipeline, requestObj.files);
    }

    /**
     * Replace text with a new value. 
     * @param name Document name.
     * @param oldValue Text value to be replaced.
     * @param newValue Text value to replace with.
     * @param ignoreCase True if character case must be ignored.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async replacePresentationText(name: string, oldValue: string, newValue: string, ignoreCase: boolean = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.DocumentReplaceResult}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesPresentationReplaceText.');
        }
        // verify required parameter 'oldValue' is not null or undefined
        if (oldValue === null || oldValue === undefined) {
            throw new Error('The required parameter "oldValue" was null or undefined when calling postSlidesPresentationReplaceText.');
        }
        // verify required parameter 'newValue' is not null or undefined
        if (newValue === null || newValue === undefined) {
            throw new Error('The required parameter "newValue" was null or undefined when calling postSlidesPresentationReplaceText.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/replaceText";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldValue", oldValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newValue", newValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreCase", ignoreCase);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentReplaceResult");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use replacePresentationText.
     * Replace text with a new value. 
     * @param requestObj contains request parameters
     */
    public async postSlidesPresentationReplaceText(requestObj: requests.PostSlidesPresentationReplaceTextRequest): Promise<{response: http.ClientResponse, body: model.DocumentReplaceResult}> {
        return await this.replacePresentationText(requestObj.name, requestObj.oldValue, requestObj.newValue, requestObj.ignoreCase, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Reorder presentation slide position. 
     * @param name Document name.
     * @param slideIndex The position of the slide to be reordered.
     * @param newPosition The new position of the reordered slide.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async moveSlide(name: string, slideIndex: number, newPosition: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Slides}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesReorder.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postSlidesReorder.');
        }
        // verify required parameter 'newPosition' is not null or undefined
        if (newPosition === null || newPosition === undefined) {
            throw new Error('The required parameter "newPosition" was null or undefined when calling postSlidesReorder.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/move";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newPosition", newPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use moveSlide.
     * Reorder presentation slide position. 
     * @param requestObj contains request parameters
     */
    public async postSlidesReorder(requestObj: requests.PostSlidesReorderRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        return await this.moveSlide(requestObj.name, requestObj.slideIndex, requestObj.newPosition, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Reorder presentation slides positions. 
     * @param name Document name.
     * @param oldPositions A comma separated array of positions of slides to be reordered.
     * @param newPositions A comma separated array of new slide positions.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async reorderSlides(name: string, oldPositions: Array<number> = null, newPositions: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Slides}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesReorderMany.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/reorder";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldPositions", oldPositions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newPositions", newPositions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use reorderSlides.
     * Reorder presentation slides positions. 
     * @param requestObj contains request parameters
     */
    public async postSlidesReorderMany(requestObj: requests.PostSlidesReorderManyRequest): Promise<{response: http.ClientResponse, body: model.Slides}> {
        return await this.reorderSlides(requestObj.name, requestObj.oldPositions, requestObj.newPositions, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Save a presentation to a specified format. 
     * @param name Document name.
     * @param format Export format.
     * @param options Export options.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     * @param fontsFolder Custom fonts folder.
     */
    public async downloadPresentation(name: string, format: string, options: model.ExportOptions = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesSaveAs.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling postSlidesSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadPresentation.
     * Save a presentation to a specified format. 
     * @param requestObj contains request parameters
     */
    public async postSlidesSaveAs(requestObj: requests.PostSlidesSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadPresentation(requestObj.name, requestObj.format, requestObj.options, requestObj.password, requestObj.folder, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Set document properties. 
     * @param name Document name.
     * @param properties New properties.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setDocumentProperties(name: string, properties: model.DocumentProperties, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.DocumentProperties}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesSetDocumentProperties.');
        }
        // verify required parameter 'properties' is not null or undefined
        if (properties === null || properties === undefined) {
            throw new Error('The required parameter "properties" was null or undefined when calling postSlidesSetDocumentProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: properties
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use setDocumentProperties.
     * Set document properties. 
     * @param requestObj contains request parameters
     */
    public async postSlidesSetDocumentProperties(requestObj: requests.PostSlidesSetDocumentPropertiesRequest): Promise<{response: http.ClientResponse, body: model.DocumentProperties}> {
        return await this.setDocumentProperties(requestObj.name, requestObj.properties, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Replace text with a new value. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param oldValue Text value to be replaced.
     * @param newValue Text value to replace with.
     * @param ignoreCase True if character case must be ignored.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async replaceSlideText(name: string, slideIndex: number, oldValue: string, newValue: string, ignoreCase: boolean = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideReplaceResult}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesSlideReplaceText.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postSlidesSlideReplaceText.');
        }
        // verify required parameter 'oldValue' is not null or undefined
        if (oldValue === null || oldValue === undefined) {
            throw new Error('The required parameter "oldValue" was null or undefined when calling postSlidesSlideReplaceText.');
        }
        // verify required parameter 'newValue' is not null or undefined
        if (newValue === null || newValue === undefined) {
            throw new Error('The required parameter "newValue" was null or undefined when calling postSlidesSlideReplaceText.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/replaceText";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldValue", oldValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newValue", newValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreCase", ignoreCase);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideReplaceResult");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use replaceSlideText.
     * Replace text with a new value. 
     * @param requestObj contains request parameters
     */
    public async postSlidesSlideReplaceText(requestObj: requests.PostSlidesSlideReplaceTextRequest): Promise<{response: http.ClientResponse, body: model.SlideReplaceResult}> {
        return await this.replaceSlideText(requestObj.name, requestObj.slideIndex, requestObj.oldValue, requestObj.newValue, requestObj.ignoreCase, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Splitting presentations. Create one image per slide. 
     * @param name Document name.
     * @param options Export options.
     * @param format Export format. Default value is jpeg.
     * @param width The width of created images.
     * @param height The height of created images.
     * @param from The start slide number for splitting, if is not specified splitting starts from the first slide of the presentation.
     * @param to The last slide number for splitting, if is not specified splitting ends at the last slide of the document.
     * @param destFolder Folder on storage where images are going to be uploaded. If not specified then images are uploaded to same folder as presentation.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     * @param fontsFolder Custom fonts folder.
     */
    public async split(name: string, options: model.ExportOptions = null, format: string = null, width: number = null, height: number = null, from: number = null, to: number = null, destFolder: string = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: model.SplitDocumentResult}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSlidesSplit.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/split";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "from", from);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "to", to);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFolder", destFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SplitDocumentResult");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use split.
     * Splitting presentations. Create one image per slide. 
     * @param requestObj contains request parameters
     */
    public async postSlidesSplit(requestObj: requests.PostSlidesSplitRequest): Promise<{response: http.ClientResponse, body: model.SplitDocumentResult}> {
        return await this.split(requestObj.name, requestObj.options, requestObj.format, requestObj.width, requestObj.height, requestObj.from, requestObj.to, requestObj.destFolder, requestObj.password, requestObj.folder, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Render shape to specified picture format (for smart art and group shapes). 
     * @param name Presentation name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Index of shape starting from 1
     * @param format Export picture format.
     * @param options export options
     * @param scaleX X scale ratio.
     * @param scaleY Y scale ratio.
     * @param bounds Shape thumbnail bounds type.
     * @param password Document password.
     * @param folder Presentation folder.
     * @param storage Presentation storage.
     * @param fontsFolder Fonts folder.
     */
    public async downloadSubshape(name: string, slideIndex: number, path: string = null, shapeIndex: number, format: string, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: string = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postSubshapeSaveAs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling postSubshapeSaveAs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling postSubshapeSaveAs.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling postSubshapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use downloadSubshape.
     * Render shape to specified picture format (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async postSubshapeSaveAs(requestObj: requests.PostSubshapeSaveAsRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.downloadSubshape(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapeIndex, requestObj.format, requestObj.options, requestObj.scaleX, requestObj.scaleY, requestObj.bounds, requestObj.password, requestObj.folder, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Adds a text watermark to each slide of the presentation. Text watermark can be setup via method arguments or withing Shape DTO for detailed customization. Both options are applicable simultaneously.  
     * @param name Document name.
     * @param shape Shape DTO
     * @param fontHeight Watermark font height.
     * @param text Watermark text.
     * @param fontName Watermark font name.
     * @param fontColor Watermark font color.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createWatermark(name: string, shape: model.Shape = null, fontHeight: number = null, text: string = null, fontName: string = null, fontColor: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling postWatermark.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/watermark";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontHeight", fontHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "text", text);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontName", fontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontColor", fontColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: shape
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * @deprecated Use createWatermark.
     * Adds a text watermark to each slide of the presentation. Text watermark can be setup via method arguments or withing Shape DTO for detailed customization. Both options are applicable simultaneously.  
     * @param requestObj contains request parameters
     */
    public async postWatermark(requestObj: requests.PostWatermarkRequest): Promise<{response: http.ClientResponse}> {
        return await this.createWatermark(requestObj.name, requestObj.shape, requestObj.fontHeight, requestObj.text, requestObj.fontName, requestObj.fontColor, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Removes shapes with name \&quot;watermark\&quot; from the presentation. 
     * @param document Document data.
     * @param shapeName Name of the watermark shape. If null, default value \"watermark\"is used.
     * @param password Document password.
     */
    public async deleteWatermarkOnline(document: Buffer, shapeName: string = null, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postWatermarkDeleteOnline.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/watermark/delete";
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeName", shapeName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use deleteWatermarkOnline.
     * Removes shapes with name \&quot;watermark\&quot; from the presentation. 
     * @param requestObj contains request parameters
     */
    public async postWatermarkDeleteOnline(requestObj: requests.PostWatermarkDeleteOnlineRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.deleteWatermarkOnline(requestObj.document, requestObj.shapeName, requestObj.password);
    }

    /**
     * Adds a text watermark to each slide of the presentation. Text watermark can be setup via method arguments or withing Shape DTO for detailed customization. Both options are applicable simultaneously.  
     * @param document Document data.
     * @param shape Shape DTO
     * @param fontHeight Watermark font height.
     * @param text Watermark text.
     * @param fontName Watermark font name.
     * @param fontColor Watermark font color.
     * @param password Document password.
     */
    public async createWatermarkOnline(document: Buffer, shape: model.Shape = null, fontHeight: number = null, text: string = null, fontName: string = null, fontColor: string = null, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling postWatermarkOnline.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/watermark";
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontHeight", fontHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "text", text);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontName", fontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontColor", fontColor);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: shape,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use createWatermarkOnline.
     * Adds a text watermark to each slide of the presentation. Text watermark can be setup via method arguments or withing Shape DTO for detailed customization. Both options are applicable simultaneously.  
     * @param requestObj contains request parameters
     */
    public async postWatermarkOnline(requestObj: requests.PostWatermarkOnlineRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.createWatermarkOnline(requestObj.document, requestObj.shape, requestObj.fontHeight, requestObj.text, requestObj.fontName, requestObj.fontColor, requestObj.password);
    }

    /**
     * Update a chart category. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param categoryIndex Category index.
     * @param category Category DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateChartCategory(name: string, slideIndex: number, shapeIndex: number, categoryIndex: number, category: model.ChartCategory, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Chart}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putChartCategory.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putChartCategory.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putChartCategory.');
        }
        // verify required parameter 'categoryIndex' is not null or undefined
        if (categoryIndex === null || categoryIndex === undefined) {
            throw new Error('The required parameter "categoryIndex" was null or undefined when calling putChartCategory.');
        }
        // verify required parameter 'category' is not null or undefined
        if (category === null || category === undefined) {
            throw new Error('The required parameter "category" was null or undefined when calling putChartCategory.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/categories/{categoryIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "categoryIndex", ObjectSerializer.toString(categoryIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: category
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateChartCategory.
     * Update a chart category. 
     * @param requestObj contains request parameters
     */
    public async putChartCategory(requestObj: requests.PutChartCategoryRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        return await this.updateChartCategory(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.categoryIndex, requestObj.category, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Update a data point in a chart series. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param seriesIndex Series index.
     * @param pointIndex Data point index.
     * @param dataPoint Data point DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateChartDataPoint(name: string, slideIndex: number, shapeIndex: number, seriesIndex: number, pointIndex: number, dataPoint: model.DataPoint, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Chart}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putChartDataPoint.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putChartDataPoint.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putChartDataPoint.');
        }
        // verify required parameter 'seriesIndex' is not null or undefined
        if (seriesIndex === null || seriesIndex === undefined) {
            throw new Error('The required parameter "seriesIndex" was null or undefined when calling putChartDataPoint.');
        }
        // verify required parameter 'pointIndex' is not null or undefined
        if (pointIndex === null || pointIndex === undefined) {
            throw new Error('The required parameter "pointIndex" was null or undefined when calling putChartDataPoint.');
        }
        // verify required parameter 'dataPoint' is not null or undefined
        if (dataPoint === null || dataPoint === undefined) {
            throw new Error('The required parameter "dataPoint" was null or undefined when calling putChartDataPoint.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/series/{seriesIndex}/dataPoints/{pointIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "seriesIndex", ObjectSerializer.toString(seriesIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "pointIndex", ObjectSerializer.toString(pointIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dataPoint
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateChartDataPoint.
     * Update a data point in a chart series. 
     * @param requestObj contains request parameters
     */
    public async putChartDataPoint(requestObj: requests.PutChartDataPointRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        return await this.updateChartDataPoint(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.seriesIndex, requestObj.pointIndex, requestObj.dataPoint, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Update a series in a chart. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index (must be a chart).
     * @param seriesIndex Series index.
     * @param series Series DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateChartSeries(name: string, slideIndex: number, shapeIndex: number, seriesIndex: number, series: model.Series, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Chart}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putChartSeries.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putChartSeries.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putChartSeries.');
        }
        // verify required parameter 'seriesIndex' is not null or undefined
        if (seriesIndex === null || seriesIndex === undefined) {
            throw new Error('The required parameter "seriesIndex" was null or undefined when calling putChartSeries.');
        }
        // verify required parameter 'series' is not null or undefined
        if (series === null || series === undefined) {
            throw new Error('The required parameter "series" was null or undefined when calling putChartSeries.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/series/{seriesIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "seriesIndex", ObjectSerializer.toString(seriesIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: series
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateChartSeries.
     * Update a series in a chart. 
     * @param requestObj contains request parameters
     */
    public async putChartSeries(requestObj: requests.PutChartSeriesRequest): Promise<{response: http.ClientResponse, body: model.Chart}> {
        return await this.updateChartSeries(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.seriesIndex, requestObj.series, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Render shape to specified picture format. 
     * @param document Document data.
     * @param slideIndex Slide index.
     * @param shapeIndex Index of shape starting from 1
     * @param format Export picture format.
     * @param outPath Path to save result.
     * @param scaleX X scale ratio.
     * @param scaleY Y scale ratio.
     * @param bounds Shape thumbnail bounds type.
     * @param password Document password.
     * @param storage Document storage.
     * @param fontsFolder Fonts folder.
     */
    public async saveShapeOnline(document: Buffer, slideIndex: number, shapeIndex: number, format: string, outPath: string, scaleX: number = null, scaleY: number = null, bounds: string = null, password: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling putExportShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putExportShape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putExportShape.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling putExportShape.');
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling putExportShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/slides/{slideIndex}/shapes/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * @deprecated Use saveShapeOnline.
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async putExportShape(requestObj: requests.PutExportShapeRequest): Promise<{response: http.ClientResponse}> {
        return await this.saveShapeOnline(requestObj.document, requestObj.slideIndex, requestObj.shapeIndex, requestObj.format, requestObj.outPath, requestObj.scaleX, requestObj.scaleY, requestObj.bounds, requestObj.password, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Save a slide to a specified format. 
     * @param document Document data.
     * @param slideIndex Slide index.
     * @param format Output file format.
     * @param outPath Path to save result.
     * @param width Output file width; 0 to not adjust the size. Default is 0.
     * @param height Output file height; 0 to not adjust the size. Default is 0.
     * @param password Document password.
     * @param storage Document storage.
     * @param fontsFolder Storage folder containing custom fonts to be used with the document.
     */
    public async saveSlideOnline(document: Buffer, slideIndex: number, format: string, outPath: string, width: number = null, height: number = null, password: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling putExportSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putExportSlide.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling putExportSlide.');
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling putExportSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/slides/{slideIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * @deprecated Use saveSlideOnline.
     * Save a slide to a specified format. 
     * @param requestObj contains request parameters
     */
    public async putExportSlide(requestObj: requests.PutExportSlideRequest): Promise<{response: http.ClientResponse}> {
        return await this.saveSlideOnline(requestObj.document, requestObj.slideIndex, requestObj.format, requestObj.outPath, requestObj.width, requestObj.height, requestObj.password, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Update a layoutSlide. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param slideDto Slide update data.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateLayoutSlide(name: string, slideIndex: number, slideDto: model.LayoutSlide, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.LayoutSlide}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putLayoutSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putLayoutSlide.');
        }
        // verify required parameter 'slideDto' is not null or undefined
        if (slideDto === null || slideDto === undefined) {
            throw new Error('The required parameter "slideDto" was null or undefined when calling putLayoutSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/layoutSlides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: slideDto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateLayoutSlide.
     * Update a layoutSlide. 
     * @param requestObj contains request parameters
     */
    public async putLayoutSlide(requestObj: requests.PutLayoutSlideRequest): Promise<{response: http.ClientResponse, body: model.LayoutSlide}> {
        return await this.updateLayoutSlide(requestObj.name, requestObj.slideIndex, requestObj.slideDto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Set header/footer the notes slide. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param dto Header/footer to set.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setNotesSlideHeaderFooter(name: string, slideIndex: number, dto: model.NotesSlideHeaderFooter, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.NotesSlideHeaderFooter}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putNotesSlideHeaderFooter.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putNotesSlideHeaderFooter.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putNotesSlideHeaderFooter.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/headerFooter";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlideHeaderFooter");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use setNotesSlideHeaderFooter.
     * Set header/footer the notes slide. 
     * @param requestObj contains request parameters
     */
    public async putNotesSlideHeaderFooter(requestObj: requests.PutNotesSlideHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.NotesSlideHeaderFooter}> {
        return await this.setNotesSlideHeaderFooter(requestObj.name, requestObj.slideIndex, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Render shape to specified picture format. 
     * @param name Presentation name.
     * @param slideIndex Slide index.
     * @param shapeIndex Index of shape starting from 1
     * @param format Export picture format.
     * @param outPath Output path.
     * @param options export options
     * @param scaleX X scale ratio.
     * @param scaleY Y scale ratio.
     * @param bounds Shape thumbnail bounds type.
     * @param password Document password.
     * @param folder Presentation folder.
     * @param storage Presentation storage.
     * @param fontsFolder Fonts folder.
     */
    public async saveNotesSlideShape(name: string, slideIndex: number, shapeIndex: number, format: string, outPath: string, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: string = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling putNotesSlideShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * @deprecated Use saveNotesSlideShape.
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async putNotesSlideShapeSaveAs(requestObj: requests.PutNotesSlideShapeSaveAsRequest): Promise<{response: http.ClientResponse}> {
        return await this.saveNotesSlideShape(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.format, requestObj.outPath, requestObj.options, requestObj.scaleX, requestObj.scaleY, requestObj.bounds, requestObj.password, requestObj.folder, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Merge the presentation with other presentations or some of their slides specified in the request parameter. 
     * @param name Document name.
     * @param request OrderedMergeRequest with a list of presentations and slide indices to merge.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async orderedMerge(name: string, request: model.OrderedMergeRequest, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Document}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putPresentationMerge.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('The required parameter "request" was null or undefined when calling putPresentationMerge.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/merge";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: request
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use orderedMerge.
     * Merge the presentation with other presentations or some of their slides specified in the request parameter. 
     * @param requestObj contains request parameters
     */
    public async putPresentationMerge(requestObj: requests.PutPresentationMergeRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        return await this.orderedMerge(requestObj.name, requestObj.request, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Splits PowerPoint presentation slides from the specified range into separate files and exports them in the specified file format. If the range is not provided all slides will be processed.  
     * @param document Document data.
     * @param format ExportFormat
     * @param destFolder Folder on storage where images are going to be uploaded. If not specified then images are uploaded to the root folder.
     * @param width Slide width.
     * @param height Slide height.
     * @param from The start slide number for splitting, if is not specified splitting starts from the first slide of the presentation.
     * @param to The last slide number for splitting, if is not specified splitting ends at the last slide of the document.
     * @param password Document password.
     * @param storage Document storage.
     * @param fontsFolder Custom fonts folder.
     */
    public async splitAndSaveOnline(document: Buffer, format: string, destFolder: string = null, width: number = null, height: number = null, from: number = null, to: number = null, password: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: model.SplitDocumentResult}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling putPresentationSplit.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling putPresentationSplit.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/split/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFolder", destFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "from", from);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "to", to);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SplitDocumentResult");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use splitAndSaveOnline.
     * Splits PowerPoint presentation slides from the specified range into separate files and exports them in the specified file format. If the range is not provided all slides will be processed.  
     * @param requestObj contains request parameters
     */
    public async putPresentationSplit(requestObj: requests.PutPresentationSplitRequest): Promise<{response: http.ClientResponse, body: model.SplitDocumentResult}> {
        return await this.splitAndSaveOnline(requestObj.document, requestObj.format, requestObj.destFolder, requestObj.width, requestObj.height, requestObj.from, requestObj.to, requestObj.password, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Update section name. 
     * @param name Document name.
     * @param sectionIndex The position of the section to be updated.
     * @param sectionName Section name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateSection(name: string, sectionIndex: number, sectionName: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Sections}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSection.');
        }
        // verify required parameter 'sectionIndex' is not null or undefined
        if (sectionIndex === null || sectionIndex === undefined) {
            throw new Error('The required parameter "sectionIndex" was null or undefined when calling putSection.');
        }
        // verify required parameter 'sectionName' is not null or undefined
        if (sectionName === null || sectionName === undefined) {
            throw new Error('The required parameter "sectionName" was null or undefined when calling putSection.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections/{sectionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "sectionIndex", ObjectSerializer.toString(sectionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sectionName", sectionName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateSection.
     * Update section name. 
     * @param requestObj contains request parameters
     */
    public async putSection(requestObj: requests.PutSectionRequest): Promise<{response: http.ClientResponse, body: model.Sections}> {
        return await this.updateSection(requestObj.name, requestObj.sectionIndex, requestObj.sectionName, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Replace existing presentation sections with the ones provided in the sections DTO. 
     * @param name Document name.
     * @param sections Sections DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setSections(name: string, sections: model.Sections, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Sections}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSections.');
        }
        // verify required parameter 'sections' is not null or undefined
        if (sections === null || sections === undefined) {
            throw new Error('The required parameter "sections" was null or undefined when calling putSections.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/sections";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: sections
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use setSections.
     * Replace existing presentation sections with the ones provided in the sections DTO. 
     * @param requestObj contains request parameters
     */
    public async putSections(requestObj: requests.PutSectionsRequest): Promise<{response: http.ClientResponse, body: model.Sections}> {
        return await this.setSections(requestObj.name, requestObj.sections, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Update portion properties. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param dto Portion DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updatePortion(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, portionIndex: number, dto: model.Portion, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putSetParagraphPortionProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updatePortion.
     * Update portion properties. 
     * @param requestObj contains request parameters
     */
    public async putSetParagraphPortionProperties(requestObj: requests.PutSetParagraphPortionPropertiesRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        return await this.updatePortion(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.portionIndex, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Update paragraph properties. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param dto Paragraph DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateParagraph(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, dto: model.Paragraph, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSetParagraphProperties.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSetParagraphProperties.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putSetParagraphProperties.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling putSetParagraphProperties.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putSetParagraphProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateParagraph.
     * Update paragraph properties. 
     * @param requestObj contains request parameters
     */
    public async putSetParagraphProperties(requestObj: requests.PutSetParagraphPropertiesRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        return await this.updateParagraph(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Update portion properties (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param dto Portion DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateSubshapePortion(name: string, slideIndex: number, path: string = null, shapeIndex: number, paragraphIndex: number, portionIndex: number, dto: model.Portion, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSetSubshapeParagraphPortionProperties.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSetSubshapeParagraphPortionProperties.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putSetSubshapeParagraphPortionProperties.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling putSetSubshapeParagraphPortionProperties.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling putSetSubshapeParagraphPortionProperties.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putSetSubshapeParagraphPortionProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateSubshapePortion.
     * Update portion properties (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async putSetSubshapeParagraphPortionProperties(requestObj: requests.PutSetSubshapeParagraphPortionPropertiesRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        return await this.updateSubshapePortion(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.portionIndex, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Update paragraph properties (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param dto Paragraph DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateSubshapeParagraph(name: string, slideIndex: number, path: string = null, shapeIndex: number, paragraphIndex: number, dto: model.Paragraph, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSetSubshapeParagraphProperties.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSetSubshapeParagraphProperties.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putSetSubshapeParagraphProperties.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling putSetSubshapeParagraphProperties.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putSetSubshapeParagraphProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateSubshapeParagraph.
     * Update paragraph properties (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async putSetSubshapeParagraphProperties(requestObj: requests.PutSetSubshapeParagraphPropertiesRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        return await this.updateSubshapeParagraph(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Render shape to specified picture format. 
     * @param name Presentation name.
     * @param slideIndex Slide index.
     * @param shapeIndex Index of shape starting from 1
     * @param format Export picture format.
     * @param outPath Output path.
     * @param options export options
     * @param scaleX X scale ratio.
     * @param scaleY Y scale ratio.
     * @param bounds Shape thumbnail bounds type.
     * @param password Document password.
     * @param folder Presentation folder.
     * @param storage Presentation storage.
     * @param fontsFolder Fonts folder.
     */
    public async saveShape(name: string, slideIndex: number, shapeIndex: number, format: string, outPath: string, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: string = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putShapeSaveAs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putShapeSaveAs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putShapeSaveAs.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling putShapeSaveAs.');
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling putShapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * @deprecated Use saveShape.
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async putShapeSaveAs(requestObj: requests.PutShapeSaveAsRequest): Promise<{response: http.ClientResponse}> {
        return await this.saveShape(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.format, requestObj.outPath, requestObj.options, requestObj.scaleX, requestObj.scaleY, requestObj.bounds, requestObj.password, requestObj.folder, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Set slide animation. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param animation Animation DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setAnimation(name: string, slideIndex: number, animation: model.SlideAnimation, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlideAnimation.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSlideAnimation.');
        }
        // verify required parameter 'animation' is not null or undefined
        if (animation === null || animation === undefined) {
            throw new Error('The required parameter "animation" was null or undefined when calling putSlideAnimation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: animation
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use setAnimation.
     * Set slide animation. 
     * @param requestObj contains request parameters
     */
    public async putSlideAnimation(requestObj: requests.PutSlideAnimationRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        return await this.setAnimation(requestObj.name, requestObj.slideIndex, requestObj.animation, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Modify an animation effect for a slide. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param effectIndex The position of the effect to be modified.
     * @param effect Animation effect DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateAnimationEffect(name: string, slideIndex: number, effectIndex: number, effect: model.Effect, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlideAnimationEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSlideAnimationEffect.');
        }
        // verify required parameter 'effectIndex' is not null or undefined
        if (effectIndex === null || effectIndex === undefined) {
            throw new Error('The required parameter "effectIndex" was null or undefined when calling putSlideAnimationEffect.');
        }
        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('The required parameter "effect" was null or undefined when calling putSlideAnimationEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/mainSequence/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "effectIndex", ObjectSerializer.toString(effectIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: effect
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateAnimationEffect.
     * Modify an animation effect for a slide. 
     * @param requestObj contains request parameters
     */
    public async putSlideAnimationEffect(requestObj: requests.PutSlideAnimationEffectRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        return await this.updateAnimationEffect(requestObj.name, requestObj.slideIndex, requestObj.effectIndex, requestObj.effect, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Modify an animation effect for a slide interactive sequence. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param sequenceIndex The position of the interactive sequence.
     * @param effectIndex The position of the effect to be modified.
     * @param effect Animation effect DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateAnimationInteractiveSequenceEffect(name: string, slideIndex: number, sequenceIndex: number, effectIndex: number, effect: model.Effect, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'sequenceIndex' is not null or undefined
        if (sequenceIndex === null || sequenceIndex === undefined) {
            throw new Error('The required parameter "sequenceIndex" was null or undefined when calling putSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'effectIndex' is not null or undefined
        if (effectIndex === null || effectIndex === undefined) {
            throw new Error('The required parameter "effectIndex" was null or undefined when calling putSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('The required parameter "effect" was null or undefined when calling putSlideAnimationInteractiveSequenceEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation/interactiveSequences/{sequenceIndex}/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "sequenceIndex", ObjectSerializer.toString(sequenceIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "effectIndex", ObjectSerializer.toString(effectIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: effect
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateAnimationInteractiveSequenceEffect.
     * Modify an animation effect for a slide interactive sequence. 
     * @param requestObj contains request parameters
     */
    public async putSlideAnimationInteractiveSequenceEffect(requestObj: requests.PutSlideAnimationInteractiveSequenceEffectRequest): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        return await this.updateAnimationInteractiveSequenceEffect(requestObj.name, requestObj.slideIndex, requestObj.sequenceIndex, requestObj.effectIndex, requestObj.effect, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Set footer the slide. 
     * @param name Document name.
     * @param slideIndex The position of the slide to be reordered.
     * @param dto Footer to set.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setSlideHeaderFooter(name: string, slideIndex: number, dto: model.HeaderFooter, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.HeaderFooter}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlideHeaderFooter.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSlideHeaderFooter.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putSlideHeaderFooter.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/headerFooter";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "HeaderFooter");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use setSlideHeaderFooter.
     * Set footer the slide. 
     * @param requestObj contains request parameters
     */
    public async putSlideHeaderFooter(requestObj: requests.PutSlideHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.HeaderFooter}> {
        return await this.setSlideHeaderFooter(requestObj.name, requestObj.slideIndex, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Save a slide to a specified format. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param format Output file format.
     * @param outPath Path to upload the output file to.
     * @param options Export options.
     * @param width Output file width; 0 to not adjust the size. Default is 0.
     * @param height Output file height; 0 to not adjust the size. Default is 0.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     * @param fontsFolder Storage folder containing custom fonts to be used with the document.
     */
    public async saveSlide(name: string, slideIndex: number, format: string, outPath: string, options: model.ExportOptions = null, width: number = null, height: number = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlideSaveAs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSlideSaveAs.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling putSlideSaveAs.');
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling putSlideSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * @deprecated Use saveSlide.
     * Save a slide to a specified format. 
     * @param requestObj contains request parameters
     */
    public async putSlideSaveAs(requestObj: requests.PutSlideSaveAsRequest): Promise<{response: http.ClientResponse}> {
        return await this.saveSlide(requestObj.name, requestObj.slideIndex, requestObj.format, requestObj.outPath, requestObj.options, requestObj.width, requestObj.height, requestObj.password, requestObj.folder, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Update shape properties. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param dto Shape DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateShape(name: string, slideIndex: number, shapeIndex: number, dto: model.ShapeBase, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlideShapeInfo.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSlideShapeInfo.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putSlideShapeInfo.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putSlideShapeInfo.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateShape.
     * Update shape properties. 
     * @param requestObj contains request parameters
     */
    public async putSlideShapeInfo(requestObj: requests.PutSlideShapeInfoRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        return await this.updateShape(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Update shape properties (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param dto Shape DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateSubshape(name: string, slideIndex: number, path: string = null, shapeIndex: number, dto: model.ShapeBase, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlideSubshapeInfo.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSlideSubshapeInfo.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putSlideSubshapeInfo.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putSlideSubshapeInfo.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateSubshape.
     * Update shape properties (for smart art and group shapes). 
     * @param requestObj contains request parameters
     */
    public async putSlideSubshapeInfo(requestObj: requests.PutSlideSubshapeInfoRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        return await this.updateSubshape(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapeIndex, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Convert presentation from request content to format specified. 
     * @param document Document data.
     * @param format Export format.
     * @param outPath Path to save result.
     * @param password Document password.
     * @param storage Document storage.
     * @param fontsFolder Custom fonts folder.
     */
    public async convertAndSave(document: Buffer, format: string, outPath: string, password: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling putSlidesConvert.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling putSlidesConvert.');
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling putSlidesConvert.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/convert/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * @deprecated Use convertAndSave.
     * Convert presentation from request content to format specified. 
     * @param requestObj contains request parameters
     */
    public async putSlidesConvert(requestObj: requests.PutSlidesConvertRequest): Promise<{response: http.ClientResponse}> {
        return await this.convertAndSave(requestObj.document, requestObj.format, requestObj.outPath, requestObj.password, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Set footers for all slides in a presentation. 
     * @param name Document name.
     * @param dto HeaderFooter instance.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setPresentationHeaderFooter(name: string, dto: model.HeaderFooter, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Document}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlidesHeaderFooter.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putSlidesHeaderFooter.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/headerFooter";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use setPresentationHeaderFooter.
     * Set footers for all slides in a presentation. 
     * @param requestObj contains request parameters
     */
    public async putSlidesHeaderFooter(requestObj: requests.PutSlidesHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.Document}> {
        return await this.setPresentationHeaderFooter(requestObj.name, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Merges the presentation with other presentations or some of their slides specified in the request parameter. Puts result in the storage.  
     * @param outPath Path to save result.
     * @param files Files to merge
     * @param request Merge request.
     * @param password Document password.
     * @param storage Document storage.
     */
    public async mergeAndSaveOnline(outPath: string, files: Array<Buffer> = null, request: model.OrderedMergeRequest = null, password: string = null, storage: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling putSlidesMerge.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/merge";
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: request
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (files != null) {
            localVarFiles = localVarFiles.concat(files);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * @deprecated Use mergeAndSaveOnline.
     * Merges the presentation with other presentations or some of their slides specified in the request parameter. Puts result in the storage.  
     * @param requestObj contains request parameters
     */
    public async putSlidesMerge(requestObj: requests.PutSlidesMergeRequest): Promise<{response: http.ClientResponse}> {
        return await this.mergeAndSaveOnline(requestObj.outPath, requestObj.files, requestObj.request, requestObj.password, requestObj.storage);
    }

    /**
     * Updates presentation protection properties. 
     * @param name Document name.
     * @param dto Protection properties.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setProtection(name: string, dto: model.ProtectionProperties, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ProtectionProperties}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlidesProtectionProperties.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putSlidesProtectionProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/protection";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ProtectionProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use setProtection.
     * Updates presentation protection properties. 
     * @param requestObj contains request parameters
     */
    public async putSlidesProtectionProperties(requestObj: requests.PutSlidesProtectionPropertiesRequest): Promise<{response: http.ClientResponse, body: model.ProtectionProperties}> {
        return await this.setProtection(requestObj.name, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Sets presentation protection options.  
     * @param document Document data.
     * @param dto Protection properties.
     * @param password Document password.
     */
    public async setProtectionOnline(document: Buffer, dto: model.ProtectionProperties, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling putSlidesProtectionPropertiesOnline.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putSlidesProtectionPropertiesOnline.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/protection";
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        if (document != null) 
        {
            localVarFiles.push(document);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use setProtectionOnline.
     * Sets presentation protection options.  
     * @param requestObj contains request parameters
     */
    public async putSlidesProtectionPropertiesOnline(requestObj: requests.PutSlidesProtectionPropertiesOnlineRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        return await this.setProtectionOnline(requestObj.document, requestObj.dto, requestObj.password);
    }

    /**
     * Save a presentation to a specified format. 
     * @param name Document name.
     * @param format Export format.
     * @param outPath Output path.
     * @param options Export options.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     * @param fontsFolder Custom fonts folder.
     */
    public async savePresentation(name: string, format: string, outPath: string, options: model.ExportOptions = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlidesSaveAs.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling putSlidesSaveAs.');
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling putSlidesSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * @deprecated Use savePresentation.
     * Save a presentation to a specified format. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSaveAs(requestObj: requests.PutSlidesSaveAsRequest): Promise<{response: http.ClientResponse}> {
        return await this.savePresentation(requestObj.name, requestObj.format, requestObj.outPath, requestObj.options, requestObj.password, requestObj.folder, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Set document property. 
     * @param name Document name.
     * @param propertyName The property name.
     * @param property Property with the value.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setDocumentProperty(name: string, propertyName: string, property: model.DocumentProperty, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.DocumentProperty}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlidesSetDocumentProperty.');
        }
        // verify required parameter 'propertyName' is not null or undefined
        if (propertyName === null || propertyName === undefined) {
            throw new Error('The required parameter "propertyName" was null or undefined when calling putSlidesSetDocumentProperty.');
        }
        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new Error('The required parameter "property" was null or undefined when calling putSlidesSetDocumentProperty.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/documentproperties/{propertyName}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "propertyName", ObjectSerializer.toString(propertyName));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: property
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperty");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use setDocumentProperty.
     * Set document property. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSetDocumentProperty(requestObj: requests.PutSlidesSetDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.DocumentProperty}> {
        return await this.setDocumentProperty(requestObj.name, requestObj.propertyName, requestObj.property, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Update a slide. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param slideDto Slide update data.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateSlide(name: string, slideIndex: number, slideDto: model.Slide, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Slide}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlidesSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSlidesSlide.');
        }
        // verify required parameter 'slideDto' is not null or undefined
        if (slideDto === null || slideDto === undefined) {
            throw new Error('The required parameter "slideDto" was null or undefined when calling putSlidesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: slideDto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateSlide.
     * Update a slide. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSlide(requestObj: requests.PutSlidesSlideRequest): Promise<{response: http.ClientResponse, body: model.Slide}> {
        return await this.updateSlide(requestObj.name, requestObj.slideIndex, requestObj.slideDto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Set background for a slide. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param background Slide background update data.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setBackground(name: string, slideIndex: number, background: model.SlideBackground, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideBackground}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlidesSlideBackground.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSlidesSlideBackground.');
        }
        // verify required parameter 'background' is not null or undefined
        if (background === null || background === undefined) {
            throw new Error('The required parameter "background" was null or undefined when calling putSlidesSlideBackground.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/background";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: background
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use setBackground.
     * Set background for a slide. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSlideBackground(requestObj: requests.PutSlidesSlideBackgroundRequest): Promise<{response: http.ClientResponse, body: model.SlideBackground}> {
        return await this.setBackground(requestObj.name, requestObj.slideIndex, requestObj.background, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Set background color for a slide. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param color Slide background target color in RRGGBB format.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setBackgroundColor(name: string, slideIndex: number, color: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideBackground}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlidesSlideBackgroundColor.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSlidesSlideBackgroundColor.');
        }
        // verify required parameter 'color' is not null or undefined
        if (color === null || color === undefined) {
            throw new Error('The required parameter "color" was null or undefined when calling putSlidesSlideBackgroundColor.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/backgroundColor";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "color", color);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: true
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use setBackgroundColor.
     * Set background color for a slide. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSlideBackgroundColor(requestObj: requests.PutSlidesSlideBackgroundColorRequest): Promise<{response: http.ClientResponse, body: model.SlideBackground}> {
        return await this.setBackgroundColor(requestObj.name, requestObj.slideIndex, requestObj.color, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Update presentation slide properties. 
     * @param name Document name.
     * @param dto The view properties data.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setSlideProperties(name: string, dto: model.SlideProperties, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideProperties}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlidesSlideProperties.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putSlidesSlideProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slideProperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use setSlideProperties.
     * Update presentation slide properties. 
     * @param requestObj contains request parameters
     */
    public async putSlidesSlideProperties(requestObj: requests.PutSlidesSlidePropertiesRequest): Promise<{response: http.ClientResponse, body: model.SlideProperties}> {
        return await this.setSlideProperties(requestObj.name, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Update presentation document properties. 
     * @param name Document name.
     * @param dto The view properties data.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setViewProperties(name: string, dto: model.ViewProperties, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ViewProperties}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSlidesViewProperties.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putSlidesViewProperties.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/viewProperties";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ViewProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use setViewProperties.
     * Update presentation document properties. 
     * @param requestObj contains request parameters
     */
    public async putSlidesViewProperties(requestObj: requests.PutSlidesViewPropertiesRequest): Promise<{response: http.ClientResponse, body: model.ViewProperties}> {
        return await this.setViewProperties(requestObj.name, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Render shape to specified picture format. 
     * @param name Presentation name.
     * @param slideIndex Slide index.
     * @param path Shape path (for smart art and group shapes).
     * @param shapeIndex Index of shape starting from 1
     * @param format Export picture format.
     * @param outPath Output path.
     * @param options export options
     * @param scaleX X scale ratio.
     * @param scaleY Y scale ratio.
     * @param bounds Shape thumbnail bounds type.
     * @param password Document password.
     * @param folder Presentation folder.
     * @param storage Presentation storage.
     * @param fontsFolder Fonts folder.
     */
    public async saveSubshape(name: string, slideIndex: number, path: string = null, shapeIndex: number, format: string, outPath: string, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: string = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putSubshapeSaveAs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putSubshapeSaveAs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putSubshapeSaveAs.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling putSubshapeSaveAs.');
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling putSubshapeSaveAs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bounds", bounds);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * @deprecated Use saveSubshape.
     * Render shape to specified picture format. 
     * @param requestObj contains request parameters
     */
    public async putSubshapeSaveAs(requestObj: requests.PutSubshapeSaveAsRequest): Promise<{response: http.ClientResponse}> {
        return await this.saveSubshape(requestObj.name, requestObj.slideIndex, requestObj.path, requestObj.shapeIndex, requestObj.format, requestObj.outPath, requestObj.options, requestObj.scaleX, requestObj.scaleY, requestObj.bounds, requestObj.password, requestObj.folder, requestObj.storage, requestObj.fontsFolder);
    }

    /**
     * Update notes slide properties. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param dto A NotesSlide object with notes slide data.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateNotesSlide(name: string, slideIndex: number, dto: model.NotesSlide, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putUpdateNotesSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putUpdateNotesSlide.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putUpdateNotesSlide.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateNotesSlide.
     * Update notes slide properties. 
     * @param requestObj contains request parameters
     */
    public async putUpdateNotesSlide(requestObj: requests.PutUpdateNotesSlideRequest): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
        return await this.updateNotesSlide(requestObj.name, requestObj.slideIndex, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Update shape properties. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param dto Shape DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateNotesSlideShape(name: string, slideIndex: number, shapeIndex: number, dto: model.ShapeBase, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putUpdateNotesSlideShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putUpdateNotesSlideShape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putUpdateNotesSlideShape.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putUpdateNotesSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateNotesSlideShape.
     * Update shape properties. 
     * @param requestObj contains request parameters
     */
    public async putUpdateNotesSlideShape(requestObj: requests.PutUpdateNotesSlideShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        return await this.updateNotesSlideShape(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Update paragraph properties. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param dto Paragraph DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateNotesSlideParagraph(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, dto: model.Paragraph, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putUpdateNotesSlideShapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateNotesSlideParagraph.
     * Update paragraph properties. 
     * @param requestObj contains request parameters
     */
    public async putUpdateNotesSlideShapeParagraph(requestObj: requests.PutUpdateNotesSlideShapeParagraphRequest): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        return await this.updateNotesSlideParagraph(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Update portion properties. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param dto Portion DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateNotesSlidePortion(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, portionIndex: number, dto: model.Portion, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling putUpdateNotesSlideShapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/notesSlide/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * @deprecated Use updateNotesSlidePortion.
     * Update portion properties. 
     * @param requestObj contains request parameters
     */
    public async putUpdateNotesSlideShapePortion(requestObj: requests.PutUpdateNotesSlideShapePortionRequest): Promise<{response: http.ClientResponse, body: model.Portion}> {
        return await this.updateNotesSlidePortion(requestObj.name, requestObj.slideIndex, requestObj.shapeIndex, requestObj.paragraphIndex, requestObj.portionIndex, requestObj.dto, requestObj.password, requestObj.folder, requestObj.storage);
    }

    /**
     * Check if storage exists 
     * @param storageName Storage name
     */
    public async storageExists(storageName: any = null): Promise<{response: http.ClientResponse, body: model.StorageExist}> {
        if (storageName instanceof requests.StorageExistsRequest) {
            const requestObject = storageName as requests.StorageExistsRequest;
            storageName = requestObject.storageName;
        }
        // verify required parameter 'storageName' is not null or undefined
        if (storageName === null || storageName === undefined) {
            throw new Error('The required parameter "storageName" was null or undefined when calling storageExists.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/{storageName}/exist";
        localVarPath = addPathParameterToUrl(localVarPath, "storageName", ObjectSerializer.toString(storageName));
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "StorageExist");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Upload file 
     * @param path Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     * @param file File to upload
     * @param storageName Storage name
     */
    public async uploadFile(path: any = null, file: Buffer = null, storageName: string = null): Promise<{response: http.ClientResponse, body: model.FilesUploadResult}> {
        if (path instanceof requests.UploadFileRequest) {
            const requestObject = path as requests.UploadFileRequest;
            path = requestObject.path;
            file = requestObject.file;
            storageName = requestObject.storageName;
        }
        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('The required parameter "file" was null or undefined when calling uploadFile.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/file/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        let localVarFiles = [];
        if (file != null) 
        {
            localVarFiles.push(file);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        return Promise.resolve({ body: result, response });
    }
}
