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
 * Request model for GetSlidesApiInfo operation.
 */
export class GetSlidesApiInfoRequest {
}
/**
 * Request model for GetSlidesDocument operation.
 */
export class GetSlidesDocumentRequest {
    /**
     * The document name.
     */
    public name: string;
    /**
     * The document password.
     */
    public password: string;
    /**
     * Document's storage.
     */
    public storage: string;
    /**
     * Document's folder.
     */
    public folder: string;
}
/**
 * Request model for GetSlidesDocumentWithFormat operation.
 */
export class GetSlidesDocumentWithFormatRequest {
    /**
     * The document name.
     */
    public name: string;
    /**
     * The conversion format.
     */
    public format: string;
    /**
     * Quality of the JPEG images inside PDF document.
     */
    public jpegQuality: number;
    /**
     * The document password.
     */
    public password: string;
    /**
     * Document's storage.
     */
    public storage: string;
    /**
     * Document's folder.
     */
    public folder: string;
    /**
     * Path to save result
     */
    public outPath: string;
    /**
     * The optional custom fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PostSlidesDocument operation.
 */
export class PostSlidesDocumentRequest {
    /**
     * The document name.
     */
    public name: string;
    /**
     * Gets or sets data
     */
    public data: string;
    /**
     * Template file path.
     */
    public templatePath: string;
    /**
     * Template storage name.
     */
    public templateStorage: string;
    /**
     * Is Image Data Embedded
     */
    public isImageDataEmbedded: boolean;
    /**
     * The document password.
     */
    public password: string;
    /**
     * Document's storage.
     */
    public storage: string;
    /**
     * Document's folder.
     */
    public folder: string;
}
/**
 * Request model for PostSlidesPipeline operation.
 */
export class PostSlidesPipelineRequest {
    /**
     * Gets or sets pipeline
     */
    public pipeline: model.Pipeline;
    /**
     * files to upload with the pipeline
     */
    public files: Array<Buffer>;
}
/**
 * Request model for PostSlidesSaveAs operation.
 */
export class PostSlidesSaveAsRequest {
    /**
     * The presentation name
     */
    public name: string;
    /**
     * Export format
     */
    public format: string;
    /**
     * Tiff export options
     */
    public options: model.ExportOptions;
    /**
     * The password to open presentation.
     */
    public password: string;
    /**
     * Document's storage.
     */
    public storage: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * The optional output path.
     */
    public outPath: string;
    /**
     * The optional custom fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PostSlidesSplit operation.
 */
export class PostSlidesSplitRequest {
    /**
     * The document name.
     */
    public name: string;
    /**
     * export options
     */
    public options: model.ExportOptions;
    /**
     * The format. Default value is jpeg.
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
     * The document password.
     */
    public password: string;
    /**
     * The document storage.
     */
    public storage: string;
    /**
     * The document folder.
     */
    public folder: string;
}
/**
 * Request model for PutNewPresentation operation.
 */
export class PutNewPresentationRequest {
    /**
     * The document name.
     */
    public name: string;
    /**
     * Gets or sets stream
     */
    public stream: Buffer;
    /**
     * Template file path.
     */
    public templatePath: string;
    /**
     * Gets or sets templatePassword
     */
    public templatePassword: string;
    /**
     * Template storage name.
     */
    public templateStorage: string;
    /**
     * The document password.
     */
    public password: string;
    /**
     * Document's storage.
     */
    public storage: string;
    /**
     * Document's folder.
     */
    public folder: string;
}
/**
 * Request model for PutSlidesConvert operation.
 */
export class PutSlidesConvertRequest {
    /**
     * The format.
     */
    public format: string;
    /**
     * Gets or sets document
     */
    public document: Buffer;
    /**
     * The document password.
     */
    public password: string;
    /**
     * Path to save result
     */
    public outPath: string;
    /**
     * The optional custom fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PutSlidesDocumentFromHtml operation.
 */
export class PutSlidesDocumentFromHtmlRequest {
    /**
     * The document name.
     */
    public name: string;
    /**
     * Gets or sets html
     */
    public html: string;
    /**
     * The document password.
     */
    public password: string;
    /**
     * Document's storage.
     */
    public storage: string;
    /**
     * Document's folder.
     */
    public folder: string;
}
/**
 * Request model for PutSlidesSlideSize operation.
 */
export class PutSlidesSlideSizeRequest {
    /**
     * The document name.
     */
    public name: string;
    /**
     * The document password.
     */
    public password: string;
    /**
     * The document storage.
     */
    public storage: string;
    /**
     * The document folder.
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
     * Export format (png, jpg, gif). Pass null to export image 'as is'.
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
 * Request model for PostPresentationMerge operation.
 */
export class PostPresentationMergeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * with a list of presentations to merge.
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
 * Request model for PutPresentationMerge operation.
 */
export class PutPresentationMergeRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * with a list of presentations and slide indices to merge.
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
     * A  object with notes slide data.
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
     * A  object with notes slide data.
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
 * Request model for DeleteNotesSlideParagraph operation.
 */
export class DeleteNotesSlideParagraphRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteNotesSlideParagraphs operation.
 */
export class DeleteNotesSlideParagraphsRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteNotesSlidePortion operation.
 */
export class DeleteNotesSlidePortionRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteNotesSlidePortions operation.
 */
export class DeleteNotesSlidePortionsRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteNotesSlideShape operation.
 */
export class DeleteNotesSlideShapeRequest {
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
     * Shape index.
     */
    public shapeIndex: number;
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
}
/**
 * Request model for DeleteNotesSlideShapes operation.
 */
export class DeleteNotesSlideShapesRequest {
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
     * The indices of the shapes to be deleted; delete all by default.
     */
    public shapes: Array<number>;
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
}
/**
 * Request model for GetNotesSlideShape operation.
 */
export class GetNotesSlideShapeRequest {
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
     * Shape index.
     */
    public shapeIndex: number;
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
}
/**
 * Request model for GetNotesSlideShapeParagraph operation.
 */
export class GetNotesSlideShapeParagraphRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlideShapeParagraphs operation.
 */
export class GetNotesSlideShapeParagraphsRequest {
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
     * Shape index.
     */
    public shapeIndex: number;
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
}
/**
 * Request model for GetNotesSlideShapePortion operation.
 */
export class GetNotesSlideShapePortionRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlideShapePortions operation.
 */
export class GetNotesSlideShapePortionsRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlideShapeWithFormat operation.
 */
export class GetNotesSlideShapeWithFormatRequest {
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
     * Output path.
     */
    public outPath: string;
    /**
     * Fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for GetNotesSlideShapes operation.
 */
export class GetNotesSlideShapesRequest {
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
}
/**
 * Request model for PostNotesSlideAddNewParagraph operation.
 */
export class PostNotesSlideAddNewParagraphRequest {
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
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Shape dto.
     */
    public dto: model.Paragraph;
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
     * Position of the new paragraph in the list. Default is at the end of the list.
     */
    public position: number;
}
/**
 * Request model for PostNotesSlideAddNewPortion operation.
 */
export class PostNotesSlideAddNewPortionRequest {
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
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Shape dto.
     */
    public dto: model.Portion;
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
     * Position of the new paragraph in the list. Default is at the end of the list.
     */
    public position: number;
}
/**
 * Request model for PostNotesSlideAddNewShape operation.
 */
export class PostNotesSlideAddNewShapeRequest {
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
     * Shape dto.
     */
    public dto: model.ShapeBase;
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
     * Optional index for clone shape instead of adding the new one.
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
     * Output path.
     */
    public outPath: string;
    /**
     * Fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PutUpdateNotesSlideShape operation.
 */
export class PutUpdateNotesSlideShapeRequest {
    /**
     * Presentation name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Object path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Shape dto.
     */
    public dto: model.ShapeBase;
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
}
/**
 * Request model for PutUpdateNotesSlideShapeParagraph operation.
 */
export class PutUpdateNotesSlideShapeParagraphRequest {
    /**
     * Presentation name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Object path.
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
     * Shape dto.
     */
    public dto: model.Paragraph;
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
}
/**
 * Request model for PutUpdateNotesSlideShapePortion operation.
 */
export class PutUpdateNotesSlideShapePortionRequest {
    /**
     * Presentation name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Object path.
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
     * Shape dto.
     */
    public dto: model.Portion;
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
 * Request model for DeleteParagraph operation.
 */
export class DeleteParagraphRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteParagraphs operation.
 */
export class DeleteParagraphsRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for DeletePortion operation.
 */
export class DeletePortionRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for DeletePortions operation.
 */
export class DeletePortionsRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlideShape operation.
 */
export class DeleteSlideShapeRequest {
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
     * Shape index.
     */
    public shapeIndex: number;
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
}
/**
 * Request model for DeleteSlideShapes operation.
 */
export class DeleteSlideShapesRequest {
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
     * The indices of the shapes to be deleted; delete all by default.
     */
    public shapes: Array<number>;
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
}
/**
 * Request model for GetParagraphPortion operation.
 */
export class GetParagraphPortionRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for GetParagraphPortions operation.
 */
export class GetParagraphPortionsRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for GetShapeParagraph operation.
 */
export class GetShapeParagraphRequest {
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
     * Presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for GetShapeWithFormat operation.
 */
export class GetShapeWithFormatRequest {
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
     * Output path.
     */
    public outPath: string;
    /**
     * Fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for GetSlideShape operation.
 */
export class GetSlideShapeRequest {
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
     * Shape index.
     */
    public shapeIndex: number;
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
}
/**
 * Request model for GetSlideShapeParagraphs operation.
 */
export class GetSlideShapeParagraphsRequest {
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
     * Shape index.
     */
    public shapeIndex: number;
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
}
/**
 * Request model for GetSlideShapes operation.
 */
export class GetSlideShapesRequest {
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
}
/**
 * Request model for PostAddNewParagraph operation.
 */
export class PostAddNewParagraphRequest {
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
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Shape dto.
     */
    public dto: model.Paragraph;
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
     * Position of the new paragraph in the list. Default is at the end of the list.
     */
    public position: number;
}
/**
 * Request model for PostAddNewPortion operation.
 */
export class PostAddNewPortionRequest {
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
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Paragraph index.
     */
    public paragraphIndex: number;
    /**
     * Shape dto.
     */
    public dto: model.Portion;
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
     * Position of the new portion in the list. Default is at the end of the list.
     */
    public position: number;
}
/**
 * Request model for PostAddNewShape operation.
 */
export class PostAddNewShapeRequest {
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
     * Shape dto.
     */
    public dto: model.ShapeBase;
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
     * Optional index for clone shape instead of adding the new one.
     */
    public shapeToClone: number;
    /**
     * Position of the new shape in the list. Default is at the end of the list.
     */
    public position: number;
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
     * Output path.
     */
    public outPath: string;
    /**
     * Fonts folder.
     */
    public fontsFolder: string;
}
/**
 * Request model for PutSetParagraphPortionProperties operation.
 */
export class PutSetParagraphPortionPropertiesRequest {
    /**
     * Presentation name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Object path.
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
     * Shape dto.
     */
    public dto: model.Portion;
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
}
/**
 * Request model for PutSetParagraphProperties operation.
 */
export class PutSetParagraphPropertiesRequest {
    /**
     * Presentation name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Object path.
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
     * Shape dto.
     */
    public dto: model.Paragraph;
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
}
/**
 * Request model for PutSlideShapeInfo operation.
 */
export class PutSlideShapeInfoRequest {
    /**
     * Presentation name.
     */
    public name: string;
    /**
     * Slide index.
     */
    public slideIndex: number;
    /**
     * Object path.
     */
    public path: string;
    /**
     * Shape index.
     */
    public shapeIndex: number;
    /**
     * Shape dto.
     */
    public dto: model.ShapeBase;
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
 * Request model for GetSlideWithFormat operation.
 */
export class GetSlideWithFormatRequest {
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
     * Path to upload the output file to.
     */
    public outPath: string;
    /**
     * Storage folder containing custom fonts to be used with the document.
     */
    public fontsFolder: string;
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
     * Path to upload the output file to.
     */
    public outPath: string;
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
 * Request model for PostSlidesReorderPosition operation.
 */
export class PostSlidesReorderPositionRequest {
    /**
     * Document name.
     */
    public name: string;
    /**
     * The position of the slide to be reordered.
     */
    public oldPosition: number;
    /**
     * The new position of the reordered slide.
     */
    public newPosition: number;
    /**
     * A comma separated array of positions of slides to be reordered.
     */
    public oldPositions: Array<number>;
    /**
     * A comma separated array of new slide positions.
     */
    public newPositions: Array<number>;
    /**
     * The index of the slide to be copied from the source presentation.
     */
    public slideToCopy: number;
    /**
     * The target position at which to copy or create the slide.
     */
    public position: number;
    /**
     * The index of the slide to be cloned.
     */
    public slideToClone: number;
    /**
     * Name of the document to copy a slide from.
     */
    public source: string;
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
     * Slide background update data. Required unless color parameter is specified.
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
    /**
     * Slide background target color in RRGGBB format. Ignored if background parameter is specified. Required unless background parameter is specified.
     */
    public color: string;
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
