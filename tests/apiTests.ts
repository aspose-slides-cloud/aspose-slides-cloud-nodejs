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
import { TestInitializer } from "./testInitializer";

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

    public static getDeleteChartCategoryRequest(): requests.DeleteChartCategoryRequest {
        const request = new requests.DeleteChartCategoryRequest();
        request.name = <string>TestInitializer.getValue("deleteChartCategory", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteChartCategory", "slideIndex");
        request.shapeIndex = <number>TestInitializer.getValue("deleteChartCategory", "shapeIndex");
        request.categoryIndex = <number>TestInitializer.getValue("deleteChartCategory", "categoryIndex");
        request.password = <string>TestInitializer.getValue("deleteChartCategory", "password");
        request.folder = <string>TestInitializer.getValue("deleteChartCategory", "folder");
        request.storage = <string>TestInitializer.getValue("deleteChartCategory", "storage");
        return request;
    }

    public static getDeleteChartDataPointRequest(): requests.DeleteChartDataPointRequest {
        const request = new requests.DeleteChartDataPointRequest();
        request.name = <string>TestInitializer.getValue("deleteChartDataPoint", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteChartDataPoint", "slideIndex");
        request.shapeIndex = <number>TestInitializer.getValue("deleteChartDataPoint", "shapeIndex");
        request.seriesIndex = <number>TestInitializer.getValue("deleteChartDataPoint", "seriesIndex");
        request.pointIndex = <number>TestInitializer.getValue("deleteChartDataPoint", "pointIndex");
        request.password = <string>TestInitializer.getValue("deleteChartDataPoint", "password");
        request.folder = <string>TestInitializer.getValue("deleteChartDataPoint", "folder");
        request.storage = <string>TestInitializer.getValue("deleteChartDataPoint", "storage");
        return request;
    }

    public static getDeleteChartSeriesRequest(): requests.DeleteChartSeriesRequest {
        const request = new requests.DeleteChartSeriesRequest();
        request.name = <string>TestInitializer.getValue("deleteChartSeries", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteChartSeries", "slideIndex");
        request.shapeIndex = <number>TestInitializer.getValue("deleteChartSeries", "shapeIndex");
        request.seriesIndex = <number>TestInitializer.getValue("deleteChartSeries", "seriesIndex");
        request.password = <string>TestInitializer.getValue("deleteChartSeries", "password");
        request.folder = <string>TestInitializer.getValue("deleteChartSeries", "folder");
        request.storage = <string>TestInitializer.getValue("deleteChartSeries", "storage");
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
        request.shapeIndex = <number>TestInitializer.getValue("deletePortions", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("deletePortions", "paragraphIndex");
        request.portions = <Array<number>>TestInitializer.getValue("deletePortions", "portions");
        request.password = <string>TestInitializer.getValue("deletePortions", "password");
        request.folder = <string>TestInitializer.getValue("deletePortions", "folder");
        request.storage = <string>TestInitializer.getValue("deletePortions", "storage");
        return request;
    }

    public static getDeleteSectionRequest(): requests.DeleteSectionRequest {
        const request = new requests.DeleteSectionRequest();
        request.name = <string>TestInitializer.getValue("deleteSection", "name");
        request.sectionIndex = <number>TestInitializer.getValue("deleteSection", "sectionIndex");
        request.withSlides = <boolean>TestInitializer.getValue("deleteSection", "withSlides");
        request.password = <string>TestInitializer.getValue("deleteSection", "password");
        request.folder = <string>TestInitializer.getValue("deleteSection", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSection", "storage");
        return request;
    }

    public static getDeleteSectionsRequest(): requests.DeleteSectionsRequest {
        const request = new requests.DeleteSectionsRequest();
        request.name = <string>TestInitializer.getValue("deleteSections", "name");
        request.sections = <Array<number>>TestInitializer.getValue("deleteSections", "sections");
        request.withSlides = <boolean>TestInitializer.getValue("deleteSections", "withSlides");
        request.password = <string>TestInitializer.getValue("deleteSections", "password");
        request.folder = <string>TestInitializer.getValue("deleteSections", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSections", "storage");
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
        request.shapes = <Array<number>>TestInitializer.getValue("deleteSlideShapes", "shapes");
        request.password = <string>TestInitializer.getValue("deleteSlideShapes", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlideShapes", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlideShapes", "storage");
        return request;
    }

    public static getDeleteSlideSubshapeRequest(): requests.DeleteSlideSubshapeRequest {
        const request = new requests.DeleteSlideSubshapeRequest();
        request.name = <string>TestInitializer.getValue("deleteSlideSubshape", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlideSubshape", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteSlideSubshape", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deleteSlideSubshape", "shapeIndex");
        request.password = <string>TestInitializer.getValue("deleteSlideSubshape", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlideSubshape", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlideSubshape", "storage");
        return request;
    }

    public static getDeleteSlideSubshapesRequest(): requests.DeleteSlideSubshapesRequest {
        const request = new requests.DeleteSlideSubshapesRequest();
        request.name = <string>TestInitializer.getValue("deleteSlideSubshapes", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSlideSubshapes", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteSlideSubshapes", "path");
        request.shapes = <Array<number>>TestInitializer.getValue("deleteSlideSubshapes", "shapes");
        request.password = <string>TestInitializer.getValue("deleteSlideSubshapes", "password");
        request.folder = <string>TestInitializer.getValue("deleteSlideSubshapes", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSlideSubshapes", "storage");
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

    public static getDeleteSubshapeParagraphRequest(): requests.DeleteSubshapeParagraphRequest {
        const request = new requests.DeleteSubshapeParagraphRequest();
        request.name = <string>TestInitializer.getValue("deleteSubshapeParagraph", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSubshapeParagraph", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteSubshapeParagraph", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deleteSubshapeParagraph", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("deleteSubshapeParagraph", "paragraphIndex");
        request.password = <string>TestInitializer.getValue("deleteSubshapeParagraph", "password");
        request.folder = <string>TestInitializer.getValue("deleteSubshapeParagraph", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSubshapeParagraph", "storage");
        return request;
    }

    public static getDeleteSubshapeParagraphsRequest(): requests.DeleteSubshapeParagraphsRequest {
        const request = new requests.DeleteSubshapeParagraphsRequest();
        request.name = <string>TestInitializer.getValue("deleteSubshapeParagraphs", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSubshapeParagraphs", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteSubshapeParagraphs", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deleteSubshapeParagraphs", "shapeIndex");
        request.paragraphs = <Array<number>>TestInitializer.getValue("deleteSubshapeParagraphs", "paragraphs");
        request.password = <string>TestInitializer.getValue("deleteSubshapeParagraphs", "password");
        request.folder = <string>TestInitializer.getValue("deleteSubshapeParagraphs", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSubshapeParagraphs", "storage");
        return request;
    }

    public static getDeleteSubshapePortionRequest(): requests.DeleteSubshapePortionRequest {
        const request = new requests.DeleteSubshapePortionRequest();
        request.name = <string>TestInitializer.getValue("deleteSubshapePortion", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSubshapePortion", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteSubshapePortion", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deleteSubshapePortion", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("deleteSubshapePortion", "paragraphIndex");
        request.portionIndex = <number>TestInitializer.getValue("deleteSubshapePortion", "portionIndex");
        request.password = <string>TestInitializer.getValue("deleteSubshapePortion", "password");
        request.folder = <string>TestInitializer.getValue("deleteSubshapePortion", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSubshapePortion", "storage");
        return request;
    }

    public static getDeleteSubshapePortionsRequest(): requests.DeleteSubshapePortionsRequest {
        const request = new requests.DeleteSubshapePortionsRequest();
        request.name = <string>TestInitializer.getValue("deleteSubshapePortions", "name");
        request.slideIndex = <number>TestInitializer.getValue("deleteSubshapePortions", "slideIndex");
        request.path = <string>TestInitializer.getValue("deleteSubshapePortions", "path");
        request.shapeIndex = <number>TestInitializer.getValue("deleteSubshapePortions", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("deleteSubshapePortions", "paragraphIndex");
        request.portions = <Array<number>>TestInitializer.getValue("deleteSubshapePortions", "portions");
        request.password = <string>TestInitializer.getValue("deleteSubshapePortions", "password");
        request.folder = <string>TestInitializer.getValue("deleteSubshapePortions", "folder");
        request.storage = <string>TestInitializer.getValue("deleteSubshapePortions", "storage");
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

    public static getGetNotesSlideExistsRequest(): requests.GetNotesSlideExistsRequest {
        const request = new requests.GetNotesSlideExistsRequest();
        request.name = <string>TestInitializer.getValue("getNotesSlideExists", "name");
        request.slideIndex = <number>TestInitializer.getValue("getNotesSlideExists", "slideIndex");
        request.password = <string>TestInitializer.getValue("getNotesSlideExists", "password");
        request.folder = <string>TestInitializer.getValue("getNotesSlideExists", "folder");
        request.storage = <string>TestInitializer.getValue("getNotesSlideExists", "storage");
        return request;
    }

    public static getGetNotesSlideHeaderFooterRequest(): requests.GetNotesSlideHeaderFooterRequest {
        const request = new requests.GetNotesSlideHeaderFooterRequest();
        request.name = <string>TestInitializer.getValue("getNotesSlideHeaderFooter", "name");
        request.slideIndex = <number>TestInitializer.getValue("getNotesSlideHeaderFooter", "slideIndex");
        request.password = <string>TestInitializer.getValue("getNotesSlideHeaderFooter", "password");
        request.storage = <string>TestInitializer.getValue("getNotesSlideHeaderFooter", "storage");
        request.folder = <string>TestInitializer.getValue("getNotesSlideHeaderFooter", "folder");
        return request;
    }

    public static getGetNotesSlideShapeRequest(): requests.GetNotesSlideShapeRequest {
        const request = new requests.GetNotesSlideShapeRequest();
        request.name = <string>TestInitializer.getValue("getNotesSlideShape", "name");
        request.slideIndex = <number>TestInitializer.getValue("getNotesSlideShape", "slideIndex");
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
        request.shapeIndex = <number>TestInitializer.getValue("getParagraphPortions", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("getParagraphPortions", "paragraphIndex");
        request.password = <string>TestInitializer.getValue("getParagraphPortions", "password");
        request.folder = <string>TestInitializer.getValue("getParagraphPortions", "folder");
        request.storage = <string>TestInitializer.getValue("getParagraphPortions", "storage");
        return request;
    }

    public static getGetSectionsRequest(): requests.GetSectionsRequest {
        const request = new requests.GetSectionsRequest();
        request.name = <string>TestInitializer.getValue("getSections", "name");
        request.password = <string>TestInitializer.getValue("getSections", "password");
        request.folder = <string>TestInitializer.getValue("getSections", "folder");
        request.storage = <string>TestInitializer.getValue("getSections", "storage");
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

    public static getGetSlideHeaderFooterRequest(): requests.GetSlideHeaderFooterRequest {
        const request = new requests.GetSlideHeaderFooterRequest();
        request.name = <string>TestInitializer.getValue("getSlideHeaderFooter", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlideHeaderFooter", "slideIndex");
        request.password = <string>TestInitializer.getValue("getSlideHeaderFooter", "password");
        request.folder = <string>TestInitializer.getValue("getSlideHeaderFooter", "folder");
        request.storage = <string>TestInitializer.getValue("getSlideHeaderFooter", "storage");
        return request;
    }

    public static getGetSlideShapeRequest(): requests.GetSlideShapeRequest {
        const request = new requests.GetSlideShapeRequest();
        request.name = <string>TestInitializer.getValue("getSlideShape", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlideShape", "slideIndex");
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
        request.password = <string>TestInitializer.getValue("getSlideShapes", "password");
        request.folder = <string>TestInitializer.getValue("getSlideShapes", "folder");
        request.storage = <string>TestInitializer.getValue("getSlideShapes", "storage");
        return request;
    }

    public static getGetSlideSubshapeRequest(): requests.GetSlideSubshapeRequest {
        const request = new requests.GetSlideSubshapeRequest();
        request.name = <string>TestInitializer.getValue("getSlideSubshape", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlideSubshape", "slideIndex");
        request.path = <string>TestInitializer.getValue("getSlideSubshape", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getSlideSubshape", "shapeIndex");
        request.password = <string>TestInitializer.getValue("getSlideSubshape", "password");
        request.folder = <string>TestInitializer.getValue("getSlideSubshape", "folder");
        request.storage = <string>TestInitializer.getValue("getSlideSubshape", "storage");
        return request;
    }

    public static getGetSlideSubshapeParagraphRequest(): requests.GetSlideSubshapeParagraphRequest {
        const request = new requests.GetSlideSubshapeParagraphRequest();
        request.name = <string>TestInitializer.getValue("getSlideSubshapeParagraph", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlideSubshapeParagraph", "slideIndex");
        request.path = <string>TestInitializer.getValue("getSlideSubshapeParagraph", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getSlideSubshapeParagraph", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("getSlideSubshapeParagraph", "paragraphIndex");
        request.password = <string>TestInitializer.getValue("getSlideSubshapeParagraph", "password");
        request.folder = <string>TestInitializer.getValue("getSlideSubshapeParagraph", "folder");
        request.storage = <string>TestInitializer.getValue("getSlideSubshapeParagraph", "storage");
        return request;
    }

    public static getGetSlideSubshapeParagraphsRequest(): requests.GetSlideSubshapeParagraphsRequest {
        const request = new requests.GetSlideSubshapeParagraphsRequest();
        request.name = <string>TestInitializer.getValue("getSlideSubshapeParagraphs", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlideSubshapeParagraphs", "slideIndex");
        request.path = <string>TestInitializer.getValue("getSlideSubshapeParagraphs", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getSlideSubshapeParagraphs", "shapeIndex");
        request.password = <string>TestInitializer.getValue("getSlideSubshapeParagraphs", "password");
        request.folder = <string>TestInitializer.getValue("getSlideSubshapeParagraphs", "folder");
        request.storage = <string>TestInitializer.getValue("getSlideSubshapeParagraphs", "storage");
        return request;
    }

    public static getGetSlideSubshapesRequest(): requests.GetSlideSubshapesRequest {
        const request = new requests.GetSlideSubshapesRequest();
        request.name = <string>TestInitializer.getValue("getSlideSubshapes", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSlideSubshapes", "slideIndex");
        request.path = <string>TestInitializer.getValue("getSlideSubshapes", "path");
        request.password = <string>TestInitializer.getValue("getSlideSubshapes", "password");
        request.folder = <string>TestInitializer.getValue("getSlideSubshapes", "folder");
        request.storage = <string>TestInitializer.getValue("getSlideSubshapes", "storage");
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

    public static getGetSlidesProtectionPropertiesRequest(): requests.GetSlidesProtectionPropertiesRequest {
        const request = new requests.GetSlidesProtectionPropertiesRequest();
        request.name = <string>TestInitializer.getValue("getSlidesProtectionProperties", "name");
        request.password = <string>TestInitializer.getValue("getSlidesProtectionProperties", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesProtectionProperties", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesProtectionProperties", "storage");
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

    public static getGetSlidesSlidePropertiesRequest(): requests.GetSlidesSlidePropertiesRequest {
        const request = new requests.GetSlidesSlidePropertiesRequest();
        request.name = <string>TestInitializer.getValue("getSlidesSlideProperties", "name");
        request.password = <string>TestInitializer.getValue("getSlidesSlideProperties", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesSlideProperties", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesSlideProperties", "storage");
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

    public static getGetSlidesViewPropertiesRequest(): requests.GetSlidesViewPropertiesRequest {
        const request = new requests.GetSlidesViewPropertiesRequest();
        request.name = <string>TestInitializer.getValue("getSlidesViewProperties", "name");
        request.password = <string>TestInitializer.getValue("getSlidesViewProperties", "password");
        request.folder = <string>TestInitializer.getValue("getSlidesViewProperties", "folder");
        request.storage = <string>TestInitializer.getValue("getSlidesViewProperties", "storage");
        return request;
    }

    public static getGetSubshapeParagraphPortionRequest(): requests.GetSubshapeParagraphPortionRequest {
        const request = new requests.GetSubshapeParagraphPortionRequest();
        request.name = <string>TestInitializer.getValue("getSubshapeParagraphPortion", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSubshapeParagraphPortion", "slideIndex");
        request.path = <string>TestInitializer.getValue("getSubshapeParagraphPortion", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getSubshapeParagraphPortion", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("getSubshapeParagraphPortion", "paragraphIndex");
        request.portionIndex = <number>TestInitializer.getValue("getSubshapeParagraphPortion", "portionIndex");
        request.password = <string>TestInitializer.getValue("getSubshapeParagraphPortion", "password");
        request.folder = <string>TestInitializer.getValue("getSubshapeParagraphPortion", "folder");
        request.storage = <string>TestInitializer.getValue("getSubshapeParagraphPortion", "storage");
        return request;
    }

    public static getGetSubshapeParagraphPortionsRequest(): requests.GetSubshapeParagraphPortionsRequest {
        const request = new requests.GetSubshapeParagraphPortionsRequest();
        request.name = <string>TestInitializer.getValue("getSubshapeParagraphPortions", "name");
        request.slideIndex = <number>TestInitializer.getValue("getSubshapeParagraphPortions", "slideIndex");
        request.path = <string>TestInitializer.getValue("getSubshapeParagraphPortions", "path");
        request.shapeIndex = <number>TestInitializer.getValue("getSubshapeParagraphPortions", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("getSubshapeParagraphPortions", "paragraphIndex");
        request.password = <string>TestInitializer.getValue("getSubshapeParagraphPortions", "password");
        request.folder = <string>TestInitializer.getValue("getSubshapeParagraphPortions", "folder");
        request.storage = <string>TestInitializer.getValue("getSubshapeParagraphPortions", "storage");
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
        request.dto = <model.ShapeBase>TestInitializer.getValue("postAddNewShape", "dto");
        request.password = <string>TestInitializer.getValue("postAddNewShape", "password");
        request.folder = <string>TestInitializer.getValue("postAddNewShape", "folder");
        request.storage = <string>TestInitializer.getValue("postAddNewShape", "storage");
        request.shapeToClone = <number>TestInitializer.getValue("postAddNewShape", "shapeToClone");
        request.position = <number>TestInitializer.getValue("postAddNewShape", "position");
        return request;
    }

    public static getPostAddNewSubshapeRequest(): requests.PostAddNewSubshapeRequest {
        const request = new requests.PostAddNewSubshapeRequest();
        request.name = <string>TestInitializer.getValue("postAddNewSubshape", "name");
        request.slideIndex = <number>TestInitializer.getValue("postAddNewSubshape", "slideIndex");
        request.path = <string>TestInitializer.getValue("postAddNewSubshape", "path");
        request.dto = <model.ShapeBase>TestInitializer.getValue("postAddNewSubshape", "dto");
        request.password = <string>TestInitializer.getValue("postAddNewSubshape", "password");
        request.folder = <string>TestInitializer.getValue("postAddNewSubshape", "folder");
        request.storage = <string>TestInitializer.getValue("postAddNewSubshape", "storage");
        request.shapeToClone = <number>TestInitializer.getValue("postAddNewSubshape", "shapeToClone");
        request.position = <number>TestInitializer.getValue("postAddNewSubshape", "position");
        return request;
    }

    public static getPostAddNewSubshapeParagraphRequest(): requests.PostAddNewSubshapeParagraphRequest {
        const request = new requests.PostAddNewSubshapeParagraphRequest();
        request.name = <string>TestInitializer.getValue("postAddNewSubshapeParagraph", "name");
        request.slideIndex = <number>TestInitializer.getValue("postAddNewSubshapeParagraph", "slideIndex");
        request.path = <string>TestInitializer.getValue("postAddNewSubshapeParagraph", "path");
        request.shapeIndex = <number>TestInitializer.getValue("postAddNewSubshapeParagraph", "shapeIndex");
        request.dto = <model.Paragraph>TestInitializer.getValue("postAddNewSubshapeParagraph", "dto");
        request.password = <string>TestInitializer.getValue("postAddNewSubshapeParagraph", "password");
        request.folder = <string>TestInitializer.getValue("postAddNewSubshapeParagraph", "folder");
        request.storage = <string>TestInitializer.getValue("postAddNewSubshapeParagraph", "storage");
        request.position = <number>TestInitializer.getValue("postAddNewSubshapeParagraph", "position");
        return request;
    }

    public static getPostAddNewSubshapePortionRequest(): requests.PostAddNewSubshapePortionRequest {
        const request = new requests.PostAddNewSubshapePortionRequest();
        request.name = <string>TestInitializer.getValue("postAddNewSubshapePortion", "name");
        request.slideIndex = <number>TestInitializer.getValue("postAddNewSubshapePortion", "slideIndex");
        request.path = <string>TestInitializer.getValue("postAddNewSubshapePortion", "path");
        request.shapeIndex = <number>TestInitializer.getValue("postAddNewSubshapePortion", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("postAddNewSubshapePortion", "paragraphIndex");
        request.dto = <model.Portion>TestInitializer.getValue("postAddNewSubshapePortion", "dto");
        request.password = <string>TestInitializer.getValue("postAddNewSubshapePortion", "password");
        request.folder = <string>TestInitializer.getValue("postAddNewSubshapePortion", "folder");
        request.storage = <string>TestInitializer.getValue("postAddNewSubshapePortion", "storage");
        request.position = <number>TestInitializer.getValue("postAddNewSubshapePortion", "position");
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

    public static getPostChartCategoryRequest(): requests.PostChartCategoryRequest {
        const request = new requests.PostChartCategoryRequest();
        request.name = <string>TestInitializer.getValue("postChartCategory", "name");
        request.slideIndex = <number>TestInitializer.getValue("postChartCategory", "slideIndex");
        request.shapeIndex = <number>TestInitializer.getValue("postChartCategory", "shapeIndex");
        request.category = <model.ChartCategory>TestInitializer.getValue("postChartCategory", "category");
        request.password = <string>TestInitializer.getValue("postChartCategory", "password");
        request.folder = <string>TestInitializer.getValue("postChartCategory", "folder");
        request.storage = <string>TestInitializer.getValue("postChartCategory", "storage");
        return request;
    }

    public static getPostChartDataPointRequest(): requests.PostChartDataPointRequest {
        const request = new requests.PostChartDataPointRequest();
        request.name = <string>TestInitializer.getValue("postChartDataPoint", "name");
        request.slideIndex = <number>TestInitializer.getValue("postChartDataPoint", "slideIndex");
        request.shapeIndex = <number>TestInitializer.getValue("postChartDataPoint", "shapeIndex");
        request.seriesIndex = <number>TestInitializer.getValue("postChartDataPoint", "seriesIndex");
        request.dataPoint = <model.DataPoint>TestInitializer.getValue("postChartDataPoint", "dataPoint");
        request.password = <string>TestInitializer.getValue("postChartDataPoint", "password");
        request.folder = <string>TestInitializer.getValue("postChartDataPoint", "folder");
        request.storage = <string>TestInitializer.getValue("postChartDataPoint", "storage");
        return request;
    }

    public static getPostChartSeriesRequest(): requests.PostChartSeriesRequest {
        const request = new requests.PostChartSeriesRequest();
        request.name = <string>TestInitializer.getValue("postChartSeries", "name");
        request.slideIndex = <number>TestInitializer.getValue("postChartSeries", "slideIndex");
        request.shapeIndex = <number>TestInitializer.getValue("postChartSeries", "shapeIndex");
        request.series = <model.Series>TestInitializer.getValue("postChartSeries", "series");
        request.password = <string>TestInitializer.getValue("postChartSeries", "password");
        request.folder = <string>TestInitializer.getValue("postChartSeries", "folder");
        request.storage = <string>TestInitializer.getValue("postChartSeries", "storage");
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

    public static getPostGetNotesSlideRequest(): requests.PostGetNotesSlideRequest {
        const request = new requests.PostGetNotesSlideRequest();
        request.document = <Buffer>TestInitializer.getStreamValue("postGetNotesSlide");
        request.slideIndex = <number>TestInitializer.getValue("postGetNotesSlide", "slideIndex");
        request.password = <string>TestInitializer.getValue("postGetNotesSlide", "password");
        return request;
    }

    public static getPostGetNotesSlideExistsRequest(): requests.PostGetNotesSlideExistsRequest {
        const request = new requests.PostGetNotesSlideExistsRequest();
        request.document = <Buffer>TestInitializer.getStreamValue("postGetNotesSlideExists");
        request.slideIndex = <number>TestInitializer.getValue("postGetNotesSlideExists", "slideIndex");
        request.password = <string>TestInitializer.getValue("postGetNotesSlideExists", "password");
        return request;
    }

    public static getPostGetNotesSlideWithFormatRequest(): requests.PostGetNotesSlideWithFormatRequest {
        const request = new requests.PostGetNotesSlideWithFormatRequest();
        request.document = <Buffer>TestInitializer.getStreamValue("postGetNotesSlideWithFormat");
        request.slideIndex = <number>TestInitializer.getValue("postGetNotesSlideWithFormat", "slideIndex");
        request.format = <string>TestInitializer.getValue("postGetNotesSlideWithFormat", "format");
        request.width = <number>TestInitializer.getValue("postGetNotesSlideWithFormat", "width");
        request.height = <number>TestInitializer.getValue("postGetNotesSlideWithFormat", "height");
        request.password = <string>TestInitializer.getValue("postGetNotesSlideWithFormat", "password");
        request.fontsFolder = <string>TestInitializer.getValue("postGetNotesSlideWithFormat", "fontsFolder");
        return request;
    }

    public static getPostNotesSlideAddNewParagraphRequest(): requests.PostNotesSlideAddNewParagraphRequest {
        const request = new requests.PostNotesSlideAddNewParagraphRequest();
        request.name = <string>TestInitializer.getValue("postNotesSlideAddNewParagraph", "name");
        request.slideIndex = <number>TestInitializer.getValue("postNotesSlideAddNewParagraph", "slideIndex");
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

    public static getPostSectionRequest(): requests.PostSectionRequest {
        const request = new requests.PostSectionRequest();
        request.name = <string>TestInitializer.getValue("postSection", "name");
        request.sectionName = <string>TestInitializer.getValue("postSection", "sectionName");
        request.slideIndex = <number>TestInitializer.getValue("postSection", "slideIndex");
        request.password = <string>TestInitializer.getValue("postSection", "password");
        request.folder = <string>TestInitializer.getValue("postSection", "folder");
        request.storage = <string>TestInitializer.getValue("postSection", "storage");
        return request;
    }

    public static getPostSectionMoveRequest(): requests.PostSectionMoveRequest {
        const request = new requests.PostSectionMoveRequest();
        request.name = <string>TestInitializer.getValue("postSectionMove", "name");
        request.sectionIndex = <number>TestInitializer.getValue("postSectionMove", "sectionIndex");
        request.newPosition = <number>TestInitializer.getValue("postSectionMove", "newPosition");
        request.password = <string>TestInitializer.getValue("postSectionMove", "password");
        request.folder = <string>TestInitializer.getValue("postSectionMove", "folder");
        request.storage = <string>TestInitializer.getValue("postSectionMove", "storage");
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
        request.document = <Buffer>TestInitializer.getStreamValue("postSlidesConvert");
        request.format = <string>TestInitializer.getValue("postSlidesConvert", "format");
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
        request.data = <Buffer>TestInitializer.getStreamValue("postSlidesDocument");
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

    public static getPostSlidesDocumentFromPdfRequest(): requests.PostSlidesDocumentFromPdfRequest {
        const request = new requests.PostSlidesDocumentFromPdfRequest();
        request.name = <string>TestInitializer.getValue("postSlidesDocumentFromPdf", "name");
        request.pdf = <Buffer>TestInitializer.getStreamValue("postSlidesDocumentFromPdf");
        request.password = <string>TestInitializer.getValue("postSlidesDocumentFromPdf", "password");
        request.storage = <string>TestInitializer.getValue("postSlidesDocumentFromPdf", "storage");
        request.folder = <string>TestInitializer.getValue("postSlidesDocumentFromPdf", "folder");
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
        request.files = <Array<Buffer>>TestInitializer.getValue("postSlidesPipeline", "files");
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

    public static getPostSubshapeSaveAsRequest(): requests.PostSubshapeSaveAsRequest {
        const request = new requests.PostSubshapeSaveAsRequest();
        request.name = <string>TestInitializer.getValue("postSubshapeSaveAs", "name");
        request.slideIndex = <number>TestInitializer.getValue("postSubshapeSaveAs", "slideIndex");
        request.path = <string>TestInitializer.getValue("postSubshapeSaveAs", "path");
        request.shapeIndex = <number>TestInitializer.getValue("postSubshapeSaveAs", "shapeIndex");
        request.format = <string>TestInitializer.getValue("postSubshapeSaveAs", "format");
        request.options = <model.IShapeExportOptions>TestInitializer.getValue("postSubshapeSaveAs", "options");
        request.password = <string>TestInitializer.getValue("postSubshapeSaveAs", "password");
        request.folder = <string>TestInitializer.getValue("postSubshapeSaveAs", "folder");
        request.storage = <string>TestInitializer.getValue("postSubshapeSaveAs", "storage");
        request.scaleX = <number>TestInitializer.getValue("postSubshapeSaveAs", "scaleX");
        request.scaleY = <number>TestInitializer.getValue("postSubshapeSaveAs", "scaleY");
        request.bounds = <string>TestInitializer.getValue("postSubshapeSaveAs", "bounds");
        request.fontsFolder = <string>TestInitializer.getValue("postSubshapeSaveAs", "fontsFolder");
        return request;
    }

    public static getPutChartCategoryRequest(): requests.PutChartCategoryRequest {
        const request = new requests.PutChartCategoryRequest();
        request.name = <string>TestInitializer.getValue("putChartCategory", "name");
        request.slideIndex = <number>TestInitializer.getValue("putChartCategory", "slideIndex");
        request.shapeIndex = <number>TestInitializer.getValue("putChartCategory", "shapeIndex");
        request.categoryIndex = <number>TestInitializer.getValue("putChartCategory", "categoryIndex");
        request.category = <model.ChartCategory>TestInitializer.getValue("putChartCategory", "category");
        request.password = <string>TestInitializer.getValue("putChartCategory", "password");
        request.folder = <string>TestInitializer.getValue("putChartCategory", "folder");
        request.storage = <string>TestInitializer.getValue("putChartCategory", "storage");
        return request;
    }

    public static getPutChartDataPointRequest(): requests.PutChartDataPointRequest {
        const request = new requests.PutChartDataPointRequest();
        request.name = <string>TestInitializer.getValue("putChartDataPoint", "name");
        request.slideIndex = <number>TestInitializer.getValue("putChartDataPoint", "slideIndex");
        request.shapeIndex = <number>TestInitializer.getValue("putChartDataPoint", "shapeIndex");
        request.seriesIndex = <number>TestInitializer.getValue("putChartDataPoint", "seriesIndex");
        request.pointIndex = <number>TestInitializer.getValue("putChartDataPoint", "pointIndex");
        request.dataPoint = <model.DataPoint>TestInitializer.getValue("putChartDataPoint", "dataPoint");
        request.password = <string>TestInitializer.getValue("putChartDataPoint", "password");
        request.folder = <string>TestInitializer.getValue("putChartDataPoint", "folder");
        request.storage = <string>TestInitializer.getValue("putChartDataPoint", "storage");
        return request;
    }

    public static getPutChartSeriesRequest(): requests.PutChartSeriesRequest {
        const request = new requests.PutChartSeriesRequest();
        request.name = <string>TestInitializer.getValue("putChartSeries", "name");
        request.slideIndex = <number>TestInitializer.getValue("putChartSeries", "slideIndex");
        request.shapeIndex = <number>TestInitializer.getValue("putChartSeries", "shapeIndex");
        request.seriesIndex = <number>TestInitializer.getValue("putChartSeries", "seriesIndex");
        request.series = <model.Series>TestInitializer.getValue("putChartSeries", "series");
        request.password = <string>TestInitializer.getValue("putChartSeries", "password");
        request.folder = <string>TestInitializer.getValue("putChartSeries", "folder");
        request.storage = <string>TestInitializer.getValue("putChartSeries", "storage");
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

    public static getPutNotesSlideHeaderFooterRequest(): requests.PutNotesSlideHeaderFooterRequest {
        const request = new requests.PutNotesSlideHeaderFooterRequest();
        request.name = <string>TestInitializer.getValue("putNotesSlideHeaderFooter", "name");
        request.slideIndex = <number>TestInitializer.getValue("putNotesSlideHeaderFooter", "slideIndex");
        request.dto = <model.NotesSlideHeaderFooter>TestInitializer.getValue("putNotesSlideHeaderFooter", "dto");
        request.password = <string>TestInitializer.getValue("putNotesSlideHeaderFooter", "password");
        request.storage = <string>TestInitializer.getValue("putNotesSlideHeaderFooter", "storage");
        request.folder = <string>TestInitializer.getValue("putNotesSlideHeaderFooter", "folder");
        return request;
    }

    public static getPutNotesSlideShapeSaveAsRequest(): requests.PutNotesSlideShapeSaveAsRequest {
        const request = new requests.PutNotesSlideShapeSaveAsRequest();
        request.name = <string>TestInitializer.getValue("putNotesSlideShapeSaveAs", "name");
        request.slideIndex = <number>TestInitializer.getValue("putNotesSlideShapeSaveAs", "slideIndex");
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

    public static getPutSectionRequest(): requests.PutSectionRequest {
        const request = new requests.PutSectionRequest();
        request.name = <string>TestInitializer.getValue("putSection", "name");
        request.sectionIndex = <number>TestInitializer.getValue("putSection", "sectionIndex");
        request.sectionName = <string>TestInitializer.getValue("putSection", "sectionName");
        request.password = <string>TestInitializer.getValue("putSection", "password");
        request.folder = <string>TestInitializer.getValue("putSection", "folder");
        request.storage = <string>TestInitializer.getValue("putSection", "storage");
        return request;
    }

    public static getPutSectionsRequest(): requests.PutSectionsRequest {
        const request = new requests.PutSectionsRequest();
        request.name = <string>TestInitializer.getValue("putSections", "name");
        request.sections = <model.Sections>TestInitializer.getValue("putSections", "sections");
        request.password = <string>TestInitializer.getValue("putSections", "password");
        request.folder = <string>TestInitializer.getValue("putSections", "folder");
        request.storage = <string>TestInitializer.getValue("putSections", "storage");
        return request;
    }

    public static getPutSetParagraphPortionPropertiesRequest(): requests.PutSetParagraphPortionPropertiesRequest {
        const request = new requests.PutSetParagraphPortionPropertiesRequest();
        request.name = <string>TestInitializer.getValue("putSetParagraphPortionProperties", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSetParagraphPortionProperties", "slideIndex");
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
        request.shapeIndex = <number>TestInitializer.getValue("putSetParagraphProperties", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("putSetParagraphProperties", "paragraphIndex");
        request.dto = <model.Paragraph>TestInitializer.getValue("putSetParagraphProperties", "dto");
        request.password = <string>TestInitializer.getValue("putSetParagraphProperties", "password");
        request.folder = <string>TestInitializer.getValue("putSetParagraphProperties", "folder");
        request.storage = <string>TestInitializer.getValue("putSetParagraphProperties", "storage");
        return request;
    }

    public static getPutSetSubshapeParagraphPortionPropertiesRequest(): requests.PutSetSubshapeParagraphPortionPropertiesRequest {
        const request = new requests.PutSetSubshapeParagraphPortionPropertiesRequest();
        request.name = <string>TestInitializer.getValue("putSetSubshapeParagraphPortionProperties", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSetSubshapeParagraphPortionProperties", "slideIndex");
        request.path = <string>TestInitializer.getValue("putSetSubshapeParagraphPortionProperties", "path");
        request.shapeIndex = <number>TestInitializer.getValue("putSetSubshapeParagraphPortionProperties", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("putSetSubshapeParagraphPortionProperties", "paragraphIndex");
        request.portionIndex = <number>TestInitializer.getValue("putSetSubshapeParagraphPortionProperties", "portionIndex");
        request.dto = <model.Portion>TestInitializer.getValue("putSetSubshapeParagraphPortionProperties", "dto");
        request.password = <string>TestInitializer.getValue("putSetSubshapeParagraphPortionProperties", "password");
        request.folder = <string>TestInitializer.getValue("putSetSubshapeParagraphPortionProperties", "folder");
        request.storage = <string>TestInitializer.getValue("putSetSubshapeParagraphPortionProperties", "storage");
        return request;
    }

    public static getPutSetSubshapeParagraphPropertiesRequest(): requests.PutSetSubshapeParagraphPropertiesRequest {
        const request = new requests.PutSetSubshapeParagraphPropertiesRequest();
        request.name = <string>TestInitializer.getValue("putSetSubshapeParagraphProperties", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSetSubshapeParagraphProperties", "slideIndex");
        request.path = <string>TestInitializer.getValue("putSetSubshapeParagraphProperties", "path");
        request.shapeIndex = <number>TestInitializer.getValue("putSetSubshapeParagraphProperties", "shapeIndex");
        request.paragraphIndex = <number>TestInitializer.getValue("putSetSubshapeParagraphProperties", "paragraphIndex");
        request.dto = <model.Paragraph>TestInitializer.getValue("putSetSubshapeParagraphProperties", "dto");
        request.password = <string>TestInitializer.getValue("putSetSubshapeParagraphProperties", "password");
        request.folder = <string>TestInitializer.getValue("putSetSubshapeParagraphProperties", "folder");
        request.storage = <string>TestInitializer.getValue("putSetSubshapeParagraphProperties", "storage");
        return request;
    }

    public static getPutShapeSaveAsRequest(): requests.PutShapeSaveAsRequest {
        const request = new requests.PutShapeSaveAsRequest();
        request.name = <string>TestInitializer.getValue("putShapeSaveAs", "name");
        request.slideIndex = <number>TestInitializer.getValue("putShapeSaveAs", "slideIndex");
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

    public static getPutSlideHeaderFooterRequest(): requests.PutSlideHeaderFooterRequest {
        const request = new requests.PutSlideHeaderFooterRequest();
        request.name = <string>TestInitializer.getValue("putSlideHeaderFooter", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSlideHeaderFooter", "slideIndex");
        request.dto = <model.HeaderFooter>TestInitializer.getValue("putSlideHeaderFooter", "dto");
        request.password = <string>TestInitializer.getValue("putSlideHeaderFooter", "password");
        request.folder = <string>TestInitializer.getValue("putSlideHeaderFooter", "folder");
        request.storage = <string>TestInitializer.getValue("putSlideHeaderFooter", "storage");
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
        request.shapeIndex = <number>TestInitializer.getValue("putSlideShapeInfo", "shapeIndex");
        request.dto = <model.ShapeBase>TestInitializer.getValue("putSlideShapeInfo", "dto");
        request.password = <string>TestInitializer.getValue("putSlideShapeInfo", "password");
        request.folder = <string>TestInitializer.getValue("putSlideShapeInfo", "folder");
        request.storage = <string>TestInitializer.getValue("putSlideShapeInfo", "storage");
        return request;
    }

    public static getPutSlideSubshapeInfoRequest(): requests.PutSlideSubshapeInfoRequest {
        const request = new requests.PutSlideSubshapeInfoRequest();
        request.name = <string>TestInitializer.getValue("putSlideSubshapeInfo", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSlideSubshapeInfo", "slideIndex");
        request.path = <string>TestInitializer.getValue("putSlideSubshapeInfo", "path");
        request.shapeIndex = <number>TestInitializer.getValue("putSlideSubshapeInfo", "shapeIndex");
        request.dto = <model.ShapeBase>TestInitializer.getValue("putSlideSubshapeInfo", "dto");
        request.password = <string>TestInitializer.getValue("putSlideSubshapeInfo", "password");
        request.folder = <string>TestInitializer.getValue("putSlideSubshapeInfo", "folder");
        request.storage = <string>TestInitializer.getValue("putSlideSubshapeInfo", "storage");
        return request;
    }

    public static getPutSlidesConvertRequest(): requests.PutSlidesConvertRequest {
        const request = new requests.PutSlidesConvertRequest();
        request.document = <Buffer>TestInitializer.getStreamValue("putSlidesConvert");
        request.format = <string>TestInitializer.getValue("putSlidesConvert", "format");
        request.outPath = <string>TestInitializer.getValue("putSlidesConvert", "outPath");
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

    public static getPutSlidesHeaderFooterRequest(): requests.PutSlidesHeaderFooterRequest {
        const request = new requests.PutSlidesHeaderFooterRequest();
        request.name = <string>TestInitializer.getValue("putSlidesHeaderFooter", "name");
        request.dto = <model.HeaderFooter>TestInitializer.getValue("putSlidesHeaderFooter", "dto");
        request.password = <string>TestInitializer.getValue("putSlidesHeaderFooter", "password");
        request.storage = <string>TestInitializer.getValue("putSlidesHeaderFooter", "storage");
        request.folder = <string>TestInitializer.getValue("putSlidesHeaderFooter", "folder");
        return request;
    }

    public static getPutSlidesProtectionPropertiesRequest(): requests.PutSlidesProtectionPropertiesRequest {
        const request = new requests.PutSlidesProtectionPropertiesRequest();
        request.name = <string>TestInitializer.getValue("putSlidesProtectionProperties", "name");
        request.dto = <model.ProtectionProperties>TestInitializer.getValue("putSlidesProtectionProperties", "dto");
        request.password = <string>TestInitializer.getValue("putSlidesProtectionProperties", "password");
        request.folder = <string>TestInitializer.getValue("putSlidesProtectionProperties", "folder");
        request.storage = <string>TestInitializer.getValue("putSlidesProtectionProperties", "storage");
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

    public static getPutSlidesSlidePropertiesRequest(): requests.PutSlidesSlidePropertiesRequest {
        const request = new requests.PutSlidesSlidePropertiesRequest();
        request.name = <string>TestInitializer.getValue("putSlidesSlideProperties", "name");
        request.dto = <model.SlideProperties>TestInitializer.getValue("putSlidesSlideProperties", "dto");
        request.password = <string>TestInitializer.getValue("putSlidesSlideProperties", "password");
        request.folder = <string>TestInitializer.getValue("putSlidesSlideProperties", "folder");
        request.storage = <string>TestInitializer.getValue("putSlidesSlideProperties", "storage");
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

    public static getPutSlidesViewPropertiesRequest(): requests.PutSlidesViewPropertiesRequest {
        const request = new requests.PutSlidesViewPropertiesRequest();
        request.name = <string>TestInitializer.getValue("putSlidesViewProperties", "name");
        request.dto = <model.ViewProperties>TestInitializer.getValue("putSlidesViewProperties", "dto");
        request.password = <string>TestInitializer.getValue("putSlidesViewProperties", "password");
        request.folder = <string>TestInitializer.getValue("putSlidesViewProperties", "folder");
        request.storage = <string>TestInitializer.getValue("putSlidesViewProperties", "storage");
        return request;
    }

    public static getPutSubshapeSaveAsRequest(): requests.PutSubshapeSaveAsRequest {
        const request = new requests.PutSubshapeSaveAsRequest();
        request.name = <string>TestInitializer.getValue("putSubshapeSaveAs", "name");
        request.slideIndex = <number>TestInitializer.getValue("putSubshapeSaveAs", "slideIndex");
        request.path = <string>TestInitializer.getValue("putSubshapeSaveAs", "path");
        request.shapeIndex = <number>TestInitializer.getValue("putSubshapeSaveAs", "shapeIndex");
        request.format = <string>TestInitializer.getValue("putSubshapeSaveAs", "format");
        request.outPath = <string>TestInitializer.getValue("putSubshapeSaveAs", "outPath");
        request.options = <model.IShapeExportOptions>TestInitializer.getValue("putSubshapeSaveAs", "options");
        request.password = <string>TestInitializer.getValue("putSubshapeSaveAs", "password");
        request.folder = <string>TestInitializer.getValue("putSubshapeSaveAs", "folder");
        request.storage = <string>TestInitializer.getValue("putSubshapeSaveAs", "storage");
        request.scaleX = <number>TestInitializer.getValue("putSubshapeSaveAs", "scaleX");
        request.scaleY = <number>TestInitializer.getValue("putSubshapeSaveAs", "scaleY");
        request.bounds = <string>TestInitializer.getValue("putSubshapeSaveAs", "bounds");
        request.fontsFolder = <string>TestInitializer.getValue("putSubshapeSaveAs", "fontsFolder");
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
        request.file = <Buffer>TestInitializer.getStreamValue("uploadFile");
        request.storageName = <string>TestInitializer.getValue("uploadFile", "storageName");
        return request;
    }
}

describe("Tests for copyFile", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getCopyFileRequest();
            return TestInitializer.initialize("copyFile", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().copyFile(request), false, "copyFile");
            });
        });
    });

    it("invalid srcPath test", () => {
        const field = "srcPath";
        const request = TestUtils.getCopyFileRequest();
        request.srcPath = <string>TestInitializer.invalidizeValue(request.srcPath, field, "string", "copyFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("copyFile", field, request.srcPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().copyFile(request), "copyFile", field, request.srcPath);
            });
        });
    });

    it("invalid destPath test", () => {
        const field = "destPath";
        const request = TestUtils.getCopyFileRequest();
        request.destPath = <string>TestInitializer.invalidizeValue(request.destPath, field, "string", "copyFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("copyFile", field, request.destPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().copyFile(request), "copyFile", field, request.destPath);
            });
        });
    });

    it("invalid srcStorageName test", () => {
        const field = "srcStorageName";
        const request = TestUtils.getCopyFileRequest();
        request.srcStorageName = <string>TestInitializer.invalidizeValue(request.srcStorageName, field, "string", "copyFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("copyFile", field, request.srcStorageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().copyFile(request), "copyFile", field, request.srcStorageName);
            });
        });
    });

    it("invalid destStorageName test", () => {
        const field = "destStorageName";
        const request = TestUtils.getCopyFileRequest();
        request.destStorageName = <string>TestInitializer.invalidizeValue(request.destStorageName, field, "string", "copyFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("copyFile", field, request.destStorageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().copyFile(request), "copyFile", field, request.destStorageName);
            });
        });
    });

    it("invalid versionId test", () => {
        const field = "versionId";
        const request = TestUtils.getCopyFileRequest();
        request.versionId = <string>TestInitializer.invalidizeValue(request.versionId, field, "string", "copyFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("copyFile", field, request.versionId).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().copyFile(request), "copyFile", field, request.versionId);
            });
        });
    });
});

describe("Tests for copyFolder", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getCopyFolderRequest();
            return TestInitializer.initialize("copyFolder", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().copyFolder(request), false, "copyFolder");
            });
        });
    });

    it("invalid srcPath test", () => {
        const field = "srcPath";
        const request = TestUtils.getCopyFolderRequest();
        request.srcPath = <string>TestInitializer.invalidizeValue(request.srcPath, field, "string", "copyFolder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("copyFolder", field, request.srcPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().copyFolder(request), "copyFolder", field, request.srcPath);
            });
        });
    });

    it("invalid destPath test", () => {
        const field = "destPath";
        const request = TestUtils.getCopyFolderRequest();
        request.destPath = <string>TestInitializer.invalidizeValue(request.destPath, field, "string", "copyFolder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("copyFolder", field, request.destPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().copyFolder(request), "copyFolder", field, request.destPath);
            });
        });
    });

    it("invalid srcStorageName test", () => {
        const field = "srcStorageName";
        const request = TestUtils.getCopyFolderRequest();
        request.srcStorageName = <string>TestInitializer.invalidizeValue(request.srcStorageName, field, "string", "copyFolder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("copyFolder", field, request.srcStorageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().copyFolder(request), "copyFolder", field, request.srcStorageName);
            });
        });
    });

    it("invalid destStorageName test", () => {
        const field = "destStorageName";
        const request = TestUtils.getCopyFolderRequest();
        request.destStorageName = <string>TestInitializer.invalidizeValue(request.destStorageName, field, "string", "copyFolder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("copyFolder", field, request.destStorageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().copyFolder(request), "copyFolder", field, request.destStorageName);
            });
        });
    });
});

describe("Tests for createFolder", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getCreateFolderRequest();
            return TestInitializer.initialize("createFolder", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().createFolder(request), false, "createFolder");
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getCreateFolderRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "createFolder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("createFolder", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().createFolder(request), "createFolder", field, request.path);
            });
        });
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getCreateFolderRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "createFolder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("createFolder", field, request.storageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().createFolder(request), "createFolder", field, request.storageName);
            });
        });
    });
});

