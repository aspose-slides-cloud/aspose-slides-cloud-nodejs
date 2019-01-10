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

class TestUtils {

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

    public static getGetSlidesDocumentWithFormatRequest(): requests.GetSlidesDocumentWithFormatRequest {
        const request = new requests.GetSlidesDocumentWithFormatRequest();
        request.name = <string>TestInitializer.getValue("getSlidesDocumentWithFormat", "name");
        request.format = <string>TestInitializer.getValue("getSlidesDocumentWithFormat", "format");
        request.jpegQuality = <number>TestInitializer.getValue("getSlidesDocumentWithFormat", "jpegQuality");
        request.password = <string>TestInitializer.getValue("getSlidesDocumentWithFormat", "password");
        request.storage = <string>TestInitializer.getValue("getSlidesDocumentWithFormat", "storage");
        request.folder = <string>TestInitializer.getValue("getSlidesDocumentWithFormat", "folder");
        request.outPath = <string>TestInitializer.getValue("getSlidesDocumentWithFormat", "outPath");
        request.fontsFolder = <string>TestInitializer.getValue("getSlidesDocumentWithFormat", "fontsFolder");
        return request;
    }

    public static getPostSlidesDocumentRequest(): requests.PostSlidesDocumentRequest {
        const request = new requests.PostSlidesDocumentRequest();
        request.name = <string>TestInitializer.getValue("postSlidesDocument", "name");
        request.data = <string>TestInitializer.getValue("postSlidesDocument", "data");
        request.templatePath = <string>TestInitializer.getValue("postSlidesDocument", "templatePath");
        request.templateStorage = <string>TestInitializer.getValue("postSlidesDocument", "templateStorage");
        request.isImageDataEmbedded = <boolean>TestInitializer.getValue("postSlidesDocument", "isImageDataEmbedded");
        request.password = <string>TestInitializer.getValue("postSlidesDocument", "password");
        request.storage = <string>TestInitializer.getValue("postSlidesDocument", "storage");
        request.folder = <string>TestInitializer.getValue("postSlidesDocument", "folder");
        return request;
    }

    public static getPostSlidesPipelineRequest(): requests.PostSlidesPipelineRequest {
        const request = new requests.PostSlidesPipelineRequest();
        request.pipeline = <model.Pipeline>TestInitializer.getValue("postSlidesPipeline", "pipeline");
        request.files = <Array<Buffer>>TestInitializer.getStreamValue();
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
        request.outPath = <string>TestInitializer.getValue("postSlidesSaveAs", "outPath");
        request.fontsFolder = <string>TestInitializer.getValue("postSlidesSaveAs", "fontsFolder");
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
        return request;
    }

    public static getPutNewPresentationRequest(): requests.PutNewPresentationRequest {
        const request = new requests.PutNewPresentationRequest();
        request.name = <string>TestInitializer.getValue("putNewPresentation", "name");
        request.stream = <Buffer>TestInitializer.getStreamValue();
        request.templatePath = <string>TestInitializer.getValue("putNewPresentation", "templatePath");
        request.templatePassword = <string>TestInitializer.getValue("putNewPresentation", "templatePassword");
        request.templateStorage = <string>TestInitializer.getValue("putNewPresentation", "templateStorage");
        request.password = <string>TestInitializer.getValue("putNewPresentation", "password");
        request.storage = <string>TestInitializer.getValue("putNewPresentation", "storage");
        request.folder = <string>TestInitializer.getValue("putNewPresentation", "folder");
        return request;
    }

