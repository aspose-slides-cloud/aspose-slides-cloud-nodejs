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

import "mocha";
import * as model from "../sdk/model";
import * as requests from "../sdk/requests";
import * as sdkApi from "../sdk/api";
import { TestInitializer } from "./testInitializer";

var assert = require('assert');

class TestUtils {

    public static getCopyFileRequest(): requests.CopyFileRequest {
        const request = new requests.CopyFileRequest();
        request.srcPath = <string>TestInitializer.getValue("copyFile", "srcPath");
        request.destPath = <string>TestInitializer.getValue("copyFile", "destPath");
        request.srcStorageName = <string>TestInitializer.getValue("copyFile", "srcStorageName");
        request.destStorageName = <string>TestInitializer.getValue("copyFile", "destStorageName");
        request.versionId = <string>TestInitializer.getValue("copyFile", "versionId");
        return request;
    }

    public static getCopyFolderRequest(): requests.CopyFolderRequest {
        const request = new requests.CopyFolderRequest();
        request.srcPath = <string>TestInitializer.getValue("copyFolder", "srcPath");
        request.destPath = <string>TestInitializer.getValue("copyFolder", "destPath");
        request.srcStorageName = <string>TestInitializer.getValue("copyFolder", "srcStorageName");
        request.destStorageName = <string>TestInitializer.getValue("copyFolder", "destStorageName");
        return request;
    }

    public static getCreateFolderRequest(): requests.CreateFolderRequest {
        const request = new requests.CreateFolderRequest();
        request.path = <string>TestInitializer.getValue("createFolder", "path");
        request.storageName = <string>TestInitializer.getValue("createFolder", "storageName");
        return request;
    }

    public static getDeleteFileRequest(): requests.DeleteFileRequest {
        const request = new requests.DeleteFileRequest();
        request.path = <string>TestInitializer.getValue("deleteFile", "path");
        request.storageName = <string>TestInitializer.getValue("deleteFile", "storageName");
        request.versionId = <string>TestInitializer.getValue("deleteFile", "versionId");
        return request;
    }

    public static getDeleteFolderRequest(): requests.DeleteFolderRequest {
        const request = new requests.DeleteFolderRequest();
        request.path = <string>TestInitializer.getValue("deleteFolder", "path");
        request.storageName = <string>TestInitializer.getValue("deleteFolder", "storageName");
        request.recursive = <boolean>TestInitializer.getValue("deleteFolder", "recursive");
        return request;
    }