describe("Tests for deleteChartCategory", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteChartCategoryRequest();
            return TestInitializer.initialize("deleteChartCategory", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteChartCategory(request), false, "deleteChartCategory");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteChartCategoryRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartCategory", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartCategory(request), "deleteChartCategory", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteChartCategoryRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartCategory", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartCategory(request), "deleteChartCategory", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteChartCategoryRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartCategory", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartCategory(request), "deleteChartCategory", field, request.shapeIndex);
            });
        });
    });

    it("invalid categoryIndex test", () => {
        const field = "categoryIndex";
        const request = TestUtils.getDeleteChartCategoryRequest();
        request.categoryIndex = <number>TestInitializer.invalidizeValue(request.categoryIndex, field, "number", "deleteChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartCategory", field, request.categoryIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartCategory(request), "deleteChartCategory", field, request.categoryIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteChartCategoryRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartCategory", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartCategory(request), "deleteChartCategory", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteChartCategoryRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartCategory", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartCategory(request), "deleteChartCategory", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteChartCategoryRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartCategory", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartCategory(request), "deleteChartCategory", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteChartDataPoint", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteChartDataPointRequest();
            return TestInitializer.initialize("deleteChartDataPoint", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteChartDataPoint(request), false, "deleteChartDataPoint");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteChartDataPointRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartDataPoint", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartDataPoint(request), "deleteChartDataPoint", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteChartDataPointRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartDataPoint", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartDataPoint(request), "deleteChartDataPoint", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteChartDataPointRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartDataPoint", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartDataPoint(request), "deleteChartDataPoint", field, request.shapeIndex);
            });
        });
    });

    it("invalid seriesIndex test", () => {
        const field = "seriesIndex";
        const request = TestUtils.getDeleteChartDataPointRequest();
        request.seriesIndex = <number>TestInitializer.invalidizeValue(request.seriesIndex, field, "number", "deleteChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartDataPoint", field, request.seriesIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartDataPoint(request), "deleteChartDataPoint", field, request.seriesIndex);
            });
        });
    });

    it("invalid pointIndex test", () => {
        const field = "pointIndex";
        const request = TestUtils.getDeleteChartDataPointRequest();
        request.pointIndex = <number>TestInitializer.invalidizeValue(request.pointIndex, field, "number", "deleteChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartDataPoint", field, request.pointIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartDataPoint(request), "deleteChartDataPoint", field, request.pointIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteChartDataPointRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartDataPoint", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartDataPoint(request), "deleteChartDataPoint", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteChartDataPointRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartDataPoint", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartDataPoint(request), "deleteChartDataPoint", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteChartDataPointRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartDataPoint", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartDataPoint(request), "deleteChartDataPoint", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteChartSeries", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteChartSeriesRequest();
            return TestInitializer.initialize("deleteChartSeries", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteChartSeries(request), false, "deleteChartSeries");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteChartSeriesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartSeries", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartSeries(request), "deleteChartSeries", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteChartSeriesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartSeries", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartSeries(request), "deleteChartSeries", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteChartSeriesRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartSeries", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartSeries(request), "deleteChartSeries", field, request.shapeIndex);
            });
        });
    });

    it("invalid seriesIndex test", () => {
        const field = "seriesIndex";
        const request = TestUtils.getDeleteChartSeriesRequest();
        request.seriesIndex = <number>TestInitializer.invalidizeValue(request.seriesIndex, field, "number", "deleteChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartSeries", field, request.seriesIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartSeries(request), "deleteChartSeries", field, request.seriesIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteChartSeriesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartSeries", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartSeries(request), "deleteChartSeries", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteChartSeriesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartSeries", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartSeries(request), "deleteChartSeries", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteChartSeriesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteChartSeries", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteChartSeries(request), "deleteChartSeries", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteFile", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteFileRequest();
            return TestInitializer.initialize("deleteFile", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteFile(request), false, "deleteFile");
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteFileRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteFile", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteFile(request), "deleteFile", field, request.path);
            });
        });
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getDeleteFileRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "deleteFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteFile", field, request.storageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteFile(request), "deleteFile", field, request.storageName);
            });
        });
    });

    it("invalid versionId test", () => {
        const field = "versionId";
        const request = TestUtils.getDeleteFileRequest();
        request.versionId = <string>TestInitializer.invalidizeValue(request.versionId, field, "string", "deleteFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteFile", field, request.versionId).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteFile(request), "deleteFile", field, request.versionId);
            });
        });
    });
});

describe("Tests for deleteFolder", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteFolderRequest();
            return TestInitializer.initialize("deleteFolder", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteFolder(request), false, "deleteFolder");
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteFolderRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteFolder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteFolder", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteFolder(request), "deleteFolder", field, request.path);
            });
        });
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getDeleteFolderRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "deleteFolder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteFolder", field, request.storageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteFolder(request), "deleteFolder", field, request.storageName);
            });
        });
    });

    it("invalid recursive test", () => {
        const field = "recursive";
        const request = TestUtils.getDeleteFolderRequest();
        request.recursive = <boolean>TestInitializer.invalidizeValue(request.recursive, field, "boolean", "deleteFolder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteFolder", field, request.recursive).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteFolder(request), "deleteFolder", field, request.recursive);
            });
        });
    });
});