    public static getPutSlidesConvertRequest(): requests.PutSlidesConvertRequest {
        const request = new requests.PutSlidesConvertRequest();
        request.format = <string>TestInitializer.getValue("putSlidesConvert", "format");
        request.document = <Buffer>TestInitializer.getStreamValue();
        request.password = <string>TestInitializer.getValue("putSlidesConvert", "password");
        request.outPath = <string>TestInitializer.getValue("putSlidesConvert", "outPath");
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

    public static getGetSlidesSlideImagesRequest(): requests.GetSlidesSlideImagesRequest {
        const request = new requests.GetSlidesSlideImagesRequest();
        request.name = <string>TestInitializer.getValue("getSlidesSlideImages", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlidesSlideImages", "slideIndex");
        request.password = <string>TestInitializer.getValue("getSlidesSlideImages", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesSlideImages", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesSlideImages", "storage");
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

    public static getPostPresentationMergeRequest(): requests.PostPresentationMergeRequest {
        const request = new requests.PostPresentationMergeRequest();
        request.name = <string>TestInitializer.getValue("postPresentationMerge", "name");
        request.request = <model.PresentationsMergeRequest>TestInitializer.getValue("postPresentationMerge", "request");
        request.password = <string>TestInitializer.getValue("postPresentationMerge", "password");
        request.storage = <string>TestInitializer.getValue("postPresentationMerge", "storage");
        request.folder = <string>TestInitializer.getValue("postPresentationMerge", "folder");
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

    public static getDeleteNotesSlideRequest(): requests.DeleteNotesSlideRequest {
        const request = new requests.DeleteNotesSlideRequest();
        request.name = <string>TestInitializer.getValue("deleteNotesSlide", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteNotesSlide", "slideIndex");
        request.password = <string>TestInitializer.getValue("deleteNotesSlide", "password");
        request.folder = <string>TestInitializer.getValue("deleteNotesSlide", "folder");
        request.storage = <string>TestInitializer.getValue("deleteNotesSlide", "storage");
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

    public static getGetNotesSlideShapeWithFormatRequest(): requests.GetNotesSlideShapeWithFormatRequest {
        const request = new requests.GetNotesSlideShapeWithFormatRequest();
        request.name = <string>TestInitializer.getValue("getNotesSlideShapeWithFormat", "name");
        request.slideIndex = <number>TestInitializer.getValue("getNotesSlideShapeWithFormat", "slideIndex");
        request.shapeIndex = <number>TestInitializer.getValue("getNotesSlideShapeWithFormat", "shapeIndex");
        request.format = <string>TestInitializer.getValue("getNotesSlideShapeWithFormat", "format");
        request.password = <string>TestInitializer.getValue("getNotesSlideShapeWithFormat", "password");
        request.folder = <string>TestInitializer.getValue("getNotesSlideShapeWithFormat", "folder");
        request.storage = <string>TestInitializer.getValue("getNotesSlideShapeWithFormat", "storage");
        request.scaleX = <number>TestInitializer.getValue("getNotesSlideShapeWithFormat", "scaleX");
        request.scaleY = <number>TestInitializer.getValue("getNotesSlideShapeWithFormat", "scaleY");
        request.bounds = <string>TestInitializer.getValue("getNotesSlideShapeWithFormat", "bounds");
        request.outPath = <string>TestInitializer.getValue("getNotesSlideShapeWithFormat", "outPath");
        request.fontsFolder = <string>TestInitializer.getValue("getNotesSlideShapeWithFormat", "fontsFolder");
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
        request.shapeIndex = <number>TestInitializer.getValue("postNotesSlideShapeSaveAs", "shapeIndex");
        request.format = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "format");
        request.options = <model.IShapeExportOptions>TestInitializer.getValue("postNotesSlideShapeSaveAs", "options");
        request.password = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "password");
        request.folder = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "folder");
        request.storage = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "storage");
        request.scaleX = <number>TestInitializer.getValue("postNotesSlideShapeSaveAs", "scaleX");
        request.scaleY = <number>TestInitializer.getValue("postNotesSlideShapeSaveAs", "scaleY");
        request.bounds = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "bounds");
        request.outPath = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "outPath");
        request.fontsFolder = <string>TestInitializer.getValue("postNotesSlideShapeSaveAs", "fontsFolder");
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

    public static getPostSlidesSetDocumentPropertiesRequest(): requests.PostSlidesSetDocumentPropertiesRequest {
        const request = new requests.PostSlidesSetDocumentPropertiesRequest();
        request.name = <string>TestInitializer.getValue("postSlidesSetDocumentProperties", "name");
        request.properties = <model.DocumentProperties>TestInitializer.getValue("postSlidesSetDocumentProperties", "properties");
        request.password = <string>TestInitializer.getValue("postSlidesSetDocumentProperties", "password");
        request.folder = <string>TestInitializer.getValue("postSlidesSetDocumentProperties", "folder");
        request.storage = <string>TestInitializer.getValue("postSlidesSetDocumentProperties", "storage");
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

    public static getGetShapeParagraphRequest(): requests.GetShapeParagraphRequest {
        const request = new requests.GetShapeParagraphRequest();
        request.name = <string>TestInitializer.getValue("getShapeParagraph", "name");
        request.slideIndex = <number>TestInitializer.getValue("getShapeParagraph", "slideIndex");
        request.path = <string>TestInitializer.getValue("getShapeParagraph", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getShapeParagraph", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("getShapeParagraph", "paragraphIndex");
        request.password = <string>TestInitializer.getValue("getShapeParagraph", "password");
        request.folder = <string>TestInitializer.getValue("getShapeParagraph", "folder");
        request.storage = <string>TestInitializer.getValue("getShapeParagraph", "storage");
        return request;
    }

    public static getGetShapeWithFormatRequest(): requests.GetShapeWithFormatRequest {
        const request = new requests.GetShapeWithFormatRequest();
        request.name = <string>TestInitializer.getValue("getShapeWithFormat", "name");
        request.slideIndex = <number>TestInitializer.getValue("getShapeWithFormat", "slideIndex");
        request.shapeIndex = <number>TestInitializer.getValue("getShapeWithFormat", "shapeIndex");
        request.format = <string>TestInitializer.getValue("getShapeWithFormat", "format");
        request.password = <string>TestInitializer.getValue("getShapeWithFormat", "password");
        request.folder = <string>TestInitializer.getValue("getShapeWithFormat", "folder");
        request.storage = <string>TestInitializer.getValue("getShapeWithFormat", "storage");
        request.scaleX = <number>TestInitializer.getValue("getShapeWithFormat", "scaleX");
        request.scaleY = <number>TestInitializer.getValue("getShapeWithFormat", "scaleY");
        request.bounds = <string>TestInitializer.getValue("getShapeWithFormat", "bounds");
        request.outPath = <string>TestInitializer.getValue("getShapeWithFormat", "outPath");
        request.fontsFolder = <string>TestInitializer.getValue("getShapeWithFormat", "fontsFolder");
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

    public static getPostShapeSaveAsRequest(): requests.PostShapeSaveAsRequest {
        const request = new requests.PostShapeSaveAsRequest();
        request.name = <string>TestInitializer.getValue("postShapeSaveAs", "name");
        request.slideIndex = <number>TestInitializer.getValue("postShapeSaveAs", "slideIndex");
        request.shapeIndex = <number>TestInitializer.getValue("postShapeSaveAs", "shapeIndex");
        request.format = <string>TestInitializer.getValue("postShapeSaveAs", "format");
        request.options = <model.IShapeExportOptions>TestInitializer.getValue("postShapeSaveAs", "options");
        request.password = <string>TestInitializer.getValue("postShapeSaveAs", "password");
        request.folder = <string>TestInitializer.getValue("postShapeSaveAs", "folder");
        request.storage = <string>TestInitializer.getValue("postShapeSaveAs", "storage");
        request.scaleX = <number>TestInitializer.getValue("postShapeSaveAs", "scaleX");
        request.scaleY = <number>TestInitializer.getValue("postShapeSaveAs", "scaleY");
        request.bounds = <string>TestInitializer.getValue("postShapeSaveAs", "bounds");
        request.outPath = <string>TestInitializer.getValue("postShapeSaveAs", "outPath");
        request.fontsFolder = <string>TestInitializer.getValue("postShapeSaveAs", "fontsFolder");
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

    public static getDeleteSlideByIndexRequest(): requests.DeleteSlideByIndexRequest {
        const request = new requests.DeleteSlideByIndexRequest();
        request.name = <string>TestInitializer.getValue("deleteSlideByIndex", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlideByIndex", "slideIndex");
        request.password = <string>TestInitializer.getValue("deleteSlideByIndex", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlideByIndex", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlideByIndex", "storage");
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

    public static getDeleteSlidesSlideBackgroundRequest(): requests.DeleteSlidesSlideBackgroundRequest {
        const request = new requests.DeleteSlidesSlideBackgroundRequest();
        request.name = <string>TestInitializer.getValue("deleteSlidesSlideBackground", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlidesSlideBackground", "slideIndex");
        request.password = <string>TestInitializer.getValue("deleteSlidesSlideBackground", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlidesSlideBackground", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlidesSlideBackground", "storage");
        return request;
    }

    public static getGetSlideWithFormatRequest(): requests.GetSlideWithFormatRequest {
        const request = new requests.GetSlideWithFormatRequest();
        request.name = <string>TestInitializer.getValue("getSlideWithFormat", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlideWithFormat", "slideIndex");
        request.format = <string>TestInitializer.getValue("getSlideWithFormat", "format");
        request.width = <number>TestInitializer.getValue("getSlideWithFormat", "width");
        request.height = <number>TestInitializer.getValue("getSlideWithFormat", "height");
        request.password = <string>TestInitializer.getValue("getSlideWithFormat", "password");
        request.folder = <string>TestInitializer.getValue("getSlideWithFormat", "folder");
        request.storage = <string>TestInitializer.getValue("getSlideWithFormat", "storage");
        request.outPath = <string>TestInitializer.getValue("getSlideWithFormat", "outPath");
        request.fontsFolder = <string>TestInitializer.getValue("getSlideWithFormat", "fontsFolder");
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

    public static getGetSlidesSlidesListRequest(): requests.GetSlidesSlidesListRequest {
        const request = new requests.GetSlidesSlidesListRequest();
        request.name = <string>TestInitializer.getValue("getSlidesSlidesList", "name");
        request.password = <string>TestInitializer.getValue("getSlidesSlidesList", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesSlidesList", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesSlidesList", "storage");
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
        request.outPath = <string>TestInitializer.getValue("postSlideSaveAs", "outPath");
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

    public static getPostSlidesCopyRequest(): requests.PostSlidesCopyRequest {
        const request = new requests.PostSlidesCopyRequest();
        request.name = <string>TestInitializer.getValue("postSlidesCopy", "name");
        request.slideToCopy = <number>TestInitializer.getValue("postSlidesCopy", "slideToCopy");
        request.position = <number>TestInitializer.getValue("postSlidesCopy", "position");
        request.source = <string>TestInitializer.getValue("postSlidesCopy", "source");
        request.sourcePassword = <string>TestInitializer.getValue("postSlidesCopy", "sourcePassword");
        request.password = <string>TestInitializer.getValue("postSlidesCopy", "password");
        request.folder = <string>TestInitializer.getValue("postSlidesCopy", "folder");
        request.storage = <string>TestInitializer.getValue("postSlidesCopy", "storage");
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

    public static getPostSlidesReorderPositionRequest(): requests.PostSlidesReorderPositionRequest {
        const request = new requests.PostSlidesReorderPositionRequest();
        request.name = <string>TestInitializer.getValue("postSlidesReorderPosition", "name");
        request.oldPosition = <number>TestInitializer.getValue("postSlidesReorderPosition", "oldPosition");
        request.newPosition = <number>TestInitializer.getValue("postSlidesReorderPosition", "newPosition");
        request.oldPositions = <Array<number>>TestInitializer.getValue("postSlidesReorderPosition", "oldPositions");
        request.newPositions = <Array<number>>TestInitializer.getValue("postSlidesReorderPosition", "newPositions");
        request.slideToCopy = <number>TestInitializer.getValue("postSlidesReorderPosition", "slideToCopy");
        request.position = <number>TestInitializer.getValue("postSlidesReorderPosition", "position");
        request.slideToClone = <number>TestInitializer.getValue("postSlidesReorderPosition", "slideToClone");
        request.source = <string>TestInitializer.getValue("postSlidesReorderPosition", "source");
        request.password = <string>TestInitializer.getValue("postSlidesReorderPosition", "password");
        request.folder = <string>TestInitializer.getValue("postSlidesReorderPosition", "folder");
        request.storage = <string>TestInitializer.getValue("postSlidesReorderPosition", "storage");
        request.layoutAlias = <string>TestInitializer.getValue("postSlidesReorderPosition", "layoutAlias");
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
        request.color = <string>TestInitializer.getValue("putSlidesSlideBackground", "color");
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
}

describe("Tests for getSlidesApiInfo", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesApiInfo", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesApiInfoRequest();
            return TestInitializer.assertValidCall(api.getSlidesApiInfo(request), false, "getSlidesApiInfo");
        });
    });
});

describe("Tests for getSlidesDocument", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesDocument", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesDocumentRequest();
            return TestInitializer.assertValidCall(api.getSlidesDocument(request), false, "getSlidesDocument");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesDocumentRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesDocument", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocument(request), "getSlidesDocument", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesDocumentRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesDocument", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocument(request), "getSlidesDocument", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesDocumentRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesDocument", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocument(request), "getSlidesDocument", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesDocumentRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesDocument", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocument(request), "getSlidesDocument", field);
        });
    });
});

describe("Tests for getSlidesDocumentWithFormat", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesDocumentWithFormat", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesDocumentWithFormatRequest();
            return TestInitializer.assertValidCall(api.getSlidesDocumentWithFormat(request), true, "getSlidesDocumentWithFormat");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesDocumentWithFormatRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesDocumentWithFormat", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentWithFormat(request), "getSlidesDocumentWithFormat", field);
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getGetSlidesDocumentWithFormatRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string");
        return TestInitializer.initialize("getSlidesDocumentWithFormat", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentWithFormat(request), "getSlidesDocumentWithFormat", field);
        });
    });

    it("invalid jpegQuality test", () => {
        const field = "jpegQuality";
        const request = TestUtils.getGetSlidesDocumentWithFormatRequest();
        request.jpegQuality = <number>TestInitializer.invalidizeValue(request.jpegQuality, field, "number");
        return TestInitializer.initialize("getSlidesDocumentWithFormat", field, request.jpegQuality).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentWithFormat(request), "getSlidesDocumentWithFormat", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesDocumentWithFormatRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesDocumentWithFormat", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentWithFormat(request), "getSlidesDocumentWithFormat", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesDocumentWithFormatRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesDocumentWithFormat", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentWithFormat(request), "getSlidesDocumentWithFormat", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesDocumentWithFormatRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesDocumentWithFormat", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentWithFormat(request), "getSlidesDocumentWithFormat", field);
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getGetSlidesDocumentWithFormatRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string");
        return TestInitializer.initialize("getSlidesDocumentWithFormat", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentWithFormat(request), "getSlidesDocumentWithFormat", field);
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getGetSlidesDocumentWithFormatRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string");
        return TestInitializer.initialize("getSlidesDocumentWithFormat", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentWithFormat(request), "getSlidesDocumentWithFormat", field);
        });
    });
});

describe("Tests for postSlidesDocument", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesDocument", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostSlidesDocumentRequest();
            return TestInitializer.assertValidCall(api.postSlidesDocument(request), false, "postSlidesDocument");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postSlidesDocument", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field);
        });
    });

    it("invalid data test", () => {
        const field = "data";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.data = <string>TestInitializer.invalidizeValue(request.data, field, "string");
        return TestInitializer.initialize("postSlidesDocument", field, request.data).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field);
        });
    });

    it("invalid templatePath test", () => {
        const field = "templatePath";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.templatePath = <string>TestInitializer.invalidizeValue(request.templatePath, field, "string");
        return TestInitializer.initialize("postSlidesDocument", field, request.templatePath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field);
        });
    });

    it("invalid templateStorage test", () => {
        const field = "templateStorage";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.templateStorage = <string>TestInitializer.invalidizeValue(request.templateStorage, field, "string");
        return TestInitializer.initialize("postSlidesDocument", field, request.templateStorage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field);
        });
    });

    it("invalid isImageDataEmbedded test", () => {
        const field = "isImageDataEmbedded";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.isImageDataEmbedded = <boolean>TestInitializer.invalidizeValue(request.isImageDataEmbedded, field, "boolean");
        return TestInitializer.initialize("postSlidesDocument", field, request.isImageDataEmbedded).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postSlidesDocument", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postSlidesDocument", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postSlidesDocument", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesDocument(request), "postSlidesDocument", field);
        });
    });
});

describe("Tests for postSlidesPipeline", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesPipeline", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostSlidesPipelineRequest();
            return TestInitializer.assertValidCall(api.postSlidesPipeline(request), true, "postSlidesPipeline");
        });
    });

    it("invalid pipeline test", () => {
        const field = "pipeline";
        const request = TestUtils.getPostSlidesPipelineRequest();
        request.pipeline = <model.Pipeline>TestInitializer.invalidizeValue(request.pipeline, field, "Pipeline");
        return TestInitializer.initialize("postSlidesPipeline", field, request.pipeline).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPipeline(request), "postSlidesPipeline", field);
        });
    });

    it("invalid files test", () => {
        const field = "files";
        const request = TestUtils.getPostSlidesPipelineRequest();
        request.files = <Array<Buffer>>TestInitializer.invalidizeValue(request.files, field, "Array&lt;Buffer&gt;");
        return TestInitializer.initialize("postSlidesPipeline", field, request.files).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPipeline(request), "postSlidesPipeline", field);
        });
    });
});

describe("Tests for postSlidesSaveAs", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesSaveAs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostSlidesSaveAsRequest();
            return TestInitializer.assertValidCall(api.postSlidesSaveAs(request), true, "postSlidesSaveAs");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field);
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field);
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.options = <model.ExportOptions>TestInitializer.invalidizeValue(request.options, field, "ExportOptions");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field);
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field);
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string");
        return TestInitializer.initialize("postSlidesSaveAs", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSaveAs(request), "postSlidesSaveAs", field);
        });
    });
});

