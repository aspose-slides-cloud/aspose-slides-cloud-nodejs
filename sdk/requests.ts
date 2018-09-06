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
    public format: number;
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
     * Is Image Data Embeeded
     */
    public isImageDataEmbeeded: boolean;
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
    public format: number;
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
    public format: number;
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
    public format: number;
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
    public sizeType: number;
    /**
     * Standard slide scale type.
     */
    public scaleType: number;
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
    public format: number;
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
     * The presentation name.
     */
    public name: string;
    /**
     * Index of the slide.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for GetLayoutSlidesList operation.
 */
export class GetLayoutSlidesListRequest {
    /**
     * The presentation name.
     */
    public name: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for PostCopyLayoutSlideFromSourcePresentation operation.
 */
export class PostCopyLayoutSlideFromSourcePresentationRequest {
    /**
     * The presentation name.
     */
    public name: string;
    /**
     * Source presentation to clone layoutSlide from.
     */
    public cloneFrom: string;
    /**
     * Position of cloning layout slide.
     */
    public cloneFromPosition: number;
    /**
     * Source presentation password.
     */
    public cloneFromPassword: string;
    /**
     * Storage source presentation to clone layoutSlide from.
     */
    public cloneFromStorage: string;
    /**
     * The presentation password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for PutLayoutSlide operation.
 */
export class PutLayoutSlideRequest {
    /**
     * The presentation name.
     */
    public name: string;
    /**
     * Index of the slide update to.
     */
    public slideIndex: number;
    /**
     * Gets or sets slideDto
     */
    public slideDto: model.LayoutSlide;
    /**
     * The presentation password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}

/**
 * Request model for GetMasterSlide operation.
 */
export class GetMasterSlideRequest {
    /**
     * The presentation name.
     */
    public name: string;
    /**
     * Gets or sets slideIndex
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for GetMasterSlidesList operation.
 */
export class GetMasterSlidesListRequest {
    /**
     * The presentation name.
     */
    public name: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for PostCopyMasterSlideFromSourcePresentation operation.
 */
export class PostCopyMasterSlideFromSourcePresentationRequest {
    /**
     * The presentation name.
     */
    public name: string;
    /**
     * Source presentation to clone masterSlide from.
     */
    public cloneFrom: string;
    /**
     * Position of cloning master slide.
     */
    public cloneFromPosition: number;
    /**
     * Source presentation password.
     */
    public cloneFromPassword: string;
    /**
     * Storage source presentation to clone masterSlide from.
     */
    public cloneFromStorage: string;
    /**
     * Apply cloned master slide to every existed slide. Optional parameter, false by default
     */
    public applyToAll: boolean;
    /**
     * The presentation password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}

/**
 * Request model for PostPresentationMerge operation.
 */
export class PostPresentationMergeRequest {
    /**
     * Original presentation name.
     */
    public name: string;
    /**
     * with a list of presentations to merge.
     */
    public request: model.PresentationsMergeRequest;
    /**
     * Original presentation password.
     */
    public password: string;
    /**
     * The storage.
     */
    public storage: string;
    /**
     * The folder.
     */
    public folder: string;
}
/**
 * Request model for PutPresentationMerge operation.
 */
export class PutPresentationMergeRequest {
    /**
     * Original presentation name.
     */
    public name: string;
    /**
     * with a list of presentations to merge.
     */
    public request: model.OrderedMergeRequest;
    /**
     * Original presentation password.
     */
    public password: string;
    /**
     * The storage.
     */
    public storage: string;
    /**
     * The folder.
     */
    public folder: string;
}

/**
 * Request model for DeleteNotesSlide operation.
 */
export class DeleteNotesSlideRequest {
    /**
     * The presentation name.
     */
    public name: string;
    /**
     * The slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlide operation.
 */
export class GetNotesSlideRequest {
    /**
     * The presentation name.
     */
    public name: string;
    /**
     * The slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for GetNotesSlideWithFormat operation.
 */
export class GetNotesSlideWithFormatRequest {
    /**
     * The presentation name.
     */
    public name: string;
    /**
     * The slide index.
     */
    public slideIndex: number;
    /**
     * Export format.
     */
    public format: number;
    /**
     * Gets or sets width
     */
    public width: number;
    /**
     * Gets or sets height
     */
    public height: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for PostAddNotesSlide operation.
 */
export class PostAddNotesSlideRequest {
    /**
     * The presentation name.
     */
    public name: string;
    /**
     * The slide index.
     */
    public slideIndex: number;
    /**
     * Gets or sets dto
     */
    public dto: model.NotesSlide;
    /**
     * Document password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for PutUpdateNotesSlide operation.
 */
export class PutUpdateNotesSlideRequest {
    /**
     * The presentation name.
     */
    public name: string;
    /**
     * The slide index.
     */
    public slideIndex: number;
    /**
     * Gets or sets dto
     */
    public dto: model.NotesSlide;
    /**
     * Document password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
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
    public format: number;
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
    public format: number;
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
    public format: number;
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
    public format: number;
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
     * The presentation name.
     */
    public name: string;
    /**
     * The slide index.
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * The presentation storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlidesCleanSlidesList operation.
 */
export class DeleteSlidesCleanSlidesListRequest {
    /**
     * The presentation name.
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
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for DeleteSlidesSlideBackground operation.
 */
export class DeleteSlidesSlideBackgroundRequest {
    /**
     * Gets or sets name
     */
    public name: string;
    /**
     * Gets or sets slideIndex
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Gets or sets folder
     */
    public folder: string;
    /**
     * Gets or sets storage
     */
    public storage: string;
}
/**
 * Request model for GetSlideWithFormat operation.
 */
export class GetSlideWithFormatRequest {
    /**
     * Gets or sets name
     */
    public name: string;
    /**
     * Gets or sets slideIndex
     */
    public slideIndex: number;
    /**
     * Gets or sets format
     */
    public format: number;
    /**
     * Gets or sets width
     */
    public width: number;
    /**
     * Gets or sets height
     */
    public height: number;
    /**
     * Gets or sets password
     */
    public password: string;
    /**
     * Gets or sets folder
     */
    public folder: string;
    /**
     * Gets or sets storage
     */
    public storage: string;
    /**
     * Gets or sets outPath
     */
    public outPath: string;
    /**
     * Gets or sets fontsFolder
     */
    public fontsFolder: string;
}
/**
 * Request model for GetSlidesSlide operation.
 */
export class GetSlidesSlideRequest {
    /**
     * Gets or sets name
     */
    public name: string;
    /**
     * Gets or sets slideIndex
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Gets or sets folder
     */
    public folder: string;
    /**
     * Gets or sets storage
     */
    public storage: string;
}
/**
 * Request model for GetSlidesSlideBackground operation.
 */
export class GetSlidesSlideBackgroundRequest {
    /**
     * Gets or sets name
     */
    public name: string;
    /**
     * Gets or sets slideIndex
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Gets or sets folder
     */
    public folder: string;
    /**
     * Gets or sets storage
     */
    public storage: string;
}
/**
 * Request model for GetSlidesSlideComments operation.
 */
export class GetSlidesSlideCommentsRequest {
    /**
     * Gets or sets name
     */
    public name: string;
    /**
     * Gets or sets slideIndex
     */
    public slideIndex: number;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Gets or sets folder
     */
    public folder: string;
    /**
     * Gets or sets storage
     */
    public storage: string;
}
/**
 * Request model for GetSlidesSlidesList operation.
 */
export class GetSlidesSlidesListRequest {
    /**
     * The presentation name.
     */
    public name: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * Presentation storage.
     */
    public storage: string;
}
/**
 * Request model for PostSlideSaveAs operation.
 */
export class PostSlideSaveAsRequest {
    /**
     * Gets or sets name
     */
    public name: string;
    /**
     * Gets or sets slideIndex
     */
    public slideIndex: number;
    /**
     * Gets or sets format
     */
    public format: number;
    /**
     * export options
     */
    public options: model.ExportOptions;
    /**
     * Gets or sets width
     */
    public width: number;
    /**
     * Gets or sets height
     */
    public height: number;
    /**
     * Gets or sets password
     */
    public password: string;
    /**
     * Gets or sets folder
     */
    public folder: string;
    /**
     * Gets or sets storage
     */
    public storage: string;
    /**
     * Gets or sets outPath
     */
    public outPath: string;
    /**
     * Gets or sets fontsFolder
     */
    public fontsFolder: string;
}
/**
 * Request model for PostSlidesReorderPosition operation.
 */
export class PostSlidesReorderPositionRequest {
    /**
     * The presentation name.
     */
    public name: string;
    /**
     * The new presentation slide position.
     */
    public oldPosition: number;
    /**
     * The new presentation slide position.
     */
    public newPosition: number;
    /**
     * The presentation slide to copy.
     */
    public slideToCopy: number;
    /**
     * The presentation slide position.
     */
    public position: number;
    /**
     * The presentation slide to clone.
     */
    public slideToClone: number;
    /**
     * The source presentation.
     */
    public source: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * The presentation storage.
     */
    public storage: string;
    /**
     * Alias of layout slide for new slide. Alias could be the type of layout, name of layout slide or index
     */
    public layoutAlias: string;
}
/**
 * Request model for PutSlidesSlide operation.
 */
export class PutSlidesSlideRequest {
    /**
     * Name of the presentation.
     */
    public name: string;
    /**
     * Index of the slide update to.
     */
    public slideIndex: number;
    /**
     * DTO of the slide.
     */
    public slideDto: model.Slide;
    /**
     * Gets or sets password
     */
    public password: string;
    /**
     * The presentation folder.
     */
    public folder: string;
    /**
     * The presentation storage.
     */
    public storage: string;
}
/**
 * Request model for PutSlidesSlideBackground operation.
 */
export class PutSlidesSlideBackgroundRequest {
    /**
     * Gets or sets name
     */
    public name: string;
    /**
     * Gets or sets slideIndex
     */
    public slideIndex: number;
    /**
     * Gets or sets background
     */
    public background: model.SlideBackground;
    /**
     * Gets or sets folder
     */
    public folder: string;
    /**
     * Document password.
     */
    public password: string;
    /**
     * Gets or sets storage
     */
    public storage: string;
    /**
     * Gets or sets color
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