describe("Tests for deleteNotesSlide", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteNotesSlideRequest();
            return TestInitializer.initialize("deleteNotesSlide", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteNotesSlide(request), false, "deleteNotesSlide");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlide", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlide(request), "deleteNotesSlide", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlide", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlide(request), "deleteNotesSlide", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlide", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlide(request), "deleteNotesSlide", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlide", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlide(request), "deleteNotesSlide", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlide", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlide(request), "deleteNotesSlide", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteNotesSlideParagraph", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteNotesSlideParagraphRequest();
            return TestInitializer.initialize("deleteNotesSlideParagraph", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteNotesSlideParagraph(request), false, "deleteNotesSlideParagraph");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlideParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlideParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteNotesSlideParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deleteNotesSlideParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.paragraphIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlideParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlideParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlideParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraph", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraph(request), "deleteNotesSlideParagraph", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteNotesSlideParagraphs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
            return TestInitializer.initialize("deleteNotesSlideParagraphs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteNotesSlideParagraphs(request), false, "deleteNotesSlideParagraphs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlideParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlideParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteNotesSlideParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphs test", () => {
        const field = "paragraphs";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.paragraphs = <Array<number>>TestInitializer.invalidizeValue(request.paragraphs, field, "Array&lt;number&gt;", "deleteNotesSlideParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.paragraphs).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.paragraphs);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlideParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlideParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlideParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideParagraphs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideParagraphs(request), "deleteNotesSlideParagraphs", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteNotesSlidePortion", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteNotesSlidePortionRequest();
            return TestInitializer.initialize("deleteNotesSlidePortion", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteNotesSlidePortion(request), false, "deleteNotesSlidePortion");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlidePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortion", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlidePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortion", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteNotesSlidePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortion", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deleteNotesSlidePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortion", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.paragraphIndex);
            });
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "deleteNotesSlidePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortion", field, request.portionIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.portionIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlidePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortion", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlidePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortion", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlidePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlidePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortion", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortion(request), "deleteNotesSlidePortion", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteNotesSlidePortions", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteNotesSlidePortionsRequest();
            return TestInitializer.initialize("deleteNotesSlidePortions", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteNotesSlidePortions(request), false, "deleteNotesSlidePortions");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlidePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortions", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlidePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortions", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteNotesSlidePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortions", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deleteNotesSlidePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortions", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.paragraphIndex);
            });
        });
    });

    it("invalid portions test", () => {
        const field = "portions";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.portions = <Array<number>>TestInitializer.invalidizeValue(request.portions, field, "Array&lt;number&gt;", "deleteNotesSlidePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortions", field, request.portions).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.portions);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlidePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortions", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlidePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortions", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlidePortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlidePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlidePortions", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlidePortions(request), "deleteNotesSlidePortions", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteNotesSlideShape", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteNotesSlideShapeRequest();
            return TestInitializer.initialize("deleteNotesSlideShape", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteNotesSlideShape(request), false, "deleteNotesSlideShape");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideShape", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideShape(request), "deleteNotesSlideShape", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideShape", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideShape(request), "deleteNotesSlideShape", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideShape", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideShape(request), "deleteNotesSlideShape", field, request.shapeIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideShape", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideShape(request), "deleteNotesSlideShape", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideShape", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideShape(request), "deleteNotesSlideShape", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideShape", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideShape(request), "deleteNotesSlideShape", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteNotesSlideShapes", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteNotesSlideShapesRequest();
            return TestInitializer.initialize("deleteNotesSlideShapes", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteNotesSlideShapes(request), false, "deleteNotesSlideShapes");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteNotesSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideShapes", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteNotesSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideShapes", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field, request.slideIndex);
            });
        });
    });

    it("invalid shapes test", () => {
        const field = "shapes";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.shapes = <Array<number>>TestInitializer.invalidizeValue(request.shapes, field, "Array&lt;number&gt;", "deleteNotesSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideShapes", field, request.shapes).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field, request.shapes);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteNotesSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideShapes", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteNotesSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideShapes", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteNotesSlideShapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteNotesSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteNotesSlideShapes", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteNotesSlideShapes(request), "deleteNotesSlideShapes", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteParagraph", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteParagraphRequest();
            return TestInitializer.initialize("deleteParagraph", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteParagraph(request), false, "deleteParagraph");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraph", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraph(request), "deleteParagraph", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraph", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraph(request), "deleteParagraph", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraph", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraph(request), "deleteParagraph", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deleteParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraph", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraph(request), "deleteParagraph", field, request.paragraphIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraph", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraph(request), "deleteParagraph", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraph", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraph(request), "deleteParagraph", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraph", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraph(request), "deleteParagraph", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteParagraphs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteParagraphsRequest();
            return TestInitializer.initialize("deleteParagraphs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteParagraphs(request), false, "deleteParagraphs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraphs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraphs(request), "deleteParagraphs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraphs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraphs(request), "deleteParagraphs", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraphs", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraphs(request), "deleteParagraphs", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphs test", () => {
        const field = "paragraphs";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.paragraphs = <Array<number>>TestInitializer.invalidizeValue(request.paragraphs, field, "Array&lt;number&gt;", "deleteParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraphs", field, request.paragraphs).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraphs(request), "deleteParagraphs", field, request.paragraphs);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraphs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraphs(request), "deleteParagraphs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraphs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraphs(request), "deleteParagraphs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteParagraphs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteParagraphs(request), "deleteParagraphs", field, request.storage);
            });
        });
    });
});

describe("Tests for deletePortion", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeletePortionRequest();
            return TestInitializer.initialize("deletePortion", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deletePortion(request), false, "deletePortion");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeletePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deletePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortion", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortion(request), "deletePortion", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeletePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deletePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortion", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortion(request), "deletePortion", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeletePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deletePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortion", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortion(request), "deletePortion", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeletePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deletePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortion", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortion(request), "deletePortion", field, request.paragraphIndex);
            });
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getDeletePortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "deletePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortion", field, request.portionIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortion(request), "deletePortion", field, request.portionIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeletePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deletePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortion", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortion(request), "deletePortion", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeletePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deletePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortion", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortion(request), "deletePortion", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeletePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deletePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortion", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortion(request), "deletePortion", field, request.storage);
            });
        });
    });
});

describe("Tests for deletePortions", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeletePortionsRequest();
            return TestInitializer.initialize("deletePortions", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deletePortions(request), false, "deletePortions");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeletePortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deletePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortions", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortions(request), "deletePortions", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeletePortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deletePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortions", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortions(request), "deletePortions", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeletePortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deletePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortions", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortions(request), "deletePortions", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeletePortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deletePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortions", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortions(request), "deletePortions", field, request.paragraphIndex);
            });
        });
    });

    it("invalid portions test", () => {
        const field = "portions";
        const request = TestUtils.getDeletePortionsRequest();
        request.portions = <Array<number>>TestInitializer.invalidizeValue(request.portions, field, "Array&lt;number&gt;", "deletePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortions", field, request.portions).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortions(request), "deletePortions", field, request.portions);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeletePortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deletePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortions", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortions(request), "deletePortions", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeletePortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deletePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortions", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortions(request), "deletePortions", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeletePortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deletePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deletePortions", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deletePortions(request), "deletePortions", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSection", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSectionRequest();
            return TestInitializer.initialize("deleteSection", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSection(request), false, "deleteSection");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSectionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSection", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSection(request), "deleteSection", field, request.name);
            });
        });
    });

    it("invalid sectionIndex test", () => {
        const field = "sectionIndex";
        const request = TestUtils.getDeleteSectionRequest();
        request.sectionIndex = <number>TestInitializer.invalidizeValue(request.sectionIndex, field, "number", "deleteSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSection", field, request.sectionIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSection(request), "deleteSection", field, request.sectionIndex);
            });
        });
    });

    it("invalid withSlides test", () => {
        const field = "withSlides";
        const request = TestUtils.getDeleteSectionRequest();
        request.withSlides = <boolean>TestInitializer.invalidizeValue(request.withSlides, field, "boolean", "deleteSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSection", field, request.withSlides).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSection(request), "deleteSection", field, request.withSlides);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSectionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSection", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSection(request), "deleteSection", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSectionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSection", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSection(request), "deleteSection", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSectionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSection", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSection(request), "deleteSection", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSections", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSectionsRequest();
            return TestInitializer.initialize("deleteSections", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSections(request), false, "deleteSections");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSectionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSections", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSections(request), "deleteSections", field, request.name);
            });
        });
    });

    it("invalid sections test", () => {
        const field = "sections";
        const request = TestUtils.getDeleteSectionsRequest();
        request.sections = <Array<number>>TestInitializer.invalidizeValue(request.sections, field, "Array&lt;number&gt;", "deleteSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSections", field, request.sections).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSections(request), "deleteSections", field, request.sections);
            });
        });
    });

    it("invalid withSlides test", () => {
        const field = "withSlides";
        const request = TestUtils.getDeleteSectionsRequest();
        request.withSlides = <boolean>TestInitializer.invalidizeValue(request.withSlides, field, "boolean", "deleteSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSections", field, request.withSlides).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSections(request), "deleteSections", field, request.withSlides);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSectionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSections", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSections(request), "deleteSections", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSectionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSections", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSections(request), "deleteSections", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSectionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSections", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSections(request), "deleteSections", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlideAnimation", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlideAnimationRequest();
            return TestInitializer.initialize("deleteSlideAnimation", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlideAnimation(request), false, "deleteSlideAnimation");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideAnimationRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimation", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimation(request), "deleteSlideAnimation", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideAnimationRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimation", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimation(request), "deleteSlideAnimation", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideAnimationRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimation", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimation(request), "deleteSlideAnimation", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideAnimationRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimation", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimation(request), "deleteSlideAnimation", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideAnimationRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimation", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimation(request), "deleteSlideAnimation", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlideAnimationEffect", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlideAnimationEffectRequest();
            return TestInitializer.initialize("deleteSlideAnimationEffect", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlideAnimationEffect(request), false, "deleteSlideAnimationEffect");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideAnimationEffectRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationEffect", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationEffect(request), "deleteSlideAnimationEffect", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideAnimationEffectRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationEffect", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationEffect(request), "deleteSlideAnimationEffect", field, request.slideIndex);
            });
        });
    });

    it("invalid effectIndex test", () => {
        const field = "effectIndex";
        const request = TestUtils.getDeleteSlideAnimationEffectRequest();
        request.effectIndex = <number>TestInitializer.invalidizeValue(request.effectIndex, field, "number", "deleteSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationEffect", field, request.effectIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationEffect(request), "deleteSlideAnimationEffect", field, request.effectIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideAnimationEffectRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationEffect", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationEffect(request), "deleteSlideAnimationEffect", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideAnimationEffectRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationEffect", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationEffect(request), "deleteSlideAnimationEffect", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideAnimationEffectRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationEffect", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationEffect(request), "deleteSlideAnimationEffect", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlideAnimationInteractiveSequence", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequence(request), false, "deleteSlideAnimationInteractiveSequence");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideAnimationInteractiveSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequence(request), "deleteSlideAnimationInteractiveSequence", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideAnimationInteractiveSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequence(request), "deleteSlideAnimationInteractiveSequence", field, request.slideIndex);
            });
        });
    });

    it("invalid sequenceIndex test", () => {
        const field = "sequenceIndex";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
        request.sequenceIndex = <number>TestInitializer.invalidizeValue(request.sequenceIndex, field, "number", "deleteSlideAnimationInteractiveSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", field, request.sequenceIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequence(request), "deleteSlideAnimationInteractiveSequence", field, request.sequenceIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideAnimationInteractiveSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequence(request), "deleteSlideAnimationInteractiveSequence", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideAnimationInteractiveSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequence(request), "deleteSlideAnimationInteractiveSequence", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideAnimationInteractiveSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequence", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequence(request), "deleteSlideAnimationInteractiveSequence", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlideAnimationInteractiveSequenceEffect", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequenceEffect(request), false, "deleteSlideAnimationInteractiveSequenceEffect");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.slideIndex);
            });
        });
    });

    it("invalid sequenceIndex test", () => {
        const field = "sequenceIndex";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.sequenceIndex = <number>TestInitializer.invalidizeValue(request.sequenceIndex, field, "number", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.sequenceIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.sequenceIndex);
            });
        });
    });

    it("invalid effectIndex test", () => {
        const field = "effectIndex";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.effectIndex = <number>TestInitializer.invalidizeValue(request.effectIndex, field, "number", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.effectIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.effectIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequenceEffectRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequenceEffect", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequenceEffect(request), "deleteSlideAnimationInteractiveSequenceEffect", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlideAnimationInteractiveSequences", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlideAnimationInteractiveSequencesRequest();
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequences", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequences(request), false, "deleteSlideAnimationInteractiveSequences");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequencesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideAnimationInteractiveSequences");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequences", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequences(request), "deleteSlideAnimationInteractiveSequences", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequencesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideAnimationInteractiveSequences");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequences", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequences(request), "deleteSlideAnimationInteractiveSequences", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequencesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideAnimationInteractiveSequences");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequences", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequences(request), "deleteSlideAnimationInteractiveSequences", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequencesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideAnimationInteractiveSequences");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequences", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequences(request), "deleteSlideAnimationInteractiveSequences", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideAnimationInteractiveSequencesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideAnimationInteractiveSequences");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationInteractiveSequences", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationInteractiveSequences(request), "deleteSlideAnimationInteractiveSequences", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlideAnimationMainSequence", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlideAnimationMainSequenceRequest();
            return TestInitializer.initialize("deleteSlideAnimationMainSequence", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlideAnimationMainSequence(request), false, "deleteSlideAnimationMainSequence");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideAnimationMainSequenceRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideAnimationMainSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationMainSequence", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationMainSequence(request), "deleteSlideAnimationMainSequence", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideAnimationMainSequenceRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideAnimationMainSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationMainSequence", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationMainSequence(request), "deleteSlideAnimationMainSequence", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideAnimationMainSequenceRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideAnimationMainSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationMainSequence", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationMainSequence(request), "deleteSlideAnimationMainSequence", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideAnimationMainSequenceRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideAnimationMainSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationMainSequence", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationMainSequence(request), "deleteSlideAnimationMainSequence", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideAnimationMainSequenceRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideAnimationMainSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideAnimationMainSequence", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideAnimationMainSequence(request), "deleteSlideAnimationMainSequence", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlideByIndex", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlideByIndexRequest();
            return TestInitializer.initialize("deleteSlideByIndex", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlideByIndex(request), false, "deleteSlideByIndex");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideByIndex");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideByIndex", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideByIndex(request), "deleteSlideByIndex", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideByIndex");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideByIndex", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideByIndex(request), "deleteSlideByIndex", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideByIndex");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideByIndex", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideByIndex(request), "deleteSlideByIndex", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideByIndex");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideByIndex", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideByIndex(request), "deleteSlideByIndex", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideByIndexRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideByIndex");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideByIndex", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideByIndex(request), "deleteSlideByIndex", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlideShape", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlideShapeRequest();
            return TestInitializer.initialize("deleteSlideShape", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlideShape(request), false, "deleteSlideShape");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideShape", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideShape(request), "deleteSlideShape", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideShape", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideShape(request), "deleteSlideShape", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideShape", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideShape(request), "deleteSlideShape", field, request.shapeIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideShape", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideShape(request), "deleteSlideShape", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideShape", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideShape(request), "deleteSlideShape", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideShape", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideShape(request), "deleteSlideShape", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlideShapes", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlideShapesRequest();
            return TestInitializer.initialize("deleteSlideShapes", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlideShapes(request), false, "deleteSlideShapes");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideShapes", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideShapes(request), "deleteSlideShapes", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideShapes", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideShapes(request), "deleteSlideShapes", field, request.slideIndex);
            });
        });
    });

    it("invalid shapes test", () => {
        const field = "shapes";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.shapes = <Array<number>>TestInitializer.invalidizeValue(request.shapes, field, "Array&lt;number&gt;", "deleteSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideShapes", field, request.shapes).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideShapes(request), "deleteSlideShapes", field, request.shapes);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideShapes", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideShapes(request), "deleteSlideShapes", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideShapes", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideShapes(request), "deleteSlideShapes", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideShapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideShapes", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideShapes(request), "deleteSlideShapes", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlideSubshape", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlideSubshapeRequest();
            return TestInitializer.initialize("deleteSlideSubshape", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlideSubshape(request), false, "deleteSlideSubshape");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideSubshapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshape", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshape(request), "deleteSlideSubshape", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideSubshapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshape", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshape(request), "deleteSlideSubshape", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteSlideSubshapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshape", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshape(request), "deleteSlideSubshape", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteSlideSubshapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshape", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshape(request), "deleteSlideSubshape", field, request.shapeIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideSubshapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshape", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshape(request), "deleteSlideSubshape", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideSubshapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshape", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshape(request), "deleteSlideSubshape", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideSubshapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshape", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshape(request), "deleteSlideSubshape", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlideSubshapes", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlideSubshapesRequest();
            return TestInitializer.initialize("deleteSlideSubshapes", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlideSubshapes(request), false, "deleteSlideSubshapes");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlideSubshapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlideSubshapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshapes", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshapes(request), "deleteSlideSubshapes", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlideSubshapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlideSubshapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshapes", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshapes(request), "deleteSlideSubshapes", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteSlideSubshapesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteSlideSubshapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshapes", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshapes(request), "deleteSlideSubshapes", field, request.path);
            });
        });
    });

    it("invalid shapes test", () => {
        const field = "shapes";
        const request = TestUtils.getDeleteSlideSubshapesRequest();
        request.shapes = <Array<number>>TestInitializer.invalidizeValue(request.shapes, field, "Array&lt;number&gt;", "deleteSlideSubshapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshapes", field, request.shapes).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshapes(request), "deleteSlideSubshapes", field, request.shapes);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlideSubshapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlideSubshapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshapes", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshapes(request), "deleteSlideSubshapes", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlideSubshapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlideSubshapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshapes", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshapes(request), "deleteSlideSubshapes", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlideSubshapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlideSubshapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlideSubshapes", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlideSubshapes(request), "deleteSlideSubshapes", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlidesCleanSlidesList", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
            return TestInitializer.initialize("deleteSlidesCleanSlidesList", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlidesCleanSlidesList(request), false, "deleteSlidesCleanSlidesList");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlidesCleanSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field, request.name);
            });
        });
    });

    it("invalid slides test", () => {
        const field = "slides";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.slides = <Array<number>>TestInitializer.invalidizeValue(request.slides, field, "Array&lt;number&gt;", "deleteSlidesCleanSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.slides).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field, request.slides);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlidesCleanSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlidesCleanSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlidesCleanSlidesListRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlidesCleanSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesCleanSlidesList", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesCleanSlidesList(request), "deleteSlidesCleanSlidesList", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlidesDocumentProperties", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
            return TestInitializer.initialize("deleteSlidesDocumentProperties", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlidesDocumentProperties(request), false, "deleteSlidesDocumentProperties");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlidesDocumentProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesDocumentProperties", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesDocumentProperties(request), "deleteSlidesDocumentProperties", field, request.name);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlidesDocumentProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesDocumentProperties", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesDocumentProperties(request), "deleteSlidesDocumentProperties", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlidesDocumentProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesDocumentProperties", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesDocumentProperties(request), "deleteSlidesDocumentProperties", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlidesDocumentPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlidesDocumentProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesDocumentProperties", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesDocumentProperties(request), "deleteSlidesDocumentProperties", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlidesDocumentProperty", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
            return TestInitializer.initialize("deleteSlidesDocumentProperty", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlidesDocumentProperty(request), false, "deleteSlidesDocumentProperty");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlidesDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field, request.name);
            });
        });
    });

    it("invalid propertyName test", () => {
        const field = "propertyName";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.propertyName = <string>TestInitializer.invalidizeValue(request.propertyName, field, "string", "deleteSlidesDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.propertyName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field, request.propertyName);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlidesDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlidesDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlidesDocumentPropertyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlidesDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesDocumentProperty", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesDocumentProperty(request), "deleteSlidesDocumentProperty", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSlidesSlideBackground", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
            return TestInitializer.initialize("deleteSlidesSlideBackground", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSlidesSlideBackground(request), false, "deleteSlidesSlideBackground");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSlidesSlideBackgroundRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSlidesSlideBackground", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSlidesSlideBackground(request), "deleteSlidesSlideBackground", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSubshapeParagraph", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSubshapeParagraphRequest();
            return TestInitializer.initialize("deleteSubshapeParagraph", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSubshapeParagraph(request), false, "deleteSubshapeParagraph");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSubshapeParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraph", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraph(request), "deleteSubshapeParagraph", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSubshapeParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraph", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraph(request), "deleteSubshapeParagraph", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteSubshapeParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraph", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraph(request), "deleteSubshapeParagraph", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteSubshapeParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraph", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraph(request), "deleteSubshapeParagraph", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteSubshapeParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deleteSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraph", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraph(request), "deleteSubshapeParagraph", field, request.paragraphIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSubshapeParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraph", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraph(request), "deleteSubshapeParagraph", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSubshapeParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraph", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraph(request), "deleteSubshapeParagraph", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSubshapeParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraph", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraph(request), "deleteSubshapeParagraph", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSubshapeParagraphs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSubshapeParagraphsRequest();
            return TestInitializer.initialize("deleteSubshapeParagraphs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSubshapeParagraphs(request), false, "deleteSubshapeParagraphs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSubshapeParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraphs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraphs(request), "deleteSubshapeParagraphs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSubshapeParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraphs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraphs(request), "deleteSubshapeParagraphs", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteSubshapeParagraphsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraphs", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraphs(request), "deleteSubshapeParagraphs", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteSubshapeParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraphs", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraphs(request), "deleteSubshapeParagraphs", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphs test", () => {
        const field = "paragraphs";
        const request = TestUtils.getDeleteSubshapeParagraphsRequest();
        request.paragraphs = <Array<number>>TestInitializer.invalidizeValue(request.paragraphs, field, "Array&lt;number&gt;", "deleteSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraphs", field, request.paragraphs).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraphs(request), "deleteSubshapeParagraphs", field, request.paragraphs);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSubshapeParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraphs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraphs(request), "deleteSubshapeParagraphs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSubshapeParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraphs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraphs(request), "deleteSubshapeParagraphs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSubshapeParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapeParagraphs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapeParagraphs(request), "deleteSubshapeParagraphs", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSubshapePortion", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSubshapePortionRequest();
            return TestInitializer.initialize("deleteSubshapePortion", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSubshapePortion(request), false, "deleteSubshapePortion");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSubshapePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortion", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortion(request), "deleteSubshapePortion", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSubshapePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortion", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortion(request), "deleteSubshapePortion", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteSubshapePortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortion", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortion(request), "deleteSubshapePortion", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteSubshapePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortion", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortion(request), "deleteSubshapePortion", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteSubshapePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deleteSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortion", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortion(request), "deleteSubshapePortion", field, request.paragraphIndex);
            });
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getDeleteSubshapePortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "deleteSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortion", field, request.portionIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortion(request), "deleteSubshapePortion", field, request.portionIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSubshapePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortion", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortion(request), "deleteSubshapePortion", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSubshapePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortion", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortion(request), "deleteSubshapePortion", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSubshapePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortion", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortion(request), "deleteSubshapePortion", field, request.storage);
            });
        });
    });
});

describe("Tests for deleteSubshapePortions", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDeleteSubshapePortionsRequest();
            return TestInitializer.initialize("deleteSubshapePortions", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().deleteSubshapePortions(request), false, "deleteSubshapePortions");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getDeleteSubshapePortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "deleteSubshapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortions", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortions(request), "deleteSubshapePortions", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getDeleteSubshapePortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "deleteSubshapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortions", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortions(request), "deleteSubshapePortions", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDeleteSubshapePortionsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "deleteSubshapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortions", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortions(request), "deleteSubshapePortions", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getDeleteSubshapePortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "deleteSubshapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortions", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortions(request), "deleteSubshapePortions", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getDeleteSubshapePortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "deleteSubshapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortions", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortions(request), "deleteSubshapePortions", field, request.paragraphIndex);
            });
        });
    });

    it("invalid portions test", () => {
        const field = "portions";
        const request = TestUtils.getDeleteSubshapePortionsRequest();
        request.portions = <Array<number>>TestInitializer.invalidizeValue(request.portions, field, "Array&lt;number&gt;", "deleteSubshapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortions", field, request.portions).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortions(request), "deleteSubshapePortions", field, request.portions);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getDeleteSubshapePortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "deleteSubshapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortions", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortions(request), "deleteSubshapePortions", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getDeleteSubshapePortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "deleteSubshapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortions", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortions(request), "deleteSubshapePortions", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getDeleteSubshapePortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "deleteSubshapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("deleteSubshapePortions", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().deleteSubshapePortions(request), "deleteSubshapePortions", field, request.storage);
            });
        });
    });
});

describe("Tests for downloadFile", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getDownloadFileRequest();
            return TestInitializer.initialize("downloadFile", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().downloadFile(request), true, "downloadFile");
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getDownloadFileRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "downloadFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("downloadFile", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().downloadFile(request), "downloadFile", field, request.path);
            });
        });
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getDownloadFileRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "downloadFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("downloadFile", field, request.storageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().downloadFile(request), "downloadFile", field, request.storageName);
            });
        });
    });

    it("invalid versionId test", () => {
        const field = "versionId";
        const request = TestUtils.getDownloadFileRequest();
        request.versionId = <string>TestInitializer.invalidizeValue(request.versionId, field, "string", "downloadFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("downloadFile", field, request.versionId).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().downloadFile(request), "downloadFile", field, request.versionId);
            });
        });
    });
});

describe("Tests for getDiscUsage", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetDiscUsageRequest();
            return TestInitializer.initialize("getDiscUsage", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getDiscUsage(request), false, "getDiscUsage");
            });
        });
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getGetDiscUsageRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "getDiscUsage");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getDiscUsage", field, request.storageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getDiscUsage(request), "getDiscUsage", field, request.storageName);
            });
        });
    });
});

describe("Tests for getFileVersions", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetFileVersionsRequest();
            return TestInitializer.initialize("getFileVersions", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getFileVersions(request), false, "getFileVersions");
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetFileVersionsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getFileVersions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getFileVersions", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getFileVersions(request), "getFileVersions", field, request.path);
            });
        });
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getGetFileVersionsRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "getFileVersions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getFileVersions", field, request.storageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getFileVersions(request), "getFileVersions", field, request.storageName);
            });
        });
    });
});

describe("Tests for getFilesList", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetFilesListRequest();
            return TestInitializer.initialize("getFilesList", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getFilesList(request), false, "getFilesList");
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetFilesListRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getFilesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getFilesList", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getFilesList(request), "getFilesList", field, request.path);
            });
        });
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getGetFilesListRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "getFilesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getFilesList", field, request.storageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getFilesList(request), "getFilesList", field, request.storageName);
            });
        });
    });
});

describe("Tests for getLayoutSlide", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetLayoutSlideRequest();
            return TestInitializer.initialize("getLayoutSlide", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getLayoutSlide(request), false, "getLayoutSlide");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getLayoutSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getLayoutSlide", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getLayoutSlide(request), "getLayoutSlide", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getLayoutSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getLayoutSlide", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getLayoutSlide(request), "getLayoutSlide", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getLayoutSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getLayoutSlide", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getLayoutSlide(request), "getLayoutSlide", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getLayoutSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getLayoutSlide", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getLayoutSlide(request), "getLayoutSlide", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetLayoutSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getLayoutSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getLayoutSlide", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getLayoutSlide(request), "getLayoutSlide", field, request.storage);
            });
        });
    });
});