describe("Tests for postSlidesSplit", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesSplit", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostSlidesSplitRequest();
            return TestInitializer.assertValidCall(api.postSlidesSplit(request), false, "postSlidesSplit");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postSlidesSplit", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field);
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.options = <model.ExportOptions>TestInitializer.invalidizeValue(request.options, field, "ExportOptions");
        return TestInitializer.initialize("postSlidesSplit", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field);
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string");
        return TestInitializer.initialize("postSlidesSplit", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field);
        });
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number");
        return TestInitializer.initialize("postSlidesSplit", field, request.width).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field);
        });
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number");
        return TestInitializer.initialize("postSlidesSplit", field, request.height).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field);
        });
    });

    it("invalid to test", () => {
        const field = "to";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.to = <number>TestInitializer.invalidizeValue(request.to, field, "number");
        return TestInitializer.initialize("postSlidesSplit", field, request.to).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field);
        });
    });

    it("invalid from test", () => {
        const field = "from";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.from = <number>TestInitializer.invalidizeValue(request.from, field, "number");
        return TestInitializer.initialize("postSlidesSplit", field, request.from).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field);
        });
    });

    it("invalid destFolder test", () => {
        const field = "destFolder";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.destFolder = <string>TestInitializer.invalidizeValue(request.destFolder, field, "string");
        return TestInitializer.initialize("postSlidesSplit", field, request.destFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postSlidesSplit", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postSlidesSplit", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postSlidesSplit", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSplit(request), "postSlidesSplit", field);
        });
    });
});

describe("Tests for putNewPresentation", () => {
    it("main test", () => {
        return TestInitializer.initialize("putNewPresentation", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutNewPresentationRequest();
            return TestInitializer.assertValidCall(api.putNewPresentation(request), false, "putNewPresentation");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutNewPresentationRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putNewPresentation", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNewPresentation(request), "putNewPresentation", field);
        });
    });

    it("invalid stream test", () => {
        const field = "stream";
        const request = TestUtils.getPutNewPresentationRequest();
        request.stream = <Buffer>TestInitializer.invalidizeValue(request.stream, field, "Buffer");
        return TestInitializer.initialize("putNewPresentation", field, request.stream).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNewPresentation(request), "putNewPresentation", field);
        });
    });

    it("invalid templatePath test", () => {
        const field = "templatePath";
        const request = TestUtils.getPutNewPresentationRequest();
        request.templatePath = <string>TestInitializer.invalidizeValue(request.templatePath, field, "string");
        return TestInitializer.initialize("putNewPresentation", field, request.templatePath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNewPresentation(request), "putNewPresentation", field);
        });
    });

    it("invalid templatePassword test", () => {
        const field = "templatePassword";
        const request = TestUtils.getPutNewPresentationRequest();
        request.templatePassword = <string>TestInitializer.invalidizeValue(request.templatePassword, field, "string");
        return TestInitializer.initialize("putNewPresentation", field, request.templatePassword).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNewPresentation(request), "putNewPresentation", field);
        });
    });

    it("invalid templateStorage test", () => {
        const field = "templateStorage";
        const request = TestUtils.getPutNewPresentationRequest();
        request.templateStorage = <string>TestInitializer.invalidizeValue(request.templateStorage, field, "string");
        return TestInitializer.initialize("putNewPresentation", field, request.templateStorage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNewPresentation(request), "putNewPresentation", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutNewPresentationRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putNewPresentation", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNewPresentation(request), "putNewPresentation", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutNewPresentationRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putNewPresentation", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNewPresentation(request), "putNewPresentation", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutNewPresentationRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putNewPresentation", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putNewPresentation(request), "putNewPresentation", field);
        });
    });
});

describe("Tests for putSlidesConvert", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesConvert", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutSlidesConvertRequest();
            return TestInitializer.assertValidCall(api.putSlidesConvert(request), true, "putSlidesConvert");
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string");
        return TestInitializer.initialize("putSlidesConvert", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesConvert(request), "putSlidesConvert", field);
        });
    });

    it("invalid document test", () => {
        const field = "document";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.document = <Buffer>TestInitializer.invalidizeValue(request.document, field, "Buffer");
        return TestInitializer.initialize("putSlidesConvert", field, request.document).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesConvert(request), "putSlidesConvert", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putSlidesConvert", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesConvert(request), "putSlidesConvert", field);
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string");
        return TestInitializer.initialize("putSlidesConvert", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesConvert(request), "putSlidesConvert", field);
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string");
        return TestInitializer.initialize("putSlidesConvert", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesConvert(request), "putSlidesConvert", field);
        });
    });
});

describe("Tests for putSlidesDocumentFromHtml", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesDocumentFromHtml", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
            return TestInitializer.assertValidCall(api.putSlidesDocumentFromHtml(request), false, "putSlidesDocumentFromHtml");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field);
        });
    });

    it("invalid html test", () => {
        const field = "html";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.html = <string>TestInitializer.invalidizeValue(request.html, field, "string");
        return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.html).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field);
        });
    });
});

describe("Tests for putSlidesSlideSize", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesSlideSize", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutSlidesSlideSizeRequest();
            return TestInitializer.assertValidCall(api.putSlidesSlideSize(request), false, "putSlidesSlideSize");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field);
        });
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.width).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field);
        });
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.height).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field);
        });
    });

    it("invalid sizeType test", () => {
        const field = "sizeType";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.sizeType = <string>TestInitializer.invalidizeValue(request.sizeType, field, "string");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.sizeType).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field);
        });
    });

    it("invalid scaleType test", () => {
        const field = "scaleType";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.scaleType = <string>TestInitializer.invalidizeValue(request.scaleType, field, "string");
        return TestInitializer.initialize("putSlidesSlideSize", field, request.scaleType).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideSize(request), "putSlidesSlideSize", field);
        });
    });
});

describe("Tests for getSlidesImageWithFormat", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesImageWithFormat", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesImageWithFormatRequest();
            return TestInitializer.assertValidCall(api.getSlidesImageWithFormat(request), true, "getSlidesImageWithFormat");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesImageWithFormat", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field);
        });
    });

    it("invalid index test", () => {
        const field = "index";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.index = <number>TestInitializer.invalidizeValue(request.index, field, "number");
        return TestInitializer.initialize("getSlidesImageWithFormat", field, request.index).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field);
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string");
        return TestInitializer.initialize("getSlidesImageWithFormat", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesImageWithFormat", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesImageWithFormat", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesImageWithFormat", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field);
        });
    });
});

describe("Tests for getSlidesImages", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesImages", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesImagesRequest();
            return TestInitializer.assertValidCall(api.getSlidesImages(request), false, "getSlidesImages");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesImagesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesImages", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImages(request), "getSlidesImages", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesImagesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesImages", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImages(request), "getSlidesImages", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesImagesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesImages", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImages(request), "getSlidesImages", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesImagesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesImages", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesImages(request), "getSlidesImages", field);
        });
    });
});

describe("Tests for getSlidesSlideImages", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesSlideImages", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesSlideImagesRequest();
            return TestInitializer.assertValidCall(api.getSlidesSlideImages(request), false, "getSlidesSlideImages");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesSlideImages", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideImages(request), "getSlidesSlideImages", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlidesSlideImages", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideImages(request), "getSlidesSlideImages", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesSlideImages", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideImages(request), "getSlidesSlideImages", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesSlideImages", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideImages(request), "getSlidesSlideImages", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesSlideImages", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ImagesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideImages(request), "getSlidesSlideImages", field);
        });
    });
});

describe("Tests for getLayoutSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("getLayoutSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetLayoutSlideRequest();
            return TestInitializer.assertValidCall(api.getLayoutSlide(request), false, "getLayoutSlide");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getLayoutSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlide(request), "getLayoutSlide", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getLayoutSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlide(request), "getLayoutSlide", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getLayoutSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlide(request), "getLayoutSlide", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getLayoutSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlide(request), "getLayoutSlide", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getLayoutSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlide(request), "getLayoutSlide", field);
        });
    });
});

describe("Tests for getLayoutSlidesList", () => {
    it("main test", () => {
        return TestInitializer.initialize("getLayoutSlidesList", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetLayoutSlidesListRequest();
            return TestInitializer.assertValidCall(api.getLayoutSlidesList(request), false, "getLayoutSlidesList");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetLayoutSlidesListRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getLayoutSlidesList", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlidesList(request), "getLayoutSlidesList", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetLayoutSlidesListRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getLayoutSlidesList", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlidesList(request), "getLayoutSlidesList", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetLayoutSlidesListRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getLayoutSlidesList", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlidesList(request), "getLayoutSlidesList", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetLayoutSlidesListRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getLayoutSlidesList", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getLayoutSlidesList(request), "getLayoutSlidesList", field);
        });
    });
});

describe("Tests for postCopyLayoutSlideFromSourcePresentation", () => {
    it("main test", () => {
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
            return TestInitializer.assertValidCall(api.postCopyLayoutSlideFromSourcePresentation(request), false, "postCopyLayoutSlideFromSourcePresentation");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field);
        });
    });

    it("invalid cloneFrom test", () => {
        const field = "cloneFrom";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.cloneFrom = <string>TestInitializer.invalidizeValue(request.cloneFrom, field, "string");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.cloneFrom).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field);
        });
    });

    it("invalid cloneFromPosition test", () => {
        const field = "cloneFromPosition";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.cloneFromPosition = <number>TestInitializer.invalidizeValue(request.cloneFromPosition, field, "number");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromPosition).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field);
        });
    });

    it("invalid cloneFromPassword test", () => {
        const field = "cloneFromPassword";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.cloneFromPassword = <string>TestInitializer.invalidizeValue(request.cloneFromPassword, field, "string");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromPassword).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field);
        });
    });

    it("invalid cloneFromStorage test", () => {
        const field = "cloneFromStorage";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.cloneFromStorage = <string>TestInitializer.invalidizeValue(request.cloneFromStorage, field, "string");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromStorage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field);
        });
    });
});

describe("Tests for putLayoutSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("putLayoutSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutLayoutSlideRequest();
            return TestInitializer.assertValidCall(api.putLayoutSlide(request), false, "putLayoutSlide");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putLayoutSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putLayoutSlide(request), "putLayoutSlide", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("putLayoutSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putLayoutSlide(request), "putLayoutSlide", field);
        });
    });

    it("invalid slideDto test", () => {
        const field = "slideDto";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.slideDto = <model.LayoutSlide>TestInitializer.invalidizeValue(request.slideDto, field, "LayoutSlide");
        return TestInitializer.initialize("putLayoutSlide", field, request.slideDto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putLayoutSlide(request), "putLayoutSlide", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putLayoutSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putLayoutSlide(request), "putLayoutSlide", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putLayoutSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putLayoutSlide(request), "putLayoutSlide", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putLayoutSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.LayoutSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putLayoutSlide(request), "putLayoutSlide", field);
        });
    });
});

describe("Tests for getMasterSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("getMasterSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetMasterSlideRequest();
            return TestInitializer.assertValidCall(api.getMasterSlide(request), false, "getMasterSlide");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetMasterSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getMasterSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlide(request), "getMasterSlide", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetMasterSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getMasterSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlide(request), "getMasterSlide", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetMasterSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getMasterSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlide(request), "getMasterSlide", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetMasterSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getMasterSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlide(request), "getMasterSlide", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetMasterSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getMasterSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlide(request), "getMasterSlide", field);
        });
    });
});