    public static getDeleteNotesSlideRequest(): requests.DeleteNotesSlideRequest {
        const request = new requests.DeleteNotesSlideRequest();
        request.name = <string>TestInitializer.getValue("deleteNotesSlide", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteNotesSlide", "slideIndex");
        request.password = <string>TestInitializer.getValue("deleteNotesSlide", "password");
        request.folder = <string>TestInitializer.getValue("deleteNotesSlide", "folder");
        request.storage = <string>TestInitializer.getValue("deleteNotesSlide", "storage");
        return request;
    }

    public static getDeleteNotesSlideParagraphRequest(): requests.DeleteNotesSlideParagraphRequest {
        const request = new requests.DeleteNotesSlideParagraphRequest();
        request.name = <string>TestInitializer.getValue("deleteNotesSlideParagraph", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteNotesSlideParagraph", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteNotesSlideParagraph", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deleteNotesSlideParagraph", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("deleteNotesSlideParagraph", "paragraphIndex");
        request.password = <string>TestInitializer.getValue("deleteNotesSlideParagraph", "password");
        request.folder = <string>TestInitializer.getValue("deleteNotesSlideParagraph", "folder");
        request.storage = <string>TestInitializer.getValue("deleteNotesSlideParagraph", "storage");
        return request;
    }

    public static getDeleteNotesSlideParagraphsRequest(): requests.DeleteNotesSlideParagraphsRequest {
        const request = new requests.DeleteNotesSlideParagraphsRequest();
        request.name = <string>TestInitializer.getValue("deleteNotesSlideParagraphs", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteNotesSlideParagraphs", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteNotesSlideParagraphs", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deleteNotesSlideParagraphs", "shapeIndex");
        request.paragraphs = <Array<number>>TestInitializer.getValue("deleteNotesSlideParagraphs", "paragraphs");
        request.password = <string>TestInitializer.getValue("deleteNotesSlideParagraphs", "password");
        request.folder = <string>TestInitializer.getValue("deleteNotesSlideParagraphs", "folder");
        request.storage = <string>TestInitializer.getValue("deleteNotesSlideParagraphs", "storage");
        return request;
    }

    public static getDeleteNotesSlidePortionRequest(): requests.DeleteNotesSlidePortionRequest {
        const request = new requests.DeleteNotesSlidePortionRequest();
        request.name = <string>TestInitializer.getValue("deleteNotesSlidePortion", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteNotesSlidePortion", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteNotesSlidePortion", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deleteNotesSlidePortion", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("deleteNotesSlidePortion", "paragraphIndex");
        request.portionIndex = <number>TestInitializer.getValue("deleteNotesSlidePortion", "portionIndex");
        request.password = <string>TestInitializer.getValue("deleteNotesSlidePortion", "password");
        request.folder = <string>TestInitializer.getValue("deleteNotesSlidePortion", "folder");
        request.storage = <string>TestInitializer.getValue("deleteNotesSlidePortion", "storage");
        return request;
    }

    public static getDeleteNotesSlidePortionsRequest(): requests.DeleteNotesSlidePortionsRequest {
        const request = new requests.DeleteNotesSlidePortionsRequest();
        request.name = <string>TestInitializer.getValue("deleteNotesSlidePortions", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteNotesSlidePortions", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteNotesSlidePortions", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deleteNotesSlidePortions", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("deleteNotesSlidePortions", "paragraphIndex");
        request.portions = <Array<number>>TestInitializer.getValue("deleteNotesSlidePortions", "portions");
        request.password = <string>TestInitializer.getValue("deleteNotesSlidePortions", "password");
        request.folder = <string>TestInitializer.getValue("deleteNotesSlidePortions", "folder");
        request.storage = <string>TestInitializer.getValue("deleteNotesSlidePortions", "storage");
        return request;
    }

    public static getDeleteNotesSlideShapeRequest(): requests.DeleteNotesSlideShapeRequest {
        const request = new requests.DeleteNotesSlideShapeRequest();
        request.name = <string>TestInitializer.getValue("deleteNotesSlideShape", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteNotesSlideShape", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteNotesSlideShape", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deleteNotesSlideShape", "shapeIndex");
        request.password = <string>TestInitializer.getValue("deleteNotesSlideShape", "password");
        request.folder = <string>TestInitializer.getValue("deleteNotesSlideShape", "folder");
        request.storage = <string>TestInitializer.getValue("deleteNotesSlideShape", "storage");
        return request;
    }

    public static getDeleteNotesSlideShapesRequest(): requests.DeleteNotesSlideShapesRequest {
        const request = new requests.DeleteNotesSlideShapesRequest();
        request.name = <string>TestInitializer.getValue("deleteNotesSlideShapes", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteNotesSlideShapes", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteNotesSlideShapes", "path");
        request.shapes = <Array<number>>TestInitializer.getValue("deleteNotesSlideShapes", "shapes");
        request.password = <string>TestInitializer.getValue("deleteNotesSlideShapes", "password");
        request.folder = <string>TestInitializer.getValue("deleteNotesSlideShapes", "folder");
        request.storage = <string>TestInitializer.getValue("deleteNotesSlideShapes", "storage");
        return request;
    }

    public static getDeleteParagraphRequest(): requests.DeleteParagraphRequest {
        const request = new requests.DeleteParagraphRequest();
        request.name = <string>TestInitializer.getValue("deleteParagraph", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteParagraph", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteParagraph", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deleteParagraph", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("deleteParagraph", "paragraphIndex");
        request.password = <string>TestInitializer.getValue("deleteParagraph", "password");
        request.folder = <string>TestInitializer.getValue("deleteParagraph", "folder");
        request.storage = <string>TestInitializer.getValue("deleteParagraph", "storage");
        return request;
    }

    public static getDeleteParagraphsRequest(): requests.DeleteParagraphsRequest {
        const request = new requests.DeleteParagraphsRequest();
        request.name = <string>TestInitializer.getValue("deleteParagraphs", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteParagraphs", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteParagraphs", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deleteParagraphs", "shapeIndex");
        request.paragraphs = <Array<number>>TestInitializer.getValue("deleteParagraphs", "paragraphs");
        request.password = <string>TestInitializer.getValue("deleteParagraphs", "password");
        request.folder = <string>TestInitializer.getValue("deleteParagraphs", "folder");
        request.storage = <string>TestInitializer.getValue("deleteParagraphs", "storage");
        return request;
    }

    public static getDeletePortionRequest(): requests.DeletePortionRequest {
        const request = new requests.DeletePortionRequest();
        request.name = <string>TestInitializer.getValue("deletePortion", "name");
        request.slideIndex = <number>TestInitializer.getValue("deletePortion", "slideIndex");
        request.path = <string>TestInitializer.getValue("deletePortion", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deletePortion", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("deletePortion", "paragraphIndex");
        request.portionIndex = <number>TestInitializer.getValue("deletePortion", "portionIndex");
        request.password = <string>TestInitializer.getValue("deletePortion", "password");
        request.folder = <string>TestInitializer.getValue("deletePortion", "folder");
        request.storage = <string>TestInitializer.getValue("deletePortion", "storage");
        return request;
    }

    public static getDeletePortionsRequest(): requests.DeletePortionsRequest {
        const request = new requests.DeletePortionsRequest();
        request.name = <string>TestInitializer.getValue("deletePortions", "name");
        request.slideIndex = <number>TestInitializer.getValue("deletePortions", "slideIndex");
        request.path = <string>TestInitializer.getValue("deletePortions", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deletePortions", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("deletePortions", "paragraphIndex");
        request.portions = <Array<number>>TestInitializer.getValue("deletePortions", "portions");
        request.password = <string>TestInitializer.getValue("deletePortions", "password");
        request.folder = <string>TestInitializer.getValue("deletePortions", "folder");
        request.storage = <string>TestInitializer.getValue("deletePortions", "storage");
        return request;
    }

    public static getDeleteSlideAnimationRequest(): requests.DeleteSlideAnimationRequest {
        const request = new requests.DeleteSlideAnimationRequest();
        request.name = <string>TestInitializer.getValue("deleteSlideAnimation", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlideAnimation", "slideIndex");
        request.password = <string>TestInitializer.getValue("deleteSlideAnimation", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlideAnimation", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlideAnimation", "storage");
        return request;
    }

    public static getDeleteSlideAnimationEffectRequest(): requests.DeleteSlideAnimationEffectRequest {
        const request = new requests.DeleteSlideAnimationEffectRequest();
        request.name = <string>TestInitializer.getValue("deleteSlideAnimationEffect", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlideAnimationEffect", "slideIndex");
        request.effectIndex = <number>TestInitializer.getValue("deleteSlideAnimationEffect", "effectIndex");
        request.password = <string>TestInitializer.getValue("deleteSlideAnimationEffect", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlideAnimationEffect", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlideAnimationEffect", "storage");
        return request;
    }

    public static getDeleteSlideAnimationInteractiveSequenceRequest(): requests.DeleteSlideAnimationInteractiveSequenceRequest {
        const request = new requests.DeleteSlideAnimationInteractiveSequenceRequest();
        request.name = <string>TestInitializer.getValue("deleteSlideAnimationInteractiveSequence", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlideAnimationInteractiveSequence", "slideIndex");
        request.sequenceIndex = <number>TestInitializer.getValue("deleteSlideAnimationInteractiveSequence", "sequenceIndex");
        request.password = <string>TestInitializer.getValue("deleteSlideAnimationInteractiveSequence", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlideAnimationInteractiveSequence", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlideAnimationInteractiveSequence", "storage");
        return request;
    }

    public static getDeleteSlideAnimationInteractiveSequenceEffectRequest(): requests.DeleteSlideAnimationInteractiveSequenceEffectRequest {
        const request = new requests.DeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.name = <string>TestInitializer.getValue("deleteSlideAnimationInteractiveSequenceEffect", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlideAnimationInteractiveSequenceEffect", "slideIndex");
        request.sequenceIndex = <number>TestInitializer.getValue("deleteSlideAnimationInteractiveSequenceEffect", "sequenceIndex");
        request.effectIndex = <number>TestInitializer.getValue("deleteSlideAnimationInteractiveSequenceEffect", "effectIndex");
        request.password = <string>TestInitializer.getValue("deleteSlideAnimationInteractiveSequenceEffect", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlideAnimationInteractiveSequenceEffect", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlideAnimationInteractiveSequenceEffect", "storage");
        return request;
    }

    public static getDeleteSlideAnimationInteractiveSequencesRequest(): requests.DeleteSlideAnimationInteractiveSequencesRequest {
        const request = new requests.DeleteSlideAnimationInteractiveSequencesRequest();
        request.name = <string>TestInitializer.getValue("deleteSlideAnimationInteractiveSequences", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlideAnimationInteractiveSequences", "slideIndex");
        request.password = <string>TestInitializer.getValue("deleteSlideAnimationInteractiveSequences", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlideAnimationInteractiveSequences", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlideAnimationInteractiveSequences", "storage");
        return request;
    }

    public static getDeleteSlideAnimationMainSequenceRequest(): requests.DeleteSlideAnimationMainSequenceRequest {
        const request = new requests.DeleteSlideAnimationMainSequenceRequest();
        request.name = <string>TestInitializer.getValue("deleteSlideAnimationMainSequence", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlideAnimationMainSequence", "slideIndex");
        request.password = <string>TestInitializer.getValue("deleteSlideAnimationMainSequence", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlideAnimationMainSequence", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlideAnimationMainSequence", "storage");
        return request;
    }

    public static getDeleteSlideByIndexRequest(): requests.DeleteSlideByIndexRequest {
        const request = new requests.DeleteSlideByIndexRequest();
        request.name = <string>TestInitializer.getValue("deleteSlideByIndex", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlideByIndex", "slideIndex");
        request.password = <string>TestInitializer.getValue("deleteSlideByIndex", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlideByIndex", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlideByIndex", "storage");
        return request;
    }

    public static getDeleteSlideShapeRequest(): requests.DeleteSlideShapeRequest {
        const request = new requests.DeleteSlideShapeRequest();
        request.name = <string>TestInitializer.getValue("deleteSlideShape", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlideShape", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteSlideShape", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deleteSlideShape", "shapeIndex");
        request.password = <string>TestInitializer.getValue("deleteSlideShape", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlideShape", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlideShape", "storage");
        return request;
    }

    public static getDeleteSlideShapesRequest(): requests.DeleteSlideShapesRequest {
        const request = new requests.DeleteSlideShapesRequest();
        request.name = <string>TestInitializer.getValue("deleteSlideShapes", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlideShapes", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteSlideShapes", "path");
        request.shapes = <Array<number>>TestInitializer.getValue("deleteSlideShapes", "shapes");
        request.password = <string>TestInitializer.getValue("deleteSlideShapes", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlideShapes", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlideShapes", "storage");
        return request;
    }

    public static getDeleteSlidesCleanSlidesListRequest(): requests.DeleteSlidesCleanSlidesListRequest {
        const request = new requests.DeleteSlidesCleanSlidesListRequest();
        request.name = <string>TestInitializer.getValue("deleteSlidesCleanSlidesList", "name");
        request.slides = <Array<number>>TestInitializer.getValue("deleteSlidesCleanSlidesList", "slides");
        request.password = <string>TestInitializer.getValue("deleteSlidesCleanSlidesList", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlidesCleanSlidesList", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlidesCleanSlidesList", "storage");
        return request;
    }

    public static getDeleteSlidesDocumentPropertiesRequest(): requests.DeleteSlidesDocumentPropertiesRequest {
        const request = new requests.DeleteSlidesDocumentPropertiesRequest();
        request.name = <string>TestInitializer.getValue("deleteSlidesDocumentProperties", "name");
        request.password = <string>TestInitializer.getValue("deleteSlidesDocumentProperties", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlidesDocumentProperties", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlidesDocumentProperties", "storage");
        return request;
    }

    public static getDeleteSlidesDocumentPropertyRequest(): requests.DeleteSlidesDocumentPropertyRequest {
        const request = new requests.DeleteSlidesDocumentPropertyRequest();
        request.name = <string>TestInitializer.getValue("deleteSlidesDocumentProperty", "name");
        request.propertyName = <string>TestInitializer.getValue("deleteSlidesDocumentProperty", "propertyName");
        request.password = <string>TestInitializer.getValue("deleteSlidesDocumentProperty", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlidesDocumentProperty", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlidesDocumentProperty", "storage");
        return request;
    }

    public static getDeleteSlidesSlideBackgroundRequest(): requests.DeleteSlidesSlideBackgroundRequest {
        const request = new requests.DeleteSlidesSlideBackgroundRequest();
        request.name = <string>TestInitializer.getValue("deleteSlidesSlideBackground", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlidesSlideBackground", "slideIndex");
        request.password = <string>TestInitializer.getValue("deleteSlidesSlideBackground", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlidesSlideBackground", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlidesSlideBackground", "storage");
        return request;
    }

    public static getDownloadFileRequest(): requests.DownloadFileRequest {
        const request = new requests.DownloadFileRequest();
        request.path = <string>TestInitializer.getValue("downloadFile", "path");
        request.storageName = <string>TestInitializer.getValue("downloadFile", "storageName");
        request.versionId = <string>TestInitializer.getValue("downloadFile", "versionId");
        return request;
    }

    public static getGetDiscUsageRequest(): requests.GetDiscUsageRequest {
        const request = new requests.GetDiscUsageRequest();
        request.storageName = <string>TestInitializer.getValue("getDiscUsage", "storageName");
        return request;
    }

    public static getGetFileVersionsRequest(): requests.GetFileVersionsRequest {
        const request = new requests.GetFileVersionsRequest();
        request.path = <string>TestInitializer.getValue("getFileVersions", "path");
        request.storageName = <string>TestInitializer.getValue("getFileVersions", "storageName");
        return request;
    }

    public static getGetFilesListRequest(): requests.GetFilesListRequest {
        const request = new requests.GetFilesListRequest();
        request.path = <string>TestInitializer.getValue("getFilesList", "path");
        request.storageName = <string>TestInitializer.getValue("getFilesList", "storageName");
        return request;
    }

    public static getGetLayoutSlideRequest(): requests.GetLayoutSlideRequest {
        const request = new requests.GetLayoutSlideRequest();
        request.name = <string>TestInitializer.getValue("getLayoutSlide", "name");
        request.slideIndex = <number>TestInitializer.getValue("getLayoutSlide", "slideIndex");
        request.password = <string>TestInitializer.getValue("getLayoutSlide", "password");
        request.folder = <string>TestInitializer.getValue("getLayoutSlide", "folder");
        request.storage = <string>TestInitializer.getValue("getLayoutSlide", "storage");
        return request;
    }

    public static getGetLayoutSlidesListRequest(): requests.GetLayoutSlidesListRequest {
        const request = new requests.GetLayoutSlidesListRequest();
        request.name = <string>TestInitializer.getValue("getLayoutSlidesList", "name");
        request.password = <string>TestInitializer.getValue("getLayoutSlidesList", "password");
        request.folder = <string>TestInitializer.getValue("getLayoutSlidesList", "folder");
        request.storage = <string>TestInitializer.getValue("getLayoutSlidesList", "storage");
        return request;
    }

    public static getGetMasterSlideRequest(): requests.GetMasterSlideRequest {
        const request = new requests.GetMasterSlideRequest();
        request.name = <string>TestInitializer.getValue("getMasterSlide", "name");
        request.slideIndex = <number>TestInitializer.getValue("getMasterSlide", "slideIndex");
        request.password = <string>TestInitializer.getValue("getMasterSlide", "password");
        request.folder = <string>TestInitializer.getValue("getMasterSlide", "folder");
        request.storage = <string>TestInitializer.getValue("getMasterSlide", "storage");
        return request;
    }

    public static getGetMasterSlidesListRequest(): requests.GetMasterSlidesListRequest {
        const request = new requests.GetMasterSlidesListRequest();
        request.name = <string>TestInitializer.getValue("getMasterSlidesList", "name");
        request.password = <string>TestInitializer.getValue("getMasterSlidesList", "password");
        request.folder = <string>TestInitializer.getValue("getMasterSlidesList", "folder");
        request.storage = <string>TestInitializer.getValue("getMasterSlidesList", "storage");
        return request;
    }

    public static getGetNotesSlideRequest(): requests.GetNotesSlideRequest {
        const request = new requests.GetNotesSlideRequest();
        request.name = <string>TestInitializer.getValue("getNotesSlide", "name");
        request.slideIndex = <number>TestInitializer.getValue("getNotesSlide", "slideIndex");
        request.password = <string>TestInitializer.getValue("getNotesSlide", "password");
        request.folder = <string>TestInitializer.getValue("getNotesSlide", "folder");
        request.storage = <string>TestInitializer.getValue("getNotesSlide", "storage");
        return request;
    }

    public static getGetNotesSlideShapeRequest(): requests.GetNotesSlideShapeRequest {
        const request = new requests.GetNotesSlideShapeRequest();
        request.name = <string>TestInitializer.getValue("getNotesSlideShape", "name");
        request.slideIndex = <number>TestInitializer.getValue("getNotesSlideShape", "slideIndex");
        request.path = <string>TestInitializer.getValue("getNotesSlideShape", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getNotesSlideShape", "shapeIndex");
        request.password = <string>TestInitializer.getValue("getNotesSlideShape", "password");
        request.folder = <string>TestInitializer.getValue("getNotesSlideShape", "folder");
        request.storage = <string>TestInitializer.getValue("getNotesSlideShape", "storage");
        return request;
    }

    public static getGetNotesSlideShapeParagraphRequest(): requests.GetNotesSlideShapeParagraphRequest {
        const request = new requests.GetNotesSlideShapeParagraphRequest();
        request.name = <string>TestInitializer.getValue("getNotesSlideShapeParagraph", "name");
        request.slideIndex = <number>TestInitializer.getValue("getNotesSlideShapeParagraph", "slideIndex");
        request.path = <string>TestInitializer.getValue("getNotesSlideShapeParagraph", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getNotesSlideShapeParagraph", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("getNotesSlideShapeParagraph", "paragraphIndex");
        request.password = <string>TestInitializer.getValue("getNotesSlideShapeParagraph", "password");
        request.folder = <string>TestInitializer.getValue("getNotesSlideShapeParagraph", "folder");
        request.storage = <string>TestInitializer.getValue("getNotesSlideShapeParagraph", "storage");
        return request;
    }

    public static getGetNotesSlideShapeParagraphsRequest(): requests.GetNotesSlideShapeParagraphsRequest {
        const request = new requests.GetNotesSlideShapeParagraphsRequest();
        request.name = <string>TestInitializer.getValue("getNotesSlideShapeParagraphs", "name");
        request.slideIndex = <number>TestInitializer.getValue("getNotesSlideShapeParagraphs", "slideIndex");
        request.path = <string>TestInitializer.getValue("getNotesSlideShapeParagraphs", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getNotesSlideShapeParagraphs", "shapeIndex");
        request.password = <string>TestInitializer.getValue("getNotesSlideShapeParagraphs", "password");
        request.folder = <string>TestInitializer.getValue("getNotesSlideShapeParagraphs", "folder");
        request.storage = <string>TestInitializer.getValue("getNotesSlideShapeParagraphs", "storage");
        return request;
    }

    public static getGetNotesSlideShapePortionRequest(): requests.GetNotesSlideShapePortionRequest {
        const request = new requests.GetNotesSlideShapePortionRequest();
        request.name = <string>TestInitializer.getValue("getNotesSlideShapePortion", "name");
        request.slideIndex = <number>TestInitializer.getValue("getNotesSlideShapePortion", "slideIndex");
        request.path = <string>TestInitializer.getValue("getNotesSlideShapePortion", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getNotesSlideShapePortion", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("getNotesSlideShapePortion", "paragraphIndex");
        request.portionIndex = <number>TestInitializer.getValue("getNotesSlideShapePortion", "portionIndex");
        request.password = <string>TestInitializer.getValue("getNotesSlideShapePortion", "password");
        request.folder = <string>TestInitializer.getValue("getNotesSlideShapePortion", "folder");
        request.storage = <string>TestInitializer.getValue("getNotesSlideShapePortion", "storage");
        return request;
    }

    public static getGetNotesSlideShapePortionsRequest(): requests.GetNotesSlideShapePortionsRequest {
        const request = new requests.GetNotesSlideShapePortionsRequest();
        request.name = <string>TestInitializer.getValue("getNotesSlideShapePortions", "name");
        request.slideIndex = <number>TestInitializer.getValue("getNotesSlideShapePortions", "slideIndex");
        request.path = <string>TestInitializer.getValue("getNotesSlideShapePortions", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getNotesSlideShapePortions", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("getNotesSlideShapePortions", "paragraphIndex");
        request.password = <string>TestInitializer.getValue("getNotesSlideShapePortions", "password");
        request.folder = <string>TestInitializer.getValue("getNotesSlideShapePortions", "folder");
        request.storage = <string>TestInitializer.getValue("getNotesSlideShapePortions", "storage");
        return request;
    }

    public static getGetNotesSlideShapesRequest(): requests.GetNotesSlideShapesRequest {
        const request = new requests.GetNotesSlideShapesRequest();
        request.name = <string>TestInitializer.getValue("getNotesSlideShapes", "name");
        request.slideIndex = <number>TestInitializer.getValue("getNotesSlideShapes", "slideIndex");
        request.path = <string>TestInitializer.getValue("getNotesSlideShapes", "path");
        request.password = <string>TestInitializer.getValue("getNotesSlideShapes", "password");
        request.folder = <string>TestInitializer.getValue("getNotesSlideShapes", "folder");
        request.storage = <string>TestInitializer.getValue("getNotesSlideShapes", "storage");
        return request;
    }

    public static getGetNotesSlideWithFormatRequest(): requests.GetNotesSlideWithFormatRequest {
        const request = new requests.GetNotesSlideWithFormatRequest();
        request.name = <string>TestInitializer.getValue("getNotesSlideWithFormat", "name");
        request.slideIndex = <number>TestInitializer.getValue("getNotesSlideWithFormat", "slideIndex");
        request.format = <string>TestInitializer.getValue("getNotesSlideWithFormat", "format");
        request.width = <number>TestInitializer.getValue("getNotesSlideWithFormat", "width");
        request.height = <number>TestInitializer.getValue("getNotesSlideWithFormat", "height");
        request.password = <string>TestInitializer.getValue("getNotesSlideWithFormat", "password");
        request.folder = <string>TestInitializer.getValue("getNotesSlideWithFormat", "folder");
        request.storage = <string>TestInitializer.getValue("getNotesSlideWithFormat", "storage");
        request.fontsFolder = <string>TestInitializer.getValue("getNotesSlideWithFormat", "fontsFolder");
        return request;
    }

    public static getGetParagraphPortionRequest(): requests.GetParagraphPortionRequest {
        const request = new requests.GetParagraphPortionRequest();
        request.name = <string>TestInitializer.getValue("getParagraphPortion", "name");
        request.slideIndex = <number>TestInitializer.getValue("getParagraphPortion", "slideIndex");
        request.path = <string>TestInitializer.getValue("getParagraphPortion", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getParagraphPortion", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("getParagraphPortion", "paragraphIndex");
        request.portionIndex = <number>TestInitializer.getValue("getParagraphPortion", "portionIndex");
        request.password = <string>TestInitializer.getValue("getParagraphPortion", "password");
        request.folder = <string>TestInitializer.getValue("getParagraphPortion", "folder");
        request.storage = <string>TestInitializer.getValue("getParagraphPortion", "storage");
        return request;
    }

    public static getGetParagraphPortionsRequest(): requests.GetParagraphPortionsRequest {
        const request = new requests.GetParagraphPortionsRequest();
        request.name = <string>TestInitializer.getValue("getParagraphPortions", "name");
        request.slideIndex = <number>TestInitializer.getValue("getParagraphPortions", "slideIndex");
        request.path = <string>TestInitializer.getValue("getParagraphPortions", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getParagraphPortions", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("getParagraphPortions", "paragraphIndex");
        request.password = <string>TestInitializer.getValue("getParagraphPortions", "password");
        request.folder = <string>TestInitializer.getValue("getParagraphPortions", "folder");
        request.storage = <string>TestInitializer.getValue("getParagraphPortions", "storage");
        return request;
    }

    public static getGetSlideAnimationRequest(): requests.GetSlideAnimationRequest {
        const request = new requests.GetSlideAnimationRequest();
        request.name = <string>TestInitializer.getValue("getSlideAnimation", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlideAnimation", "slideIndex");
        request.shapeIndex = <number>TestInitializer.getValue("getSlideAnimation", "shapeIndex");
        request.password = <string>TestInitializer.getValue("getSlideAnimation", "password");
        request.folder = <string>TestInitializer.getValue("getSlideAnimation", "folder");
        request.storage = <string>TestInitializer.getValue("getSlideAnimation", "storage");
        return request;
    }

    public static getGetSlideShapeRequest(): requests.GetSlideShapeRequest {
        const request = new requests.GetSlideShapeRequest();
        request.name = <string>TestInitializer.getValue("getSlideShape", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlideShape", "slideIndex");
        request.path = <string>TestInitializer.getValue("getSlideShape", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getSlideShape", "shapeIndex");
        request.password = <string>TestInitializer.getValue("getSlideShape", "password");
        request.folder = <string>TestInitializer.getValue("getSlideShape", "folder");
        request.storage = <string>TestInitializer.getValue("getSlideShape", "storage");
        return request;
    }

    public static getGetSlideShapeParagraphRequest(): requests.GetSlideShapeParagraphRequest {
        const request = new requests.GetSlideShapeParagraphRequest();
        request.name = <string>TestInitializer.getValue("getSlideShapeParagraph", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlideShapeParagraph", "slideIndex");
        request.path = <string>TestInitializer.getValue("getSlideShapeParagraph", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getSlideShapeParagraph", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("getSlideShapeParagraph", "paragraphIndex");
        request.password = <string>TestInitializer.getValue("getSlideShapeParagraph", "password");
        request.folder = <string>TestInitializer.getValue("getSlideShapeParagraph", "folder");
        request.storage = <string>TestInitializer.getValue("getSlideShapeParagraph", "storage");
        return request;
    }

    public static getGetSlideShapeParagraphsRequest(): requests.GetSlideShapeParagraphsRequest {
        const request = new requests.GetSlideShapeParagraphsRequest();
        request.name = <string>TestInitializer.getValue("getSlideShapeParagraphs", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlideShapeParagraphs", "slideIndex");
        request.path = <string>TestInitializer.getValue("getSlideShapeParagraphs", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getSlideShapeParagraphs", "shapeIndex");
        request.password = <string>TestInitializer.getValue("getSlideShapeParagraphs", "password");
        request.folder = <string>TestInitializer.getValue("getSlideShapeParagraphs", "folder");
        request.storage = <string>TestInitializer.getValue("getSlideShapeParagraphs", "storage");
        return request;
    }

    public static getGetSlideShapesRequest(): requests.GetSlideShapesRequest {
        const request = new requests.GetSlideShapesRequest();
        request.name = <string>TestInitializer.getValue("getSlideShapes", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlideShapes", "slideIndex");
        request.path = <string>TestInitializer.getValue("getSlideShapes", "path");
        request.password = <string>TestInitializer.getValue("getSlideShapes", "password");
        request.folder = <string>TestInitializer.getValue("getSlideShapes", "folder");
        request.storage = <string>TestInitializer.getValue("getSlideShapes", "storage");
        return request;
    }

    public static getGetSlidesApiInfoRequest(): requests.GetSlidesApiInfoRequest {
        const request = new requests.GetSlidesApiInfoRequest();
        return request;
    }

    public static getGetSlidesDocumentRequest(): requests.GetSlidesDocumentRequest {
        const request = new requests.GetSlidesDocumentRequest();
        request.name = <string>TestInitializer.getValue("getSlidesDocument", "name");
        request.password = <string>TestInitializer.getValue("getSlidesDocument", "password");
        request.storage = <string>TestInitializer.getValue("getSlidesDocument", "storage");
        request.folder = <string>TestInitializer.getValue("getSlidesDocument", "folder");
        return request;
    }

    public static getGetSlidesDocumentPropertiesRequest(): requests.GetSlidesDocumentPropertiesRequest {
        const request = new requests.GetSlidesDocumentPropertiesRequest();
        request.name = <string>TestInitializer.getValue("getSlidesDocumentProperties", "name");
        request.password = <string>TestInitializer.getValue("getSlidesDocumentProperties", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesDocumentProperties", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesDocumentProperties", "storage");
        return request;
    }

    public static getGetSlidesDocumentPropertyRequest(): requests.GetSlidesDocumentPropertyRequest {
        const request = new requests.GetSlidesDocumentPropertyRequest();
        request.name = <string>TestInitializer.getValue("getSlidesDocumentProperty", "name");
        request.propertyName = <string>TestInitializer.getValue("getSlidesDocumentProperty", "propertyName");
        request.password = <string>TestInitializer.getValue("getSlidesDocumentProperty", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesDocumentProperty", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesDocumentProperty", "storage");
        return request;
    }

    public static getGetSlidesImageWithDefaultFormatRequest(): requests.GetSlidesImageWithDefaultFormatRequest {
        const request = new requests.GetSlidesImageWithDefaultFormatRequest();
        request.name = <string>TestInitializer.getValue("getSlidesImageWithDefaultFormat", "name");
        request.index = <number>TestInitializer.getValue("getSlidesImageWithDefaultFormat", "index");
        request.password = <string>TestInitializer.getValue("getSlidesImageWithDefaultFormat", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesImageWithDefaultFormat", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesImageWithDefaultFormat", "storage");
        return request;
    }

    public static getGetSlidesImageWithFormatRequest(): requests.GetSlidesImageWithFormatRequest {
        const request = new requests.GetSlidesImageWithFormatRequest();
        request.name = <string>TestInitializer.getValue("getSlidesImageWithFormat", "name");
        request.index = <number>TestInitializer.getValue("getSlidesImageWithFormat", "index");
        request.format = <string>TestInitializer.getValue("getSlidesImageWithFormat", "format");
        request.password = <string>TestInitializer.getValue("getSlidesImageWithFormat", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesImageWithFormat", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesImageWithFormat", "storage");
        return request;
    }

    public static getGetSlidesImagesRequest(): requests.GetSlidesImagesRequest {
        const request = new requests.GetSlidesImagesRequest();
        request.name = <string>TestInitializer.getValue("getSlidesImages", "name");
        request.password = <string>TestInitializer.getValue("getSlidesImages", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesImages", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesImages", "storage");
        return request;
    }

    public static getGetSlidesPlaceholderRequest(): requests.GetSlidesPlaceholderRequest {
        const request = new requests.GetSlidesPlaceholderRequest();
        request.name = <string>TestInitializer.getValue("getSlidesPlaceholder", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlidesPlaceholder", "slideIndex");
        request.placeholderIndex = <number>TestInitializer.getValue("getSlidesPlaceholder", "placeholderIndex");
        request.password = <string>TestInitializer.getValue("getSlidesPlaceholder", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesPlaceholder", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesPlaceholder", "storage");
        return request;
    }

    public static getGetSlidesPlaceholdersRequest(): requests.GetSlidesPlaceholdersRequest {
        const request = new requests.GetSlidesPlaceholdersRequest();
        request.name = <string>TestInitializer.getValue("getSlidesPlaceholders", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlidesPlaceholders", "slideIndex");
        request.password = <string>TestInitializer.getValue("getSlidesPlaceholders", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesPlaceholders", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesPlaceholders", "storage");
        return request;
    }

    public static getGetSlidesPresentationTextItemsRequest(): requests.GetSlidesPresentationTextItemsRequest {
        const request = new requests.GetSlidesPresentationTextItemsRequest();
        request.name = <string>TestInitializer.getValue("getSlidesPresentationTextItems", "name");
        request.withEmpty = <boolean>TestInitializer.getValue("getSlidesPresentationTextItems", "withEmpty");
        request.password = <string>TestInitializer.getValue("getSlidesPresentationTextItems", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesPresentationTextItems", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesPresentationTextItems", "storage");
        return request;
    }

    public static getGetSlidesSlideRequest(): requests.GetSlidesSlideRequest {
        const request = new requests.GetSlidesSlideRequest();
        request.name = <string>TestInitializer.getValue("getSlidesSlide", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlidesSlide", "slideIndex");
        request.password = <string>TestInitializer.getValue("getSlidesSlide", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesSlide", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesSlide", "storage");
        return request;
    }

    public static getGetSlidesSlideBackgroundRequest(): requests.GetSlidesSlideBackgroundRequest {
        const request = new requests.GetSlidesSlideBackgroundRequest();
        request.name = <string>TestInitializer.getValue("getSlidesSlideBackground", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlidesSlideBackground", "slideIndex");
        request.password = <string>TestInitializer.getValue("getSlidesSlideBackground", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesSlideBackground", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesSlideBackground", "storage");
        return request;
    }

    public static getGetSlidesSlideCommentsRequest(): requests.GetSlidesSlideCommentsRequest {
        const request = new requests.GetSlidesSlideCommentsRequest();
        request.name = <string>TestInitializer.getValue("getSlidesSlideComments", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlidesSlideComments", "slideIndex");
        request.password = <string>TestInitializer.getValue("getSlidesSlideComments", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesSlideComments", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesSlideComments", "storage");
        return request;
    }

    public static getGetSlidesSlideImagesRequest(): requests.GetSlidesSlideImagesRequest {
        const request = new requests.GetSlidesSlideImagesRequest();
        request.name = <string>TestInitializer.getValue("getSlidesSlideImages", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlidesSlideImages", "slideIndex");
        request.password = <string>TestInitializer.getValue("getSlidesSlideImages", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesSlideImages", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesSlideImages", "storage");
        return request;
    }

    public static getGetSlidesSlideTextItemsRequest(): requests.GetSlidesSlideTextItemsRequest {
        const request = new requests.GetSlidesSlideTextItemsRequest();
        request.name = <string>TestInitializer.getValue("getSlidesSlideTextItems", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlidesSlideTextItems", "slideIndex");
        request.withEmpty = <boolean>TestInitializer.getValue("getSlidesSlideTextItems", "withEmpty");
        request.password = <string>TestInitializer.getValue("getSlidesSlideTextItems", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesSlideTextItems", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesSlideTextItems", "storage");
        return request;
    }

    public static getGetSlidesSlidesListRequest(): requests.GetSlidesSlidesListRequest {
        const request = new requests.GetSlidesSlidesListRequest();
        request.name = <string>TestInitializer.getValue("getSlidesSlidesList", "name");
        request.password = <string>TestInitializer.getValue("getSlidesSlidesList", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesSlidesList", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesSlidesList", "storage");
        return request;
    }

    public static getGetSlidesThemeRequest(): requests.GetSlidesThemeRequest {
        const request = new requests.GetSlidesThemeRequest();
        request.name = <string>TestInitializer.getValue("getSlidesTheme", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlidesTheme", "slideIndex");
        request.password = <string>TestInitializer.getValue("getSlidesTheme", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesTheme", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesTheme", "storage");
        return request;
    }

    public static getGetSlidesThemeColorSchemeRequest(): requests.GetSlidesThemeColorSchemeRequest {
        const request = new requests.GetSlidesThemeColorSchemeRequest();
        request.name = <string>TestInitializer.getValue("getSlidesThemeColorScheme", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlidesThemeColorScheme", "slideIndex");
        request.password = <string>TestInitializer.getValue("getSlidesThemeColorScheme", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesThemeColorScheme", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesThemeColorScheme", "storage");
        return request;
    }

    public static getGetSlidesThemeFontSchemeRequest(): requests.GetSlidesThemeFontSchemeRequest {
        const request = new requests.GetSlidesThemeFontSchemeRequest();
        request.name = <string>TestInitializer.getValue("getSlidesThemeFontScheme", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlidesThemeFontScheme", "slideIndex");
        request.password = <string>TestInitializer.getValue("getSlidesThemeFontScheme", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesThemeFontScheme", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesThemeFontScheme", "storage");
        return request;
    }

    public static getGetSlidesThemeFormatSchemeRequest(): requests.GetSlidesThemeFormatSchemeRequest {
        const request = new requests.GetSlidesThemeFormatSchemeRequest();
        request.name = <string>TestInitializer.getValue("getSlidesThemeFormatScheme", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlidesThemeFormatScheme", "slideIndex");
        request.password = <string>TestInitializer.getValue("getSlidesThemeFormatScheme", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesThemeFormatScheme", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesThemeFormatScheme", "storage");
        return request;
    }

    public static getMoveFileRequest(): requests.MoveFileRequest {
        const request = new requests.MoveFileRequest();
        request.srcPath = <string>TestInitializer.getValue("moveFile", "srcPath");
        request.destPath = <string>TestInitializer.getValue("moveFile", "destPath");
        request.srcStorageName = <string>TestInitializer.getValue("moveFile", "srcStorageName");
        request.destStorageName = <string>TestInitializer.getValue("moveFile", "destStorageName");
        request.versionId = <string>TestInitializer.getValue("moveFile", "versionId");
        return request;
    }

    public static getMoveFolderRequest(): requests.MoveFolderRequest {
        const request = new requests.MoveFolderRequest();
        request.srcPath = <string>TestInitializer.getValue("moveFolder", "srcPath");
        request.destPath = <string>TestInitializer.getValue("moveFolder", "destPath");
        request.srcStorageName = <string>TestInitializer.getValue("moveFolder", "srcStorageName");
        request.destStorageName = <string>TestInitializer.getValue("moveFolder", "destStorageName");
        return request;
    }

    public static getObjectExistsRequest(): requests.ObjectExistsRequest {
        const request = new requests.ObjectExistsRequest();
        request.path = <string>TestInitializer.getValue("objectExists", "path");
        request.storageName = <string>TestInitializer.getValue("objectExists", "storageName");
        request.versionId = <string>TestInitializer.getValue("objectExists", "versionId");
        return request;
    }

    public static getPostAddNewParagraphRequest(): requests.PostAddNewParagraphRequest {
        const request = new requests.PostAddNewParagraphRequest();
        request.name = <string>TestInitializer.getValue("postAddNewParagraph", "name");
        request.slideIndex = <number>TestInitializer.getValue("postAddNewParagraph", "slideIndex");
        request.path = <string>TestInitializer.getValue("postAddNewParagraph", "path");
        request.shapeIndex = <number>TestInitializer.getValue("postAddNewParagraph", "shapeIndex");
        request.dto = <model.Paragraph>TestInitializer.getValue("postAddNewParagraph", "dto");
        request.password = <string>TestInitializer.getValue("postAddNewParagraph", "password");
        request.folder = <string>TestInitializer.getValue("postAddNewParagraph", "folder");
        request.storage = <string>TestInitializer.getValue("postAddNewParagraph", "storage");
        request.position = <number>TestInitializer.getValue("postAddNewParagraph", "position");
        return request;
    }

    public static getPostAddNewPortionRequest(): requests.PostAddNewPortionRequest {
        const request = new requests.PostAddNewPortionRequest();
        request.name = <string>TestInitializer.getValue("postAddNewPortion", "name");
        request.slideIndex = <number>TestInitializer.getValue("postAddNewPortion", "slideIndex");
        request.path = <string>TestInitializer.getValue("postAddNewPortion", "path");
        request.shapeIndex = <number>TestInitializer.getValue("postAddNewPortion", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("postAddNewPortion", "paragraphIndex");
        request.dto = <model.Portion>TestInitializer.getValue("postAddNewPortion", "dto");
        request.password = <string>TestInitializer.getValue("postAddNewPortion", "password");
        request.folder = <string>TestInitializer.getValue("postAddNewPortion", "folder");
        request.storage = <string>TestInitializer.getValue("postAddNewPortion", "storage");
        request.position = <number>TestInitializer.getValue("postAddNewPortion", "position");
        return request;
    }

    public static getPostAddNewShapeRequest(): requests.PostAddNewShapeRequest {
        const request = new requests.PostAddNewShapeRequest();
        request.name = <string>TestInitializer.getValue("postAddNewShape", "name");
        request.slideIndex = <number>TestInitializer.getValue("postAddNewShape", "slideIndex");
        request.path = <string>TestInitializer.getValue("postAddNewShape", "path");
        request.dto = <model.ShapeBase>TestInitializer.getValue("postAddNewShape", "dto");
        request.password = <string>TestInitializer.getValue("postAddNewShape", "password");
        request.folder = <string>TestInitializer.getValue("postAddNewShape", "folder");
        request.storage = <string>TestInitializer.getValue("postAddNewShape", "storage");
        request.shapeToClone = <number>TestInitializer.getValue("postAddNewShape", "shapeToClone");
        request.position = <number>TestInitializer.getValue("postAddNewShape", "position");
        return request;
    }

    public static getPostAddNotesSlideRequest(): requests.PostAddNotesSlideRequest {
        const request = new requests.PostAddNotesSlideRequest();
        request.name = <string>TestInitializer.getValue("postAddNotesSlide", "name");
        request.slideIndex = <number>TestInitializer.getValue("postAddNotesSlide", "slideIndex");
        request.dto = <model.NotesSlide>TestInitializer.getValue("postAddNotesSlide", "dto");
        request.password = <string>TestInitializer.getValue("postAddNotesSlide", "password");
        request.folder = <string>TestInitializer.getValue("postAddNotesSlide", "folder");
        request.storage = <string>TestInitializer.getValue("postAddNotesSlide", "storage");
        return request;
    }

    public static getPostCopyLayoutSlideFromSourcePresentationRequest(): requests.PostCopyLayoutSlideFromSourcePresentationRequest {
        const request = new requests.PostCopyLayoutSlideFromSourcePresentationRequest();
        request.name = <string>TestInitializer.getValue("postCopyLayoutSlideFromSourcePresentation", "name");
        request.cloneFrom = <string>TestInitializer.getValue("postCopyLayoutSlideFromSourcePresentation", "cloneFrom");
        request.cloneFromPosition = <number>TestInitializer.getValue("postCopyLayoutSlideFromSourcePresentation", "cloneFromPosition");
        request.cloneFromPassword = <string>TestInitializer.getValue("postCopyLayoutSlideFromSourcePresentation", "cloneFromPassword");
        request.cloneFromStorage = <string>TestInitializer.getValue("postCopyLayoutSlideFromSourcePresentation", "cloneFromStorage");
        request.password = <string>TestInitializer.getValue("postCopyLayoutSlideFromSourcePresentation", "password");
        request.folder = <string>TestInitializer.getValue("postCopyLayoutSlideFromSourcePresentation", "folder");
        request.storage = <string>TestInitializer.getValue("postCopyLayoutSlideFromSourcePresentation", "storage");
        return request;
    }

    public static getPostCopyMasterSlideFromSourcePresentationRequest(): requests.PostCopyMasterSlideFromSourcePresentationRequest {
        const request = new requests.PostCopyMasterSlideFromSourcePresentationRequest();
        request.name = <string>TestInitializer.getValue("postCopyMasterSlideFromSourcePresentation", "name");
        request.cloneFrom = <string>TestInitializer.getValue("postCopyMasterSlideFromSourcePresentation", "cloneFrom");
        request.cloneFromPosition = <number>TestInitializer.getValue("postCopyMasterSlideFromSourcePresentation", "cloneFromPosition");
        request.cloneFromPassword = <string>TestInitializer.getValue("postCopyMasterSlideFromSourcePresentation", "cloneFromPassword");
        request.cloneFromStorage = <string>TestInitializer.getValue("postCopyMasterSlideFromSourcePresentation", "cloneFromStorage");
        request.applyToAll = <boolean>TestInitializer.getValue("postCopyMasterSlideFromSourcePresentation", "applyToAll");
        request.password = <string>TestInitializer.getValue("postCopyMasterSlideFromSourcePresentation", "password");
        request.folder = <string>TestInitializer.getValue("postCopyMasterSlideFromSourcePresentation", "folder");
        request.storage = <string>TestInitializer.getValue("postCopyMasterSlideFromSourcePresentation", "storage");
        return request;
    }

    public static getPostNotesSlideAddNewParagraphRequest(): requests.PostNotesSlideAddNewParagraphRequest {
        const request = new requests.PostNotesSlideAddNewParagraphRequest();
        request.name = <string>TestInitializer.getValue("postNotesSlideAddNewParagraph", "name");
        request.slideIndex = <number>TestInitializer.getValue("postNotesSlideAddNewParagraph", "slideIndex");
        request.path = <string>TestInitializer.getValue("postNotesSlideAddNewParagraph", "path");
        request.shapeIndex = <number>TestInitializer.getValue("postNotesSlideAddNewParagraph", "shapeIndex");
        request.dto = <model.Paragraph>TestInitializer.getValue("postNotesSlideAddNewParagraph", "dto");
        request.password = <string>TestInitializer.getValue("postNotesSlideAddNewParagraph", "password");
        request.folder = <string>TestInitializer.getValue("postNotesSlideAddNewParagraph", "folder");
        request.storage = <string>TestInitializer.getValue("postNotesSlideAddNewParagraph", "storage");
        request.position = <number>TestInitializer.getValue("postNotesSlideAddNewParagraph", "position");
        return request;
    }

    public static getPostNotesSlideAddNewPortionRequest(): requests.PostNotesSlideAddNewPortionRequest {
        const request = new requests.PostNotesSlideAddNewPortionRequest();
        request.name = <string>TestInitializer.getValue("postNotesSlideAddNewPortion", "name");
        request.slideIndex = <number>TestInitializer.getValue("postNotesSlideAddNewPortion", "slideIndex");
        request.path = <string>TestInitializer.getValue("postNotesSlideAddNewPortion", "path");
        request.shapeIndex = <number>TestInitializer.getValue("postNotesSlideAddNewPortion", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("postNotesSlideAddNewPortion", "paragraphIndex");
        request.dto = <model.Portion>TestInitializer.getValue("postNotesSlideAddNewPortion", "dto");
        request.password = <string>TestInitializer.getValue("postNotesSlideAddNewPortion", "password");
        request.folder = <string>TestInitializer.getValue("postNotesSlideAddNewPortion", "folder");
        request.storage = <string>TestInitializer.getValue("postNotesSlideAddNewPortion", "storage");
        request.position = <number>TestInitializer.getValue("postNotesSlideAddNewPortion", "position");
        return request;
    }

    public static getPostNotesSlideAddNewShapeRequest(): requests.PostNotesSlideAddNewShapeRequest {
        const request = new requests.PostNotesSlideAddNewShapeRequest();
        request.name = <string>TestInitializer.getValue("postNotesSlideAddNewShape", "name");
        request.slideIndex = <number>TestInitializer.getValue("postNotesSlideAddNewShape", "slideIndex");
        request.path = <string>TestInitializer.getValue("postNotesSlideAddNewShape", "path");
        request.dto = <model.ShapeBase>TestInitializer.getValue("postNotesSlideAddNewShape", "dto");
        request.password = <string>TestInitializer.getValue("postNotesSlideAddNewShape", "password");
        request.folder = <string>TestInitializer.getValue("postNotesSlideAddNewShape", "folder");
        request.storage = <string>TestInitializer.getValue("postNotesSlideAddNewShape", "storage");
        request.shapeToClone = <number>TestInitializer.getValue("postNotesSlideAddNewShape", "shapeToClone");
        request.position = <number>TestInitializer.getValue("postNotesSlideAddNewShape", "position");
        return request;
    }

    public static getPostNotesSlideShapeSaveAsRequest(): requests.PostNotesSlideShapeSaveAsRequest {
        const request = new requests.PostNotesSlideShapeSaveAsRequest();
        request.name = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "name");
        request.slideIndex = <number>TestInitializer.getValue("postNotesSlideShapeSaveAs", "slideIndex");
        request.path = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "path");
        request.shapeIndex = <number>TestInitializer.getValue("postNotesSlideShapeSaveAs", "shapeIndex");
        request.format = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "format");
        request.options = <model.IShapeExportOptions>TestInitializer.getValue("postNotesSlideShapeSaveAs", "options");
        request.password = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "password");
        request.folder = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "folder");
        request.storage = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "storage");
        request.scaleX = <number>TestInitializer.getValue("postNotesSlideShapeSaveAs", "scaleX");
        request.scaleY = <number>TestInitializer.getValue("postNotesSlideShapeSaveAs", "scaleY");
        request.bounds = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "bounds");
        request.fontsFolder = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "fontsFolder");
        return request;
    }

    public static getPostPresentationMergeRequest(): requests.PostPresentationMergeRequest {
        const request = new requests.PostPresentationMergeRequest();
        request.name = <string>TestInitializer.getValue("postPresentationMerge", "name");
        request.request = <model.PresentationsMergeRequest>TestInitializer.getValue("postPresentationMerge", "request");
        request.password = <string>TestInitializer.getValue("postPresentationMerge", "password");
        request.storage = <string>TestInitializer.getValue("postPresentationMerge", "storage");
        request.folder = <string>TestInitializer.getValue("postPresentationMerge", "folder");
        return request;
    }

    public static getPostShapeSaveAsRequest(): requests.PostShapeSaveAsRequest {
        const request = new requests.PostShapeSaveAsRequest();
        request.name = <string>TestInitializer.getValue("postShapeSaveAs", "name");
        request.slideIndex = <number>TestInitializer.getValue("postShapeSaveAs", "slideIndex");
        request.path = <string>TestInitializer.getValue("postShapeSaveAs", "path");
        request.shapeIndex = <number>TestInitializer.getValue("postShapeSaveAs", "shapeIndex");
        request.format = <string>TestInitializer.getValue("postShapeSaveAs", "format");
        request.options = <model.IShapeExportOptions>TestInitializer.getValue("postShapeSaveAs", "options");
        request.password = <string>TestInitializer.getValue("postShapeSaveAs", "password");
        request.folder = <string>TestInitializer.getValue("postShapeSaveAs", "folder");
        request.storage = <string>TestInitializer.getValue("postShapeSaveAs", "storage");
        request.scaleX = <number>TestInitializer.getValue("postShapeSaveAs", "scaleX");
        request.scaleY = <number>TestInitializer.getValue("postShapeSaveAs", "scaleY");
        request.bounds = <string>TestInitializer.getValue("postShapeSaveAs", "bounds");
        request.fontsFolder = <string>TestInitializer.getValue("postShapeSaveAs", "fontsFolder");
        return request;
    }

    public static getPostSlideAnimationEffectRequest(): requests.PostSlideAnimationEffectRequest {
        const request = new requests.PostSlideAnimationEffectRequest();
        request.name = <string>TestInitializer.getValue("postSlideAnimationEffect", "name");
        request.slideIndex = <number>TestInitializer.getValue("postSlideAnimationEffect", "slideIndex");
        request.effect = <model.Effect>TestInitializer.getValue("postSlideAnimationEffect", "effect");
        request.password = <string>TestInitializer.getValue("postSlideAnimationEffect", "password");
        request.folder = <string>TestInitializer.getValue("postSlideAnimationEffect", "folder");
        request.storage = <string>TestInitializer.getValue("postSlideAnimationEffect", "storage");
        return request;
    }

    public static getPostSlideAnimationInteractiveSequenceRequest(): requests.PostSlideAnimationInteractiveSequenceRequest {
        const request = new requests.PostSlideAnimationInteractiveSequenceRequest();
        request.name = <string>TestInitializer.getValue("postSlideAnimationInteractiveSequence", "name");
        request.slideIndex = <number>TestInitializer.getValue("postSlideAnimationInteractiveSequence", "slideIndex");
        request.sequence = <model.InteractiveSequence>TestInitializer.getValue("postSlideAnimationInteractiveSequence", "sequence");
        request.password = <string>TestInitializer.getValue("postSlideAnimationInteractiveSequence", "password");
        request.folder = <string>TestInitializer.getValue("postSlideAnimationInteractiveSequence", "folder");
        request.storage = <string>TestInitializer.getValue("postSlideAnimationInteractiveSequence", "storage");
        return request;
    }

    public static getPostSlideAnimationInteractiveSequenceEffectRequest(): requests.PostSlideAnimationInteractiveSequenceEffectRequest {
        const request = new requests.PostSlideAnimationInteractiveSequenceEffectRequest();
        request.name = <string>TestInitializer.getValue("postSlideAnimationInteractiveSequenceEffect", "name");
        request.slideIndex = <number>TestInitializer.getValue("postSlideAnimationInteractiveSequenceEffect", "slideIndex");
        request.sequenceIndex = <number>TestInitializer.getValue("postSlideAnimationInteractiveSequenceEffect", "sequenceIndex");
        request.effect = <model.Effect>TestInitializer.getValue("postSlideAnimationInteractiveSequenceEffect", "effect");
        request.password = <string>TestInitializer.getValue("postSlideAnimationInteractiveSequenceEffect", "password");
        request.folder = <string>TestInitializer.getValue("postSlideAnimationInteractiveSequenceEffect", "folder");
        request.storage = <string>TestInitializer.getValue("postSlideAnimationInteractiveSequenceEffect", "storage");
        return request;
    }

    public static getPostSlideSaveAsRequest(): requests.PostSlideSaveAsRequest {
        const request = new requests.PostSlideSaveAsRequest();
        request.name = <string>TestInitializer.getValue("postSlideSaveAs", "name");
        request.slideIndex = <number>TestInitializer.getValue("postSlideSaveAs", "slideIndex");
        request.format = <string>TestInitializer.getValue("postSlideSaveAs", "format");
        request.options = <model.ExportOptions>TestInitializer.getValue("postSlideSaveAs", "options");
        request.width = <number>TestInitializer.getValue("postSlideSaveAs", "width");
        request.height = <number>TestInitializer.getValue("postSlideSaveAs", "height");
        request.password = <string>TestInitializer.getValue("postSlideSaveAs", "password");
        request.folder = <string>TestInitializer.getValue("postSlideSaveAs", "folder");
        request.storage = <string>TestInitializer.getValue("postSlideSaveAs", "storage");
        request.fontsFolder = <string>TestInitializer.getValue("postSlideSaveAs", "fontsFolder");
        return request;
    }

    public static getPostSlidesAddRequest(): requests.PostSlidesAddRequest {
        const request = new requests.PostSlidesAddRequest();
        request.name = <string>TestInitializer.getValue("postSlidesAdd", "name");
        request.position = <number>TestInitializer.getValue("postSlidesAdd", "position");
        request.password = <string>TestInitializer.getValue("postSlidesAdd", "password");
        request.folder = <string>TestInitializer.getValue("postSlidesAdd", "folder");
        request.storage = <string>TestInitializer.getValue("postSlidesAdd", "storage");
        request.layoutAlias = <string>TestInitializer.getValue("postSlidesAdd", "layoutAlias");
        return request;
    }

    public static getPostSlidesConvertRequest(): requests.PostSlidesConvertRequest {
        const request = new requests.PostSlidesConvertRequest();
        request.format = <string>TestInitializer.getValue("postSlidesConvert", "format");
        request.document = <Buffer>TestInitializer.getStreamValue();
        request.password = <string>TestInitializer.getValue("postSlidesConvert", "password");
        request.fontsFolder = <string>TestInitializer.getValue("postSlidesConvert", "fontsFolder");
        return request;
    }

    public static getPostSlidesCopyRequest(): requests.PostSlidesCopyRequest {
        const request = new requests.PostSlidesCopyRequest();
        request.name = <string>TestInitializer.getValue("postSlidesCopy", "name");
        request.slideToCopy = <number>TestInitializer.getValue("postSlidesCopy", "slideToCopy");
        request.position = <number>TestInitializer.getValue("postSlidesCopy", "position");
        request.source = <string>TestInitializer.getValue("postSlidesCopy", "source");
        request.sourcePassword = <string>TestInitializer.getValue("postSlidesCopy", "sourcePassword");
        request.sourceStorage = <string>TestInitializer.getValue("postSlidesCopy", "sourceStorage");
        request.password = <string>TestInitializer.getValue("postSlidesCopy", "password");
        request.folder = <string>TestInitializer.getValue("postSlidesCopy", "folder");
        request.storage = <string>TestInitializer.getValue("postSlidesCopy", "storage");
        return request;
    }

    public static getPostSlidesDocumentRequest(): requests.PostSlidesDocumentRequest {
        const request = new requests.PostSlidesDocumentRequest();
        request.name = <string>TestInitializer.getValue("postSlidesDocument", "name");
        request.data = <Buffer>TestInitializer.getStreamValue();
        request.inputPassword = <string>TestInitializer.getValue("postSlidesDocument", "inputPassword");
        request.password = <string>TestInitializer.getValue("postSlidesDocument", "password");
        request.storage = <string>TestInitializer.getValue("postSlidesDocument", "storage");
        request.folder = <string>TestInitializer.getValue("postSlidesDocument", "folder");
        return request;
    }

    public static getPostSlidesDocumentFromHtmlRequest(): requests.PostSlidesDocumentFromHtmlRequest {
        const request = new requests.PostSlidesDocumentFromHtmlRequest();
        request.name = <string>TestInitializer.getValue("postSlidesDocumentFromHtml", "name");
        request.html = <string>TestInitializer.getValue("postSlidesDocumentFromHtml", "html");
        request.password = <string>TestInitializer.getValue("postSlidesDocumentFromHtml", "password");
        request.storage = <string>TestInitializer.getValue("postSlidesDocumentFromHtml", "storage");
        request.folder = <string>TestInitializer.getValue("postSlidesDocumentFromHtml", "folder");
        return request;
    }

    public static getPostSlidesDocumentFromSourceRequest(): requests.PostSlidesDocumentFromSourceRequest {
        const request = new requests.PostSlidesDocumentFromSourceRequest();
        request.name = <string>TestInitializer.getValue("postSlidesDocumentFromSource", "name");
        request.sourcePath = <string>TestInitializer.getValue("postSlidesDocumentFromSource", "sourcePath");
        request.sourcePassword = <string>TestInitializer.getValue("postSlidesDocumentFromSource", "sourcePassword");
        request.sourceStorage = <string>TestInitializer.getValue("postSlidesDocumentFromSource", "sourceStorage");
        request.password = <string>TestInitializer.getValue("postSlidesDocumentFromSource", "password");
        request.storage = <string>TestInitializer.getValue("postSlidesDocumentFromSource", "storage");
        request.folder = <string>TestInitializer.getValue("postSlidesDocumentFromSource", "folder");
        return request;
    }

    public static getPostSlidesDocumentFromTemplateRequest(): requests.PostSlidesDocumentFromTemplateRequest {
        const request = new requests.PostSlidesDocumentFromTemplateRequest();
        request.name = <string>TestInitializer.getValue("postSlidesDocumentFromTemplate", "name");
        request.templatePath = <string>TestInitializer.getValue("postSlidesDocumentFromTemplate", "templatePath");
        request.data = <string>TestInitializer.getValue("postSlidesDocumentFromTemplate", "data");
        request.templatePassword = <string>TestInitializer.getValue("postSlidesDocumentFromTemplate", "templatePassword");
        request.templateStorage = <string>TestInitializer.getValue("postSlidesDocumentFromTemplate", "templateStorage");
        request.isImageDataEmbedded = <boolean>TestInitializer.getValue("postSlidesDocumentFromTemplate", "isImageDataEmbedded");
        request.password = <string>TestInitializer.getValue("postSlidesDocumentFromTemplate", "password");
        request.storage = <string>TestInitializer.getValue("postSlidesDocumentFromTemplate", "storage");
        request.folder = <string>TestInitializer.getValue("postSlidesDocumentFromTemplate", "folder");
        return request;
    }

    public static getPostSlidesPipelineRequest(): requests.PostSlidesPipelineRequest {
        const request = new requests.PostSlidesPipelineRequest();
        request.pipeline = <model.Pipeline>TestInitializer.getValue("postSlidesPipeline", "pipeline");
        request.files = <Array<Buffer>>TestInitializer.getStreamValue();
        return request;
    }

    public static getPostSlidesPresentationReplaceTextRequest(): requests.PostSlidesPresentationReplaceTextRequest {
        const request = new requests.PostSlidesPresentationReplaceTextRequest();
        request.name = <string>TestInitializer.getValue("postSlidesPresentationReplaceText", "name");
        request.oldValue = <string>TestInitializer.getValue("postSlidesPresentationReplaceText", "oldValue");
        request.newValue = <string>TestInitializer.getValue("postSlidesPresentationReplaceText", "newValue");
        request.ignoreCase = <boolean>TestInitializer.getValue("postSlidesPresentationReplaceText", "ignoreCase");
        request.password = <string>TestInitializer.getValue("postSlidesPresentationReplaceText", "password");
        request.folder = <string>TestInitializer.getValue("postSlidesPresentationReplaceText", "folder");
        request.storage = <string>TestInitializer.getValue("postSlidesPresentationReplaceText", "storage");
        return request;
    }

    public static getPostSlidesReorderRequest(): requests.PostSlidesReorderRequest {
        const request = new requests.PostSlidesReorderRequest();
        request.name = <string>TestInitializer.getValue("postSlidesReorder", "name");
        request.slideIndex = <number>TestInitializer.getValue("postSlidesReorder", "slideIndex");
        request.newPosition = <number>TestInitializer.getValue("postSlidesReorder", "newPosition");
        request.password = <string>TestInitializer.getValue("postSlidesReorder", "password");
        request.folder = <string>TestInitializer.getValue("postSlidesReorder", "folder");
        request.storage = <string>TestInitializer.getValue("postSlidesReorder", "storage");
        return request;
    }

    public static getPostSlidesReorderManyRequest(): requests.PostSlidesReorderManyRequest {
        const request = new requests.PostSlidesReorderManyRequest();
        request.name = <string>TestInitializer.getValue("postSlidesReorderMany", "name");
        request.oldPositions = <Array<number>>TestInitializer.getValue("postSlidesReorderMany", "oldPositions");
        request.newPositions = <Array<number>>TestInitializer.getValue("postSlidesReorderMany", "newPositions");
        request.password = <string>TestInitializer.getValue("postSlidesReorderMany", "password");
        request.folder = <string>TestInitializer.getValue("postSlidesReorderMany", "folder");
        request.storage = <string>TestInitializer.getValue("postSlidesReorderMany", "storage");
        return request;
    }

    public static getPostSlidesSaveAsRequest(): requests.PostSlidesSaveAsRequest {
        const request = new requests.PostSlidesSaveAsRequest();
        request.name = <string>TestInitializer.getValue("postSlidesSaveAs", "name");
        request.format = <string>TestInitializer.getValue("postSlidesSaveAs", "format");
        request.options = <model.ExportOptions>TestInitializer.getValue("postSlidesSaveAs", "options");
        request.password = <string>TestInitializer.getValue("postSlidesSaveAs", "password");
        request.storage = <string>TestInitializer.getValue("postSlidesSaveAs", "storage");
        request.folder = <string>TestInitializer.getValue("postSlidesSaveAs", "folder");
        request.fontsFolder = <string>TestInitializer.getValue("postSlidesSaveAs", "fontsFolder");
        return request;
    }

    public static getPostSlidesSetDocumentPropertiesRequest(): requests.PostSlidesSetDocumentPropertiesRequest {
        const request = new requests.PostSlidesSetDocumentPropertiesRequest();
        request.name = <string>TestInitializer.getValue("postSlidesSetDocumentProperties", "name");
        request.properties = <model.DocumentProperties>TestInitializer.getValue("postSlidesSetDocumentProperties", "properties");
        request.password = <string>TestInitializer.getValue("postSlidesSetDocumentProperties", "password");
        request.folder = <string>TestInitializer.getValue("postSlidesSetDocumentProperties", "folder");
        request.storage = <string>TestInitializer.getValue("postSlidesSetDocumentProperties", "storage");
        return request;
    }

    public static getPostSlidesSlideReplaceTextRequest(): requests.PostSlidesSlideReplaceTextRequest {
        const request = new requests.PostSlidesSlideReplaceTextRequest();
        request.name = <string>TestInitializer.getValue("postSlidesSlideReplaceText", "name");
        request.slideIndex = <number>TestInitializer.getValue("postSlidesSlideReplaceText", "slideIndex");
        request.oldValue = <string>TestInitializer.getValue("postSlidesSlideReplaceText", "oldValue");
        request.newValue = <string>TestInitializer.getValue("postSlidesSlideReplaceText", "newValue");
        request.ignoreCase = <boolean>TestInitializer.getValue("postSlidesSlideReplaceText", "ignoreCase");
        request.password = <string>TestInitializer.getValue("postSlidesSlideReplaceText", "password");
        request.folder = <string>TestInitializer.getValue("postSlidesSlideReplaceText", "folder");
        request.storage = <string>TestInitializer.getValue("postSlidesSlideReplaceText", "storage");
        return request;
    }

    public static getPostSlidesSplitRequest(): requests.PostSlidesSplitRequest {
        const request = new requests.PostSlidesSplitRequest();
        request.name = <string>TestInitializer.getValue("postSlidesSplit", "name");
        request.options = <model.ExportOptions>TestInitializer.getValue("postSlidesSplit", "options");
        request.format = <string>TestInitializer.getValue("postSlidesSplit", "format");
        request.width = <number>TestInitializer.getValue("postSlidesSplit", "width");
        request.height = <number>TestInitializer.getValue("postSlidesSplit", "height");
        request.to = <number>TestInitializer.getValue("postSlidesSplit", "to");
        request.from = <number>TestInitializer.getValue("postSlidesSplit", "from");
        request.destFolder = <string>TestInitializer.getValue("postSlidesSplit", "destFolder");
        request.password = <string>TestInitializer.getValue("postSlidesSplit", "password");
        request.storage = <string>TestInitializer.getValue("postSlidesSplit", "storage");
        request.folder = <string>TestInitializer.getValue("postSlidesSplit", "folder");
        request.fontsFolder = <string>TestInitializer.getValue("postSlidesSplit", "fontsFolder");
        return request;
    }

    public static getPutLayoutSlideRequest(): requests.PutLayoutSlideRequest {
        const request = new requests.PutLayoutSlideRequest();
        request.name = <string>TestInitializer.getValue("putLayoutSlide", "name");
        request.slideIndex = <number>TestInitializer.getValue("putLayoutSlide", "slideIndex");
        request.slideDto = <model.LayoutSlide>TestInitializer.getValue("putLayoutSlide", "slideDto");
        request.password = <string>TestInitializer.getValue("putLayoutSlide", "password");
        request.folder = <string>TestInitializer.getValue("putLayoutSlide", "folder");
        request.storage = <string>TestInitializer.getValue("putLayoutSlide", "storage");
        return request;
    }

    public static getPutNotesSlideShapeSaveAsRequest(): requests.PutNotesSlideShapeSaveAsRequest {
        const request = new requests.PutNotesSlideShapeSaveAsRequest();
        request.name = <string>TestInitializer.getValue("putNotesSlideShapeSaveAs", "name");
        request.slideIndex = <number>TestInitializer.getValue("putNotesSlideShapeSaveAs", "slideIndex");
        request.path = <string>TestInitializer.getValue("putNotesSlideShapeSaveAs", "path");
        request.shapeIndex = <number>TestInitializer.getValue("putNotesSlideShapeSaveAs", "shapeIndex");
        request.format = <string>TestInitializer.getValue("putNotesSlideShapeSaveAs", "format");
        request.outPath = <string>TestInitializer.getValue("putNotesSlideShapeSaveAs", "outPath");
        request.options = <model.IShapeExportOptions>TestInitializer.getValue("putNotesSlideShapeSaveAs", "options");
        request.password = <string>TestInitializer.getValue("putNotesSlideShapeSaveAs", "password");
        request.folder = <string>TestInitializer.getValue("putNotesSlideShapeSaveAs", "folder");
        request.storage = <string>TestInitializer.getValue("putNotesSlideShapeSaveAs", "storage");
        request.scaleX = <number>TestInitializer.getValue("putNotesSlideShapeSaveAs", "scaleX");
        request.scaleY = <number>TestInitializer.getValue("putNotesSlideShapeSaveAs", "scaleY");
        request.bounds = <string>TestInitializer.getValue("putNotesSlideShapeSaveAs", "bounds");
        request.fontsFolder = <string>TestInitializer.getValue("putNotesSlideShapeSaveAs", "fontsFolder");
        return request;
    }

    public static getPutPresentationMergeRequest(): requests.PutPresentationMergeRequest {
        const request = new requests.PutPresentationMergeRequest();
        request.name = <string>TestInitializer.getValue("putPresentationMerge", "name");
        request.request = <model.OrderedMergeRequest>TestInitializer.getValue("putPresentationMerge", "request");
        request.password = <string>TestInitializer.getValue("putPresentationMerge", "password");
        request.storage = <string>TestInitializer.getValue("putPresentationMerge", "storage");
        request.folder = <string>TestInitializer.getValue("putPresentationMerge", "folder");
        return request;
    }

    public static getPutSetParagraphPortionPropertiesRequest(): requests.PutSetParagraphPortionPropertiesRequest {
        const request = new requests.PutSetParagraphPortionPropertiesRequest();
        request.name = <string>TestInitializer.getValue("putSetParagraphPortionProperties", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSetParagraphPortionProperties", "slideIndex");
        request.path = <string>TestInitializer.getValue("putSetParagraphPortionProperties", "path");
        request.shapeIndex = <number>TestInitializer.getValue("putSetParagraphPortionProperties", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("putSetParagraphPortionProperties", "paragraphIndex");
        request.portionIndex = <number>TestInitializer.getValue("putSetParagraphPortionProperties", "portionIndex");
        request.dto = <model.Portion>TestInitializer.getValue("putSetParagraphPortionProperties", "dto");
        request.password = <string>TestInitializer.getValue("putSetParagraphPortionProperties", "password");
        request.folder = <string>TestInitializer.getValue("putSetParagraphPortionProperties", "folder");
        request.storage = <string>TestInitializer.getValue("putSetParagraphPortionProperties", "storage");
        return request;
    }

    public static getPutSetParagraphPropertiesRequest(): requests.PutSetParagraphPropertiesRequest {
        const request = new requests.PutSetParagraphPropertiesRequest();
        request.name = <string>TestInitializer.getValue("putSetParagraphProperties", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSetParagraphProperties", "slideIndex");
        request.path = <string>TestInitializer.getValue("putSetParagraphProperties", "path");
        request.shapeIndex = <number>TestInitializer.getValue("putSetParagraphProperties", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("putSetParagraphProperties", "paragraphIndex");
        request.dto = <model.Paragraph>TestInitializer.getValue("putSetParagraphProperties", "dto");
        request.password = <string>TestInitializer.getValue("putSetParagraphProperties", "password");
        request.folder = <string>TestInitializer.getValue("putSetParagraphProperties", "folder");
        request.storage = <string>TestInitializer.getValue("putSetParagraphProperties", "storage");
        return request;
    }

    public static getPutShapeSaveAsRequest(): requests.PutShapeSaveAsRequest {
        const request = new requests.PutShapeSaveAsRequest();
        request.name = <string>TestInitializer.getValue("putShapeSaveAs", "name");
        request.slideIndex = <number>TestInitializer.getValue("putShapeSaveAs", "slideIndex");
        request.path = <string>TestInitializer.getValue("putShapeSaveAs", "path");
        request.shapeIndex = <number>TestInitializer.getValue("putShapeSaveAs", "shapeIndex");
        request.format = <string>TestInitializer.getValue("putShapeSaveAs", "format");
        request.outPath = <string>TestInitializer.getValue("putShapeSaveAs", "outPath");
        request.options = <model.IShapeExportOptions>TestInitializer.getValue("putShapeSaveAs", "options");
        request.password = <string>TestInitializer.getValue("putShapeSaveAs", "password");
        request.folder = <string>TestInitializer.getValue("putShapeSaveAs", "folder");
        request.storage = <string>TestInitializer.getValue("putShapeSaveAs", "storage");
        request.scaleX = <number>TestInitializer.getValue("putShapeSaveAs", "scaleX");
        request.scaleY = <number>TestInitializer.getValue("putShapeSaveAs", "scaleY");
        request.bounds = <string>TestInitializer.getValue("putShapeSaveAs", "bounds");
        request.fontsFolder = <string>TestInitializer.getValue("putShapeSaveAs", "fontsFolder");
        return request;
    }

    public static getPutSlideAnimationRequest(): requests.PutSlideAnimationRequest {
        const request = new requests.PutSlideAnimationRequest();
        request.name = <string>TestInitializer.getValue("putSlideAnimation", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSlideAnimation", "slideIndex");
        request.animation = <model.SlideAnimation>TestInitializer.getValue("putSlideAnimation", "animation");
        request.password = <string>TestInitializer.getValue("putSlideAnimation", "password");
        request.folder = <string>TestInitializer.getValue("putSlideAnimation", "folder");
        request.storage = <string>TestInitializer.getValue("putSlideAnimation", "storage");
        return request;
    }

    public static getPutSlideAnimationEffectRequest(): requests.PutSlideAnimationEffectRequest {
        const request = new requests.PutSlideAnimationEffectRequest();
        request.name = <string>TestInitializer.getValue("putSlideAnimationEffect", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSlideAnimationEffect", "slideIndex");
        request.effectIndex = <number>TestInitializer.getValue("putSlideAnimationEffect", "effectIndex");
        request.effect = <model.Effect>TestInitializer.getValue("putSlideAnimationEffect", "effect");
        request.password = <string>TestInitializer.getValue("putSlideAnimationEffect", "password");
        request.folder = <string>TestInitializer.getValue("putSlideAnimationEffect", "folder");
        request.storage = <string>TestInitializer.getValue("putSlideAnimationEffect", "storage");
        return request;
    }

    public static getPutSlideAnimationInteractiveSequenceEffectRequest(): requests.PutSlideAnimationInteractiveSequenceEffectRequest {
        const request = new requests.PutSlideAnimationInteractiveSequenceEffectRequest();
        request.name = <string>TestInitializer.getValue("putSlideAnimationInteractiveSequenceEffect", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSlideAnimationInteractiveSequenceEffect", "slideIndex");
        request.sequenceIndex = <number>TestInitializer.getValue("putSlideAnimationInteractiveSequenceEffect", "sequenceIndex");
        request.effectIndex = <number>TestInitializer.getValue("putSlideAnimationInteractiveSequenceEffect", "effectIndex");
        request.effect = <model.Effect>TestInitializer.getValue("putSlideAnimationInteractiveSequenceEffect", "effect");
        request.password = <string>TestInitializer.getValue("putSlideAnimationInteractiveSequenceEffect", "password");
        request.folder = <string>TestInitializer.getValue("putSlideAnimationInteractiveSequenceEffect", "folder");
        request.storage = <string>TestInitializer.getValue("putSlideAnimationInteractiveSequenceEffect", "storage");
        return request;
    }

    public static getPutSlideSaveAsRequest(): requests.PutSlideSaveAsRequest {
        const request = new requests.PutSlideSaveAsRequest();
        request.name = <string>TestInitializer.getValue("putSlideSaveAs", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSlideSaveAs", "slideIndex");
        request.format = <string>TestInitializer.getValue("putSlideSaveAs", "format");
        request.outPath = <string>TestInitializer.getValue("putSlideSaveAs", "outPath");
        request.options = <model.ExportOptions>TestInitializer.getValue("putSlideSaveAs", "options");
        request.width = <number>TestInitializer.getValue("putSlideSaveAs", "width");
        request.height = <number>TestInitializer.getValue("putSlideSaveAs", "height");
        request.password = <string>TestInitializer.getValue("putSlideSaveAs", "password");
        request.folder = <string>TestInitializer.getValue("putSlideSaveAs", "folder");
        request.storage = <string>TestInitializer.getValue("putSlideSaveAs", "storage");
        request.fontsFolder = <string>TestInitializer.getValue("putSlideSaveAs", "fontsFolder");
        return request;
    }

    public static getPutSlideShapeInfoRequest(): requests.PutSlideShapeInfoRequest {
        const request = new requests.PutSlideShapeInfoRequest();
        request.name = <string>TestInitializer.getValue("putSlideShapeInfo", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSlideShapeInfo", "slideIndex");
        request.path = <string>TestInitializer.getValue("putSlideShapeInfo", "path");
        request.shapeIndex = <number>TestInitializer.getValue("putSlideShapeInfo", "shapeIndex");
        request.dto = <model.ShapeBase>TestInitializer.getValue("putSlideShapeInfo", "dto");
        request.password = <string>TestInitializer.getValue("putSlideShapeInfo", "password");
        request.folder = <string>TestInitializer.getValue("putSlideShapeInfo", "folder");
        request.storage = <string>TestInitializer.getValue("putSlideShapeInfo", "storage");
        return request;
    }

    public static getPutSlidesConvertRequest(): requests.PutSlidesConvertRequest {
        const request = new requests.PutSlidesConvertRequest();
        request.format = <string>TestInitializer.getValue("putSlidesConvert", "format");
        request.outPath = <string>TestInitializer.getValue("putSlidesConvert", "outPath");
        request.document = <Buffer>TestInitializer.getStreamValue();
        request.password = <string>TestInitializer.getValue("putSlidesConvert", "password");
        request.fontsFolder = <string>TestInitializer.getValue("putSlidesConvert", "fontsFolder");
        return request;
    }

    public static getPutSlidesDocumentFromHtmlRequest(): requests.PutSlidesDocumentFromHtmlRequest {
        const request = new requests.PutSlidesDocumentFromHtmlRequest();
        request.name = <string>TestInitializer.getValue("putSlidesDocumentFromHtml", "name");
        request.html = <string>TestInitializer.getValue("putSlidesDocumentFromHtml", "html");
        request.password = <string>TestInitializer.getValue("putSlidesDocumentFromHtml", "password");
        request.storage = <string>TestInitializer.getValue("putSlidesDocumentFromHtml", "storage");
        request.folder = <string>TestInitializer.getValue("putSlidesDocumentFromHtml", "folder");
        return request;
    }

    public static getPutSlidesSaveAsRequest(): requests.PutSlidesSaveAsRequest {
        const request = new requests.PutSlidesSaveAsRequest();
        request.name = <string>TestInitializer.getValue("putSlidesSaveAs", "name");
        request.outPath = <string>TestInitializer.getValue("putSlidesSaveAs", "outPath");
        request.format = <string>TestInitializer.getValue("putSlidesSaveAs", "format");
        request.options = <model.ExportOptions>TestInitializer.getValue("putSlidesSaveAs", "options");
        request.password = <string>TestInitializer.getValue("putSlidesSaveAs", "password");
        request.storage = <string>TestInitializer.getValue("putSlidesSaveAs", "storage");
        request.folder = <string>TestInitializer.getValue("putSlidesSaveAs", "folder");
        request.fontsFolder = <string>TestInitializer.getValue("putSlidesSaveAs", "fontsFolder");
        return request;
    }

    public static getPutSlidesSetDocumentPropertyRequest(): requests.PutSlidesSetDocumentPropertyRequest {
        const request = new requests.PutSlidesSetDocumentPropertyRequest();
        request.name = <string>TestInitializer.getValue("putSlidesSetDocumentProperty", "name");
        request.propertyName = <string>TestInitializer.getValue("putSlidesSetDocumentProperty", "propertyName");
        request.property = <model.DocumentProperty>TestInitializer.getValue("putSlidesSetDocumentProperty", "property");
        request.password = <string>TestInitializer.getValue("putSlidesSetDocumentProperty", "password");
        request.folder = <string>TestInitializer.getValue("putSlidesSetDocumentProperty", "folder");
        request.storage = <string>TestInitializer.getValue("putSlidesSetDocumentProperty", "storage");
        return request;
    }

    public static getPutSlidesSlideRequest(): requests.PutSlidesSlideRequest {
        const request = new requests.PutSlidesSlideRequest();
        request.name = <string>TestInitializer.getValue("putSlidesSlide", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSlidesSlide", "slideIndex");
        request.slideDto = <model.Slide>TestInitializer.getValue("putSlidesSlide", "slideDto");
        request.password = <string>TestInitializer.getValue("putSlidesSlide", "password");
        request.folder = <string>TestInitializer.getValue("putSlidesSlide", "folder");
        request.storage = <string>TestInitializer.getValue("putSlidesSlide", "storage");
        return request;
    }

    public static getPutSlidesSlideBackgroundRequest(): requests.PutSlidesSlideBackgroundRequest {
        const request = new requests.PutSlidesSlideBackgroundRequest();
        request.name = <string>TestInitializer.getValue("putSlidesSlideBackground", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSlidesSlideBackground", "slideIndex");
        request.background = <model.SlideBackground>TestInitializer.getValue("putSlidesSlideBackground", "background");
        request.folder = <string>TestInitializer.getValue("putSlidesSlideBackground", "folder");
        request.password = <string>TestInitializer.getValue("putSlidesSlideBackground", "password");
        request.storage = <string>TestInitializer.getValue("putSlidesSlideBackground", "storage");
        return request;
    }

    public static getPutSlidesSlideBackgroundColorRequest(): requests.PutSlidesSlideBackgroundColorRequest {
        const request = new requests.PutSlidesSlideBackgroundColorRequest();
        request.name = <string>TestInitializer.getValue("putSlidesSlideBackgroundColor", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSlidesSlideBackgroundColor", "slideIndex");
        request.color = <string>TestInitializer.getValue("putSlidesSlideBackgroundColor", "color");
        request.folder = <string>TestInitializer.getValue("putSlidesSlideBackgroundColor", "folder");
        request.password = <string>TestInitializer.getValue("putSlidesSlideBackgroundColor", "password");
        request.storage = <string>TestInitializer.getValue("putSlidesSlideBackgroundColor", "storage");
        return request;
    }

    public static getPutSlidesSlideSizeRequest(): requests.PutSlidesSlideSizeRequest {
        const request = new requests.PutSlidesSlideSizeRequest();
        request.name = <string>TestInitializer.getValue("putSlidesSlideSize", "name");
        request.password = <string>TestInitializer.getValue("putSlidesSlideSize", "password");
        request.storage = <string>TestInitializer.getValue("putSlidesSlideSize", "storage");
        request.folder = <string>TestInitializer.getValue("putSlidesSlideSize", "folder");
        request.width = <number>TestInitializer.getValue("putSlidesSlideSize", "width");
        request.height = <number>TestInitializer.getValue("putSlidesSlideSize", "height");
        request.sizeType = <string>TestInitializer.getValue("putSlidesSlideSize", "sizeType");
        request.scaleType = <string>TestInitializer.getValue("putSlidesSlideSize", "scaleType");
        return request;
    }

    public static getPutUpdateNotesSlideRequest(): requests.PutUpdateNotesSlideRequest {
        const request = new requests.PutUpdateNotesSlideRequest();
        request.name = <string>TestInitializer.getValue("putUpdateNotesSlide", "name");
        request.slideIndex = <number>TestInitializer.getValue("putUpdateNotesSlide", "slideIndex");
        request.dto = <model.NotesSlide>TestInitializer.getValue("putUpdateNotesSlide", "dto");
        request.password = <string>TestInitializer.getValue("putUpdateNotesSlide", "password");
        request.folder = <string>TestInitializer.getValue("putUpdateNotesSlide", "folder");
        request.storage = <string>TestInitializer.getValue("putUpdateNotesSlide", "storage");
        return request;
    }

    public static getPutUpdateNotesSlideShapeRequest(): requests.PutUpdateNotesSlideShapeRequest {
        const request = new requests.PutUpdateNotesSlideShapeRequest();
        request.name = <string>TestInitializer.getValue("putUpdateNotesSlideShape", "name");
        request.slideIndex = <number>TestInitializer.getValue("putUpdateNotesSlideShape", "slideIndex");
        request.path = <string>TestInitializer.getValue("putUpdateNotesSlideShape", "path");
        request.shapeIndex = <number>TestInitializer.getValue("putUpdateNotesSlideShape", "shapeIndex");
        request.dto = <model.ShapeBase>TestInitializer.getValue("putUpdateNotesSlideShape", "dto");
        request.password = <string>TestInitializer.getValue("putUpdateNotesSlideShape", "password");
        request.folder = <string>TestInitializer.getValue("putUpdateNotesSlideShape", "folder");
        request.storage = <string>TestInitializer.getValue("putUpdateNotesSlideShape", "storage");
        return request;
    }

    public static getPutUpdateNotesSlideShapeParagraphRequest(): requests.PutUpdateNotesSlideShapeParagraphRequest {
        const request = new requests.PutUpdateNotesSlideShapeParagraphRequest();
        request.name = <string>TestInitializer.getValue("putUpdateNotesSlideShapeParagraph", "name");
        request.slideIndex = <number>TestInitializer.getValue("putUpdateNotesSlideShapeParagraph", "slideIndex");
        request.path = <string>TestInitializer.getValue("putUpdateNotesSlideShapeParagraph", "path");
        request.shapeIndex = <number>TestInitializer.getValue("putUpdateNotesSlideShapeParagraph", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("putUpdateNotesSlideShapeParagraph", "paragraphIndex");
        request.dto = <model.Paragraph>TestInitializer.getValue("putUpdateNotesSlideShapeParagraph", "dto");
        request.password = <string>TestInitializer.getValue("putUpdateNotesSlideShapeParagraph", "password");
        request.folder = <string>TestInitializer.getValue("putUpdateNotesSlideShapeParagraph", "folder");
        request.storage = <string>TestInitializer.getValue("putUpdateNotesSlideShapeParagraph", "storage");
        return request;
    }

    public static getPutUpdateNotesSlideShapePortionRequest(): requests.PutUpdateNotesSlideShapePortionRequest {
        const request = new requests.PutUpdateNotesSlideShapePortionRequest();
        request.name = <string>TestInitializer.getValue("putUpdateNotesSlideShapePortion", "name");
        request.slideIndex = <number>TestInitializer.getValue("putUpdateNotesSlideShapePortion", "slideIndex");
        request.path = <string>TestInitializer.getValue("putUpdateNotesSlideShapePortion", "path");
        request.shapeIndex = <number>TestInitializer.getValue("putUpdateNotesSlideShapePortion", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("putUpdateNotesSlideShapePortion", "paragraphIndex");
        request.portionIndex = <number>TestInitializer.getValue("putUpdateNotesSlideShapePortion", "portionIndex");
        request.dto = <model.Portion>TestInitializer.getValue("putUpdateNotesSlideShapePortion", "dto");
        request.password = <string>TestInitializer.getValue("putUpdateNotesSlideShapePortion", "password");
        request.folder = <string>TestInitializer.getValue("putUpdateNotesSlideShapePortion", "folder");
        request.storage = <string>TestInitializer.getValue("putUpdateNotesSlideShapePortion", "storage");
        return request;
    }

    public static getStorageExistsRequest(): requests.StorageExistsRequest {
        const request = new requests.StorageExistsRequest();
        request.storageName = <string>TestInitializer.getValue("storageExists", "storageName");
        return request;
    }

    public static getUploadFileRequest(): requests.UploadFileRequest {
        const request = new requests.UploadFileRequest();
        request.path = <string>TestInitializer.getValue("uploadFile", "path");
        request.file = <Buffer>TestInitializer.getStreamValue();
        request.storageName = <string>TestInitializer.getValue("uploadFile", "storageName");
        return request;
    }
}

describe("Tests for copyFile", () => {
    it("main test", () => {
        return TestInitializer.initialize("copyFile", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getCopyFileRequest();
            return TestInitializer.assertValidCall(api.copyFile(request), false, "copyFile");
        }).catch((err) => assert.fail(err));
    });

    it("invalid srcPath test", () => {
        const field = "srcPath";
        const request = TestUtils.getCopyFileRequest();
        request.srcPath = <string>TestInitializer.invalidizeValue(request.srcPath, field, "string", "copyFile");
        return TestInitializer.initialize("copyFile", field, request.srcPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.copyFile(request), "copyFile", field, request.srcPath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid destPath test", () => {
        const field = "destPath";
        const request = TestUtils.getCopyFileRequest();
        request.destPath = <string>TestInitializer.invalidizeValue(request.destPath, field, "string", "copyFile");
        return TestInitializer.initialize("copyFile", field, request.destPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.copyFile(request), "copyFile", field, request.destPath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid srcStorageName test", () => {
        const field = "srcStorageName";
        const request = TestUtils.getCopyFileRequest();
        request.srcStorageName = <string>TestInitializer.invalidizeValue(request.srcStorageName, field, "string", "copyFile");
        return TestInitializer.initialize("copyFile", field, request.srcStorageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.copyFile(request), "copyFile", field, request.srcStorageName);
        }).catch((err) => assert.fail(err));
    });

    it("invalid destStorageName test", () => {
        const field = "destStorageName";
        const request = TestUtils.getCopyFileRequest();
        request.destStorageName = <string>TestInitializer.invalidizeValue(request.destStorageName, field, "string", "copyFile");
        return TestInitializer.initialize("copyFile", field, request.destStorageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.copyFile(request), "copyFile", field, request.destStorageName);
        }).catch((err) => assert.fail(err));
    });

    it("invalid versionId test", () => {
        const field = "versionId";
        const request = TestUtils.getCopyFileRequest();
        request.versionId = <string>TestInitializer.invalidizeValue(request.versionId, field, "string", "copyFile");
        return TestInitializer.initialize("copyFile", field, request.versionId).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.copyFile(request), "copyFile", field, request.versionId);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for copyFolder", () => {
    it("main test", () => {
        return TestInitializer.initialize("copyFolder", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getCopyFolderRequest();
            return TestInitializer.assertValidCall(api.copyFolder(request), false, "copyFolder");
        }).catch((err) => assert.fail(err));
    });

    it("invalid srcPath test", () => {
        const field = "srcPath";
        const request = TestUtils.getCopyFolderRequest();
        request.srcPath = <string>TestInitializer.invalidizeValue(request.srcPath, field, "string", "copyFolder");
        return TestInitializer.initialize("copyFolder", field, request.srcPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.copyFolder(request), "copyFolder", field, request.srcPath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid destPath test", () => {
        const field = "destPath";
        const request = TestUtils.getCopyFolderRequest();
        request.destPath = <string>TestInitializer.invalidizeValue(request.destPath, field, "string", "copyFolder");
        return TestInitializer.initialize("copyFolder", field, request.destPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.copyFolder(request), "copyFolder", field, request.destPath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid srcStorageName test", () => {
        const field = "srcStorageName";
        const request = TestUtils.getCopyFolderRequest();
        request.srcStorageName = <string>TestInitializer.invalidizeValue(request.srcStorageName, field, "string", "copyFolder");
        return TestInitializer.initialize("copyFolder", field, request.srcStorageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.copyFolder(request), "copyFolder", field, request.srcStorageName);
        }).catch((err) => assert.fail(err));
    });

    it("invalid destStorageName test", () => {
        const field = "destStorageName";
        const request = TestUtils.getCopyFolderRequest();
        request.destStorageName = <string>TestInitializer.invalidizeValue(request.destStorageName, field, "string", "copyFolder");
        return TestInitializer.initialize("copyFolder", field, request.destStorageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.copyFolder(request), "copyFolder", field, request.destStorageName);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for createFolder", () => {
    it("main test", () => {
        return TestInitializer.initialize("createFolder", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getCreateFolderRequest();
            return TestInitializer.assertValidCall(api.createFolder(request), false, "createFolder");
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getCreateFolderRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "createFolder");
        return TestInitializer.initialize("createFolder", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.createFolder(request), "createFolder", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getCreateFolderRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "createFolder");
        return TestInitializer.initialize("createFolder", field, request.storageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.createFolder(request), "createFolder", field, request.storageName);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteFile", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteFile", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteFileRequest();
            return TestInitializer.assertValidCall(api.deleteFile(request), false, "deleteFile");
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteFileRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteFile");
        return TestInitializer.initialize("deleteFile", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteFile(request), "deleteFile", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getDeleteFileRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "deleteFile");
        return TestInitializer.initialize("deleteFile", field, request.storageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteFile(request), "deleteFile", field, request.storageName);
        }).catch((err) => assert.fail(err));
    });

    it("invalid versionId test", () => {
        const field = "versionId";
        const request = TestUtils.getDeleteFileRequest();
        request.versionId = <string>TestInitializer.invalidizeValue(request.versionId, field, "string", "deleteFile");
        return TestInitializer.initialize("deleteFile", field, request.versionId).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteFile(request), "deleteFile", field, request.versionId);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteFolder", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteFolder", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteFolderRequest();
            return TestInitializer.assertValidCall(api.deleteFolder(request), false, "deleteFolder");
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteFolderRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteFolder");
        return TestInitializer.initialize("deleteFolder", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteFolder(request), "deleteFolder", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getDeleteFolderRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "deleteFolder");
        return TestInitializer.initialize("deleteFolder", field, request.storageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteFolder(request), "deleteFolder", field, request.storageName);
        }).catch((err) => assert.fail(err));
    });

    it("invalid recursive test", () => {
        const field = "recursive";
        const request = TestUtils.getDeleteFolderRequest();
        request.recursive = <boolean>TestInitializer.invalidizeValue(request.recursive, field, "boolean", "deleteFolder");
        return TestInitializer.initialize("deleteFolder", field, request.recursive).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteFolder(request), "deleteFolder", field, request.recursive);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteNotesSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlideRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlide(request), false, "deleteNotesSlide");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlide");
        return TestInitializer.initialize("deleteNotesSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlide(request), "deleteNotesSlide", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlide");
        return TestInitializer.initialize("deleteNotesSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlide(request), "deleteNotesSlide", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlide");
        return TestInitializer.initialize("deleteNotesSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlide(request), "deleteNotesSlide", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlide");
        return TestInitializer.initialize("deleteNotesSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlide(request), "deleteNotesSlide", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlide");
        return TestInitializer.initialize("deleteNotesSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlide(request), "deleteNotesSlide", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteNotesSlideParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlideParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlideParagraphRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlideParagraph(request), false, "deleteNotesSlideParagraph");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlideParagraph");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlideParagraph");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteNotesSlideParagraph");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteNotesSlideParagraph");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deleteNotesSlideParagraph");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlideParagraph");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlideParagraph");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlideParagraph");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteNotesSlideParagraphs", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlideParagraphs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlideParagraphs(request), false, "deleteNotesSlideParagraphs");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlideParagraphs");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlideParagraphs");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteNotesSlideParagraphs");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteNotesSlideParagraphs");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphs test", () => {
        const field = "paragraphs";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.paragraphs = <Array<number>>TestInitializer.invalidizeValue(request.paragraphs, field, "Array&lt;number&gt;", "deleteNotesSlideParagraphs");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.paragraphs).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.paragraphs);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlideParagraphs");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlideParagraphs");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlideParagraphs");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteNotesSlidePortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlidePortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlidePortionRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlidePortion(request), false, "deleteNotesSlidePortion");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlidePortion");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlidePortion");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteNotesSlidePortion");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteNotesSlidePortion");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deleteNotesSlidePortion");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "deleteNotesSlidePortion");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.portionIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.portionIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlidePortion");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlidePortion");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlidePortion");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteNotesSlidePortions", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlidePortions", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlidePortionsRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlidePortions(request), false, "deleteNotesSlidePortions");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlidePortions");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlidePortions");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteNotesSlidePortions");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteNotesSlidePortions");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deleteNotesSlidePortions");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid portions test", () => {
        const field = "portions";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.portions = <Array<number>>TestInitializer.invalidizeValue(request.portions, field, "Array&lt;number&gt;", "deleteNotesSlidePortions");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.portions).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.portions);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlidePortions");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlidePortions");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlidePortions");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteNotesSlideShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlideShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlideShapeRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlideShape(request), false, "deleteNotesSlideShape");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlideShape");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlideShape");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteNotesSlideShape");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteNotesSlideShape");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlideShape");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlideShape");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlideShape");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteNotesSlideShapes", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlideShapes", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlideShapesRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlideShapes(request), false, "deleteNotesSlideShapes");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlideShapes");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlideShapes");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteNotesSlideShapes");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapes test", () => {
        const field = "shapes";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.shapes = <Array<number>>TestInitializer.invalidizeValue(request.shapes, field, "Array&lt;number&gt;", "deleteNotesSlideShapes");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.shapes).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field, request.shapes);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlideShapes");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlideShapes");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlideShapes");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteParagraphRequest();
            return TestInitializer.assertValidCall(api.deleteParagraph(request), false, "deleteParagraph");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteParagraph");
        return TestInitializer.initialize("deleteParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteParagraph");
        return TestInitializer.initialize("deleteParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteParagraph");
        return TestInitializer.initialize("deleteParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteParagraph");
        return TestInitializer.initialize("deleteParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deleteParagraph");
        return TestInitializer.initialize("deleteParagraph", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteParagraph");
        return TestInitializer.initialize("deleteParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteParagraph");
        return TestInitializer.initialize("deleteParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteParagraph");
        return TestInitializer.initialize("deleteParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteParagraphs", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteParagraphs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteParagraphsRequest();
            return TestInitializer.assertValidCall(api.deleteParagraphs(request), false, "deleteParagraphs");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteParagraphs");
        return TestInitializer.initialize("deleteParagraphs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteParagraphs");
        return TestInitializer.initialize("deleteParagraphs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteParagraphs");
        return TestInitializer.initialize("deleteParagraphs", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteParagraphs");
        return TestInitializer.initialize("deleteParagraphs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphs test", () => {
        const field = "paragraphs";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.paragraphs = <Array<number>>TestInitializer.invalidizeValue(request.paragraphs, field, "Array&lt;number&gt;", "deleteParagraphs");
        return TestInitializer.initialize("deleteParagraphs", field, request.paragraphs).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field, request.paragraphs);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteParagraphs");
        return TestInitializer.initialize("deleteParagraphs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteParagraphs");
        return TestInitializer.initialize("deleteParagraphs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteParagraphs");
        return TestInitializer.initialize("deleteParagraphs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deletePortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("deletePortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeletePortionRequest();
            return TestInitializer.assertValidCall(api.deletePortion(request), false, "deletePortion");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeletePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deletePortion");
        return TestInitializer.initialize("deletePortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeletePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deletePortion");
        return TestInitializer.initialize("deletePortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeletePortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deletePortion");
        return TestInitializer.initialize("deletePortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeletePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deletePortion");
        return TestInitializer.initialize("deletePortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeletePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deletePortion");
        return TestInitializer.initialize("deletePortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getDeletePortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "deletePortion");
        return TestInitializer.initialize("deletePortion", field, request.portionIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field, request.portionIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeletePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deletePortion");
        return TestInitializer.initialize("deletePortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeletePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deletePortion");
        return TestInitializer.initialize("deletePortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeletePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deletePortion");
        return TestInitializer.initialize("deletePortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deletePortions", () => {
    it("main test", () => {
        return TestInitializer.initialize("deletePortions", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeletePortionsRequest();
            return TestInitializer.assertValidCall(api.deletePortions(request), false, "deletePortions");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeletePortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deletePortions");
        return TestInitializer.initialize("deletePortions", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeletePortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deletePortions");
        return TestInitializer.initialize("deletePortions", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeletePortionsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deletePortions");
        return TestInitializer.initialize("deletePortions", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeletePortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deletePortions");
        return TestInitializer.initialize("deletePortions", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeletePortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deletePortions");
        return TestInitializer.initialize("deletePortions", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid portions test", () => {
        const field = "portions";
        const request = TestUtils.getDeletePortionsRequest();
        request.portions = <Array<number>>TestInitializer.invalidizeValue(request.portions, field, "Array&lt;number&gt;", "deletePortions");
        return TestInitializer.initialize("deletePortions", field, request.portions).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field, request.portions);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeletePortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deletePortions");
        return TestInitializer.initialize("deletePortions", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeletePortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deletePortions");
        return TestInitializer.initialize("deletePortions", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeletePortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deletePortions");
        return TestInitializer.initialize("deletePortions", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteSlideAnimation", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlideAnimation", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteSlideAnimationRequest();
            return TestInitializer.assertValidCall(api.deleteSlideAnimation(request), false, "deleteSlideAnimation");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideAnimationRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideAnimation");
        return TestInitializer.initialize("deleteSlideAnimation", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimation(request), "deleteSlideAnimation", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideAnimationRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideAnimation");
        return TestInitializer.initialize("deleteSlideAnimation", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimation(request), "deleteSlideAnimation", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideAnimationRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideAnimation");
        return TestInitializer.initialize("deleteSlideAnimation", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimation(request), "deleteSlideAnimation", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideAnimationRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideAnimation");
        return TestInitializer.initialize("deleteSlideAnimation", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimation(request), "deleteSlideAnimation", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideAnimationRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideAnimation");
        return TestInitializer.initialize("deleteSlideAnimation", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimation(request), "deleteSlideAnimation", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteSlideAnimationEffect", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlideAnimationEffect", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteSlideAnimationEffectRequest();
            return TestInitializer.assertValidCall(api.deleteSlideAnimationEffect(request), false, "deleteSlideAnimationEffect");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideAnimationEffectRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideAnimationEffect");
        return TestInitializer.initialize("deleteSlideAnimationEffect", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationEffect(request), "deleteSlideAnimationEffect", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideAnimationEffectRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideAnimationEffect");
        return TestInitializer.initialize("deleteSlideAnimationEffect", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationEffect(request), "deleteSlideAnimationEffect", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid effectIndex test", () => {
        const field = "effectIndex";
        const request = TestUtils.getDeleteSlideAnimationEffectRequest();
        request.effectIndex = <number>TestInitializer.invalidizeValue(request.effectIndex, field, "number", "deleteSlideAnimationEffect");
        return TestInitializer.initialize("deleteSlideAnimationEffect", field, request.effectIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationEffect(request), "deleteSlideAnimationEffect", field, request.effectIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideAnimationEffectRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideAnimationEffect");
        return TestInitializer.initialize("deleteSlideAnimationEffect", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationEffect(request), "deleteSlideAnimationEffect", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideAnimationEffectRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideAnimationEffect");
        return TestInitializer.initialize("deleteSlideAnimationEffect", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationEffect(request), "deleteSlideAnimationEffect", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideAnimationEffectRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideAnimationEffect");
        return TestInitializer.initialize("deleteSlideAnimationEffect", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationEffect(request), "deleteSlideAnimationEffect", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteSlideAnimationInteractiveSequence", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
            return TestInitializer.assertValidCall(api.deleteSlideAnimationInteractiveSequence(request), false, "deleteSlideAnimationInteractiveSequence");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideAnimationInteractiveSequence");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequence(request), "deleteSlideAnimationInteractiveSequence", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideAnimationInteractiveSequence");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequence(request), "deleteSlideAnimationInteractiveSequence", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid sequenceIndex test", () => {
        const field = "sequenceIndex";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
        request.sequenceIndex = <number>TestInitializer.invalidizeValue(request.sequenceIndex, field, "number", "deleteSlideAnimationInteractiveSequence");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", field, request.sequenceIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequence(request), "deleteSlideAnimationInteractiveSequence", field, request.sequenceIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideAnimationInteractiveSequence");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequence(request), "deleteSlideAnimationInteractiveSequence", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideAnimationInteractiveSequence");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequence(request), "deleteSlideAnimationInteractiveSequence", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideAnimationInteractiveSequence");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequence(request), "deleteSlideAnimationInteractiveSequence", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteSlideAnimationInteractiveSequenceEffect", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
            return TestInitializer.assertValidCall(api.deleteSlideAnimationInteractiveSequenceEffect(request), false, "deleteSlideAnimationInteractiveSequenceEffect");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid sequenceIndex test", () => {
        const field = "sequenceIndex";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.sequenceIndex = <number>TestInitializer.invalidizeValue(request.sequenceIndex, field, "number", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.sequenceIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.sequenceIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid effectIndex test", () => {
        const field = "effectIndex";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.effectIndex = <number>TestInitializer.invalidizeValue(request.effectIndex, field, "number", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.effectIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.effectIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteSlideAnimationInteractiveSequences", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequences", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteSlideAnimationInteractiveSequencesRequest();
            return TestInitializer.assertValidCall(api.deleteSlideAnimationInteractiveSequences(request), false, "deleteSlideAnimationInteractiveSequences");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequencesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideAnimationInteractiveSequences");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequences", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequences(request), "deleteSlideAnimationInteractiveSequences", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequencesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideAnimationInteractiveSequences");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequences", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequences(request), "deleteSlideAnimationInteractiveSequences", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequencesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideAnimationInteractiveSequences");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequences", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequences(request), "deleteSlideAnimationInteractiveSequences", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequencesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideAnimationInteractiveSequences");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequences", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequences(request), "deleteSlideAnimationInteractiveSequences", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequencesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideAnimationInteractiveSequences");
        return TestInitializer.initialize("deleteSlideAnimationInteractiveSequences", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationInteractiveSequences(request), "deleteSlideAnimationInteractiveSequences", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteSlideAnimationMainSequence", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlideAnimationMainSequence", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteSlideAnimationMainSequenceRequest();
            return TestInitializer.assertValidCall(api.deleteSlideAnimationMainSequence(request), false, "deleteSlideAnimationMainSequence");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideAnimationMainSequenceRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideAnimationMainSequence");
        return TestInitializer.initialize("deleteSlideAnimationMainSequence", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationMainSequence(request), "deleteSlideAnimationMainSequence", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideAnimationMainSequenceRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideAnimationMainSequence");
        return TestInitializer.initialize("deleteSlideAnimationMainSequence", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationMainSequence(request), "deleteSlideAnimationMainSequence", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideAnimationMainSequenceRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideAnimationMainSequence");
        return TestInitializer.initialize("deleteSlideAnimationMainSequence", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationMainSequence(request), "deleteSlideAnimationMainSequence", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideAnimationMainSequenceRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideAnimationMainSequence");
        return TestInitializer.initialize("deleteSlideAnimationMainSequence", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationMainSequence(request), "deleteSlideAnimationMainSequence", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideAnimationMainSequenceRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideAnimationMainSequence");
        return TestInitializer.initialize("deleteSlideAnimationMainSequence", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideAnimationMainSequence(request), "deleteSlideAnimationMainSequence", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteSlideByIndex", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlideByIndex", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteSlideByIndexRequest();
            return TestInitializer.assertValidCall(api.deleteSlideByIndex(request), false, "deleteSlideByIndex");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideByIndex");
        return TestInitializer.initialize("deleteSlideByIndex", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideByIndex(request), "deleteSlideByIndex", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideByIndex");
        return TestInitializer.initialize("deleteSlideByIndex", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideByIndex(request), "deleteSlideByIndex", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideByIndex");
        return TestInitializer.initialize("deleteSlideByIndex", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideByIndex(request), "deleteSlideByIndex", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideByIndex");
        return TestInitializer.initialize("deleteSlideByIndex", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideByIndex(request), "deleteSlideByIndex", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideByIndex");
        return TestInitializer.initialize("deleteSlideByIndex", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideByIndex(request), "deleteSlideByIndex", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteSlideShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlideShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteSlideShapeRequest();
            return TestInitializer.assertValidCall(api.deleteSlideShape(request), false, "deleteSlideShape");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideShape");
        return TestInitializer.initialize("deleteSlideShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideShape");
        return TestInitializer.initialize("deleteSlideShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteSlideShape");
        return TestInitializer.initialize("deleteSlideShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteSlideShape");
        return TestInitializer.initialize("deleteSlideShape", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideShape");
        return TestInitializer.initialize("deleteSlideShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideShape");
        return TestInitializer.initialize("deleteSlideShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideShape");
        return TestInitializer.initialize("deleteSlideShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteSlideShapes", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlideShapes", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteSlideShapesRequest();
            return TestInitializer.assertValidCall(api.deleteSlideShapes(request), false, "deleteSlideShapes");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideShapes");
        return TestInitializer.initialize("deleteSlideShapes", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideShapes");
        return TestInitializer.initialize("deleteSlideShapes", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteSlideShapes");
        return TestInitializer.initialize("deleteSlideShapes", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapes test", () => {
        const field = "shapes";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.shapes = <Array<number>>TestInitializer.invalidizeValue(request.shapes, field, "Array&lt;number&gt;", "deleteSlideShapes");
        return TestInitializer.initialize("deleteSlideShapes", field, request.shapes).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field, request.shapes);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideShapes");
        return TestInitializer.initialize("deleteSlideShapes", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideShapes");
        return TestInitializer.initialize("deleteSlideShapes", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideShapes");
        return TestInitializer.initialize("deleteSlideShapes", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteSlidesCleanSlidesList", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlidesCleanSlidesList", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
            return TestInitializer.assertValidCall(api.deleteSlidesCleanSlidesList(request), false, "deleteSlidesCleanSlidesList");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlidesCleanSlidesList");
        return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slides test", () => {
        const field = "slides";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.slides = <Array<number>>TestInitializer.invalidizeValue(request.slides, field, "Array&lt;number&gt;", "deleteSlidesCleanSlidesList");
        return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.slides).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field, request.slides);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlidesCleanSlidesList");
        return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlidesCleanSlidesList");
        return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlidesCleanSlidesList");
        return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteSlidesDocumentProperties", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlidesDocumentProperties", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
            return TestInitializer.assertValidCall(api.deleteSlidesDocumentProperties(request), false, "deleteSlidesDocumentProperties");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlidesDocumentProperties");
        return TestInitializer.initialize("deleteSlidesDocumentProperties", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperties(request), "deleteSlidesDocumentProperties", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlidesDocumentProperties");
        return TestInitializer.initialize("deleteSlidesDocumentProperties", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperties(request), "deleteSlidesDocumentProperties", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlidesDocumentProperties");
        return TestInitializer.initialize("deleteSlidesDocumentProperties", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperties(request), "deleteSlidesDocumentProperties", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlidesDocumentProperties");
        return TestInitializer.initialize("deleteSlidesDocumentProperties", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperties(request), "deleteSlidesDocumentProperties", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteSlidesDocumentProperty", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlidesDocumentProperty", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
            return TestInitializer.assertValidCall(api.deleteSlidesDocumentProperty(request), false, "deleteSlidesDocumentProperty");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlidesDocumentProperty");
        return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid propertyName test", () => {
        const field = "propertyName";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.propertyName = <string>TestInitializer.invalidizeValue(request.propertyName, field, "string", "deleteSlidesDocumentProperty");
        return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.propertyName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field, request.propertyName);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlidesDocumentProperty");
        return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlidesDocumentProperty");
        return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlidesDocumentProperty");
        return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for deleteSlidesSlideBackground", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlidesSlideBackground", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
            return TestInitializer.assertValidCall(api.deleteSlidesSlideBackground(request), false, "deleteSlidesSlideBackground");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlidesSlideBackground");
        return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlidesSlideBackground");
        return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlidesSlideBackground");
        return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlidesSlideBackground");
        return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlidesSlideBackground");
        return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for downloadFile", () => {
    it("main test", () => {
        return TestInitializer.initialize("downloadFile", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getDownloadFileRequest();
            return TestInitializer.assertValidCall(api.downloadFile(request), true, "downloadFile");
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDownloadFileRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "downloadFile");
        return TestInitializer.initialize("downloadFile", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.downloadFile(request), "downloadFile", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getDownloadFileRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "downloadFile");
        return TestInitializer.initialize("downloadFile", field, request.storageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.downloadFile(request), "downloadFile", field, request.storageName);
        }).catch((err) => assert.fail(err));
    });

    it("invalid versionId test", () => {
        const field = "versionId";
        const request = TestUtils.getDownloadFileRequest();
        request.versionId = <string>TestInitializer.invalidizeValue(request.versionId, field, "string", "downloadFile");
        return TestInitializer.initialize("downloadFile", field, request.versionId).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.downloadFile(request), "downloadFile", field, request.versionId);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getDiscUsage", () => {
    it("main test", () => {
        return TestInitializer.initialize("getDiscUsage", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetDiscUsageRequest();
            return TestInitializer.assertValidCall(api.getDiscUsage(request), false, "getDiscUsage");
        }).catch((err) => assert.fail(err));
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getGetDiscUsageRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "getDiscUsage");
        return TestInitializer.initialize("getDiscUsage", field, request.storageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getDiscUsage(request), "getDiscUsage", field, request.storageName);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getFileVersions", () => {
    it("main test", () => {
        return TestInitializer.initialize("getFileVersions", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetFileVersionsRequest();
            return TestInitializer.assertValidCall(api.getFileVersions(request), false, "getFileVersions");
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetFileVersionsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getFileVersions");
        return TestInitializer.initialize("getFileVersions", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getFileVersions(request), "getFileVersions", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getGetFileVersionsRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "getFileVersions");
        return TestInitializer.initialize("getFileVersions", field, request.storageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getFileVersions(request), "getFileVersions", field, request.storageName);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getFilesList", () => {
    it("main test", () => {
        return TestInitializer.initialize("getFilesList", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetFilesListRequest();
            return TestInitializer.assertValidCall(api.getFilesList(request), false, "getFilesList");
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetFilesListRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getFilesList");
        return TestInitializer.initialize("getFilesList", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getFilesList(request), "getFilesList", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getGetFilesListRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "getFilesList");
        return TestInitializer.initialize("getFilesList", field, request.storageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getFilesList(request), "getFilesList", field, request.storageName);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getLayoutSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("getLayoutSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetLayoutSlideRequest();
            return TestInitializer.assertValidCall(api.getLayoutSlide(request), false, "getLayoutSlide");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getLayoutSlide");
        return TestInitializer.initialize("getLayoutSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlide(request), "getLayoutSlide", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getLayoutSlide");
        return TestInitializer.initialize("getLayoutSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlide(request), "getLayoutSlide", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getLayoutSlide");
        return TestInitializer.initialize("getLayoutSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlide(request), "getLayoutSlide", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getLayoutSlide");
        return TestInitializer.initialize("getLayoutSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlide(request), "getLayoutSlide", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getLayoutSlide");
        return TestInitializer.initialize("getLayoutSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlide(request), "getLayoutSlide", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getLayoutSlidesList", () => {
    it("main test", () => {
        return TestInitializer.initialize("getLayoutSlidesList", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetLayoutSlidesListRequest();
            return TestInitializer.assertValidCall(api.getLayoutSlidesList(request), false, "getLayoutSlidesList");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetLayoutSlidesListRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getLayoutSlidesList");
        return TestInitializer.initialize("getLayoutSlidesList", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlidesList(request), "getLayoutSlidesList", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetLayoutSlidesListRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getLayoutSlidesList");
        return TestInitializer.initialize("getLayoutSlidesList", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlidesList(request), "getLayoutSlidesList", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetLayoutSlidesListRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getLayoutSlidesList");
        return TestInitializer.initialize("getLayoutSlidesList", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlidesList(request), "getLayoutSlidesList", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetLayoutSlidesListRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getLayoutSlidesList");
        return TestInitializer.initialize("getLayoutSlidesList", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlidesList(request), "getLayoutSlidesList", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getMasterSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("getMasterSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetMasterSlideRequest();
            return TestInitializer.assertValidCall(api.getMasterSlide(request), false, "getMasterSlide");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetMasterSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getMasterSlide");
        return TestInitializer.initialize("getMasterSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlide(request), "getMasterSlide", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetMasterSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getMasterSlide");
        return TestInitializer.initialize("getMasterSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlide(request), "getMasterSlide", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetMasterSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getMasterSlide");
        return TestInitializer.initialize("getMasterSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlide(request), "getMasterSlide", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetMasterSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getMasterSlide");
        return TestInitializer.initialize("getMasterSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlide(request), "getMasterSlide", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetMasterSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getMasterSlide");
        return TestInitializer.initialize("getMasterSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlide(request), "getMasterSlide", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getMasterSlidesList", () => {
    it("main test", () => {
        return TestInitializer.initialize("getMasterSlidesList", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetMasterSlidesListRequest();
            return TestInitializer.assertValidCall(api.getMasterSlidesList(request), false, "getMasterSlidesList");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetMasterSlidesListRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getMasterSlidesList");
        return TestInitializer.initialize("getMasterSlidesList", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlidesList(request), "getMasterSlidesList", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetMasterSlidesListRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getMasterSlidesList");
        return TestInitializer.initialize("getMasterSlidesList", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlidesList(request), "getMasterSlidesList", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetMasterSlidesListRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getMasterSlidesList");
        return TestInitializer.initialize("getMasterSlidesList", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlidesList(request), "getMasterSlidesList", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetMasterSlidesListRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getMasterSlidesList");
        return TestInitializer.initialize("getMasterSlidesList", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlidesList(request), "getMasterSlidesList", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getNotesSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideRequest();
            return TestInitializer.assertValidCall(api.getNotesSlide(request), false, "getNotesSlide");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlide");
        return TestInitializer.initialize("getNotesSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlide(request), "getNotesSlide", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlide");
        return TestInitializer.initialize("getNotesSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlide(request), "getNotesSlide", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlide");
        return TestInitializer.initialize("getNotesSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlide(request), "getNotesSlide", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlide");
        return TestInitializer.initialize("getNotesSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlide(request), "getNotesSlide", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlide");
        return TestInitializer.initialize("getNotesSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlide(request), "getNotesSlide", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getNotesSlideShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideShapeRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideShape(request), false, "getNotesSlideShape");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideShape");
        return TestInitializer.initialize("getNotesSlideShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideShape");
        return TestInitializer.initialize("getNotesSlideShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getNotesSlideShape");
        return TestInitializer.initialize("getNotesSlideShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getNotesSlideShape");
        return TestInitializer.initialize("getNotesSlideShape", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideShape");
        return TestInitializer.initialize("getNotesSlideShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideShape");
        return TestInitializer.initialize("getNotesSlideShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideShape");
        return TestInitializer.initialize("getNotesSlideShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getNotesSlideShapeParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideShapeParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideShapeParagraph(request), false, "getNotesSlideShapeParagraph");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideShapeParagraph");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideShapeParagraph");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getNotesSlideShapeParagraph");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getNotesSlideShapeParagraph");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getNotesSlideShapeParagraph");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideShapeParagraph");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideShapeParagraph");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideShapeParagraph");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getNotesSlideShapeParagraphs", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideShapeParagraphs(request), false, "getNotesSlideShapeParagraphs");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideShapeParagraphs");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideShapeParagraphs");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getNotesSlideShapeParagraphs");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getNotesSlideShapeParagraphs");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideShapeParagraphs");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideShapeParagraphs");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideShapeParagraphs");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getNotesSlideShapePortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideShapePortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideShapePortionRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideShapePortion(request), false, "getNotesSlideShapePortion");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideShapePortion");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideShapePortion");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getNotesSlideShapePortion");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getNotesSlideShapePortion");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getNotesSlideShapePortion");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "getNotesSlideShapePortion");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.portionIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.portionIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideShapePortion");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideShapePortion");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideShapePortion");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getNotesSlideShapePortions", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideShapePortions", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideShapePortionsRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideShapePortions(request), false, "getNotesSlideShapePortions");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideShapePortions");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideShapePortions");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getNotesSlideShapePortions");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getNotesSlideShapePortions");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getNotesSlideShapePortions");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideShapePortions");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideShapePortions");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideShapePortions");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getNotesSlideShapes", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideShapes", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideShapesRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideShapes(request), false, "getNotesSlideShapes");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideShapes");
        return TestInitializer.initialize("getNotesSlideShapes", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapes(request), "getNotesSlideShapes", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideShapes");
        return TestInitializer.initialize("getNotesSlideShapes", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapes(request), "getNotesSlideShapes", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getNotesSlideShapes");
        return TestInitializer.initialize("getNotesSlideShapes", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapes(request), "getNotesSlideShapes", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideShapes");
        return TestInitializer.initialize("getNotesSlideShapes", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapes(request), "getNotesSlideShapes", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideShapes");
        return TestInitializer.initialize("getNotesSlideShapes", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapes(request), "getNotesSlideShapes", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideShapes");
        return TestInitializer.initialize("getNotesSlideShapes", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapes(request), "getNotesSlideShapes", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getNotesSlideWithFormat", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideWithFormat", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideWithFormatRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideWithFormat(request), true, "getNotesSlideWithFormat");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideWithFormat");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideWithFormat");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "getNotesSlideWithFormat");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.format);
        }).catch((err) => assert.fail(err));
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number", "getNotesSlideWithFormat");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.width).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.width);
        }).catch((err) => assert.fail(err));
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number", "getNotesSlideWithFormat");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.height).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.height);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideWithFormat");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideWithFormat");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideWithFormat");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "getNotesSlideWithFormat");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.fontsFolder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getParagraphPortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("getParagraphPortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetParagraphPortionRequest();
            return TestInitializer.assertValidCall(api.getParagraphPortion(request), false, "getParagraphPortion");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getParagraphPortion");
        return TestInitializer.initialize("getParagraphPortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getParagraphPortion");
        return TestInitializer.initialize("getParagraphPortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getParagraphPortion");
        return TestInitializer.initialize("getParagraphPortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getParagraphPortion");
        return TestInitializer.initialize("getParagraphPortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getParagraphPortion");
        return TestInitializer.initialize("getParagraphPortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "getParagraphPortion");
        return TestInitializer.initialize("getParagraphPortion", field, request.portionIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field, request.portionIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getParagraphPortion");
        return TestInitializer.initialize("getParagraphPortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getParagraphPortion");
        return TestInitializer.initialize("getParagraphPortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getParagraphPortion");
        return TestInitializer.initialize("getParagraphPortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getParagraphPortions", () => {
    it("main test", () => {
        return TestInitializer.initialize("getParagraphPortions", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetParagraphPortionsRequest();
            return TestInitializer.assertValidCall(api.getParagraphPortions(request), false, "getParagraphPortions");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getParagraphPortions");
        return TestInitializer.initialize("getParagraphPortions", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getParagraphPortions");
        return TestInitializer.initialize("getParagraphPortions", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getParagraphPortions");
        return TestInitializer.initialize("getParagraphPortions", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getParagraphPortions");
        return TestInitializer.initialize("getParagraphPortions", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getParagraphPortions");
        return TestInitializer.initialize("getParagraphPortions", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getParagraphPortions");
        return TestInitializer.initialize("getParagraphPortions", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getParagraphPortions");
        return TestInitializer.initialize("getParagraphPortions", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getParagraphPortions");
        return TestInitializer.initialize("getParagraphPortions", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlideAnimation", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlideAnimation", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlideAnimationRequest();
            return TestInitializer.assertValidCall(api.getSlideAnimation(request), false, "getSlideAnimation");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideAnimationRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideAnimation");
        return TestInitializer.initialize("getSlideAnimation", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideAnimation(request), "getSlideAnimation", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideAnimationRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideAnimation");
        return TestInitializer.initialize("getSlideAnimation", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideAnimation(request), "getSlideAnimation", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSlideAnimationRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getSlideAnimation");
        return TestInitializer.initialize("getSlideAnimation", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideAnimation(request), "getSlideAnimation", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideAnimationRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideAnimation");
        return TestInitializer.initialize("getSlideAnimation", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideAnimation(request), "getSlideAnimation", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideAnimationRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideAnimation");
        return TestInitializer.initialize("getSlideAnimation", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideAnimation(request), "getSlideAnimation", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideAnimationRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideAnimation");
        return TestInitializer.initialize("getSlideAnimation", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideAnimation(request), "getSlideAnimation", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlideShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlideShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlideShapeRequest();
            return TestInitializer.assertValidCall(api.getSlideShape(request), false, "getSlideShape");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideShape");
        return TestInitializer.initialize("getSlideShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideShape");
        return TestInitializer.initialize("getSlideShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetSlideShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getSlideShape");
        return TestInitializer.initialize("getSlideShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getSlideShape");
        return TestInitializer.initialize("getSlideShape", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideShape");
        return TestInitializer.initialize("getSlideShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideShape");
        return TestInitializer.initialize("getSlideShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideShape");
        return TestInitializer.initialize("getSlideShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlideShapeParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlideShapeParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlideShapeParagraphRequest();
            return TestInitializer.assertValidCall(api.getSlideShapeParagraph(request), false, "getSlideShapeParagraph");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideShapeParagraph");
        return TestInitializer.initialize("getSlideShapeParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideShapeParagraph");
        return TestInitializer.initialize("getSlideShapeParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getSlideShapeParagraph");
        return TestInitializer.initialize("getSlideShapeParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getSlideShapeParagraph");
        return TestInitializer.initialize("getSlideShapeParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getSlideShapeParagraph");
        return TestInitializer.initialize("getSlideShapeParagraph", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideShapeParagraph");
        return TestInitializer.initialize("getSlideShapeParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideShapeParagraph");
        return TestInitializer.initialize("getSlideShapeParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideShapeParagraph");
        return TestInitializer.initialize("getSlideShapeParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlideShapeParagraphs", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlideShapeParagraphs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlideShapeParagraphsRequest();
            return TestInitializer.assertValidCall(api.getSlideShapeParagraphs(request), false, "getSlideShapeParagraphs");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideShapeParagraphs");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideShapeParagraphs");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getSlideShapeParagraphs");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getSlideShapeParagraphs");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideShapeParagraphs");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideShapeParagraphs");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideShapeParagraphs");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlideShapes", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlideShapes", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlideShapesRequest();
            return TestInitializer.assertValidCall(api.getSlideShapes(request), false, "getSlideShapes");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideShapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideShapes");
        return TestInitializer.initialize("getSlideShapes", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapes(request), "getSlideShapes", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideShapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideShapes");
        return TestInitializer.initialize("getSlideShapes", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapes(request), "getSlideShapes", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetSlideShapesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getSlideShapes");
        return TestInitializer.initialize("getSlideShapes", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapes(request), "getSlideShapes", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideShapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideShapes");
        return TestInitializer.initialize("getSlideShapes", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapes(request), "getSlideShapes", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideShapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideShapes");
        return TestInitializer.initialize("getSlideShapes", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapes(request), "getSlideShapes", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideShapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideShapes");
        return TestInitializer.initialize("getSlideShapes", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapes(request), "getSlideShapes", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesApiInfo", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesApiInfo", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesApiInfoRequest();
            return TestInitializer.assertValidCall(api.getSlidesApiInfo(request), false, "getSlidesApiInfo");
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesDocument", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesDocument", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesDocumentRequest();
            return TestInitializer.assertValidCall(api.getSlidesDocument(request), false, "getSlidesDocument");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesDocumentRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesDocument");
        return TestInitializer.initialize("getSlidesDocument", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocument(request), "getSlidesDocument", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesDocumentRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesDocument");
        return TestInitializer.initialize("getSlidesDocument", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocument(request), "getSlidesDocument", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesDocumentRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesDocument");
        return TestInitializer.initialize("getSlidesDocument", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocument(request), "getSlidesDocument", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesDocumentRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesDocument");
        return TestInitializer.initialize("getSlidesDocument", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocument(request), "getSlidesDocument", field, request.folder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesDocumentProperties", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesDocumentProperties", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
            return TestInitializer.assertValidCall(api.getSlidesDocumentProperties(request), false, "getSlidesDocumentProperties");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesDocumentProperties");
        return TestInitializer.initialize("getSlidesDocumentProperties", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperties(request), "getSlidesDocumentProperties", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesDocumentProperties");
        return TestInitializer.initialize("getSlidesDocumentProperties", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperties(request), "getSlidesDocumentProperties", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesDocumentProperties");
        return TestInitializer.initialize("getSlidesDocumentProperties", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperties(request), "getSlidesDocumentProperties", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesDocumentProperties");
        return TestInitializer.initialize("getSlidesDocumentProperties", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperties(request), "getSlidesDocumentProperties", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesDocumentProperty", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesDocumentProperty", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesDocumentPropertyRequest();
            return TestInitializer.assertValidCall(api.getSlidesDocumentProperty(request), false, "getSlidesDocumentProperty");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesDocumentProperty");
        return TestInitializer.initialize("getSlidesDocumentProperty", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid propertyName test", () => {
        const field = "propertyName";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.propertyName = <string>TestInitializer.invalidizeValue(request.propertyName, field, "string", "getSlidesDocumentProperty");
        return TestInitializer.initialize("getSlidesDocumentProperty", field, request.propertyName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field, request.propertyName);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesDocumentProperty");
        return TestInitializer.initialize("getSlidesDocumentProperty", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesDocumentProperty");
        return TestInitializer.initialize("getSlidesDocumentProperty", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesDocumentProperty");
        return TestInitializer.initialize("getSlidesDocumentProperty", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesImageWithDefaultFormat", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesImageWithDefaultFormat", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesImageWithDefaultFormatRequest();
            return TestInitializer.assertValidCall(api.getSlidesImageWithDefaultFormat(request), true, "getSlidesImageWithDefaultFormat");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesImageWithDefaultFormatRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesImageWithDefaultFormat");
        return TestInitializer.initialize("getSlidesImageWithDefaultFormat", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithDefaultFormat(request), "getSlidesImageWithDefaultFormat", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid index test", () => {
        const field = "index";
        const request = TestUtils.getGetSlidesImageWithDefaultFormatRequest();
        request.index = <number>TestInitializer.invalidizeValue(request.index, field, "number", "getSlidesImageWithDefaultFormat");
        return TestInitializer.initialize("getSlidesImageWithDefaultFormat", field, request.index).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithDefaultFormat(request), "getSlidesImageWithDefaultFormat", field, request.index);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesImageWithDefaultFormatRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesImageWithDefaultFormat");
        return TestInitializer.initialize("getSlidesImageWithDefaultFormat", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithDefaultFormat(request), "getSlidesImageWithDefaultFormat", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesImageWithDefaultFormatRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesImageWithDefaultFormat");
        return TestInitializer.initialize("getSlidesImageWithDefaultFormat", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithDefaultFormat(request), "getSlidesImageWithDefaultFormat", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesImageWithDefaultFormatRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesImageWithDefaultFormat");
        return TestInitializer.initialize("getSlidesImageWithDefaultFormat", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithDefaultFormat(request), "getSlidesImageWithDefaultFormat", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesImageWithFormat", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesImageWithFormat", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesImageWithFormatRequest();
            return TestInitializer.assertValidCall(api.getSlidesImageWithFormat(request), true, "getSlidesImageWithFormat");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesImageWithFormat");
        return TestInitializer.initialize("getSlidesImageWithFormat", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid index test", () => {
        const field = "index";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.index = <number>TestInitializer.invalidizeValue(request.index, field, "number", "getSlidesImageWithFormat");
        return TestInitializer.initialize("getSlidesImageWithFormat", field, request.index).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field, request.index);
        }).catch((err) => assert.fail(err));
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "getSlidesImageWithFormat");
        return TestInitializer.initialize("getSlidesImageWithFormat", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field, request.format);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesImageWithFormat");
        return TestInitializer.initialize("getSlidesImageWithFormat", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesImageWithFormat");
        return TestInitializer.initialize("getSlidesImageWithFormat", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesImageWithFormat");
        return TestInitializer.initialize("getSlidesImageWithFormat", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesImages", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesImages", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesImagesRequest();
            return TestInitializer.assertValidCall(api.getSlidesImages(request), false, "getSlidesImages");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesImagesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesImages");
        return TestInitializer.initialize("getSlidesImages", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImages(request), "getSlidesImages", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesImagesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesImages");
        return TestInitializer.initialize("getSlidesImages", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImages(request), "getSlidesImages", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesImagesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesImages");
        return TestInitializer.initialize("getSlidesImages", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImages(request), "getSlidesImages", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesImagesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesImages");
        return TestInitializer.initialize("getSlidesImages", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImages(request), "getSlidesImages", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesPlaceholder", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesPlaceholder", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesPlaceholderRequest();
            return TestInitializer.assertValidCall(api.getSlidesPlaceholder(request), false, "getSlidesPlaceholder");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesPlaceholder");
        return TestInitializer.initialize("getSlidesPlaceholder", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholder(request), "getSlidesPlaceholder", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesPlaceholder");
        return TestInitializer.initialize("getSlidesPlaceholder", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholder(request), "getSlidesPlaceholder", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid placeholderIndex test", () => {
        const field = "placeholderIndex";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.placeholderIndex = <number>TestInitializer.invalidizeValue(request.placeholderIndex, field, "number", "getSlidesPlaceholder");
        return TestInitializer.initialize("getSlidesPlaceholder", field, request.placeholderIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholder(request), "getSlidesPlaceholder", field, request.placeholderIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesPlaceholder");
        return TestInitializer.initialize("getSlidesPlaceholder", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholder(request), "getSlidesPlaceholder", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesPlaceholder");
        return TestInitializer.initialize("getSlidesPlaceholder", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholder(request), "getSlidesPlaceholder", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesPlaceholder");
        return TestInitializer.initialize("getSlidesPlaceholder", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholder(request), "getSlidesPlaceholder", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesPlaceholders", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesPlaceholders", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesPlaceholdersRequest();
            return TestInitializer.assertValidCall(api.getSlidesPlaceholders(request), false, "getSlidesPlaceholders");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesPlaceholders");
        return TestInitializer.initialize("getSlidesPlaceholders", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholders(request), "getSlidesPlaceholders", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesPlaceholders");
        return TestInitializer.initialize("getSlidesPlaceholders", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholders(request), "getSlidesPlaceholders", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesPlaceholders");
        return TestInitializer.initialize("getSlidesPlaceholders", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholders(request), "getSlidesPlaceholders", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesPlaceholders");
        return TestInitializer.initialize("getSlidesPlaceholders", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholders(request), "getSlidesPlaceholders", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesPlaceholders");
        return TestInitializer.initialize("getSlidesPlaceholders", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholders(request), "getSlidesPlaceholders", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesPresentationTextItems", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesPresentationTextItems", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
            return TestInitializer.assertValidCall(api.getSlidesPresentationTextItems(request), false, "getSlidesPresentationTextItems");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesPresentationTextItems");
        return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid withEmpty test", () => {
        const field = "withEmpty";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.withEmpty = <boolean>TestInitializer.invalidizeValue(request.withEmpty, field, "boolean", "getSlidesPresentationTextItems");
        return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.withEmpty).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field, request.withEmpty);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesPresentationTextItems");
        return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesPresentationTextItems");
        return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesPresentationTextItems");
        return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesSlideRequest();
            return TestInitializer.assertValidCall(api.getSlidesSlide(request), false, "getSlidesSlide");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesSlide");
        return TestInitializer.initialize("getSlidesSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlide(request), "getSlidesSlide", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesSlide");
        return TestInitializer.initialize("getSlidesSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlide(request), "getSlidesSlide", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesSlide");
        return TestInitializer.initialize("getSlidesSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlide(request), "getSlidesSlide", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesSlide");
        return TestInitializer.initialize("getSlidesSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlide(request), "getSlidesSlide", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesSlide");
        return TestInitializer.initialize("getSlidesSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlide(request), "getSlidesSlide", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesSlideBackground", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesSlideBackground", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesSlideBackgroundRequest();
            return TestInitializer.assertValidCall(api.getSlidesSlideBackground(request), false, "getSlidesSlideBackground");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesSlideBackground");
        return TestInitializer.initialize("getSlidesSlideBackground", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideBackground(request), "getSlidesSlideBackground", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesSlideBackground");
        return TestInitializer.initialize("getSlidesSlideBackground", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideBackground(request), "getSlidesSlideBackground", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesSlideBackground");
        return TestInitializer.initialize("getSlidesSlideBackground", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideBackground(request), "getSlidesSlideBackground", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesSlideBackground");
        return TestInitializer.initialize("getSlidesSlideBackground", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideBackground(request), "getSlidesSlideBackground", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesSlideBackground");
        return TestInitializer.initialize("getSlidesSlideBackground", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideBackground(request), "getSlidesSlideBackground", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesSlideComments", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesSlideComments", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesSlideCommentsRequest();
            return TestInitializer.assertValidCall(api.getSlidesSlideComments(request), false, "getSlidesSlideComments");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesSlideComments");
        return TestInitializer.initialize("getSlidesSlideComments", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideComments(request), "getSlidesSlideComments", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesSlideComments");
        return TestInitializer.initialize("getSlidesSlideComments", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideComments(request), "getSlidesSlideComments", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesSlideComments");
        return TestInitializer.initialize("getSlidesSlideComments", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideComments(request), "getSlidesSlideComments", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesSlideComments");
        return TestInitializer.initialize("getSlidesSlideComments", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideComments(request), "getSlidesSlideComments", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesSlideComments");
        return TestInitializer.initialize("getSlidesSlideComments", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideComments(request), "getSlidesSlideComments", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesSlideImages", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesSlideImages", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesSlideImagesRequest();
            return TestInitializer.assertValidCall(api.getSlidesSlideImages(request), false, "getSlidesSlideImages");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesSlideImages");
        return TestInitializer.initialize("getSlidesSlideImages", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideImages(request), "getSlidesSlideImages", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesSlideImages");
        return TestInitializer.initialize("getSlidesSlideImages", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideImages(request), "getSlidesSlideImages", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesSlideImages");
        return TestInitializer.initialize("getSlidesSlideImages", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideImages(request), "getSlidesSlideImages", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesSlideImages");
        return TestInitializer.initialize("getSlidesSlideImages", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideImages(request), "getSlidesSlideImages", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesSlideImages");
        return TestInitializer.initialize("getSlidesSlideImages", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideImages(request), "getSlidesSlideImages", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesSlideTextItems", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesSlideTextItems", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesSlideTextItemsRequest();
            return TestInitializer.assertValidCall(api.getSlidesSlideTextItems(request), false, "getSlidesSlideTextItems");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesSlideTextItems");
        return TestInitializer.initialize("getSlidesSlideTextItems", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesSlideTextItems");
        return TestInitializer.initialize("getSlidesSlideTextItems", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid withEmpty test", () => {
        const field = "withEmpty";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.withEmpty = <boolean>TestInitializer.invalidizeValue(request.withEmpty, field, "boolean", "getSlidesSlideTextItems");
        return TestInitializer.initialize("getSlidesSlideTextItems", field, request.withEmpty).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field, request.withEmpty);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesSlideTextItems");
        return TestInitializer.initialize("getSlidesSlideTextItems", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesSlideTextItems");
        return TestInitializer.initialize("getSlidesSlideTextItems", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesSlideTextItems");
        return TestInitializer.initialize("getSlidesSlideTextItems", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesSlidesList", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesSlidesList", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesSlidesListRequest();
            return TestInitializer.assertValidCall(api.getSlidesSlidesList(request), false, "getSlidesSlidesList");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlidesListRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesSlidesList");
        return TestInitializer.initialize("getSlidesSlidesList", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlidesList(request), "getSlidesSlidesList", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlidesListRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesSlidesList");
        return TestInitializer.initialize("getSlidesSlidesList", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlidesList(request), "getSlidesSlidesList", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlidesListRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesSlidesList");
        return TestInitializer.initialize("getSlidesSlidesList", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlidesList(request), "getSlidesSlidesList", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlidesListRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesSlidesList");
        return TestInitializer.initialize("getSlidesSlidesList", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlidesList(request), "getSlidesSlidesList", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesTheme", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesTheme", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesThemeRequest();
            return TestInitializer.assertValidCall(api.getSlidesTheme(request), false, "getSlidesTheme");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesTheme");
        return TestInitializer.initialize("getSlidesTheme", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesTheme(request), "getSlidesTheme", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesTheme");
        return TestInitializer.initialize("getSlidesTheme", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesTheme(request), "getSlidesTheme", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesTheme");
        return TestInitializer.initialize("getSlidesTheme", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesTheme(request), "getSlidesTheme", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesTheme");
        return TestInitializer.initialize("getSlidesTheme", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesTheme(request), "getSlidesTheme", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesTheme");
        return TestInitializer.initialize("getSlidesTheme", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesTheme(request), "getSlidesTheme", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesThemeColorScheme", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesThemeColorScheme", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
            return TestInitializer.assertValidCall(api.getSlidesThemeColorScheme(request), false, "getSlidesThemeColorScheme");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesThemeColorScheme");
        return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesThemeColorScheme");
        return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesThemeColorScheme");
        return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesThemeColorScheme");
        return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesThemeColorScheme");
        return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesThemeFontScheme", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesThemeFontScheme", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
            return TestInitializer.assertValidCall(api.getSlidesThemeFontScheme(request), false, "getSlidesThemeFontScheme");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesThemeFontScheme");
        return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesThemeFontScheme");
        return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesThemeFontScheme");
        return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesThemeFontScheme");
        return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesThemeFontScheme");
        return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for getSlidesThemeFormatScheme", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesThemeFormatScheme", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
            return TestInitializer.assertValidCall(api.getSlidesThemeFormatScheme(request), false, "getSlidesThemeFormatScheme");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesThemeFormatScheme");
        return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesThemeFormatScheme");
        return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesThemeFormatScheme");
        return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesThemeFormatScheme");
        return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesThemeFormatScheme");
        return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for moveFile", () => {
    it("main test", () => {
        return TestInitializer.initialize("moveFile", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getMoveFileRequest();
            return TestInitializer.assertValidCall(api.moveFile(request), false, "moveFile");
        }).catch((err) => assert.fail(err));
    });

    it("invalid srcPath test", () => {
        const field = "srcPath";
        const request = TestUtils.getMoveFileRequest();
        request.srcPath = <string>TestInitializer.invalidizeValue(request.srcPath, field, "string", "moveFile");
        return TestInitializer.initialize("moveFile", field, request.srcPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.moveFile(request), "moveFile", field, request.srcPath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid destPath test", () => {
        const field = "destPath";
        const request = TestUtils.getMoveFileRequest();
        request.destPath = <string>TestInitializer.invalidizeValue(request.destPath, field, "string", "moveFile");
        return TestInitializer.initialize("moveFile", field, request.destPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.moveFile(request), "moveFile", field, request.destPath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid srcStorageName test", () => {
        const field = "srcStorageName";
        const request = TestUtils.getMoveFileRequest();
        request.srcStorageName = <string>TestInitializer.invalidizeValue(request.srcStorageName, field, "string", "moveFile");
        return TestInitializer.initialize("moveFile", field, request.srcStorageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.moveFile(request), "moveFile", field, request.srcStorageName);
        }).catch((err) => assert.fail(err));
    });

    it("invalid destStorageName test", () => {
        const field = "destStorageName";
        const request = TestUtils.getMoveFileRequest();
        request.destStorageName = <string>TestInitializer.invalidizeValue(request.destStorageName, field, "string", "moveFile");
        return TestInitializer.initialize("moveFile", field, request.destStorageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.moveFile(request), "moveFile", field, request.destStorageName);
        }).catch((err) => assert.fail(err));
    });

    it("invalid versionId test", () => {
        const field = "versionId";
        const request = TestUtils.getMoveFileRequest();
        request.versionId = <string>TestInitializer.invalidizeValue(request.versionId, field, "string", "moveFile");
        return TestInitializer.initialize("moveFile", field, request.versionId).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.moveFile(request), "moveFile", field, request.versionId);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for moveFolder", () => {
    it("main test", () => {
        return TestInitializer.initialize("moveFolder", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getMoveFolderRequest();
            return TestInitializer.assertValidCall(api.moveFolder(request), false, "moveFolder");
        }).catch((err) => assert.fail(err));
    });

    it("invalid srcPath test", () => {
        const field = "srcPath";
        const request = TestUtils.getMoveFolderRequest();
        request.srcPath = <string>TestInitializer.invalidizeValue(request.srcPath, field, "string", "moveFolder");
        return TestInitializer.initialize("moveFolder", field, request.srcPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.moveFolder(request), "moveFolder", field, request.srcPath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid destPath test", () => {
        const field = "destPath";
        const request = TestUtils.getMoveFolderRequest();
        request.destPath = <string>TestInitializer.invalidizeValue(request.destPath, field, "string", "moveFolder");
        return TestInitializer.initialize("moveFolder", field, request.destPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.moveFolder(request), "moveFolder", field, request.destPath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid srcStorageName test", () => {
        const field = "srcStorageName";
        const request = TestUtils.getMoveFolderRequest();
        request.srcStorageName = <string>TestInitializer.invalidizeValue(request.srcStorageName, field, "string", "moveFolder");
        return TestInitializer.initialize("moveFolder", field, request.srcStorageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.moveFolder(request), "moveFolder", field, request.srcStorageName);
        }).catch((err) => assert.fail(err));
    });

    it("invalid destStorageName test", () => {
        const field = "destStorageName";
        const request = TestUtils.getMoveFolderRequest();
        request.destStorageName = <string>TestInitializer.invalidizeValue(request.destStorageName, field, "string", "moveFolder");
        return TestInitializer.initialize("moveFolder", field, request.destStorageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.moveFolder(request), "moveFolder", field, request.destStorageName);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for objectExists", () => {
    it("main test", () => {
        return TestInitializer.initialize("objectExists", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getObjectExistsRequest();
            return TestInitializer.assertValidCall(api.objectExists(request), false, "objectExists");
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getObjectExistsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "objectExists");
        return TestInitializer.initialize("objectExists", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.objectExists(request), "objectExists", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getObjectExistsRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "objectExists");
        return TestInitializer.initialize("objectExists", field, request.storageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.objectExists(request), "objectExists", field, request.storageName);
        }).catch((err) => assert.fail(err));
    });

    it("invalid versionId test", () => {
        const field = "versionId";
        const request = TestUtils.getObjectExistsRequest();
        request.versionId = <string>TestInitializer.invalidizeValue(request.versionId, field, "string", "objectExists");
        return TestInitializer.initialize("objectExists", field, request.versionId).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.objectExists(request), "objectExists", field, request.versionId);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postAddNewParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("postAddNewParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostAddNewParagraphRequest();
            return TestInitializer.assertValidCall(api.postAddNewParagraph(request), false, "postAddNewParagraph");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postAddNewParagraph");
        return TestInitializer.initialize("postAddNewParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postAddNewParagraph");
        return TestInitializer.initialize("postAddNewParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "postAddNewParagraph");
        return TestInitializer.initialize("postAddNewParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postAddNewParagraph");
        return TestInitializer.initialize("postAddNewParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph", "postAddNewParagraph");
        return TestInitializer.initialize("postAddNewParagraph", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postAddNewParagraph");
        return TestInitializer.initialize("postAddNewParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postAddNewParagraph");
        return TestInitializer.initialize("postAddNewParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postAddNewParagraph");
        return TestInitializer.initialize("postAddNewParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postAddNewParagraph");
        return TestInitializer.initialize("postAddNewParagraph", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field, request.position);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postAddNewPortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("postAddNewPortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostAddNewPortionRequest();
            return TestInitializer.assertValidCall(api.postAddNewPortion(request), false, "postAddNewPortion");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postAddNewPortion");
        return TestInitializer.initialize("postAddNewPortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postAddNewPortion");
        return TestInitializer.initialize("postAddNewPortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "postAddNewPortion");
        return TestInitializer.initialize("postAddNewPortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postAddNewPortion");
        return TestInitializer.initialize("postAddNewPortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "postAddNewPortion");
        return TestInitializer.initialize("postAddNewPortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion", "postAddNewPortion");
        return TestInitializer.initialize("postAddNewPortion", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postAddNewPortion");
        return TestInitializer.initialize("postAddNewPortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postAddNewPortion");
        return TestInitializer.initialize("postAddNewPortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postAddNewPortion");
        return TestInitializer.initialize("postAddNewPortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postAddNewPortion");
        return TestInitializer.initialize("postAddNewPortion", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field, request.position);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postAddNewShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("postAddNewShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostAddNewShapeRequest();
            return TestInitializer.assertValidCall(api.postAddNewShape(request), false, "postAddNewShape");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postAddNewShape");
        return TestInitializer.initialize("postAddNewShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postAddNewShape");
        return TestInitializer.initialize("postAddNewShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "postAddNewShape");
        return TestInitializer.initialize("postAddNewShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase", "postAddNewShape");
        return TestInitializer.initialize("postAddNewShape", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postAddNewShape");
        return TestInitializer.initialize("postAddNewShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postAddNewShape");
        return TestInitializer.initialize("postAddNewShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postAddNewShape");
        return TestInitializer.initialize("postAddNewShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeToClone test", () => {
        const field = "shapeToClone";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.shapeToClone = <number>TestInitializer.invalidizeValue(request.shapeToClone, field, "number", "postAddNewShape");
        return TestInitializer.initialize("postAddNewShape", field, request.shapeToClone).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field, request.shapeToClone);
        }).catch((err) => assert.fail(err));
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postAddNewShape");
        return TestInitializer.initialize("postAddNewShape", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field, request.position);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postAddNotesSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("postAddNotesSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostAddNotesSlideRequest();
            return TestInitializer.assertValidCall(api.postAddNotesSlide(request), false, "postAddNotesSlide");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postAddNotesSlide");
        return TestInitializer.initialize("postAddNotesSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNotesSlide(request), "postAddNotesSlide", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postAddNotesSlide");
        return TestInitializer.initialize("postAddNotesSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNotesSlide(request), "postAddNotesSlide", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.dto = <model.NotesSlide>TestInitializer.invalidizeValue(request.dto, field, "NotesSlide", "postAddNotesSlide");
        return TestInitializer.initialize("postAddNotesSlide", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNotesSlide(request), "postAddNotesSlide", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postAddNotesSlide");
        return TestInitializer.initialize("postAddNotesSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNotesSlide(request), "postAddNotesSlide", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postAddNotesSlide");
        return TestInitializer.initialize("postAddNotesSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNotesSlide(request), "postAddNotesSlide", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postAddNotesSlide");
        return TestInitializer.initialize("postAddNotesSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNotesSlide(request), "postAddNotesSlide", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postCopyLayoutSlideFromSourcePresentation", () => {
    it("main test", () => {
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
            return TestInitializer.assertValidCall(api.postCopyLayoutSlideFromSourcePresentation(request), false, "postCopyLayoutSlideFromSourcePresentation");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid cloneFrom test", () => {
        const field = "cloneFrom";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.cloneFrom = <string>TestInitializer.invalidizeValue(request.cloneFrom, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.cloneFrom).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.cloneFrom);
        }).catch((err) => assert.fail(err));
    });

    it("invalid cloneFromPosition test", () => {
        const field = "cloneFromPosition";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.cloneFromPosition = <number>TestInitializer.invalidizeValue(request.cloneFromPosition, field, "number", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromPosition).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromPosition);
        }).catch((err) => assert.fail(err));
    });

    it("invalid cloneFromPassword test", () => {
        const field = "cloneFromPassword";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.cloneFromPassword = <string>TestInitializer.invalidizeValue(request.cloneFromPassword, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromPassword).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromPassword);
        }).catch((err) => assert.fail(err));
    });

    it("invalid cloneFromStorage test", () => {
        const field = "cloneFromStorage";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.cloneFromStorage = <string>TestInitializer.invalidizeValue(request.cloneFromStorage, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromStorage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromStorage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postCopyMasterSlideFromSourcePresentation", () => {
    it("main test", () => {
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
            return TestInitializer.assertValidCall(api.postCopyMasterSlideFromSourcePresentation(request), false, "postCopyMasterSlideFromSourcePresentation");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid cloneFrom test", () => {
        const field = "cloneFrom";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.cloneFrom = <string>TestInitializer.invalidizeValue(request.cloneFrom, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.cloneFrom).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.cloneFrom);
        }).catch((err) => assert.fail(err));
    });

    it("invalid cloneFromPosition test", () => {
        const field = "cloneFromPosition";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.cloneFromPosition = <number>TestInitializer.invalidizeValue(request.cloneFromPosition, field, "number", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.cloneFromPosition).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.cloneFromPosition);
        }).catch((err) => assert.fail(err));
    });

    it("invalid cloneFromPassword test", () => {
        const field = "cloneFromPassword";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.cloneFromPassword = <string>TestInitializer.invalidizeValue(request.cloneFromPassword, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.cloneFromPassword).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.cloneFromPassword);
        }).catch((err) => assert.fail(err));
    });

    it("invalid cloneFromStorage test", () => {
        const field = "cloneFromStorage";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.cloneFromStorage = <string>TestInitializer.invalidizeValue(request.cloneFromStorage, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.cloneFromStorage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.cloneFromStorage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid applyToAll test", () => {
        const field = "applyToAll";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.applyToAll = <boolean>TestInitializer.invalidizeValue(request.applyToAll, field, "boolean", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.applyToAll).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.applyToAll);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postNotesSlideAddNewParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
            return TestInitializer.assertValidCall(api.postNotesSlideAddNewParagraph(request), false, "postNotesSlideAddNewParagraph");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postNotesSlideAddNewParagraph");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postNotesSlideAddNewParagraph");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "postNotesSlideAddNewParagraph");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postNotesSlideAddNewParagraph");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph", "postNotesSlideAddNewParagraph");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postNotesSlideAddNewParagraph");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postNotesSlideAddNewParagraph");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postNotesSlideAddNewParagraph");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postNotesSlideAddNewParagraph");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.position);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postNotesSlideAddNewPortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("postNotesSlideAddNewPortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
            return TestInitializer.assertValidCall(api.postNotesSlideAddNewPortion(request), false, "postNotesSlideAddNewPortion");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postNotesSlideAddNewPortion");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postNotesSlideAddNewPortion");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "postNotesSlideAddNewPortion");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postNotesSlideAddNewPortion");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "postNotesSlideAddNewPortion");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion", "postNotesSlideAddNewPortion");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postNotesSlideAddNewPortion");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postNotesSlideAddNewPortion");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postNotesSlideAddNewPortion");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postNotesSlideAddNewPortion");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.position);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postNotesSlideAddNewShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("postNotesSlideAddNewShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
            return TestInitializer.assertValidCall(api.postNotesSlideAddNewShape(request), false, "postNotesSlideAddNewShape");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postNotesSlideAddNewShape");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postNotesSlideAddNewShape");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "postNotesSlideAddNewShape");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase", "postNotesSlideAddNewShape");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postNotesSlideAddNewShape");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postNotesSlideAddNewShape");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postNotesSlideAddNewShape");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeToClone test", () => {
        const field = "shapeToClone";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.shapeToClone = <number>TestInitializer.invalidizeValue(request.shapeToClone, field, "number", "postNotesSlideAddNewShape");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.shapeToClone).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.shapeToClone);
        }).catch((err) => assert.fail(err));
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postNotesSlideAddNewShape");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.position);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postNotesSlideShapeSaveAs", () => {
    it("main test", () => {
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
            return TestInitializer.assertValidCall(api.postNotesSlideShapeSaveAs(request), true, "postNotesSlideShapeSaveAs");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postNotesSlideShapeSaveAs");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postNotesSlideShapeSaveAs");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.format);
        }).catch((err) => assert.fail(err));
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.options = <model.IShapeExportOptions>TestInitializer.invalidizeValue(request.options, field, "IShapeExportOptions", "postNotesSlideShapeSaveAs");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.options);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number", "postNotesSlideShapeSaveAs");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.scaleX).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.scaleX);
        }).catch((err) => assert.fail(err));
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number", "postNotesSlideShapeSaveAs");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.scaleY).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.scaleY);
        }).catch((err) => assert.fail(err));
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.bounds).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.bounds);
        }).catch((err) => assert.fail(err));
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.fontsFolder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postPresentationMerge", () => {
    it("main test", () => {
        return TestInitializer.initialize("postPresentationMerge", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostPresentationMergeRequest();
            return TestInitializer.assertValidCall(api.postPresentationMerge(request), false, "postPresentationMerge");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postPresentationMerge");
        return TestInitializer.initialize("postPresentationMerge", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postPresentationMerge(request), "postPresentationMerge", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid request test", () => {
        const field = "request";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.request = <model.PresentationsMergeRequest>TestInitializer.invalidizeValue(request.request, field, "PresentationsMergeRequest", "postPresentationMerge");
        return TestInitializer.initialize("postPresentationMerge", field, request.request).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postPresentationMerge(request), "postPresentationMerge", field, request.request);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postPresentationMerge");
        return TestInitializer.initialize("postPresentationMerge", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postPresentationMerge(request), "postPresentationMerge", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postPresentationMerge");
        return TestInitializer.initialize("postPresentationMerge", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postPresentationMerge(request), "postPresentationMerge", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postPresentationMerge");
        return TestInitializer.initialize("postPresentationMerge", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postPresentationMerge(request), "postPresentationMerge", field, request.folder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postShapeSaveAs", () => {
    it("main test", () => {
        return TestInitializer.initialize("postShapeSaveAs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostShapeSaveAsRequest();
            return TestInitializer.assertValidCall(api.postShapeSaveAs(request), true, "postShapeSaveAs");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postShapeSaveAs");
        return TestInitializer.initialize("postShapeSaveAs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postShapeSaveAs");
        return TestInitializer.initialize("postShapeSaveAs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "postShapeSaveAs");
        return TestInitializer.initialize("postShapeSaveAs", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postShapeSaveAs");
        return TestInitializer.initialize("postShapeSaveAs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postShapeSaveAs");
        return TestInitializer.initialize("postShapeSaveAs", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field, request.format);
        }).catch((err) => assert.fail(err));
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.options = <model.IShapeExportOptions>TestInitializer.invalidizeValue(request.options, field, "IShapeExportOptions", "postShapeSaveAs");
        return TestInitializer.initialize("postShapeSaveAs", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field, request.options);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postShapeSaveAs");
        return TestInitializer.initialize("postShapeSaveAs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postShapeSaveAs");
        return TestInitializer.initialize("postShapeSaveAs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postShapeSaveAs");
        return TestInitializer.initialize("postShapeSaveAs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number", "postShapeSaveAs");
        return TestInitializer.initialize("postShapeSaveAs", field, request.scaleX).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field, request.scaleX);
        }).catch((err) => assert.fail(err));
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number", "postShapeSaveAs");
        return TestInitializer.initialize("postShapeSaveAs", field, request.scaleY).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field, request.scaleY);
        }).catch((err) => assert.fail(err));
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string", "postShapeSaveAs");
        return TestInitializer.initialize("postShapeSaveAs", field, request.bounds).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field, request.bounds);
        }).catch((err) => assert.fail(err));
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postShapeSaveAs");
        return TestInitializer.initialize("postShapeSaveAs", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field, request.fontsFolder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlideAnimationEffect", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlideAnimationEffect", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlideAnimationEffectRequest();
            return TestInitializer.assertValidCall(api.postSlideAnimationEffect(request), false, "postSlideAnimationEffect");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlideAnimationEffectRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlideAnimationEffect");
        return TestInitializer.initialize("postSlideAnimationEffect", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationEffect(request), "postSlideAnimationEffect", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlideAnimationEffectRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSlideAnimationEffect");
        return TestInitializer.initialize("postSlideAnimationEffect", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationEffect(request), "postSlideAnimationEffect", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid effect test", () => {
        const field = "effect";
        const request = TestUtils.getPostSlideAnimationEffectRequest();
        request.effect = <model.Effect>TestInitializer.invalidizeValue(request.effect, field, "Effect", "postSlideAnimationEffect");
        return TestInitializer.initialize("postSlideAnimationEffect", field, request.effect).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationEffect(request), "postSlideAnimationEffect", field, request.effect);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlideAnimationEffectRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlideAnimationEffect");
        return TestInitializer.initialize("postSlideAnimationEffect", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationEffect(request), "postSlideAnimationEffect", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlideAnimationEffectRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlideAnimationEffect");
        return TestInitializer.initialize("postSlideAnimationEffect", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationEffect(request), "postSlideAnimationEffect", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlideAnimationEffectRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlideAnimationEffect");
        return TestInitializer.initialize("postSlideAnimationEffect", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationEffect(request), "postSlideAnimationEffect", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlideAnimationInteractiveSequence", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlideAnimationInteractiveSequence", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
            return TestInitializer.assertValidCall(api.postSlideAnimationInteractiveSequence(request), false, "postSlideAnimationInteractiveSequence");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlideAnimationInteractiveSequence");
        return TestInitializer.initialize("postSlideAnimationInteractiveSequence", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationInteractiveSequence(request), "postSlideAnimationInteractiveSequence", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSlideAnimationInteractiveSequence");
        return TestInitializer.initialize("postSlideAnimationInteractiveSequence", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationInteractiveSequence(request), "postSlideAnimationInteractiveSequence", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid sequence test", () => {
        const field = "sequence";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
        request.sequence = <model.InteractiveSequence>TestInitializer.invalidizeValue(request.sequence, field, "InteractiveSequence", "postSlideAnimationInteractiveSequence");
        return TestInitializer.initialize("postSlideAnimationInteractiveSequence", field, request.sequence).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationInteractiveSequence(request), "postSlideAnimationInteractiveSequence", field, request.sequence);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlideAnimationInteractiveSequence");
        return TestInitializer.initialize("postSlideAnimationInteractiveSequence", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationInteractiveSequence(request), "postSlideAnimationInteractiveSequence", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlideAnimationInteractiveSequence");
        return TestInitializer.initialize("postSlideAnimationInteractiveSequence", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationInteractiveSequence(request), "postSlideAnimationInteractiveSequence", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlideAnimationInteractiveSequence");
        return TestInitializer.initialize("postSlideAnimationInteractiveSequence", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationInteractiveSequence(request), "postSlideAnimationInteractiveSequence", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlideAnimationInteractiveSequenceEffect", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
            return TestInitializer.assertValidCall(api.postSlideAnimationInteractiveSequenceEffect(request), false, "postSlideAnimationInteractiveSequenceEffect");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid sequenceIndex test", () => {
        const field = "sequenceIndex";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.sequenceIndex = <number>TestInitializer.invalidizeValue(request.sequenceIndex, field, "number", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.sequenceIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.sequenceIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid effect test", () => {
        const field = "effect";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.effect = <model.Effect>TestInitializer.invalidizeValue(request.effect, field, "Effect", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.effect).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.effect);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlideSaveAs", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlideSaveAs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlideSaveAsRequest();
            return TestInitializer.assertValidCall(api.postSlideSaveAs(request), true, "postSlideSaveAs");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlideSaveAs");
        return TestInitializer.initialize("postSlideSaveAs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSlideSaveAs");
        return TestInitializer.initialize("postSlideSaveAs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postSlideSaveAs");
        return TestInitializer.initialize("postSlideSaveAs", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field, request.format);
        }).catch((err) => assert.fail(err));
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.options = <model.ExportOptions>TestInitializer.invalidizeValue(request.options, field, "ExportOptions", "postSlideSaveAs");
        return TestInitializer.initialize("postSlideSaveAs", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field, request.options);
        }).catch((err) => assert.fail(err));
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number", "postSlideSaveAs");
        return TestInitializer.initialize("postSlideSaveAs", field, request.width).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field, request.width);
        }).catch((err) => assert.fail(err));
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number", "postSlideSaveAs");
        return TestInitializer.initialize("postSlideSaveAs", field, request.height).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field, request.height);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlideSaveAs");
        return TestInitializer.initialize("postSlideSaveAs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlideSaveAs");
        return TestInitializer.initialize("postSlideSaveAs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlideSaveAs");
        return TestInitializer.initialize("postSlideSaveAs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postSlideSaveAs");
        return TestInitializer.initialize("postSlideSaveAs", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field, request.fontsFolder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesAdd", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesAdd", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesAddRequest();
            return TestInitializer.assertValidCall(api.postSlidesAdd(request), false, "postSlidesAdd");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesAddRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesAdd");
        return TestInitializer.initialize("postSlidesAdd", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesAdd(request), "postSlidesAdd", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostSlidesAddRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postSlidesAdd");
        return TestInitializer.initialize("postSlidesAdd", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesAdd(request), "postSlidesAdd", field, request.position);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesAddRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesAdd");
        return TestInitializer.initialize("postSlidesAdd", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesAdd(request), "postSlidesAdd", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesAddRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesAdd");
        return TestInitializer.initialize("postSlidesAdd", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesAdd(request), "postSlidesAdd", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesAddRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesAdd");
        return TestInitializer.initialize("postSlidesAdd", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesAdd(request), "postSlidesAdd", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid layoutAlias test", () => {
        const field = "layoutAlias";
        const request = TestUtils.getPostSlidesAddRequest();
        request.layoutAlias = <string>TestInitializer.invalidizeValue(request.layoutAlias, field, "string", "postSlidesAdd");
        return TestInitializer.initialize("postSlidesAdd", field, request.layoutAlias).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesAdd(request), "postSlidesAdd", field, request.layoutAlias);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesConvert", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesConvert", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesConvertRequest();
            return TestInitializer.assertValidCall(api.postSlidesConvert(request), true, "postSlidesConvert");
        }).catch((err) => assert.fail(err));
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostSlidesConvertRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postSlidesConvert");
        return TestInitializer.initialize("postSlidesConvert", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesConvert(request), "postSlidesConvert", field, request.format);
        }).catch((err) => assert.fail(err));
    });

    it("invalid document test", () => {
        const field = "document";
        const request = TestUtils.getPostSlidesConvertRequest();
        request.document = <Buffer>TestInitializer.invalidizeValue(request.document, field, "Buffer", "postSlidesConvert");
        return TestInitializer.initialize("postSlidesConvert", field, request.document).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesConvert(request), "postSlidesConvert", field, request.document);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesConvertRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesConvert");
        return TestInitializer.initialize("postSlidesConvert", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesConvert(request), "postSlidesConvert", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostSlidesConvertRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postSlidesConvert");
        return TestInitializer.initialize("postSlidesConvert", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesConvert(request), "postSlidesConvert", field, request.fontsFolder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesCopy", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesCopy", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesCopyRequest();
            return TestInitializer.assertValidCall(api.postSlidesCopy(request), false, "postSlidesCopy");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesCopy");
        return TestInitializer.initialize("postSlidesCopy", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideToCopy test", () => {
        const field = "slideToCopy";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.slideToCopy = <number>TestInitializer.invalidizeValue(request.slideToCopy, field, "number", "postSlidesCopy");
        return TestInitializer.initialize("postSlidesCopy", field, request.slideToCopy).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field, request.slideToCopy);
        }).catch((err) => assert.fail(err));
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postSlidesCopy");
        return TestInitializer.initialize("postSlidesCopy", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field, request.position);
        }).catch((err) => assert.fail(err));
    });

    it("invalid source test", () => {
        const field = "source";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.source = <string>TestInitializer.invalidizeValue(request.source, field, "string", "postSlidesCopy");
        return TestInitializer.initialize("postSlidesCopy", field, request.source).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field, request.source);
        }).catch((err) => assert.fail(err));
    });

    it("invalid sourcePassword test", () => {
        const field = "sourcePassword";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.sourcePassword = <string>TestInitializer.invalidizeValue(request.sourcePassword, field, "string", "postSlidesCopy");
        return TestInitializer.initialize("postSlidesCopy", field, request.sourcePassword).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field, request.sourcePassword);
        }).catch((err) => assert.fail(err));
    });

    it("invalid sourceStorage test", () => {
        const field = "sourceStorage";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.sourceStorage = <string>TestInitializer.invalidizeValue(request.sourceStorage, field, "string", "postSlidesCopy");
        return TestInitializer.initialize("postSlidesCopy", field, request.sourceStorage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field, request.sourceStorage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesCopy");
        return TestInitializer.initialize("postSlidesCopy", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesCopy");
        return TestInitializer.initialize("postSlidesCopy", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesCopy");
        return TestInitializer.initialize("postSlidesCopy", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesDocument", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesDocument", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesDocumentRequest();
            return TestInitializer.assertValidCall(api.postSlidesDocument(request), false, "postSlidesDocument");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesDocument");
        return TestInitializer.initialize("postSlidesDocument", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid data test", () => {
        const field = "data";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.data = <Buffer>TestInitializer.invalidizeValue(request.data, field, "Buffer", "postSlidesDocument");
        return TestInitializer.initialize("postSlidesDocument", field, request.data).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field, request.data);
        }).catch((err) => assert.fail(err));
    });

    it("invalid inputPassword test", () => {
        const field = "inputPassword";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.inputPassword = <string>TestInitializer.invalidizeValue(request.inputPassword, field, "string", "postSlidesDocument");
        return TestInitializer.initialize("postSlidesDocument", field, request.inputPassword).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field, request.inputPassword);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesDocument");
        return TestInitializer.initialize("postSlidesDocument", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesDocument");
        return TestInitializer.initialize("postSlidesDocument", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesDocument");
        return TestInitializer.initialize("postSlidesDocument", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field, request.folder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesDocumentFromHtml", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesDocumentFromHtml", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesDocumentFromHtmlRequest();
            return TestInitializer.assertValidCall(api.postSlidesDocumentFromHtml(request), false, "postSlidesDocumentFromHtml");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesDocumentFromHtmlRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesDocumentFromHtml");
        return TestInitializer.initialize("postSlidesDocumentFromHtml", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromHtml(request), "postSlidesDocumentFromHtml", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid html test", () => {
        const field = "html";
        const request = TestUtils.getPostSlidesDocumentFromHtmlRequest();
        request.html = <string>TestInitializer.invalidizeValue(request.html, field, "string", "postSlidesDocumentFromHtml");
        return TestInitializer.initialize("postSlidesDocumentFromHtml", field, request.html).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromHtml(request), "postSlidesDocumentFromHtml", field, request.html);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesDocumentFromHtmlRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesDocumentFromHtml");
        return TestInitializer.initialize("postSlidesDocumentFromHtml", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromHtml(request), "postSlidesDocumentFromHtml", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesDocumentFromHtmlRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesDocumentFromHtml");
        return TestInitializer.initialize("postSlidesDocumentFromHtml", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromHtml(request), "postSlidesDocumentFromHtml", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesDocumentFromHtmlRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesDocumentFromHtml");
        return TestInitializer.initialize("postSlidesDocumentFromHtml", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromHtml(request), "postSlidesDocumentFromHtml", field, request.folder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesDocumentFromSource", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesDocumentFromSource", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
            return TestInitializer.assertValidCall(api.postSlidesDocumentFromSource(request), false, "postSlidesDocumentFromSource");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid sourcePath test", () => {
        const field = "sourcePath";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.sourcePath = <string>TestInitializer.invalidizeValue(request.sourcePath, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.sourcePath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.sourcePath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid sourcePassword test", () => {
        const field = "sourcePassword";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.sourcePassword = <string>TestInitializer.invalidizeValue(request.sourcePassword, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.sourcePassword).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.sourcePassword);
        }).catch((err) => assert.fail(err));
    });

    it("invalid sourceStorage test", () => {
        const field = "sourceStorage";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.sourceStorage = <string>TestInitializer.invalidizeValue(request.sourceStorage, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.sourceStorage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.sourceStorage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.folder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesDocumentFromTemplate", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesDocumentFromTemplate", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
            return TestInitializer.assertValidCall(api.postSlidesDocumentFromTemplate(request), false, "postSlidesDocumentFromTemplate");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid templatePath test", () => {
        const field = "templatePath";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.templatePath = <string>TestInitializer.invalidizeValue(request.templatePath, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.templatePath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.templatePath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid data test", () => {
        const field = "data";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.data = <string>TestInitializer.invalidizeValue(request.data, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.data).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.data);
        }).catch((err) => assert.fail(err));
    });

    it("invalid templatePassword test", () => {
        const field = "templatePassword";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.templatePassword = <string>TestInitializer.invalidizeValue(request.templatePassword, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.templatePassword).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.templatePassword);
        }).catch((err) => assert.fail(err));
    });

    it("invalid templateStorage test", () => {
        const field = "templateStorage";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.templateStorage = <string>TestInitializer.invalidizeValue(request.templateStorage, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.templateStorage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.templateStorage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid isImageDataEmbedded test", () => {
        const field = "isImageDataEmbedded";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.isImageDataEmbedded = <boolean>TestInitializer.invalidizeValue(request.isImageDataEmbedded, field, "boolean", "postSlidesDocumentFromTemplate");
        return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.isImageDataEmbedded).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.isImageDataEmbedded);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.folder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesPipeline", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesPipeline", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesPipelineRequest();
            return TestInitializer.assertValidCall(api.postSlidesPipeline(request), true, "postSlidesPipeline");
        }).catch((err) => assert.fail(err));
    });

    it("invalid pipeline test", () => {
        const field = "pipeline";
        const request = TestUtils.getPostSlidesPipelineRequest();
        request.pipeline = <model.Pipeline>TestInitializer.invalidizeValue(request.pipeline, field, "Pipeline", "postSlidesPipeline");
        return TestInitializer.initialize("postSlidesPipeline", field, request.pipeline).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPipeline(request), "postSlidesPipeline", field, request.pipeline);
        }).catch((err) => assert.fail(err));
    });

    it("invalid files test", () => {
        const field = "files";
        const request = TestUtils.getPostSlidesPipelineRequest();
        request.files = <Array<Buffer>>TestInitializer.invalidizeValue(request.files, field, "Array&lt;Buffer&gt;", "postSlidesPipeline");
        return TestInitializer.initialize("postSlidesPipeline", field, request.files).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPipeline(request), "postSlidesPipeline", field, request.files);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesPresentationReplaceText", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesPresentationReplaceText", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
            return TestInitializer.assertValidCall(api.postSlidesPresentationReplaceText(request), false, "postSlidesPresentationReplaceText");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesPresentationReplaceText");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid oldValue test", () => {
        const field = "oldValue";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.oldValue = <string>TestInitializer.invalidizeValue(request.oldValue, field, "string", "postSlidesPresentationReplaceText");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.oldValue).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.oldValue);
        }).catch((err) => assert.fail(err));
    });

    it("invalid newValue test", () => {
        const field = "newValue";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.newValue = <string>TestInitializer.invalidizeValue(request.newValue, field, "string", "postSlidesPresentationReplaceText");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.newValue).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.newValue);
        }).catch((err) => assert.fail(err));
    });

    it("invalid ignoreCase test", () => {
        const field = "ignoreCase";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.ignoreCase = <boolean>TestInitializer.invalidizeValue(request.ignoreCase, field, "boolean", "postSlidesPresentationReplaceText");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.ignoreCase).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.ignoreCase);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesPresentationReplaceText");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesPresentationReplaceText");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesPresentationReplaceText");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesReorder", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesReorder", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesReorderRequest();
            return TestInitializer.assertValidCall(api.postSlidesReorder(request), false, "postSlidesReorder");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesReorder");
        return TestInitializer.initialize("postSlidesReorder", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorder(request), "postSlidesReorder", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSlidesReorder");
        return TestInitializer.initialize("postSlidesReorder", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorder(request), "postSlidesReorder", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid newPosition test", () => {
        const field = "newPosition";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.newPosition = <number>TestInitializer.invalidizeValue(request.newPosition, field, "number", "postSlidesReorder");
        return TestInitializer.initialize("postSlidesReorder", field, request.newPosition).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorder(request), "postSlidesReorder", field, request.newPosition);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesReorder");
        return TestInitializer.initialize("postSlidesReorder", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorder(request), "postSlidesReorder", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesReorder");
        return TestInitializer.initialize("postSlidesReorder", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorder(request), "postSlidesReorder", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesReorder");
        return TestInitializer.initialize("postSlidesReorder", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorder(request), "postSlidesReorder", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesReorderMany", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesReorderMany", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesReorderManyRequest();
            return TestInitializer.assertValidCall(api.postSlidesReorderMany(request), false, "postSlidesReorderMany");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesReorderMany");
        return TestInitializer.initialize("postSlidesReorderMany", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderMany(request), "postSlidesReorderMany", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid oldPositions test", () => {
        const field = "oldPositions";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.oldPositions = <Array<number>>TestInitializer.invalidizeValue(request.oldPositions, field, "Array&lt;number&gt;", "postSlidesReorderMany");
        return TestInitializer.initialize("postSlidesReorderMany", field, request.oldPositions).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderMany(request), "postSlidesReorderMany", field, request.oldPositions);
        }).catch((err) => assert.fail(err));
    });

    it("invalid newPositions test", () => {
        const field = "newPositions";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.newPositions = <Array<number>>TestInitializer.invalidizeValue(request.newPositions, field, "Array&lt;number&gt;", "postSlidesReorderMany");
        return TestInitializer.initialize("postSlidesReorderMany", field, request.newPositions).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderMany(request), "postSlidesReorderMany", field, request.newPositions);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesReorderMany");
        return TestInitializer.initialize("postSlidesReorderMany", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderMany(request), "postSlidesReorderMany", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesReorderMany");
        return TestInitializer.initialize("postSlidesReorderMany", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderMany(request), "postSlidesReorderMany", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesReorderMany");
        return TestInitializer.initialize("postSlidesReorderMany", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderMany(request), "postSlidesReorderMany", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesSaveAs", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesSaveAs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesSaveAsRequest();
            return TestInitializer.assertValidCall(api.postSlidesSaveAs(request), true, "postSlidesSaveAs");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesSaveAs");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postSlidesSaveAs");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field, request.format);
        }).catch((err) => assert.fail(err));
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.options = <model.ExportOptions>TestInitializer.invalidizeValue(request.options, field, "ExportOptions", "postSlidesSaveAs");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field, request.options);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesSaveAs");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesSaveAs");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesSaveAs");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postSlidesSaveAs");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field, request.fontsFolder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesSetDocumentProperties", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesSetDocumentProperties", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
            return TestInitializer.assertValidCall(api.postSlidesSetDocumentProperties(request), false, "postSlidesSetDocumentProperties");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesSetDocumentProperties");
        return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid properties test", () => {
        const field = "properties";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.properties = <model.DocumentProperties>TestInitializer.invalidizeValue(request.properties, field, "DocumentProperties", "postSlidesSetDocumentProperties");
        return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.properties).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field, request.properties);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesSetDocumentProperties");
        return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesSetDocumentProperties");
        return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesSetDocumentProperties");
        return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesSlideReplaceText", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesSlideReplaceText", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
            return TestInitializer.assertValidCall(api.postSlidesSlideReplaceText(request), false, "postSlidesSlideReplaceText");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesSlideReplaceText");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSlidesSlideReplaceText");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid oldValue test", () => {
        const field = "oldValue";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.oldValue = <string>TestInitializer.invalidizeValue(request.oldValue, field, "string", "postSlidesSlideReplaceText");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.oldValue).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.oldValue);
        }).catch((err) => assert.fail(err));
    });

    it("invalid newValue test", () => {
        const field = "newValue";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.newValue = <string>TestInitializer.invalidizeValue(request.newValue, field, "string", "postSlidesSlideReplaceText");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.newValue).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.newValue);
        }).catch((err) => assert.fail(err));
    });

    it("invalid ignoreCase test", () => {
        const field = "ignoreCase";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.ignoreCase = <boolean>TestInitializer.invalidizeValue(request.ignoreCase, field, "boolean", "postSlidesSlideReplaceText");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.ignoreCase).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.ignoreCase);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesSlideReplaceText");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesSlideReplaceText");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesSlideReplaceText");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for postSlidesSplit", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesSplit", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPostSlidesSplitRequest();
            return TestInitializer.assertValidCall(api.postSlidesSplit(request), false, "postSlidesSplit");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesSplit");
        return TestInitializer.initialize("postSlidesSplit", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.options = <model.ExportOptions>TestInitializer.invalidizeValue(request.options, field, "ExportOptions", "postSlidesSplit");
        return TestInitializer.initialize("postSlidesSplit", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field, request.options);
        }).catch((err) => assert.fail(err));
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postSlidesSplit");
        return TestInitializer.initialize("postSlidesSplit", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field, request.format);
        }).catch((err) => assert.fail(err));
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number", "postSlidesSplit");
        return TestInitializer.initialize("postSlidesSplit", field, request.width).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field, request.width);
        }).catch((err) => assert.fail(err));
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number", "postSlidesSplit");
        return TestInitializer.initialize("postSlidesSplit", field, request.height).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field, request.height);
        }).catch((err) => assert.fail(err));
    });

    it("invalid to test", () => {
        const field = "to";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.to = <number>TestInitializer.invalidizeValue(request.to, field, "number", "postSlidesSplit");
        return TestInitializer.initialize("postSlidesSplit", field, request.to).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field, request.to);
        }).catch((err) => assert.fail(err));
    });

    it("invalid from test", () => {
        const field = "from";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.from = <number>TestInitializer.invalidizeValue(request.from, field, "number", "postSlidesSplit");
        return TestInitializer.initialize("postSlidesSplit", field, request.from).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field, request.from);
        }).catch((err) => assert.fail(err));
    });

    it("invalid destFolder test", () => {
        const field = "destFolder";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.destFolder = <string>TestInitializer.invalidizeValue(request.destFolder, field, "string", "postSlidesSplit");
        return TestInitializer.initialize("postSlidesSplit", field, request.destFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field, request.destFolder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesSplit");
        return TestInitializer.initialize("postSlidesSplit", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesSplit");
        return TestInitializer.initialize("postSlidesSplit", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesSplit");
        return TestInitializer.initialize("postSlidesSplit", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postSlidesSplit");
        return TestInitializer.initialize("postSlidesSplit", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field, request.fontsFolder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putLayoutSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("putLayoutSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutLayoutSlideRequest();
            return TestInitializer.assertValidCall(api.putLayoutSlide(request), false, "putLayoutSlide");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putLayoutSlide");
        return TestInitializer.initialize("putLayoutSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putLayoutSlide(request), "putLayoutSlide", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putLayoutSlide");
        return TestInitializer.initialize("putLayoutSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putLayoutSlide(request), "putLayoutSlide", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideDto test", () => {
        const field = "slideDto";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.slideDto = <model.LayoutSlide>TestInitializer.invalidizeValue(request.slideDto, field, "LayoutSlide", "putLayoutSlide");
        return TestInitializer.initialize("putLayoutSlide", field, request.slideDto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putLayoutSlide(request), "putLayoutSlide", field, request.slideDto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putLayoutSlide");
        return TestInitializer.initialize("putLayoutSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putLayoutSlide(request), "putLayoutSlide", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putLayoutSlide");
        return TestInitializer.initialize("putLayoutSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putLayoutSlide(request), "putLayoutSlide", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putLayoutSlide");
        return TestInitializer.initialize("putLayoutSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putLayoutSlide(request), "putLayoutSlide", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putNotesSlideShapeSaveAs", () => {
    it("main test", () => {
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
            return TestInitializer.assertValidCall(api.putNotesSlideShapeSaveAs(request), false, "putNotesSlideShapeSaveAs");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.format);
        }).catch((err) => assert.fail(err));
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.outPath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.options = <model.IShapeExportOptions>TestInitializer.invalidizeValue(request.options, field, "IShapeExportOptions", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.options);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.scaleX).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.scaleX);
        }).catch((err) => assert.fail(err));
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.scaleY).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.scaleY);
        }).catch((err) => assert.fail(err));
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.bounds).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.bounds);
        }).catch((err) => assert.fail(err));
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.fontsFolder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putPresentationMerge", () => {
    it("main test", () => {
        return TestInitializer.initialize("putPresentationMerge", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutPresentationMergeRequest();
            return TestInitializer.assertValidCall(api.putPresentationMerge(request), false, "putPresentationMerge");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putPresentationMerge");
        return TestInitializer.initialize("putPresentationMerge", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putPresentationMerge(request), "putPresentationMerge", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid request test", () => {
        const field = "request";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.request = <model.OrderedMergeRequest>TestInitializer.invalidizeValue(request.request, field, "OrderedMergeRequest", "putPresentationMerge");
        return TestInitializer.initialize("putPresentationMerge", field, request.request).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putPresentationMerge(request), "putPresentationMerge", field, request.request);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putPresentationMerge");
        return TestInitializer.initialize("putPresentationMerge", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putPresentationMerge(request), "putPresentationMerge", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putPresentationMerge");
        return TestInitializer.initialize("putPresentationMerge", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putPresentationMerge(request), "putPresentationMerge", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putPresentationMerge");
        return TestInitializer.initialize("putPresentationMerge", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putPresentationMerge(request), "putPresentationMerge", field, request.folder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSetParagraphPortionProperties", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSetParagraphPortionProperties", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
            return TestInitializer.assertValidCall(api.putSetParagraphPortionProperties(request), false, "putSetParagraphPortionProperties");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSetParagraphPortionProperties");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSetParagraphPortionProperties");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "putSetParagraphPortionProperties");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putSetParagraphPortionProperties");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "putSetParagraphPortionProperties");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "putSetParagraphPortionProperties");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.portionIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.portionIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion", "putSetParagraphPortionProperties");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSetParagraphPortionProperties");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSetParagraphPortionProperties");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSetParagraphPortionProperties");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSetParagraphProperties", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSetParagraphProperties", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSetParagraphPropertiesRequest();
            return TestInitializer.assertValidCall(api.putSetParagraphProperties(request), false, "putSetParagraphProperties");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSetParagraphProperties");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSetParagraphProperties");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "putSetParagraphProperties");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putSetParagraphProperties");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "putSetParagraphProperties");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph", "putSetParagraphProperties");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSetParagraphProperties");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSetParagraphProperties");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSetParagraphProperties");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putShapeSaveAs", () => {
    it("main test", () => {
        return TestInitializer.initialize("putShapeSaveAs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutShapeSaveAsRequest();
            return TestInitializer.assertValidCall(api.putShapeSaveAs(request), false, "putShapeSaveAs");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.format);
        }).catch((err) => assert.fail(err));
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.outPath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.options = <model.IShapeExportOptions>TestInitializer.invalidizeValue(request.options, field, "IShapeExportOptions", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.options);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.scaleX).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.scaleX);
        }).catch((err) => assert.fail(err));
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.scaleY).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.scaleY);
        }).catch((err) => assert.fail(err));
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.bounds).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.bounds);
        }).catch((err) => assert.fail(err));
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "putShapeSaveAs");
        return TestInitializer.initialize("putShapeSaveAs", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putShapeSaveAs(request), "putShapeSaveAs", field, request.fontsFolder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSlideAnimation", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlideAnimation", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSlideAnimationRequest();
            return TestInitializer.assertValidCall(api.putSlideAnimation(request), false, "putSlideAnimation");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlideAnimationRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlideAnimation");
        return TestInitializer.initialize("putSlideAnimation", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimation(request), "putSlideAnimation", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlideAnimationRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlideAnimation");
        return TestInitializer.initialize("putSlideAnimation", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimation(request), "putSlideAnimation", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid animation test", () => {
        const field = "animation";
        const request = TestUtils.getPutSlideAnimationRequest();
        request.animation = <model.SlideAnimation>TestInitializer.invalidizeValue(request.animation, field, "SlideAnimation", "putSlideAnimation");
        return TestInitializer.initialize("putSlideAnimation", field, request.animation).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimation(request), "putSlideAnimation", field, request.animation);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlideAnimationRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlideAnimation");
        return TestInitializer.initialize("putSlideAnimation", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimation(request), "putSlideAnimation", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlideAnimationRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlideAnimation");
        return TestInitializer.initialize("putSlideAnimation", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimation(request), "putSlideAnimation", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlideAnimationRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlideAnimation");
        return TestInitializer.initialize("putSlideAnimation", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimation(request), "putSlideAnimation", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSlideAnimationEffect", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlideAnimationEffect", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSlideAnimationEffectRequest();
            return TestInitializer.assertValidCall(api.putSlideAnimationEffect(request), false, "putSlideAnimationEffect");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlideAnimationEffect");
        return TestInitializer.initialize("putSlideAnimationEffect", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlideAnimationEffect");
        return TestInitializer.initialize("putSlideAnimationEffect", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid effectIndex test", () => {
        const field = "effectIndex";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.effectIndex = <number>TestInitializer.invalidizeValue(request.effectIndex, field, "number", "putSlideAnimationEffect");
        return TestInitializer.initialize("putSlideAnimationEffect", field, request.effectIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.effectIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid effect test", () => {
        const field = "effect";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.effect = <model.Effect>TestInitializer.invalidizeValue(request.effect, field, "Effect", "putSlideAnimationEffect");
        return TestInitializer.initialize("putSlideAnimationEffect", field, request.effect).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.effect);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlideAnimationEffect");
        return TestInitializer.initialize("putSlideAnimationEffect", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlideAnimationEffect");
        return TestInitializer.initialize("putSlideAnimationEffect", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlideAnimationEffect");
        return TestInitializer.initialize("putSlideAnimationEffect", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSlideAnimationInteractiveSequenceEffect", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
            return TestInitializer.assertValidCall(api.putSlideAnimationInteractiveSequenceEffect(request), false, "putSlideAnimationInteractiveSequenceEffect");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid sequenceIndex test", () => {
        const field = "sequenceIndex";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.sequenceIndex = <number>TestInitializer.invalidizeValue(request.sequenceIndex, field, "number", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.sequenceIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.sequenceIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid effectIndex test", () => {
        const field = "effectIndex";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.effectIndex = <number>TestInitializer.invalidizeValue(request.effectIndex, field, "number", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.effectIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.effectIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid effect test", () => {
        const field = "effect";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.effect = <model.Effect>TestInitializer.invalidizeValue(request.effect, field, "Effect", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.effect).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.effect);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSlideSaveAs", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlideSaveAs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSlideSaveAsRequest();
            return TestInitializer.assertValidCall(api.putSlideSaveAs(request), false, "putSlideSaveAs");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlideSaveAs");
        return TestInitializer.initialize("putSlideSaveAs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideSaveAs(request), "putSlideSaveAs", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlideSaveAs");
        return TestInitializer.initialize("putSlideSaveAs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideSaveAs(request), "putSlideSaveAs", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "putSlideSaveAs");
        return TestInitializer.initialize("putSlideSaveAs", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideSaveAs(request), "putSlideSaveAs", field, request.format);
        }).catch((err) => assert.fail(err));
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string", "putSlideSaveAs");
        return TestInitializer.initialize("putSlideSaveAs", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideSaveAs(request), "putSlideSaveAs", field, request.outPath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.options = <model.ExportOptions>TestInitializer.invalidizeValue(request.options, field, "ExportOptions", "putSlideSaveAs");
        return TestInitializer.initialize("putSlideSaveAs", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideSaveAs(request), "putSlideSaveAs", field, request.options);
        }).catch((err) => assert.fail(err));
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number", "putSlideSaveAs");
        return TestInitializer.initialize("putSlideSaveAs", field, request.width).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideSaveAs(request), "putSlideSaveAs", field, request.width);
        }).catch((err) => assert.fail(err));
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number", "putSlideSaveAs");
        return TestInitializer.initialize("putSlideSaveAs", field, request.height).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideSaveAs(request), "putSlideSaveAs", field, request.height);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlideSaveAs");
        return TestInitializer.initialize("putSlideSaveAs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideSaveAs(request), "putSlideSaveAs", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlideSaveAs");
        return TestInitializer.initialize("putSlideSaveAs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideSaveAs(request), "putSlideSaveAs", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlideSaveAs");
        return TestInitializer.initialize("putSlideSaveAs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideSaveAs(request), "putSlideSaveAs", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "putSlideSaveAs");
        return TestInitializer.initialize("putSlideSaveAs", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideSaveAs(request), "putSlideSaveAs", field, request.fontsFolder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSlideShapeInfo", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlideShapeInfo", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSlideShapeInfoRequest();
            return TestInitializer.assertValidCall(api.putSlideShapeInfo(request), false, "putSlideShapeInfo");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlideShapeInfo");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlideShapeInfo");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "putSlideShapeInfo");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putSlideShapeInfo");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase", "putSlideShapeInfo");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlideShapeInfo");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlideShapeInfo");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlideShapeInfo");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSlidesConvert", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesConvert", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSlidesConvertRequest();
            return TestInitializer.assertValidCall(api.putSlidesConvert(request), false, "putSlidesConvert");
        }).catch((err) => assert.fail(err));
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "putSlidesConvert");
        return TestInitializer.initialize("putSlidesConvert", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesConvert(request), "putSlidesConvert", field, request.format);
        }).catch((err) => assert.fail(err));
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string", "putSlidesConvert");
        return TestInitializer.initialize("putSlidesConvert", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesConvert(request), "putSlidesConvert", field, request.outPath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid document test", () => {
        const field = "document";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.document = <Buffer>TestInitializer.invalidizeValue(request.document, field, "Buffer", "putSlidesConvert");
        return TestInitializer.initialize("putSlidesConvert", field, request.document).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesConvert(request), "putSlidesConvert", field, request.document);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesConvert");
        return TestInitializer.initialize("putSlidesConvert", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesConvert(request), "putSlidesConvert", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "putSlidesConvert");
        return TestInitializer.initialize("putSlidesConvert", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesConvert(request), "putSlidesConvert", field, request.fontsFolder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSlidesDocumentFromHtml", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesDocumentFromHtml", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
            return TestInitializer.assertValidCall(api.putSlidesDocumentFromHtml(request), false, "putSlidesDocumentFromHtml");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesDocumentFromHtml");
        return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid html test", () => {
        const field = "html";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.html = <string>TestInitializer.invalidizeValue(request.html, field, "string", "putSlidesDocumentFromHtml");
        return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.html).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field, request.html);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesDocumentFromHtml");
        return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesDocumentFromHtml");
        return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesDocumentFromHtml");
        return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field, request.folder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSlidesSaveAs", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesSaveAs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSlidesSaveAsRequest();
            return TestInitializer.assertValidCall(api.putSlidesSaveAs(request), false, "putSlidesSaveAs");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesSaveAs");
        return TestInitializer.initialize("putSlidesSaveAs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSaveAs(request), "putSlidesSaveAs", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string", "putSlidesSaveAs");
        return TestInitializer.initialize("putSlidesSaveAs", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSaveAs(request), "putSlidesSaveAs", field, request.outPath);
        }).catch((err) => assert.fail(err));
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "putSlidesSaveAs");
        return TestInitializer.initialize("putSlidesSaveAs", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSaveAs(request), "putSlidesSaveAs", field, request.format);
        }).catch((err) => assert.fail(err));
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.options = <model.ExportOptions>TestInitializer.invalidizeValue(request.options, field, "ExportOptions", "putSlidesSaveAs");
        return TestInitializer.initialize("putSlidesSaveAs", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSaveAs(request), "putSlidesSaveAs", field, request.options);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesSaveAs");
        return TestInitializer.initialize("putSlidesSaveAs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSaveAs(request), "putSlidesSaveAs", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesSaveAs");
        return TestInitializer.initialize("putSlidesSaveAs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSaveAs(request), "putSlidesSaveAs", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesSaveAs");
        return TestInitializer.initialize("putSlidesSaveAs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSaveAs(request), "putSlidesSaveAs", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "putSlidesSaveAs");
        return TestInitializer.initialize("putSlidesSaveAs", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSaveAs(request), "putSlidesSaveAs", field, request.fontsFolder);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSlidesSetDocumentProperty", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesSetDocumentProperty", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
            return TestInitializer.assertValidCall(api.putSlidesSetDocumentProperty(request), false, "putSlidesSetDocumentProperty");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesSetDocumentProperty");
        return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid propertyName test", () => {
        const field = "propertyName";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.propertyName = <string>TestInitializer.invalidizeValue(request.propertyName, field, "string", "putSlidesSetDocumentProperty");
        return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.propertyName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field, request.propertyName);
        }).catch((err) => assert.fail(err));
    });

    it("invalid property test", () => {
        const field = "property";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.property = <model.DocumentProperty>TestInitializer.invalidizeValue(request.property, field, "DocumentProperty", "putSlidesSetDocumentProperty");
        return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.property).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field, request.property);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesSetDocumentProperty");
        return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesSetDocumentProperty");
        return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesSetDocumentProperty");
        return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSlidesSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSlidesSlideRequest();
            return TestInitializer.assertValidCall(api.putSlidesSlide(request), false, "putSlidesSlide");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesSlide");
        return TestInitializer.initialize("putSlidesSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlide(request), "putSlidesSlide", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlidesSlide");
        return TestInitializer.initialize("putSlidesSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlide(request), "putSlidesSlide", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideDto test", () => {
        const field = "slideDto";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.slideDto = <model.Slide>TestInitializer.invalidizeValue(request.slideDto, field, "Slide", "putSlidesSlide");
        return TestInitializer.initialize("putSlidesSlide", field, request.slideDto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlide(request), "putSlidesSlide", field, request.slideDto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesSlide");
        return TestInitializer.initialize("putSlidesSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlide(request), "putSlidesSlide", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesSlide");
        return TestInitializer.initialize("putSlidesSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlide(request), "putSlidesSlide", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesSlide");
        return TestInitializer.initialize("putSlidesSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlide(request), "putSlidesSlide", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSlidesSlideBackground", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesSlideBackground", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSlidesSlideBackgroundRequest();
            return TestInitializer.assertValidCall(api.putSlidesSlideBackground(request), false, "putSlidesSlideBackground");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesSlideBackground");
        return TestInitializer.initialize("putSlidesSlideBackground", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackground(request), "putSlidesSlideBackground", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlidesSlideBackground");
        return TestInitializer.initialize("putSlidesSlideBackground", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackground(request), "putSlidesSlideBackground", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid background test", () => {
        const field = "background";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.background = <model.SlideBackground>TestInitializer.invalidizeValue(request.background, field, "SlideBackground", "putSlidesSlideBackground");
        return TestInitializer.initialize("putSlidesSlideBackground", field, request.background).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackground(request), "putSlidesSlideBackground", field, request.background);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesSlideBackground");
        return TestInitializer.initialize("putSlidesSlideBackground", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackground(request), "putSlidesSlideBackground", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesSlideBackground");
        return TestInitializer.initialize("putSlidesSlideBackground", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackground(request), "putSlidesSlideBackground", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesSlideBackground");
        return TestInitializer.initialize("putSlidesSlideBackground", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackground(request), "putSlidesSlideBackground", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSlidesSlideBackgroundColor", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesSlideBackgroundColor", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
            return TestInitializer.assertValidCall(api.putSlidesSlideBackgroundColor(request), false, "putSlidesSlideBackgroundColor");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesSlideBackgroundColor");
        return TestInitializer.initialize("putSlidesSlideBackgroundColor", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackgroundColor(request), "putSlidesSlideBackgroundColor", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlidesSlideBackgroundColor");
        return TestInitializer.initialize("putSlidesSlideBackgroundColor", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackgroundColor(request), "putSlidesSlideBackgroundColor", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid color test", () => {
        const field = "color";
        const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
        request.color = <string>TestInitializer.invalidizeValue(request.color, field, "string", "putSlidesSlideBackgroundColor");
        return TestInitializer.initialize("putSlidesSlideBackgroundColor", field, request.color).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackgroundColor(request), "putSlidesSlideBackgroundColor", field, request.color);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesSlideBackgroundColor");
        return TestInitializer.initialize("putSlidesSlideBackgroundColor", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackgroundColor(request), "putSlidesSlideBackgroundColor", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesSlideBackgroundColor");
        return TestInitializer.initialize("putSlidesSlideBackgroundColor", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackgroundColor(request), "putSlidesSlideBackgroundColor", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesSlideBackgroundColor");
        return TestInitializer.initialize("putSlidesSlideBackgroundColor", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackgroundColor(request), "putSlidesSlideBackgroundColor", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putSlidesSlideSize", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesSlideSize", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutSlidesSlideSizeRequest();
            return TestInitializer.assertValidCall(api.putSlidesSlideSize(request), false, "putSlidesSlideSize");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesSlideSize");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesSlideSize");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesSlideSize");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field, request.storage);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesSlideSize");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number", "putSlidesSlideSize");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.width).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field, request.width);
        }).catch((err) => assert.fail(err));
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number", "putSlidesSlideSize");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.height).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field, request.height);
        }).catch((err) => assert.fail(err));
    });

    it("invalid sizeType test", () => {
        const field = "sizeType";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.sizeType = <string>TestInitializer.invalidizeValue(request.sizeType, field, "string", "putSlidesSlideSize");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.sizeType).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field, request.sizeType);
        }).catch((err) => assert.fail(err));
    });

    it("invalid scaleType test", () => {
        const field = "scaleType";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.scaleType = <string>TestInitializer.invalidizeValue(request.scaleType, field, "string", "putSlidesSlideSize");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.scaleType).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field, request.scaleType);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putUpdateNotesSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("putUpdateNotesSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutUpdateNotesSlideRequest();
            return TestInitializer.assertValidCall(api.putUpdateNotesSlide(request), false, "putUpdateNotesSlide");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putUpdateNotesSlide");
        return TestInitializer.initialize("putUpdateNotesSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlide(request), "putUpdateNotesSlide", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putUpdateNotesSlide");
        return TestInitializer.initialize("putUpdateNotesSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlide(request), "putUpdateNotesSlide", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.dto = <model.NotesSlide>TestInitializer.invalidizeValue(request.dto, field, "NotesSlide", "putUpdateNotesSlide");
        return TestInitializer.initialize("putUpdateNotesSlide", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlide(request), "putUpdateNotesSlide", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putUpdateNotesSlide");
        return TestInitializer.initialize("putUpdateNotesSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlide(request), "putUpdateNotesSlide", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putUpdateNotesSlide");
        return TestInitializer.initialize("putUpdateNotesSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlide(request), "putUpdateNotesSlide", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putUpdateNotesSlide");
        return TestInitializer.initialize("putUpdateNotesSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlide(request), "putUpdateNotesSlide", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putUpdateNotesSlideShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("putUpdateNotesSlideShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
            return TestInitializer.assertValidCall(api.putUpdateNotesSlideShape(request), false, "putUpdateNotesSlideShape");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putUpdateNotesSlideShape");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putUpdateNotesSlideShape");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "putUpdateNotesSlideShape");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putUpdateNotesSlideShape");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase", "putUpdateNotesSlideShape");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putUpdateNotesSlideShape");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putUpdateNotesSlideShape");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putUpdateNotesSlideShape");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putUpdateNotesSlideShapeParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
            return TestInitializer.assertValidCall(api.putUpdateNotesSlideShapeParagraph(request), false, "putUpdateNotesSlideShapeParagraph");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for putUpdateNotesSlideShapePortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
            return TestInitializer.assertValidCall(api.putUpdateNotesSlideShapePortion(request), false, "putUpdateNotesSlideShapePortion");
        }).catch((err) => assert.fail(err));
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putUpdateNotesSlideShapePortion");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.name);
        }).catch((err) => assert.fail(err));
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putUpdateNotesSlideShapePortion");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.slideIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "putUpdateNotesSlideShapePortion");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putUpdateNotesSlideShapePortion");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.shapeIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "putUpdateNotesSlideShapePortion");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.paragraphIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "putUpdateNotesSlideShapePortion");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.portionIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.portionIndex);
        }).catch((err) => assert.fail(err));
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion", "putUpdateNotesSlideShapePortion");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.dto);
        }).catch((err) => assert.fail(err));
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putUpdateNotesSlideShapePortion");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.password);
        }).catch((err) => assert.fail(err));
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putUpdateNotesSlideShapePortion");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.folder);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putUpdateNotesSlideShapePortion");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.storage);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for storageExists", () => {
    it("main test", () => {
        return TestInitializer.initialize("storageExists", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getStorageExistsRequest();
            return TestInitializer.assertValidCall(api.storageExists(request), false, "storageExists");
        }).catch((err) => assert.fail(err));
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getStorageExistsRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "storageExists");
        return TestInitializer.initialize("storageExists", field, request.storageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.storageExists(request), "storageExists", field, request.storageName);
        }).catch((err) => assert.fail(err));
    });
});

describe("Tests for uploadFile", () => {
    it("main test", () => {
        return TestInitializer.initialize("uploadFile", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            const request = TestUtils.getUploadFileRequest();
            return TestInitializer.assertValidCall(api.uploadFile(request), false, "uploadFile");
        }).catch((err) => assert.fail(err));
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getUploadFileRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "uploadFile");
        return TestInitializer.initialize("uploadFile", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.uploadFile(request), "uploadFile", field, request.path);
        }).catch((err) => assert.fail(err));
    });

    it("invalid file test", () => {
        const field = "file";
        const request = TestUtils.getUploadFileRequest();
        request.file = <Buffer>TestInitializer.invalidizeValue(request.file, field, "Buffer", "uploadFile");
        return TestInitializer.initialize("uploadFile", field, request.file).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.uploadFile(request), "uploadFile", field, request.file);
        }).catch((err) => assert.fail(err));
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getUploadFileRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "uploadFile");
        return TestInitializer.initialize("uploadFile", field, request.storageName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.uploadFile(request), "uploadFile", field, request.storageName);
        }).catch((err) => assert.fail(err));
    });
});