describe("Tests for getLayoutSlidesList", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetLayoutSlidesListRequest();
            return TestInitializer.initialize("getLayoutSlidesList", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getLayoutSlidesList(request), false, "getLayoutSlidesList");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetLayoutSlidesListRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getLayoutSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getLayoutSlidesList", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getLayoutSlidesList(request), "getLayoutSlidesList", field, request.name);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetLayoutSlidesListRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getLayoutSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getLayoutSlidesList", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getLayoutSlidesList(request), "getLayoutSlidesList", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetLayoutSlidesListRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getLayoutSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getLayoutSlidesList", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getLayoutSlidesList(request), "getLayoutSlidesList", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetLayoutSlidesListRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getLayoutSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getLayoutSlidesList", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getLayoutSlidesList(request), "getLayoutSlidesList", field, request.storage);
            });
        });
    });
});

describe("Tests for getMasterSlide", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetMasterSlideRequest();
            return TestInitializer.initialize("getMasterSlide", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getMasterSlide(request), false, "getMasterSlide");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetMasterSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getMasterSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getMasterSlide", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getMasterSlide(request), "getMasterSlide", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetMasterSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getMasterSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getMasterSlide", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getMasterSlide(request), "getMasterSlide", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetMasterSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getMasterSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getMasterSlide", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getMasterSlide(request), "getMasterSlide", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetMasterSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getMasterSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getMasterSlide", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getMasterSlide(request), "getMasterSlide", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetMasterSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getMasterSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getMasterSlide", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getMasterSlide(request), "getMasterSlide", field, request.storage);
            });
        });
    });
});

describe("Tests for getMasterSlidesList", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetMasterSlidesListRequest();
            return TestInitializer.initialize("getMasterSlidesList", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getMasterSlidesList(request), false, "getMasterSlidesList");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetMasterSlidesListRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getMasterSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getMasterSlidesList", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getMasterSlidesList(request), "getMasterSlidesList", field, request.name);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetMasterSlidesListRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getMasterSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getMasterSlidesList", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getMasterSlidesList(request), "getMasterSlidesList", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetMasterSlidesListRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getMasterSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getMasterSlidesList", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getMasterSlidesList(request), "getMasterSlidesList", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetMasterSlidesListRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getMasterSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getMasterSlidesList", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getMasterSlidesList(request), "getMasterSlidesList", field, request.storage);
            });
        });
    });
});

describe("Tests for getNotesSlide", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetNotesSlideRequest();
            return TestInitializer.initialize("getNotesSlide", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getNotesSlide(request), false, "getNotesSlide");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlide", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlide(request), "getNotesSlide", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlide", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlide(request), "getNotesSlide", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlide", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlide(request), "getNotesSlide", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlide", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlide(request), "getNotesSlide", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlide", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlide(request), "getNotesSlide", field, request.storage);
            });
        });
    });
});

describe("Tests for getNotesSlideExists", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetNotesSlideExistsRequest();
            return TestInitializer.initialize("getNotesSlideExists", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getNotesSlideExists(request), false, "getNotesSlideExists");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideExistsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideExists");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideExists", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideExists(request), "getNotesSlideExists", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideExistsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideExists");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideExists", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideExists(request), "getNotesSlideExists", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideExistsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideExists");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideExists", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideExists(request), "getNotesSlideExists", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideExistsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideExists");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideExists", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideExists(request), "getNotesSlideExists", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideExistsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideExists");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideExists", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideExists(request), "getNotesSlideExists", field, request.storage);
            });
        });
    });
});

describe("Tests for getNotesSlideHeaderFooter", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetNotesSlideHeaderFooterRequest();
            return TestInitializer.initialize("getNotesSlideHeaderFooter", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getNotesSlideHeaderFooter(request), false, "getNotesSlideHeaderFooter");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideHeaderFooterRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideHeaderFooter", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideHeaderFooter(request), "getNotesSlideHeaderFooter", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideHeaderFooterRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideHeaderFooter", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideHeaderFooter(request), "getNotesSlideHeaderFooter", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideHeaderFooterRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideHeaderFooter", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideHeaderFooter(request), "getNotesSlideHeaderFooter", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideHeaderFooterRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideHeaderFooter", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideHeaderFooter(request), "getNotesSlideHeaderFooter", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideHeaderFooterRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideHeaderFooter", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideHeaderFooter(request), "getNotesSlideHeaderFooter", field, request.folder);
            });
        });
    });
});

describe("Tests for getNotesSlideShape", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetNotesSlideShapeRequest();
            return TestInitializer.initialize("getNotesSlideShape", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getNotesSlideShape(request), false, "getNotesSlideShape");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShape", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShape(request), "getNotesSlideShape", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShape", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShape(request), "getNotesSlideShape", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShape", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShape(request), "getNotesSlideShape", field, request.shapeIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShape", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShape(request), "getNotesSlideShape", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShape", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShape(request), "getNotesSlideShape", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShape", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShape(request), "getNotesSlideShape", field, request.storage);
            });
        });
    });
});

describe("Tests for getNotesSlideShapeParagraph", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
            return TestInitializer.initialize("getNotesSlideShapeParagraph", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getNotesSlideShapeParagraph(request), false, "getNotesSlideShapeParagraph");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.paragraphIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapeParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapeParagraph", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapeParagraph(request), "getNotesSlideShapeParagraph", field, request.storage);
            });
        });
    });
});

describe("Tests for getNotesSlideShapeParagraphs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
            return TestInitializer.initialize("getNotesSlideShapeParagraphs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getNotesSlideShapeParagraphs(request), false, "getNotesSlideShapeParagraphs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideShapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideShapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getNotesSlideShapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field, request.shapeIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideShapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideShapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapeParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideShapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapeParagraphs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapeParagraphs(request), "getNotesSlideShapeParagraphs", field, request.storage);
            });
        });
    });
});

describe("Tests for getNotesSlideShapePortion", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetNotesSlideShapePortionRequest();
            return TestInitializer.initialize("getNotesSlideShapePortion", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getNotesSlideShapePortion(request), false, "getNotesSlideShapePortion");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortion", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortion", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortion", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortion", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.paragraphIndex);
            });
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "getNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortion", field, request.portionIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.portionIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortion", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortion", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortion", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortion(request), "getNotesSlideShapePortion", field, request.storage);
            });
        });
    });
});

describe("Tests for getNotesSlideShapePortions", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetNotesSlideShapePortionsRequest();
            return TestInitializer.initialize("getNotesSlideShapePortions", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getNotesSlideShapePortions(request), false, "getNotesSlideShapePortions");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideShapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortions", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideShapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortions", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getNotesSlideShapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortions", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getNotesSlideShapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortions", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.paragraphIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideShapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortions", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideShapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortions", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapePortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideShapePortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapePortions", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapePortions(request), "getNotesSlideShapePortions", field, request.storage);
            });
        });
    });
});

describe("Tests for getNotesSlideShapes", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetNotesSlideShapesRequest();
            return TestInitializer.initialize("getNotesSlideShapes", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getNotesSlideShapes(request), false, "getNotesSlideShapes");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapes", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapes(request), "getNotesSlideShapes", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapes", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapes(request), "getNotesSlideShapes", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapes", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapes(request), "getNotesSlideShapes", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapes", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapes(request), "getNotesSlideShapes", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideShapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideShapes", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideShapes(request), "getNotesSlideShapes", field, request.storage);
            });
        });
    });
});

describe("Tests for getNotesSlideWithFormat", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetNotesSlideWithFormatRequest();
            return TestInitializer.initialize("getNotesSlideWithFormat", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getNotesSlideWithFormat(request), true, "getNotesSlideWithFormat");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideWithFormat", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideWithFormat", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.slideIndex);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "getNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideWithFormat", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.format);
            });
        });
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number", "getNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideWithFormat", field, request.width).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.width);
            });
        });
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number", "getNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideWithFormat", field, request.height).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.height);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideWithFormat", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideWithFormat", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideWithFormat", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.storage);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getGetNotesSlideWithFormatRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "getNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getNotesSlideWithFormat", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getNotesSlideWithFormat(request), "getNotesSlideWithFormat", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for getParagraphPortion", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetParagraphPortionRequest();
            return TestInitializer.initialize("getParagraphPortion", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getParagraphPortion(request), false, "getParagraphPortion");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortion", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortion(request), "getParagraphPortion", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortion", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortion(request), "getParagraphPortion", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortion", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortion(request), "getParagraphPortion", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortion", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortion(request), "getParagraphPortion", field, request.paragraphIndex);
            });
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "getParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortion", field, request.portionIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortion(request), "getParagraphPortion", field, request.portionIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortion", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortion(request), "getParagraphPortion", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortion", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortion(request), "getParagraphPortion", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetParagraphPortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortion", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortion(request), "getParagraphPortion", field, request.storage);
            });
        });
    });
});

describe("Tests for getParagraphPortions", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetParagraphPortionsRequest();
            return TestInitializer.initialize("getParagraphPortions", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getParagraphPortions(request), false, "getParagraphPortions");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortions", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortions(request), "getParagraphPortions", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortions", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortions(request), "getParagraphPortions", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortions", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortions(request), "getParagraphPortions", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortions", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortions(request), "getParagraphPortions", field, request.paragraphIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortions", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortions(request), "getParagraphPortions", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortions", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortions(request), "getParagraphPortions", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetParagraphPortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getParagraphPortions", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getParagraphPortions(request), "getParagraphPortions", field, request.storage);
            });
        });
    });
});

describe("Tests for getSections", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSectionsRequest();
            return TestInitializer.initialize("getSections", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSections(request), false, "getSections");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSectionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSections", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSections(request), "getSections", field, request.name);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSectionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSections", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSections(request), "getSections", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSectionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSections", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSections(request), "getSections", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSectionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSections", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSections(request), "getSections", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlideAnimation", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlideAnimationRequest();
            return TestInitializer.initialize("getSlideAnimation", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlideAnimation(request), false, "getSlideAnimation");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideAnimationRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideAnimation", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideAnimation(request), "getSlideAnimation", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideAnimationRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideAnimation", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideAnimation(request), "getSlideAnimation", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSlideAnimationRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideAnimation", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideAnimation(request), "getSlideAnimation", field, request.shapeIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideAnimationRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideAnimation", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideAnimation(request), "getSlideAnimation", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideAnimationRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideAnimation", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideAnimation(request), "getSlideAnimation", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideAnimationRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideAnimation", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideAnimation(request), "getSlideAnimation", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlideHeaderFooter", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlideHeaderFooterRequest();
            return TestInitializer.initialize("getSlideHeaderFooter", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlideHeaderFooter(request), false, "getSlideHeaderFooter");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideHeaderFooterRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideHeaderFooter", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideHeaderFooter(request), "getSlideHeaderFooter", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideHeaderFooterRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideHeaderFooter", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideHeaderFooter(request), "getSlideHeaderFooter", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideHeaderFooterRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideHeaderFooter", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideHeaderFooter(request), "getSlideHeaderFooter", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideHeaderFooterRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideHeaderFooter", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideHeaderFooter(request), "getSlideHeaderFooter", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideHeaderFooterRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideHeaderFooter", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideHeaderFooter(request), "getSlideHeaderFooter", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlideShape", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlideShapeRequest();
            return TestInitializer.initialize("getSlideShape", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlideShape(request), false, "getSlideShape");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShape", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShape(request), "getSlideShape", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShape", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShape(request), "getSlideShape", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShape", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShape(request), "getSlideShape", field, request.shapeIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShape", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShape(request), "getSlideShape", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShape", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShape(request), "getSlideShape", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShape", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShape(request), "getSlideShape", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlideShapeParagraph", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlideShapeParagraphRequest();
            return TestInitializer.initialize("getSlideShapeParagraph", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlideShapeParagraph(request), false, "getSlideShapeParagraph");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapeParagraph", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapeParagraph", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapeParagraph", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapeParagraph", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.paragraphIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapeParagraph", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapeParagraph", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideShapeParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapeParagraph", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapeParagraph(request), "getSlideShapeParagraph", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlideShapeParagraphs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlideShapeParagraphsRequest();
            return TestInitializer.initialize("getSlideShapeParagraphs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlideShapeParagraphs(request), false, "getSlideShapeParagraphs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideShapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapeParagraphs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideShapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapeParagraphs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getSlideShapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapeParagraphs", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field, request.shapeIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideShapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapeParagraphs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideShapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapeParagraphs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideShapeParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideShapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapeParagraphs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapeParagraphs(request), "getSlideShapeParagraphs", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlideShapes", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlideShapesRequest();
            return TestInitializer.initialize("getSlideShapes", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlideShapes(request), false, "getSlideShapes");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideShapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapes", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapes(request), "getSlideShapes", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideShapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapes", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapes(request), "getSlideShapes", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideShapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapes", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapes(request), "getSlideShapes", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideShapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapes", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapes(request), "getSlideShapes", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideShapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideShapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideShapes", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideShapes(request), "getSlideShapes", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlideSubshape", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlideSubshapeRequest();
            return TestInitializer.initialize("getSlideSubshape", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlideSubshape(request), false, "getSlideSubshape");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideSubshapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshape", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshape(request), "getSlideSubshape", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideSubshapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshape", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshape(request), "getSlideSubshape", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetSlideSubshapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshape", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshape(request), "getSlideSubshape", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSlideSubshapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshape", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshape(request), "getSlideSubshape", field, request.shapeIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideSubshapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshape", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshape(request), "getSlideSubshape", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideSubshapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshape", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshape(request), "getSlideSubshape", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideSubshapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshape", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshape(request), "getSlideSubshape", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlideSubshapeParagraph", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlideSubshapeParagraphRequest();
            return TestInitializer.initialize("getSlideSubshapeParagraph", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlideSubshapeParagraph(request), false, "getSlideSubshapeParagraph");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideSubshapeParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraph", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraph(request), "getSlideSubshapeParagraph", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideSubshapeParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraph", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraph(request), "getSlideSubshapeParagraph", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetSlideSubshapeParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getSlideSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraph", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraph(request), "getSlideSubshapeParagraph", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSlideSubshapeParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getSlideSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraph", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraph(request), "getSlideSubshapeParagraph", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetSlideSubshapeParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getSlideSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraph", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraph(request), "getSlideSubshapeParagraph", field, request.paragraphIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideSubshapeParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraph", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraph(request), "getSlideSubshapeParagraph", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideSubshapeParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraph", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraph(request), "getSlideSubshapeParagraph", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideSubshapeParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraph", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraph(request), "getSlideSubshapeParagraph", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlideSubshapeParagraphs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlideSubshapeParagraphsRequest();
            return TestInitializer.initialize("getSlideSubshapeParagraphs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlideSubshapeParagraphs(request), false, "getSlideSubshapeParagraphs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideSubshapeParagraphsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraphs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraphs(request), "getSlideSubshapeParagraphs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideSubshapeParagraphsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraphs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraphs(request), "getSlideSubshapeParagraphs", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetSlideSubshapeParagraphsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getSlideSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraphs", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraphs(request), "getSlideSubshapeParagraphs", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSlideSubshapeParagraphsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getSlideSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraphs", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraphs(request), "getSlideSubshapeParagraphs", field, request.shapeIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideSubshapeParagraphsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraphs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraphs(request), "getSlideSubshapeParagraphs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideSubshapeParagraphsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraphs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraphs(request), "getSlideSubshapeParagraphs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideSubshapeParagraphsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideSubshapeParagraphs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapeParagraphs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapeParagraphs(request), "getSlideSubshapeParagraphs", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlideSubshapes", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlideSubshapesRequest();
            return TestInitializer.initialize("getSlideSubshapes", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlideSubshapes(request), false, "getSlideSubshapes");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlideSubshapesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlideSubshapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapes", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapes(request), "getSlideSubshapes", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlideSubshapesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlideSubshapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapes", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapes(request), "getSlideSubshapes", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetSlideSubshapesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getSlideSubshapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapes", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapes(request), "getSlideSubshapes", field, request.path);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlideSubshapesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlideSubshapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapes", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapes(request), "getSlideSubshapes", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlideSubshapesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlideSubshapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapes", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapes(request), "getSlideSubshapes", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlideSubshapesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlideSubshapes");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlideSubshapes", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlideSubshapes(request), "getSlideSubshapes", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesApiInfo", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesApiInfo", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesApiInfo(), false, "getSlidesApiInfo");
            });
        });
    });
});

describe("Tests for getSlidesDocument", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesDocumentRequest();
            return TestInitializer.initialize("getSlidesDocument", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesDocument(request), false, "getSlidesDocument");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesDocumentRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesDocument");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesDocument", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesDocument(request), "getSlidesDocument", field, request.name);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesDocumentRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesDocument");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesDocument", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesDocument(request), "getSlidesDocument", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesDocumentRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesDocument");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesDocument", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesDocument(request), "getSlidesDocument", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesDocumentRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesDocument");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesDocument", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesDocument(request), "getSlidesDocument", field, request.folder);
            });
        });
    });
});

describe("Tests for getSlidesDocumentProperties", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
            return TestInitializer.initialize("getSlidesDocumentProperties", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesDocumentProperties(request), false, "getSlidesDocumentProperties");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesDocumentProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesDocumentProperties", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesDocumentProperties(request), "getSlidesDocumentProperties", field, request.name);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesDocumentProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesDocumentProperties", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesDocumentProperties(request), "getSlidesDocumentProperties", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesDocumentProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesDocumentProperties", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesDocumentProperties(request), "getSlidesDocumentProperties", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesDocumentPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesDocumentProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesDocumentProperties", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesDocumentProperties(request), "getSlidesDocumentProperties", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesDocumentProperty", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesDocumentPropertyRequest();
            return TestInitializer.initialize("getSlidesDocumentProperty", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesDocumentProperty(request), false, "getSlidesDocumentProperty");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesDocumentProperty", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field, request.name);
            });
        });
    });

    it("invalid propertyName test", () => {
        const field = "propertyName";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.propertyName = <string>TestInitializer.invalidizeValue(request.propertyName, field, "string", "getSlidesDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesDocumentProperty", field, request.propertyName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field, request.propertyName);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesDocumentProperty", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesDocumentProperty", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesDocumentPropertyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesDocumentProperty", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesDocumentProperty(request), "getSlidesDocumentProperty", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesImageWithDefaultFormat", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesImageWithDefaultFormatRequest();
            return TestInitializer.initialize("getSlidesImageWithDefaultFormat", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesImageWithDefaultFormat(request), true, "getSlidesImageWithDefaultFormat");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesImageWithDefaultFormatRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesImageWithDefaultFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImageWithDefaultFormat", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImageWithDefaultFormat(request), "getSlidesImageWithDefaultFormat", field, request.name);
            });
        });
    });

    it("invalid index test", () => {
        const field = "index";
        const request = TestUtils.getGetSlidesImageWithDefaultFormatRequest();
        request.index = <number>TestInitializer.invalidizeValue(request.index, field, "number", "getSlidesImageWithDefaultFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImageWithDefaultFormat", field, request.index).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImageWithDefaultFormat(request), "getSlidesImageWithDefaultFormat", field, request.index);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesImageWithDefaultFormatRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesImageWithDefaultFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImageWithDefaultFormat", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImageWithDefaultFormat(request), "getSlidesImageWithDefaultFormat", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesImageWithDefaultFormatRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesImageWithDefaultFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImageWithDefaultFormat", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImageWithDefaultFormat(request), "getSlidesImageWithDefaultFormat", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesImageWithDefaultFormatRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesImageWithDefaultFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImageWithDefaultFormat", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImageWithDefaultFormat(request), "getSlidesImageWithDefaultFormat", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesImageWithFormat", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesImageWithFormatRequest();
            return TestInitializer.initialize("getSlidesImageWithFormat", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesImageWithFormat(request), true, "getSlidesImageWithFormat");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesImageWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImageWithFormat", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field, request.name);
            });
        });
    });

    it("invalid index test", () => {
        const field = "index";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.index = <number>TestInitializer.invalidizeValue(request.index, field, "number", "getSlidesImageWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImageWithFormat", field, request.index).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field, request.index);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "getSlidesImageWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImageWithFormat", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field, request.format);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesImageWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImageWithFormat", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesImageWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImageWithFormat", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesImageWithFormatRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesImageWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImageWithFormat", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImageWithFormat(request), "getSlidesImageWithFormat", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesImages", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesImagesRequest();
            return TestInitializer.initialize("getSlidesImages", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesImages(request), false, "getSlidesImages");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesImagesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesImages");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImages", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImages(request), "getSlidesImages", field, request.name);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesImagesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesImages");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImages", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImages(request), "getSlidesImages", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesImagesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesImages");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImages", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImages(request), "getSlidesImages", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesImagesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesImages");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesImages", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesImages(request), "getSlidesImages", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesPlaceholder", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesPlaceholderRequest();
            return TestInitializer.initialize("getSlidesPlaceholder", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesPlaceholder(request), false, "getSlidesPlaceholder");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesPlaceholder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPlaceholder", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPlaceholder(request), "getSlidesPlaceholder", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesPlaceholder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPlaceholder", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPlaceholder(request), "getSlidesPlaceholder", field, request.slideIndex);
            });
        });
    });

    it("invalid placeholderIndex test", () => {
        const field = "placeholderIndex";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.placeholderIndex = <number>TestInitializer.invalidizeValue(request.placeholderIndex, field, "number", "getSlidesPlaceholder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPlaceholder", field, request.placeholderIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPlaceholder(request), "getSlidesPlaceholder", field, request.placeholderIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesPlaceholder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPlaceholder", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPlaceholder(request), "getSlidesPlaceholder", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesPlaceholder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPlaceholder", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPlaceholder(request), "getSlidesPlaceholder", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesPlaceholderRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesPlaceholder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPlaceholder", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPlaceholder(request), "getSlidesPlaceholder", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesPlaceholders", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesPlaceholdersRequest();
            return TestInitializer.initialize("getSlidesPlaceholders", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesPlaceholders(request), false, "getSlidesPlaceholders");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesPlaceholders");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPlaceholders", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPlaceholders(request), "getSlidesPlaceholders", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesPlaceholders");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPlaceholders", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPlaceholders(request), "getSlidesPlaceholders", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesPlaceholders");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPlaceholders", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPlaceholders(request), "getSlidesPlaceholders", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesPlaceholders");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPlaceholders", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPlaceholders(request), "getSlidesPlaceholders", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesPlaceholdersRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesPlaceholders");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPlaceholders", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPlaceholders(request), "getSlidesPlaceholders", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesPresentationTextItems", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
            return TestInitializer.initialize("getSlidesPresentationTextItems", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesPresentationTextItems(request), false, "getSlidesPresentationTextItems");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesPresentationTextItems");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field, request.name);
            });
        });
    });

    it("invalid withEmpty test", () => {
        const field = "withEmpty";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.withEmpty = <boolean>TestInitializer.invalidizeValue(request.withEmpty, field, "boolean", "getSlidesPresentationTextItems");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.withEmpty).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field, request.withEmpty);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesPresentationTextItems");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesPresentationTextItems");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesPresentationTextItemsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesPresentationTextItems");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesPresentationTextItems", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesPresentationTextItems(request), "getSlidesPresentationTextItems", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesProtectionProperties", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesProtectionPropertiesRequest();
            return TestInitializer.initialize("getSlidesProtectionProperties", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesProtectionProperties(request), false, "getSlidesProtectionProperties");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesProtectionPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesProtectionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesProtectionProperties", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesProtectionProperties(request), "getSlidesProtectionProperties", field, request.name);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesProtectionPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesProtectionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesProtectionProperties", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesProtectionProperties(request), "getSlidesProtectionProperties", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesProtectionPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesProtectionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesProtectionProperties", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesProtectionProperties(request), "getSlidesProtectionProperties", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesProtectionPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesProtectionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesProtectionProperties", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesProtectionProperties(request), "getSlidesProtectionProperties", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesSlide", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesSlideRequest();
            return TestInitializer.initialize("getSlidesSlide", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesSlide(request), false, "getSlidesSlide");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlide", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlide(request), "getSlidesSlide", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlide", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlide(request), "getSlidesSlide", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlide", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlide(request), "getSlidesSlide", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlide", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlide(request), "getSlidesSlide", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlide", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlide(request), "getSlidesSlide", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesSlideBackground", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesSlideBackgroundRequest();
            return TestInitializer.initialize("getSlidesSlideBackground", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesSlideBackground(request), false, "getSlidesSlideBackground");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideBackground", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideBackground(request), "getSlidesSlideBackground", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideBackground", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideBackground(request), "getSlidesSlideBackground", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideBackground", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideBackground(request), "getSlidesSlideBackground", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideBackground", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideBackground(request), "getSlidesSlideBackground", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideBackgroundRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideBackground", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideBackground(request), "getSlidesSlideBackground", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesSlideComments", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesSlideCommentsRequest();
            return TestInitializer.initialize("getSlidesSlideComments", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesSlideComments(request), false, "getSlidesSlideComments");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesSlideComments");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideComments", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideComments(request), "getSlidesSlideComments", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesSlideComments");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideComments", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideComments(request), "getSlidesSlideComments", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesSlideComments");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideComments", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideComments(request), "getSlidesSlideComments", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesSlideComments");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideComments", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideComments(request), "getSlidesSlideComments", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideCommentsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesSlideComments");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideComments", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideComments(request), "getSlidesSlideComments", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesSlideImages", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesSlideImagesRequest();
            return TestInitializer.initialize("getSlidesSlideImages", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesSlideImages(request), false, "getSlidesSlideImages");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesSlideImages");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideImages", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideImages(request), "getSlidesSlideImages", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesSlideImages");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideImages", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideImages(request), "getSlidesSlideImages", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesSlideImages");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideImages", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideImages(request), "getSlidesSlideImages", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesSlideImages");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideImages", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideImages(request), "getSlidesSlideImages", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideImagesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesSlideImages");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideImages", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideImages(request), "getSlidesSlideImages", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesSlideProperties", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesSlidePropertiesRequest();
            return TestInitializer.initialize("getSlidesSlideProperties", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesSlideProperties(request), false, "getSlidesSlideProperties");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlidePropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesSlideProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideProperties", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideProperties(request), "getSlidesSlideProperties", field, request.name);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlidePropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesSlideProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideProperties", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideProperties(request), "getSlidesSlideProperties", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlidePropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesSlideProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideProperties", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideProperties(request), "getSlidesSlideProperties", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlidePropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesSlideProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideProperties", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideProperties(request), "getSlidesSlideProperties", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesSlideTextItems", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesSlideTextItemsRequest();
            return TestInitializer.initialize("getSlidesSlideTextItems", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesSlideTextItems(request), false, "getSlidesSlideTextItems");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesSlideTextItems");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideTextItems", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesSlideTextItems");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideTextItems", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field, request.slideIndex);
            });
        });
    });

    it("invalid withEmpty test", () => {
        const field = "withEmpty";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.withEmpty = <boolean>TestInitializer.invalidizeValue(request.withEmpty, field, "boolean", "getSlidesSlideTextItems");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideTextItems", field, request.withEmpty).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field, request.withEmpty);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesSlideTextItems");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideTextItems", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesSlideTextItems");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideTextItems", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlideTextItemsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesSlideTextItems");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlideTextItems", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlideTextItems(request), "getSlidesSlideTextItems", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesSlidesList", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesSlidesListRequest();
            return TestInitializer.initialize("getSlidesSlidesList", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesSlidesList(request), false, "getSlidesSlidesList");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesSlidesListRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlidesList", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlidesList(request), "getSlidesSlidesList", field, request.name);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesSlidesListRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlidesList", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlidesList(request), "getSlidesSlidesList", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesSlidesListRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlidesList", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlidesList(request), "getSlidesSlidesList", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesSlidesListRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesSlidesList");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesSlidesList", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesSlidesList(request), "getSlidesSlidesList", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesTheme", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesThemeRequest();
            return TestInitializer.initialize("getSlidesTheme", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesTheme(request), false, "getSlidesTheme");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesTheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesTheme", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesTheme(request), "getSlidesTheme", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesTheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesTheme", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesTheme(request), "getSlidesTheme", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesTheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesTheme", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesTheme(request), "getSlidesTheme", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesTheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesTheme", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesTheme(request), "getSlidesTheme", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesThemeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesTheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesTheme", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesTheme(request), "getSlidesTheme", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesThemeColorScheme", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
            return TestInitializer.initialize("getSlidesThemeColorScheme", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesThemeColorScheme(request), false, "getSlidesThemeColorScheme");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesThemeColorScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesThemeColorScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesThemeColorScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesThemeColorScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesThemeColorSchemeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesThemeColorScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeColorScheme", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeColorScheme(request), "getSlidesThemeColorScheme", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesThemeFontScheme", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
            return TestInitializer.initialize("getSlidesThemeFontScheme", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesThemeFontScheme(request), false, "getSlidesThemeFontScheme");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesThemeFontScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesThemeFontScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesThemeFontScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesThemeFontScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesThemeFontSchemeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesThemeFontScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeFontScheme", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeFontScheme(request), "getSlidesThemeFontScheme", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesThemeFormatScheme", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
            return TestInitializer.initialize("getSlidesThemeFormatScheme", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesThemeFormatScheme(request), false, "getSlidesThemeFormatScheme");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesThemeFormatScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSlidesThemeFormatScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesThemeFormatScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesThemeFormatScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesThemeFormatSchemeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesThemeFormatScheme");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesThemeFormatScheme", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesThemeFormatScheme(request), "getSlidesThemeFormatScheme", field, request.storage);
            });
        });
    });
});