describe("Tests for getMasterSlidesList", () => {
    it("main test", () => {
        return TestInitializer.initialize("getMasterSlidesList", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetMasterSlidesListRequest();
            return TestInitializer.assertValidCall(api.getMasterSlidesList(request), false, "getMasterSlidesList");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetMasterSlidesListRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getMasterSlidesList", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlidesList(request), "getMasterSlidesList", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetMasterSlidesListRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getMasterSlidesList", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlidesList(request), "getMasterSlidesList", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetMasterSlidesListRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getMasterSlidesList", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlidesList(request), "getMasterSlidesList", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetMasterSlidesListRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getMasterSlidesList", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getMasterSlidesList(request), "getMasterSlidesList", field);
        });
    });
});

describe("Tests for postCopyMasterSlideFromSourcePresentation", () => {
    it("main test", () => {
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
            return TestInitializer.assertValidCall(api.postCopyMasterSlideFromSourcePresentation(request), false, "postCopyMasterSlideFromSourcePresentation");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field);
        });
    });

    it("invalid cloneFrom test", () => {
        const field = "cloneFrom";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.cloneFrom = <string>TestInitializer.invalidizeValue(request.cloneFrom, field, "string");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.cloneFrom).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field);
        });
    });

    it("invalid cloneFromPosition test", () => {
        const field = "cloneFromPosition";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.cloneFromPosition = <number>TestInitializer.invalidizeValue(request.cloneFromPosition, field, "number");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.cloneFromPosition).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field);
        });
    });

    it("invalid cloneFromPassword test", () => {
        const field = "cloneFromPassword";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.cloneFromPassword = <string>TestInitializer.invalidizeValue(request.cloneFromPassword, field, "string");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.cloneFromPassword).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field);
        });
    });

    it("invalid cloneFromStorage test", () => {
        const field = "cloneFromStorage";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.cloneFromStorage = <string>TestInitializer.invalidizeValue(request.cloneFromStorage, field, "string");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.cloneFromStorage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field);
        });
    });

    it("invalid applyToAll test", () => {
        const field = "applyToAll";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.applyToAll = <boolean>TestInitializer.invalidizeValue(request.applyToAll, field, "boolean");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.applyToAll).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MasterSlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field);
        });
    });
});

describe("Tests for postPresentationMerge", () => {
    it("main test", () => {
        return TestInitializer.initialize("postPresentationMerge", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MergeDocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostPresentationMergeRequest();
            return TestInitializer.assertValidCall(api.postPresentationMerge(request), false, "postPresentationMerge");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postPresentationMerge", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MergeDocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postPresentationMerge(request), "postPresentationMerge", field);
        });
    });

    it("invalid request test", () => {
        const field = "request";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.request = <model.PresentationsMergeRequest>TestInitializer.invalidizeValue(request.request, field, "PresentationsMergeRequest");
        return TestInitializer.initialize("postPresentationMerge", field, request.request).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MergeDocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postPresentationMerge(request), "postPresentationMerge", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postPresentationMerge", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MergeDocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postPresentationMerge(request), "postPresentationMerge", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postPresentationMerge", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MergeDocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postPresentationMerge(request), "postPresentationMerge", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postPresentationMerge", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MergeDocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postPresentationMerge(request), "postPresentationMerge", field);
        });
    });
});

describe("Tests for putPresentationMerge", () => {
    it("main test", () => {
        return TestInitializer.initialize("putPresentationMerge", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MergeDocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutPresentationMergeRequest();
            return TestInitializer.assertValidCall(api.putPresentationMerge(request), false, "putPresentationMerge");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putPresentationMerge", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MergeDocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putPresentationMerge(request), "putPresentationMerge", field);
        });
    });

    it("invalid request test", () => {
        const field = "request";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.request = <model.OrderedMergeRequest>TestInitializer.invalidizeValue(request.request, field, "OrderedMergeRequest");
        return TestInitializer.initialize("putPresentationMerge", field, request.request).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MergeDocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putPresentationMerge(request), "putPresentationMerge", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putPresentationMerge", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MergeDocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putPresentationMerge(request), "putPresentationMerge", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putPresentationMerge", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MergeDocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putPresentationMerge(request), "putPresentationMerge", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putPresentationMerge", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.MergeDocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putPresentationMerge(request), "putPresentationMerge", field);
        });
    });
});

describe("Tests for deleteNotesSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlideRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlide(request), false, "deleteNotesSlide");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteNotesSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlide(request), "deleteNotesSlide", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlide(request), "deleteNotesSlide", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteNotesSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlide(request), "deleteNotesSlide", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteNotesSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlide(request), "deleteNotesSlide", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteNotesSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlide(request), "deleteNotesSlide", field);
        });
    });
});

describe("Tests for getNotesSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideRequest();
            return TestInitializer.assertValidCall(api.getNotesSlide(request), false, "getNotesSlide");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getNotesSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlide(request), "getNotesSlide", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getNotesSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlide(request), "getNotesSlide", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getNotesSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlide(request), "getNotesSlide", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getNotesSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlide(request), "getNotesSlide", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getNotesSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlide(request), "getNotesSlide", field);
        });
    });
});

describe("Tests for getNotesSlideWithFormat", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideWithFormat", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideWithFormatRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideWithFormat(request), true, "getNotesSlideWithFormat");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field);
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field);
        });
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.width).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field);
        });
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.height).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getNotesSlideWithFormat", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field);
        });
    });
});

describe("Tests for postAddNotesSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("postAddNotesSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostAddNotesSlideRequest();
            return TestInitializer.assertValidCall(api.postAddNotesSlide(request), false, "postAddNotesSlide");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postAddNotesSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNotesSlide(request), "postAddNotesSlide", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("postAddNotesSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNotesSlide(request), "postAddNotesSlide", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.dto = <model.NotesSlide>TestInitializer.invalidizeValue(request.dto, field, "NotesSlide");
        return TestInitializer.initialize("postAddNotesSlide", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNotesSlide(request), "postAddNotesSlide", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postAddNotesSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNotesSlide(request), "postAddNotesSlide", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postAddNotesSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNotesSlide(request), "postAddNotesSlide", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postAddNotesSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNotesSlide(request), "postAddNotesSlide", field);
        });
    });
});

describe("Tests for putUpdateNotesSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("putUpdateNotesSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutUpdateNotesSlideRequest();
            return TestInitializer.assertValidCall(api.putUpdateNotesSlide(request), false, "putUpdateNotesSlide");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlide(request), "putUpdateNotesSlide", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("putUpdateNotesSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlide(request), "putUpdateNotesSlide", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.dto = <model.NotesSlide>TestInitializer.invalidizeValue(request.dto, field, "NotesSlide");
        return TestInitializer.initialize("putUpdateNotesSlide", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlide(request), "putUpdateNotesSlide", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlide(request), "putUpdateNotesSlide", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlide(request), "putUpdateNotesSlide", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlide(request), "putUpdateNotesSlide", field);
        });
    });
});

describe("Tests for deleteNotesSlideParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlideParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlideParagraphRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlideParagraph(request), false, "deleteNotesSlideParagraph");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field);
        });
    });
});

describe("Tests for deleteNotesSlideParagraphs", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlideParagraphs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlideParagraphs(request), false, "deleteNotesSlideParagraphs");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field);
        });
    });

    it("invalid paragraphs test", () => {
        const field = "paragraphs";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.paragraphs = <Array<number>>TestInitializer.invalidizeValue(request.paragraphs, field, "Array&lt;number&gt;");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.paragraphs).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field);
        });
    });
});

describe("Tests for deleteNotesSlidePortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlidePortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlidePortionRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlidePortion(request), false, "deleteNotesSlidePortion");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field);
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.portionIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteNotesSlidePortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field);
        });
    });
});

describe("Tests for deleteNotesSlidePortions", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlidePortions", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlidePortionsRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlidePortions(request), false, "deleteNotesSlidePortions");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field);
        });
    });

    it("invalid portions test", () => {
        const field = "portions";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.portions = <Array<number>>TestInitializer.invalidizeValue(request.portions, field, "Array&lt;number&gt;");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.portions).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteNotesSlidePortions", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field);
        });
    });
});

describe("Tests for deleteNotesSlideShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlideShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlideShapeRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlideShape(request), false, "deleteNotesSlideShape");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteNotesSlideShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShape(request), "deleteNotesSlideShape", field);
        });
    });
});

describe("Tests for deleteNotesSlideShapes", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteNotesSlideShapes", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteNotesSlideShapesRequest();
            return TestInitializer.assertValidCall(api.deleteNotesSlideShapes(request), false, "deleteNotesSlideShapes");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field);
        });
    });

    it("invalid shapes test", () => {
        const field = "shapes";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.shapes = <Array<number>>TestInitializer.invalidizeValue(request.shapes, field, "Array&lt;number&gt;");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.shapes).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteNotesSlideShapes", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field);
        });
    });
});

describe("Tests for getNotesSlideShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideShapeRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideShape(request), false, "getNotesSlideShape");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getNotesSlideShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("getNotesSlideShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShape", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getNotesSlideShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getNotesSlideShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getNotesSlideShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShape(request), "getNotesSlideShape", field);
        });
    });
});

describe("Tests for getNotesSlideShapeParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideShapeParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideShapeParagraph(request), false, "getNotesSlideShapeParagraph");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field);
        });
    });
});

describe("Tests for getNotesSlideShapeParagraphs", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideShapeParagraphs(request), false, "getNotesSlideShapeParagraphs");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field);
        });
    });
});

describe("Tests for getNotesSlideShapePortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideShapePortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideShapePortionRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideShapePortion(request), false, "getNotesSlideShapePortion");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field);
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.portionIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getNotesSlideShapePortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field);
        });
    });
});

describe("Tests for getNotesSlideShapePortions", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideShapePortions", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideShapePortionsRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideShapePortions(request), false, "getNotesSlideShapePortions");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getNotesSlideShapePortions", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field);
        });
    });
});

