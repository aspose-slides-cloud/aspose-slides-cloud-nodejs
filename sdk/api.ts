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

import { Readable } from 'stream';
import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { addQueryParameterToUrl, addPathParameterToUrl, addHeaderParameter, invokeApiMethod, checkMultipartContent } from "./internal/requestHelper";
import * as model from "./model";

export * from "./model";


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
    public async alignShapes(name: string, slideIndex: number, alignmentType: model.ShapesAlignmentType, alignToSlide: boolean = null, shapes: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling alignShapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling alignShapes.');
        }
        // verify required parameter 'alignmentType' is not null or undefined
        if (alignmentType === null || alignmentType === undefined) {
            throw new Error('The required parameter "alignmentType" was null or undefined when calling alignShapes.');
        }
        // verify value of enum parameter 'alignmentType' is valid
        if (!Object.keys(model.ShapesAlignmentType).filter(i => model.ShapesAlignmentType[i].toLowerCase() == alignmentType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for alignmentType: ' + alignmentType + '. Must be one of the following: ' + Object.keys(model.ShapesAlignmentType).map(key => model.ShapesAlignmentType[key]).join());
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Changes the placement of selected shapes on the master slide. Aligns shapes to the margins or the edge of the slide or aligns them relative to each other. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param alignmentType Alignment type that will be applied to the shapes.
     * @param alignToSlide If true, shapes will be aligned relative to the slide edges.
     * @param shapes Shapes indexes.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async alignSpecialSlideShapes(name: string, slideIndex: number, slideType: model.SpecialSlideType, alignmentType: model.ShapesAlignmentType, alignToSlide: boolean = null, shapes: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling alignSpecialSlideShapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling alignSpecialSlideShapes.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling alignSpecialSlideShapes.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'alignmentType' is not null or undefined
        if (alignmentType === null || alignmentType === undefined) {
            throw new Error('The required parameter "alignmentType" was null or undefined when calling alignSpecialSlideShapes.');
        }
        // verify value of enum parameter 'alignmentType' is valid
        if (!Object.keys(model.ShapesAlignmentType).filter(i => model.ShapesAlignmentType[i].toLowerCase() == alignmentType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for alignmentType: ' + alignmentType + '. Must be one of the following: ' + Object.keys(model.ShapesAlignmentType).map(key => model.ShapesAlignmentType[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/align/{alignmentType}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Changes the placement of selected shapes on the slide. Aligns shapes to the margins or the edge of the slide or aligns them relative to each other (for group shapes only). 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param path Shape path (for smart art and group shapes).
     * @param alignmentType Alignment type that will be applied to the shapes.
     * @param alignToSlide If true, shapes will be aligned relative to the slide edges.
     * @param shapes Shapes indexes.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async alignSubshapes(name: string, slideIndex: number, path: string = null, alignmentType: model.ShapesAlignmentType, alignToSlide: boolean = null, shapes: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling alignSubshapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling alignSubshapes.');
        }
        // verify required parameter 'alignmentType' is not null or undefined
        if (alignmentType === null || alignmentType === undefined) {
            throw new Error('The required parameter "alignmentType" was null or undefined when calling alignSubshapes.');
        }
        // verify value of enum parameter 'alignmentType' is valid
        if (!Object.keys(model.ShapesAlignmentType).filter(i => model.ShapesAlignmentType[i].toLowerCase() == alignmentType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for alignmentType: ' + alignmentType + '. Must be one of the following: ' + Object.keys(model.ShapesAlignmentType).map(key => model.ShapesAlignmentType[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{path}/align/{alignmentType}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "path", ObjectSerializer.toString(path));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Convert presentation from request content to format specified. 
     * @param document Document data.
     * @param format Export format.
     * @param password Document password.
     * @param storage Document storage.
     * @param fontsFolder Custom fonts folder.
     * @param slides The indices of the slides to be converted. If not specified, all slides are converted by default.
     * @param options Export options.
     */
    public async convert(document: Readable, format: model.ExportFormat, password: string = null, storage: string = null, fontsFolder: string = null, slides: Array<number> = null, options: model.ExportOptions = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling convert.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling convert.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ExportFormat).filter(i => model.ExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ExportFormat).map(key => model.ExportFormat[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/convert/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slides", slides);
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
     * Convert presentation from request content to format specified. 
     * @param document Document data.
     * @param format Export format.
     * @param outPath Path to save result.
     * @param password Document password.
     * @param storage Document storage.
     * @param fontsFolder Custom fonts folder.
     * @param slides The indices of the slides to be converted. If not specified, all slides are converted by default.
     * @param options Export options.
     */
    public async convertAndSave(document: Readable, format: model.ExportFormat, outPath: string, password: string = null, storage: string = null, fontsFolder: string = null, slides: Array<number> = null, options: model.ExportOptions = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling convertAndSave.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling convertAndSave.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ExportFormat).filter(i => model.ExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ExportFormat).map(key => model.ExportFormat[key]).join());
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling convertAndSave.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/convert/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slides", slides);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options
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
     * Copy file 
     * @param srcPath Source file path e.g. '/folder/file.ext'
     * @param destPath Destination file path
     * @param srcStorageName Source storage name
     * @param destStorageName Destination storage name
     * @param versionId File version ID to copy
     */
    public async copyFile(srcPath: string, destPath: string, srcStorageName: string = null, destStorageName: string = null, versionId: string = null): Promise<{response: http.ClientResponse}> {
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
    public async copyFolder(srcPath: string, destPath: string, srcStorageName: string = null, destStorageName: string = null): Promise<{response: http.ClientResponse}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
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
            throw new Error('The required parameter "name" was null or undefined when calling copyLayoutSlide.');
        }
        // verify required parameter 'cloneFrom' is not null or undefined
        if (cloneFrom === null || cloneFrom === undefined) {
            throw new Error('The required parameter "cloneFrom" was null or undefined when calling copyLayoutSlide.');
        }
        // verify required parameter 'cloneFromPosition' is not null or undefined
        if (cloneFromPosition === null || cloneFromPosition === undefined) {
            throw new Error('The required parameter "cloneFromPosition" was null or undefined when calling copyLayoutSlide.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlide");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling copyMasterSlide.');
        }
        // verify required parameter 'cloneFrom' is not null or undefined
        if (cloneFrom === null || cloneFrom === undefined) {
            throw new Error('The required parameter "cloneFrom" was null or undefined when calling copyMasterSlide.');
        }
        // verify required parameter 'cloneFromPosition' is not null or undefined
        if (cloneFromPosition === null || cloneFromPosition === undefined) {
            throw new Error('The required parameter "cloneFromPosition" was null or undefined when calling copyMasterSlide.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "MasterSlide");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling copySlide.');
        }
        // verify required parameter 'slideToCopy' is not null or undefined
        if (slideToCopy === null || slideToCopy === undefined) {
            throw new Error('The required parameter "slideToCopy" was null or undefined when calling copySlide.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createAnimationEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createAnimationEffect.');
        }
        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('The required parameter "effect" was null or undefined when calling createAnimationEffect.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createAnimationInteractiveSequence.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createAnimationInteractiveSequence.');
        }
        // verify required parameter 'sequence' is not null or undefined
        if (sequence === null || sequence === undefined) {
            throw new Error('The required parameter "sequence" was null or undefined when calling createAnimationInteractiveSequence.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'sequenceIndex' is not null or undefined
        if (sequenceIndex === null || sequenceIndex === undefined) {
            throw new Error('The required parameter "sequenceIndex" was null or undefined when calling createAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('The required parameter "effect" was null or undefined when calling createAnimationInteractiveSequenceEffect.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createChartCategory.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createChartCategory.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling createChartCategory.');
        }
        // verify required parameter 'category' is not null or undefined
        if (category === null || category === undefined) {
            throw new Error('The required parameter "category" was null or undefined when calling createChartCategory.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createChartDataPoint.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createChartDataPoint.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling createChartDataPoint.');
        }
        // verify required parameter 'seriesIndex' is not null or undefined
        if (seriesIndex === null || seriesIndex === undefined) {
            throw new Error('The required parameter "seriesIndex" was null or undefined when calling createChartDataPoint.');
        }
        // verify required parameter 'dataPoint' is not null or undefined
        if (dataPoint === null || dataPoint === undefined) {
            throw new Error('The required parameter "dataPoint" was null or undefined when calling createChartDataPoint.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createChartSeries.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createChartSeries.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling createChartSeries.');
        }
        // verify required parameter 'series' is not null or undefined
        if (series === null || series === undefined) {
            throw new Error('The required parameter "series" was null or undefined when calling createChartSeries.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Adds the comment on the slide. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param dto Comment DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createComment(name: string, slideIndex: number, dto: model.SlideComment, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideComments}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling createComment.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createComment.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling createComment.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/comments";
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideComments");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Adds the comment on the slide. 
     * @param document Document data.
     * @param slideIndex Slide index.
     * @param dto Comment DTO.
     * @param password Document password.
     */
    public async createCommentOnline(document: Readable, slideIndex: number, dto: model.SlideComment, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling createCommentOnline.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createCommentOnline.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling createCommentOnline.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/slides/{slideIndex}/comments";
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        const requestOptions: request.Options = {
            method: "POST",
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
     * Create the folder 
     * @param path Folder path to create e.g. 'folder_1/folder_2/'
     * @param storageName Storage name
     */
    public async createFolder(path: string = null, storageName: string = null): Promise<{response: http.ClientResponse}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
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
    public async createImageWatermark(name: string, image: Readable = null, pictureFrame: model.PictureFrame = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling createImageWatermark.');
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
     * Adds an image watermark to each slide of the presentation.  Image can be provided as a part of the form or withing PictureFrame DTO for detailed customization. Both options are applicable simultaneously.  
     * @param document Document data.
     * @param image Image data.
     * @param pictureFrame PictureFrame DTO.
     * @param password Document password.
     */
    public async createImageWatermarkOnline(document: Readable, image: Readable = null, pictureFrame: model.PictureFrame = null, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling createImageWatermarkOnline.');
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
            throw new Error('The required parameter "name" was null or undefined when calling createNotesSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createNotesSlide.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling createNotesSlide.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlide");
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
            throw new Error('The required parameter "name" was null or undefined when calling createParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling createParagraph.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling createParagraph.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createPortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createPortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling createPortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling createPortion.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling createPortion.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Create a presentation. 
     * @param name Document name.
     * @param data Source presentation binary data.
     * @param inputPassword The password for source presentation.
     * @param password The document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createPresentation(name: string, data: Readable = null, inputPassword: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Document}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling createPresentation.');
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
     * Create a presentation from an existing source. 
     * @param name Document name.
     * @param sourcePath Source file path.
     * @param sourcePassword Source file password.
     * @param sourceStorage Source storage name.
     * @param password The document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createPresentationFromSource(name: string, sourcePath: string = null, sourcePassword: string = null, sourceStorage: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Document}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling createPresentationFromSource.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createPresentationFromTemplate.');
        }
        // verify required parameter 'templatePath' is not null or undefined
        if (templatePath === null || templatePath === undefined) {
            throw new Error('The required parameter "templatePath" was null or undefined when calling createPresentationFromTemplate.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(JSON.parse(response.body), "Document");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createSection.');
        }
        // verify required parameter 'sectionName' is not null or undefined
        if (sectionName === null || sectionName === undefined) {
            throw new Error('The required parameter "sectionName" was null or undefined when calling createSection.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createSection.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createShape.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createSlide.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Add an effect to special slide (master, layout, notes) animation. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param effect Animation effect DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSpecialSlideAnimationEffect(name: string, slideIndex: number, slideType: model.SpecialSlideType, effect: model.Effect, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling createSpecialSlideAnimationEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createSpecialSlideAnimationEffect.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling createSpecialSlideAnimationEffect.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('The required parameter "effect" was null or undefined when calling createSpecialSlideAnimationEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/animation/mainSequence";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Set special slide (master, layout, notes) animation. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param sequence Animation sequence DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSpecialSlideAnimationInteractiveSequence(name: string, slideIndex: number, slideType: model.SpecialSlideType, sequence: model.InteractiveSequence, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling createSpecialSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createSpecialSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling createSpecialSlideAnimationInteractiveSequence.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'sequence' is not null or undefined
        if (sequence === null || sequence === undefined) {
            throw new Error('The required parameter "sequence" was null or undefined when calling createSpecialSlideAnimationInteractiveSequence.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/animation/interactiveSequences";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Add an animation effect to a special slide (master, layout, notes) interactive sequence. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param sequenceIndex The position of the interactive sequence.
     * @param effect Animation effect DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSpecialSlideAnimationInteractiveSequenceEffect(name: string, slideIndex: number, slideType: model.SpecialSlideType, sequenceIndex: number, effect: model.Effect, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling createSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling createSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'sequenceIndex' is not null or undefined
        if (sequenceIndex === null || sequenceIndex === undefined) {
            throw new Error('The required parameter "sequenceIndex" was null or undefined when calling createSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('The required parameter "effect" was null or undefined when calling createSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/animation/interactiveSequences/{sequenceIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Creates new paragraph. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param dto Paragraph DTO.
     * @param position Position of the new paragraph in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSpecialSlideParagraph(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, dto: model.Paragraph, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling createSpecialSlideParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createSpecialSlideParagraph.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling createSpecialSlideParagraph.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling createSpecialSlideParagraph.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling createSpecialSlideParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Creates new portion. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param dto Portion DTO.
     * @param position Position of the new portion in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSpecialSlidePortion(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, paragraphIndex: number, dto: model.Portion, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling createSpecialSlidePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createSpecialSlidePortion.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling createSpecialSlidePortion.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling createSpecialSlidePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling createSpecialSlidePortion.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling createSpecialSlidePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Create new shape. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param dto Shape DTO.
     * @param shapeToClone Optional index for clone shape instead of adding a new one.
     * @param position Position of the new shape in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSpecialSlideShape(name: string, slideIndex: number, slideType: model.SpecialSlideType, dto: model.ShapeBase = null, shapeToClone: number = null, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling createSpecialSlideShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createSpecialSlideShape.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling createSpecialSlideShape.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Create new shape (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param dto Shape DTO.
     * @param shapeToClone Optional index for clone shape instead of adding a new one.
     * @param position Position of the new shape in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSpecialSlideSubshape(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, dto: model.ShapeBase = null, shapeToClone: number = null, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling createSpecialSlideSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createSpecialSlideSubshape.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling createSpecialSlideSubshape.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Creates new paragraph (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param dto Paragraph DTO.
     * @param position Position of the new paragraph in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSpecialSlideSubshapeParagraph(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, dto: model.Paragraph, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling createSpecialSlideSubshapeParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createSpecialSlideSubshapeParagraph.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling createSpecialSlideSubshapeParagraph.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling createSpecialSlideSubshapeParagraph.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling createSpecialSlideSubshapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Creates new portion (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param dto Portion DTO.
     * @param position Position of the new portion in the list. Default is at the end of the list.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async createSpecialSlideSubshapePortion(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, paragraphIndex: number, dto: model.Portion, position: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling createSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling createSpecialSlideSubshapePortion.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling createSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling createSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling createSpecialSlideSubshapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createSubshape.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createSubshapeParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createSubshapeParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling createSubshapeParagraph.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling createSubshapeParagraph.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createSubshapePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling createSubshapePortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling createSubshapePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling createSubshapePortion.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling createSubshapePortion.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling createWatermark.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
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
    public async createWatermarkOnline(document: Readable, shape: model.Shape = null, fontHeight: number = null, text: string = null, fontName: string = null, fontColor: string = null, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling createWatermarkOnline.');
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
            throw new Error('The required parameter "name" was null or undefined when calling deleteAnimation.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteAnimation.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling deleteAnimationEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteAnimationEffect.');
        }
        // verify required parameter 'effectIndex' is not null or undefined
        if (effectIndex === null || effectIndex === undefined) {
            throw new Error('The required parameter "effectIndex" was null or undefined when calling deleteAnimationEffect.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling deleteAnimationInteractiveSequence.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteAnimationInteractiveSequence.');
        }
        // verify required parameter 'sequenceIndex' is not null or undefined
        if (sequenceIndex === null || sequenceIndex === undefined) {
            throw new Error('The required parameter "sequenceIndex" was null or undefined when calling deleteAnimationInteractiveSequence.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling deleteAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'sequenceIndex' is not null or undefined
        if (sequenceIndex === null || sequenceIndex === undefined) {
            throw new Error('The required parameter "sequenceIndex" was null or undefined when calling deleteAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'effectIndex' is not null or undefined
        if (effectIndex === null || effectIndex === undefined) {
            throw new Error('The required parameter "effectIndex" was null or undefined when calling deleteAnimationInteractiveSequenceEffect.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling deleteAnimationInteractiveSequences.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteAnimationInteractiveSequences.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling deleteAnimationMainSequence.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteAnimationMainSequence.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling deleteBackground.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteBackground.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
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
    public async deleteChartCategory(name: string, slideIndex: number, shapeIndex: number, categoryIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Chart}> {
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
    public async deleteChartDataPoint(name: string, slideIndex: number, shapeIndex: number, seriesIndex: number, pointIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Chart}> {
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
    public async deleteChartSeries(name: string, slideIndex: number, shapeIndex: number, seriesIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Chart}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Removes comments of the specified author from the presentation. If author value is not provided all comments will be removed.  
     * @param name Document name.
     * @param author Author of comments.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteComments(name: string, author: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteComments.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/comments";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "author", author);
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * Removes comments of the specified author from the presentation. If author value is not provided all comments will be removed.  
     * @param document Document data.
     * @param author Author of comments.
     * @param password Document password.
     */
    public async deleteCommentsOnline(document: Readable, author: string = null, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling deleteCommentsOnline.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/comments/delete";
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "author", author);
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
     * Clean document properties. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteDocumentProperties(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.DocumentProperties}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteDocumentProperties.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperties");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling deleteDocumentProperty.');
        }
        // verify required parameter 'propertyName' is not null or undefined
        if (propertyName === null || propertyName === undefined) {
            throw new Error('The required parameter "propertyName" was null or undefined when calling deleteDocumentProperty.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Delete file 
     * @param path File path e.g. '/folder/file.ext'
     * @param storageName Storage name
     * @param versionId File version ID to delete
     */
    public async deleteFile(path: string = null, storageName: string = null, versionId: string = null): Promise<{response: http.ClientResponse}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * Delete folder 
     * @param path Folder path e.g. '/folder'
     * @param storageName Storage name
     * @param recursive Enable to delete folders, subfolders and files
     */
    public async deleteFolder(path: string = null, storageName: string = null, recursive: boolean = null): Promise<{response: http.ClientResponse}> {
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
    public async deleteNotesSlide(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Slide}> {
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
    public async deleteParagraph(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of paragraphs. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphs The indices of the paragraphs to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteParagraphs(name: string, slideIndex: number, shapeIndex: number, paragraphs: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
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
    public async deletePortion(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, portionIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
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
     * @param portions The indices of the portions to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deletePortions(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, portions: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling deleteProtection.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ProtectionProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Resets all presentation protection settings.  
     * @param document Document data.
     * @param password Presentation password.
     */
    public async deleteProtectionOnline(document: Readable, password: string): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling deleteProtectionOnline.');
        }
        // verify required parameter 'password' is not null or undefined
        if (password === null || password === undefined) {
            throw new Error('The required parameter "password" was null or undefined when calling deleteProtectionOnline.');
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
     * Delete a presentation section. 
     * @param name Document name.
     * @param sectionIndex Section index.
     * @param withSlides True to delete the slides related to the deleted section; move them to the remaining sections otherwise.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSection(name: string, sectionIndex: number, withSlides: boolean = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Sections}> {
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
    public async deleteSections(name: string, sections: Array<number> = null, withSlides: boolean = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Sections}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
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
    public async deleteShape(name: string, slideIndex: number, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteShape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteShape.');
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
    public async deleteShapes(name: string, slideIndex: number, shapes: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteShapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteShapes.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlide.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Removes comments of the specified author from the slide. If author value is not provided all comments will be removed.  
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param author Author of comments.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSlideComments(name: string, slideIndex: number, author: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideComments}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlideComments.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlideComments.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/comments";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "author", author);
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideComments");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Removes comments of the specified author from the slide. If author value is not provided all comments will be removed.               
     * @param document Document data.
     * @param slideIndex 
     * @param author Author of comments.
     * @param password Document password.
     */
    public async deleteSlideCommentsOnline(document: Readable, slideIndex: number, author: string = null, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling deleteSlideCommentsOnline.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSlideCommentsOnline.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/slides/{slideIndex}/comments/delete";
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "author", author);
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
            throw new Error('The required parameter "name" was null or undefined when calling deleteSlides.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove animation from a special slide (master, layout, notes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideAnimation(name: string, slideIndex: number, slideType: model.SpecialSlideType, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideAnimation.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideAnimation.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideAnimation.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/animation";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove an effect from special slide (master, layout, notes) animation. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param effectIndex Index of the effect to be removed.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideAnimationEffect(name: string, slideIndex: number, slideType: model.SpecialSlideType, effectIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideAnimationEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideAnimationEffect.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideAnimationEffect.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'effectIndex' is not null or undefined
        if (effectIndex === null || effectIndex === undefined) {
            throw new Error('The required parameter "effectIndex" was null or undefined when calling deleteSpecialSlideAnimationEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/animation/mainSequence/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove an interactive sequence from special slide (master, layout, notes) animation. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param sequenceIndex The index of an interactive sequence to be deleted.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideAnimationInteractiveSequence(name: string, slideIndex: number, slideType: model.SpecialSlideType, sequenceIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideAnimationInteractiveSequence.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideAnimationInteractiveSequence.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'sequenceIndex' is not null or undefined
        if (sequenceIndex === null || sequenceIndex === undefined) {
            throw new Error('The required parameter "sequenceIndex" was null or undefined when calling deleteSpecialSlideAnimationInteractiveSequence.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/animation/interactiveSequences/{sequenceIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove an effect from special slide (master, layout, notes) animation interactive sequence. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param sequenceIndex Interactive sequence index.
     * @param effectIndex Index of the effect to be removed.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideAnimationInteractiveSequenceEffect(name: string, slideIndex: number, slideType: model.SpecialSlideType, sequenceIndex: number, effectIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'sequenceIndex' is not null or undefined
        if (sequenceIndex === null || sequenceIndex === undefined) {
            throw new Error('The required parameter "sequenceIndex" was null or undefined when calling deleteSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'effectIndex' is not null or undefined
        if (effectIndex === null || effectIndex === undefined) {
            throw new Error('The required parameter "effectIndex" was null or undefined when calling deleteSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/animation/interactiveSequences/{sequenceIndex}/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Clear all interactive sequences from special slide (master, layout, notes) animation. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideAnimationInteractiveSequences(name: string, slideIndex: number, slideType: model.SpecialSlideType, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideAnimationInteractiveSequences.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideAnimationInteractiveSequences.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideAnimationInteractiveSequences.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/animation/interactiveSequences";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Clear main sequence in special slide (master, layout, notes) animation. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideAnimationMainSequence(name: string, slideIndex: number, slideType: model.SpecialSlideType, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideAnimationMainSequence.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideAnimationMainSequence.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideAnimationMainSequence.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/animation/mainSequence";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a paragraph. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideParagraph(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideParagraph.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideParagraph.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSpecialSlideParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deleteSpecialSlideParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of paragraphs. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param paragraphs The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideParagraphs(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, paragraphs: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideParagraphs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideParagraphs.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideParagraphs.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSpecialSlideParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a portion. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlidePortion(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, paragraphIndex: number, portionIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlidePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlidePortion.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlidePortion.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSpecialSlidePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deleteSpecialSlidePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling deleteSpecialSlidePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of portions. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portions The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlidePortions(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, paragraphIndex: number, portions: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlidePortions.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlidePortions.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlidePortions.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSpecialSlidePortions.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deleteSpecialSlidePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a shape. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideShape(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideShape.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideShape.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSpecialSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of shapes. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapes The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideShapes(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapes: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideShapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideShapes.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideShapes.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a shape (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideSubshape(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideSubshape.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideSubshape.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSpecialSlideSubshape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a paragraph (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideSubshapeParagraph(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideSubshapeParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideSubshapeParagraph.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideSubshapeParagraph.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSpecialSlideSubshapeParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deleteSpecialSlideSubshapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of paragraphs (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphs The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideSubshapeParagraphs(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, paragraphs: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideSubshapeParagraphs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideSubshapeParagraphs.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideSubshapeParagraphs.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSpecialSlideSubshapeParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a portion (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideSubshapePortion(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, paragraphIndex: number, portionIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideSubshapePortion.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deleteSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling deleteSpecialSlideSubshapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of portions (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portions The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideSubshapePortions(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, paragraphIndex: number, portions: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideSubshapePortions.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideSubshapePortions.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideSubshapePortions.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSpecialSlideSubshapePortions.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling deleteSpecialSlideSubshapePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Remove a range of shapes (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapes The indices of the shapes to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSpecialSlideSubshapes(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapes: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteSpecialSlideSubshapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSpecialSlideSubshapes.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling deleteSpecialSlideSubshapes.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling deleteSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSubshape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling deleteSubshape.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
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
    public async deleteSubshapeParagraph(name: string, slideIndex: number, path: string = null, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
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
     * @param paragraphs The indices of the paragraphs to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSubshapeParagraphs(name: string, slideIndex: number, path: string = null, shapeIndex: number, paragraphs: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
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
    public async deleteSubshapePortion(name: string, slideIndex: number, path: string = null, shapeIndex: number, paragraphIndex: number, portionIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
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
     * @param portions The indices of the portions to be deleted; delete all by default.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteSubshapePortions(name: string, slideIndex: number, path: string = null, shapeIndex: number, paragraphIndex: number, portions: Array<number> = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling deleteSubshapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling deleteSubshapes.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Removes unused layout slides. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteUnusedLayoutSlides(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.LayoutSlides}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling deleteUnusedLayoutSlides.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/layoutSlides";
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Removes unused layout slides. 
     * @param document Document data
     * @param password Document password.
     */
    public async deleteUnusedLayoutSlidesOnline(document: Readable, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling deleteUnusedLayoutSlidesOnline.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/layoutSlides/delete";
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
     * Removes shapes with name \&quot;watermark\&quot; from the presentation. 
     * @param name Document name.
     * @param shapeName Name of the watermark shape. If null, default value \"watermark\"is used.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async deleteWatermark(name: string, shapeName: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * Removes shapes with name \&quot;watermark\&quot; from the presentation. 
     * @param document Document data.
     * @param shapeName Name of the watermark shape. If null, default value \"watermark\"is used.
     * @param password Document password.
     */
    public async deleteWatermarkOnline(document: Readable, shapeName: string = null, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling deleteWatermarkOnline.');
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
     * Download file 
     * @param path File path e.g. '/folder/file.ext'
     * @param storageName Storage name
     * @param versionId File version ID to download
     */
    public async downloadFile(path: string = null, storageName: string = null, versionId: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
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
    public async downloadImage(name: string, index: number, format: model.ImageExportFormat, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling downloadImage.');
        }
        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new Error('The required parameter "index" was null or undefined when calling downloadImage.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadImage.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ImageExportFormat).filter(i => model.ImageExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ImageExportFormat).map(key => model.ImageExportFormat[key]).join());
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling downloadImageDefaultFormat.');
        }
        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new Error('The required parameter "index" was null or undefined when calling downloadImageDefaultFormat.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Get image binary data. 
     * @param document Document data.
     * @param index Image index.
     * @param password Document password.
     */
    public async downloadImageDefaultFormatOnline(document: Readable, index: number, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling downloadImageDefaultFormatOnline.');
        }
        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new Error('The required parameter "index" was null or undefined when calling downloadImageDefaultFormatOnline.');
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
     * Get image in specified format. 
     * @param document Document data.
     * @param index Image index.
     * @param format Export format (png, jpg, gif).
     * @param password Document password.
     */
    public async downloadImageOnline(document: Readable, index: number, format: model.ImageExportFormat, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling downloadImageOnline.');
        }
        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new Error('The required parameter "index" was null or undefined when calling downloadImageOnline.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadImageOnline.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ImageExportFormat).filter(i => model.ImageExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ImageExportFormat).map(key => model.ImageExportFormat[key]).join());
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
     * Get all presentation images in specified format. 
     * @param name 
     * @param format Export format (png, jpg, gif).
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async downloadImages(name: string, format: model.ImageExportFormat, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling downloadImages.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadImages.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ImageExportFormat).filter(i => model.ImageExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ImageExportFormat).map(key => model.ImageExportFormat[key]).join());
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling downloadImagesDefaultFormat.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Get all presentation images. 
     * @param document Document data.
     * @param password Document password.
     */
    public async downloadImagesDefaultFormatOnline(document: Readable, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling downloadImagesDefaultFormatOnline.');
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
     * Get all presentation images in specified format.  
     * @param document Document data.
     * @param format Export format (png, jpg, gif).
     * @param password Document password.
     */
    public async downloadImagesOnline(document: Readable, format: model.ImageExportFormat, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling downloadImagesOnline.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadImagesOnline.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ImageExportFormat).filter(i => model.ImageExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ImageExportFormat).map(key => model.ImageExportFormat[key]).join());
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
    public async downloadNotesSlide(name: string, slideIndex: number, format: model.NotesSlideExportFormat, width: number = null, height: number = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling downloadNotesSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling downloadNotesSlide.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadNotesSlide.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.NotesSlideExportFormat).filter(i => model.NotesSlideExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.NotesSlideExportFormat).map(key => model.NotesSlideExportFormat[key]).join());
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
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
    public async downloadNotesSlideOnline(document: Readable, slideIndex: number, format: model.NotesSlideExportFormat, width: number = null, height: number = null, password: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling downloadNotesSlideOnline.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling downloadNotesSlideOnline.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadNotesSlideOnline.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.NotesSlideExportFormat).filter(i => model.NotesSlideExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.NotesSlideExportFormat).map(key => model.NotesSlideExportFormat[key]).join());
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
     * Convert Mathematical Text to MathML Format 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async downloadPortionAsMathMl(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, portionIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling downloadPortionAsMathMl.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling downloadPortionAsMathMl.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling downloadPortionAsMathMl.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling downloadPortionAsMathMl.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling downloadPortionAsMathMl.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}/mathml";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(portionIndex));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
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
     * @param slides The indices of the slides to be saved. If not specified, all slides are saved by default.
     */
    public async downloadPresentation(name: string, format: model.ExportFormat, options: model.ExportOptions = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null, slides: Array<number> = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling downloadPresentation.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadPresentation.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ExportFormat).filter(i => model.ExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ExportFormat).map(key => model.ExportFormat[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slides", slides);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options,
            encoding: null
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
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
    public async downloadShape(name: string, slideIndex: number, shapeIndex: number, format: model.ShapeExportFormat, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: model.ShapeThumbnailBounds = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling downloadShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling downloadShape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling downloadShape.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadShape.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ShapeExportFormat).filter(i => model.ShapeExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ShapeExportFormat).map(key => model.ShapeExportFormat[key]).join());
        }
        // verify value of enum parameter 'bounds' is valid
        if (bounds != null && bounds != undefined && !Object.keys(model.ShapeThumbnailBounds).filter(i => model.ShapeThumbnailBounds[i].toLowerCase() == bounds.toString().toLowerCase()).length) {
            throw new Error('Invalid value for bounds: ' + bounds + '. Must be one of the following: ' + Object.keys(model.ShapeThumbnailBounds).map(key => model.ShapeThumbnailBounds[key]).join());
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
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
     * @param options Export options.
     */
    public async downloadShapeOnline(document: Readable, slideIndex: number, shapeIndex: number, format: model.ShapeExportFormat, scaleX: number = null, scaleY: number = null, bounds: model.ShapeThumbnailBounds = null, password: string = null, storage: string = null, fontsFolder: string = null, options: model.IShapeExportOptions = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling downloadShapeOnline.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling downloadShapeOnline.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling downloadShapeOnline.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadShapeOnline.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ShapeExportFormat).filter(i => model.ShapeExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ShapeExportFormat).map(key => model.ShapeExportFormat[key]).join());
        }
        // verify value of enum parameter 'bounds' is valid
        if (bounds != null && bounds != undefined && !Object.keys(model.ShapeThumbnailBounds).filter(i => model.ShapeThumbnailBounds[i].toLowerCase() == bounds.toString().toLowerCase()).length) {
            throw new Error('Invalid value for bounds: ' + bounds + '. Must be one of the following: ' + Object.keys(model.ShapeThumbnailBounds).map(key => model.ShapeThumbnailBounds[key]).join());
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
            json: options,
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
    public async downloadSlide(name: string, slideIndex: number, format: model.SlideExportFormat, options: model.ExportOptions = null, width: number = null, height: number = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling downloadSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling downloadSlide.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadSlide.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.SlideExportFormat).filter(i => model.SlideExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.SlideExportFormat).map(key => model.SlideExportFormat[key]).join());
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
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
     * @param options Export options.
     */
    public async downloadSlideOnline(document: Readable, slideIndex: number, format: model.SlideExportFormat, width: number = null, height: number = null, password: string = null, storage: string = null, fontsFolder: string = null, options: model.ExportOptions = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling downloadSlideOnline.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling downloadSlideOnline.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadSlideOnline.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.SlideExportFormat).filter(i => model.SlideExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.SlideExportFormat).map(key => model.SlideExportFormat[key]).join());
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
            json: options,
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
     * Render shape to specified picture format. 
     * @param name Presentation name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Index of shape starting from 1
     * @param format Export picture format.
     * @param options Export options
     * @param scaleX X scale ratio.
     * @param scaleY Y scale ratio.
     * @param bounds Shape thumbnail bounds type.
     * @param password Document password.
     * @param folder Presentation folder.
     * @param storage Presentation storage.
     * @param fontsFolder Fonts folder.
     */
    public async downloadSpecialSlideShape(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, format: model.ShapeExportFormat, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: model.ShapeThumbnailBounds = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling downloadSpecialSlideShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling downloadSpecialSlideShape.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling downloadSpecialSlideShape.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling downloadSpecialSlideShape.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadSpecialSlideShape.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ShapeExportFormat).filter(i => model.ShapeExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ShapeExportFormat).map(key => model.ShapeExportFormat[key]).join());
        }
        // verify value of enum parameter 'bounds' is valid
        if (bounds != null && bounds != undefined && !Object.keys(model.ShapeThumbnailBounds).filter(i => model.ShapeThumbnailBounds[i].toLowerCase() == bounds.toString().toLowerCase()).length) {
            throw new Error('Invalid value for bounds: ' + bounds + '. Must be one of the following: ' + Object.keys(model.ShapeThumbnailBounds).map(key => model.ShapeThumbnailBounds[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Render shape to specified picture format (for smart art and group shapes). 
     * @param name Presentation name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
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
    public async downloadSpecialSlideSubshape(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, format: model.ShapeExportFormat, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: model.ShapeThumbnailBounds = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling downloadSpecialSlideSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling downloadSpecialSlideSubshape.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling downloadSpecialSlideSubshape.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling downloadSpecialSlideSubshape.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadSpecialSlideSubshape.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ShapeExportFormat).filter(i => model.ShapeExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ShapeExportFormat).map(key => model.ShapeExportFormat[key]).join());
        }
        // verify value of enum parameter 'bounds' is valid
        if (bounds != null && bounds != undefined && !Object.keys(model.ShapeThumbnailBounds).filter(i => model.ShapeThumbnailBounds[i].toLowerCase() == bounds.toString().toLowerCase()).length) {
            throw new Error('Invalid value for bounds: ' + bounds + '. Must be one of the following: ' + Object.keys(model.ShapeThumbnailBounds).map(key => model.ShapeThumbnailBounds[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
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
    public async downloadSubshape(name: string, slideIndex: number, path: string = null, shapeIndex: number, format: model.ShapeExportFormat, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: model.ShapeThumbnailBounds = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling downloadSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling downloadSubshape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling downloadSubshape.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling downloadSubshape.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ShapeExportFormat).filter(i => model.ShapeExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ShapeExportFormat).map(key => model.ShapeExportFormat[key]).join());
        }
        // verify value of enum parameter 'bounds' is valid
        if (bounds != null && bounds != undefined && !Object.keys(model.ShapeThumbnailBounds).filter(i => model.ShapeThumbnailBounds[i].toLowerCase() == bounds.toString().toLowerCase()).length) {
            throw new Error('Invalid value for bounds: ' + bounds + '. Must be one of the following: ' + Object.keys(model.ShapeThumbnailBounds).map(key => model.ShapeThumbnailBounds[key]).join());
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read slide animation effects. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index. If specified, only effects related to that shape are returned.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getAnimation(name: string, slideIndex: number, shapeIndex: number = null, paragraphIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getAnimation.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getAnimation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/animation";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeIndex", shapeIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "paragraphIndex", paragraphIndex);
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getBackground.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getBackground.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getColorScheme.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getColorScheme.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ColorScheme");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Get disc usage 
     * @param storageName Storage name
     */
    public async getDiscUsage(storageName: string = null): Promise<{response: http.ClientResponse, body: model.DiscUsage}> {
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/storage/disc";
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true
        };
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DiscUsage");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getDocumentProperties.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperties");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getDocumentProperty.');
        }
        // verify required parameter 'propertyName' is not null or undefined
        if (propertyName === null || propertyName === undefined) {
            throw new Error('The required parameter "propertyName" was null or undefined when calling getDocumentProperty.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperty");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Get file versions 
     * @param path File path e.g. '/file.ext'
     * @param storageName Storage name
     */
    public async getFileVersions(path: string = null, storageName: string = null): Promise<{response: http.ClientResponse, body: model.FileVersions}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FileVersions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Get all files and folders within a folder 
     * @param path Folder path e.g. '/folder'
     * @param storageName Storage name
     */
    public async getFilesList(path: string = null, storageName: string = null): Promise<{response: http.ClientResponse, body: model.FilesList}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FilesList");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getFontScheme.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getFontScheme.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FontScheme");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getFormatScheme.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getFormatScheme.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "FormatScheme");
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
    public async getLayoutSlide(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.LayoutSlide}> {
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
            throw new Error('The required parameter "name" was null or undefined when calling getLayoutSlides.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read presentation masterSlide info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getMasterSlide(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.MasterSlide}> {
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
            throw new Error('The required parameter "name" was null or undefined when calling getMasterSlides.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "MasterSlides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read notes slide info. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getNotesSlide(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Get header/footer info for the notes slide. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getNotesSlideHeaderFooter(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.NotesSlideHeaderFooter}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlideHeaderFooter");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read notes slide info. 
     * @param document Document data.
     * @param slideIndex Slide index.
     * @param password Document password.
     */
    public async getNotesSlideOnline(document: Readable, slideIndex: number, password: string = null): Promise<{response: http.ClientResponse, body: model.NotesSlide}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling getNotesSlideOnline.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getNotesSlideOnline.');
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
            throw new Error('The required parameter "name" was null or undefined when calling getParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getParagraph.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getParagraphs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getParagraphs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getParagraphs.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getPlaceholder.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getPlaceholder.');
        }
        // verify required parameter 'placeholderIndex' is not null or undefined
        if (placeholderIndex === null || placeholderIndex === undefined) {
            throw new Error('The required parameter "placeholderIndex" was null or undefined when calling getPlaceholder.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Placeholder");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getPlaceholders.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getPlaceholders.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Placeholders");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getPortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getPortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getPortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getPortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling getPortion.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getPortions.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getPortions.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getPortions.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getPortions.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getPresentation.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getPresentationImages.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Images");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getPresentationTextItems.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "TextItems");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getProtectionProperties.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ProtectionProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read presentation sections info. 
     * @param name Document name.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSections(name: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Sections}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
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
            throw new Error('The required parameter "name" was null or undefined when calling getShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getShape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getShape.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Returns geometry path of the shape 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getShapeGeometryPath(name: string, slideIndex: number, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.GeometryPaths}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getShapeGeometryPath.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getShapeGeometryPath.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getShapeGeometryPath.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/geometryPath";
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "GeometryPaths");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getShapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getShapes.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlide.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read presentation slide comments. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSlideComments(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideComments}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSlideComments.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlideComments.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideComments");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Get footer info for the slide. 
     * @param name Document name.
     * @param slideIndex The position of the slide to be reordered.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSlideHeaderFooter(name: string, slideIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.HeaderFooter}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "HeaderFooter");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getSlideImages.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlideImages.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Images");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getSlideProperties.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideProperties");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getSlideTextItems.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSlideTextItems.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "TextItems");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getSlides.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read special slide (master, layout, notes) animation effects. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index. If specified, only effects related to that shape are returned.
     * @param paragraphIndex Paragraph index. If specified, only effects related to that paragraph are returned.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSpecialSlideAnimation(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number = null, paragraphIndex: number = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSpecialSlideAnimation.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSpecialSlideAnimation.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling getSpecialSlideAnimation.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/animation";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shapeIndex", shapeIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "paragraphIndex", paragraphIndex);
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read shape paragraph info. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSpecialSlideParagraph(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSpecialSlideParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSpecialSlideParagraph.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling getSpecialSlideParagraph.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSpecialSlideParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getSpecialSlideParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read special shape paragraphs info. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSpecialSlideParagraphs(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSpecialSlideParagraphs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSpecialSlideParagraphs.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling getSpecialSlideParagraphs.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSpecialSlideParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read paragraph portion info. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSpecialSlidePortion(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, paragraphIndex: number, portionIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSpecialSlidePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSpecialSlidePortion.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling getSpecialSlidePortion.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSpecialSlidePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getSpecialSlidePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling getSpecialSlidePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read paragraph portions info. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSpecialSlidePortions(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSpecialSlidePortions.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSpecialSlidePortions.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling getSpecialSlidePortions.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSpecialSlidePortions.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getSpecialSlidePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read special slide shape info. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSpecialSlideShape(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSpecialSlideShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSpecialSlideShape.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling getSpecialSlideShape.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSpecialSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read special slide shapes info. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSpecialSlideShapes(name: string, slideIndex: number, slideType: model.SpecialSlideType, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSpecialSlideShapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSpecialSlideShapes.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling getSpecialSlideShapes.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read special slide shape info (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSpecialSlideSubshape(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSpecialSlideSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSpecialSlideSubshape.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling getSpecialSlideSubshape.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSpecialSlideSubshape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read shape paragraph info (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSpecialSlideSubshapeParagraph(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSpecialSlideSubshapeParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSpecialSlideSubshapeParagraph.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling getSpecialSlideSubshapeParagraph.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSpecialSlideSubshapeParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getSpecialSlideSubshapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read shape paragraphs info (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSpecialSlideSubshapeParagraphs(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraphs}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSpecialSlideSubshapeParagraphs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSpecialSlideSubshapeParagraphs.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling getSpecialSlideSubshapeParagraphs.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSpecialSlideSubshapeParagraphs.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/paragraphs";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read paragraph portion info (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSpecialSlideSubshapePortion(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, paragraphIndex: number, portionIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling getSpecialSlideSubshapePortion.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling getSpecialSlideSubshapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read paragraph portions info (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSpecialSlideSubshapePortions(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, paragraphIndex: number, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portions}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSpecialSlideSubshapePortions.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSpecialSlideSubshapePortions.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling getSpecialSlideSubshapePortions.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSpecialSlideSubshapePortions.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getSpecialSlideSubshapePortions.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Read special slide shapes info. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path (for smart art and group shapes).
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async getSpecialSlideSubshapes(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shapes}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling getSpecialSlideSubshapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSpecialSlideSubshapes.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling getSpecialSlideSubshapes.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSubshape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSubshape.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getSubshapeParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSubshapeParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSubshapeParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getSubshapeParagraph.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getSubshapeParagraphs.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSubshapeParagraphs.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSubshapeParagraphs.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraphs");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getSubshapePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSubshapePortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSubshapePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getSubshapePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling getSubshapePortion.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getSubshapePortions.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSubshapePortions.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling getSubshapePortions.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling getSubshapePortions.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portions");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getSubshapes.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getSubshapes.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shapes");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getTheme.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling getTheme.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Theme");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling getViewProperties.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ViewProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Highlight all matches of sample in text frame text using specified color. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param regex Regular expression.
     * @param color Highlighting color.
     * @param wholeWordsOnly Match only whole words.
     * @param ignoreCase True to search ignoring char case.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async highlightShapeRegex(name: string, slideIndex: number, shapeIndex: number, regex: string, color: string, wholeWordsOnly: boolean = null, ignoreCase: boolean = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shape}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling highlightShapeRegex.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling highlightShapeRegex.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling highlightShapeRegex.');
        }
        // verify required parameter 'regex' is not null or undefined
        if (regex === null || regex === undefined) {
            throw new Error('The required parameter "regex" was null or undefined when calling highlightShapeRegex.');
        }
        // verify required parameter 'color' is not null or undefined
        if (color === null || color === undefined) {
            throw new Error('The required parameter "color" was null or undefined when calling highlightShapeRegex.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/highlightRegex";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "regex", regex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "color", color);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "wholeWordsOnly", wholeWordsOnly);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreCase", ignoreCase);
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shape");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Highlight all matches of sample in text frame text using specified color. 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param text Text sample to highlight.
     * @param color Highlighting color.
     * @param wholeWordsOnly Match only whole words.
     * @param ignoreCase True to search ignoring char case.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async highlightShapeText(name: string, slideIndex: number, shapeIndex: number, text: string, color: string, wholeWordsOnly: boolean = null, ignoreCase: boolean = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Shape}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling highlightShapeText.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling highlightShapeText.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling highlightShapeText.');
        }
        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new Error('The required parameter "text" was null or undefined when calling highlightShapeText.');
        }
        // verify required parameter 'color' is not null or undefined
        if (color === null || color === undefined) {
            throw new Error('The required parameter "color" was null or undefined when calling highlightShapeText.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/highlightText";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "text", text);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "color", color);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "wholeWordsOnly", wholeWordsOnly);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreCase", ignoreCase);
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Shape");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling importFromHtml.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(JSON.parse(response.body), "Document");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Create presentation document from pdf or append pdf to an existing presentation. 
     * @param name Document name.
     * @param pdf PDF data.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async importFromPdf(name: string, pdf: Readable = null, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Document}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling importFromPdf.');
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
            throw new Error('The required parameter "name" was null or undefined when calling merge.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('The required parameter "request" was null or undefined when calling merge.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Merges presentations or some of their slides specified in the request parameter. Result will be save in the storage. 
     * @param outPath Path to save result.
     * @param files Files to merge
     * @param request Merge request.
     * @param storage Document storage.
     */
    public async mergeAndSaveOnline(outPath: string, files: Array<Readable> = null, request: model.OrderedMergeRequest = null, storage: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling mergeAndSaveOnline.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/merge";
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: request
        };
        let localVarFiles = [];
        if (files != null) {
            localVarFiles = localVarFiles.concat(files);
        }
        checkMultipartContent(requestOptions, localVarFiles);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * Merges presentations or some of their slides specified in the request parameter. Returns result file in the response.  
     * @param files Files to merge
     * @param request Merge request.
     * @param storage Document storage.
     */
    public async mergeOnline(files: Array<Readable> = null, request: model.OrderedMergeRequest = null, storage: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/merge";
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: request,
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
     * Move file 
     * @param srcPath Source file path e.g. '/src.ext'
     * @param destPath Destination file path e.g. '/dest.ext'
     * @param srcStorageName Source storage name
     * @param destStorageName Destination storage name
     * @param versionId File version ID to move
     */
    public async moveFile(srcPath: string, destPath: string, srcStorageName: string = null, destStorageName: string = null, versionId: string = null): Promise<{response: http.ClientResponse}> {
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
    public async moveFolder(srcPath: string, destPath: string, srcStorageName: string = null, destStorageName: string = null): Promise<{response: http.ClientResponse}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
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
            throw new Error('The required parameter "name" was null or undefined when calling moveSection.');
        }
        // verify required parameter 'sectionIndex' is not null or undefined
        if (sectionIndex === null || sectionIndex === undefined) {
            throw new Error('The required parameter "sectionIndex" was null or undefined when calling moveSection.');
        }
        // verify required parameter 'newPosition' is not null or undefined
        if (newPosition === null || newPosition === undefined) {
            throw new Error('The required parameter "newPosition" was null or undefined when calling moveSection.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling moveSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling moveSlide.');
        }
        // verify required parameter 'newPosition' is not null or undefined
        if (newPosition === null || newPosition === undefined) {
            throw new Error('The required parameter "newPosition" was null or undefined when calling moveSlide.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
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
            throw new Error('The required parameter "name" was null or undefined when calling notesSlideExists.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling notesSlideExists.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "EntityExists");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Get info whether a notes slide exists. 
     * @param document Document data.
     * @param slideIndex Slide index.
     * @param password Document password.
     */
    public async notesSlideExistsOnline(document: Readable, slideIndex: number, password: string = null): Promise<{response: http.ClientResponse, body: model.EntityExists}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling notesSlideExistsOnline.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling notesSlideExistsOnline.');
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
     * Check if file or folder exists 
     * @param path File or folder path e.g. '/file.ext' or '/folder'
     * @param storageName Storage name
     * @param versionId File version ID
     */
    public async objectExists(path: string = null, storageName: string = null, versionId: string = null): Promise<{response: http.ClientResponse, body: model.ObjectExist}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ObjectExist");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling orderedMerge.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('The required parameter "request" was null or undefined when calling orderedMerge.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Performs slides pipeline. 
     * @param pipeline A Pipeline object.
     * @param files Files to upload with the pipeline
     */
    public async pipeline(pipeline: model.Pipeline, files: Array<Readable> = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'pipeline' is not null or undefined
        if (pipeline === null || pipeline === undefined) {
            throw new Error('The required parameter "pipeline" was null or undefined when calling pipeline.');
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
            throw new Error('The required parameter "name" was null or undefined when calling reorderSlides.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slides");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling replacePresentationText.');
        }
        // verify required parameter 'oldValue' is not null or undefined
        if (oldValue === null || oldValue === undefined) {
            throw new Error('The required parameter "oldValue" was null or undefined when calling replacePresentationText.');
        }
        // verify required parameter 'newValue' is not null or undefined
        if (newValue === null || newValue === undefined) {
            throw new Error('The required parameter "newValue" was null or undefined when calling replacePresentationText.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentReplaceResult");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Replace text with a new value. 
     * @param document Document data.
     * @param oldValue Text value to be replaced.
     * @param newValue Text value to replace with.
     * @param ignoreCase True if character case must be ignored.
     * @param password Document password.
     */
    public async replacePresentationTextOnline(document: Readable, oldValue: string, newValue: string, ignoreCase: boolean = null, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling replacePresentationTextOnline.');
        }
        // verify required parameter 'oldValue' is not null or undefined
        if (oldValue === null || oldValue === undefined) {
            throw new Error('The required parameter "oldValue" was null or undefined when calling replacePresentationTextOnline.');
        }
        // verify required parameter 'newValue' is not null or undefined
        if (newValue === null || newValue === undefined) {
            throw new Error('The required parameter "newValue" was null or undefined when calling replacePresentationTextOnline.');
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
            throw new Error('The required parameter "name" was null or undefined when calling replaceSlideText.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling replaceSlideText.');
        }
        // verify required parameter 'oldValue' is not null or undefined
        if (oldValue === null || oldValue === undefined) {
            throw new Error('The required parameter "oldValue" was null or undefined when calling replaceSlideText.');
        }
        // verify required parameter 'newValue' is not null or undefined
        if (newValue === null || newValue === undefined) {
            throw new Error('The required parameter "newValue" was null or undefined when calling replaceSlideText.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideReplaceResult");
        return Promise.resolve({ body: result, response });
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
    public async replaceSlideTextOnline(document: Readable, slideIndex: number, oldValue: string, newValue: string, ignoreCase: boolean = null, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling replaceSlideTextOnline.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling replaceSlideTextOnline.');
        }
        // verify required parameter 'oldValue' is not null or undefined
        if (oldValue === null || oldValue === undefined) {
            throw new Error('The required parameter "oldValue" was null or undefined when calling replaceSlideTextOnline.');
        }
        // verify required parameter 'newValue' is not null or undefined
        if (newValue === null || newValue === undefined) {
            throw new Error('The required parameter "newValue" was null or undefined when calling replaceSlideTextOnline.');
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
     * Convert Mathematical Text to MathML Format and saves result to the storage 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param outPath Path to save result.
     * @param password Document password.
     * @param folder Presentation folder.
     * @param storage Presentation storage.
     */
    public async savePortionAsMathMl(name: string, slideIndex: number, shapeIndex: number, paragraphIndex: number, portionIndex: number, outPath: string, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling savePortionAsMathMl.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling savePortionAsMathMl.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling savePortionAsMathMl.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling savePortionAsMathMl.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling savePortionAsMathMl.');
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling savePortionAsMathMl.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}/mathml";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "shapeIndex", ObjectSerializer.toString(shapeIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "paragraphIndex", ObjectSerializer.toString(paragraphIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "portionIndex", ObjectSerializer.toString(portionIndex));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", outPath);
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
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
     * @param slides The indices of the slides to be saved. If not specified, all slides are saved by default.
     */
    public async savePresentation(name: string, format: model.ExportFormat, outPath: string, options: model.ExportOptions = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null, slides: Array<number> = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling savePresentation.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling savePresentation.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ExportFormat).filter(i => model.ExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ExportFormat).map(key => model.ExportFormat[key]).join());
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling savePresentation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "format", ObjectSerializer.toString(format));
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "slides", slides);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: {},
            uri: localVarPath,
            json: options
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
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
    public async saveShape(name: string, slideIndex: number, shapeIndex: number, format: model.ShapeExportFormat, outPath: string, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: model.ShapeThumbnailBounds = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling saveShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling saveShape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling saveShape.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling saveShape.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ShapeExportFormat).filter(i => model.ShapeExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ShapeExportFormat).map(key => model.ShapeExportFormat[key]).join());
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling saveShape.');
        }
        // verify value of enum parameter 'bounds' is valid
        if (bounds != null && bounds != undefined && !Object.keys(model.ShapeThumbnailBounds).filter(i => model.ShapeThumbnailBounds[i].toLowerCase() == bounds.toString().toLowerCase()).length) {
            throw new Error('Invalid value for bounds: ' + bounds + '. Must be one of the following: ' + Object.keys(model.ShapeThumbnailBounds).map(key => model.ShapeThumbnailBounds[key]).join());
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
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
     * @param options Export options.
     */
    public async saveShapeOnline(document: Readable, slideIndex: number, shapeIndex: number, format: model.ShapeExportFormat, outPath: string, scaleX: number = null, scaleY: number = null, bounds: model.ShapeThumbnailBounds = null, password: string = null, storage: string = null, fontsFolder: string = null, options: model.IShapeExportOptions = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling saveShapeOnline.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling saveShapeOnline.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling saveShapeOnline.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling saveShapeOnline.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ShapeExportFormat).filter(i => model.ShapeExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ShapeExportFormat).map(key => model.ShapeExportFormat[key]).join());
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling saveShapeOnline.');
        }
        // verify value of enum parameter 'bounds' is valid
        if (bounds != null && bounds != undefined && !Object.keys(model.ShapeThumbnailBounds).filter(i => model.ShapeThumbnailBounds[i].toLowerCase() == bounds.toString().toLowerCase()).length) {
            throw new Error('Invalid value for bounds: ' + bounds + '. Must be one of the following: ' + Object.keys(model.ShapeThumbnailBounds).map(key => model.ShapeThumbnailBounds[key]).join());
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
            json: options
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
    public async saveSlide(name: string, slideIndex: number, format: model.SlideExportFormat, outPath: string, options: model.ExportOptions = null, width: number = null, height: number = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling saveSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling saveSlide.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling saveSlide.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.SlideExportFormat).filter(i => model.SlideExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.SlideExportFormat).map(key => model.SlideExportFormat[key]).join());
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling saveSlide.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
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
     * @param options Export options.
     */
    public async saveSlideOnline(document: Readable, slideIndex: number, format: model.SlideExportFormat, outPath: string, width: number = null, height: number = null, password: string = null, storage: string = null, fontsFolder: string = null, options: model.ExportOptions = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling saveSlideOnline.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling saveSlideOnline.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling saveSlideOnline.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.SlideExportFormat).filter(i => model.SlideExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.SlideExportFormat).map(key => model.SlideExportFormat[key]).join());
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling saveSlideOnline.');
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
            json: options
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
     * Render shape to specified picture format. 
     * @param name Presentation name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
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
    public async saveSpecialSlideShape(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, format: model.ShapeExportFormat, outPath: string, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: model.ShapeThumbnailBounds = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling saveSpecialSlideShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling saveSpecialSlideShape.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling saveSpecialSlideShape.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling saveSpecialSlideShape.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling saveSpecialSlideShape.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ShapeExportFormat).filter(i => model.ShapeExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ShapeExportFormat).map(key => model.ShapeExportFormat[key]).join());
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling saveSpecialSlideShape.');
        }
        // verify value of enum parameter 'bounds' is valid
        if (bounds != null && bounds != undefined && !Object.keys(model.ShapeThumbnailBounds).filter(i => model.ShapeThumbnailBounds[i].toLowerCase() == bounds.toString().toLowerCase()).length) {
            throw new Error('Invalid value for bounds: ' + bounds + '. Must be one of the following: ' + Object.keys(model.ShapeThumbnailBounds).map(key => model.ShapeThumbnailBounds[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
    }

    /**
     * Render shape to specified picture format. 
     * @param name Presentation name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
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
    public async saveSpecialSlideSubshape(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, format: model.ShapeExportFormat, outPath: string, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: model.ShapeThumbnailBounds = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling saveSpecialSlideSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling saveSpecialSlideSubshape.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling saveSpecialSlideSubshape.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling saveSpecialSlideSubshape.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling saveSpecialSlideSubshape.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ShapeExportFormat).filter(i => model.ShapeExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ShapeExportFormat).map(key => model.ShapeExportFormat[key]).join());
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling saveSpecialSlideSubshape.');
        }
        // verify value of enum parameter 'bounds' is valid
        if (bounds != null && bounds != undefined && !Object.keys(model.ShapeThumbnailBounds).filter(i => model.ShapeThumbnailBounds[i].toLowerCase() == bounds.toString().toLowerCase()).length) {
            throw new Error('Invalid value for bounds: ' + bounds + '. Must be one of the following: ' + Object.keys(model.ShapeThumbnailBounds).map(key => model.ShapeThumbnailBounds[key]).join());
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/{format}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
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
    public async saveSubshape(name: string, slideIndex: number, path: string = null, shapeIndex: number, format: model.ShapeExportFormat, outPath: string, options: model.IShapeExportOptions = null, scaleX: number = null, scaleY: number = null, bounds: model.ShapeThumbnailBounds = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling saveSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling saveSubshape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling saveSubshape.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling saveSubshape.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.ShapeExportFormat).filter(i => model.ShapeExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.ShapeExportFormat).map(key => model.ShapeExportFormat[key]).join());
        }
        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('The required parameter "outPath" was null or undefined when calling saveSubshape.');
        }
        // verify value of enum parameter 'bounds' is valid
        if (bounds != null && bounds != undefined && !Object.keys(model.ShapeThumbnailBounds).filter(i => model.ShapeThumbnailBounds[i].toLowerCase() == bounds.toString().toLowerCase()).length) {
            throw new Error('Invalid value for bounds: ' + bounds + '. Must be one of the following: ' + Object.keys(model.ShapeThumbnailBounds).map(key => model.ShapeThumbnailBounds[key]).join());
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        
        return Promise.resolve({ response });
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
            throw new Error('The required parameter "name" was null or undefined when calling setAnimation.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling setAnimation.');
        }
        // verify required parameter 'animation' is not null or undefined
        if (animation === null || animation === undefined) {
            throw new Error('The required parameter "animation" was null or undefined when calling setAnimation.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling setBackground.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling setBackground.');
        }
        // verify required parameter 'background' is not null or undefined
        if (background === null || background === undefined) {
            throw new Error('The required parameter "background" was null or undefined when calling setBackground.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling setBackgroundColor.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling setBackgroundColor.');
        }
        // verify required parameter 'color' is not null or undefined
        if (color === null || color === undefined) {
            throw new Error('The required parameter "color" was null or undefined when calling setBackgroundColor.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideBackground");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling setDocumentProperties.');
        }
        // verify required parameter 'properties' is not null or undefined
        if (properties === null || properties === undefined) {
            throw new Error('The required parameter "properties" was null or undefined when calling setDocumentProperties.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperties");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling setDocumentProperty.');
        }
        // verify required parameter 'propertyName' is not null or undefined
        if (propertyName === null || propertyName === undefined) {
            throw new Error('The required parameter "propertyName" was null or undefined when calling setDocumentProperty.');
        }
        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new Error('The required parameter "property" was null or undefined when calling setDocumentProperty.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "DocumentProperty");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling setNotesSlideHeaderFooter.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling setNotesSlideHeaderFooter.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling setNotesSlideHeaderFooter.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlideHeaderFooter");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling setPresentationHeaderFooter.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling setPresentationHeaderFooter.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Document");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling setProtection.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling setProtection.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ProtectionProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Sets presentation protection options.  
     * @param document Document data.
     * @param dto Protection properties.
     * @param password Document password.
     */
    public async setProtectionOnline(document: Readable, dto: model.ProtectionProperties, password: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling setProtectionOnline.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling setProtectionOnline.');
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
            throw new Error('The required parameter "name" was null or undefined when calling setSections.');
        }
        // verify required parameter 'sections' is not null or undefined
        if (sections === null || sections === undefined) {
            throw new Error('The required parameter "sections" was null or undefined when calling setSections.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Sets geometry path to the shape 
     * @param name Document name.
     * @param slideIndex Slide index.
     * @param shapeIndex Shape index.
     * @param dto Geometry paths DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setShapeGeometryPath(name: string, slideIndex: number, shapeIndex: number, dto: model.GeometryPaths, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling setShapeGeometryPath.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling setShapeGeometryPath.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling setShapeGeometryPath.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling setShapeGeometryPath.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/shapes/{shapeIndex}/geometryPath";
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
            json: dto
        };
        addHeaderParameter(requestOptions.headers, "password", password);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling setSlideHeaderFooter.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling setSlideHeaderFooter.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling setSlideHeaderFooter.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "HeaderFooter");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling setSlideProperties.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling setSlideProperties.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideProperties");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Set special slide (master, layout, notes) animation. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param animation Animation DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async setSpecialSlideAnimation(name: string, slideIndex: number, slideType: model.SpecialSlideType, animation: model.SlideAnimation, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling setSpecialSlideAnimation.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling setSpecialSlideAnimation.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling setSpecialSlideAnimation.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'animation' is not null or undefined
        if (animation === null || animation === undefined) {
            throw new Error('The required parameter "animation" was null or undefined when calling setSpecialSlideAnimation.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/animation";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling setViewProperties.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling setViewProperties.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ViewProperties");
        return Promise.resolve({ body: result, response });
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
    public async split(name: string, options: model.ExportOptions = null, format: model.SlideExportFormat = null, width: number = null, height: number = null, from: number = null, to: number = null, destFolder: string = null, password: string = null, folder: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: model.SplitDocumentResult}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling split.');
        }
        // verify value of enum parameter 'format' is valid
        if (format != null && format != undefined && !Object.keys(model.SlideExportFormat).filter(i => model.SlideExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.SlideExportFormat).map(key => model.SlideExportFormat[key]).join());
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SplitDocumentResult");
        return Promise.resolve({ body: result, response });
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
    public async splitAndSaveOnline(document: Readable, format: model.SlideExportFormat, destFolder: string = null, width: number = null, height: number = null, from: number = null, to: number = null, password: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: model.SplitDocumentResult}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling splitAndSaveOnline.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling splitAndSaveOnline.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.SlideExportFormat).filter(i => model.SlideExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.SlideExportFormat).map(key => model.SlideExportFormat[key]).join());
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
    public async splitOnline(document: Readable, format: model.SlideExportFormat, width: number = null, height: number = null, from: number = null, to: number = null, password: string = null, storage: string = null, fontsFolder: string = null): Promise<{response: http.ClientResponse, body: Buffer}> {
        // verify required parameter 'document' is not null or undefined
        if (document === null || document === undefined) {
            throw new Error('The required parameter "document" was null or undefined when calling splitOnline.');
        }
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('The required parameter "format" was null or undefined when calling splitOnline.');
        }
        // verify value of enum parameter 'format' is valid
        if (!Object.keys(model.SlideExportFormat).filter(i => model.SlideExportFormat[i].toLowerCase() == format.toString().toLowerCase()).length) {
            throw new Error('Invalid value for format: ' + format + '. Must be one of the following: ' + Object.keys(model.SlideExportFormat).map(key => model.SlideExportFormat[key]).join());
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
     * Check if storage exists 
     * @param storageName Storage name
     */
    public async storageExists(storageName: string): Promise<{response: http.ClientResponse, body: model.StorageExist}> {
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "StorageExist");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateAnimationEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateAnimationEffect.');
        }
        // verify required parameter 'effectIndex' is not null or undefined
        if (effectIndex === null || effectIndex === undefined) {
            throw new Error('The required parameter "effectIndex" was null or undefined when calling updateAnimationEffect.');
        }
        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('The required parameter "effect" was null or undefined when calling updateAnimationEffect.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'sequenceIndex' is not null or undefined
        if (sequenceIndex === null || sequenceIndex === undefined) {
            throw new Error('The required parameter "sequenceIndex" was null or undefined when calling updateAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'effectIndex' is not null or undefined
        if (effectIndex === null || effectIndex === undefined) {
            throw new Error('The required parameter "effectIndex" was null or undefined when calling updateAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('The required parameter "effect" was null or undefined when calling updateAnimationInteractiveSequenceEffect.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateChartCategory.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateChartCategory.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateChartCategory.');
        }
        // verify required parameter 'categoryIndex' is not null or undefined
        if (categoryIndex === null || categoryIndex === undefined) {
            throw new Error('The required parameter "categoryIndex" was null or undefined when calling updateChartCategory.');
        }
        // verify required parameter 'category' is not null or undefined
        if (category === null || category === undefined) {
            throw new Error('The required parameter "category" was null or undefined when calling updateChartCategory.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateChartDataPoint.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateChartDataPoint.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateChartDataPoint.');
        }
        // verify required parameter 'seriesIndex' is not null or undefined
        if (seriesIndex === null || seriesIndex === undefined) {
            throw new Error('The required parameter "seriesIndex" was null or undefined when calling updateChartDataPoint.');
        }
        // verify required parameter 'pointIndex' is not null or undefined
        if (pointIndex === null || pointIndex === undefined) {
            throw new Error('The required parameter "pointIndex" was null or undefined when calling updateChartDataPoint.');
        }
        // verify required parameter 'dataPoint' is not null or undefined
        if (dataPoint === null || dataPoint === undefined) {
            throw new Error('The required parameter "dataPoint" was null or undefined when calling updateChartDataPoint.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateChartSeries.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateChartSeries.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateChartSeries.');
        }
        // verify required parameter 'seriesIndex' is not null or undefined
        if (seriesIndex === null || seriesIndex === undefined) {
            throw new Error('The required parameter "seriesIndex" was null or undefined when calling updateChartSeries.');
        }
        // verify required parameter 'series' is not null or undefined
        if (series === null || series === undefined) {
            throw new Error('The required parameter "series" was null or undefined when calling updateChartSeries.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Chart");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateLayoutSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateLayoutSlide.');
        }
        // verify required parameter 'slideDto' is not null or undefined
        if (slideDto === null || slideDto === undefined) {
            throw new Error('The required parameter "slideDto" was null or undefined when calling updateLayoutSlide.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "LayoutSlide");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateNotesSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateNotesSlide.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling updateNotesSlide.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "NotesSlide");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling updateParagraph.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling updateParagraph.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updatePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updatePortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updatePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling updatePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling updatePortion.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling updatePortion.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateSection.');
        }
        // verify required parameter 'sectionIndex' is not null or undefined
        if (sectionIndex === null || sectionIndex === undefined) {
            throw new Error('The required parameter "sectionIndex" was null or undefined when calling updateSection.');
        }
        // verify required parameter 'sectionName' is not null or undefined
        if (sectionName === null || sectionName === undefined) {
            throw new Error('The required parameter "sectionName" was null or undefined when calling updateSection.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Sections");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateShape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateShape.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling updateShape.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateSlide.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateSlide.');
        }
        // verify required parameter 'slideDto' is not null or undefined
        if (slideDto === null || slideDto === undefined) {
            throw new Error('The required parameter "slideDto" was null or undefined when calling updateSlide.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Slide");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Modify an animation effect for a special slide (master, layout, notes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param effectIndex The position of the effect to be modified.
     * @param effect Animation effect DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateSpecialSlideAnimationEffect(name: string, slideIndex: number, slideType: model.SpecialSlideType, effectIndex: number, effect: model.Effect, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling updateSpecialSlideAnimationEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateSpecialSlideAnimationEffect.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling updateSpecialSlideAnimationEffect.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'effectIndex' is not null or undefined
        if (effectIndex === null || effectIndex === undefined) {
            throw new Error('The required parameter "effectIndex" was null or undefined when calling updateSpecialSlideAnimationEffect.');
        }
        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('The required parameter "effect" was null or undefined when calling updateSpecialSlideAnimationEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/animation/mainSequence/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Modify an animation effect for a special slide (master, layout, notes) interactive sequence. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param sequenceIndex The position of the interactive sequence.
     * @param effectIndex The position of the effect to be modified.
     * @param effect Animation effect DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateSpecialSlideAnimationInteractiveSequenceEffect(name: string, slideIndex: number, slideType: model.SpecialSlideType, sequenceIndex: number, effectIndex: number, effect: model.Effect, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.SlideAnimation}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling updateSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling updateSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'sequenceIndex' is not null or undefined
        if (sequenceIndex === null || sequenceIndex === undefined) {
            throw new Error('The required parameter "sequenceIndex" was null or undefined when calling updateSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'effectIndex' is not null or undefined
        if (effectIndex === null || effectIndex === undefined) {
            throw new Error('The required parameter "effectIndex" was null or undefined when calling updateSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new Error('The required parameter "effect" was null or undefined when calling updateSpecialSlideAnimationInteractiveSequenceEffect.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/animation/interactiveSequences/{sequenceIndex}/{effectIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "SlideAnimation");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Update paragraph properties. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param dto Paragraph DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateSpecialSlideParagraph(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, paragraphIndex: number, dto: model.Paragraph, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling updateSpecialSlideParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateSpecialSlideParagraph.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling updateSpecialSlideParagraph.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateSpecialSlideParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling updateSpecialSlideParagraph.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling updateSpecialSlideParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Update portion properties. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param dto Portion DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateSpecialSlidePortion(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, paragraphIndex: number, portionIndex: number, dto: model.Portion, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling updateSpecialSlidePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateSpecialSlidePortion.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling updateSpecialSlidePortion.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateSpecialSlidePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling updateSpecialSlidePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling updateSpecialSlidePortion.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling updateSpecialSlidePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Update shape properties. 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param shapeIndex Shape index.
     * @param dto Shape DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateSpecialSlideShape(name: string, slideIndex: number, slideType: model.SpecialSlideType, shapeIndex: number, dto: model.ShapeBase, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling updateSpecialSlideShape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateSpecialSlideShape.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling updateSpecialSlideShape.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateSpecialSlideShape.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling updateSpecialSlideShape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Update shape properties (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param dto Shape DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateSpecialSlideSubshape(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, dto: model.ShapeBase, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.ShapeBase}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling updateSpecialSlideSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateSpecialSlideSubshape.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling updateSpecialSlideSubshape.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateSpecialSlideSubshape.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling updateSpecialSlideSubshape.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Update paragraph properties (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param dto Paragraph DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateSpecialSlideSubshapeParagraph(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, paragraphIndex: number, dto: model.Paragraph, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Paragraph}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling updateSpecialSlideSubshapeParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateSpecialSlideSubshapeParagraph.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling updateSpecialSlideSubshapeParagraph.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateSpecialSlideSubshapeParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling updateSpecialSlideSubshapeParagraph.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling updateSpecialSlideSubshapeParagraph.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Update portion properties (for smart art and group shapes). 
     * @param name Document name.
     * @param slideIndex Parent slide index.
     * @param slideType Slide type (master, layout or notes).
     * @param path Shape path.
     * @param shapeIndex Shape index.
     * @param paragraphIndex Paragraph index.
     * @param portionIndex Portion index.
     * @param dto Portion DTO.
     * @param password Document password.
     * @param folder Document folder.
     * @param storage Document storage.
     */
    public async updateSpecialSlideSubshapePortion(name: string, slideIndex: number, slideType: model.SpecialSlideType, path: string = null, shapeIndex: number, paragraphIndex: number, portionIndex: number, dto: model.Portion, password: string = null, folder: string = null, storage: string = null): Promise<{response: http.ClientResponse, body: model.Portion}> {
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('The required parameter "name" was null or undefined when calling updateSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'slideType' is not null or undefined
        if (slideType === null || slideType === undefined) {
            throw new Error('The required parameter "slideType" was null or undefined when calling updateSpecialSlideSubshapePortion.');
        }
        // verify value of enum parameter 'slideType' is valid
        if (!Object.keys(model.SpecialSlideType).filter(i => model.SpecialSlideType[i].toLowerCase() == slideType.toString().toLowerCase()).length) {
            throw new Error('Invalid value for slideType: ' + slideType + '. Must be one of the following: ' + Object.keys(model.SpecialSlideType).map(key => model.SpecialSlideType[key]).join());
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling updateSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling updateSpecialSlideSubshapePortion.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling updateSpecialSlideSubshapePortion.');
        }
        let localVarPath = this.configuration.getApiBaseUrl() + "/slides/{name}/slides/{slideIndex}/{slideType}/shapes/{path}/{shapeIndex}/paragraphs/{paragraphIndex}/portions/{portionIndex}";
        localVarPath = addPathParameterToUrl(localVarPath, "name", ObjectSerializer.toString(name));
        localVarPath = addPathParameterToUrl(localVarPath, "slideIndex", ObjectSerializer.toString(slideIndex));
        localVarPath = addPathParameterToUrl(localVarPath, "slideType", ObjectSerializer.toString(slideType));
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateSubshape.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateSubshape.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateSubshape.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling updateSubshape.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "ShapeBase");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateSubshapeParagraph.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateSubshapeParagraph.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateSubshapeParagraph.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling updateSubshapeParagraph.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling updateSubshapeParagraph.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Paragraph");
        return Promise.resolve({ body: result, response });
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
            throw new Error('The required parameter "name" was null or undefined when calling updateSubshapePortion.');
        }
        // verify required parameter 'slideIndex' is not null or undefined
        if (slideIndex === null || slideIndex === undefined) {
            throw new Error('The required parameter "slideIndex" was null or undefined when calling updateSubshapePortion.');
        }
        // verify required parameter 'shapeIndex' is not null or undefined
        if (shapeIndex === null || shapeIndex === undefined) {
            throw new Error('The required parameter "shapeIndex" was null or undefined when calling updateSubshapePortion.');
        }
        // verify required parameter 'paragraphIndex' is not null or undefined
        if (paragraphIndex === null || paragraphIndex === undefined) {
            throw new Error('The required parameter "paragraphIndex" was null or undefined when calling updateSubshapePortion.');
        }
        // verify required parameter 'portionIndex' is not null or undefined
        if (portionIndex === null || portionIndex === undefined) {
            throw new Error('The required parameter "portionIndex" was null or undefined when calling updateSubshapePortion.');
        }
        // verify required parameter 'dto' is not null or undefined
        if (dto === null || dto === undefined) {
            throw new Error('The required parameter "dto" was null or undefined when calling updateSubshapePortion.');
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
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = ObjectSerializer.deserialize(response.body, "Portion");
        return Promise.resolve({ body: result, response });
    }

    /**
     * Upload file 
     * @param path Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     * @param file File to upload
     * @param storageName Storage name
     */
    public async uploadFile(path: string = null, file: Readable, storageName: string = null): Promise<{response: http.ClientResponse, body: model.FilesUploadResult}> {
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