describe("Tests for getSlidesViewProperties", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSlidesViewPropertiesRequest();
            return TestInitializer.initialize("getSlidesViewProperties", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSlidesViewProperties(request), false, "getSlidesViewProperties");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSlidesViewPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSlidesViewProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesViewProperties", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesViewProperties(request), "getSlidesViewProperties", field, request.name);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSlidesViewPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSlidesViewProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesViewProperties", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesViewProperties(request), "getSlidesViewProperties", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSlidesViewPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSlidesViewProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesViewProperties", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesViewProperties(request), "getSlidesViewProperties", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSlidesViewPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSlidesViewProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSlidesViewProperties", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSlidesViewProperties(request), "getSlidesViewProperties", field, request.storage);
            });
        });
    });
});

describe("Tests for getSubshapeParagraphPortion", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSubshapeParagraphPortionRequest();
            return TestInitializer.initialize("getSubshapeParagraphPortion", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSubshapeParagraphPortion(request), false, "getSubshapeParagraphPortion");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSubshapeParagraphPortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSubshapeParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortion", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortion(request), "getSubshapeParagraphPortion", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSubshapeParagraphPortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSubshapeParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortion", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortion(request), "getSubshapeParagraphPortion", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetSubshapeParagraphPortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getSubshapeParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortion", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortion(request), "getSubshapeParagraphPortion", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSubshapeParagraphPortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getSubshapeParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortion", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortion(request), "getSubshapeParagraphPortion", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetSubshapeParagraphPortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getSubshapeParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortion", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortion(request), "getSubshapeParagraphPortion", field, request.paragraphIndex);
            });
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getGetSubshapeParagraphPortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "getSubshapeParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortion", field, request.portionIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortion(request), "getSubshapeParagraphPortion", field, request.portionIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSubshapeParagraphPortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSubshapeParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortion", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortion(request), "getSubshapeParagraphPortion", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSubshapeParagraphPortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSubshapeParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortion", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortion(request), "getSubshapeParagraphPortion", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSubshapeParagraphPortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSubshapeParagraphPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortion", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortion(request), "getSubshapeParagraphPortion", field, request.storage);
            });
        });
    });
});

describe("Tests for getSubshapeParagraphPortions", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getGetSubshapeParagraphPortionsRequest();
            return TestInitializer.initialize("getSubshapeParagraphPortions", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().getSubshapeParagraphPortions(request), false, "getSubshapeParagraphPortions");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getGetSubshapeParagraphPortionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "getSubshapeParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortions", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortions(request), "getSubshapeParagraphPortions", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getGetSubshapeParagraphPortionsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "getSubshapeParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortions", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortions(request), "getSubshapeParagraphPortions", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getGetSubshapeParagraphPortionsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "getSubshapeParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortions", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortions(request), "getSubshapeParagraphPortions", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getGetSubshapeParagraphPortionsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "getSubshapeParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortions", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortions(request), "getSubshapeParagraphPortions", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getGetSubshapeParagraphPortionsRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "getSubshapeParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortions", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortions(request), "getSubshapeParagraphPortions", field, request.paragraphIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getGetSubshapeParagraphPortionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "getSubshapeParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortions", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortions(request), "getSubshapeParagraphPortions", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getGetSubshapeParagraphPortionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "getSubshapeParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortions", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortions(request), "getSubshapeParagraphPortions", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getGetSubshapeParagraphPortionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "getSubshapeParagraphPortions");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("getSubshapeParagraphPortions", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().getSubshapeParagraphPortions(request), "getSubshapeParagraphPortions", field, request.storage);
            });
        });
    });
});

describe("Tests for moveFile", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getMoveFileRequest();
            return TestInitializer.initialize("moveFile", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().moveFile(request), false, "moveFile");
            });
        });
    });

    it("invalid srcPath test", () => {
        const field = "srcPath";
        const request = TestUtils.getMoveFileRequest();
        request.srcPath = <string>TestInitializer.invalidizeValue(request.srcPath, field, "string", "moveFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("moveFile", field, request.srcPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().moveFile(request), "moveFile", field, request.srcPath);
            });
        });
    });

    it("invalid destPath test", () => {
        const field = "destPath";
        const request = TestUtils.getMoveFileRequest();
        request.destPath = <string>TestInitializer.invalidizeValue(request.destPath, field, "string", "moveFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("moveFile", field, request.destPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().moveFile(request), "moveFile", field, request.destPath);
            });
        });
    });

    it("invalid srcStorageName test", () => {
        const field = "srcStorageName";
        const request = TestUtils.getMoveFileRequest();
        request.srcStorageName = <string>TestInitializer.invalidizeValue(request.srcStorageName, field, "string", "moveFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("moveFile", field, request.srcStorageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().moveFile(request), "moveFile", field, request.srcStorageName);
            });
        });
    });

    it("invalid destStorageName test", () => {
        const field = "destStorageName";
        const request = TestUtils.getMoveFileRequest();
        request.destStorageName = <string>TestInitializer.invalidizeValue(request.destStorageName, field, "string", "moveFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("moveFile", field, request.destStorageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().moveFile(request), "moveFile", field, request.destStorageName);
            });
        });
    });

    it("invalid versionId test", () => {
        const field = "versionId";
        const request = TestUtils.getMoveFileRequest();
        request.versionId = <string>TestInitializer.invalidizeValue(request.versionId, field, "string", "moveFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("moveFile", field, request.versionId).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().moveFile(request), "moveFile", field, request.versionId);
            });
        });
    });
});

describe("Tests for moveFolder", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getMoveFolderRequest();
            return TestInitializer.initialize("moveFolder", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().moveFolder(request), false, "moveFolder");
            });
        });
    });

    it("invalid srcPath test", () => {
        const field = "srcPath";
        const request = TestUtils.getMoveFolderRequest();
        request.srcPath = <string>TestInitializer.invalidizeValue(request.srcPath, field, "string", "moveFolder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("moveFolder", field, request.srcPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().moveFolder(request), "moveFolder", field, request.srcPath);
            });
        });
    });

    it("invalid destPath test", () => {
        const field = "destPath";
        const request = TestUtils.getMoveFolderRequest();
        request.destPath = <string>TestInitializer.invalidizeValue(request.destPath, field, "string", "moveFolder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("moveFolder", field, request.destPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().moveFolder(request), "moveFolder", field, request.destPath);
            });
        });
    });

    it("invalid srcStorageName test", () => {
        const field = "srcStorageName";
        const request = TestUtils.getMoveFolderRequest();
        request.srcStorageName = <string>TestInitializer.invalidizeValue(request.srcStorageName, field, "string", "moveFolder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("moveFolder", field, request.srcStorageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().moveFolder(request), "moveFolder", field, request.srcStorageName);
            });
        });
    });

    it("invalid destStorageName test", () => {
        const field = "destStorageName";
        const request = TestUtils.getMoveFolderRequest();
        request.destStorageName = <string>TestInitializer.invalidizeValue(request.destStorageName, field, "string", "moveFolder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("moveFolder", field, request.destStorageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().moveFolder(request), "moveFolder", field, request.destStorageName);
            });
        });
    });
});

describe("Tests for objectExists", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getObjectExistsRequest();
            return TestInitializer.initialize("objectExists", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().objectExists(request), false, "objectExists");
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getObjectExistsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "objectExists");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("objectExists", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().objectExists(request), "objectExists", field, request.path);
            });
        });
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getObjectExistsRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "objectExists");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("objectExists", field, request.storageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().objectExists(request), "objectExists", field, request.storageName);
            });
        });
    });

    it("invalid versionId test", () => {
        const field = "versionId";
        const request = TestUtils.getObjectExistsRequest();
        request.versionId = <string>TestInitializer.invalidizeValue(request.versionId, field, "string", "objectExists");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("objectExists", field, request.versionId).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().objectExists(request), "objectExists", field, request.versionId);
            });
        });
    });
});

describe("Tests for postAddNewParagraph", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostAddNewParagraphRequest();
            return TestInitializer.initialize("postAddNewParagraph", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postAddNewParagraph(request), false, "postAddNewParagraph");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewParagraph", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewParagraph(request), "postAddNewParagraph", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewParagraph", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewParagraph(request), "postAddNewParagraph", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewParagraph", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewParagraph(request), "postAddNewParagraph", field, request.shapeIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph", "postAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewParagraph", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewParagraph(request), "postAddNewParagraph", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewParagraph", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewParagraph(request), "postAddNewParagraph", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewParagraph", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewParagraph(request), "postAddNewParagraph", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewParagraph", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewParagraph(request), "postAddNewParagraph", field, request.storage);
            });
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostAddNewParagraphRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewParagraph", field, request.position).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewParagraph(request), "postAddNewParagraph", field, request.position);
            });
        });
    });
});

describe("Tests for postAddNewPortion", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostAddNewPortionRequest();
            return TestInitializer.initialize("postAddNewPortion", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postAddNewPortion(request), false, "postAddNewPortion");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewPortion", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewPortion(request), "postAddNewPortion", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewPortion", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewPortion(request), "postAddNewPortion", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewPortion", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewPortion(request), "postAddNewPortion", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "postAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewPortion", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewPortion(request), "postAddNewPortion", field, request.paragraphIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion", "postAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewPortion", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewPortion(request), "postAddNewPortion", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewPortion", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewPortion(request), "postAddNewPortion", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewPortion", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewPortion(request), "postAddNewPortion", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewPortion", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewPortion(request), "postAddNewPortion", field, request.storage);
            });
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostAddNewPortionRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewPortion", field, request.position).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewPortion(request), "postAddNewPortion", field, request.position);
            });
        });
    });
});

describe("Tests for postAddNewShape", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostAddNewShapeRequest();
            return TestInitializer.initialize("postAddNewShape", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postAddNewShape(request), false, "postAddNewShape");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewShape", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewShape(request), "postAddNewShape", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewShape", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewShape(request), "postAddNewShape", field, request.slideIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase", "postAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewShape", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewShape(request), "postAddNewShape", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewShape", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewShape(request), "postAddNewShape", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewShape", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewShape(request), "postAddNewShape", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewShape", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewShape(request), "postAddNewShape", field, request.storage);
            });
        });
    });

    it("invalid shapeToClone test", () => {
        const field = "shapeToClone";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.shapeToClone = <number>TestInitializer.invalidizeValue(request.shapeToClone, field, "number", "postAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewShape", field, request.shapeToClone).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewShape(request), "postAddNewShape", field, request.shapeToClone);
            });
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostAddNewShapeRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewShape", field, request.position).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewShape(request), "postAddNewShape", field, request.position);
            });
        });
    });
});

describe("Tests for postAddNewSubshape", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostAddNewSubshapeRequest();
            return TestInitializer.initialize("postAddNewSubshape", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postAddNewSubshape(request), false, "postAddNewSubshape");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNewSubshapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postAddNewSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshape", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshape(request), "postAddNewSubshape", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNewSubshapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postAddNewSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshape", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshape(request), "postAddNewSubshape", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostAddNewSubshapeRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "postAddNewSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshape", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshape(request), "postAddNewSubshape", field, request.path);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNewSubshapeRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase", "postAddNewSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshape", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshape(request), "postAddNewSubshape", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNewSubshapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postAddNewSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshape", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshape(request), "postAddNewSubshape", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNewSubshapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postAddNewSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshape", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshape(request), "postAddNewSubshape", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNewSubshapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postAddNewSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshape", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshape(request), "postAddNewSubshape", field, request.storage);
            });
        });
    });

    it("invalid shapeToClone test", () => {
        const field = "shapeToClone";
        const request = TestUtils.getPostAddNewSubshapeRequest();
        request.shapeToClone = <number>TestInitializer.invalidizeValue(request.shapeToClone, field, "number", "postAddNewSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshape", field, request.shapeToClone).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshape(request), "postAddNewSubshape", field, request.shapeToClone);
            });
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostAddNewSubshapeRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postAddNewSubshape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshape", field, request.position).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshape(request), "postAddNewSubshape", field, request.position);
            });
        });
    });
});

describe("Tests for postAddNewSubshapeParagraph", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostAddNewSubshapeParagraphRequest();
            return TestInitializer.initialize("postAddNewSubshapeParagraph", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postAddNewSubshapeParagraph(request), false, "postAddNewSubshapeParagraph");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNewSubshapeParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postAddNewSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapeParagraph", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapeParagraph(request), "postAddNewSubshapeParagraph", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNewSubshapeParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postAddNewSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapeParagraph", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapeParagraph(request), "postAddNewSubshapeParagraph", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostAddNewSubshapeParagraphRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "postAddNewSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapeParagraph", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapeParagraph(request), "postAddNewSubshapeParagraph", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostAddNewSubshapeParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postAddNewSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapeParagraph", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapeParagraph(request), "postAddNewSubshapeParagraph", field, request.shapeIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNewSubshapeParagraphRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph", "postAddNewSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapeParagraph", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapeParagraph(request), "postAddNewSubshapeParagraph", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNewSubshapeParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postAddNewSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapeParagraph", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapeParagraph(request), "postAddNewSubshapeParagraph", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNewSubshapeParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postAddNewSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapeParagraph", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapeParagraph(request), "postAddNewSubshapeParagraph", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNewSubshapeParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postAddNewSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapeParagraph", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapeParagraph(request), "postAddNewSubshapeParagraph", field, request.storage);
            });
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostAddNewSubshapeParagraphRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postAddNewSubshapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapeParagraph", field, request.position).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapeParagraph(request), "postAddNewSubshapeParagraph", field, request.position);
            });
        });
    });
});

describe("Tests for postAddNewSubshapePortion", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostAddNewSubshapePortionRequest();
            return TestInitializer.initialize("postAddNewSubshapePortion", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postAddNewSubshapePortion(request), false, "postAddNewSubshapePortion");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNewSubshapePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postAddNewSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapePortion", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapePortion(request), "postAddNewSubshapePortion", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNewSubshapePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postAddNewSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapePortion", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapePortion(request), "postAddNewSubshapePortion", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostAddNewSubshapePortionRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "postAddNewSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapePortion", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapePortion(request), "postAddNewSubshapePortion", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostAddNewSubshapePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postAddNewSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapePortion", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapePortion(request), "postAddNewSubshapePortion", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPostAddNewSubshapePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "postAddNewSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapePortion", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapePortion(request), "postAddNewSubshapePortion", field, request.paragraphIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNewSubshapePortionRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion", "postAddNewSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapePortion", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapePortion(request), "postAddNewSubshapePortion", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNewSubshapePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postAddNewSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapePortion", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapePortion(request), "postAddNewSubshapePortion", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNewSubshapePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postAddNewSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapePortion", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapePortion(request), "postAddNewSubshapePortion", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNewSubshapePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postAddNewSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapePortion", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapePortion(request), "postAddNewSubshapePortion", field, request.storage);
            });
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostAddNewSubshapePortionRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postAddNewSubshapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNewSubshapePortion", field, request.position).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNewSubshapePortion(request), "postAddNewSubshapePortion", field, request.position);
            });
        });
    });
});

describe("Tests for postAddNotesSlide", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostAddNotesSlideRequest();
            return TestInitializer.initialize("postAddNotesSlide", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postAddNotesSlide(request), false, "postAddNotesSlide");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postAddNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNotesSlide", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNotesSlide(request), "postAddNotesSlide", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postAddNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNotesSlide", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNotesSlide(request), "postAddNotesSlide", field, request.slideIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.dto = <model.NotesSlide>TestInitializer.invalidizeValue(request.dto, field, "NotesSlide", "postAddNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNotesSlide", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNotesSlide(request), "postAddNotesSlide", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postAddNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNotesSlide", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNotesSlide(request), "postAddNotesSlide", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postAddNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNotesSlide", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNotesSlide(request), "postAddNotesSlide", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostAddNotesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postAddNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postAddNotesSlide", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postAddNotesSlide(request), "postAddNotesSlide", field, request.storage);
            });
        });
    });
});

describe("Tests for postChartCategory", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostChartCategoryRequest();
            return TestInitializer.initialize("postChartCategory", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postChartCategory(request), false, "postChartCategory");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostChartCategoryRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartCategory", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartCategory(request), "postChartCategory", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostChartCategoryRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartCategory", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartCategory(request), "postChartCategory", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostChartCategoryRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartCategory", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartCategory(request), "postChartCategory", field, request.shapeIndex);
            });
        });
    });

    it("invalid category test", () => {
        const field = "category";
        const request = TestUtils.getPostChartCategoryRequest();
        request.category = <model.ChartCategory>TestInitializer.invalidizeValue(request.category, field, "ChartCategory", "postChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartCategory", field, request.category).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartCategory(request), "postChartCategory", field, request.category);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostChartCategoryRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartCategory", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartCategory(request), "postChartCategory", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostChartCategoryRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartCategory", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartCategory(request), "postChartCategory", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostChartCategoryRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartCategory", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartCategory(request), "postChartCategory", field, request.storage);
            });
        });
    });
});

describe("Tests for postChartDataPoint", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostChartDataPointRequest();
            return TestInitializer.initialize("postChartDataPoint", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postChartDataPoint(request), false, "postChartDataPoint");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostChartDataPointRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartDataPoint", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartDataPoint(request), "postChartDataPoint", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostChartDataPointRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartDataPoint", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartDataPoint(request), "postChartDataPoint", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostChartDataPointRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartDataPoint", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartDataPoint(request), "postChartDataPoint", field, request.shapeIndex);
            });
        });
    });

    it("invalid seriesIndex test", () => {
        const field = "seriesIndex";
        const request = TestUtils.getPostChartDataPointRequest();
        request.seriesIndex = <number>TestInitializer.invalidizeValue(request.seriesIndex, field, "number", "postChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartDataPoint", field, request.seriesIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartDataPoint(request), "postChartDataPoint", field, request.seriesIndex);
            });
        });
    });

    it("invalid dataPoint test", () => {
        const field = "dataPoint";
        const request = TestUtils.getPostChartDataPointRequest();
        request.dataPoint = <model.DataPoint>TestInitializer.invalidizeValue(request.dataPoint, field, "DataPoint", "postChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartDataPoint", field, request.dataPoint).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartDataPoint(request), "postChartDataPoint", field, request.dataPoint);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostChartDataPointRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartDataPoint", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartDataPoint(request), "postChartDataPoint", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostChartDataPointRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartDataPoint", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartDataPoint(request), "postChartDataPoint", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostChartDataPointRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartDataPoint", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartDataPoint(request), "postChartDataPoint", field, request.storage);
            });
        });
    });
});

describe("Tests for postChartSeries", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostChartSeriesRequest();
            return TestInitializer.initialize("postChartSeries", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postChartSeries(request), false, "postChartSeries");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostChartSeriesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartSeries", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartSeries(request), "postChartSeries", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostChartSeriesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartSeries", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartSeries(request), "postChartSeries", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostChartSeriesRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartSeries", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartSeries(request), "postChartSeries", field, request.shapeIndex);
            });
        });
    });

    it("invalid series test", () => {
        const field = "series";
        const request = TestUtils.getPostChartSeriesRequest();
        request.series = <model.Series>TestInitializer.invalidizeValue(request.series, field, "Series", "postChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartSeries", field, request.series).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartSeries(request), "postChartSeries", field, request.series);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostChartSeriesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartSeries", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartSeries(request), "postChartSeries", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostChartSeriesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartSeries", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartSeries(request), "postChartSeries", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostChartSeriesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postChartSeries", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postChartSeries(request), "postChartSeries", field, request.storage);
            });
        });
    });
});

describe("Tests for postCopyLayoutSlideFromSourcePresentation", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
            return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postCopyLayoutSlideFromSourcePresentation(request), false, "postCopyLayoutSlideFromSourcePresentation");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.name);
            });
        });
    });

    it("invalid cloneFrom test", () => {
        const field = "cloneFrom";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.cloneFrom = <string>TestInitializer.invalidizeValue(request.cloneFrom, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.cloneFrom).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.cloneFrom);
            });
        });
    });

    it("invalid cloneFromPosition test", () => {
        const field = "cloneFromPosition";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.cloneFromPosition = <number>TestInitializer.invalidizeValue(request.cloneFromPosition, field, "number", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromPosition).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromPosition);
            });
        });
    });

    it("invalid cloneFromPassword test", () => {
        const field = "cloneFromPassword";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.cloneFromPassword = <string>TestInitializer.invalidizeValue(request.cloneFromPassword, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromPassword).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromPassword);
            });
        });
    });

    it("invalid cloneFromStorage test", () => {
        const field = "cloneFromStorage";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.cloneFromStorage = <string>TestInitializer.invalidizeValue(request.cloneFromStorage, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromStorage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.cloneFromStorage);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostCopyLayoutSlideFromSourcePresentationRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postCopyLayoutSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyLayoutSlideFromSourcePresentation", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyLayoutSlideFromSourcePresentation(request), "postCopyLayoutSlideFromSourcePresentation", field, request.storage);
            });
        });
    });
});

describe("Tests for postCopyMasterSlideFromSourcePresentation", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
            return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postCopyMasterSlideFromSourcePresentation(request), false, "postCopyMasterSlideFromSourcePresentation");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.name);
            });
        });
    });

    it("invalid cloneFrom test", () => {
        const field = "cloneFrom";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.cloneFrom = <string>TestInitializer.invalidizeValue(request.cloneFrom, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.cloneFrom).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.cloneFrom);
            });
        });
    });

    it("invalid cloneFromPosition test", () => {
        const field = "cloneFromPosition";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.cloneFromPosition = <number>TestInitializer.invalidizeValue(request.cloneFromPosition, field, "number", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.cloneFromPosition).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.cloneFromPosition);
            });
        });
    });

    it("invalid cloneFromPassword test", () => {
        const field = "cloneFromPassword";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.cloneFromPassword = <string>TestInitializer.invalidizeValue(request.cloneFromPassword, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.cloneFromPassword).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.cloneFromPassword);
            });
        });
    });

    it("invalid cloneFromStorage test", () => {
        const field = "cloneFromStorage";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.cloneFromStorage = <string>TestInitializer.invalidizeValue(request.cloneFromStorage, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.cloneFromStorage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.cloneFromStorage);
            });
        });
    });

    it("invalid applyToAll test", () => {
        const field = "applyToAll";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.applyToAll = <boolean>TestInitializer.invalidizeValue(request.applyToAll, field, "boolean", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.applyToAll).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.applyToAll);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostCopyMasterSlideFromSourcePresentationRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postCopyMasterSlideFromSourcePresentation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postCopyMasterSlideFromSourcePresentation", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postCopyMasterSlideFromSourcePresentation(request), "postCopyMasterSlideFromSourcePresentation", field, request.storage);
            });
        });
    });
});

describe("Tests for postGetNotesSlide", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostGetNotesSlideRequest();
            return TestInitializer.initialize("postGetNotesSlide", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postGetNotesSlide(request), false, "postGetNotesSlide");
            });
        });
    });

    it("invalid document test", () => {
        const field = "document";
        const request = TestUtils.getPostGetNotesSlideRequest();
        request.document = <Buffer>TestInitializer.invalidizeValue(request.document, field, "Buffer", "postGetNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postGetNotesSlide", field, request.document).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postGetNotesSlide(request), "postGetNotesSlide", field, request.document);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostGetNotesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postGetNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postGetNotesSlide", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postGetNotesSlide(request), "postGetNotesSlide", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostGetNotesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postGetNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postGetNotesSlide", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postGetNotesSlide(request), "postGetNotesSlide", field, request.password);
            });
        });
    });
});

describe("Tests for postGetNotesSlideExists", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostGetNotesSlideExistsRequest();
            return TestInitializer.initialize("postGetNotesSlideExists", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postGetNotesSlideExists(request), false, "postGetNotesSlideExists");
            });
        });
    });

    it("invalid document test", () => {
        const field = "document";
        const request = TestUtils.getPostGetNotesSlideExistsRequest();
        request.document = <Buffer>TestInitializer.invalidizeValue(request.document, field, "Buffer", "postGetNotesSlideExists");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postGetNotesSlideExists", field, request.document).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postGetNotesSlideExists(request), "postGetNotesSlideExists", field, request.document);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostGetNotesSlideExistsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postGetNotesSlideExists");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postGetNotesSlideExists", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postGetNotesSlideExists(request), "postGetNotesSlideExists", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostGetNotesSlideExistsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postGetNotesSlideExists");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postGetNotesSlideExists", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postGetNotesSlideExists(request), "postGetNotesSlideExists", field, request.password);
            });
        });
    });
});