describe("Tests for getNotesSlideShapeWithFormat", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideShapeWithFormat", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideShapeWithFormatRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideShapeWithFormat(request), true, "getNotesSlideShapeWithFormat");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapeWithFormatRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeWithFormat", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeWithFormat(request), "getNotesSlideShapeWithFormat", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapeWithFormatRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapeWithFormat", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeWithFormat(request), "getNotesSlideShapeWithFormat", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapeWithFormatRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapeWithFormat", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeWithFormat(request), "getNotesSlideShapeWithFormat", field);
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getGetNotesSlideShapeWithFormatRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeWithFormat", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeWithFormat(request), "getNotesSlideShapeWithFormat", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapeWithFormatRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeWithFormat", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeWithFormat(request), "getNotesSlideShapeWithFormat", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapeWithFormatRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeWithFormat", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeWithFormat(request), "getNotesSlideShapeWithFormat", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapeWithFormatRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeWithFormat", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeWithFormat(request), "getNotesSlideShapeWithFormat", field);
        });
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getGetNotesSlideShapeWithFormatRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number");
        return TestInitializer.initialize("getNotesSlideShapeWithFormat", field, request.scaleX).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeWithFormat(request), "getNotesSlideShapeWithFormat", field);
        });
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getGetNotesSlideShapeWithFormatRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number");
        return TestInitializer.initialize("getNotesSlideShapeWithFormat", field, request.scaleY).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeWithFormat(request), "getNotesSlideShapeWithFormat", field);
        });
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getGetNotesSlideShapeWithFormatRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeWithFormat", field, request.bounds).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeWithFormat(request), "getNotesSlideShapeWithFormat", field);
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getGetNotesSlideShapeWithFormatRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeWithFormat", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeWithFormat(request), "getNotesSlideShapeWithFormat", field);
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getGetNotesSlideShapeWithFormatRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string");
        return TestInitializer.initialize("getNotesSlideShapeWithFormat", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapeWithFormat(request), "getNotesSlideShapeWithFormat", field);
        });
    });
});

describe("Tests for getNotesSlideShapes", () => {
    it("main test", () => {
        return TestInitializer.initialize("getNotesSlideShapes", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetNotesSlideShapesRequest();
            return TestInitializer.assertValidCall(api.getNotesSlideShapes(request), false, "getNotesSlideShapes");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getNotesSlideShapes", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapes(request), "getNotesSlideShapes", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getNotesSlideShapes", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapes(request), "getNotesSlideShapes", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("getNotesSlideShapes", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapes(request), "getNotesSlideShapes", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getNotesSlideShapes", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapes(request), "getNotesSlideShapes", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getNotesSlideShapes", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapes(request), "getNotesSlideShapes", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getNotesSlideShapes", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getNotesSlideShapes(request), "getNotesSlideShapes", field);
        });
    });
});

describe("Tests for postNotesSlideAddNewParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
            return TestInitializer.assertValidCall(api.postNotesSlideAddNewParagraph(request), false, "postNotesSlideAddNewParagraph");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field);
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number");
        return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field);
        });
    });
});

describe("Tests for postNotesSlideAddNewPortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("postNotesSlideAddNewPortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
            return TestInitializer.assertValidCall(api.postNotesSlideAddNewPortion(request), false, "postNotesSlideAddNewPortion");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field);
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number");
        return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field);
        });
    });
});

describe("Tests for postNotesSlideAddNewShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("postNotesSlideAddNewShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
            return TestInitializer.assertValidCall(api.postNotesSlideAddNewShape(request), false, "postNotesSlideAddNewShape");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field);
        });
    });

    it("invalid shapeToClone test", () => {
        const field = "shapeToClone";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.shapeToClone = <number>TestInitializer.invalidizeValue(request.shapeToClone, field, "number");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.shapeToClone).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field);
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number");
        return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field);
        });
    });
});

describe("Tests for postNotesSlideShapeSaveAs", () => {
    it("main test", () => {
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
            return TestInitializer.assertValidCall(api.postNotesSlideShapeSaveAs(request), true, "postNotesSlideShapeSaveAs");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field);
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field);
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.options = <model.IShapeExportOptions>TestInitializer.invalidizeValue(request.options, field, "IShapeExportOptions");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field);
        });
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.scaleX).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field);
        });
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.scaleY).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field);
        });
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.bounds).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field);
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field);
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string");
        return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field);
        });
    });
});

describe("Tests for putUpdateNotesSlideShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("putUpdateNotesSlideShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
            return TestInitializer.assertValidCall(api.putUpdateNotesSlideShape(request), false, "putUpdateNotesSlideShape");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field);
        });
    });
});

describe("Tests for putUpdateNotesSlideShapeParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
            return TestInitializer.assertValidCall(api.putUpdateNotesSlideShapeParagraph(request), false, "putUpdateNotesSlideShapeParagraph");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field);
        });
    });
});

describe("Tests for putUpdateNotesSlideShapePortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
            return TestInitializer.assertValidCall(api.putUpdateNotesSlideShapePortion(request), false, "putUpdateNotesSlideShapePortion");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field);
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.portionIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.NotesSlideShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field);
        });
    });
});

describe("Tests for getSlidesPlaceholder", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesPlaceholder", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PlaceholdersApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesPlaceholderRequest();
            return TestInitializer.assertValidCall(api.getSlidesPlaceholder(request), false, "getSlidesPlaceholder");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesPlaceholder", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PlaceholdersApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholder(request), "getSlidesPlaceholder", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlidesPlaceholder", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PlaceholdersApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholder(request), "getSlidesPlaceholder", field);
        });
    });

    it("invalid placeholderIndex test", () => {
        const field = "placeholderIndex";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.placeholderIndex = <number>TestInitializer.invalidizeValue(request.placeholderIndex, field, "number");
        return TestInitializer.initialize("getSlidesPlaceholder", field, request.placeholderIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PlaceholdersApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholder(request), "getSlidesPlaceholder", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesPlaceholder", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PlaceholdersApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholder(request), "getSlidesPlaceholder", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesPlaceholder", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PlaceholdersApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholder(request), "getSlidesPlaceholder", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesPlaceholder", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PlaceholdersApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholder(request), "getSlidesPlaceholder", field);
        });
    });
});

describe("Tests for getSlidesPlaceholders", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesPlaceholders", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PlaceholdersApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesPlaceholdersRequest();
            return TestInitializer.assertValidCall(api.getSlidesPlaceholders(request), false, "getSlidesPlaceholders");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesPlaceholders", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PlaceholdersApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholders(request), "getSlidesPlaceholders", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlidesPlaceholders", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PlaceholdersApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholders(request), "getSlidesPlaceholders", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesPlaceholders", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PlaceholdersApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholders(request), "getSlidesPlaceholders", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesPlaceholders", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PlaceholdersApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholders(request), "getSlidesPlaceholders", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesPlaceholders", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PlaceholdersApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPlaceholders(request), "getSlidesPlaceholders", field);
        });
    });
});

describe("Tests for deleteSlidesDocumentProperties", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlidesDocumentProperties", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
            return TestInitializer.assertValidCall(api.deleteSlidesDocumentProperties(request), false, "deleteSlidesDocumentProperties");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteSlidesDocumentProperties", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperties(request), "deleteSlidesDocumentProperties", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteSlidesDocumentProperties", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperties(request), "deleteSlidesDocumentProperties", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteSlidesDocumentProperties", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperties(request), "deleteSlidesDocumentProperties", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteSlidesDocumentProperties", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperties(request), "deleteSlidesDocumentProperties", field);
        });
    });
});

describe("Tests for deleteSlidesDocumentProperty", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlidesDocumentProperty", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
            return TestInitializer.assertValidCall(api.deleteSlidesDocumentProperty(request), false, "deleteSlidesDocumentProperty");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field);
        });
    });

    it("invalid propertyName test", () => {
        const field = "propertyName";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.propertyName = <string>TestInitializer.invalidizeValue(request.propertyName, field, "string");
        return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.propertyName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field);
        });
    });
});

describe("Tests for getSlidesDocumentProperties", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesDocumentProperties", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
            return TestInitializer.assertValidCall(api.getSlidesDocumentProperties(request), false, "getSlidesDocumentProperties");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesDocumentProperties", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperties(request), "getSlidesDocumentProperties", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesDocumentProperties", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperties(request), "getSlidesDocumentProperties", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesDocumentProperties", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperties(request), "getSlidesDocumentProperties", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesDocumentProperties", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperties(request), "getSlidesDocumentProperties", field);
        });
    });
});

describe("Tests for getSlidesDocumentProperty", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesDocumentProperty", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesDocumentPropertyRequest();
            return TestInitializer.assertValidCall(api.getSlidesDocumentProperty(request), false, "getSlidesDocumentProperty");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesDocumentProperty", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field);
        });
    });

    it("invalid propertyName test", () => {
        const field = "propertyName";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.propertyName = <string>TestInitializer.invalidizeValue(request.propertyName, field, "string");
        return TestInitializer.initialize("getSlidesDocumentProperty", field, request.propertyName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesDocumentProperty", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesDocumentProperty", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesDocumentProperty", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field);
        });
    });
});

describe("Tests for postSlidesSetDocumentProperties", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesSetDocumentProperties", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
            return TestInitializer.assertValidCall(api.postSlidesSetDocumentProperties(request), false, "postSlidesSetDocumentProperties");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field);
        });
    });

    it("invalid properties test", () => {
        const field = "properties";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.properties = <model.DocumentProperties>TestInitializer.invalidizeValue(request.properties, field, "DocumentProperties");
        return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.properties).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field);
        });
    });
});

describe("Tests for putSlidesSetDocumentProperty", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesSetDocumentProperty", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
            return TestInitializer.assertValidCall(api.putSlidesSetDocumentProperty(request), false, "putSlidesSetDocumentProperty");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field);
        });
    });

    it("invalid propertyName test", () => {
        const field = "propertyName";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.propertyName = <string>TestInitializer.invalidizeValue(request.propertyName, field, "string");
        return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.propertyName).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field);
        });
    });

    it("invalid property test", () => {
        const field = "property";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.property = <model.DocumentProperty>TestInitializer.invalidizeValue(request.property, field, "DocumentProperty");
        return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.property).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.PropertiesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field);
        });
    });
});

describe("Tests for deleteParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteParagraphRequest();
            return TestInitializer.assertValidCall(api.deleteParagraph(request), false, "deleteParagraph");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deleteParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("deleteParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("deleteParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("deleteParagraph", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraph(request), "deleteParagraph", field);
        });
    });
});

describe("Tests for deleteParagraphs", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteParagraphs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteParagraphsRequest();
            return TestInitializer.assertValidCall(api.deleteParagraphs(request), false, "deleteParagraphs");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteParagraphs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deleteParagraphs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("deleteParagraphs", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("deleteParagraphs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field);
        });
    });

    it("invalid paragraphs test", () => {
        const field = "paragraphs";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.paragraphs = <Array<number>>TestInitializer.invalidizeValue(request.paragraphs, field, "Array&lt;number&gt;");
        return TestInitializer.initialize("deleteParagraphs", field, request.paragraphs).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteParagraphs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteParagraphs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteParagraphs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteParagraphs(request), "deleteParagraphs", field);
        });
    });
});

describe("Tests for deletePortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("deletePortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeletePortionRequest();
            return TestInitializer.assertValidCall(api.deletePortion(request), false, "deletePortion");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeletePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deletePortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeletePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deletePortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeletePortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("deletePortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeletePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("deletePortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeletePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("deletePortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field);
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getDeletePortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number");
        return TestInitializer.initialize("deletePortion", field, request.portionIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeletePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deletePortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeletePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deletePortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeletePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deletePortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortion(request), "deletePortion", field);
        });
    });
});

