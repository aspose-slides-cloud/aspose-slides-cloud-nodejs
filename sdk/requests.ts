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


import * as model from "./model";

export * from "./model";

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;
    /**
     * Destination file path
     */
    public destPath: string;
    /**
     * Source storage name
     */
    public srcStorageName: string;
    /**
     * Destination storage name
     */
    public destStorageName: string;
    /**
     * File version ID to copy
     */
    public versionId: string;
}
/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;
    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;
    /**
     * Source storage name
     */
    public srcStorageName: string;
    /**
     * Destination storage name
     */
    public destStorageName: string;
}
/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;
    /**
     * Storage name
     */
    public storageName: string;
}
/**
 * Request model for DeleteChartCategory operation.
 */
export class DeleteChartCategoryRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Category index.
     */
    public categoryIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteChartDataPoint operation.
 */
export class DeleteChartDataPointRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Series index.
     */
    public seriesIndex: number;
    /**
     * Data point index.
     */
    public pointIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteChartSeries operation.
 */
export class DeleteChartSeriesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index (must be a chart).
     */
    public shapeIndex: number;
    /**
     * Series index.
     */
    public seriesIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;
    /**
     * Storage name
     */
    public storageName: string;
    /**
     * File version ID to delete
     */
    public versionId: string;
}
/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;
    /**
     * Storage name
     */
    public storageName: string;
    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;
}
/**
 * Request model for DeleteNotesSlide operation.
 */
export class DeleteNotesSlideRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteNotesSlideParagraph operation.
 */
export class DeleteNotesSlideParagraphRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteNotesSlideParagraphs operation.
 */
export class DeleteNotesSlideParagraphsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * The indices of the shapes to be deleted; delete all by default.
     */
    public paragraphs: Array<number>;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteNotesSlidePortion operation.
 */
export class DeleteNotesSlidePortionRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Portion index.
     */
    public portionIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteNotesSlidePortions operation.
 */
export class DeleteNotesSlidePortionsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * The indices of the shapes to be deleted; delete all by default.
     */
    public portions: Array<number>;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteNotesSlideShape operation.
 */
export class DeleteNotesSlideShapeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteNotesSlideShapes operation.
 */
export class DeleteNotesSlideShapesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * The indices of the shapes to be deleted; delete all by default.
     */
    public shapes: Array<number>;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteParagraph operation.
 */
export class DeleteParagraphRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteParagraphs operation.
 */
export class DeleteParagraphsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * The indices of the shapes to be deleted; delete all by default.
     */
    public paragraphs: Array<number>;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeletePortion operation.
 */
export class DeletePortionRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Portion index.
     */
    public portionIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeletePortions operation.
 */
export class DeletePortionsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * The indices of the shapes to be deleted; delete all by default.
     */
    public portions: Array<number>;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlideAnimation operation.
 */
export class DeleteSlideAnimationRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlideAnimationEffect operation.
 */
export class DeleteSlideAnimationEffectRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Index of the effect to be removed.
     */
    public effectIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlideAnimationInteractiveSequence operation.
 */
export class DeleteSlideAnimationInteractiveSequenceRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * The index of an interactive sequence to be deleted.
     */
    public sequenceIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlideAnimationInteractiveSequenceEffect operation.
 */
export class DeleteSlideAnimationInteractiveSequenceEffectRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Interactive sequence index.
     */
    public sequenceIndex: number;
    /**
     * Index of the effect to be removed.
     */
    public effectIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlideAnimationInteractiveSequences operation.
 */
export class DeleteSlideAnimationInteractiveSequencesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlideAnimationMainSequence operation.
 */
export class DeleteSlideAnimationMainSequenceRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlideByIndex operation.
 */
export class DeleteSlideByIndexRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlideShape operation.
 */
export class DeleteSlideShapeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlideShapes operation.
 */
export class DeleteSlideShapesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * The indices of the shapes to be deleted; delete all by default.
     */
    public shapes: Array<number>;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlideSubshape operation.
 */
export class DeleteSlideSubshapeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlideSubshapes operation.
 */