describe("Tests for postGetNotesSlideWithFormat", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostGetNotesSlideWithFormatRequest();
            return TestInitializer.initialize("postGetNotesSlideWithFormat", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postGetNotesSlideWithFormat(request), true, "postGetNotesSlideWithFormat");
            });
        });
    });

    it("invalid document test", () => {
        const field = "document";
        const request = TestUtils.getPostGetNotesSlideWithFormatRequest();
        request.document = <Buffer>TestInitializer.invalidizeValue(request.document, field, "Buffer", "postGetNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postGetNotesSlideWithFormat", field, request.document).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postGetNotesSlideWithFormat(request), "postGetNotesSlideWithFormat", field, request.document);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostGetNotesSlideWithFormatRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postGetNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postGetNotesSlideWithFormat", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postGetNotesSlideWithFormat(request), "postGetNotesSlideWithFormat", field, request.slideIndex);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostGetNotesSlideWithFormatRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postGetNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postGetNotesSlideWithFormat", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postGetNotesSlideWithFormat(request), "postGetNotesSlideWithFormat", field, request.format);
            });
        });
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getPostGetNotesSlideWithFormatRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number", "postGetNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postGetNotesSlideWithFormat", field, request.width).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postGetNotesSlideWithFormat(request), "postGetNotesSlideWithFormat", field, request.width);
            });
        });
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getPostGetNotesSlideWithFormatRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number", "postGetNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postGetNotesSlideWithFormat", field, request.height).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postGetNotesSlideWithFormat(request), "postGetNotesSlideWithFormat", field, request.height);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostGetNotesSlideWithFormatRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postGetNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postGetNotesSlideWithFormat", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postGetNotesSlideWithFormat(request), "postGetNotesSlideWithFormat", field, request.password);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostGetNotesSlideWithFormatRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postGetNotesSlideWithFormat");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postGetNotesSlideWithFormat", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postGetNotesSlideWithFormat(request), "postGetNotesSlideWithFormat", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for postNotesSlideAddNewParagraph", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
            return TestInitializer.initialize("postNotesSlideAddNewParagraph", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postNotesSlideAddNewParagraph(request), false, "postNotesSlideAddNewParagraph");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postNotesSlideAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postNotesSlideAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postNotesSlideAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.shapeIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph", "postNotesSlideAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postNotesSlideAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postNotesSlideAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postNotesSlideAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.storage);
            });
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostNotesSlideAddNewParagraphRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postNotesSlideAddNewParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewParagraph", field, request.position).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewParagraph(request), "postNotesSlideAddNewParagraph", field, request.position);
            });
        });
    });
});

describe("Tests for postNotesSlideAddNewPortion", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
            return TestInitializer.initialize("postNotesSlideAddNewPortion", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postNotesSlideAddNewPortion(request), false, "postNotesSlideAddNewPortion");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postNotesSlideAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postNotesSlideAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postNotesSlideAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "postNotesSlideAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.paragraphIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion", "postNotesSlideAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postNotesSlideAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postNotesSlideAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postNotesSlideAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.storage);
            });
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostNotesSlideAddNewPortionRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postNotesSlideAddNewPortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewPortion", field, request.position).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewPortion(request), "postNotesSlideAddNewPortion", field, request.position);
            });
        });
    });
});

describe("Tests for postNotesSlideAddNewShape", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
            return TestInitializer.initialize("postNotesSlideAddNewShape", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postNotesSlideAddNewShape(request), false, "postNotesSlideAddNewShape");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postNotesSlideAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postNotesSlideAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.slideIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase", "postNotesSlideAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postNotesSlideAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postNotesSlideAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postNotesSlideAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.storage);
            });
        });
    });

    it("invalid shapeToClone test", () => {
        const field = "shapeToClone";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.shapeToClone = <number>TestInitializer.invalidizeValue(request.shapeToClone, field, "number", "postNotesSlideAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.shapeToClone).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.shapeToClone);
            });
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostNotesSlideAddNewShapeRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postNotesSlideAddNewShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideAddNewShape", field, request.position).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideAddNewShape(request), "postNotesSlideAddNewShape", field, request.position);
            });
        });
    });
});

describe("Tests for postNotesSlideShapeSaveAs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
            return TestInitializer.initialize("postNotesSlideShapeSaveAs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postNotesSlideShapeSaveAs(request), true, "postNotesSlideShapeSaveAs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.shapeIndex);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.format);
            });
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.options = <model.IShapeExportOptions>TestInitializer.invalidizeValue(request.options, field, "IShapeExportOptions", "postNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.options).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.options);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.storage);
            });
        });
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number", "postNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.scaleX).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.scaleX);
            });
        });
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number", "postNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.scaleY).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.scaleY);
            });
        });
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.bounds).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.bounds);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostNotesSlideShapeSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postNotesSlideShapeSaveAs", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postNotesSlideShapeSaveAs(request), "postNotesSlideShapeSaveAs", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for postPresentationMerge", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostPresentationMergeRequest();
            return TestInitializer.initialize("postPresentationMerge", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postPresentationMerge(request), false, "postPresentationMerge");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postPresentationMerge");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postPresentationMerge", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postPresentationMerge(request), "postPresentationMerge", field, request.name);
            });
        });
    });

    it("invalid request test", () => {
        const field = "request";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.request = <model.PresentationsMergeRequest>TestInitializer.invalidizeValue(request.request, field, "PresentationsMergeRequest", "postPresentationMerge");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postPresentationMerge", field, request.request).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postPresentationMerge(request), "postPresentationMerge", field, request.request);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postPresentationMerge");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postPresentationMerge", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postPresentationMerge(request), "postPresentationMerge", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postPresentationMerge");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postPresentationMerge", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postPresentationMerge(request), "postPresentationMerge", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostPresentationMergeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postPresentationMerge");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postPresentationMerge", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postPresentationMerge(request), "postPresentationMerge", field, request.folder);
            });
        });
    });
});

describe("Tests for postSection", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSectionRequest();
            return TestInitializer.initialize("postSection", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSection(request), false, "postSection");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSectionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSection", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSection(request), "postSection", field, request.name);
            });
        });
    });

    it("invalid sectionName test", () => {
        const field = "sectionName";
        const request = TestUtils.getPostSectionRequest();
        request.sectionName = <string>TestInitializer.invalidizeValue(request.sectionName, field, "string", "postSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSection", field, request.sectionName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSection(request), "postSection", field, request.sectionName);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSectionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSection", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSection(request), "postSection", field, request.slideIndex);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSectionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSection", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSection(request), "postSection", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSectionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSection", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSection(request), "postSection", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSectionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSection", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSection(request), "postSection", field, request.storage);
            });
        });
    });
});

describe("Tests for postSectionMove", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSectionMoveRequest();
            return TestInitializer.initialize("postSectionMove", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSectionMove(request), false, "postSectionMove");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSectionMoveRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSectionMove");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSectionMove", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSectionMove(request), "postSectionMove", field, request.name);
            });
        });
    });

    it("invalid sectionIndex test", () => {
        const field = "sectionIndex";
        const request = TestUtils.getPostSectionMoveRequest();
        request.sectionIndex = <number>TestInitializer.invalidizeValue(request.sectionIndex, field, "number", "postSectionMove");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSectionMove", field, request.sectionIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSectionMove(request), "postSectionMove", field, request.sectionIndex);
            });
        });
    });

    it("invalid newPosition test", () => {
        const field = "newPosition";
        const request = TestUtils.getPostSectionMoveRequest();
        request.newPosition = <number>TestInitializer.invalidizeValue(request.newPosition, field, "number", "postSectionMove");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSectionMove", field, request.newPosition).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSectionMove(request), "postSectionMove", field, request.newPosition);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSectionMoveRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSectionMove");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSectionMove", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSectionMove(request), "postSectionMove", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSectionMoveRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSectionMove");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSectionMove", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSectionMove(request), "postSectionMove", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSectionMoveRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSectionMove");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSectionMove", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSectionMove(request), "postSectionMove", field, request.storage);
            });
        });
    });
});

describe("Tests for postShapeSaveAs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostShapeSaveAsRequest();
            return TestInitializer.initialize("postShapeSaveAs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postShapeSaveAs(request), true, "postShapeSaveAs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postShapeSaveAs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postShapeSaveAs(request), "postShapeSaveAs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postShapeSaveAs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postShapeSaveAs(request), "postShapeSaveAs", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postShapeSaveAs", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postShapeSaveAs(request), "postShapeSaveAs", field, request.shapeIndex);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postShapeSaveAs", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postShapeSaveAs(request), "postShapeSaveAs", field, request.format);
            });
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.options = <model.IShapeExportOptions>TestInitializer.invalidizeValue(request.options, field, "IShapeExportOptions", "postShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postShapeSaveAs", field, request.options).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postShapeSaveAs(request), "postShapeSaveAs", field, request.options);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postShapeSaveAs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postShapeSaveAs(request), "postShapeSaveAs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postShapeSaveAs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postShapeSaveAs(request), "postShapeSaveAs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postShapeSaveAs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postShapeSaveAs(request), "postShapeSaveAs", field, request.storage);
            });
        });
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number", "postShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postShapeSaveAs", field, request.scaleX).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postShapeSaveAs(request), "postShapeSaveAs", field, request.scaleX);
            });
        });
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number", "postShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postShapeSaveAs", field, request.scaleY).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postShapeSaveAs(request), "postShapeSaveAs", field, request.scaleY);
            });
        });
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string", "postShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postShapeSaveAs", field, request.bounds).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postShapeSaveAs(request), "postShapeSaveAs", field, request.bounds);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostShapeSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postShapeSaveAs", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postShapeSaveAs(request), "postShapeSaveAs", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for postSlideAnimationEffect", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlideAnimationEffectRequest();
            return TestInitializer.initialize("postSlideAnimationEffect", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlideAnimationEffect(request), false, "postSlideAnimationEffect");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlideAnimationEffectRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationEffect", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationEffect(request), "postSlideAnimationEffect", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlideAnimationEffectRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationEffect", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationEffect(request), "postSlideAnimationEffect", field, request.slideIndex);
            });
        });
    });

    it("invalid effect test", () => {
        const field = "effect";
        const request = TestUtils.getPostSlideAnimationEffectRequest();
        request.effect = <model.Effect>TestInitializer.invalidizeValue(request.effect, field, "Effect", "postSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationEffect", field, request.effect).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationEffect(request), "postSlideAnimationEffect", field, request.effect);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlideAnimationEffectRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationEffect", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationEffect(request), "postSlideAnimationEffect", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlideAnimationEffectRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationEffect", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationEffect(request), "postSlideAnimationEffect", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlideAnimationEffectRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationEffect", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationEffect(request), "postSlideAnimationEffect", field, request.storage);
            });
        });
    });
});

describe("Tests for postSlideAnimationInteractiveSequence", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
            return TestInitializer.initialize("postSlideAnimationInteractiveSequence", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequence(request), false, "postSlideAnimationInteractiveSequence");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlideAnimationInteractiveSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationInteractiveSequence", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequence(request), "postSlideAnimationInteractiveSequence", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSlideAnimationInteractiveSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationInteractiveSequence", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequence(request), "postSlideAnimationInteractiveSequence", field, request.slideIndex);
            });
        });
    });

    it("invalid sequence test", () => {
        const field = "sequence";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
        request.sequence = <model.InteractiveSequence>TestInitializer.invalidizeValue(request.sequence, field, "InteractiveSequence", "postSlideAnimationInteractiveSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationInteractiveSequence", field, request.sequence).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequence(request), "postSlideAnimationInteractiveSequence", field, request.sequence);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlideAnimationInteractiveSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationInteractiveSequence", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequence(request), "postSlideAnimationInteractiveSequence", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlideAnimationInteractiveSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationInteractiveSequence", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequence(request), "postSlideAnimationInteractiveSequence", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlideAnimationInteractiveSequence");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationInteractiveSequence", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequence(request), "postSlideAnimationInteractiveSequence", field, request.storage);
            });
        });
    });
});

describe("Tests for postSlideAnimationInteractiveSequenceEffect", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
            return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequenceEffect(request), false, "postSlideAnimationInteractiveSequenceEffect");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.slideIndex);
            });
        });
    });

    it("invalid sequenceIndex test", () => {
        const field = "sequenceIndex";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.sequenceIndex = <number>TestInitializer.invalidizeValue(request.sequenceIndex, field, "number", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.sequenceIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.sequenceIndex);
            });
        });
    });

    it("invalid effect test", () => {
        const field = "effect";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.effect = <model.Effect>TestInitializer.invalidizeValue(request.effect, field, "Effect", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.effect).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.effect);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlideAnimationInteractiveSequenceEffectRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideAnimationInteractiveSequenceEffect", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideAnimationInteractiveSequenceEffect(request), "postSlideAnimationInteractiveSequenceEffect", field, request.storage);
            });
        });
    });
});

describe("Tests for postSlideSaveAs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlideSaveAsRequest();
            return TestInitializer.initialize("postSlideSaveAs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlideSaveAs(request), true, "postSlideSaveAs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideSaveAs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideSaveAs(request), "postSlideSaveAs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideSaveAs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideSaveAs(request), "postSlideSaveAs", field, request.slideIndex);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideSaveAs", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideSaveAs(request), "postSlideSaveAs", field, request.format);
            });
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.options = <model.ExportOptions>TestInitializer.invalidizeValue(request.options, field, "ExportOptions", "postSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideSaveAs", field, request.options).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideSaveAs(request), "postSlideSaveAs", field, request.options);
            });
        });
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number", "postSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideSaveAs", field, request.width).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideSaveAs(request), "postSlideSaveAs", field, request.width);
            });
        });
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number", "postSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideSaveAs", field, request.height).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideSaveAs(request), "postSlideSaveAs", field, request.height);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideSaveAs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideSaveAs(request), "postSlideSaveAs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideSaveAs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideSaveAs(request), "postSlideSaveAs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideSaveAs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideSaveAs(request), "postSlideSaveAs", field, request.storage);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostSlideSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlideSaveAs", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlideSaveAs(request), "postSlideSaveAs", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for postSlidesAdd", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesAddRequest();
            return TestInitializer.initialize("postSlidesAdd", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesAdd(request), false, "postSlidesAdd");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesAddRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesAdd");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesAdd", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesAdd(request), "postSlidesAdd", field, request.name);
            });
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostSlidesAddRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postSlidesAdd");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesAdd", field, request.position).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesAdd(request), "postSlidesAdd", field, request.position);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesAddRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesAdd");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesAdd", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesAdd(request), "postSlidesAdd", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesAddRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesAdd");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesAdd", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesAdd(request), "postSlidesAdd", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesAddRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesAdd");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesAdd", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesAdd(request), "postSlidesAdd", field, request.storage);
            });
        });
    });

    it("invalid layoutAlias test", () => {
        const field = "layoutAlias";
        const request = TestUtils.getPostSlidesAddRequest();
        request.layoutAlias = <string>TestInitializer.invalidizeValue(request.layoutAlias, field, "string", "postSlidesAdd");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesAdd", field, request.layoutAlias).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesAdd(request), "postSlidesAdd", field, request.layoutAlias);
            });
        });
    });
});

describe("Tests for postSlidesConvert", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesConvertRequest();
            return TestInitializer.initialize("postSlidesConvert", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesConvert(request), true, "postSlidesConvert");
            });
        });
    });

    it("invalid document test", () => {
        const field = "document";
        const request = TestUtils.getPostSlidesConvertRequest();
        request.document = <Buffer>TestInitializer.invalidizeValue(request.document, field, "Buffer", "postSlidesConvert");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesConvert", field, request.document).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesConvert(request), "postSlidesConvert", field, request.document);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostSlidesConvertRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postSlidesConvert");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesConvert", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesConvert(request), "postSlidesConvert", field, request.format);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesConvertRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesConvert");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesConvert", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesConvert(request), "postSlidesConvert", field, request.password);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostSlidesConvertRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postSlidesConvert");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesConvert", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesConvert(request), "postSlidesConvert", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for postSlidesCopy", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesCopyRequest();
            return TestInitializer.initialize("postSlidesCopy", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesCopy(request), false, "postSlidesCopy");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesCopy");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesCopy", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesCopy(request), "postSlidesCopy", field, request.name);
            });
        });
    });

    it("invalid slideToCopy test", () => {
        const field = "slideToCopy";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.slideToCopy = <number>TestInitializer.invalidizeValue(request.slideToCopy, field, "number", "postSlidesCopy");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesCopy", field, request.slideToCopy).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesCopy(request), "postSlidesCopy", field, request.slideToCopy);
            });
        });
    });

    it("invalid position test", () => {
        const field = "position";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.position = <number>TestInitializer.invalidizeValue(request.position, field, "number", "postSlidesCopy");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesCopy", field, request.position).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesCopy(request), "postSlidesCopy", field, request.position);
            });
        });
    });

    it("invalid source test", () => {
        const field = "source";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.source = <string>TestInitializer.invalidizeValue(request.source, field, "string", "postSlidesCopy");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesCopy", field, request.source).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesCopy(request), "postSlidesCopy", field, request.source);
            });
        });
    });

    it("invalid sourcePassword test", () => {
        const field = "sourcePassword";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.sourcePassword = <string>TestInitializer.invalidizeValue(request.sourcePassword, field, "string", "postSlidesCopy");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesCopy", field, request.sourcePassword).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesCopy(request), "postSlidesCopy", field, request.sourcePassword);
            });
        });
    });

    it("invalid sourceStorage test", () => {
        const field = "sourceStorage";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.sourceStorage = <string>TestInitializer.invalidizeValue(request.sourceStorage, field, "string", "postSlidesCopy");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesCopy", field, request.sourceStorage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesCopy(request), "postSlidesCopy", field, request.sourceStorage);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesCopy");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesCopy", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesCopy(request), "postSlidesCopy", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesCopy");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesCopy", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesCopy(request), "postSlidesCopy", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesCopyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesCopy");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesCopy", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesCopy(request), "postSlidesCopy", field, request.storage);
            });
        });
    });
});

describe("Tests for postSlidesDocument", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesDocumentRequest();
            return TestInitializer.initialize("postSlidesDocument", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesDocument(request), false, "postSlidesDocument");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesDocument");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocument", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocument(request), "postSlidesDocument", field, request.name);
            });
        });
    });

    it("invalid data test", () => {
        const field = "data";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.data = <Buffer>TestInitializer.invalidizeValue(request.data, field, "Buffer", "postSlidesDocument");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocument", field, request.data).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocument(request), "postSlidesDocument", field, request.data);
            });
        });
    });

    it("invalid inputPassword test", () => {
        const field = "inputPassword";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.inputPassword = <string>TestInitializer.invalidizeValue(request.inputPassword, field, "string", "postSlidesDocument");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocument", field, request.inputPassword).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocument(request), "postSlidesDocument", field, request.inputPassword);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesDocument");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocument", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocument(request), "postSlidesDocument", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesDocument");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocument", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocument(request), "postSlidesDocument", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesDocumentRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesDocument");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocument", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocument(request), "postSlidesDocument", field, request.folder);
            });
        });
    });
});

describe("Tests for postSlidesDocumentFromHtml", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesDocumentFromHtmlRequest();
            return TestInitializer.initialize("postSlidesDocumentFromHtml", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesDocumentFromHtml(request), false, "postSlidesDocumentFromHtml");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesDocumentFromHtmlRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesDocumentFromHtml");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromHtml", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromHtml(request), "postSlidesDocumentFromHtml", field, request.name);
            });
        });
    });

    it("invalid html test", () => {
        const field = "html";
        const request = TestUtils.getPostSlidesDocumentFromHtmlRequest();
        request.html = <string>TestInitializer.invalidizeValue(request.html, field, "string", "postSlidesDocumentFromHtml");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromHtml", field, request.html).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromHtml(request), "postSlidesDocumentFromHtml", field, request.html);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesDocumentFromHtmlRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesDocumentFromHtml");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromHtml", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromHtml(request), "postSlidesDocumentFromHtml", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesDocumentFromHtmlRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesDocumentFromHtml");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromHtml", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromHtml(request), "postSlidesDocumentFromHtml", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesDocumentFromHtmlRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesDocumentFromHtml");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromHtml", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromHtml(request), "postSlidesDocumentFromHtml", field, request.folder);
            });
        });
    });
});

describe("Tests for postSlidesDocumentFromPdf", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesDocumentFromPdfRequest();
            return TestInitializer.initialize("postSlidesDocumentFromPdf", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesDocumentFromPdf(request), false, "postSlidesDocumentFromPdf");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesDocumentFromPdfRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesDocumentFromPdf");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromPdf", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromPdf(request), "postSlidesDocumentFromPdf", field, request.name);
            });
        });
    });

    it("invalid pdf test", () => {
        const field = "pdf";
        const request = TestUtils.getPostSlidesDocumentFromPdfRequest();
        request.pdf = <Buffer>TestInitializer.invalidizeValue(request.pdf, field, "Buffer", "postSlidesDocumentFromPdf");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromPdf", field, request.pdf).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromPdf(request), "postSlidesDocumentFromPdf", field, request.pdf);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesDocumentFromPdfRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesDocumentFromPdf");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromPdf", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromPdf(request), "postSlidesDocumentFromPdf", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesDocumentFromPdfRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesDocumentFromPdf");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromPdf", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromPdf(request), "postSlidesDocumentFromPdf", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesDocumentFromPdfRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesDocumentFromPdf");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromPdf", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromPdf(request), "postSlidesDocumentFromPdf", field, request.folder);
            });
        });
    });
});

describe("Tests for postSlidesDocumentFromSource", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
            return TestInitializer.initialize("postSlidesDocumentFromSource", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesDocumentFromSource(request), false, "postSlidesDocumentFromSource");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.name);
            });
        });
    });

    it("invalid sourcePath test", () => {
        const field = "sourcePath";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.sourcePath = <string>TestInitializer.invalidizeValue(request.sourcePath, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.sourcePath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.sourcePath);
            });
        });
    });

    it("invalid sourcePassword test", () => {
        const field = "sourcePassword";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.sourcePassword = <string>TestInitializer.invalidizeValue(request.sourcePassword, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.sourcePassword).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.sourcePassword);
            });
        });
    });

    it("invalid sourceStorage test", () => {
        const field = "sourceStorage";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.sourceStorage = <string>TestInitializer.invalidizeValue(request.sourceStorage, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.sourceStorage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.sourceStorage);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesDocumentFromSourceRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesDocumentFromSource");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromSource", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromSource(request), "postSlidesDocumentFromSource", field, request.folder);
            });
        });
    });
});

describe("Tests for postSlidesDocumentFromTemplate", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
            return TestInitializer.initialize("postSlidesDocumentFromTemplate", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesDocumentFromTemplate(request), false, "postSlidesDocumentFromTemplate");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.name);
            });
        });
    });

    it("invalid templatePath test", () => {
        const field = "templatePath";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.templatePath = <string>TestInitializer.invalidizeValue(request.templatePath, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.templatePath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.templatePath);
            });
        });
    });

    it("invalid data test", () => {
        const field = "data";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.data = <string>TestInitializer.invalidizeValue(request.data, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.data).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.data);
            });
        });
    });

    it("invalid templatePassword test", () => {
        const field = "templatePassword";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.templatePassword = <string>TestInitializer.invalidizeValue(request.templatePassword, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.templatePassword).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.templatePassword);
            });
        });
    });

    it("invalid templateStorage test", () => {
        const field = "templateStorage";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.templateStorage = <string>TestInitializer.invalidizeValue(request.templateStorage, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.templateStorage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.templateStorage);
            });
        });
    });

    it("invalid isImageDataEmbedded test", () => {
        const field = "isImageDataEmbedded";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.isImageDataEmbedded = <boolean>TestInitializer.invalidizeValue(request.isImageDataEmbedded, field, "boolean", "postSlidesDocumentFromTemplate");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.isImageDataEmbedded).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.isImageDataEmbedded);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesDocumentFromTemplateRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesDocumentFromTemplate");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesDocumentFromTemplate", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesDocumentFromTemplate(request), "postSlidesDocumentFromTemplate", field, request.folder);
            });
        });
    });
});

describe("Tests for postSlidesPipeline", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesPipelineRequest();
            return TestInitializer.initialize("postSlidesPipeline", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesPipeline(request), true, "postSlidesPipeline");
            });
        });
    });

    it("invalid pipeline test", () => {
        const field = "pipeline";
        const request = TestUtils.getPostSlidesPipelineRequest();
        request.pipeline = <model.Pipeline>TestInitializer.invalidizeValue(request.pipeline, field, "Pipeline", "postSlidesPipeline");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesPipeline", field, request.pipeline).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesPipeline(request), "postSlidesPipeline", field, request.pipeline);
            });
        });
    });

    it("invalid files test", () => {
        const field = "files";
        const request = TestUtils.getPostSlidesPipelineRequest();
        request.files = <Array<Buffer>>TestInitializer.invalidizeValue(request.files, field, "Array&lt;Buffer&gt;", "postSlidesPipeline");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesPipeline", field, request.files).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesPipeline(request), "postSlidesPipeline", field, request.files);
            });
        });
    });
});

describe("Tests for postSlidesPresentationReplaceText", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
            return TestInitializer.initialize("postSlidesPresentationReplaceText", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesPresentationReplaceText(request), false, "postSlidesPresentationReplaceText");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesPresentationReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.name);
            });
        });
    });

    it("invalid oldValue test", () => {
        const field = "oldValue";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.oldValue = <string>TestInitializer.invalidizeValue(request.oldValue, field, "string", "postSlidesPresentationReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.oldValue).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.oldValue);
            });
        });
    });

    it("invalid newValue test", () => {
        const field = "newValue";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.newValue = <string>TestInitializer.invalidizeValue(request.newValue, field, "string", "postSlidesPresentationReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.newValue).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.newValue);
            });
        });
    });

    it("invalid ignoreCase test", () => {
        const field = "ignoreCase";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.ignoreCase = <boolean>TestInitializer.invalidizeValue(request.ignoreCase, field, "boolean", "postSlidesPresentationReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.ignoreCase).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.ignoreCase);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesPresentationReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesPresentationReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesPresentationReplaceTextRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesPresentationReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesPresentationReplaceText", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesPresentationReplaceText(request), "postSlidesPresentationReplaceText", field, request.storage);
            });
        });
    });
});

describe("Tests for postSlidesReorder", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesReorderRequest();
            return TestInitializer.initialize("postSlidesReorder", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesReorder(request), false, "postSlidesReorder");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesReorder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesReorder", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesReorder(request), "postSlidesReorder", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSlidesReorder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesReorder", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesReorder(request), "postSlidesReorder", field, request.slideIndex);
            });
        });
    });

    it("invalid newPosition test", () => {
        const field = "newPosition";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.newPosition = <number>TestInitializer.invalidizeValue(request.newPosition, field, "number", "postSlidesReorder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesReorder", field, request.newPosition).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesReorder(request), "postSlidesReorder", field, request.newPosition);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesReorder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesReorder", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesReorder(request), "postSlidesReorder", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesReorder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesReorder", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesReorder(request), "postSlidesReorder", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesReorderRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesReorder");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesReorder", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesReorder(request), "postSlidesReorder", field, request.storage);
            });
        });
    });
});