describe("Tests for deletePortions", () => {
    it("main test", () => {
        return TestInitializer.initialize("deletePortions", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeletePortionsRequest();
            return TestInitializer.assertValidCall(api.deletePortions(request), false, "deletePortions");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeletePortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deletePortions", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeletePortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deletePortions", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeletePortionsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("deletePortions", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeletePortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("deletePortions", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeletePortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("deletePortions", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field);
        });
    });

    it("invalid portions test", () => {
        const field = "portions";
        const request = TestUtils.getDeletePortionsRequest();
        request.portions = <Array<number>>TestInitializer.invalidizeValue(request.portions, field, "Array&lt;number&gt;");
        return TestInitializer.initialize("deletePortions", field, request.portions).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeletePortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deletePortions", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeletePortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deletePortions", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeletePortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deletePortions", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deletePortions(request), "deletePortions", field);
        });
    });
});

describe("Tests for deleteSlideShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlideShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteSlideShapeRequest();
            return TestInitializer.assertValidCall(api.deleteSlideShape(request), false, "deleteSlideShape");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteSlideShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deleteSlideShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("deleteSlideShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("deleteSlideShape", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteSlideShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteSlideShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteSlideShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShape(request), "deleteSlideShape", field);
        });
    });
});

describe("Tests for deleteSlideShapes", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlideShapes", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteSlideShapesRequest();
            return TestInitializer.assertValidCall(api.deleteSlideShapes(request), false, "deleteSlideShapes");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteSlideShapes", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deleteSlideShapes", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("deleteSlideShapes", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field);
        });
    });

    it("invalid shapes test", () => {
        const field = "shapes";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.shapes = <Array<number>>TestInitializer.invalidizeValue(request.shapes, field, "Array&lt;number&gt;");
        return TestInitializer.initialize("deleteSlideShapes", field, request.shapes).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteSlideShapes", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteSlideShapes", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteSlideShapes", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideShapes(request), "deleteSlideShapes", field);
        });
    });
});

describe("Tests for getParagraphPortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("getParagraphPortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetParagraphPortionRequest();
            return TestInitializer.assertValidCall(api.getParagraphPortion(request), false, "getParagraphPortion");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getParagraphPortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getParagraphPortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("getParagraphPortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("getParagraphPortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("getParagraphPortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field);
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number");
        return TestInitializer.initialize("getParagraphPortion", field, request.portionIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getParagraphPortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getParagraphPortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getParagraphPortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortion(request), "getParagraphPortion", field);
        });
    });
});

describe("Tests for getParagraphPortions", () => {
    it("main test", () => {
        return TestInitializer.initialize("getParagraphPortions", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetParagraphPortionsRequest();
            return TestInitializer.assertValidCall(api.getParagraphPortions(request), false, "getParagraphPortions");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getParagraphPortions", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getParagraphPortions", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("getParagraphPortions", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("getParagraphPortions", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("getParagraphPortions", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getParagraphPortions", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getParagraphPortions", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getParagraphPortions", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getParagraphPortions(request), "getParagraphPortions", field);
        });
    });
});

describe("Tests for getShapeParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("getShapeParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetShapeParagraphRequest();
            return TestInitializer.assertValidCall(api.getShapeParagraph(request), false, "getShapeParagraph");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetShapeParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getShapeParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeParagraph(request), "getShapeParagraph", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetShapeParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getShapeParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeParagraph(request), "getShapeParagraph", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetShapeParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("getShapeParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeParagraph(request), "getShapeParagraph", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetShapeParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("getShapeParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeParagraph(request), "getShapeParagraph", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetShapeParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("getShapeParagraph", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeParagraph(request), "getShapeParagraph", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetShapeParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getShapeParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeParagraph(request), "getShapeParagraph", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetShapeParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getShapeParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeParagraph(request), "getShapeParagraph", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetShapeParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getShapeParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeParagraph(request), "getShapeParagraph", field);
        });
    });
});

describe("Tests for getShapeWithFormat", () => {
    it("main test", () => {
        return TestInitializer.initialize("getShapeWithFormat", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetShapeWithFormatRequest();
            return TestInitializer.assertValidCall(api.getShapeWithFormat(request), true, "getShapeWithFormat");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetShapeWithFormatRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getShapeWithFormat", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeWithFormat(request), "getShapeWithFormat", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetShapeWithFormatRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getShapeWithFormat", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeWithFormat(request), "getShapeWithFormat", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetShapeWithFormatRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("getShapeWithFormat", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeWithFormat(request), "getShapeWithFormat", field);
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getGetShapeWithFormatRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string");
        return TestInitializer.initialize("getShapeWithFormat", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeWithFormat(request), "getShapeWithFormat", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetShapeWithFormatRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getShapeWithFormat", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeWithFormat(request), "getShapeWithFormat", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetShapeWithFormatRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getShapeWithFormat", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeWithFormat(request), "getShapeWithFormat", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetShapeWithFormatRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getShapeWithFormat", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeWithFormat(request), "getShapeWithFormat", field);
        });
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getGetShapeWithFormatRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number");
        return TestInitializer.initialize("getShapeWithFormat", field, request.scaleX).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeWithFormat(request), "getShapeWithFormat", field);
        });
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getGetShapeWithFormatRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number");
        return TestInitializer.initialize("getShapeWithFormat", field, request.scaleY).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeWithFormat(request), "getShapeWithFormat", field);
        });
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getGetShapeWithFormatRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string");
        return TestInitializer.initialize("getShapeWithFormat", field, request.bounds).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeWithFormat(request), "getShapeWithFormat", field);
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getGetShapeWithFormatRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string");
        return TestInitializer.initialize("getShapeWithFormat", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeWithFormat(request), "getShapeWithFormat", field);
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getGetShapeWithFormatRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string");
        return TestInitializer.initialize("getShapeWithFormat", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getShapeWithFormat(request), "getShapeWithFormat", field);
        });
    });
});

describe("Tests for getSlideShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlideShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlideShapeRequest();
            return TestInitializer.assertValidCall(api.getSlideShape(request), false, "getSlideShape");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlideShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlideShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetSlideShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("getSlideShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("getSlideShape", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlideShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlideShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlideShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShape(request), "getSlideShape", field);
        });
    });
});

describe("Tests for getSlideShapeParagraphs", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlideShapeParagraphs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlideShapeParagraphsRequest();
            return TestInitializer.assertValidCall(api.getSlideShapeParagraphs(request), false, "getSlideShapeParagraphs");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlideShapeParagraphs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field);
        });
    });
});

describe("Tests for getSlideShapes", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlideShapes", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlideShapesRequest();
            return TestInitializer.assertValidCall(api.getSlideShapes(request), false, "getSlideShapes");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideShapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlideShapes", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapes(request), "getSlideShapes", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideShapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlideShapes", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapes(request), "getSlideShapes", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetSlideShapesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("getSlideShapes", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapes(request), "getSlideShapes", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideShapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlideShapes", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapes(request), "getSlideShapes", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideShapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlideShapes", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapes(request), "getSlideShapes", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideShapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlideShapes", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideShapes(request), "getSlideShapes", field);
        });
    });
});

describe("Tests for postAddNewParagraph", () => {
    it("main test", () => {
        return TestInitializer.initialize("postAddNewParagraph", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostAddNewParagraphRequest();
            return TestInitializer.assertValidCall(api.postAddNewParagraph(request), false, "postAddNewParagraph");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postAddNewParagraph", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("postAddNewParagraph", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("postAddNewParagraph", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("postAddNewParagraph", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph");
        return TestInitializer.initialize("postAddNewParagraph", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postAddNewParagraph", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postAddNewParagraph", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postAddNewParagraph", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field);
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number");
        return TestInitializer.initialize("postAddNewParagraph", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewParagraph(request), "postAddNewParagraph", field);
        });
    });
});

describe("Tests for postAddNewPortion", () => {
    it("main test", () => {
        return TestInitializer.initialize("postAddNewPortion", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostAddNewPortionRequest();
            return TestInitializer.assertValidCall(api.postAddNewPortion(request), false, "postAddNewPortion");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postAddNewPortion", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("postAddNewPortion", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("postAddNewPortion", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("postAddNewPortion", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("postAddNewPortion", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion");
        return TestInitializer.initialize("postAddNewPortion", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postAddNewPortion", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postAddNewPortion", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postAddNewPortion", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field);
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number");
        return TestInitializer.initialize("postAddNewPortion", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewPortion(request), "postAddNewPortion", field);
        });
    });
});

describe("Tests for postAddNewShape", () => {
    it("main test", () => {
        return TestInitializer.initialize("postAddNewShape", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostAddNewShapeRequest();
            return TestInitializer.assertValidCall(api.postAddNewShape(request), false, "postAddNewShape");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postAddNewShape", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("postAddNewShape", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("postAddNewShape", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase");
        return TestInitializer.initialize("postAddNewShape", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postAddNewShape", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postAddNewShape", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postAddNewShape", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field);
        });
    });

    it("invalid shapeToClone test", () => {
        const field = "shapeToClone";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.shapeToClone = <number>TestInitializer.invalidizeValue(request.shapeToClone, field, "number");
        return TestInitializer.initialize("postAddNewShape", field, request.shapeToClone).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field);
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number");
        return TestInitializer.initialize("postAddNewShape", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postAddNewShape(request), "postAddNewShape", field);
        });
    });
});

describe("Tests for postShapeSaveAs", () => {
    it("main test", () => {
        return TestInitializer.initialize("postShapeSaveAs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostShapeSaveAsRequest();
            return TestInitializer.assertValidCall(api.postShapeSaveAs(request), true, "postShapeSaveAs");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postShapeSaveAs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("postShapeSaveAs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("postShapeSaveAs", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field);
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string");
        return TestInitializer.initialize("postShapeSaveAs", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field);
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.options = <model.IShapeExportOptions>TestInitializer.invalidizeValue(request.options, field, "IShapeExportOptions");
        return TestInitializer.initialize("postShapeSaveAs", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postShapeSaveAs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postShapeSaveAs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postShapeSaveAs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field);
        });
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number");
        return TestInitializer.initialize("postShapeSaveAs", field, request.scaleX).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field);
        });
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number");
        return TestInitializer.initialize("postShapeSaveAs", field, request.scaleY).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field);
        });
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string");
        return TestInitializer.initialize("postShapeSaveAs", field, request.bounds).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field);
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string");
        return TestInitializer.initialize("postShapeSaveAs", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field);
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string");
        return TestInitializer.initialize("postShapeSaveAs", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postShapeSaveAs(request), "postShapeSaveAs", field);
        });
    });
});

describe("Tests for putSetParagraphPortionProperties", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSetParagraphPortionProperties", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
            return TestInitializer.assertValidCall(api.putSetParagraphPortionProperties(request), false, "putSetParagraphPortionProperties");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field);
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.portionIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field);
        });
    });
});

describe("Tests for putSetParagraphProperties", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSetParagraphProperties", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutSetParagraphPropertiesRequest();
            return TestInitializer.assertValidCall(api.putSetParagraphProperties(request), false, "putSetParagraphProperties");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field);
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.paragraphIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putSetParagraphProperties", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSetParagraphProperties(request), "putSetParagraphProperties", field);
        });
    });
});