export class DeleteSlideSubshapesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * The indices of the shapes to be deleted; delete all by default.
     */
    public shapes: Array<number>;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlidesCleanSlidesList operation.
 */
export class DeleteSlidesCleanSlidesListRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * The indices of the slides to be deleted; delete all by default.
     */
    public slides: Array<number>;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlidesDocumentProperties operation.
 */
export class DeleteSlidesDocumentPropertiesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlidesDocumentProperty operation.
 */
export class DeleteSlidesDocumentPropertyRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * The property name.
     */
    public propertyName: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlidesSlideBackground operation.
 */
export class DeleteSlidesSlideBackgroundRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSubshapeParagraph operation.
 */
export class DeleteSubshapeParagraphRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSubshapeParagraphs operation.
 */
export class DeleteSubshapeParagraphsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * The indices of the shapes to be deleted; delete all by default.
     */
    public paragraphs: Array<number>;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSubshapePortion operation.
 */
export class DeleteSubshapePortionRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Portion index.
     */
    public portionIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSubshapePortions operation.
 */
export class DeleteSubshapePortionsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * The indices of the shapes to be deleted; delete all by default.
     */
    public portions: Array<number>;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;
    /**
     * Storage name
     */
    public storageName: string;
    /**
     * File version ID to download
     */
    public versionId: string;
}
/**
 * Request model for GetDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;
}
/**
 * Request model for GetFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;
    /**
     * Storage name
     */
    public storageName: string;
}
/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;
    /**
     * Storage name
     */
    public storageName: string;
}
/**
 * Request model for GetLayoutSlide operation.
 */
export class GetLayoutSlideRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetLayoutSlidesList operation.
 */
export class GetLayoutSlidesListRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetMasterSlide operation.
 */
export class GetMasterSlideRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetMasterSlidesList operation.
 */
export class GetMasterSlidesListRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlide operation.
 */
export class GetNotesSlideRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlideExists operation.
 */
export class GetNotesSlideExistsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlideShape operation.
 */
export class GetNotesSlideShapeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlideShapeParagraph operation.
 */
export class GetNotesSlideShapeParagraphRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlideShapeParagraphs operation.
 */
export class GetNotesSlideShapeParagraphsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlideShapePortion operation.
 */
export class GetNotesSlideShapePortionRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Portion index.
     */
    public portionIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlideShapePortions operation.
 */
export class GetNotesSlideShapePortionsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlideShapes operation.
 */
export class GetNotesSlideShapesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlideWithFormat operation.
 */
export class GetNotesSlideWithFormatRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Output file format.
     */
    public format: string;
    /**
     * Output file width.
     */
    public width: number;
    /**
     * Output file height.
     */
    public height: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Storage folder containing custom fonts to be used with the document.
     */
    public fontsFolder: string;
}
/**
 * Request model for GetParagraphPortion operation.
 */
export class GetParagraphPortionRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Portion index.
     */
    public portionIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetParagraphPortions operation.
 */
export class GetParagraphPortionsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlideAnimation operation.
 */
export class GetSlideAnimationRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index. If specified, only effects related to that shape are returned.
     */
    public shapeIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlideShape operation.
 */
export class GetSlideShapeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlideShapeParagraph operation.
 */
export class GetSlideShapeParagraphRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlideShapeParagraphs operation.
 */
export class GetSlideShapeParagraphsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlideShapes operation.
 */
export class GetSlideShapesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlideSubshape operation.
 */
export class GetSlideSubshapeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlideSubshapeParagraph operation.
 */
export class GetSlideSubshapeParagraphRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlideSubshapeParagraphs operation.
 */
export class GetSlideSubshapeParagraphsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlideSubshapes operation.
 */
export class GetSlideSubshapesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path (for smart art and group shapes).
     */
    public path: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesApiInfo operation.
 */
export class GetSlidesApiInfoRequest {
}
/**
 * Request model for GetSlidesDocument operation.
 */
export class GetSlidesDocumentRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Documentstorage.
     */
    public storage: string;
    /**
     * Document folder.
     */
    public folder: string;
}
/**
 * Request model for GetSlidesDocumentProperties operation.
 */
export class GetSlidesDocumentPropertiesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesDocumentProperty operation.
 */
export class GetSlidesDocumentPropertyRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * The property name.
     */
    public propertyName: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesImageWithDefaultFormat operation.
 */
export class GetSlidesImageWithDefaultFormatRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Image index.
     */
    public index: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesImageWithFormat operation.
 */
export class GetSlidesImageWithFormatRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Image index.
     */
    public index: number;
    /**
     * Export format (png, jpg, gif).
     */
    public format: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesImages operation.
 */
export class GetSlidesImagesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesPlaceholder operation.
 */
export class GetSlidesPlaceholderRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Placeholder index.
     */
    public placeholderIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesPlaceholders operation.
 */
export class GetSlidesPlaceholdersRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesPresentationTextItems operation.
 */
export class GetSlidesPresentationTextItemsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * True to incude empty items.
     */
    public withEmpty: boolean;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesSlide operation.
 */
export class GetSlidesSlideRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesSlideBackground operation.
 */
export class GetSlidesSlideBackgroundRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesSlideComments operation.
 */
export class GetSlidesSlideCommentsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * The position of the slide to be reordered.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesSlideImages operation.
 */
export class GetSlidesSlideImagesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesSlideTextItems operation.
 */
export class GetSlidesSlideTextItemsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * True to incude empty items.
     */
    public withEmpty: boolean;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesSlidesList operation.
 */
export class GetSlidesSlidesListRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesTheme operation.
 */
export class GetSlidesThemeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesThemeColorScheme operation.
 */
export class GetSlidesThemeColorSchemeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesThemeFontScheme operation.
 */
export class GetSlidesThemeFontSchemeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesThemeFormatScheme operation.
 */
export class GetSlidesThemeFormatSchemeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSlidesViewProperties operation.
 */
export class GetSlidesViewPropertiesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSubshapeParagraphPortion operation.
 */
export class GetSubshapeParagraphPortionRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Portion index.
     */
    public portionIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for GetSubshapeParagraphPortions operation.
 */
export class GetSubshapeParagraphPortionsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;
    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;
    /**
     * Source storage name
     */
    public srcStorageName: string;
    /**
     * Destination storage name
     */
    public destStorageName: string;
    /**
     * File version ID to move
     */
    public versionId: string;
}
/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;
    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;
    /**
     * Source storage name
     */
    public srcStorageName: string;
    /**
     * Destination storage name
     */
    public destStorageName: string;
}
/**
 * Request model for ObjectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;
    /**
     * Storage name
     */
    public storageName: string;
    /**
     * File version ID
     */
    public versionId: string;
}
/**
 * Request model for PostAddNewParagraph operation.
 */
export class PostAddNewParagraphRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph DTO.
     */
    public dto: model.Paragraph;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Position of the new paragraph in the list. Default is at the end of the list.
     */
    public position: number;
}
/**
 * Request model for PostAddNewPortion operation.
 */
export class PostAddNewPortionRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Portion DTO.
     */
    public dto: model.Portion;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Position of the new portion in the list. Default is at the end of the list.
     */
    public position: number;
}
/**
 * Request model for PostAddNewShape operation.
 */
export class PostAddNewShapeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape DTO.
     */
    public dto: model.ShapeBase;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Optional index for clone shape instead of adding a new one.
     */
    public shapeToClone: number;
    /**
     * Position of the new shape in the list. Default is at the end of the list.
     */
    public position: number;
}
/**
 * Request model for PostAddNewSubshape operation.
 */
export class PostAddNewSubshapeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape DTO.
     */
    public dto: model.ShapeBase;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Optional index for clone shape instead of adding a new one.
     */
    public shapeToClone: number;
    /**
     * Position of the new shape in the list. Default is at the end of the list.
     */
    public position: number;
}
/**
 * Request model for PostAddNewSubshapeParagraph operation.
 */
export class PostAddNewSubshapeParagraphRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph DTO.
     */
    public dto: model.Paragraph;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Position of the new paragraph in the list. Default is at the end of the list.
     */
    public position: number;
}
/**
 * Request model for PostAddNewSubshapePortion operation.
 */
export class PostAddNewSubshapePortionRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Portion DTO.
     */
    public dto: model.Portion;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Position of the new portion in the list. Default is at the end of the list.
     */
    public position: number;
}
/**
 * Request model for PostAddNotesSlide operation.
 */
export class PostAddNotesSlideRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * A NotesSlide object with notes slide data.
     */
    public dto: model.NotesSlide;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostChartCategory operation.
 */
export class PostChartCategoryRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Category DTO.
     */
    public category: model.ChartCategory;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostChartDataPoint operation.
 */
export class PostChartDataPointRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Series index.
     */
    public seriesIndex: number;
    /**
     * Data point DTO.
     */
    public dataPoint: model.DataPoint;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostChartSeries operation.
 */
export class PostChartSeriesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index (must be a chart).
     */
    public shapeIndex: number;
    /**
     * Series DTO.
     */
    public series: model.Series;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostCopyLayoutSlideFromSourcePresentation operation.
 */
export class PostCopyLayoutSlideFromSourcePresentationRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Name of the document to clone layoutSlide from.
     */
    public cloneFrom: string;
    /**
     * Position of cloned layout slide.
     */
    public cloneFromPosition: number;
    /**
     * Password for the document to clone layoutSlide from.
     */
    public cloneFromPassword: string;
    /**
     * Storage of the document to clone layoutSlide from.
     */
    public cloneFromStorage: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostCopyMasterSlideFromSourcePresentation operation.
 */
export class PostCopyMasterSlideFromSourcePresentationRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Name of the document to clone masterSlide from.
     */
    public cloneFrom: string;
    /**
     * Position of cloned master slide.
     */
    public cloneFromPosition: number;
    /**
     * Password for the document to clone masterSlide from.
     */
    public cloneFromPassword: string;
    /**
     * Storage of the document to clone masterSlide from.
     */
    public cloneFromStorage: string;
    /**
     * True to apply cloned master slide to every existing slide.
     */
    public applyToAll: boolean;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostGetNotesSlide operation.
 */
export class PostGetNotesSlideRequest {
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document data.
     */
    public document: Buffer;
    /**
     * Document password.
     */
    public password: string;
}
/**
 * Request model for PostGetNotesSlideExists operation.
 */
export class PostGetNotesSlideExistsRequest {
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Document data.
     */
    public document: Buffer;
    /**
     * Document password.
     */
    public password: string;
}
/**
 * Request model for PostGetNotesSlideWithFormat operation.
 */
export class PostGetNotesSlideWithFormatRequest {
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Output file format.
     */
    public format: string;
    /**
     * Document data.
     */
    public document: Buffer;
    /**
     * Output file width.
     */
    public width: number;
    /**
     * Output file height.
     */
    public height: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Storage folder containing custom fonts to be used with the document.
     */
    public fontsFolder: string;
}
/**
 * Request model for PostNotesSlideAddNewParagraph operation.
 */
export class PostNotesSlideAddNewParagraphRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph DTO.
     */
    public dto: model.Paragraph;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Position of the new paragraph in the list. Default is at the end of the list.
     */
    public position: number;
}
/**
 * Request model for PostNotesSlideAddNewPortion operation.
 */
export class PostNotesSlideAddNewPortionRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Portion DTO.
     */
    public dto: model.Portion;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Position of the new portion in the list. Default is at the end of the list.
     */
    public position: number;
}
/**
 * Request model for PostNotesSlideAddNewShape operation.
 */
export class PostNotesSlideAddNewShapeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape DTO.
     */
    public dto: model.ShapeBase;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Optional index for clone shape instead of adding a new one.
     */
    public shapeToClone: number;
    /**
     * Position of the new shape in the list. Default is at the end of the list.
     */
    public position: number;
}
/**
 * Request model for PostNotesSlideShapeSaveAs operation.
 */