describe("Tests for postSlidesReorderMany", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesReorderManyRequest();
            return TestInitializer.initialize("postSlidesReorderMany", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesReorderMany(request), false, "postSlidesReorderMany");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesReorderMany");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesReorderMany", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesReorderMany(request), "postSlidesReorderMany", field, request.name);
            });
        });
    });

    it("invalid oldPositions test", () => {
        const field = "oldPositions";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.oldPositions = <Array<number>>TestInitializer.invalidizeValue(request.oldPositions, field, "Array&lt;number&gt;", "postSlidesReorderMany");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesReorderMany", field, request.oldPositions).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesReorderMany(request), "postSlidesReorderMany", field, request.oldPositions);
            });
        });
    });

    it("invalid newPositions test", () => {
        const field = "newPositions";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.newPositions = <Array<number>>TestInitializer.invalidizeValue(request.newPositions, field, "Array&lt;number&gt;", "postSlidesReorderMany");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesReorderMany", field, request.newPositions).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesReorderMany(request), "postSlidesReorderMany", field, request.newPositions);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesReorderMany");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesReorderMany", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesReorderMany(request), "postSlidesReorderMany", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesReorderMany");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesReorderMany", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesReorderMany(request), "postSlidesReorderMany", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesReorderManyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesReorderMany");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesReorderMany", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesReorderMany(request), "postSlidesReorderMany", field, request.storage);
            });
        });
    });
});

describe("Tests for postSlidesSaveAs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesSaveAsRequest();
            return TestInitializer.initialize("postSlidesSaveAs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesSaveAs(request), true, "postSlidesSaveAs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSaveAs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSaveAs(request), "postSlidesSaveAs", field, request.name);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSaveAs", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSaveAs(request), "postSlidesSaveAs", field, request.format);
            });
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.options = <model.ExportOptions>TestInitializer.invalidizeValue(request.options, field, "ExportOptions", "postSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSaveAs", field, request.options).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSaveAs(request), "postSlidesSaveAs", field, request.options);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSaveAs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSaveAs(request), "postSlidesSaveAs", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSaveAs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSaveAs(request), "postSlidesSaveAs", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSaveAs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSaveAs(request), "postSlidesSaveAs", field, request.folder);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostSlidesSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSaveAs", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSaveAs(request), "postSlidesSaveAs", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for postSlidesSetDocumentProperties", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
            return TestInitializer.initialize("postSlidesSetDocumentProperties", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesSetDocumentProperties(request), false, "postSlidesSetDocumentProperties");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesSetDocumentProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field, request.name);
            });
        });
    });

    it("invalid properties test", () => {
        const field = "properties";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.properties = <model.DocumentProperties>TestInitializer.invalidizeValue(request.properties, field, "DocumentProperties", "postSlidesSetDocumentProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.properties).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field, request.properties);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesSetDocumentProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesSetDocumentProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesSetDocumentPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesSetDocumentProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSetDocumentProperties", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSetDocumentProperties(request), "postSlidesSetDocumentProperties", field, request.storage);
            });
        });
    });
});

describe("Tests for postSlidesSlideReplaceText", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
            return TestInitializer.initialize("postSlidesSlideReplaceText", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesSlideReplaceText(request), false, "postSlidesSlideReplaceText");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesSlideReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSlidesSlideReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.slideIndex);
            });
        });
    });

    it("invalid oldValue test", () => {
        const field = "oldValue";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.oldValue = <string>TestInitializer.invalidizeValue(request.oldValue, field, "string", "postSlidesSlideReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.oldValue).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.oldValue);
            });
        });
    });

    it("invalid newValue test", () => {
        const field = "newValue";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.newValue = <string>TestInitializer.invalidizeValue(request.newValue, field, "string", "postSlidesSlideReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.newValue).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.newValue);
            });
        });
    });

    it("invalid ignoreCase test", () => {
        const field = "ignoreCase";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.ignoreCase = <boolean>TestInitializer.invalidizeValue(request.ignoreCase, field, "boolean", "postSlidesSlideReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.ignoreCase).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.ignoreCase);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesSlideReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesSlideReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesSlideReplaceTextRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesSlideReplaceText");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSlideReplaceText", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSlideReplaceText(request), "postSlidesSlideReplaceText", field, request.storage);
            });
        });
    });
});

describe("Tests for postSlidesSplit", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSlidesSplitRequest();
            return TestInitializer.initialize("postSlidesSplit", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSlidesSplit(request), false, "postSlidesSplit");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSlidesSplit");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSplit", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSplit(request), "postSlidesSplit", field, request.name);
            });
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.options = <model.ExportOptions>TestInitializer.invalidizeValue(request.options, field, "ExportOptions", "postSlidesSplit");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSplit", field, request.options).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSplit(request), "postSlidesSplit", field, request.options);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postSlidesSplit");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSplit", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSplit(request), "postSlidesSplit", field, request.format);
            });
        });
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number", "postSlidesSplit");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSplit", field, request.width).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSplit(request), "postSlidesSplit", field, request.width);
            });
        });
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number", "postSlidesSplit");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSplit", field, request.height).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSplit(request), "postSlidesSplit", field, request.height);
            });
        });
    });

    it("invalid to test", () => {
        const field = "to";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.to = <number>TestInitializer.invalidizeValue(request.to, field, "number", "postSlidesSplit");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSplit", field, request.to).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSplit(request), "postSlidesSplit", field, request.to);
            });
        });
    });

    it("invalid from test", () => {
        const field = "from";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.from = <number>TestInitializer.invalidizeValue(request.from, field, "number", "postSlidesSplit");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSplit", field, request.from).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSplit(request), "postSlidesSplit", field, request.from);
            });
        });
    });

    it("invalid destFolder test", () => {
        const field = "destFolder";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.destFolder = <string>TestInitializer.invalidizeValue(request.destFolder, field, "string", "postSlidesSplit");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSplit", field, request.destFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSplit(request), "postSlidesSplit", field, request.destFolder);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSlidesSplit");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSplit", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSplit(request), "postSlidesSplit", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSlidesSplit");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSplit", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSplit(request), "postSlidesSplit", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSlidesSplit");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSplit", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSplit(request), "postSlidesSplit", field, request.folder);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostSlidesSplitRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postSlidesSplit");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSlidesSplit", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSlidesSplit(request), "postSlidesSplit", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for postSubshapeSaveAs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPostSubshapeSaveAsRequest();
            return TestInitializer.initialize("postSubshapeSaveAs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().postSubshapeSaveAs(request), true, "postSubshapeSaveAs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPostSubshapeSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "postSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSubshapeSaveAs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSubshapeSaveAs(request), "postSubshapeSaveAs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPostSubshapeSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "postSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSubshapeSaveAs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSubshapeSaveAs(request), "postSubshapeSaveAs", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPostSubshapeSaveAsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "postSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSubshapeSaveAs", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSubshapeSaveAs(request), "postSubshapeSaveAs", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPostSubshapeSaveAsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "postSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSubshapeSaveAs", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSubshapeSaveAs(request), "postSubshapeSaveAs", field, request.shapeIndex);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPostSubshapeSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "postSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSubshapeSaveAs", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSubshapeSaveAs(request), "postSubshapeSaveAs", field, request.format);
            });
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPostSubshapeSaveAsRequest();
        request.options = <model.IShapeExportOptions>TestInitializer.invalidizeValue(request.options, field, "IShapeExportOptions", "postSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSubshapeSaveAs", field, request.options).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSubshapeSaveAs(request), "postSubshapeSaveAs", field, request.options);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPostSubshapeSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "postSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSubshapeSaveAs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSubshapeSaveAs(request), "postSubshapeSaveAs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPostSubshapeSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "postSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSubshapeSaveAs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSubshapeSaveAs(request), "postSubshapeSaveAs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPostSubshapeSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "postSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSubshapeSaveAs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSubshapeSaveAs(request), "postSubshapeSaveAs", field, request.storage);
            });
        });
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getPostSubshapeSaveAsRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number", "postSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSubshapeSaveAs", field, request.scaleX).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSubshapeSaveAs(request), "postSubshapeSaveAs", field, request.scaleX);
            });
        });
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getPostSubshapeSaveAsRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number", "postSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSubshapeSaveAs", field, request.scaleY).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSubshapeSaveAs(request), "postSubshapeSaveAs", field, request.scaleY);
            });
        });
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getPostSubshapeSaveAsRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string", "postSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSubshapeSaveAs", field, request.bounds).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSubshapeSaveAs(request), "postSubshapeSaveAs", field, request.bounds);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPostSubshapeSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "postSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("postSubshapeSaveAs", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().postSubshapeSaveAs(request), "postSubshapeSaveAs", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for putChartCategory", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutChartCategoryRequest();
            return TestInitializer.initialize("putChartCategory", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putChartCategory(request), false, "putChartCategory");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutChartCategoryRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartCategory", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartCategory(request), "putChartCategory", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutChartCategoryRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartCategory", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartCategory(request), "putChartCategory", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutChartCategoryRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartCategory", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartCategory(request), "putChartCategory", field, request.shapeIndex);
            });
        });
    });

    it("invalid categoryIndex test", () => {
        const field = "categoryIndex";
        const request = TestUtils.getPutChartCategoryRequest();
        request.categoryIndex = <number>TestInitializer.invalidizeValue(request.categoryIndex, field, "number", "putChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartCategory", field, request.categoryIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartCategory(request), "putChartCategory", field, request.categoryIndex);
            });
        });
    });

    it("invalid category test", () => {
        const field = "category";
        const request = TestUtils.getPutChartCategoryRequest();
        request.category = <model.ChartCategory>TestInitializer.invalidizeValue(request.category, field, "ChartCategory", "putChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartCategory", field, request.category).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartCategory(request), "putChartCategory", field, request.category);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutChartCategoryRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartCategory", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartCategory(request), "putChartCategory", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutChartCategoryRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartCategory", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartCategory(request), "putChartCategory", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutChartCategoryRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putChartCategory");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartCategory", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartCategory(request), "putChartCategory", field, request.storage);
            });
        });
    });
});

describe("Tests for putChartDataPoint", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutChartDataPointRequest();
            return TestInitializer.initialize("putChartDataPoint", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putChartDataPoint(request), false, "putChartDataPoint");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutChartDataPointRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartDataPoint", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartDataPoint(request), "putChartDataPoint", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutChartDataPointRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartDataPoint", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartDataPoint(request), "putChartDataPoint", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutChartDataPointRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartDataPoint", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartDataPoint(request), "putChartDataPoint", field, request.shapeIndex);
            });
        });
    });

    it("invalid seriesIndex test", () => {
        const field = "seriesIndex";
        const request = TestUtils.getPutChartDataPointRequest();
        request.seriesIndex = <number>TestInitializer.invalidizeValue(request.seriesIndex, field, "number", "putChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartDataPoint", field, request.seriesIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartDataPoint(request), "putChartDataPoint", field, request.seriesIndex);
            });
        });
    });

    it("invalid pointIndex test", () => {
        const field = "pointIndex";
        const request = TestUtils.getPutChartDataPointRequest();
        request.pointIndex = <number>TestInitializer.invalidizeValue(request.pointIndex, field, "number", "putChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartDataPoint", field, request.pointIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartDataPoint(request), "putChartDataPoint", field, request.pointIndex);
            });
        });
    });

    it("invalid dataPoint test", () => {
        const field = "dataPoint";
        const request = TestUtils.getPutChartDataPointRequest();
        request.dataPoint = <model.DataPoint>TestInitializer.invalidizeValue(request.dataPoint, field, "DataPoint", "putChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartDataPoint", field, request.dataPoint).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartDataPoint(request), "putChartDataPoint", field, request.dataPoint);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutChartDataPointRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartDataPoint", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartDataPoint(request), "putChartDataPoint", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutChartDataPointRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartDataPoint", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartDataPoint(request), "putChartDataPoint", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutChartDataPointRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putChartDataPoint");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartDataPoint", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartDataPoint(request), "putChartDataPoint", field, request.storage);
            });
        });
    });
});

describe("Tests for putChartSeries", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutChartSeriesRequest();
            return TestInitializer.initialize("putChartSeries", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putChartSeries(request), false, "putChartSeries");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutChartSeriesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartSeries", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartSeries(request), "putChartSeries", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutChartSeriesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartSeries", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartSeries(request), "putChartSeries", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutChartSeriesRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartSeries", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartSeries(request), "putChartSeries", field, request.shapeIndex);
            });
        });
    });

    it("invalid seriesIndex test", () => {
        const field = "seriesIndex";
        const request = TestUtils.getPutChartSeriesRequest();
        request.seriesIndex = <number>TestInitializer.invalidizeValue(request.seriesIndex, field, "number", "putChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartSeries", field, request.seriesIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartSeries(request), "putChartSeries", field, request.seriesIndex);
            });
        });
    });

    it("invalid series test", () => {
        const field = "series";
        const request = TestUtils.getPutChartSeriesRequest();
        request.series = <model.Series>TestInitializer.invalidizeValue(request.series, field, "Series", "putChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartSeries", field, request.series).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartSeries(request), "putChartSeries", field, request.series);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutChartSeriesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartSeries", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartSeries(request), "putChartSeries", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutChartSeriesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartSeries", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartSeries(request), "putChartSeries", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutChartSeriesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putChartSeries");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putChartSeries", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putChartSeries(request), "putChartSeries", field, request.storage);
            });
        });
    });
});

describe("Tests for putLayoutSlide", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutLayoutSlideRequest();
            return TestInitializer.initialize("putLayoutSlide", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putLayoutSlide(request), false, "putLayoutSlide");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putLayoutSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putLayoutSlide", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putLayoutSlide(request), "putLayoutSlide", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putLayoutSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putLayoutSlide", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putLayoutSlide(request), "putLayoutSlide", field, request.slideIndex);
            });
        });
    });

    it("invalid slideDto test", () => {
        const field = "slideDto";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.slideDto = <model.LayoutSlide>TestInitializer.invalidizeValue(request.slideDto, field, "LayoutSlide", "putLayoutSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putLayoutSlide", field, request.slideDto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putLayoutSlide(request), "putLayoutSlide", field, request.slideDto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putLayoutSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putLayoutSlide", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putLayoutSlide(request), "putLayoutSlide", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putLayoutSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putLayoutSlide", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putLayoutSlide(request), "putLayoutSlide", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutLayoutSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putLayoutSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putLayoutSlide", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putLayoutSlide(request), "putLayoutSlide", field, request.storage);
            });
        });
    });
});

describe("Tests for putNotesSlideHeaderFooter", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutNotesSlideHeaderFooterRequest();
            return TestInitializer.initialize("putNotesSlideHeaderFooter", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putNotesSlideHeaderFooter(request), false, "putNotesSlideHeaderFooter");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutNotesSlideHeaderFooterRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putNotesSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideHeaderFooter", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideHeaderFooter(request), "putNotesSlideHeaderFooter", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutNotesSlideHeaderFooterRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putNotesSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideHeaderFooter", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideHeaderFooter(request), "putNotesSlideHeaderFooter", field, request.slideIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutNotesSlideHeaderFooterRequest();
        request.dto = <model.NotesSlideHeaderFooter>TestInitializer.invalidizeValue(request.dto, field, "NotesSlideHeaderFooter", "putNotesSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideHeaderFooter", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideHeaderFooter(request), "putNotesSlideHeaderFooter", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutNotesSlideHeaderFooterRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putNotesSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideHeaderFooter", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideHeaderFooter(request), "putNotesSlideHeaderFooter", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutNotesSlideHeaderFooterRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putNotesSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideHeaderFooter", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideHeaderFooter(request), "putNotesSlideHeaderFooter", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutNotesSlideHeaderFooterRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putNotesSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideHeaderFooter", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideHeaderFooter(request), "putNotesSlideHeaderFooter", field, request.folder);
            });
        });
    });
});

describe("Tests for putNotesSlideShapeSaveAs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), false, "putNotesSlideShapeSaveAs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.shapeIndex);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.format);
            });
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.outPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.outPath);
            });
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.options = <model.IShapeExportOptions>TestInitializer.invalidizeValue(request.options, field, "IShapeExportOptions", "putNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.options).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.options);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.storage);
            });
        });
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number", "putNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.scaleX).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.scaleX);
            });
        });
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number", "putNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.scaleY).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.scaleY);
            });
        });
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.bounds).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.bounds);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPutNotesSlideShapeSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "putNotesSlideShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putNotesSlideShapeSaveAs", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putNotesSlideShapeSaveAs(request), "putNotesSlideShapeSaveAs", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for putPresentationMerge", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutPresentationMergeRequest();
            return TestInitializer.initialize("putPresentationMerge", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putPresentationMerge(request), false, "putPresentationMerge");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putPresentationMerge");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putPresentationMerge", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putPresentationMerge(request), "putPresentationMerge", field, request.name);
            });
        });
    });

    it("invalid request test", () => {
        const field = "request";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.request = <model.OrderedMergeRequest>TestInitializer.invalidizeValue(request.request, field, "OrderedMergeRequest", "putPresentationMerge");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putPresentationMerge", field, request.request).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putPresentationMerge(request), "putPresentationMerge", field, request.request);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putPresentationMerge");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putPresentationMerge", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putPresentationMerge(request), "putPresentationMerge", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putPresentationMerge");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putPresentationMerge", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putPresentationMerge(request), "putPresentationMerge", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutPresentationMergeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putPresentationMerge");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putPresentationMerge", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putPresentationMerge(request), "putPresentationMerge", field, request.folder);
            });
        });
    });
});

describe("Tests for putSection", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSectionRequest();
            return TestInitializer.initialize("putSection", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSection(request), false, "putSection");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSectionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSection", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSection(request), "putSection", field, request.name);
            });
        });
    });

    it("invalid sectionIndex test", () => {
        const field = "sectionIndex";
        const request = TestUtils.getPutSectionRequest();
        request.sectionIndex = <number>TestInitializer.invalidizeValue(request.sectionIndex, field, "number", "putSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSection", field, request.sectionIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSection(request), "putSection", field, request.sectionIndex);
            });
        });
    });

    it("invalid sectionName test", () => {
        const field = "sectionName";
        const request = TestUtils.getPutSectionRequest();
        request.sectionName = <string>TestInitializer.invalidizeValue(request.sectionName, field, "string", "putSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSection", field, request.sectionName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSection(request), "putSection", field, request.sectionName);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSectionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSection", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSection(request), "putSection", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSectionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSection", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSection(request), "putSection", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSectionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSection");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSection", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSection(request), "putSection", field, request.storage);
            });
        });
    });
});

describe("Tests for putSections", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSectionsRequest();
            return TestInitializer.initialize("putSections", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSections(request), false, "putSections");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSectionsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSections", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSections(request), "putSections", field, request.name);
            });
        });
    });

    it("invalid sections test", () => {
        const field = "sections";
        const request = TestUtils.getPutSectionsRequest();
        request.sections = <model.Sections>TestInitializer.invalidizeValue(request.sections, field, "Sections", "putSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSections", field, request.sections).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSections(request), "putSections", field, request.sections);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSectionsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSections", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSections(request), "putSections", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSectionsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSections", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSections(request), "putSections", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSectionsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSections");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSections", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSections(request), "putSections", field, request.storage);
            });
        });
    });
});

describe("Tests for putSetParagraphPortionProperties", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
            return TestInitializer.initialize("putSetParagraphPortionProperties", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSetParagraphPortionProperties(request), false, "putSetParagraphPortionProperties");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSetParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSetParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putSetParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "putSetParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.paragraphIndex);
            });
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "putSetParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.portionIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.portionIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion", "putSetParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSetParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSetParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSetParagraphPortionPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSetParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphPortionProperties", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphPortionProperties(request), "putSetParagraphPortionProperties", field, request.storage);
            });
        });
    });
});

describe("Tests for putSetParagraphProperties", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSetParagraphPropertiesRequest();
            return TestInitializer.initialize("putSetParagraphProperties", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSetParagraphProperties(request), false, "putSetParagraphProperties");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSetParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphProperties", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphProperties(request), "putSetParagraphProperties", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSetParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphProperties", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphProperties(request), "putSetParagraphProperties", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putSetParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphProperties", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphProperties(request), "putSetParagraphProperties", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "putSetParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphProperties", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphProperties(request), "putSetParagraphProperties", field, request.paragraphIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph", "putSetParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphProperties", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphProperties(request), "putSetParagraphProperties", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSetParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphProperties", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphProperties(request), "putSetParagraphProperties", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSetParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphProperties", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphProperties(request), "putSetParagraphProperties", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSetParagraphPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSetParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetParagraphProperties", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetParagraphProperties(request), "putSetParagraphProperties", field, request.storage);
            });
        });
    });
});

describe("Tests for putSetSubshapeParagraphPortionProperties", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSetSubshapeParagraphPortionPropertiesRequest();
            return TestInitializer.initialize("putSetSubshapeParagraphPortionProperties", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSetSubshapeParagraphPortionProperties(request), false, "putSetSubshapeParagraphPortionProperties");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSetSubshapeParagraphPortionPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSetSubshapeParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphPortionProperties", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphPortionProperties(request), "putSetSubshapeParagraphPortionProperties", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSetSubshapeParagraphPortionPropertiesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSetSubshapeParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphPortionProperties", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphPortionProperties(request), "putSetSubshapeParagraphPortionProperties", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutSetSubshapeParagraphPortionPropertiesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "putSetSubshapeParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphPortionProperties", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphPortionProperties(request), "putSetSubshapeParagraphPortionProperties", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutSetSubshapeParagraphPortionPropertiesRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putSetSubshapeParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphPortionProperties", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphPortionProperties(request), "putSetSubshapeParagraphPortionProperties", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutSetSubshapeParagraphPortionPropertiesRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "putSetSubshapeParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphPortionProperties", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphPortionProperties(request), "putSetSubshapeParagraphPortionProperties", field, request.paragraphIndex);
            });
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getPutSetSubshapeParagraphPortionPropertiesRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "putSetSubshapeParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphPortionProperties", field, request.portionIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphPortionProperties(request), "putSetSubshapeParagraphPortionProperties", field, request.portionIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSetSubshapeParagraphPortionPropertiesRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion", "putSetSubshapeParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphPortionProperties", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphPortionProperties(request), "putSetSubshapeParagraphPortionProperties", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSetSubshapeParagraphPortionPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSetSubshapeParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphPortionProperties", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphPortionProperties(request), "putSetSubshapeParagraphPortionProperties", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSetSubshapeParagraphPortionPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSetSubshapeParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphPortionProperties", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphPortionProperties(request), "putSetSubshapeParagraphPortionProperties", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSetSubshapeParagraphPortionPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSetSubshapeParagraphPortionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphPortionProperties", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphPortionProperties(request), "putSetSubshapeParagraphPortionProperties", field, request.storage);
            });
        });
    });
});

describe("Tests for putSetSubshapeParagraphProperties", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSetSubshapeParagraphPropertiesRequest();
            return TestInitializer.initialize("putSetSubshapeParagraphProperties", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSetSubshapeParagraphProperties(request), false, "putSetSubshapeParagraphProperties");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSetSubshapeParagraphPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSetSubshapeParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphProperties", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphProperties(request), "putSetSubshapeParagraphProperties", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSetSubshapeParagraphPropertiesRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSetSubshapeParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphProperties", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphProperties(request), "putSetSubshapeParagraphProperties", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutSetSubshapeParagraphPropertiesRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "putSetSubshapeParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphProperties", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphProperties(request), "putSetSubshapeParagraphProperties", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutSetSubshapeParagraphPropertiesRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putSetSubshapeParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphProperties", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphProperties(request), "putSetSubshapeParagraphProperties", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutSetSubshapeParagraphPropertiesRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "putSetSubshapeParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphProperties", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphProperties(request), "putSetSubshapeParagraphProperties", field, request.paragraphIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSetSubshapeParagraphPropertiesRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph", "putSetSubshapeParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphProperties", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphProperties(request), "putSetSubshapeParagraphProperties", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSetSubshapeParagraphPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSetSubshapeParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphProperties", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphProperties(request), "putSetSubshapeParagraphProperties", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSetSubshapeParagraphPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSetSubshapeParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphProperties", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphProperties(request), "putSetSubshapeParagraphProperties", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSetSubshapeParagraphPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSetSubshapeParagraphProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSetSubshapeParagraphProperties", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSetSubshapeParagraphProperties(request), "putSetSubshapeParagraphProperties", field, request.storage);
            });
        });
    });
});

describe("Tests for putShapeSaveAs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutShapeSaveAsRequest();
            return TestInitializer.initialize("putShapeSaveAs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putShapeSaveAs(request), false, "putShapeSaveAs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putShapeSaveAs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putShapeSaveAs(request), "putShapeSaveAs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putShapeSaveAs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putShapeSaveAs(request), "putShapeSaveAs", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putShapeSaveAs", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putShapeSaveAs(request), "putShapeSaveAs", field, request.shapeIndex);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "putShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putShapeSaveAs", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putShapeSaveAs(request), "putShapeSaveAs", field, request.format);
            });
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string", "putShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putShapeSaveAs", field, request.outPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putShapeSaveAs(request), "putShapeSaveAs", field, request.outPath);
            });
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.options = <model.IShapeExportOptions>TestInitializer.invalidizeValue(request.options, field, "IShapeExportOptions", "putShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putShapeSaveAs", field, request.options).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putShapeSaveAs(request), "putShapeSaveAs", field, request.options);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putShapeSaveAs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putShapeSaveAs(request), "putShapeSaveAs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putShapeSaveAs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putShapeSaveAs(request), "putShapeSaveAs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putShapeSaveAs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putShapeSaveAs(request), "putShapeSaveAs", field, request.storage);
            });
        });
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number", "putShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putShapeSaveAs", field, request.scaleX).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putShapeSaveAs(request), "putShapeSaveAs", field, request.scaleX);
            });
        });
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number", "putShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putShapeSaveAs", field, request.scaleY).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putShapeSaveAs(request), "putShapeSaveAs", field, request.scaleY);
            });
        });
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string", "putShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putShapeSaveAs", field, request.bounds).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putShapeSaveAs(request), "putShapeSaveAs", field, request.bounds);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPutShapeSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "putShapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putShapeSaveAs", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putShapeSaveAs(request), "putShapeSaveAs", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for putSlideAnimation", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlideAnimationRequest();
            return TestInitializer.initialize("putSlideAnimation", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlideAnimation(request), false, "putSlideAnimation");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlideAnimationRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimation", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimation(request), "putSlideAnimation", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlideAnimationRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimation", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimation(request), "putSlideAnimation", field, request.slideIndex);
            });
        });
    });

    it("invalid animation test", () => {
        const field = "animation";
        const request = TestUtils.getPutSlideAnimationRequest();
        request.animation = <model.SlideAnimation>TestInitializer.invalidizeValue(request.animation, field, "SlideAnimation", "putSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimation", field, request.animation).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimation(request), "putSlideAnimation", field, request.animation);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlideAnimationRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimation", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimation(request), "putSlideAnimation", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlideAnimationRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimation", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimation(request), "putSlideAnimation", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlideAnimationRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlideAnimation");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimation", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimation(request), "putSlideAnimation", field, request.storage);
            });
        });
    });
});