describe("Tests for putSlideShapeInfo", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlideShapeInfo", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutSlideShapeInfoRequest();
            return TestInitializer.assertValidCall(api.putSlideShapeInfo(request), false, "putSlideShapeInfo");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field);
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.path).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field);
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.shapeIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field);
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.dto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putSlideShapeInfo", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ShapesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlideShapeInfo(request), "putSlideShapeInfo", field);
        });
    });
});

describe("Tests for deleteSlideByIndex", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlideByIndex", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteSlideByIndexRequest();
            return TestInitializer.assertValidCall(api.deleteSlideByIndex(request), false, "deleteSlideByIndex");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteSlideByIndex", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideByIndex(request), "deleteSlideByIndex", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deleteSlideByIndex", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideByIndex(request), "deleteSlideByIndex", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteSlideByIndex", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideByIndex(request), "deleteSlideByIndex", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteSlideByIndex", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideByIndex(request), "deleteSlideByIndex", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteSlideByIndex", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlideByIndex(request), "deleteSlideByIndex", field);
        });
    });
});

describe("Tests for deleteSlidesCleanSlidesList", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlidesCleanSlidesList", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
            return TestInitializer.assertValidCall(api.deleteSlidesCleanSlidesList(request), false, "deleteSlidesCleanSlidesList");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field);
        });
    });

    it("invalid slides test", () => {
        const field = "slides";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.slides = <Array<number>>TestInitializer.invalidizeValue(request.slides, field, "Array&lt;number&gt;");
        return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.slides).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field);
        });
    });
});

describe("Tests for deleteSlidesSlideBackground", () => {
    it("main test", () => {
        return TestInitializer.initialize("deleteSlidesSlideBackground", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
            return TestInitializer.assertValidCall(api.deleteSlidesSlideBackground(request), false, "deleteSlidesSlideBackground");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field);
        });
    });
});

describe("Tests for getSlideWithFormat", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlideWithFormat", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlideWithFormatRequest();
            return TestInitializer.assertValidCall(api.getSlideWithFormat(request), true, "getSlideWithFormat");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideWithFormatRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlideWithFormat", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideWithFormat(request), "getSlideWithFormat", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideWithFormatRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlideWithFormat", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideWithFormat(request), "getSlideWithFormat", field);
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getGetSlideWithFormatRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string");
        return TestInitializer.initialize("getSlideWithFormat", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideWithFormat(request), "getSlideWithFormat", field);
        });
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getGetSlideWithFormatRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number");
        return TestInitializer.initialize("getSlideWithFormat", field, request.width).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideWithFormat(request), "getSlideWithFormat", field);
        });
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getGetSlideWithFormatRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number");
        return TestInitializer.initialize("getSlideWithFormat", field, request.height).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideWithFormat(request), "getSlideWithFormat", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideWithFormatRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlideWithFormat", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideWithFormat(request), "getSlideWithFormat", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideWithFormatRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlideWithFormat", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideWithFormat(request), "getSlideWithFormat", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideWithFormatRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlideWithFormat", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideWithFormat(request), "getSlideWithFormat", field);
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getGetSlideWithFormatRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string");
        return TestInitializer.initialize("getSlideWithFormat", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideWithFormat(request), "getSlideWithFormat", field);
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getGetSlideWithFormatRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string");
        return TestInitializer.initialize("getSlideWithFormat", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlideWithFormat(request), "getSlideWithFormat", field);
        });
    });
});

describe("Tests for getSlidesSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesSlideRequest();
            return TestInitializer.assertValidCall(api.getSlidesSlide(request), false, "getSlidesSlide");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlide(request), "getSlidesSlide", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlidesSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlide(request), "getSlidesSlide", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlide(request), "getSlidesSlide", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlide(request), "getSlidesSlide", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlide(request), "getSlidesSlide", field);
        });
    });
});

describe("Tests for getSlidesSlideBackground", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesSlideBackground", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesSlideBackgroundRequest();
            return TestInitializer.assertValidCall(api.getSlidesSlideBackground(request), false, "getSlidesSlideBackground");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesSlideBackground", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideBackground(request), "getSlidesSlideBackground", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlidesSlideBackground", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideBackground(request), "getSlidesSlideBackground", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesSlideBackground", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideBackground(request), "getSlidesSlideBackground", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesSlideBackground", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideBackground(request), "getSlidesSlideBackground", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesSlideBackground", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideBackground(request), "getSlidesSlideBackground", field);
        });
    });
});

describe("Tests for getSlidesSlideComments", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesSlideComments", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesSlideCommentsRequest();
            return TestInitializer.assertValidCall(api.getSlidesSlideComments(request), false, "getSlidesSlideComments");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesSlideComments", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideComments(request), "getSlidesSlideComments", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlidesSlideComments", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideComments(request), "getSlidesSlideComments", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesSlideComments", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideComments(request), "getSlidesSlideComments", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesSlideComments", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideComments(request), "getSlidesSlideComments", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesSlideComments", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideComments(request), "getSlidesSlideComments", field);
        });
    });
});

describe("Tests for getSlidesSlidesList", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesSlidesList", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesSlidesListRequest();
            return TestInitializer.assertValidCall(api.getSlidesSlidesList(request), false, "getSlidesSlidesList");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlidesListRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesSlidesList", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlidesList(request), "getSlidesSlidesList", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlidesListRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesSlidesList", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlidesList(request), "getSlidesSlidesList", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlidesListRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesSlidesList", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlidesList(request), "getSlidesSlidesList", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlidesListRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesSlidesList", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlidesList(request), "getSlidesSlidesList", field);
        });
    });
});

describe("Tests for postSlideSaveAs", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlideSaveAs", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostSlideSaveAsRequest();
            return TestInitializer.assertValidCall(api.postSlideSaveAs(request), true, "postSlideSaveAs");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postSlideSaveAs", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("postSlideSaveAs", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field);
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string");
        return TestInitializer.initialize("postSlideSaveAs", field, request.format).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field);
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.options = <model.ExportOptions>TestInitializer.invalidizeValue(request.options, field, "ExportOptions");
        return TestInitializer.initialize("postSlideSaveAs", field, request.options).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field);
        });
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number");
        return TestInitializer.initialize("postSlideSaveAs", field, request.width).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field);
        });
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number");
        return TestInitializer.initialize("postSlideSaveAs", field, request.height).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postSlideSaveAs", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postSlideSaveAs", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postSlideSaveAs", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field);
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string");
        return TestInitializer.initialize("postSlideSaveAs", field, request.outPath).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field);
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string");
        return TestInitializer.initialize("postSlideSaveAs", field, request.fontsFolder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlideSaveAs(request), "postSlideSaveAs", field);
        });
    });
});

describe("Tests for postSlidesAdd", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesAdd", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostSlidesAddRequest();
            return TestInitializer.assertValidCall(api.postSlidesAdd(request), false, "postSlidesAdd");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesAddRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postSlidesAdd", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesAdd(request), "postSlidesAdd", field);
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostSlidesAddRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number");
        return TestInitializer.initialize("postSlidesAdd", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesAdd(request), "postSlidesAdd", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesAddRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postSlidesAdd", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesAdd(request), "postSlidesAdd", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesAddRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postSlidesAdd", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesAdd(request), "postSlidesAdd", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesAddRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postSlidesAdd", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesAdd(request), "postSlidesAdd", field);
        });
    });

    it("invalid layoutAlias test", () => {
        const field = "layoutAlias";
        const request = TestUtils.getPostSlidesAddRequest();
        request.layoutAlias = <string>TestInitializer.invalidizeValue(request.layoutAlias, field, "string");
        return TestInitializer.initialize("postSlidesAdd", field, request.layoutAlias).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesAdd(request), "postSlidesAdd", field);
        });
    });
});

describe("Tests for postSlidesCopy", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesCopy", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostSlidesCopyRequest();
            return TestInitializer.assertValidCall(api.postSlidesCopy(request), false, "postSlidesCopy");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postSlidesCopy", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field);
        });
    });

    it("invalid slideToCopy test", () => {
        const field = "slideToCopy";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.slideToCopy = <number>TestInitializer.invalidizeValue(request.slideToCopy, field, "number");
        return TestInitializer.initialize("postSlidesCopy", field, request.slideToCopy).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field);
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number");
        return TestInitializer.initialize("postSlidesCopy", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field);
        });
    });

    it("invalid source test", () => {
        const field = "source";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.source = <string>TestInitializer.invalidizeValue(request.source, field, "string");
        return TestInitializer.initialize("postSlidesCopy", field, request.source).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field);
        });
    });

    it("invalid sourcePassword test", () => {
        const field = "sourcePassword";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.sourcePassword = <string>TestInitializer.invalidizeValue(request.sourcePassword, field, "string");
        return TestInitializer.initialize("postSlidesCopy", field, request.sourcePassword).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postSlidesCopy", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postSlidesCopy", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postSlidesCopy", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesCopy(request), "postSlidesCopy", field);
        });
    });
});

describe("Tests for postSlidesReorder", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesReorder", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostSlidesReorderRequest();
            return TestInitializer.assertValidCall(api.postSlidesReorder(request), false, "postSlidesReorder");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postSlidesReorder", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorder(request), "postSlidesReorder", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("postSlidesReorder", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorder(request), "postSlidesReorder", field);
        });
    });

    it("invalid newPosition test", () => {
        const field = "newPosition";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.newPosition = <number>TestInitializer.invalidizeValue(request.newPosition, field, "number");
        return TestInitializer.initialize("postSlidesReorder", field, request.newPosition).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorder(request), "postSlidesReorder", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postSlidesReorder", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorder(request), "postSlidesReorder", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postSlidesReorder", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorder(request), "postSlidesReorder", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postSlidesReorder", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorder(request), "postSlidesReorder", field);
        });
    });
});

describe("Tests for postSlidesReorderMany", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesReorderMany", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostSlidesReorderManyRequest();
            return TestInitializer.assertValidCall(api.postSlidesReorderMany(request), false, "postSlidesReorderMany");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postSlidesReorderMany", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderMany(request), "postSlidesReorderMany", field);
        });
    });

    it("invalid oldPositions test", () => {
        const field = "oldPositions";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.oldPositions = <Array<number>>TestInitializer.invalidizeValue(request.oldPositions, field, "Array&lt;number&gt;");
        return TestInitializer.initialize("postSlidesReorderMany", field, request.oldPositions).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderMany(request), "postSlidesReorderMany", field);
        });
    });

    it("invalid newPositions test", () => {
        const field = "newPositions";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.newPositions = <Array<number>>TestInitializer.invalidizeValue(request.newPositions, field, "Array&lt;number&gt;");
        return TestInitializer.initialize("postSlidesReorderMany", field, request.newPositions).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderMany(request), "postSlidesReorderMany", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postSlidesReorderMany", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderMany(request), "postSlidesReorderMany", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postSlidesReorderMany", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderMany(request), "postSlidesReorderMany", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postSlidesReorderMany", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderMany(request), "postSlidesReorderMany", field);
        });
    });
});