export class PostNotesSlideShapeSaveAsRequest {
    /**
     * Presentation name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Index of shape starting from 1
     */
    public shapeIndex: number;
    /**
     * Export picture format.
     */
    public format: string;
    /**
     * export options
     */
    public options: model.IShapeExportOptions;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
    /**
     * X scale ratio.
     */
    public scaleX: number;
    /**
     * Y scale ratio.
     */
    public scaleY: number;
    /**
     * Shape thumbnail bounds type.
     */
    public bounds: string;
    /**
     * Fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PostPresentationMerge operation.
 */
export class PostPresentationMergeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * PresentationsMergeRequest with a list of presentations to merge.
     */
    public request: model.PresentationsMergeRequest;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Document folder.
     */
    public folder: string;
}
/**
 * Request model for PostShapeSaveAs operation.
 */
export class PostShapeSaveAsRequest {
    /**
     * Presentation name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Index of shape starting from 1
     */
    public shapeIndex: number;
    /**
     * Export picture format.
     */
    public format: string;
    /**
     * export options
     */
    public options: model.IShapeExportOptions;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
    /**
     * X scale ratio.
     */
    public scaleX: number;
    /**
     * Y scale ratio.
     */
    public scaleY: number;
    /**
     * Shape thumbnail bounds type.
     */
    public bounds: string;
    /**
     * Fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PostSlideAnimationEffect operation.
 */
export class PostSlideAnimationEffectRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Animation effect DTO.
     */
    public effect: model.Effect;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostSlideAnimationInteractiveSequence operation.
 */
export class PostSlideAnimationInteractiveSequenceRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Animation sequence DTO.
     */
    public sequence: model.InteractiveSequence;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostSlideAnimationInteractiveSequenceEffect operation.
 */
export class PostSlideAnimationInteractiveSequenceEffectRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * The position of the interactive sequence.
     */
    public sequenceIndex: number;
    /**
     * Animation effect DTO.
     */
    public effect: model.Effect;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostSlideSaveAs operation.
 */
export class PostSlideSaveAsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Output file format.
     */
    public format: string;
    /**
     * Export options.
     */
    public options: model.ExportOptions;
    /**
     * Output file width; 0 to not adjust the size. Default is 0.
     */
    public width: number;
    /**
     * Output file height; 0 to not adjust the size. Default is 0.
     */
    public height: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Storage folder containing custom fonts to be used with the document.
     */
    public fontsFolder: string;
}
/**
 * Request model for PostSlidesAdd operation.
 */
export class PostSlidesAddRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * The target position at which to create the slide. Add to the end by default.
     */
    public position: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Alias of layout slide for new slide. Alias may be the type of layout, name of layout slide or index
     */
    public layoutAlias: string;
}
/**
 * Request model for PostSlidesConvert operation.
 */
export class PostSlidesConvertRequest {
    /**
     * Export format.
     */
    public format: string;
    /**
     * Document data.
     */
    public document: Buffer;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Custom fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PostSlidesCopy operation.
 */
export class PostSlidesCopyRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * The index of the slide to be copied from the source presentation.
     */
    public slideToCopy: number;
    /**
     * The target position at which to copy the slide. Copy to the end by default.
     */
    public position: number;
    /**
     * Name of the document to copy a slide from.
     */
    public source: string;
    /**
     * Password for the document to copy a slide from.
     */
    public sourcePassword: string;
    /**
     * Template storage name.
     */
    public sourceStorage: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostSlidesDocument operation.
 */
export class PostSlidesDocumentRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Document input data.
     */
    public data: Buffer;
    /**
     * The password for input document.
     */
    public inputPassword: string;
    /**
     * The document password.
     */
    public password: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Document folder.
     */
    public folder: string;
}
/**
 * Request model for PostSlidesDocumentFromHtml operation.
 */
export class PostSlidesDocumentFromHtmlRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * HTML data.
     */
    public html: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Document folder.
     */
    public folder: string;
}
/**
 * Request model for PostSlidesDocumentFromSource operation.
 */
export class PostSlidesDocumentFromSourceRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Template file path.
     */
    public sourcePath: string;
    /**
     * Template file password.
     */
    public sourcePassword: string;
    /**
     * Template storage name.
     */
    public sourceStorage: string;
    /**
     * The document password.
     */
    public password: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Document folder.
     */
    public folder: string;
}
/**
 * Request model for PostSlidesDocumentFromTemplate operation.
 */
export class PostSlidesDocumentFromTemplateRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Template file path.
     */
    public templatePath: string;
    /**
     * Document input data.
     */
    public data: string;
    /**
     * Template file password.
     */
    public templatePassword: string;
    /**
     * Template storage name.
     */
    public templateStorage: string;
    /**
     * True if image data is embedded.
     */
    public isImageDataEmbedded: boolean;
    /**
     * The document password.
     */
    public password: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Document folder.
     */
    public folder: string;
}
/**
 * Request model for PostSlidesPipeline operation.
 */
export class PostSlidesPipelineRequest {
    /**
     * A Pipeline object.
     */
    public pipeline: model.Pipeline;
    /**
     * files to upload with the pipeline
     */
    public files: Array<Buffer>;
}
/**
 * Request model for PostSlidesPresentationReplaceText operation.
 */
export class PostSlidesPresentationReplaceTextRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Text value to be replaced.
     */
    public oldValue: string;
    /**
     * Text value to replace with.
     */
    public newValue: string;
    /**
     * True if character case must be ignored.
     */
    public ignoreCase: boolean;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostSlidesReorder operation.
 */
export class PostSlidesReorderRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * The position of the slide to be reordered.
     */
    public slideIndex: number;
    /**
     * The new position of the reordered slide.
     */
    public newPosition: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostSlidesReorderMany operation.
 */
export class PostSlidesReorderManyRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * A comma separated array of positions of slides to be reordered.
     */
    public oldPositions: Array<number>;
    /**
     * A comma separated array of new slide positions.
     */
    public newPositions: Array<number>;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostSlidesSaveAs operation.
 */
export class PostSlidesSaveAsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Export format.
     */
    public format: string;
    /**
     * Export options.
     */
    public options: model.ExportOptions;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Custom fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PostSlidesSetDocumentProperties operation.
 */
export class PostSlidesSetDocumentPropertiesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * New properties.
     */
    public properties: model.DocumentProperties;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostSlidesSlideReplaceText operation.
 */
export class PostSlidesSlideReplaceTextRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Text value to be replaced.
     */
    public oldValue: string;
    /**
     * Text value to replace with.
     */
    public newValue: string;
    /**
     * True if character case must be ignored.
     */
    public ignoreCase: boolean;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PostSlidesSplit operation.
 */
export class PostSlidesSplitRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Export options.
     */
    public options: model.ExportOptions;
    /**
     * Export format. Default value is jpeg.
     */
    public format: string;
    /**
     * The width of created images.
     */
    public width: number;
    /**
     * The height of created images.
     */
    public height: number;
    /**
     * The last slide number for splitting, if is not specified splitting ends at the last slide of the document.
     */
    public to: number;
    /**
     * The start slide number for splitting, if is not specified splitting starts from the first slide of the presentation.
     */
    public from: number;
    /**
     * Folder on storage where images are going to be uploaded. If not specified then images are uploaded to same folder as presentation.
     */
    public destFolder: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Custom fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PostSubshapeSaveAs operation.
 */