describe("Tests for putSlideAnimationEffect", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlideAnimationEffectRequest();
            return TestInitializer.initialize("putSlideAnimationEffect", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlideAnimationEffect(request), false, "putSlideAnimationEffect");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationEffect", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationEffect", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.slideIndex);
            });
        });
    });

    it("invalid effectIndex test", () => {
        const field = "effectIndex";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.effectIndex = <number>TestInitializer.invalidizeValue(request.effectIndex, field, "number", "putSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationEffect", field, request.effectIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.effectIndex);
            });
        });
    });

    it("invalid effect test", () => {
        const field = "effect";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.effect = <model.Effect>TestInitializer.invalidizeValue(request.effect, field, "Effect", "putSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationEffect", field, request.effect).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.effect);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationEffect", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationEffect", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlideAnimationEffectRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlideAnimationEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationEffect", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationEffect(request), "putSlideAnimationEffect", field, request.storage);
            });
        });
    });
});

describe("Tests for putSlideAnimationInteractiveSequenceEffect", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
            return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlideAnimationInteractiveSequenceEffect(request), false, "putSlideAnimationInteractiveSequenceEffect");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.slideIndex);
            });
        });
    });

    it("invalid sequenceIndex test", () => {
        const field = "sequenceIndex";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.sequenceIndex = <number>TestInitializer.invalidizeValue(request.sequenceIndex, field, "number", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.sequenceIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.sequenceIndex);
            });
        });
    });

    it("invalid effectIndex test", () => {
        const field = "effectIndex";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.effectIndex = <number>TestInitializer.invalidizeValue(request.effectIndex, field, "number", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.effectIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.effectIndex);
            });
        });
    });

    it("invalid effect test", () => {
        const field = "effect";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.effect = <model.Effect>TestInitializer.invalidizeValue(request.effect, field, "Effect", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.effect).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.effect);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlideAnimationInteractiveSequenceEffectRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlideAnimationInteractiveSequenceEffect");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideAnimationInteractiveSequenceEffect", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideAnimationInteractiveSequenceEffect(request), "putSlideAnimationInteractiveSequenceEffect", field, request.storage);
            });
        });
    });
});

describe("Tests for putSlideHeaderFooter", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlideHeaderFooterRequest();
            return TestInitializer.initialize("putSlideHeaderFooter", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlideHeaderFooter(request), false, "putSlideHeaderFooter");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlideHeaderFooterRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideHeaderFooter", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideHeaderFooter(request), "putSlideHeaderFooter", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlideHeaderFooterRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideHeaderFooter", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideHeaderFooter(request), "putSlideHeaderFooter", field, request.slideIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSlideHeaderFooterRequest();
        request.dto = <model.HeaderFooter>TestInitializer.invalidizeValue(request.dto, field, "HeaderFooter", "putSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideHeaderFooter", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideHeaderFooter(request), "putSlideHeaderFooter", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlideHeaderFooterRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideHeaderFooter", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideHeaderFooter(request), "putSlideHeaderFooter", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlideHeaderFooterRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideHeaderFooter", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideHeaderFooter(request), "putSlideHeaderFooter", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlideHeaderFooterRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlideHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideHeaderFooter", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideHeaderFooter(request), "putSlideHeaderFooter", field, request.storage);
            });
        });
    });
});

describe("Tests for putSlideSaveAs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlideSaveAsRequest();
            return TestInitializer.initialize("putSlideSaveAs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlideSaveAs(request), false, "putSlideSaveAs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSaveAs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSaveAs(request), "putSlideSaveAs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSaveAs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSaveAs(request), "putSlideSaveAs", field, request.slideIndex);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "putSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSaveAs", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSaveAs(request), "putSlideSaveAs", field, request.format);
            });
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string", "putSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSaveAs", field, request.outPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSaveAs(request), "putSlideSaveAs", field, request.outPath);
            });
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.options = <model.ExportOptions>TestInitializer.invalidizeValue(request.options, field, "ExportOptions", "putSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSaveAs", field, request.options).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSaveAs(request), "putSlideSaveAs", field, request.options);
            });
        });
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number", "putSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSaveAs", field, request.width).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSaveAs(request), "putSlideSaveAs", field, request.width);
            });
        });
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number", "putSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSaveAs", field, request.height).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSaveAs(request), "putSlideSaveAs", field, request.height);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSaveAs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSaveAs(request), "putSlideSaveAs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSaveAs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSaveAs(request), "putSlideSaveAs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSaveAs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSaveAs(request), "putSlideSaveAs", field, request.storage);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPutSlideSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "putSlideSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSaveAs", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSaveAs(request), "putSlideSaveAs", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for putSlideShapeInfo", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlideShapeInfoRequest();
            return TestInitializer.initialize("putSlideShapeInfo", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlideShapeInfo(request), false, "putSlideShapeInfo");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlideShapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideShapeInfo", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideShapeInfo(request), "putSlideShapeInfo", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlideShapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideShapeInfo", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideShapeInfo(request), "putSlideShapeInfo", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putSlideShapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideShapeInfo", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideShapeInfo(request), "putSlideShapeInfo", field, request.shapeIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase", "putSlideShapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideShapeInfo", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideShapeInfo(request), "putSlideShapeInfo", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlideShapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideShapeInfo", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideShapeInfo(request), "putSlideShapeInfo", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlideShapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideShapeInfo", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideShapeInfo(request), "putSlideShapeInfo", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlideShapeInfoRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlideShapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideShapeInfo", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideShapeInfo(request), "putSlideShapeInfo", field, request.storage);
            });
        });
    });
});

describe("Tests for putSlideSubshapeInfo", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlideSubshapeInfoRequest();
            return TestInitializer.initialize("putSlideSubshapeInfo", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlideSubshapeInfo(request), false, "putSlideSubshapeInfo");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlideSubshapeInfoRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlideSubshapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSubshapeInfo", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSubshapeInfo(request), "putSlideSubshapeInfo", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlideSubshapeInfoRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlideSubshapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSubshapeInfo", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSubshapeInfo(request), "putSlideSubshapeInfo", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutSlideSubshapeInfoRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "putSlideSubshapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSubshapeInfo", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSubshapeInfo(request), "putSlideSubshapeInfo", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutSlideSubshapeInfoRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putSlideSubshapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSubshapeInfo", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSubshapeInfo(request), "putSlideSubshapeInfo", field, request.shapeIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSlideSubshapeInfoRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase", "putSlideSubshapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSubshapeInfo", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSubshapeInfo(request), "putSlideSubshapeInfo", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlideSubshapeInfoRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlideSubshapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSubshapeInfo", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSubshapeInfo(request), "putSlideSubshapeInfo", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlideSubshapeInfoRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlideSubshapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSubshapeInfo", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSubshapeInfo(request), "putSlideSubshapeInfo", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlideSubshapeInfoRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlideSubshapeInfo");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlideSubshapeInfo", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlideSubshapeInfo(request), "putSlideSubshapeInfo", field, request.storage);
            });
        });
    });
});

describe("Tests for putSlidesConvert", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlidesConvertRequest();
            return TestInitializer.initialize("putSlidesConvert", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlidesConvert(request), false, "putSlidesConvert");
            });
        });
    });

    it("invalid document test", () => {
        const field = "document";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.document = <Buffer>TestInitializer.invalidizeValue(request.document, field, "Buffer", "putSlidesConvert");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesConvert", field, request.document).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesConvert(request), "putSlidesConvert", field, request.document);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "putSlidesConvert");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesConvert", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesConvert(request), "putSlidesConvert", field, request.format);
            });
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string", "putSlidesConvert");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesConvert", field, request.outPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesConvert(request), "putSlidesConvert", field, request.outPath);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesConvert");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesConvert", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesConvert(request), "putSlidesConvert", field, request.password);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPutSlidesConvertRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "putSlidesConvert");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesConvert", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesConvert(request), "putSlidesConvert", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for putSlidesDocumentFromHtml", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
            return TestInitializer.initialize("putSlidesDocumentFromHtml", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlidesDocumentFromHtml(request), false, "putSlidesDocumentFromHtml");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesDocumentFromHtml");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field, request.name);
            });
        });
    });

    it("invalid html test", () => {
        const field = "html";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.html = <string>TestInitializer.invalidizeValue(request.html, field, "string", "putSlidesDocumentFromHtml");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.html).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field, request.html);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesDocumentFromHtml");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesDocumentFromHtml");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesDocumentFromHtmlRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesDocumentFromHtml");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesDocumentFromHtml", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesDocumentFromHtml(request), "putSlidesDocumentFromHtml", field, request.folder);
            });
        });
    });
});

describe("Tests for putSlidesHeaderFooter", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlidesHeaderFooterRequest();
            return TestInitializer.initialize("putSlidesHeaderFooter", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlidesHeaderFooter(request), false, "putSlidesHeaderFooter");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesHeaderFooterRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesHeaderFooter", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesHeaderFooter(request), "putSlidesHeaderFooter", field, request.name);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSlidesHeaderFooterRequest();
        request.dto = <model.HeaderFooter>TestInitializer.invalidizeValue(request.dto, field, "HeaderFooter", "putSlidesHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesHeaderFooter", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesHeaderFooter(request), "putSlidesHeaderFooter", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesHeaderFooterRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesHeaderFooter", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesHeaderFooter(request), "putSlidesHeaderFooter", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesHeaderFooterRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesHeaderFooter", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesHeaderFooter(request), "putSlidesHeaderFooter", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesHeaderFooterRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesHeaderFooter");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesHeaderFooter", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesHeaderFooter(request), "putSlidesHeaderFooter", field, request.folder);
            });
        });
    });
});

describe("Tests for putSlidesProtectionProperties", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlidesProtectionPropertiesRequest();
            return TestInitializer.initialize("putSlidesProtectionProperties", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlidesProtectionProperties(request), false, "putSlidesProtectionProperties");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesProtectionPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesProtectionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesProtectionProperties", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesProtectionProperties(request), "putSlidesProtectionProperties", field, request.name);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSlidesProtectionPropertiesRequest();
        request.dto = <model.ProtectionProperties>TestInitializer.invalidizeValue(request.dto, field, "ProtectionProperties", "putSlidesProtectionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesProtectionProperties", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesProtectionProperties(request), "putSlidesProtectionProperties", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesProtectionPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesProtectionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesProtectionProperties", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesProtectionProperties(request), "putSlidesProtectionProperties", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesProtectionPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesProtectionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesProtectionProperties", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesProtectionProperties(request), "putSlidesProtectionProperties", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesProtectionPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesProtectionProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesProtectionProperties", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesProtectionProperties(request), "putSlidesProtectionProperties", field, request.storage);
            });
        });
    });
});

describe("Tests for putSlidesSaveAs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlidesSaveAsRequest();
            return TestInitializer.initialize("putSlidesSaveAs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlidesSaveAs(request), false, "putSlidesSaveAs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSaveAs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSaveAs(request), "putSlidesSaveAs", field, request.name);
            });
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string", "putSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSaveAs", field, request.outPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSaveAs(request), "putSlidesSaveAs", field, request.outPath);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "putSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSaveAs", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSaveAs(request), "putSlidesSaveAs", field, request.format);
            });
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.options = <model.ExportOptions>TestInitializer.invalidizeValue(request.options, field, "ExportOptions", "putSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSaveAs", field, request.options).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSaveAs(request), "putSlidesSaveAs", field, request.options);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSaveAs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSaveAs(request), "putSlidesSaveAs", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSaveAs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSaveAs(request), "putSlidesSaveAs", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSaveAs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSaveAs(request), "putSlidesSaveAs", field, request.folder);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPutSlidesSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "putSlidesSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSaveAs", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSaveAs(request), "putSlidesSaveAs", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for putSlidesSetDocumentProperty", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
            return TestInitializer.initialize("putSlidesSetDocumentProperty", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlidesSetDocumentProperty(request), false, "putSlidesSetDocumentProperty");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesSetDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field, request.name);
            });
        });
    });

    it("invalid propertyName test", () => {
        const field = "propertyName";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.propertyName = <string>TestInitializer.invalidizeValue(request.propertyName, field, "string", "putSlidesSetDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.propertyName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field, request.propertyName);
            });
        });
    });

    it("invalid property test", () => {
        const field = "property";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.property = <model.DocumentProperty>TestInitializer.invalidizeValue(request.property, field, "DocumentProperty", "putSlidesSetDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.property).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field, request.property);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesSetDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesSetDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSetDocumentPropertyRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesSetDocumentProperty");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSetDocumentProperty", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSetDocumentProperty(request), "putSlidesSetDocumentProperty", field, request.storage);
            });
        });
    });
});

describe("Tests for putSlidesSlide", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlidesSlideRequest();
            return TestInitializer.initialize("putSlidesSlide", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlidesSlide(request), false, "putSlidesSlide");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlide", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlide(request), "putSlidesSlide", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlidesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlide", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlide(request), "putSlidesSlide", field, request.slideIndex);
            });
        });
    });

    it("invalid slideDto test", () => {
        const field = "slideDto";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.slideDto = <model.Slide>TestInitializer.invalidizeValue(request.slideDto, field, "Slide", "putSlidesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlide", field, request.slideDto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlide(request), "putSlidesSlide", field, request.slideDto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlide", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlide(request), "putSlidesSlide", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlide", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlide(request), "putSlidesSlide", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlide", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlide(request), "putSlidesSlide", field, request.storage);
            });
        });
    });
});

describe("Tests for putSlidesSlideBackground", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlidesSlideBackgroundRequest();
            return TestInitializer.initialize("putSlidesSlideBackground", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlidesSlideBackground(request), false, "putSlidesSlideBackground");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideBackground", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideBackground(request), "putSlidesSlideBackground", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideBackground", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideBackground(request), "putSlidesSlideBackground", field, request.slideIndex);
            });
        });
    });

    it("invalid background test", () => {
        const field = "background";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.background = <model.SlideBackground>TestInitializer.invalidizeValue(request.background, field, "SlideBackground", "putSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideBackground", field, request.background).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideBackground(request), "putSlidesSlideBackground", field, request.background);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideBackground", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideBackground(request), "putSlidesSlideBackground", field, request.folder);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideBackground", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideBackground(request), "putSlidesSlideBackground", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSlideBackgroundRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesSlideBackground");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideBackground", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideBackground(request), "putSlidesSlideBackground", field, request.storage);
            });
        });
    });
});

describe("Tests for putSlidesSlideBackgroundColor", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
            return TestInitializer.initialize("putSlidesSlideBackgroundColor", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlidesSlideBackgroundColor(request), false, "putSlidesSlideBackgroundColor");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesSlideBackgroundColor");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideBackgroundColor", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideBackgroundColor(request), "putSlidesSlideBackgroundColor", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSlidesSlideBackgroundColor");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideBackgroundColor", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideBackgroundColor(request), "putSlidesSlideBackgroundColor", field, request.slideIndex);
            });
        });
    });

    it("invalid color test", () => {
        const field = "color";
        const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
        request.color = <string>TestInitializer.invalidizeValue(request.color, field, "string", "putSlidesSlideBackgroundColor");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideBackgroundColor", field, request.color).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideBackgroundColor(request), "putSlidesSlideBackgroundColor", field, request.color);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesSlideBackgroundColor");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideBackgroundColor", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideBackgroundColor(request), "putSlidesSlideBackgroundColor", field, request.folder);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesSlideBackgroundColor");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideBackgroundColor", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideBackgroundColor(request), "putSlidesSlideBackgroundColor", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSlideBackgroundColorRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesSlideBackgroundColor");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideBackgroundColor", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideBackgroundColor(request), "putSlidesSlideBackgroundColor", field, request.storage);
            });
        });
    });
});

describe("Tests for putSlidesSlideProperties", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlidesSlidePropertiesRequest();
            return TestInitializer.initialize("putSlidesSlideProperties", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlidesSlideProperties(request), false, "putSlidesSlideProperties");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSlidePropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesSlideProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideProperties", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideProperties(request), "putSlidesSlideProperties", field, request.name);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSlidesSlidePropertiesRequest();
        request.dto = <model.SlideProperties>TestInitializer.invalidizeValue(request.dto, field, "SlideProperties", "putSlidesSlideProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideProperties", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideProperties(request), "putSlidesSlideProperties", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSlidePropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesSlideProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideProperties", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideProperties(request), "putSlidesSlideProperties", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSlidePropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesSlideProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideProperties", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideProperties(request), "putSlidesSlideProperties", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSlidePropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesSlideProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideProperties", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideProperties(request), "putSlidesSlideProperties", field, request.storage);
            });
        });
    });
});

describe("Tests for putSlidesSlideSize", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlidesSlideSizeRequest();
            return TestInitializer.initialize("putSlidesSlideSize", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlidesSlideSize(request), false, "putSlidesSlideSize");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesSlideSize");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideSize", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideSize(request), "putSlidesSlideSize", field, request.name);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesSlideSize");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideSize", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideSize(request), "putSlidesSlideSize", field, request.password);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesSlideSize");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideSize", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideSize(request), "putSlidesSlideSize", field, request.storage);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesSlideSize");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideSize", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideSize(request), "putSlidesSlideSize", field, request.folder);
            });
        });
    });

    it("invalid width test", () => {
        const field = "width";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.width = <number>TestInitializer.invalidizeValue(request.width, field, "number", "putSlidesSlideSize");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideSize", field, request.width).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideSize(request), "putSlidesSlideSize", field, request.width);
            });
        });
    });

    it("invalid height test", () => {
        const field = "height";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.height = <number>TestInitializer.invalidizeValue(request.height, field, "number", "putSlidesSlideSize");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideSize", field, request.height).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideSize(request), "putSlidesSlideSize", field, request.height);
            });
        });
    });

    it("invalid sizeType test", () => {
        const field = "sizeType";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.sizeType = <string>TestInitializer.invalidizeValue(request.sizeType, field, "string", "putSlidesSlideSize");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideSize", field, request.sizeType).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideSize(request), "putSlidesSlideSize", field, request.sizeType);
            });
        });
    });

    it("invalid scaleType test", () => {
        const field = "scaleType";
        const request = TestUtils.getPutSlidesSlideSizeRequest();
        request.scaleType = <string>TestInitializer.invalidizeValue(request.scaleType, field, "string", "putSlidesSlideSize");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesSlideSize", field, request.scaleType).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesSlideSize(request), "putSlidesSlideSize", field, request.scaleType);
            });
        });
    });
});

describe("Tests for putSlidesViewProperties", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSlidesViewPropertiesRequest();
            return TestInitializer.initialize("putSlidesViewProperties", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSlidesViewProperties(request), false, "putSlidesViewProperties");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSlidesViewPropertiesRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSlidesViewProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesViewProperties", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesViewProperties(request), "putSlidesViewProperties", field, request.name);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutSlidesViewPropertiesRequest();
        request.dto = <model.ViewProperties>TestInitializer.invalidizeValue(request.dto, field, "ViewProperties", "putSlidesViewProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesViewProperties", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesViewProperties(request), "putSlidesViewProperties", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSlidesViewPropertiesRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSlidesViewProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesViewProperties", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesViewProperties(request), "putSlidesViewProperties", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSlidesViewPropertiesRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSlidesViewProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesViewProperties", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesViewProperties(request), "putSlidesViewProperties", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSlidesViewPropertiesRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSlidesViewProperties");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSlidesViewProperties", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSlidesViewProperties(request), "putSlidesViewProperties", field, request.storage);
            });
        });
    });
});

describe("Tests for putSubshapeSaveAs", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutSubshapeSaveAsRequest();
            return TestInitializer.initialize("putSubshapeSaveAs", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putSubshapeSaveAs(request), false, "putSubshapeSaveAs");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.slideIndex);
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.path);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.shapeIndex);
            });
        });
    });

    it("invalid format test", () => {
        const field = "format";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.format = <string>TestInitializer.invalidizeValue(request.format, field, "string", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.format).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.format);
            });
        });
    });

    it("invalid outPath test", () => {
        const field = "outPath";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.outPath = <string>TestInitializer.invalidizeValue(request.outPath, field, "string", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.outPath).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.outPath);
            });
        });
    });

    it("invalid options test", () => {
        const field = "options";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.options = <model.IShapeExportOptions>TestInitializer.invalidizeValue(request.options, field, "IShapeExportOptions", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.options).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.options);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.storage);
            });
        });
    });

    it("invalid scaleX test", () => {
        const field = "scaleX";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.scaleX = <number>TestInitializer.invalidizeValue(request.scaleX, field, "number", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.scaleX).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.scaleX);
            });
        });
    });

    it("invalid scaleY test", () => {
        const field = "scaleY";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.scaleY = <number>TestInitializer.invalidizeValue(request.scaleY, field, "number", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.scaleY).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.scaleY);
            });
        });
    });

    it("invalid bounds test", () => {
        const field = "bounds";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.bounds = <string>TestInitializer.invalidizeValue(request.bounds, field, "string", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.bounds).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.bounds);
            });
        });
    });

    it("invalid fontsFolder test", () => {
        const field = "fontsFolder";
        const request = TestUtils.getPutSubshapeSaveAsRequest();
        request.fontsFolder = <string>TestInitializer.invalidizeValue(request.fontsFolder, field, "string", "putSubshapeSaveAs");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putSubshapeSaveAs", field, request.fontsFolder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putSubshapeSaveAs(request), "putSubshapeSaveAs", field, request.fontsFolder);
            });
        });
    });
});

describe("Tests for putUpdateNotesSlide", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutUpdateNotesSlideRequest();
            return TestInitializer.initialize("putUpdateNotesSlide", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putUpdateNotesSlide(request), false, "putUpdateNotesSlide");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putUpdateNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlide", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlide(request), "putUpdateNotesSlide", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putUpdateNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlide", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlide(request), "putUpdateNotesSlide", field, request.slideIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.dto = <model.NotesSlide>TestInitializer.invalidizeValue(request.dto, field, "NotesSlide", "putUpdateNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlide", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlide(request), "putUpdateNotesSlide", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putUpdateNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlide", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlide(request), "putUpdateNotesSlide", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putUpdateNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlide", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlide(request), "putUpdateNotesSlide", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutUpdateNotesSlideRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putUpdateNotesSlide");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlide", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlide(request), "putUpdateNotesSlide", field, request.storage);
            });
        });
    });
});

describe("Tests for putUpdateNotesSlideShape", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
            return TestInitializer.initialize("putUpdateNotesSlideShape", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putUpdateNotesSlideShape(request), false, "putUpdateNotesSlideShape");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putUpdateNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putUpdateNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putUpdateNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.shapeIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.dto = <model.ShapeBase>TestInitializer.invalidizeValue(request.dto, field, "ShapeBase", "putUpdateNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putUpdateNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putUpdateNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutUpdateNotesSlideShapeRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putUpdateNotesSlideShape");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShape", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShape(request), "putUpdateNotesSlideShape", field, request.storage);
            });
        });
    });
});

describe("Tests for putUpdateNotesSlideShapeParagraph", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
            return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putUpdateNotesSlideShapeParagraph(request), false, "putUpdateNotesSlideShapeParagraph");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.paragraphIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.dto = <model.Paragraph>TestInitializer.invalidizeValue(request.dto, field, "Paragraph", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutUpdateNotesSlideShapeParagraphRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putUpdateNotesSlideShapeParagraph");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapeParagraph", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapeParagraph(request), "putUpdateNotesSlideShapeParagraph", field, request.storage);
            });
        });
    });
});

describe("Tests for putUpdateNotesSlideShapePortion", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
            return TestInitializer.initialize("putUpdateNotesSlideShapePortion", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().putUpdateNotesSlideShapePortion(request), false, "putUpdateNotesSlideShapePortion");
            });
        });
    });

    it("invalid name test", () => {
        const field = "name";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.name = <string>TestInitializer.invalidizeValue(request.name, field, "string", "putUpdateNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.name).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.name);
            });
        });
    });

    it("invalid slideIndex test", () => {
        const field = "slideIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.slideIndex = <number>TestInitializer.invalidizeValue(request.slideIndex, field, "number", "putUpdateNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.slideIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.slideIndex);
            });
        });
    });

    it("invalid shapeIndex test", () => {
        const field = "shapeIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.shapeIndex = <number>TestInitializer.invalidizeValue(request.shapeIndex, field, "number", "putUpdateNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.shapeIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.shapeIndex);
            });
        });
    });

    it("invalid paragraphIndex test", () => {
        const field = "paragraphIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.paragraphIndex = <number>TestInitializer.invalidizeValue(request.paragraphIndex, field, "number", "putUpdateNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.paragraphIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.paragraphIndex);
            });
        });
    });

    it("invalid portionIndex test", () => {
        const field = "portionIndex";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.portionIndex = <number>TestInitializer.invalidizeValue(request.portionIndex, field, "number", "putUpdateNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.portionIndex).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.portionIndex);
            });
        });
    });

    it("invalid dto test", () => {
        const field = "dto";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.dto = <model.Portion>TestInitializer.invalidizeValue(request.dto, field, "Portion", "putUpdateNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.dto).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.dto);
            });
        });
    });

    it("invalid password test", () => {
        const field = "password";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.password = <string>TestInitializer.invalidizeValue(request.password, field, "string", "putUpdateNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.password).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.password);
            });
        });
    });

    it("invalid folder test", () => {
        const field = "folder";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.folder = <string>TestInitializer.invalidizeValue(request.folder, field, "string", "putUpdateNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.folder).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.folder);
            });
        });
    });

    it("invalid storage test", () => {
        const field = "storage";
        const request = TestUtils.getPutUpdateNotesSlideShapePortionRequest();
        request.storage = <string>TestInitializer.invalidizeValue(request.storage, field, "string", "putUpdateNotesSlideShapePortion");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("putUpdateNotesSlideShapePortion", field, request.storage).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().putUpdateNotesSlideShapePortion(request), "putUpdateNotesSlideShapePortion", field, request.storage);
            });
        });
    });
});

describe("Tests for storageExists", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getStorageExistsRequest();
            return TestInitializer.initialize("storageExists", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().storageExists(request), false, "storageExists");
            });
        });
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getStorageExistsRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "storageExists");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("storageExists", field, request.storageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().storageExists(request), "storageExists", field, request.storageName);
            });
        });
    });
});

describe("Tests for uploadFile", () => {
    it("main test", () => {
        return TestInitializer.runTest(() => {
            const request = TestUtils.getUploadFileRequest();
            return TestInitializer.initialize("uploadFile", null, null).then(() => {
                return TestInitializer.assertValidCall(TestInitializer.getApi().uploadFile(request), false, "uploadFile");
            });
        });
    });

    it("invalid path test", () => {
        const field = "path";
        const request = TestUtils.getUploadFileRequest();
        request.path = <string>TestInitializer.invalidizeValue(request.path, field, "string", "uploadFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("uploadFile", field, request.path).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().uploadFile(request), "uploadFile", field, request.path);
            });
        });
    });

    it("invalid file test", () => {
        const field = "file";
        const request = TestUtils.getUploadFileRequest();
        request.file = <Buffer>TestInitializer.invalidizeValue(request.file, field, "Buffer", "uploadFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("uploadFile", field, request.file).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().uploadFile(request), "uploadFile", field, request.file);
            });
        });
    });

    it("invalid storageName test", () => {
        const field = "storageName";
        const request = TestUtils.getUploadFileRequest();
        request.storageName = <string>TestInitializer.invalidizeValue(request.storageName, field, "string", "uploadFile");
        return TestInitializer.runTest(() => {
            return TestInitializer.initialize("uploadFile", field, request.storageName).then(() => {
                return TestInitializer.assertInvalidCall(TestInitializer.getApi().uploadFile(request), "uploadFile", field, request.storageName);
            });
        });
    });
});