describe("Tests for postSlidesReorderPosition", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesReorderPosition", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostSlidesReorderPositionRequest();
            return TestInitializer.assertValidCall(api.postSlidesReorderPosition(request), false, "postSlidesReorderPosition");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesReorderPositionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postSlidesReorderPosition", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderPosition(request), "postSlidesReorderPosition", field);
        });
    });

    it("invalid oldPosition test", () => {
        const field = "oldPosition";
        const request = TestUtils.getPostSlidesReorderPositionRequest();
        request.oldPosition = <number>TestInitializer.invalidizeValue(request.oldPosition, field, "number");
        return TestInitializer.initialize("postSlidesReorderPosition", field, request.oldPosition).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderPosition(request), "postSlidesReorderPosition", field);
        });
    });

    it("invalid newPosition test", () => {
        const field = "newPosition";
        const request = TestUtils.getPostSlidesReorderPositionRequest();
        request.newPosition = <number>TestInitializer.invalidizeValue(request.newPosition, field, "number");
        return TestInitializer.initialize("postSlidesReorderPosition", field, request.newPosition).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderPosition(request), "postSlidesReorderPosition", field);
        });
    });

    it("invalid oldPositions test", () => {
        const field = "oldPositions";
        const request = TestUtils.getPostSlidesReorderPositionRequest();
        request.oldPositions = <Array<number>>TestInitializer.invalidizeValue(request.oldPositions, field, "Array&lt;number&gt;");
        return TestInitializer.initialize("postSlidesReorderPosition", field, request.oldPositions).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderPosition(request), "postSlidesReorderPosition", field);
        });
    });

    it("invalid newPositions test", () => {
        const field = "newPositions";
        const request = TestUtils.getPostSlidesReorderPositionRequest();
        request.newPositions = <Array<number>>TestInitializer.invalidizeValue(request.newPositions, field, "Array&lt;number&gt;");
        return TestInitializer.initialize("postSlidesReorderPosition", field, request.newPositions).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderPosition(request), "postSlidesReorderPosition", field);
        });
    });

    it("invalid slideToCopy test", () => {
        const field = "slideToCopy";
        const request = TestUtils.getPostSlidesReorderPositionRequest();
        request.slideToCopy = <number>TestInitializer.invalidizeValue(request.slideToCopy, field, "number");
        return TestInitializer.initialize("postSlidesReorderPosition", field, request.slideToCopy).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderPosition(request), "postSlidesReorderPosition", field);
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostSlidesReorderPositionRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number");
        return TestInitializer.initialize("postSlidesReorderPosition", field, request.position).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderPosition(request), "postSlidesReorderPosition", field);
        });
    });

    it("invalid slideToClone test", () => {
        const field = "slideToClone";
        const request = TestUtils.getPostSlidesReorderPositionRequest();
        request.slideToClone = <number>TestInitializer.invalidizeValue(request.slideToClone, field, "number");
        return TestInitializer.initialize("postSlidesReorderPosition", field, request.slideToClone).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderPosition(request), "postSlidesReorderPosition", field);
        });
    });

    it("invalid source test", () => {
        const field = "source";
        const request = TestUtils.getPostSlidesReorderPositionRequest();
        request.source = <string>TestInitializer.invalidizeValue(request.source, field, "string");
        return TestInitializer.initialize("postSlidesReorderPosition", field, request.source).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderPosition(request), "postSlidesReorderPosition", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesReorderPositionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postSlidesReorderPosition", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderPosition(request), "postSlidesReorderPosition", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesReorderPositionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postSlidesReorderPosition", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderPosition(request), "postSlidesReorderPosition", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesReorderPositionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postSlidesReorderPosition", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderPosition(request), "postSlidesReorderPosition", field);
        });
    });

    it("invalid layoutAlias test", () => {
        const field = "layoutAlias";
        const request = TestUtils.getPostSlidesReorderPositionRequest();
        request.layoutAlias = <string>TestInitializer.invalidizeValue(request.layoutAlias, field, "string");
        return TestInitializer.initialize("postSlidesReorderPosition", field, request.layoutAlias).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesReorderPosition(request), "postSlidesReorderPosition", field);
        });
    });
});

describe("Tests for putSlidesSlide", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesSlide", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutSlidesSlideRequest();
            return TestInitializer.assertValidCall(api.putSlidesSlide(request), false, "putSlidesSlide");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putSlidesSlide", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlide(request), "putSlidesSlide", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("putSlidesSlide", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlide(request), "putSlidesSlide", field);
        });
    });

    it("invalid slideDto test", () => {
        const field = "slideDto";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.slideDto = <model.Slide>TestInitializer.invalidizeValue(request.slideDto, field, "Slide");
        return TestInitializer.initialize("putSlidesSlide", field, request.slideDto).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlide(request), "putSlidesSlide", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putSlidesSlide", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlide(request), "putSlidesSlide", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putSlidesSlide", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlide(request), "putSlidesSlide", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putSlidesSlide", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlide(request), "putSlidesSlide", field);
        });
    });
});

describe("Tests for putSlidesSlideBackground", () => {
    it("main test", () => {
        return TestInitializer.initialize("putSlidesSlideBackground", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPutSlidesSlideBackgroundRequest();
            return TestInitializer.assertValidCall(api.putSlidesSlideBackground(request), false, "putSlidesSlideBackground");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("putSlidesSlideBackground", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackground(request), "putSlidesSlideBackground", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("putSlidesSlideBackground", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackground(request), "putSlidesSlideBackground", field);
        });
    });

    it("invalid background test", () => {
        const field = "background";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.background = <model.SlideBackground>TestInitializer.invalidizeValue(request.background, field, "SlideBackground");
        return TestInitializer.initialize("putSlidesSlideBackground", field, request.background).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackground(request), "putSlidesSlideBackground", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("putSlidesSlideBackground", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackground(request), "putSlidesSlideBackground", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("putSlidesSlideBackground", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackground(request), "putSlidesSlideBackground", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("putSlidesSlideBackground", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackground(request), "putSlidesSlideBackground", field);
        });
    });

    it("invalid color test", () => {
        const field = "color";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.color = <string>TestInitializer.invalidizeValue(request.color, field, "string");
        return TestInitializer.initialize("putSlidesSlideBackground", field, request.color).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.putSlidesSlideBackground(request), "putSlidesSlideBackground", field);
        });
    });
});

describe("Tests for getSlidesPresentationTextItems", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesPresentationTextItems", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
            return TestInitializer.assertValidCall(api.getSlidesPresentationTextItems(request), false, "getSlidesPresentationTextItems");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field);
        });
    });

    it("invalid withEmpty test", () => {
        const field = "withEmpty";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.withEmpty = <boolean>TestInitializer.invalidizeValue(request.withEmpty, field, "boolean");
        return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.withEmpty).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field);
        });
    });
});

describe("Tests for getSlidesSlideTextItems", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesSlideTextItems", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesSlideTextItemsRequest();
            return TestInitializer.assertValidCall(api.getSlidesSlideTextItems(request), false, "getSlidesSlideTextItems");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesSlideTextItems", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlidesSlideTextItems", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field);
        });
    });

    it("invalid withEmpty test", () => {
        const field = "withEmpty";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.withEmpty = <boolean>TestInitializer.invalidizeValue(request.withEmpty, field, "boolean");
        return TestInitializer.initialize("getSlidesSlideTextItems", field, request.withEmpty).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesSlideTextItems", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesSlideTextItems", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesSlideTextItems", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field);
        });
    });
});

describe("Tests for postSlidesPresentationReplaceText", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesPresentationReplaceText", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
            return TestInitializer.assertValidCall(api.postSlidesPresentationReplaceText(request), false, "postSlidesPresentationReplaceText");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field);
        });
    });

    it("invalid oldValue test", () => {
        const field = "oldValue";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.oldValue = <string>TestInitializer.invalidizeValue(request.oldValue, field, "string");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.oldValue).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field);
        });
    });

    it("invalid newValue test", () => {
        const field = "newValue";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.newValue = <string>TestInitializer.invalidizeValue(request.newValue, field, "string");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.newValue).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field);
        });
    });

    it("invalid ignoreCase test", () => {
        const field = "ignoreCase";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.ignoreCase = <boolean>TestInitializer.invalidizeValue(request.ignoreCase, field, "boolean");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.ignoreCase).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field);
        });
    });
});

describe("Tests for postSlidesSlideReplaceText", () => {
    it("main test", () => {
        return TestInitializer.initialize("postSlidesSlideReplaceText", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
            return TestInitializer.assertValidCall(api.postSlidesSlideReplaceText(request), false, "postSlidesSlideReplaceText");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field);
        });
    });

    it("invalid oldValue test", () => {
        const field = "oldValue";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.oldValue = <string>TestInitializer.invalidizeValue(request.oldValue, field, "string");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.oldValue).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field);
        });
    });

    it("invalid newValue test", () => {
        const field = "newValue";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.newValue = <string>TestInitializer.invalidizeValue(request.newValue, field, "string");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.newValue).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field);
        });
    });

    it("invalid ignoreCase test", () => {
        const field = "ignoreCase";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.ignoreCase = <boolean>TestInitializer.invalidizeValue(request.ignoreCase, field, "boolean");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.ignoreCase).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.TextApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field);
        });
    });
});

describe("Tests for getSlidesTheme", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesTheme", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesThemeRequest();
            return TestInitializer.assertValidCall(api.getSlidesTheme(request), false, "getSlidesTheme");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesTheme", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesTheme(request), "getSlidesTheme", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlidesTheme", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesTheme(request), "getSlidesTheme", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesTheme", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesTheme(request), "getSlidesTheme", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesTheme", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesTheme(request), "getSlidesTheme", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesTheme", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesTheme(request), "getSlidesTheme", field);
        });
    });
});

describe("Tests for getSlidesThemeColorScheme", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesThemeColorScheme", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
            return TestInitializer.assertValidCall(api.getSlidesThemeColorScheme(request), false, "getSlidesThemeColorScheme");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field);
        });
    });
});

describe("Tests for getSlidesThemeFontScheme", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesThemeFontScheme", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
            return TestInitializer.assertValidCall(api.getSlidesThemeFontScheme(request), false, "getSlidesThemeFontScheme");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field);
        });
    });
});

describe("Tests for getSlidesThemeFormatScheme", () => {
    it("main test", () => {
        return TestInitializer.initialize("getSlidesThemeFormatScheme", null, null).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
            return TestInitializer.assertValidCall(api.getSlidesThemeFormatScheme(request), false, "getSlidesThemeFormatScheme");
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string");
        return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.name).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field);
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number");
        return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.slideIndex).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field);
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string");
        return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.password).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field);
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string");
        return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.folder).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field);
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string");
        return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.storage).then(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.ThemeApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
            return TestInitializer.assertInvalidCall(api.getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field);
        });
    });
});