export class PostSubshapeSaveAsRequest {
    /**
     * Presentation name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Index of shape starting from 1
     */
    public shapeIndex: number;
    /**
     * Export picture format.
     */
    public format: string;
    /**
     * export options
     */
    public options: model.IShapeExportOptions;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
    /**
     * X scale ratio.
     */
    public scaleX: number;
    /**
     * Y scale ratio.
     */
    public scaleY: number;
    /**
     * Shape thumbnail bounds type.
     */
    public bounds: string;
    /**
     * Fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PutChartCategory operation.
 */
export class PutChartCategoryRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Category index.
     */
    public categoryIndex: number;
    /**
     * Category DTO.
     */
    public category: model.ChartCategory;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutChartDataPoint operation.
 */
export class PutChartDataPointRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Series index.
     */
    public seriesIndex: number;
    /**
     * Data point index.
     */
    public pointIndex: number;
    /**
     * Data point DTO.
     */
    public dataPoint: model.DataPoint;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutChartSeries operation.
 */
export class PutChartSeriesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index (must be a chart).
     */
    public shapeIndex: number;
    /**
     * Series index.
     */
    public seriesIndex: number;
    /**
     * Series DTO.
     */
    public series: model.Series;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutLayoutSlide operation.
 */
export class PutLayoutSlideRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Slide update data.
     */
    public slideDto: model.LayoutSlide;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutNotesSlideShapeSaveAs operation.
 */
export class PutNotesSlideShapeSaveAsRequest {
    /**
     * Presentation name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Index of shape starting from 1
     */
    public shapeIndex: number;
    /**
     * Export picture format.
     */
    public format: string;
    /**
     * Output path.
     */
    public outPath: string;
    /**
     * export options
     */
    public options: model.IShapeExportOptions;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
    /**
     * X scale ratio.
     */
    public scaleX: number;
    /**
     * Y scale ratio.
     */
    public scaleY: number;
    /**
     * Shape thumbnail bounds type.
     */
    public bounds: string;
    /**
     * Fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PutPresentationMerge operation.
 */
export class PutPresentationMergeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * OrderedMergeRequest with a list of presentations and slide indices to merge.
     */
    public request: model.OrderedMergeRequest;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Document folder.
     */
    public folder: string;
}
/**
 * Request model for PutSetParagraphPortionProperties operation.
 */
export class PutSetParagraphPortionPropertiesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Portion index.
     */
    public portionIndex: number;
    /**
     * Portion DTO.
     */
    public dto: model.Portion;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutSetParagraphProperties operation.
 */
export class PutSetParagraphPropertiesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Paragraph DTO.
     */
    public dto: model.Paragraph;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutSetSubshapeParagraphPortionProperties operation.
 */
export class PutSetSubshapeParagraphPortionPropertiesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Portion index.
     */
    public portionIndex: number;
    /**
     * Portion DTO.
     */
    public dto: model.Portion;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutSetSubshapeParagraphProperties operation.
 */
export class PutSetSubshapeParagraphPropertiesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Paragraph DTO.
     */
    public dto: model.Paragraph;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutShapeSaveAs operation.
 */
export class PutShapeSaveAsRequest {
    /**
     * Presentation name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Index of shape starting from 1
     */
    public shapeIndex: number;
    /**
     * Export picture format.
     */
    public format: string;
    /**
     * Output path.
     */
    public outPath: string;
    /**
     * export options
     */
    public options: model.IShapeExportOptions;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
    /**
     * X scale ratio.
     */
    public scaleX: number;
    /**
     * Y scale ratio.
     */
    public scaleY: number;
    /**
     * Shape thumbnail bounds type.
     */
    public bounds: string;
    /**
     * Fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PutSlideAnimation operation.
 */
export class PutSlideAnimationRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Animation DTO.
     */
    public animation: model.SlideAnimation;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutSlideAnimationEffect operation.
 */
export class PutSlideAnimationEffectRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * The position of the effect to be modified.
     */
    public effectIndex: number;
    /**
     * Animation effect DTO.
     */
    public effect: model.Effect;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutSlideAnimationInteractiveSequenceEffect operation.
 */
export class PutSlideAnimationInteractiveSequenceEffectRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * The position of the interactive sequence.
     */
    public sequenceIndex: number;
    /**
     * The position of the effect to be modified.
     */
    public effectIndex: number;
    /**
     * Animation effect DTO.
     */
    public effect: model.Effect;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutSlideSaveAs operation.
 */
export class PutSlideSaveAsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Output file format.
     */
    public format: string;
    /**
     * Path to upload the output file to.
     */
    public outPath: string;
    /**
     * Export options.
     */
    public options: model.ExportOptions;
    /**
     * Output file width; 0 to not adjust the size. Default is 0.
     */
    public width: number;
    /**
     * Output file height; 0 to not adjust the size. Default is 0.
     */
    public height: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Storage folder containing custom fonts to be used with the document.
     */
    public fontsFolder: string;
}
/**
 * Request model for PutSlideShapeInfo operation.
 */
export class PutSlideShapeInfoRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Shape DTO.
     */
    public dto: model.ShapeBase;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutSlideSubshapeInfo operation.
 */
export class PutSlideSubshapeInfoRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Shape DTO.
     */
    public dto: model.ShapeBase;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutSlidesConvert operation.
 */
export class PutSlidesConvertRequest {
    /**
     * Export format.
     */
    public format: string;
    /**
     * Path to save result.
     */
    public outPath: string;
    /**
     * Document data.
     */
    public document: Buffer;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Custom fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PutSlidesDocumentFromHtml operation.
 */
export class PutSlidesDocumentFromHtmlRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * HTML data.
     */
    public html: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Document folder.
     */
    public folder: string;
}
/**
 * Request model for PutSlidesSaveAs operation.
 */
export class PutSlidesSaveAsRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Output path.
     */
    public outPath: string;
    /**
     * Export format.
     */
    public format: string;
    /**
     * Export options.
     */
    public options: model.ExportOptions;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Custom fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PutSlidesSetDocumentProperty operation.
 */
export class PutSlidesSetDocumentPropertyRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * The property name.
     */
    public propertyName: string;
    /**
     * Property with the value.
     */
    public property: model.DocumentProperty;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutSlidesSlide operation.
 */
export class PutSlidesSlideRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Slide update data.
     */
    public slideDto: model.Slide;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutSlidesSlideBackground operation.
 */
export class PutSlidesSlideBackgroundRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Slide background update data.
     */
    public background: model.SlideBackground;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutSlidesSlideBackgroundColor operation.
 */
export class PutSlidesSlideBackgroundColorRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Slide background target color in RRGGBB format.
     */
    public color: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutSlidesSlideSize operation.
 */
export class PutSlidesSlideSizeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document storage.
     */
    public storage: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Slide width.
     */
    public width: number;
    /**
     * Slide height.
     */
    public height: number;
    /**
     * Standard slide size type.
     */
    public sizeType: string;
    /**
     * Standard slide scale type.
     */
    public scaleType: string;
}
/**
 * Request model for PutSlidesViewProperties operation.
 */
export class PutSlidesViewPropertiesRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * The view properties data.
     */
    public dto: model.ViewProperties;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutSubshapeSaveAs operation.
 */
export class PutSubshapeSaveAsRequest {
    /**
     * Presentation name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape path (for smart art and group shapes).
     */
    public path: string;
    /**
     * Index of shape starting from 1
     */
    public shapeIndex: number;
    /**
     * Export picture format.
     */
    public format: string;
    /**
     * Output path.
     */
    public outPath: string;
    /**
     * export options
     */
    public options: model.IShapeExportOptions;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
    /**
     * X scale ratio.
     */
    public scaleX: number;
    /**
     * Y scale ratio.
     */
    public scaleY: number;
    /**
     * Shape thumbnail bounds type.
     */
    public bounds: string;
    /**
     * Fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PutUpdateNotesSlide operation.
 */
export class PutUpdateNotesSlideRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * A NotesSlide object with notes slide data.
     */
    public dto: model.NotesSlide;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutUpdateNotesSlideShape operation.
 */
export class PutUpdateNotesSlideShapeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Shape DTO.
     */
    public dto: model.ShapeBase;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutUpdateNotesSlideShapeParagraph operation.
 */
export class PutUpdateNotesSlideShapeParagraphRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Paragraph DTO.
     */
    public dto: model.Paragraph;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for PutUpdateNotesSlideShapePortion operation.
 */
export class PutUpdateNotesSlideShapePortionRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Portion index.
     */
    public portionIndex: number;
    /**
     * Portion DTO.
     */
    public dto: model.Portion;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Document folder.
     */
    public folder: string;
    /**
     * Document storage.
     */
    public storage: string;
}
/**
 * Request model for StorageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;
}
/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
    public path: string;
    /**
     * File to upload
     */
    public file: Buffer;
    /**
     * Storage name
     */
    public storageName: string;
}
