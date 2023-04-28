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


/**
 * Math element.
 */
export class MathElement {

    type?: MathElement.TypeEnum;

}
export namespace MathElement {
    export enum TypeEnum {
        Accent = <any> 'Accent',
        Array = <any> 'Array',
        Bar = <any> 'Bar',
        Block = <any> 'Block',
        BorderBox = <any> 'BorderBox',
        Box = <any> 'Box',
        Delimiter = <any> 'Delimiter',
        Text = <any> 'Text',
        Fraction = <any> 'Fraction',
        Function = <any> 'Function',
        GroupingCharacter = <any> 'GroupingCharacter',
        LeftSubSuperscriptElement = <any> 'LeftSubSuperscriptElement',
        Limit = <any> 'Limit',
        Matrix = <any> 'Matrix',
        NaryOperator = <any> 'NaryOperator',
        Radical = <any> 'Radical',
        RightSubSuperscriptElement = <any> 'RightSubSuperscriptElement',
        SubscriptElement = <any> 'SubscriptElement',
        SuperscriptElement = <any> 'SuperscriptElement'
    }
}

/**
 * Specifies the accent function, consisting of a base and a combining diacritical mark
 */
export class AccentElement extends MathElement {
    constructor() {
        super();
        this.type = AccentElement.TypeEnum.Accent;
    }

    /**
     * The argument to which the accent was applied
     */
    base?: MathElement;

    /**
     * Accent Character
     */
    character?: string;

}
export namespace AccentElement {
}

/**
 * A set of properties specifying which access permissions should be granted when the document is opened with user access.
 */
export class AccessPermissions {

    /**
     * The user may print the document (possibly not at the highest quality level, depending on whether bit HighQualityPrint is also set).
     */
    printDocument: boolean;

    /**
     * The user may modify the contents of the document by operations other than those controlled by bits AddOrModifyFields, FillExistingFields, AssembleDocument.
     */
    modifyContent: boolean;

    /**
     * The user may copy or otherwise extract text and graphics from the document by operations other than that controlled by bit ExtractTextAndGraphics.
     */
    copyTextAndGraphics: boolean;

    /**
     * The user may add or modify text annotations, fill in interactive form fields, and, if bit ModifyContent is also set, create or modify interactive form fields (including signature fields).
     */
    addOrModifyFields: boolean;

    /**
     * The user may fill in existing interactive form fields (including signature fields), even if bit AddOrModifyFields is clear.
     */
    fillExistingFields: boolean;

    /**
     * The user may extract text and graphics in support of accessibility to users with disabilities or for other purposes.
     */
    extractTextAndGraphics: boolean;

    /**
     * The user may assemble the document (insert, rotate, or delete pages and create bookmarks or thumbnail images), even if bit ModifyContent is clear.
     */
    assembleDocument: boolean;

    /**
     * The user may print the document to a representation from which a faithful digital copy of the PDF content could be generated. When this bit is clear (and bit PrintDocument is set), printing is limited to a low-level representation of the appearance, possibly of degraded quality.
     */
    highQualityPrint: boolean;

}

/**
 * Represents task for pipeline.
 */
export class Task {

    type?: Task.TypeEnum;

}
export namespace Task {
    export enum TypeEnum {
        Save = <any> 'Save',
        SaveSlide = <any> 'SaveSlide',
        SaveShape = <any> 'SaveShape',
        AddSlide = <any> 'AddSlide',
        AddMasterSlide = <any> 'AddMasterSlide',
        AddLayoutSlide = <any> 'AddLayoutSlide',
        RemoveSlide = <any> 'RemoveSlide',
        ReoderSlide = <any> 'ReoderSlide',
        Merge = <any> 'Merge',
        UpdateBackground = <any> 'UpdateBackground',
        ResetSlide = <any> 'ResetSlide',
        AddShape = <any> 'AddShape',
        RemoveShape = <any> 'RemoveShape',
        UpdateShape = <any> 'UpdateShape',
        ReplaceText = <any> 'ReplaceText'
    }
}

/**
 * Add layout slide task.
 */
export class AddLayoutSlide extends Task {
    constructor() {
        super();
        this.type = AddLayoutSlide.TypeEnum.AddLayoutSlide;
    }

    /**
     * Source file.
     */
    cloneFromFile?: InputFile;

    /**
     * Source layout slide position.
     */
    cloneFromPosition: number;

}
export namespace AddLayoutSlide {
}

/**
 * Add master slide task.
 */
export class AddMasterSlide extends Task {
    constructor() {
        super();
        this.type = AddMasterSlide.TypeEnum.AddMasterSlide;
    }

    /**
     * Source presentation clone from.
     */
    cloneFromFile?: InputFile;

    /**
     * Index of slide to clone.
     */
    cloneFromPosition: number;

    /**
     * True if cloned master slide is applied to all slides.
     */
    applyToAll: boolean;

}
export namespace AddMasterSlide {
}

/**
 * Add shape task.
 */
export class AddShape extends Task {
    constructor() {
        super();
        this.type = AddShape.TypeEnum.AddShape;
    }

    /**
     * Shape DTO.
     */
    shape?: ShapeBase;

    /**
     * Shape path for a grouped shape or smart art shape.
     */
    shapePath?: string;

}
export namespace AddShape {
}

/**
 * Add slide task.
 */
export class AddSlide extends Task {
    constructor() {
        super();
        this.type = AddSlide.TypeEnum.AddSlide;
    }

    /**
     * File to clone a slide from.
     */
    cloneFromFile?: InputFile;

    /**
     * Position of the slide to clone.
     */
    cloneFromPosition: number;

    /**
     * Position at which to insert the slide.
     */
    position: number;

    /**
     * Alias of layout (href, index or type). If value is null a blank slide is added.
     */
    layoutAlias?: string;

}
export namespace AddSlide {
}

/**
 * Image transform effect
 */
export class ImageTransformEffect {

    type?: ImageTransformEffect.TypeEnum;

}
export namespace ImageTransformEffect {
    export enum TypeEnum {
        AlphaBiLevel = <any> 'AlphaBiLevel',
        AlphaCeiling = <any> 'AlphaCeiling',
        AlphaFloor = <any> 'AlphaFloor',
        AlphaInverse = <any> 'AlphaInverse',
        AlphaModulate = <any> 'AlphaModulate',
        AlphaModulateFixed = <any> 'AlphaModulateFixed',
        AlphaReplace = <any> 'AlphaReplace',
        BiLevel = <any> 'BiLevel',
        Blur = <any> 'Blur',
        ColorChange = <any> 'ColorChange',
        ColorReplace = <any> 'ColorReplace',
        Duotone = <any> 'Duotone',
        FillOverlay = <any> 'FillOverlay',
        GrayScale = <any> 'GrayScale',
        Hsl = <any> 'Hsl',
        Luminance = <any> 'Luminance',
        Tint = <any> 'Tint'
    }
}

/**
 * Represents an Alpha Bi-Level effect.
 */
export class AlphaBiLevelEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = AlphaBiLevelEffect.TypeEnum.AlphaBiLevel;
    }

    /**
     * Returns effect threshold.
     */
    threshold: number;

}
export namespace AlphaBiLevelEffect {
}

/**
 * Represents an Alpha Ceiling effect.
 */
export class AlphaCeilingEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = AlphaCeilingEffect.TypeEnum.AlphaCeiling;
    }

}
export namespace AlphaCeilingEffect {
}

/**
 * /// Represents an Alpha Floor effect.
 */
export class AlphaFloorEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = AlphaFloorEffect.TypeEnum.AlphaFloor;
    }

}
export namespace AlphaFloorEffect {
}

/**
 * Represents an Alpha Inverse effect.
 */
export class AlphaInverseEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = AlphaInverseEffect.TypeEnum.AlphaInverse;
    }

}
export namespace AlphaInverseEffect {
}

/**
 * Represents an Alpha Modulate effect.
 */
export class AlphaModulateEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = AlphaModulateEffect.TypeEnum.AlphaModulate;
    }

}
export namespace AlphaModulateEffect {
}

/**
 * Represents an Alpha Modulate Fixed effect.
 */
export class AlphaModulateFixedEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = AlphaModulateFixedEffect.TypeEnum.AlphaModulateFixed;
    }

    /**
     * Returns an amount of effect in percents.    
     */
    amount: number;

}
export namespace AlphaModulateFixedEffect {
}

/**
 * Represents an Alpha Replace Effect effect.
 */
export class AlphaReplaceEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = AlphaReplaceEffect.TypeEnum.AlphaReplace;
    }

    /**
     * The new opacity value.
     */
    alpha: number;

}
export namespace AlphaReplaceEffect {
}

/**
 * Represents response for ApiInfo  DTO
 */
export class ApiInfo {

    /**
     * Product name.
     */
    name?: string;

    /**
     * API version.
     */
    version?: string;

}

/**
 * Represents segment of geometry path
 */
export class PathSegment {

    type?: PathSegment.TypeEnum;

}
export namespace PathSegment {
    export enum TypeEnum {
        Close = <any> 'Close',
        MoveTo = <any> 'MoveTo',
        LineTo = <any> 'LineTo',
        ArcTo = <any> 'ArcTo',
        QuadBezierTo = <any> 'QuadBezierTo',
        CubicBezierTo = <any> 'CubicBezierTo'
    }
}

/**
 * Arc segment of the geometry path
 */
export class ArcToPathSegment extends PathSegment {
    constructor() {
        super();
        this.type = ArcToPathSegment.TypeEnum.ArcTo;
    }

    /**
     * Width of the rectangle
     */
    width: number;

    /**
     * Height of the rectangle
     */
    height: number;

    /**
     * Start angle
     */
    startAngle: number;

    /**
     * Sweep angle
     */
    sweepAngle: number;

}
export namespace ArcToPathSegment {
}

/**
 * An array of elements.
 */
export class ArrayElement extends MathElement {
    constructor() {
        super();
        this.type = ArrayElement.TypeEnum.Array;
    }

    /**
     * Arguments
     */
    arguments?: Array<MathElement>;

    /**
     * Specifies alignment of the array relative to surrounding text
     */
    baseJustification?: ArrayElement.BaseJustificationEnum;

    /**
     * Maximum Distribution
     */
    maximumDistribution?: boolean;

    /**
     * Object Distribution
     */
    objectDistribution?: boolean;

    /**
     * The type of vertical spacing between array elements
     */
    rowSpacingRule?: ArrayElement.RowSpacingRuleEnum;

    /**
     * Spacing between rows of an array
     */
    rowSpacing?: number;

}
export namespace ArrayElement {
    export enum BaseJustificationEnum {
        NotDefined = <any> 'NotDefined',
        Top = <any> 'Top',
        Center = <any> 'Center',
        Bottom = <any> 'Bottom'
    }
    export enum RowSpacingRuleEnum {
        SingleLineGap = <any> 'SingleLineGap',
        OneAndAHalfLineGap = <any> 'OneAndAHalfLineGap',
        TwoLineGap = <any> 'TwoLineGap',
        Exactly = <any> 'Exactly',
        Multiple = <any> 'Multiple'
    }
}

/**
 * Arrow head properties.
 */
export class ArrowHeadProperties {

    /**
     * Length.
     */
    length?: ArrowHeadProperties.LengthEnum;

    /**
     * Style.
     */
    style?: ArrowHeadProperties.StyleEnum;

    /**
     * Width.
     */
    width?: ArrowHeadProperties.WidthEnum;

}
export namespace ArrowHeadProperties {
    export enum LengthEnum {
        Short = <any> 'Short',
        Medium = <any> 'Medium',
        Long = <any> 'Long',
        NotDefined = <any> 'NotDefined'
    }
    export enum StyleEnum {
        None = <any> 'None',
        Triangle = <any> 'Triangle',
        Stealth = <any> 'Stealth',
        Diamond = <any> 'Diamond',
        Oval = <any> 'Oval',
        Open = <any> 'Open',
        NotDefined = <any> 'NotDefined'
    }
    export enum WidthEnum {
        Narrow = <any> 'Narrow',
        Medium = <any> 'Medium',
        Wide = <any> 'Wide',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Base class for all Slide's DTO objects 
 */
export class ResourceBase {

    /**
     * Gets or sets the link to this resource.
     */
    selfUri?: ResourceUri;

    /**
     * List of alternate links.
     */
    alternateLinks?: Array<ResourceUri>;

}

/**
 * Slide shape.
 */
export class ShapeBase extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Gets or sets the name.
     */
    name?: string;

    /**
     * Gets or sets the width.
     */
    width?: number;

    /**
     * Gets or sets the height.
     */
    height?: number;

    /**
     * Gets or sets the alternative text.
     */
    alternativeText?: string;

    /**
     * The title of alternative text associated with the shape.
     */
    alternativeTextTitle?: string;

    /**
     * Gets or sets a value indicating whether this ShapeBase is hidden.
     */
    hidden?: boolean;

    /**
     * Gets or sets the X
     */
    x?: number;

    /**
     * Gets or sets the Y.
     */
    y?: number;

    /**
     * Gets z-order position of shape
     */
    zOrderPosition: number;

    /**
     * Gets or sets the fill format.
     */
    fillFormat?: FillFormat;

    /**
     * Gets or sets the effect format.
     */
    effectFormat?: EffectFormat;

    /**
     * Gets or sets the 3D format
     */
    threeDFormat?: ThreeDFormat;

    /**
     * Gets or sets the line format.
     */
    lineFormat?: LineFormat;

    /**
     * Hyperlink defined for mouse click.
     */
    hyperlinkClick?: Hyperlink;

    /**
     * Hyperlink defined for mouse over.
     */
    hyperlinkMouseOver?: Hyperlink;

    type?: ShapeBase.TypeEnum;

}
export namespace ShapeBase {
    export enum TypeEnum {
        Shape = <any> 'Shape',
        Chart = <any> 'Chart',
        Table = <any> 'Table',
        PictureFrame = <any> 'PictureFrame',
        VideoFrame = <any> 'VideoFrame',
        AudioFrame = <any> 'AudioFrame',
        SmartArt = <any> 'SmartArt',
        OleObjectFrame = <any> 'OleObjectFrame',
        GroupShape = <any> 'GroupShape',
        GraphicalObject = <any> 'GraphicalObject',
        Connector = <any> 'Connector',
        SmartArtShape = <any> 'SmartArtShape',
        ZoomFrame = <any> 'ZoomFrame',
        SectionZoomFrame = <any> 'SectionZoomFrame',
        SummaryZoomFrame = <any> 'SummaryZoomFrame',
        SummaryZoomSection = <any> 'SummaryZoomSection'
    }
}

/**
 * Represents GeometryShape resource.
 */
export class GeometryShape extends ShapeBase {
    constructor() {
        super();
    }

    /**
     * Combined shape type.
     */
    shapeType: GeometryShape.ShapeTypeEnum;

}
export namespace GeometryShape {
    export enum ShapeTypeEnum {
        Custom = <any> 'Custom',
        Line = <any> 'Line',
        LineInverse = <any> 'LineInverse',
        Triangle = <any> 'Triangle',
        RightTriangle = <any> 'RightTriangle',
        Rectangle = <any> 'Rectangle',
        Diamond = <any> 'Diamond',
        Parallelogram = <any> 'Parallelogram',
        Trapezoid = <any> 'Trapezoid',
        NonIsoscelesTrapezoid = <any> 'NonIsoscelesTrapezoid',
        Pentagon = <any> 'Pentagon',
        Hexagon = <any> 'Hexagon',
        Heptagon = <any> 'Heptagon',
        Octagon = <any> 'Octagon',
        Decagon = <any> 'Decagon',
        Dodecagon = <any> 'Dodecagon',
        FourPointedStar = <any> 'FourPointedStar',
        FivePointedStar = <any> 'FivePointedStar',
        SixPointedStar = <any> 'SixPointedStar',
        SevenPointedStar = <any> 'SevenPointedStar',
        EightPointedStar = <any> 'EightPointedStar',
        TenPointedStar = <any> 'TenPointedStar',
        TwelvePointedStar = <any> 'TwelvePointedStar',
        SixteenPointedStar = <any> 'SixteenPointedStar',
        TwentyFourPointedStar = <any> 'TwentyFourPointedStar',
        ThirtyTwoPointedStar = <any> 'ThirtyTwoPointedStar',
        RoundCornerRectangle = <any> 'RoundCornerRectangle',
        OneRoundCornerRectangle = <any> 'OneRoundCornerRectangle',
        TwoSamesideRoundCornerRectangle = <any> 'TwoSamesideRoundCornerRectangle',
        TwoDiagonalRoundCornerRectangle = <any> 'TwoDiagonalRoundCornerRectangle',
        OneSnipOneRoundCornerRectangle = <any> 'OneSnipOneRoundCornerRectangle',
        OneSnipCornerRectangle = <any> 'OneSnipCornerRectangle',
        TwoSamesideSnipCornerRectangle = <any> 'TwoSamesideSnipCornerRectangle',
        TwoDiagonalSnipCornerRectangle = <any> 'TwoDiagonalSnipCornerRectangle',
        Plaque = <any> 'Plaque',
        Ellipse = <any> 'Ellipse',
        Teardrop = <any> 'Teardrop',
        HomePlate = <any> 'HomePlate',
        Chevron = <any> 'Chevron',
        PieWedge = <any> 'PieWedge',
        Pie = <any> 'Pie',
        BlockArc = <any> 'BlockArc',
        Donut = <any> 'Donut',
        NoSmoking = <any> 'NoSmoking',
        RightArrow = <any> 'RightArrow',
        LeftArrow = <any> 'LeftArrow',
        UpArrow = <any> 'UpArrow',
        DownArrow = <any> 'DownArrow',
        StripedRightArrow = <any> 'StripedRightArrow',
        NotchedRightArrow = <any> 'NotchedRightArrow',
        BentUpArrow = <any> 'BentUpArrow',
        LeftRightArrow = <any> 'LeftRightArrow',
        UpDownArrow = <any> 'UpDownArrow',
        LeftUpArrow = <any> 'LeftUpArrow',
        LeftRightUpArrow = <any> 'LeftRightUpArrow',
        QuadArrow = <any> 'QuadArrow',
        CalloutLeftArrow = <any> 'CalloutLeftArrow',
        CalloutRightArrow = <any> 'CalloutRightArrow',
        CalloutUpArrow = <any> 'CalloutUpArrow',
        CalloutDownArrow = <any> 'CalloutDownArrow',
        CalloutLeftRightArrow = <any> 'CalloutLeftRightArrow',
        CalloutUpDownArrow = <any> 'CalloutUpDownArrow',
        CalloutQuadArrow = <any> 'CalloutQuadArrow',
        BentArrow = <any> 'BentArrow',
        UTurnArrow = <any> 'UTurnArrow',
        CircularArrow = <any> 'CircularArrow',
        LeftCircularArrow = <any> 'LeftCircularArrow',
        LeftRightCircularArrow = <any> 'LeftRightCircularArrow',
        CurvedRightArrow = <any> 'CurvedRightArrow',
        CurvedLeftArrow = <any> 'CurvedLeftArrow',
        CurvedUpArrow = <any> 'CurvedUpArrow',
        CurvedDownArrow = <any> 'CurvedDownArrow',
        SwooshArrow = <any> 'SwooshArrow',
        Cube = <any> 'Cube',
        Can = <any> 'Can',
        LightningBolt = <any> 'LightningBolt',
        Heart = <any> 'Heart',
        Sun = <any> 'Sun',
        Moon = <any> 'Moon',
        SmileyFace = <any> 'SmileyFace',
        IrregularSeal1 = <any> 'IrregularSeal1',
        IrregularSeal2 = <any> 'IrregularSeal2',
        FoldedCorner = <any> 'FoldedCorner',
        Bevel = <any> 'Bevel',
        Frame = <any> 'Frame',
        HalfFrame = <any> 'HalfFrame',
        Corner = <any> 'Corner',
        DiagonalStripe = <any> 'DiagonalStripe',
        Chord = <any> 'Chord',
        CurvedArc = <any> 'CurvedArc',
        LeftBracket = <any> 'LeftBracket',
        RightBracket = <any> 'RightBracket',
        LeftBrace = <any> 'LeftBrace',
        RightBrace = <any> 'RightBrace',
        BracketPair = <any> 'BracketPair',
        BracePair = <any> 'BracePair',
        StraightConnector1 = <any> 'StraightConnector1',
        BentConnector2 = <any> 'BentConnector2',
        BentConnector3 = <any> 'BentConnector3',
        BentConnector4 = <any> 'BentConnector4',
        BentConnector5 = <any> 'BentConnector5',
        CurvedConnector2 = <any> 'CurvedConnector2',
        CurvedConnector3 = <any> 'CurvedConnector3',
        CurvedConnector4 = <any> 'CurvedConnector4',
        CurvedConnector5 = <any> 'CurvedConnector5',
        Callout1 = <any> 'Callout1',
        Callout2 = <any> 'Callout2',
        Callout3 = <any> 'Callout3',
        Callout1WithAccent = <any> 'Callout1WithAccent',
        Callout2WithAccent = <any> 'Callout2WithAccent',
        Callout3WithAccent = <any> 'Callout3WithAccent',
        Callout1WithBorder = <any> 'Callout1WithBorder',
        Callout2WithBorder = <any> 'Callout2WithBorder',
        Callout3WithBorder = <any> 'Callout3WithBorder',
        Callout1WithBorderAndAccent = <any> 'Callout1WithBorderAndAccent',
        Callout2WithBorderAndAccent = <any> 'Callout2WithBorderAndAccent',
        Callout3WithBorderAndAccent = <any> 'Callout3WithBorderAndAccent',
        CalloutWedgeRectangle = <any> 'CalloutWedgeRectangle',
        CalloutWedgeRoundRectangle = <any> 'CalloutWedgeRoundRectangle',
        CalloutWedgeEllipse = <any> 'CalloutWedgeEllipse',
        CalloutCloud = <any> 'CalloutCloud',
        Cloud = <any> 'Cloud',
        Ribbon = <any> 'Ribbon',
        Ribbon2 = <any> 'Ribbon2',
        EllipseRibbon = <any> 'EllipseRibbon',
        EllipseRibbon2 = <any> 'EllipseRibbon2',
        LeftRightRibbon = <any> 'LeftRightRibbon',
        VerticalScroll = <any> 'VerticalScroll',
        HorizontalScroll = <any> 'HorizontalScroll',
        Wave = <any> 'Wave',
        DoubleWave = <any> 'DoubleWave',
        Plus = <any> 'Plus',
        ProcessFlow = <any> 'ProcessFlow',
        DecisionFlow = <any> 'DecisionFlow',
        InputOutputFlow = <any> 'InputOutputFlow',
        PredefinedProcessFlow = <any> 'PredefinedProcessFlow',
        InternalStorageFlow = <any> 'InternalStorageFlow',
        DocumentFlow = <any> 'DocumentFlow',
        MultiDocumentFlow = <any> 'MultiDocumentFlow',
        TerminatorFlow = <any> 'TerminatorFlow',
        PreparationFlow = <any> 'PreparationFlow',
        ManualInputFlow = <any> 'ManualInputFlow',
        ManualOperationFlow = <any> 'ManualOperationFlow',
        ConnectorFlow = <any> 'ConnectorFlow',
        PunchedCardFlow = <any> 'PunchedCardFlow',
        PunchedTapeFlow = <any> 'PunchedTapeFlow',
        SummingJunctionFlow = <any> 'SummingJunctionFlow',
        OrFlow = <any> 'OrFlow',
        CollateFlow = <any> 'CollateFlow',
        SortFlow = <any> 'SortFlow',
        ExtractFlow = <any> 'ExtractFlow',
        MergeFlow = <any> 'MergeFlow',
        OfflineStorageFlow = <any> 'OfflineStorageFlow',
        OnlineStorageFlow = <any> 'OnlineStorageFlow',
        MagneticTapeFlow = <any> 'MagneticTapeFlow',
        MagneticDiskFlow = <any> 'MagneticDiskFlow',
        MagneticDrumFlow = <any> 'MagneticDrumFlow',
        DisplayFlow = <any> 'DisplayFlow',
        DelayFlow = <any> 'DelayFlow',
        AlternateProcessFlow = <any> 'AlternateProcessFlow',
        OffPageConnectorFlow = <any> 'OffPageConnectorFlow',
        BlankButton = <any> 'BlankButton',
        HomeButton = <any> 'HomeButton',
        HelpButton = <any> 'HelpButton',
        InformationButton = <any> 'InformationButton',
        ForwardOrNextButton = <any> 'ForwardOrNextButton',
        BackOrPreviousButton = <any> 'BackOrPreviousButton',
        EndButton = <any> 'EndButton',
        BeginningButton = <any> 'BeginningButton',
        ReturnButton = <any> 'ReturnButton',
        DocumentButton = <any> 'DocumentButton',
        SoundButton = <any> 'SoundButton',
        MovieButton = <any> 'MovieButton',
        Gear6 = <any> 'Gear6',
        Gear9 = <any> 'Gear9',
        Funnel = <any> 'Funnel',
        PlusMath = <any> 'PlusMath',
        MinusMath = <any> 'MinusMath',
        MultiplyMath = <any> 'MultiplyMath',
        DivideMath = <any> 'DivideMath',
        EqualMath = <any> 'EqualMath',
        NotEqualMath = <any> 'NotEqualMath',
        CornerTabs = <any> 'CornerTabs',
        SquareTabs = <any> 'SquareTabs',
        PlaqueTabs = <any> 'PlaqueTabs',
        ChartX = <any> 'ChartX',
        ChartStar = <any> 'ChartStar',
        ChartPlus = <any> 'ChartPlus',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Represents AudioFrame resource.
 */
export class AudioFrame extends GeometryShape {
    constructor() {
        super();
        this.type = AudioFrame.TypeEnum.AudioFrame;
    }

    /**
     * Returns or sets a last track index.
     */
    audioCdEndTrack?: number;

    /**
     * Returns or sets a last track time.
     */
    audioCdEndTrackTime?: number;

    /**
     * Returns or sets a start track index.
     */
    audioCdStartTrack?: number;

    /**
     * Returns or sets a start track time. 
     */
    audioCdStartTrackTime?: number;

    /**
     * Determines whether a sound is embedded to a presentation.
     */
    embedded?: boolean;

    /**
     * Determines whether an AudioFrame is hidden.
     */
    hideAtShowing?: boolean;

    /**
     * Determines whether an audio is looped. 
     */
    playLoopMode?: boolean;

    /**
     * Returns or sets the audio play mode.
     */
    playMode?: AudioFrame.PlayModeEnum;

    /**
     * Returns or sets the audio volume.
     */
    volume?: AudioFrame.VolumeEnum;

    /**
     * Audio data encoded in base64.
     */
    base64Data?: string;

    /**
     * Determines whether an audio is playing across the slides.
     */
    playAcrossSlides?: boolean;

    /**
     * Determines whether audio is automatically rewound to start after playing.
     */
    rewindAudio?: boolean;

    /**
     * Picture fill format.
     */
    pictureFillFormat?: PictureFill;

}
export namespace AudioFrame {
    export enum PlayModeEnum {
        Auto = <any> 'Auto',
        OnClick = <any> 'OnClick',
        AllSlides = <any> 'AllSlides',
        InClickSequence = <any> 'InClickSequence',
        Mixed = <any> 'Mixed'
    }
    export enum VolumeEnum {
        Mute = <any> 'Mute',
        Low = <any> 'Low',
        Medium = <any> 'Medium',
        Loud = <any> 'Loud',
        Mixed = <any> 'Mixed'
    }
}

/**
 * Represents chart axes
 */
export class Axes {

    /**
     * Gets or sets the horizontal axis.
     */
    horizontalAxis?: Axis;

    /**
     * Gets or sets the vertical axis.
     */
    verticalAxis?: Axis;

    /**
     * Gets or sets the secondary horizontal axis.
     */
    secondaryHorizontalAxis?: Axis;

    /**
     * Gets or sets the secondary vertical axis.
     */
    secondaryVerticalAxis?: Axis;

}

/**
 * Represents a chart axis
 */
export class Axis {

    /**
     * True if the axis is visible
     */
    isVisible?: boolean;

    /**
     * True if the axis has a visible title
     */
    hasTitle?: boolean;

    /**
     * Axis position
     */
    position?: Axis.PositionEnum;

    /**
     * The scaling value of the display units for the value axis
     */
    displayUnit?: Axis.DisplayUnitEnum;

    /**
     * The smallest time unit that is represented on the date axis
     */
    baseUnitScale?: Axis.BaseUnitScaleEnum;

    /**
     * True the major unit of the axis is automatically assigned
     */
    isAutomaticMajorUnit?: boolean;

    /**
     * The major units for the date or value axis
     */
    majorUnit?: number;

    /**
     * The major unit scale for the date axis
     */
    majorUnitScale?: Axis.MajorUnitScaleEnum;

    /**
     * The type of major tick mark for the specified axis
     */
    majorTickMark?: Axis.MajorTickMarkEnum;

    /**
     * True the minor unit of the axis is automatically assigned
     */
    isAutomaticMinorUnit?: boolean;

    /**
     * The minor units for the date or value axis
     */
    minorUnit?: number;

    /**
     * The minor unit scale for the date axis
     */
    minorUnitScale?: Axis.MinorUnitScaleEnum;

    /**
     * The type of minor tick mark for the specified axis
     */
    minorTickMark?: Axis.MinorTickMarkEnum;

    /**
     * True if the max value is automatically assigned
     */
    isAutomaticMaxValue?: boolean;

    /**
     * The maximum value on the value axis
     */
    maxValue?: number;

    /**
     * True if the min value is automatically assigned
     */
    isAutomaticMinValue?: boolean;

    /**
     * The minimum value on the value axis
     */
    minValue?: number;

    /**
     * True if the value axis scale type is logarithmic
     */
    isLogarithmic?: boolean;

    /**
     * The logarithmic base. Default value is 10
     */
    logBase?: number;

    /**
     * The type of the category axis
     */
    categoryAxisType?: Axis.CategoryAxisTypeEnum;

    /**
     * True if the value axis crosses the category axis between categories. This property applies only to category axes, and it doesn't apply to 3-D charts
     */
    axisBetweenCategories?: boolean;

    /**
     * The distance of labels from the axis. Applied to category or date axis. Value must be between 0% and 1000%.             
     */
    labelOffset?: number;

    /**
     * True if MS PowerPoint plots data points from last to first
     */
    isPlotOrderReversed?: boolean;

    /**
     * True if the format is linked to source data
     */
    isNumberFormatLinkedToSource?: boolean;

    /**
     * the format string for the Axis Labels
     */
    numberFormat?: string;

    /**
     * The CrossType on the specified axis where the other axis crosses
     */
    crossType?: Axis.CrossTypeEnum;

    /**
     * The point on the axis where the perpendicular axis crosses it
     */
    crossAt?: number;

    /**
     * True for automatic tick marks spacing value
     */
    isAutomaticTickMarksSpacing?: boolean;

    /**
     * Specifies how many tick marks shall be skipped before the next one shall be drawn. Applied to category or series axis.
     */
    tickMarksSpacing?: number;

    /**
     * True for automatic tick label spacing value
     */
    isAutomaticTickLabelSpacing?: boolean;

    /**
     * Specifies how many tick labels to skip between label that is drawn.
     */
    tickLabelSpacing?: number;

    /**
     * The position of tick-mark labels on the specified axis.
     */
    tickLabelPosition?: Axis.TickLabelPositionEnum;

    /**
     * Represents the rotation angle of tick labels.
     */
    tickLabelRotationAngle?: number;

    /**
     * Get or sets the fill format.
     */
    fillFormat?: FillFormat;

    /**
     * Get or sets the effect format.
     */
    effectFormat?: EffectFormat;

    /**
     * Get or sets the line format.
     */
    lineFormat?: LineFormat;

    /**
     * Get or sets the format of major grid lines.
     */
    majorGridLinesFormat?: ChartLinesFormat;

    /**
     * Get or sets the format of major grid lines.
     */
    minorGridLinesFormat?: ChartLinesFormat;

}
export namespace Axis {
    export enum PositionEnum {
        Bottom = <any> 'Bottom',
        Left = <any> 'Left',
        Right = <any> 'Right',
        Top = <any> 'Top'
    }
    export enum DisplayUnitEnum {
        None = <any> 'None',
        Hundreds = <any> 'Hundreds',
        Thousands = <any> 'Thousands',
        TenThousands = <any> 'TenThousands',
        HundredThousands = <any> 'HundredThousands',
        Millions = <any> 'Millions',
        TenMillions = <any> 'TenMillions',
        HundredMillions = <any> 'HundredMillions',
        Billions = <any> 'Billions',
        Trillions = <any> 'Trillions',
        CustomValue = <any> 'CustomValue'
    }
    export enum BaseUnitScaleEnum {
        None = <any> 'None',
        Days = <any> 'Days',
        Months = <any> 'Months',
        Years = <any> 'Years'
    }
    export enum MajorUnitScaleEnum {
        None = <any> 'None',
        Days = <any> 'Days',
        Months = <any> 'Months',
        Years = <any> 'Years'
    }
    export enum MajorTickMarkEnum {
        Cross = <any> 'Cross',
        Inside = <any> 'Inside',
        None = <any> 'None',
        Outside = <any> 'Outside'
    }
    export enum MinorUnitScaleEnum {
        None = <any> 'None',
        Days = <any> 'Days',
        Months = <any> 'Months',
        Years = <any> 'Years'
    }
    export enum MinorTickMarkEnum {
        Cross = <any> 'Cross',
        Inside = <any> 'Inside',
        None = <any> 'None',
        Outside = <any> 'Outside'
    }
    export enum CategoryAxisTypeEnum {
        Text = <any> 'Text',
        Date = <any> 'Date'
    }
    export enum CrossTypeEnum {
        AxisCrossesAtZero = <any> 'AxisCrossesAtZero',
        Maximum = <any> 'Maximum',
        Custom = <any> 'Custom'
    }
    export enum TickLabelPositionEnum {
        High = <any> 'High',
        Low = <any> 'Low',
        NextTo = <any> 'NextTo',
        None = <any> 'None'
    }
}

/**
 * Defines axis type.
 */
    /**
    * Defines axis type.
    */
export enum AxisType {
    'HorizontalAxis' = <any> 'HorizontalAxis',
    'VerticalAxis' = <any> 'VerticalAxis',
    'SecondaryHorizontalAxis' = <any> 'SecondaryHorizontalAxis',
    'SecondaryVerticalAxis' = <any> 'SecondaryVerticalAxis'
}

/**
 * Specifies the bar function, consisting of a base argument and an overbar or underbar
 */
export class BarElement extends MathElement {
    constructor() {
        super();
        this.type = BarElement.TypeEnum.Bar;
    }

    /**
     * Base
     */
    base?: MathElement;

    /**
     * Position of the bar line.             
     */
    position?: BarElement.PositionEnum;

}
export namespace BarElement {
    export enum PositionEnum {
        NotDefined = <any> 'NotDefined',
        Top = <any> 'Top',
        Bottom = <any> 'Bottom'
    }
}

/**
 * Represents abstract input file source for pipeline.
 */
export class InputFile {

    /**
     * Get or sets password to open document.
     */
    password?: string;

    type?: InputFile.TypeEnum;

}
export namespace InputFile {
    export enum TypeEnum {
        Path = <any> 'Path',
        Request = <any> 'Request',
        Base64 = <any> 'Base64'
    }
}

/**
 * Represents base64 inline encoded file.
 */
export class Base64InputFile extends InputFile {
    constructor() {
        super();
        this.type = Base64InputFile.TypeEnum.Base64;
    }

    /**
     * Get or sets base64 data.
     */
    data?: string;

}
export namespace Base64InputFile {
}

/**
 * Represents an BiLevel effect.
 */
export class BiLevelEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = BiLevelEffect.TypeEnum.BiLevel;
    }

    /**
     * Returns effect threshold.
     */
    threshold: number;

}
export namespace BiLevelEffect {
}

/**
 * Specifies an instance of mathematical text that contained within a MathParagraph and starts on its own line.
 */
export class BlockElement extends MathElement {
    constructor() {
        super();
        this.type = BlockElement.TypeEnum.Block;
    }

    /**
     * List of math elements.
     */
    mathElementList?: Array<MathElement>;

}
export namespace BlockElement {
}

/**
 * Represents blur effect 
 */
export class BlurEffect {

    /**
     * radius
     */
    radius: number;

    /**
     * true if the bounds are grown
     */
    grow: boolean;

}

/**
 * Represents a Blur effect that is applied to the entire shape, including its fill. All color channels, including alpha, are affected.
 */
export class BlurImageEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = BlurImageEffect.TypeEnum.Blur;
    }

    /**
     * Returns or sets blur radius.
     */
    radius: number;

    /**
     * Determines whether the bounds of the object should be grown as a result of the blurring. True indicates the bounds are grown while false indicates that they are not.
     */
    grow: boolean;

}
export namespace BlurImageEffect {
}

/**
 * Rectangular or some other border around the MathElement. 
 */
export class BorderBoxElement extends MathElement {
    constructor() {
        super();
        this.type = BorderBoxElement.TypeEnum.BorderBox;
    }

    /**
     * Base
     */
    base?: MathElement;

    /**
     * Hide Top Edge
     */
    hideTop?: boolean;

    /**
     * Hide Bottom Edge
     */
    hideBottom?: boolean;

    /**
     * Hide Left Edge
     */
    hideLeft?: boolean;

    /**
     * Hide Right Edge
     */
    hideRight?: boolean;

    /**
     * Strikethrough Horizontal
     */
    strikethroughHorizontal?: boolean;

    /**
     * Strikethrough Vertical
     */
    strikethroughVertical?: boolean;

    /**
     * Strikethrough Bottom-Left to Top-Right
     */
    strikethroughBottomLeftToTopRight?: boolean;

    /**
     * Strikethrough Top-Left to Bottom-Right.
     */
    strikethroughTopLeftToBottomRight?: boolean;

}
export namespace BorderBoxElement {
}

/**
 * Box element.
 */
export class BoxElement extends MathElement {
    constructor() {
        super();
        this.type = BoxElement.TypeEnum.Box;
    }

    /**
     * Base
     */
    base?: MathElement;

    /**
     * Operator emulator
     */
    operatorEmulator?: boolean;

    /**
     * No break
     */
    noBreak?: boolean;

    /**
     * Differential
     */
    differential?: boolean;

    /**
     * Alignment point
     */
    alignmentPoint?: boolean;

    /**
     * Explicit break
     */
    explicitBreak?: number;

}
export namespace BoxElement {
}

/**
 * Data point.
 */
export class DataPoint {

    /**
     * Gets or sets the fill format.
     */
    fillFormat?: FillFormat;

    /**
     * Gets or sets the effect format.
     */
    effectFormat?: EffectFormat;

    /**
     * Gets or sets the 3D format
     */
    threeDFormat?: ThreeDFormat;

    /**
     * Gets or sets the line format.
     */
    lineFormat?: LineFormat;

    type?: DataPoint.TypeEnum;

}
export namespace DataPoint {
    export enum TypeEnum {
        OneValue = <any> 'OneValue',
        Scatter = <any> 'Scatter',
        Bubble = <any> 'Bubble'
    }
}

/**
 * Scatter chart (two-dimensional) data point
 */
export class ScatterChartDataPoint extends DataPoint {
    constructor() {
        super();
        this.type = ScatterChartDataPoint.TypeEnum.Scatter;
    }

    /**
     * X-value
     */
    xValue?: number;

    /**
     * Y-value
     */
    yValue?: number;

    /**
     * Spreadsheet formula in A1-style.
     */
    xValueFormula?: string;

    /**
     * Spreadsheet formula in A1-style.
     */
    yValueFormula?: string;

}
export namespace ScatterChartDataPoint {
}

/**
 * Bubble chart data point.
 */
export class BubbleChartDataPoint extends ScatterChartDataPoint {
    constructor() {
        super();
        this.type = BubbleChartDataPoint.TypeEnum.Bubble;
    }

    /**
     * Bubble size.
     */
    bubbleSize?: number;

    /**
     * Spreadsheet formula in A1-style.
     */
    bubbleSizeFormula?: string;

}
export namespace BubbleChartDataPoint {
}

/**
 * A chart series.
 */
export class Series {

    /**
     * Series type.
     */
    type?: Series.TypeEnum;

    /**
     * Series name.
     */
    name?: string;

    /**
     * Series name data source.
     */
    dataSourceForSeriesName?: DataSource;

    /**
     * True if each data marker in the series has a different color.
     */
    isColorVaried?: boolean;

    /**
     * Invert solid color for the series.
     */
    invertedSolidFillColor?: string;

    /**
     * True if curve smoothing is turned on. Applies only to line and scatter connected by lines charts.
     */
    smooth?: boolean;

    /**
     * True if the series is plotted on second value axis.
     */
    plotOnSecondAxis?: boolean;

    /**
     * Series order.
     */
    order?: number;

    /**
     * True if the series shall invert its colors if the value is negative. Applies to bar, column and bubble series.
     */
    invertIfNegative?: boolean;

    /**
     * The distance of an open pie slice from the center of the pie chart is expressed as a percentage of the pie diameter.
     */
    explosion?: number;

    /**
     * Series marker.
     */
    marker?: SeriesMarker;

    /**
     * Fill properties set for the series.
     */
    fillFormat?: FillFormat;

    /**
     * Effect properties set for the series.
     */
    effectFormat?: EffectFormat;

    /**
     * Line properties set for the series.
     */
    lineFormat?: LineFormat;

    dataPointType?: Series.DataPointTypeEnum;

}
export namespace Series {
    export enum TypeEnum {
        ClusteredColumn = <any> 'ClusteredColumn',
        StackedColumn = <any> 'StackedColumn',
        PercentsStackedColumn = <any> 'PercentsStackedColumn',
        ClusteredColumn3D = <any> 'ClusteredColumn3D',
        StackedColumn3D = <any> 'StackedColumn3D',
        PercentsStackedColumn3D = <any> 'PercentsStackedColumn3D',
        Column3D = <any> 'Column3D',
        ClusteredCylinder = <any> 'ClusteredCylinder',
        StackedCylinder = <any> 'StackedCylinder',
        PercentsStackedCylinder = <any> 'PercentsStackedCylinder',
        Cylinder3D = <any> 'Cylinder3D',
        ClusteredCone = <any> 'ClusteredCone',
        StackedCone = <any> 'StackedCone',
        PercentsStackedCone = <any> 'PercentsStackedCone',
        Cone3D = <any> 'Cone3D',
        ClusteredPyramid = <any> 'ClusteredPyramid',
        StackedPyramid = <any> 'StackedPyramid',
        PercentsStackedPyramid = <any> 'PercentsStackedPyramid',
        Pyramid3D = <any> 'Pyramid3D',
        Line = <any> 'Line',
        StackedLine = <any> 'StackedLine',
        PercentsStackedLine = <any> 'PercentsStackedLine',
        LineWithMarkers = <any> 'LineWithMarkers',
        StackedLineWithMarkers = <any> 'StackedLineWithMarkers',
        PercentsStackedLineWithMarkers = <any> 'PercentsStackedLineWithMarkers',
        Line3D = <any> 'Line3D',
        Pie = <any> 'Pie',
        Pie3D = <any> 'Pie3D',
        PieOfPie = <any> 'PieOfPie',
        ExplodedPie = <any> 'ExplodedPie',
        ExplodedPie3D = <any> 'ExplodedPie3D',
        BarOfPie = <any> 'BarOfPie',
        PercentsStackedBar = <any> 'PercentsStackedBar',
        ClusteredBar3D = <any> 'ClusteredBar3D',
        ClusteredBar = <any> 'ClusteredBar',
        StackedBar = <any> 'StackedBar',
        StackedBar3D = <any> 'StackedBar3D',
        PercentsStackedBar3D = <any> 'PercentsStackedBar3D',
        ClusteredHorizontalCylinder = <any> 'ClusteredHorizontalCylinder',
        StackedHorizontalCylinder = <any> 'StackedHorizontalCylinder',
        PercentsStackedHorizontalCylinder = <any> 'PercentsStackedHorizontalCylinder',
        ClusteredHorizontalCone = <any> 'ClusteredHorizontalCone',
        StackedHorizontalCone = <any> 'StackedHorizontalCone',
        PercentsStackedHorizontalCone = <any> 'PercentsStackedHorizontalCone',
        ClusteredHorizontalPyramid = <any> 'ClusteredHorizontalPyramid',
        StackedHorizontalPyramid = <any> 'StackedHorizontalPyramid',
        PercentsStackedHorizontalPyramid = <any> 'PercentsStackedHorizontalPyramid',
        Area = <any> 'Area',
        StackedArea = <any> 'StackedArea',
        PercentsStackedArea = <any> 'PercentsStackedArea',
        Area3D = <any> 'Area3D',
        StackedArea3D = <any> 'StackedArea3D',
        PercentsStackedArea3D = <any> 'PercentsStackedArea3D',
        ScatterWithMarkers = <any> 'ScatterWithMarkers',
        ScatterWithSmoothLinesAndMarkers = <any> 'ScatterWithSmoothLinesAndMarkers',
        ScatterWithSmoothLines = <any> 'ScatterWithSmoothLines',
        ScatterWithStraightLinesAndMarkers = <any> 'ScatterWithStraightLinesAndMarkers',
        ScatterWithStraightLines = <any> 'ScatterWithStraightLines',
        HighLowClose = <any> 'HighLowClose',
        OpenHighLowClose = <any> 'OpenHighLowClose',
        VolumeHighLowClose = <any> 'VolumeHighLowClose',
        VolumeOpenHighLowClose = <any> 'VolumeOpenHighLowClose',
        Surface3D = <any> 'Surface3D',
        WireframeSurface3D = <any> 'WireframeSurface3D',
        Contour = <any> 'Contour',
        WireframeContour = <any> 'WireframeContour',
        Doughnut = <any> 'Doughnut',
        ExplodedDoughnut = <any> 'ExplodedDoughnut',
        Bubble = <any> 'Bubble',
        BubbleWith3D = <any> 'BubbleWith3D',
        Radar = <any> 'Radar',
        RadarWithMarkers = <any> 'RadarWithMarkers',
        FilledRadar = <any> 'FilledRadar',
        SeriesOfMixedTypes = <any> 'SeriesOfMixedTypes',
        Treemap = <any> 'Treemap',
        Sunburst = <any> 'Sunburst',
        Histogram = <any> 'Histogram',
        ParetoLine = <any> 'ParetoLine',
        BoxAndWhisker = <any> 'BoxAndWhisker',
        Waterfall = <any> 'Waterfall',
        Funnel = <any> 'Funnel',
        Map = <any> 'Map'
    }
    export enum DataPointTypeEnum {
        OneValue = <any> 'OneValue',
        Scatter = <any> 'Scatter',
        Bubble = <any> 'Bubble'
    }
}

/**
 * Common properties for Bubble and Scatter series. 
 */
export class XYSeries extends Series {
    constructor() {
        super();
    }

    /**
     * The number format for the series y values.
     */
    numberFormatOfYValues?: string;

    /**
     * The number format for the series x values.
     */
    numberFormatOfXValues?: string;

    /**
     * Data source type for X Values.
     */
    dataSourceForXValues?: DataSource;

    /**
     * Data source type for Y Values.
     */
    dataSourceForYValues?: DataSource;

}
export namespace XYSeries {
}

/**
 * A bubble series.
 */
export class BubbleSeries extends XYSeries {
    constructor() {
        super();
        this.dataPointType = BubbleSeries.DataPointTypeEnum.Bubble;
    }

    /**
     * Gets or sets the values.
     */
    dataPoints?: Array<BubbleChartDataPoint>;

    /**
     * The number format for the series bubble sizes.
     */
    numberFormatOfBubbleSizes?: string;

    /**
     * Data source type for Bubble size values.
     */
    dataSourceForBubbleSizeValues?: DataSource;

}
export namespace BubbleSeries {
}

/**
 * Camera
 */
export class Camera {

    /**
     * Camera type
     */
    cameraType?: Camera.CameraTypeEnum;

    /**
     * Camera FOV
     */
    fieldOfViewAngle?: number;

    /**
     * Camera zoom
     */
    zoom?: number;

    /**
     * XRotation
     */
    xRotation?: number;

    /**
     * YRotation
     */
    yRotation?: number;

    /**
     * ZRotation
     */
    zRotation?: number;

}
export namespace Camera {
    export enum CameraTypeEnum {
        IsometricBottomDown = <any> 'IsometricBottomDown',
        IsometricBottomUp = <any> 'IsometricBottomUp',
        IsometricLeftDown = <any> 'IsometricLeftDown',
        IsometricLeftUp = <any> 'IsometricLeftUp',
        IsometricOffAxis1Left = <any> 'IsometricOffAxis1Left',
        IsometricOffAxis1Right = <any> 'IsometricOffAxis1Right',
        IsometricOffAxis1Top = <any> 'IsometricOffAxis1Top',
        IsometricOffAxis2Left = <any> 'IsometricOffAxis2Left',
        IsometricOffAxis2Right = <any> 'IsometricOffAxis2Right',
        IsometricOffAxis2Top = <any> 'IsometricOffAxis2Top',
        IsometricOffAxis3Bottom = <any> 'IsometricOffAxis3Bottom',
        IsometricOffAxis3Left = <any> 'IsometricOffAxis3Left',
        IsometricOffAxis3Right = <any> 'IsometricOffAxis3Right',
        IsometricOffAxis4Bottom = <any> 'IsometricOffAxis4Bottom',
        IsometricOffAxis4Left = <any> 'IsometricOffAxis4Left',
        IsometricOffAxis4Right = <any> 'IsometricOffAxis4Right',
        IsometricRightDown = <any> 'IsometricRightDown',
        IsometricRightUp = <any> 'IsometricRightUp',
        IsometricTopDown = <any> 'IsometricTopDown',
        IsometricTopUp = <any> 'IsometricTopUp',
        LegacyObliqueBottom = <any> 'LegacyObliqueBottom',
        LegacyObliqueBottomLeft = <any> 'LegacyObliqueBottomLeft',
        LegacyObliqueBottomRight = <any> 'LegacyObliqueBottomRight',
        LegacyObliqueFront = <any> 'LegacyObliqueFront',
        LegacyObliqueLeft = <any> 'LegacyObliqueLeft',
        LegacyObliqueRight = <any> 'LegacyObliqueRight',
        LegacyObliqueTop = <any> 'LegacyObliqueTop',
        LegacyObliqueTopLeft = <any> 'LegacyObliqueTopLeft',
        LegacyObliqueTopRight = <any> 'LegacyObliqueTopRight',
        LegacyPerspectiveBottom = <any> 'LegacyPerspectiveBottom',
        LegacyPerspectiveBottomLeft = <any> 'LegacyPerspectiveBottomLeft',
        LegacyPerspectiveBottomRight = <any> 'LegacyPerspectiveBottomRight',
        LegacyPerspectiveFront = <any> 'LegacyPerspectiveFront',
        LegacyPerspectiveLeft = <any> 'LegacyPerspectiveLeft',
        LegacyPerspectiveRight = <any> 'LegacyPerspectiveRight',
        LegacyPerspectiveTop = <any> 'LegacyPerspectiveTop',
        LegacyPerspectiveTopLeft = <any> 'LegacyPerspectiveTopLeft',
        LegacyPerspectiveTopRight = <any> 'LegacyPerspectiveTopRight',
        ObliqueBottom = <any> 'ObliqueBottom',
        ObliqueBottomLeft = <any> 'ObliqueBottomLeft',
        ObliqueBottomRight = <any> 'ObliqueBottomRight',
        ObliqueLeft = <any> 'ObliqueLeft',
        ObliqueRight = <any> 'ObliqueRight',
        ObliqueTop = <any> 'ObliqueTop',
        ObliqueTopLeft = <any> 'ObliqueTopLeft',
        ObliqueTopRight = <any> 'ObliqueTopRight',
        OrthographicFront = <any> 'OrthographicFront',
        PerspectiveAbove = <any> 'PerspectiveAbove',
        PerspectiveAboveLeftFacing = <any> 'PerspectiveAboveLeftFacing',
        PerspectiveAboveRightFacing = <any> 'PerspectiveAboveRightFacing',
        PerspectiveBelow = <any> 'PerspectiveBelow',
        PerspectiveContrastingLeftFacing = <any> 'PerspectiveContrastingLeftFacing',
        PerspectiveContrastingRightFacing = <any> 'PerspectiveContrastingRightFacing',
        PerspectiveFront = <any> 'PerspectiveFront',
        PerspectiveHeroicExtremeLeftFacing = <any> 'PerspectiveHeroicExtremeLeftFacing',
        PerspectiveHeroicExtremeRightFacing = <any> 'PerspectiveHeroicExtremeRightFacing',
        PerspectiveHeroicLeftFacing = <any> 'PerspectiveHeroicLeftFacing',
        PerspectiveHeroicRightFacing = <any> 'PerspectiveHeroicRightFacing',
        PerspectiveLeft = <any> 'PerspectiveLeft',
        PerspectiveRelaxed = <any> 'PerspectiveRelaxed',
        PerspectiveRelaxedModerately = <any> 'PerspectiveRelaxedModerately',
        PerspectiveRight = <any> 'PerspectiveRight',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Represents chart resource
 */
export class Chart extends ShapeBase {
    constructor() {
        super();
        this.type = Chart.TypeEnum.Chart;
    }

    /**
     * Gets or sets the type of the chart.
     */
    chartType: Chart.ChartTypeEnum;

    /**
     * True if data labels over the maximum of the chart shall be shown.
     */
    showDataLabelsOverMaximum?: boolean;

    /**
     * Gets or sets the series of chart data values.
     */
    series?: Array<Series>;

    /**
     * Gets or sets the categories for chart data
     */
    categories?: Array<ChartCategory>;

    /**
     * Data source type for categories.
     */
    dataSourceForCategories?: DataSource;

    /**
     * Gets or sets the title.
     */
    title?: ChartTitle;

    /**
     * Gets or sets the back wall.
     */
    backWall?: ChartWall;

    /**
     * Gets or sets the side wall.
     */
    sideWall?: ChartWall;

    /**
     * Gets or sets the floor.
     */
    floor?: ChartWall;

    /**
     * Gets or sets the legend.
     */
    legend?: Legend;

    /**
     * Gets or sets the axes.
     */
    axes?: Axes;

    /**
     * Gets or sets the plot area.
     */
    plotArea?: PlotArea;

    /**
     * Specifies the chart area shall have rounded corners.
     */
    hasRoundedCorners?: boolean;

    /**
     * Gets groups of series. 
     */
    seriesGroups?: Array<ChartSeriesGroup>;

}
export namespace Chart {
    export enum ChartTypeEnum {
        ClusteredColumn = <any> 'ClusteredColumn',
        StackedColumn = <any> 'StackedColumn',
        PercentsStackedColumn = <any> 'PercentsStackedColumn',
        ClusteredColumn3D = <any> 'ClusteredColumn3D',
        StackedColumn3D = <any> 'StackedColumn3D',
        PercentsStackedColumn3D = <any> 'PercentsStackedColumn3D',
        Column3D = <any> 'Column3D',
        ClusteredCylinder = <any> 'ClusteredCylinder',
        StackedCylinder = <any> 'StackedCylinder',
        PercentsStackedCylinder = <any> 'PercentsStackedCylinder',
        Cylinder3D = <any> 'Cylinder3D',
        ClusteredCone = <any> 'ClusteredCone',
        StackedCone = <any> 'StackedCone',
        PercentsStackedCone = <any> 'PercentsStackedCone',
        Cone3D = <any> 'Cone3D',
        ClusteredPyramid = <any> 'ClusteredPyramid',
        StackedPyramid = <any> 'StackedPyramid',
        PercentsStackedPyramid = <any> 'PercentsStackedPyramid',
        Pyramid3D = <any> 'Pyramid3D',
        Line = <any> 'Line',
        StackedLine = <any> 'StackedLine',
        PercentsStackedLine = <any> 'PercentsStackedLine',
        LineWithMarkers = <any> 'LineWithMarkers',
        StackedLineWithMarkers = <any> 'StackedLineWithMarkers',
        PercentsStackedLineWithMarkers = <any> 'PercentsStackedLineWithMarkers',
        Line3D = <any> 'Line3D',
        Pie = <any> 'Pie',
        Pie3D = <any> 'Pie3D',
        PieOfPie = <any> 'PieOfPie',
        ExplodedPie = <any> 'ExplodedPie',
        ExplodedPie3D = <any> 'ExplodedPie3D',
        BarOfPie = <any> 'BarOfPie',
        PercentsStackedBar = <any> 'PercentsStackedBar',
        ClusteredBar3D = <any> 'ClusteredBar3D',
        ClusteredBar = <any> 'ClusteredBar',
        StackedBar = <any> 'StackedBar',
        StackedBar3D = <any> 'StackedBar3D',
        PercentsStackedBar3D = <any> 'PercentsStackedBar3D',
        ClusteredHorizontalCylinder = <any> 'ClusteredHorizontalCylinder',
        StackedHorizontalCylinder = <any> 'StackedHorizontalCylinder',
        PercentsStackedHorizontalCylinder = <any> 'PercentsStackedHorizontalCylinder',
        ClusteredHorizontalCone = <any> 'ClusteredHorizontalCone',
        StackedHorizontalCone = <any> 'StackedHorizontalCone',
        PercentsStackedHorizontalCone = <any> 'PercentsStackedHorizontalCone',
        ClusteredHorizontalPyramid = <any> 'ClusteredHorizontalPyramid',
        StackedHorizontalPyramid = <any> 'StackedHorizontalPyramid',
        PercentsStackedHorizontalPyramid = <any> 'PercentsStackedHorizontalPyramid',
        Area = <any> 'Area',
        StackedArea = <any> 'StackedArea',
        PercentsStackedArea = <any> 'PercentsStackedArea',
        Area3D = <any> 'Area3D',
        StackedArea3D = <any> 'StackedArea3D',
        PercentsStackedArea3D = <any> 'PercentsStackedArea3D',
        ScatterWithMarkers = <any> 'ScatterWithMarkers',
        ScatterWithSmoothLinesAndMarkers = <any> 'ScatterWithSmoothLinesAndMarkers',
        ScatterWithSmoothLines = <any> 'ScatterWithSmoothLines',
        ScatterWithStraightLinesAndMarkers = <any> 'ScatterWithStraightLinesAndMarkers',
        ScatterWithStraightLines = <any> 'ScatterWithStraightLines',
        HighLowClose = <any> 'HighLowClose',
        OpenHighLowClose = <any> 'OpenHighLowClose',
        VolumeHighLowClose = <any> 'VolumeHighLowClose',
        VolumeOpenHighLowClose = <any> 'VolumeOpenHighLowClose',
        Surface3D = <any> 'Surface3D',
        WireframeSurface3D = <any> 'WireframeSurface3D',
        Contour = <any> 'Contour',
        WireframeContour = <any> 'WireframeContour',
        Doughnut = <any> 'Doughnut',
        ExplodedDoughnut = <any> 'ExplodedDoughnut',
        Bubble = <any> 'Bubble',
        BubbleWith3D = <any> 'BubbleWith3D',
        Radar = <any> 'Radar',
        RadarWithMarkers = <any> 'RadarWithMarkers',
        FilledRadar = <any> 'FilledRadar',
        SeriesOfMixedTypes = <any> 'SeriesOfMixedTypes',
        Treemap = <any> 'Treemap',
        Sunburst = <any> 'Sunburst',
        Histogram = <any> 'Histogram',
        ParetoLine = <any> 'ParetoLine',
        BoxAndWhisker = <any> 'BoxAndWhisker',
        Waterfall = <any> 'Waterfall',
        Funnel = <any> 'Funnel',
        Map = <any> 'Map'
    }
}

/**
 * Represents chart category resource
 */
export class ChartCategory {

    /**
     * Gets or sets the parent categories. Used with Sunburst &amp; treemap categories; ignored for other chart types.
     */
    parentCategories?: Array<string>;

    /**
     * Gets or sets the grouping level for the category. Used with Sunburst &amp; treemap categories; ignored for other chart types.
     */
    level?: number;

    /**
     * Category value
     */
    value?: string;

    /**
     * Get or sets the fill format.
     */
    fillFormat?: FillFormat;

    /**
     * Get or sets the effect format.
     */
    effectFormat?: EffectFormat;

    /**
     * Get or sets the line format.
     */
    lineFormat?: LineFormat;

    /**
     * Gets or sets the data points for chart data
     */
    dataPoints?: Array<OneValueChartDataPoint>;

}

/**
 * Represents the lines format of chart elements. 
 */
export class ChartLinesFormat {

    /**
     * Get or sets the effect format.
     */
    effectFormat?: EffectFormat;

    /**
     * Get or sets the line format.
     */
    lineFormat?: LineFormat;

}

/**
 * Chart series group. Defines common properties for a group of series.
 */
export class ChartSeriesGroup {

    /**
     * Returns a type of this series group.
     */
    type?: ChartSeriesGroup.TypeEnum;

    /**
     * Specifies the space between bar or column clusters, as a percentage of the bar or column width.
     */
    gapWidth?: number;

    /**
     * Returns or sets the distance, as a percentage of the marker width, between the data series in a 3D chart.
     */
    gapDepth?: number;

    /**
     * Gets or sets the angle of the first pie or doughnut chart slice,  in degrees (clockwise from up, from 0 to 360 degrees).
     */
    firstSliceAngle?: number;

    /**
     * Specifies that each data marker in the series has a different color.
     */
    isColorVaried?: boolean;

    /**
     * True if chart has series lines. Applied to stacked bar and OfPie charts.
     */
    hasSeriesLines?: boolean;

    /**
     * Specifies how much bars and columns shall overlap on 2-D charts (from -100 to 100).
     */
    overlap?: number;

    /**
     * Specifies the size of the second pie or bar of a pie-of-pie chart or  a bar-of-pie chart, as a percentage of the size of the first pie (can  be between 5 and 200 percents).
     */
    secondPieSize?: number;

    /**
     * Specifies a value that shall be used to determine which data points  are in the second pie or bar on a pie-of-pie or bar-of-pie chart.  Is used together with PieSplitBy property.
     */
    pieSplitPosition?: number;

    /**
     * Specifies how to determine which data points are in the second pie or bar  on a pie-of-pie or bar-of-pie chart.
     */
    pieSplitBy?: ChartSeriesGroup.PieSplitByEnum;

    /**
     * Specifies the size of the hole in a doughnut chart (can be between 10 and 90 percents  of the size of the plot area.).
     */
    doughnutHoleSize?: number;

    /**
     * Specifies the scale factor for the bubble chart (can be  between 0 and 300 percents of the default size). Read/write Int32.
     */
    bubbleSizeScale?: number;

    /**
     * Specifies HiLowLines format.  HiLowLines applied with HiLowClose, OpenHiLowClose, VolumeHiLowClose and VolumeOpenHiLowClose chart types.
     */
    hiLowLinesFormat?: ChartLinesFormat;

    /**
     * Specifies how the bubble size values are represented on the bubble chart. Read/write BubbleSizeRepresentationType.
     */
    bubbleSizeRepresentation?: ChartSeriesGroup.BubbleSizeRepresentationEnum;

}
export namespace ChartSeriesGroup {
    export enum TypeEnum {
        BarOfPieChart = <any> 'BarOfPieChart',
        PieOfPieChart = <any> 'PieOfPieChart',
        DoughnutChart = <any> 'DoughnutChart',
        PieChart = <any> 'PieChart',
        AreaChartArea = <any> 'AreaChartArea',
        AreaChartPercentsStackedArea = <any> 'AreaChartPercentsStackedArea',
        AreaChartStackedArea = <any> 'AreaChartStackedArea',
        BarChartHorizClustered = <any> 'BarChartHorizClustered',
        BarChartHorizStacked = <any> 'BarChartHorizStacked',
        BarChartHorizPercentsStacked = <any> 'BarChartHorizPercentsStacked',
        BarChartVertClustered = <any> 'BarChartVertClustered',
        BarChartVertStacked = <any> 'BarChartVertStacked',
        BarChartVertPercentsStacked = <any> 'BarChartVertPercentsStacked',
        LineChartLine = <any> 'LineChartLine',
        LineChartStackedLine = <any> 'LineChartStackedLine',
        LineChartPercentsStackedLine = <any> 'LineChartPercentsStackedLine',
        RadarChart = <any> 'RadarChart',
        FilledRadarChart = <any> 'FilledRadarChart',
        StockHighLowClose = <any> 'StockHighLowClose',
        StockOpenHighLowClose = <any> 'StockOpenHighLowClose',
        StockVolumeHighLowClose = <any> 'StockVolumeHighLowClose',
        StockVolumeOpenHighLowClose = <any> 'StockVolumeOpenHighLowClose',
        ScatterStraightMarker = <any> 'ScatterStraightMarker',
        ScatterSmoothMarker = <any> 'ScatterSmoothMarker',
        AreaChartArea3D = <any> 'AreaChartArea3D',
        AreaChartStackedArea3D = <any> 'AreaChartStackedArea3D',
        AreaChartPercentsStackedArea3D = <any> 'AreaChartPercentsStackedArea3D',
        Line3DChart = <any> 'Line3DChart',
        Pie3DChart = <any> 'Pie3DChart',
        Bar3DChartVert = <any> 'Bar3DChartVert',
        Bar3DChartVertClustered = <any> 'Bar3DChartVertClustered',
        Bar3DChartVertPercentsStackedColumn3D = <any> 'Bar3DChartVertPercentsStackedColumn3D',
        Bar3DChartVertPercentsStackedCone = <any> 'Bar3DChartVertPercentsStackedCone',
        Bar3DChartVertPercentsStackedCylinder = <any> 'Bar3DChartVertPercentsStackedCylinder',
        Bar3DChartVertPercentsStackedPyramid = <any> 'Bar3DChartVertPercentsStackedPyramid',
        Bar3DChartVertStackedColumn3D = <any> 'Bar3DChartVertStackedColumn3D',
        Bar3DChartVertStackedCone = <any> 'Bar3DChartVertStackedCone',
        Bar3DChartVertStackedCylinder = <any> 'Bar3DChartVertStackedCylinder',
        Bar3DChartVertStackedPyramid = <any> 'Bar3DChartVertStackedPyramid',
        Bar3DChartHorizClustered = <any> 'Bar3DChartHorizClustered',
        Bar3DChartHorizStackedBar3D = <any> 'Bar3DChartHorizStackedBar3D',
        Bar3DChartHorizStackedCone = <any> 'Bar3DChartHorizStackedCone',
        Bar3DChartHorizStackedCylinder = <any> 'Bar3DChartHorizStackedCylinder',
        Bar3DChartHorizStackedPyramid = <any> 'Bar3DChartHorizStackedPyramid',
        Bar3DChartHorizPercentsStackedBar3D = <any> 'Bar3DChartHorizPercentsStackedBar3D',
        Bar3DChartHorizPercentsStackedCone = <any> 'Bar3DChartHorizPercentsStackedCone',
        Bar3DChartHorizPercentsStackedCylinder = <any> 'Bar3DChartHorizPercentsStackedCylinder',
        Bar3DChartHorizPercentsStackedPyramid = <any> 'Bar3DChartHorizPercentsStackedPyramid',
        SurfaceChartContour = <any> 'SurfaceChartContour',
        SurfaceChartWireframeContour = <any> 'SurfaceChartWireframeContour',
        SurfaceChartSurface3D = <any> 'SurfaceChartSurface3D',
        SurfaceChartWireframeSurface3D = <any> 'SurfaceChartWireframeSurface3D',
        BubbleChart = <any> 'BubbleChart',
        HistogramChart = <any> 'HistogramChart',
        ParetoLineChart = <any> 'ParetoLineChart',
        BoxAndWhiskerChart = <any> 'BoxAndWhiskerChart',
        WaterfallChart = <any> 'WaterfallChart',
        FunnelChart = <any> 'FunnelChart',
        TreemapChart = <any> 'TreemapChart',
        MapChart = <any> 'MapChart',
        SunburstChart = <any> 'SunburstChart'
    }
    export enum PieSplitByEnum {
        Default = <any> 'Default',
        Custom = <any> 'Custom',
        ByPercentage = <any> 'ByPercentage',
        ByPos = <any> 'ByPos',
        ByValue = <any> 'ByValue'
    }
    export enum BubbleSizeRepresentationEnum {
        Area = <any> 'Area',
        Width = <any> 'Width'
    }
}

/**
 * Represents chart title
 */
export class ChartTitle {

    /**
     * Get or sets the text.
     */
    text?: string;

    /**
     * Get or sets value determines visibility of title
     */
    hasTitle: boolean;

}

/**
 * Represents a chart wall
 */
export class ChartWall {

    /**
     * Get or sets the fill format.
     */
    fillFormat?: FillFormat;

    /**
     * Get or sets the effect format.
     */
    effectFormat?: EffectFormat;

    /**
     * Get or sets the line format.
     */
    lineFormat?: LineFormat;

    /**
     * Get or sets wall thickness as a percentage of the largest dimension of the plot volume.
     */
    thickness?: number;

    /**
     * Get or sets mode of bar picture filling.
     */
    pictureType?: ChartWall.PictureTypeEnum;

}
export namespace ChartWall {
    export enum PictureTypeEnum {
        Stack = <any> 'Stack',
        StackScale = <any> 'StackScale',
        Stretch = <any> 'Stretch',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * 3D chart wall type
 */
    /**
    * 3D chart wall type
    */
export enum ChartWallType {
    'Floor' = <any> 'Floor',
    'SideWall' = <any> 'SideWall',
    'BackWall' = <any> 'BackWall'
}

/**
 * Close path segment of the geometry path
 */
export class ClosePathSegment extends PathSegment {
    constructor() {
        super();
        this.type = ClosePathSegment.TypeEnum.Close;
    }

}
export namespace ClosePathSegment {
}

/**
 * Represents a Color Change effect.
 */
export class ColorChangeEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = ColorChangeEffect.TypeEnum.ColorChange;
    }

    /**
     * Color which will be replaced.
     */
    fromColor?: string;

    /**
     * Color which will replace.
     */
    toColor?: string;

}
export namespace ColorChangeEffect {
}

/**
 * Represents a Color Replacement effect.
 */
export class ColorReplaceEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = ColorReplaceEffect.TypeEnum.ColorReplace;
    }

    /**
     * Returns color format which will replace color of every pixel.
     */
    color?: string;

}
export namespace ColorReplaceEffect {
}

/**
 * Slide's color scheme DTO
 */
export class ColorScheme extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * First accent color.
     */
    accent1?: string;

    /**
     * Second accent color.
     */
    accent2?: string;

    /**
     * Third accent color.
     */
    accent3?: string;

    /**
     * Fourth accent color.
     */
    accent4?: string;

    /**
     * Fifth accent color.
     */
    accent5?: string;

    /**
     * Sixth accent color.
     */
    accent6?: string;

    /**
     * First dark color.
     */
    dark1?: string;

    /**
     * Second dark color.
     */
    dark2?: string;

    /**
     * Visited hyperlink color.
     */
    followedHyperlink?: string;

    /**
     * Hyperlink color/
     */
    hyperlink?: string;

    /**
     * First light color.
     */
    light1?: string;

    /**
     * Second light color.
     */
    light2?: string;

}

/**
 * Slide view properties.
 */
export class CommonSlideViewProperties {

    /**
     * The view scaling ratio (percentage).
     */
    scale?: number;

    /**
     * True if the view content should automatically scale to best fit the current window size.
     */
    variableScale?: boolean;

}

/**
 * Represents Connector resource.
 */
export class Connector extends GeometryShape {
    constructor() {
        super();
        this.type = Connector.TypeEnum.Connector;
    }

    /**
     * Start shape link.
     */
    startShapeConnectedTo?: ResourceUri;

    /**
     * Start shape index.
     */
    startShapeConnectedToIndex?: number;

    /**
     * End shape link.
     */
    endShapeConnectedTo?: ResourceUri;

    /**
     * End shape index.
     */
    endShapeConnectedToIndex?: number;

}
export namespace Connector {
}

/**
 * Cubic Bezier curve segment of the geometry path
 */
export class CubicBezierToPathSegment extends PathSegment {
    constructor() {
        super();
        this.type = CubicBezierToPathSegment.TypeEnum.CubicBezierTo;
    }

    /**
     * X coordinate of the first direction point
     */
    x1: number;

    /**
     * Y coordinate of the first direction point
     */
    y1: number;

    /**
     * X coordinate of the second direction point
     */
    x2: number;

    /**
     * Y coordinate of the second direction point
     */
    y2: number;

    /**
     * X coordinate of end point
     */
    x3: number;

    /**
     * Y coordinate of end point
     */
    y3: number;

}
export namespace CubicBezierToPathSegment {
}

/**
 * Custom dash pattern.
 */
export class CustomDashPattern {

    /**
     * Pattern items.
     */
    items?: Array<number>;

}

/**
 * Data source for chart values.
 */
export class DataSource {

    type?: DataSource.TypeEnum;

}
export namespace DataSource {
    export enum TypeEnum {
        Workbook = <any> 'Workbook',
        Literals = <any> 'Literals'
    }
}

/**
 * Delimiter element
 */
export class DelimiterElement extends MathElement {
    constructor() {
        super();
        this.type = DelimiterElement.TypeEnum.Delimiter;
    }

    /**
     * Arguments
     */
    arguments?: Array<MathElement>;

    /**
     * Beginning character
     */
    beginningCharacter?: string;

    /**
     * Separator character
     */
    separatorCharacter?: string;

    /**
     * Ending character
     */
    endingCharacter?: string;

    /**
     * Grow to match operand height
     */
    growToMatchOperandHeight?: boolean;

    /**
     * Delimiter shape
     */
    delimiterShape?: DelimiterElement.DelimiterShapeEnum;

}
export namespace DelimiterElement {
    export enum DelimiterShapeEnum {
        Centered = <any> 'Centered',
        Match = <any> 'Match'
    }
}

/**
 * Class for disc space information.
 */
export class DiscUsage {

    /**
     * Application used disc space.
     */
    usedSize: number;

    /**
     * Total disc space.
     */
    totalSize: number;

}

/**
 * Represents document DTO.
 */
export class Document extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Link to Document properties.
     */
    documentProperties?: ResourceUri;

    /**
     * Link to Document properties.
     */
    viewProperties?: ResourceUri;

    /**
     * Link to slides collection.
     */
    slides?: ResourceUri;

    /**
     * Link to images collection.
     */
    images?: ResourceUri;

    /**
     * Link to layout slides collection.
     */
    layoutSlides?: ResourceUri;

    /**
     * Link to master slides collection.
     */
    masterSlides?: ResourceUri;

}

/**
 * Slides document properties.
 */
export class DocumentProperties extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Document property list.
     */
    list?: Array<DocumentProperty>;

}

/**
 * Document property.
 */
export class DocumentProperty extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Name.
     */
    name?: string;

    /**
     * Value.
     */
    value?: string;

    /**
     * True for builtin property.
     */
    builtIn: boolean;

}

/**
 * Represents document replace result DTO.
 */
export class DocumentReplaceResult extends Document {
    constructor() {
        super();
    }

    /**
     * Gets or sets the number of matches 
     */
    matches: number;

}

/**
 * Represents a Duotone effect.
 */
export class DuotoneEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = DuotoneEffect.TypeEnum.Duotone;
    }

    /**
     * Returns target color format for dark pixels.
     */
    color1?: string;

    /**
     * Returns target color format for light pixels.
     */
    color2?: string;

}
export namespace DuotoneEffect {
}

/**
 * Represents comment of slide
 */
export class Effect {

    /**
     * Effect type.
     */
    type?: Effect.TypeEnum;

    /**
     * Effect subtype.
     */
    subtype?: Effect.SubtypeEnum;

    /**
     * Preset class type.
     */
    presetClassType?: Effect.PresetClassTypeEnum;

    /**
     * Shape index.
     */
    shapeIndex: number;

    /**
     * Paragraph index.
     */
    paragraphIndex?: number;

    /**
     * Effect trigger type.
     */
    triggerType?: Effect.TriggerTypeEnum;

    /**
     * The percentage of duration accelerate behavior effect.
     */
    accelerate?: number;

    /**
     * True to automatically play the animation in reverse after playing it in the forward direction.
     */
    autoReverse?: boolean;

    /**
     * The percentage of duration decelerate behavior effect.
     */
    decelerate?: number;

    /**
     * The duration of animation effect.
     */
    duration?: number;

    /**
     * The number of times the effect should repeat.
     */
    repeatCount?: number;

    /**
     * The number of times the effect should repeat.
     */
    repeatDuration?: number;

    /**
     * The way for a effect to restart after complete.
     */
    restart?: Effect.RestartEnum;

    /**
     * The percentage by which to speed up (or slow down) the timing.
     */
    speed?: number;

    /**
     * Delay time after trigger.
     */
    triggerDelayTime?: number;

    /**
     * Specifies if the effect will repeat until the end of slide.
     */
    repeatUntilEndSlide?: boolean;

    /**
     * Specifies if the effect will repeat until the next click.
     */
    repeatUntilNextClick?: boolean;

    /**
     * This attribute specifies if the animation effect stops the previous sound.
     */
    stopPreviousSound?: boolean;

}
export namespace Effect {
    export enum TypeEnum {
        Appear = <any> 'Appear',
        CurveUpDown = <any> 'CurveUpDown',
        Ascend = <any> 'Ascend',
        Blast = <any> 'Blast',
        Blinds = <any> 'Blinds',
        Blink = <any> 'Blink',
        BoldFlash = <any> 'BoldFlash',
        BoldReveal = <any> 'BoldReveal',
        Boomerang = <any> 'Boomerang',
        Bounce = <any> 'Bounce',
        Box = <any> 'Box',
        BrushOnColor = <any> 'BrushOnColor',
        BrushOnUnderline = <any> 'BrushOnUnderline',
        CenterRevolve = <any> 'CenterRevolve',
        ChangeFillColor = <any> 'ChangeFillColor',
        ChangeFont = <any> 'ChangeFont',
        ChangeFontColor = <any> 'ChangeFontColor',
        ChangeFontSize = <any> 'ChangeFontSize',
        ChangeFontStyle = <any> 'ChangeFontStyle',
        ChangeLineColor = <any> 'ChangeLineColor',
        Checkerboard = <any> 'Checkerboard',
        Circle = <any> 'Circle',
        ColorBlend = <any> 'ColorBlend',
        ColorTypewriter = <any> 'ColorTypewriter',
        ColorWave = <any> 'ColorWave',
        ComplementaryColor = <any> 'ComplementaryColor',
        ComplementaryColor2 = <any> 'ComplementaryColor2',
        Compress = <any> 'Compress',
        ContrastingColor = <any> 'ContrastingColor',
        Crawl = <any> 'Crawl',
        Credits = <any> 'Credits',
        Custom = <any> 'Custom',
        Darken = <any> 'Darken',
        Desaturate = <any> 'Desaturate',
        Descend = <any> 'Descend',
        Diamond = <any> 'Diamond',
        Dissolve = <any> 'Dissolve',
        EaseInOut = <any> 'EaseInOut',
        Expand = <any> 'Expand',
        Fade = <any> 'Fade',
        FadedSwivel = <any> 'FadedSwivel',
        FadedZoom = <any> 'FadedZoom',
        FlashBulb = <any> 'FlashBulb',
        FlashOnce = <any> 'FlashOnce',
        Flicker = <any> 'Flicker',
        Flip = <any> 'Flip',
        Float = <any> 'Float',
        Fly = <any> 'Fly',
        Fold = <any> 'Fold',
        Glide = <any> 'Glide',
        GrowAndTurn = <any> 'GrowAndTurn',
        GrowShrink = <any> 'GrowShrink',
        GrowWithColor = <any> 'GrowWithColor',
        Lighten = <any> 'Lighten',
        LightSpeed = <any> 'LightSpeed',
        MediaPause = <any> 'MediaPause',
        MediaPlay = <any> 'MediaPlay',
        MediaStop = <any> 'MediaStop',
        Path4PointStar = <any> 'Path4PointStar',
        Path5PointStar = <any> 'Path5PointStar',
        Path6PointStar = <any> 'Path6PointStar',
        Path8PointStar = <any> 'Path8PointStar',
        PathArcDown = <any> 'PathArcDown',
        PathArcLeft = <any> 'PathArcLeft',
        PathArcRight = <any> 'PathArcRight',
        PathArcUp = <any> 'PathArcUp',
        PathBean = <any> 'PathBean',
        PathBounceLeft = <any> 'PathBounceLeft',
        PathBounceRight = <any> 'PathBounceRight',
        PathBuzzsaw = <any> 'PathBuzzsaw',
        PathCircle = <any> 'PathCircle',
        PathCrescentMoon = <any> 'PathCrescentMoon',
        PathCurvedSquare = <any> 'PathCurvedSquare',
        PathCurvedX = <any> 'PathCurvedX',
        PathCurvyLeft = <any> 'PathCurvyLeft',
        PathCurvyRight = <any> 'PathCurvyRight',
        PathCurvyStar = <any> 'PathCurvyStar',
        PathDecayingWave = <any> 'PathDecayingWave',
        PathDiagonalDownRight = <any> 'PathDiagonalDownRight',
        PathDiagonalUpRight = <any> 'PathDiagonalUpRight',
        PathDiamond = <any> 'PathDiamond',
        PathDown = <any> 'PathDown',
        PathEqualTriangle = <any> 'PathEqualTriangle',
        PathFigure8Four = <any> 'PathFigure8Four',
        PathFootball = <any> 'PathFootball',
        PathFunnel = <any> 'PathFunnel',
        PathHeart = <any> 'PathHeart',
        PathHeartbeat = <any> 'PathHeartbeat',
        PathHexagon = <any> 'PathHexagon',
        PathHorizontalFigure8 = <any> 'PathHorizontalFigure8',
        PathInvertedSquare = <any> 'PathInvertedSquare',
        PathInvertedTriangle = <any> 'PathInvertedTriangle',
        PathLeft = <any> 'PathLeft',
        PathLoopdeLoop = <any> 'PathLoopdeLoop',
        PathNeutron = <any> 'PathNeutron',
        PathOctagon = <any> 'PathOctagon',
        PathParallelogram = <any> 'PathParallelogram',
        PathPeanut = <any> 'PathPeanut',
        PathPentagon = <any> 'PathPentagon',
        PathPlus = <any> 'PathPlus',
        PathPointyStar = <any> 'PathPointyStar',
        PathRight = <any> 'PathRight',
        PathRightTriangle = <any> 'PathRightTriangle',
        PathSCurve1 = <any> 'PathSCurve1',
        PathSCurve2 = <any> 'PathSCurve2',
        PathSineWave = <any> 'PathSineWave',
        PathSpiralLeft = <any> 'PathSpiralLeft',
        PathSpiralRight = <any> 'PathSpiralRight',
        PathSpring = <any> 'PathSpring',
        PathSquare = <any> 'PathSquare',
        PathStairsDown = <any> 'PathStairsDown',
        PathSwoosh = <any> 'PathSwoosh',
        PathTeardrop = <any> 'PathTeardrop',
        PathTrapezoid = <any> 'PathTrapezoid',
        PathTurnDown = <any> 'PathTurnDown',
        PathTurnRight = <any> 'PathTurnRight',
        PathTurnUp = <any> 'PathTurnUp',
        PathTurnUpRight = <any> 'PathTurnUpRight',
        PathUp = <any> 'PathUp',
        PathUser = <any> 'PathUser',
        PathVerticalFigure8 = <any> 'PathVerticalFigure8',
        PathWave = <any> 'PathWave',
        PathZigzag = <any> 'PathZigzag',
        Peek = <any> 'Peek',
        Pinwheel = <any> 'Pinwheel',
        Plus = <any> 'Plus',
        RandomBars = <any> 'RandomBars',
        RandomEffects = <any> 'RandomEffects',
        RiseUp = <any> 'RiseUp',
        Shimmer = <any> 'Shimmer',
        Sling = <any> 'Sling',
        Spin = <any> 'Spin',
        Spinner = <any> 'Spinner',
        Spiral = <any> 'Spiral',
        Split = <any> 'Split',
        Stretch = <any> 'Stretch',
        Strips = <any> 'Strips',
        StyleEmphasis = <any> 'StyleEmphasis',
        Swish = <any> 'Swish',
        Swivel = <any> 'Swivel',
        Teeter = <any> 'Teeter',
        Thread = <any> 'Thread',
        Transparency = <any> 'Transparency',
        Unfold = <any> 'Unfold',
        VerticalGrow = <any> 'VerticalGrow',
        Wave = <any> 'Wave',
        Wedge = <any> 'Wedge',
        Wheel = <any> 'Wheel',
        Whip = <any> 'Whip',
        Wipe = <any> 'Wipe',
        Magnify = <any> 'Magnify',
        Zoom = <any> 'Zoom',
        OLEObjectShow = <any> 'OLEObjectShow',
        OLEObjectEdit = <any> 'OLEObjectEdit',
        OLEObjectOpen = <any> 'OLEObjectOpen'
    }
    export enum SubtypeEnum {
        None = <any> 'None',
        Across = <any> 'Across',
        Bottom = <any> 'Bottom',
        BottomLeft = <any> 'BottomLeft',
        BottomRight = <any> 'BottomRight',
        Center = <any> 'Center',
        Clockwise = <any> 'Clockwise',
        CounterClockwise = <any> 'CounterClockwise',
        GradualAndCycleClockwise = <any> 'GradualAndCycleClockwise',
        GradualAndCycleCounterClockwise = <any> 'GradualAndCycleCounterClockwise',
        Down = <any> 'Down',
        DownLeft = <any> 'DownLeft',
        DownRight = <any> 'DownRight',
        FontAllCaps = <any> 'FontAllCaps',
        FontBold = <any> 'FontBold',
        FontItalic = <any> 'FontItalic',
        FontShadow = <any> 'FontShadow',
        FontStrikethrough = <any> 'FontStrikethrough',
        FontUnderline = <any> 'FontUnderline',
        Gradual = <any> 'Gradual',
        Horizontal = <any> 'Horizontal',
        HorizontalIn = <any> 'HorizontalIn',
        HorizontalOut = <any> 'HorizontalOut',
        In = <any> 'In',
        InBottom = <any> 'InBottom',
        InCenter = <any> 'InCenter',
        InSlightly = <any> 'InSlightly',
        Instant = <any> 'Instant',
        Left = <any> 'Left',
        OrdinalMask = <any> 'OrdinalMask',
        Out = <any> 'Out',
        OutBottom = <any> 'OutBottom',
        OutCenter = <any> 'OutCenter',
        OutSlightly = <any> 'OutSlightly',
        Right = <any> 'Right',
        Slightly = <any> 'Slightly',
        Top = <any> 'Top',
        TopLeft = <any> 'TopLeft',
        TopRight = <any> 'TopRight',
        Up = <any> 'Up',
        UpLeft = <any> 'UpLeft',
        UpRight = <any> 'UpRight',
        Vertical = <any> 'Vertical',
        VerticalIn = <any> 'VerticalIn',
        VerticalOut = <any> 'VerticalOut',
        Wheel1 = <any> 'Wheel1',
        Wheel2 = <any> 'Wheel2',
        Wheel3 = <any> 'Wheel3',
        Wheel4 = <any> 'Wheel4',
        Wheel8 = <any> 'Wheel8'
    }
    export enum PresetClassTypeEnum {
        Entrance = <any> 'Entrance',
        Exit = <any> 'Exit',
        Emphasis = <any> 'Emphasis',
        Path = <any> 'Path',
        MediaCall = <any> 'MediaCall',
        OLEActionVerbs = <any> 'OLEActionVerbs'
    }
    export enum TriggerTypeEnum {
        AfterPrevious = <any> 'AfterPrevious',
        OnClick = <any> 'OnClick',
        WithPrevious = <any> 'WithPrevious'
    }
    export enum RestartEnum {
        Always = <any> 'Always',
        WhenNotActive = <any> 'WhenNotActive',
        Never = <any> 'Never',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Effect format
 */
export class EffectFormat {

    /**
     * blur effect
     */
    blur?: BlurEffect;

    /**
     * glow effect
     */
    glow?: GlowEffect;

    /**
     * inner shadow effect
     */
    innerShadow?: InnerShadowEffect;

    /**
     * outer shadow effect
     */
    outerShadow?: OuterShadowEffect;

    /**
     * preset shadow effect
     */
    presetShadow?: PresetShadowEffect;

    /**
     * soft edge effect
     */
    softEdge?: SoftEdgeEffect;

    /**
     * reflection effect
     */
    reflection?: ReflectionEffect;

    /**
     * fill overlay effect
     */
    fillOverlay?: FillOverlayEffect;

}

/**
 * Information about object existence.
 */
export class EntityExists {

    /**
     * True if the object exists.
     */
    exists: boolean;

}

/**
 * The error details
 */
export class ErrorDetails {

    /**
     * The request id
     */
    requestId?: string;

    /**
     * Date
     */
    date: Date;

}

/**
 * Available export formats
 */
    /**
    * Available export formats
    */
export enum ExportFormat {
    'Pdf' = <any> 'Pdf',
    'Xps' = <any> 'Xps',
    'Tiff' = <any> 'Tiff',
    'Pptx' = <any> 'Pptx',
    'Odp' = <any> 'Odp',
    'Otp' = <any> 'Otp',
    'Ppt' = <any> 'Ppt',
    'Pps' = <any> 'Pps',
    'Ppsx' = <any> 'Ppsx',
    'Pptm' = <any> 'Pptm',
    'Ppsm' = <any> 'Ppsm',
    'Pot' = <any> 'Pot',
    'Potx' = <any> 'Potx',
    'Potm' = <any> 'Potm',
    'Html' = <any> 'Html',
    'Html5' = <any> 'Html5',
    'Swf' = <any> 'Swf',
    'Svg' = <any> 'Svg',
    'Jpeg' = <any> 'Jpeg',
    'Png' = <any> 'Png',
    'Gif' = <any> 'Gif',
    'Bmp' = <any> 'Bmp',
    'Fodp' = <any> 'Fodp',
    'Xaml' = <any> 'Xaml',
    'Mpeg4' = <any> 'Mpeg4'
}

/**
 * Represents export options for whole presentation.
 */
export class ExportOptions {

    /**
     * Default regular font for rendering the presentation. 
     */
    defaultRegularFont?: string;

    /**
     * Gets of sets list of font fallback rules.
     */
    fontFallbackRules?: Array<FontFallbackRule>;

    /**
     * Gets of sets list of font substitution rules.
     */
    fontSubstRules?: Array<FontSubstRule>;

    format?: string;

}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * File or folder name.
     */
    name?: string;

    /**
     * True if it is a folder.
     */
    isFolder: boolean;

    /**
     * File or folder last modified DateTime.
     */
    modifiedDate?: Date;

    /**
     * File or folder size.
     */
    size: number;

    /**
     * File or folder path.
     */
    path?: string;

}

/**
 * File Version
 */
export class FileVersion extends StorageFile {
    constructor() {
        super();
    }

    /**
     * File Version ID.
     */
    versionId?: string;

    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    isLatest: boolean;

}

/**
 * File versions FileVersion.
 */
export class FileVersions {

    /**
     * File versions FileVersion.
     */
    value?: Array<FileVersion>;

}

/**
 * Files list
 */
export class FilesList {

    /**
     * Files and folders contained by folder StorageFile.
     */
    value?: Array<StorageFile>;

}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * List of uploaded file names
     */
    uploaded?: Array<string>;

    /**
     * List of errors.
     */
    errors?: Array<Error>;

}

/**
 * Base class for fill formats 
 */
export class FillFormat {

    type?: FillFormat.TypeEnum;

}
export namespace FillFormat {
    export enum TypeEnum {
        NoFill = <any> 'NoFill',
        Solid = <any> 'Solid',
        Gradient = <any> 'Gradient',
        Pattern = <any> 'Pattern',
        Picture = <any> 'Picture',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Represents fill overlay effect 
 */
export class FillOverlayEffect {

    /**
     * blend mode
     */
    blend: FillOverlayEffect.BlendEnum;

}
export namespace FillOverlayEffect {
    export enum BlendEnum {
        Darken = <any> 'Darken',
        Lighten = <any> 'Lighten',
        Multiply = <any> 'Multiply',
        Overlay = <any> 'Overlay',
        Screen = <any> 'Screen'
    }
}

/**
 * Represents a Fill Overlay effect. A fill overlay may be used to specify an additional fill for an object and blend the two fills together.
 */
export class FillOverlayImageEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = FillOverlayImageEffect.TypeEnum.FillOverlay;
    }

    /**
     * FillBlendMode.
     */
    blend: FillOverlayImageEffect.BlendEnum;

    /**
     * Fill format.
     */
    fillFormat?: FillFormat;

}
export namespace FillOverlayImageEffect {
    export enum BlendEnum {
        Darken = <any> 'Darken',
        Lighten = <any> 'Lighten',
        Multiply = <any> 'Multiply',
        Overlay = <any> 'Overlay',
        Screen = <any> 'Screen'
    }
}

/**
 * Represents font info.
 */
export class FontData {

    /**
     * Font name
     */
    fontName?: string;

    /**
     * Returns true if font is embedded.
     */
    isEmbedded?: boolean;

}

/**
 * Represents font fallback rule.             
 */
export class FontFallbackRule {

    /**
     * First index of continuous unicode range.
     */
    rangeStartIndex: number;

    /**
     * Last index of continuous unicode range.
     */
    rangeEndIndex: number;

    /**
     * List of fallback font links.
     */
    fallbackFontList?: Array<string>;

}

/**
 * Represents font scheme
 */
export class FontScheme extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Gets or sets fonts collection for a \"heading\" part of the slide.
     */
    major?: FontSet;

    /**
     * Gets or sets  the fonts collection for a \"body\" part of the slide.
     */
    minor?: FontSet;

    /**
     * Gets or sets the name.
     */
    name?: string;

}

/**
 * Font set.
 */
export class FontSet {

    /**
     * Complex script font.
     */
    complexScript?: string;

    /**
     * East Asian font.
     */
    eastAsian?: string;

    /**
     * Latin font.
     */
    latin?: string;

}

/**
 * Represents font substitution rule.
 */
export class FontSubstRule {

    /**
     * Font to substitute.
     */
    sourceFont?: string;

    /**
     * Substitution font.
     */
    targetFont?: string;

    /**
     * Substitute when font is not found. Default: true.
     */
    notFoundOnly?: boolean;

}

/**
 * List of fonts data
 */
export class FontsData {

    /**
     * Fonts data list.
     */
    list?: Array<FontData>;

}

/**
 * Represents Format Scheme for slide's theme
 */
export class FormatScheme extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Background styles.
     */
    backgroundStyles?: Array<FillFormat>;

    /**
     * Effect styles.
     */
    effectStyles?: Array<EffectFormat>;

    /**
     * Fill styles.
     */
    fillStyles?: Array<FillFormat>;

    /**
     * Line style.
     */
    lineStyles?: Array<LineFormat>;

}

/**
 * Specifies the fraction object, consisting of a numerator and denominator separated by a fraction bar.
 */
export class FractionElement extends MathElement {
    constructor() {
        super();
        this.type = FractionElement.TypeEnum.Fraction;
    }

    /**
     * Fraction type
     */
    fractionType?: FractionElement.FractionTypeEnum;

    /**
     * Numerator
     */
    numerator?: MathElement;

    /**
     * Denominator
     */
    denominator?: MathElement;

}
export namespace FractionElement {
    export enum FractionTypeEnum {
        Bar = <any> 'Bar',
        Skewed = <any> 'Skewed',
        Linear = <any> 'Linear',
        NoBar = <any> 'NoBar'
    }
}

/**
 * Specifies a function of an argument.
 */
export class FunctionElement extends MathElement {
    constructor() {
        super();
        this.type = FunctionElement.TypeEnum.Function;
    }

    /**
     * Function
     */
    name?: MathElement;

    /**
     * Function Argument
     */
    base?: MathElement;

}
export namespace FunctionElement {
}

/**
 * Represents GeometryPath of the shape
 */
export class GeometryPath {

    /**
     * Path fill mode
     */
    fillMode?: GeometryPath.FillModeEnum;

    /**
     * Stroke
     */
    stroke?: boolean;

    /**
     * List of PathSegmen objects
     */
    pathData?: Array<PathSegment>;

}
export namespace GeometryPath {
    export enum FillModeEnum {
        None = <any> 'None',
        Normal = <any> 'Normal',
        Lighten = <any> 'Lighten',
        LightenLess = <any> 'LightenLess',
        Darken = <any> 'Darken',
        DarkenLess = <any> 'DarkenLess'
    }
}

/**
 * Represents container for GeometryPath objects
 */
export class GeometryPaths {

    /**
     * List of GeometryPath objects
     */
    paths?: Array<GeometryPath>;

}

/**
 * The class provides shared options for image formats.
 */
export class ImageExportOptionsBase extends ExportOptions {
    constructor() {
        super();
    }

    /**
     * Gets or sets the height of slides in the output image format.
     */
    height?: number;

    /**
     * Gets or sets the height of slides in the output the output image format.
     */
    width?: number;

}

/**
 * Provides options that control how a presentation is saved in Gif format.
 */
export class GifExportOptions extends ImageExportOptionsBase {
    constructor() {
        super();
        this.format = 'gif';
    }

    /**
     * Determines whether hidden slides will be exported.
     */
    exportHiddenSlides?: boolean;

    /**
     * Gets or sets transition FPS [frames/sec]
     */
    transitionFps?: number;

    /**
     * Gets or sets default delay time [ms].
     */
    defaultDelay?: number;

}

/**
 * Represents glow effect 
 */
export class GlowEffect {

    /**
     * radius
     */
    radius: number;

    /**
     * color
     */
    color?: string;

}

/**
 * Represents gradient fill format
 */
export class GradientFill extends FillFormat {
    constructor() {
        super();
        this.type = GradientFill.TypeEnum.Gradient;
    }

    /**
     * Gradient style.
     */
    direction: GradientFill.DirectionEnum;

    /**
     * Gradient shape.
     */
    shape: GradientFill.ShapeEnum;

    /**
     * Gradient stops.
     */
    stops?: Array<GradientFillStop>;

    /**
     * Gradient angle.
     */
    linearAngle: number;

    /**
     * True if the gradient is scaled.
     */
    isScaled: boolean;

    /**
     * Gradient flipping mode.
     */
    tileFlip: GradientFill.TileFlipEnum;

}
export namespace GradientFill {
    export enum DirectionEnum {
        FromCorner1 = <any> 'FromCorner1',
        FromCorner2 = <any> 'FromCorner2',
        FromCorner3 = <any> 'FromCorner3',
        FromCorner4 = <any> 'FromCorner4',
        FromCenter = <any> 'FromCenter',
        NotDefined = <any> 'NotDefined'
    }
    export enum ShapeEnum {
        Linear = <any> 'Linear',
        Rectangle = <any> 'Rectangle',
        Radial = <any> 'Radial',
        Path = <any> 'Path',
        NotDefined = <any> 'NotDefined'
    }
    export enum TileFlipEnum {
        NoFlip = <any> 'NoFlip',
        FlipX = <any> 'FlipX',
        FlipY = <any> 'FlipY',
        FlipBoth = <any> 'FlipBoth',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Gradient stop.
 */
export class GradientFillStop {

    /**
     * Color.
     */
    color?: string;

    /**
     * Stop position (0..1).
     */
    position: number;

}

/**
 * Represents AudioFrame resource.
 */
export class GraphicalObject extends ShapeBase {
    constructor() {
        super();
        this.type = GraphicalObject.TypeEnum.GraphicalObject;
    }

}
export namespace GraphicalObject {
}

/**
 * Represents an Gray Scale effect.
 */
export class GrayScaleEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = GrayScaleEffect.TypeEnum.GrayScale;
    }

}
export namespace GrayScaleEffect {
}

/**
 * Represents GroupShape resource.
 */
export class GroupShape extends ShapeBase {
    constructor() {
        super();
        this.type = GroupShape.TypeEnum.GroupShape;
    }

    /**
     * Gets or sets the link to shapes.
     */
    shapes?: ResourceUri;

}
export namespace GroupShape {
}

/**
 * Specifies a grouping symbol above or below an expression, usually to highlight the relationship between elements 
 */
export class GroupingCharacterElement extends MathElement {
    constructor() {
        super();
        this.type = GroupingCharacterElement.TypeEnum.GroupingCharacter;
    }

    /**
     * Base
     */
    base?: MathElement;

    /**
     * Grouping character
     */
    character?: string;

    /**
     * Position of grouping character.
     */
    position?: GroupingCharacterElement.PositionEnum;

    /**
     * Vertical justification of group character.
     */
    verticalJustification?: GroupingCharacterElement.VerticalJustificationEnum;

}
export namespace GroupingCharacterElement {
    export enum PositionEnum {
        NotDefined = <any> 'NotDefined',
        Top = <any> 'Top',
        Bottom = <any> 'Bottom'
    }
    export enum VerticalJustificationEnum {
        NotDefined = <any> 'NotDefined',
        Top = <any> 'Top',
        Bottom = <any> 'Bottom'
    }
}

/**
 * Represents header/footer info of slide
 */
export class HeaderFooter extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * True if date is displayed in the footer
     */
    isDateTimeVisible?: boolean;

    /**
     * Text to be displayed as date in the footer
     */
    dateTimeText?: string;

    /**
     * True if footer is displayed
     */
    isFooterVisible?: boolean;

    /**
     * Text to be displayed in the footer
     */
    footerText?: string;

    /**
     * True if slide number is displayed in the footer
     */
    isSlideNumberVisible?: boolean;

}

/**
 * Represents a Hue/Saturation/Luminance effect.
 */
export class HslEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = HslEffect.TypeEnum.Hsl;
    }

    /**
     * Hue
     */
    hue: number;

    /**
     * Saturation
     */
    saturation: number;

    /**
     * Luminance
     */
    luminance: number;

}
export namespace HslEffect {
}

/**
 * Provides options that control how a presentation is saved in Html5 format.
 */
export class Html5ExportOptions extends ExportOptions {
    constructor() {
        super();
        this.format = 'html5';
    }

    /**
     * Gets or sets transitions animation option.
     */
    animateTransitions?: boolean;

    /**
     * Gets or sets shapes animation option.
     */
    animateShapes?: boolean;

}

/**
 * Provides options that control how a presentation is saved in Html format.
 */
export class HtmlExportOptions extends ExportOptions {
    constructor() {
        super();
        this.format = 'html';
    }

    /**
     * Get or sets flag for save presentation as zip file
     */
    saveAsZip?: boolean;

    /**
     * Get or set name of subdirectory in zip-file for store external files
     */
    subDirectoryName?: string;

    /**
     * Specifies whether the generated document should include hidden slides or not. Default is false. 
     */
    showHiddenSlides?: boolean;

    /**
     * True to make layout responsive by excluding width and height attributes from svg container.
     */
    svgResponsiveLayout?: boolean;

    /**
     * Returns or sets a value determining the quality of the JPEG images inside PDF document.
     */
    jpegQuality?: number;

    /**
     * Represents the pictures compression level
     */
    picturesCompression?: HtmlExportOptions.PicturesCompressionEnum;

    /**
     * A boolean flag indicates if the cropped parts remain as part of the document. If true the cropped  parts will removed, if false they will be serialized in the document (which can possible lead to a  larger file)
     */
    deletePicturesCroppedAreas?: boolean;

    /**
     * Gets or sets the position of the notes on the page.
     */
    notesPosition?: HtmlExportOptions.NotesPositionEnum;

    /**
     * Gets or sets the position of the comments on the page.
     */
    commentsPosition?: HtmlExportOptions.CommentsPositionEnum;

    /**
     * Gets or sets the width of the comment output area in pixels (Applies only if comments are displayed on the right).
     */
    commentsAreaWidth?: number;

    /**
     * Gets or sets the color of comments area (Applies only if comments are displayed on the right).
     */
    commentsAreaColor?: string;

    /**
     * True if comments that have no author are displayed. (Applies only if comments are displayed).
     */
    showCommentsByNoAuthor?: boolean;

}
export namespace HtmlExportOptions {
    export enum PicturesCompressionEnum {
        Dpi330 = <any> 'Dpi330',
        Dpi220 = <any> 'Dpi220',
        Dpi150 = <any> 'Dpi150',
        Dpi96 = <any> 'Dpi96',
        Dpi72 = <any> 'Dpi72',
        DocumentResolution = <any> 'DocumentResolution'
    }
    export enum NotesPositionEnum {
        None = <any> 'None',
        BottomFull = <any> 'BottomFull',
        BottomTruncated = <any> 'BottomTruncated'
    }
    export enum CommentsPositionEnum {
        None = <any> 'None',
        Bottom = <any> 'Bottom',
        Right = <any> 'Right'
    }
}

/**
 * Hyperlink
 */
export class Hyperlink {

    /**
     * If true Hypelink is not applied. 
     */
    isDisabled?: boolean;

    /**
     * Type of HyperLink action             
     */
    actionType: Hyperlink.ActionTypeEnum;

    /**
     * Specifies the external URL
     */
    externalUrl?: string;

    /**
     * Index of the target slide
     */
    targetSlideIndex?: number;

    /**
     * Target frame
     */
    targetFrame?: string;

    /**
     * Hyperlink tooltip
     */
    tooltip?: string;

    /**
     * Makes hyperlink viewed when it is invoked.             
     */
    history?: boolean;

    /**
     * Determines whether the hyperlink should be highlighted on click.
     */
    highlightClick?: boolean;

    /**
     * Determines whether the sound should be stopped on hyperlink click
     */
    stopSoundOnClick?: boolean;

    /**
     * Represents the source of hyperlink color
     */
    colorSource?: Hyperlink.ColorSourceEnum;

    /**
     * Audio data encoded in base64. Represents the playing sound of the hyperlink. 
     */
    soundBase64?: string;

}
export namespace Hyperlink {
    export enum ActionTypeEnum {
        NoAction = <any> 'NoAction',
        Hyperlink = <any> 'Hyperlink',
        JumpFirstSlide = <any> 'JumpFirstSlide',
        JumpPreviousSlide = <any> 'JumpPreviousSlide',
        JumpNextSlide = <any> 'JumpNextSlide',
        JumpLastSlide = <any> 'JumpLastSlide',
        JumpEndShow = <any> 'JumpEndShow',
        JumpLastViewedSlide = <any> 'JumpLastViewedSlide',
        JumpSpecificSlide = <any> 'JumpSpecificSlide',
        StartCustomSlideShow = <any> 'StartCustomSlideShow',
        OpenFile = <any> 'OpenFile',
        OpenPresentation = <any> 'OpenPresentation',
        StartStopMedia = <any> 'StartStopMedia',
        StartMacro = <any> 'StartMacro',
        StartProgram = <any> 'StartProgram',
        Unknown = <any> 'Unknown'
    }
    export enum ColorSourceEnum {
        Styles = <any> 'Styles',
        PortionFormat = <any> 'PortionFormat'
    }
}

/**
 * Represents export options for whole presentation.
 */
export class IShapeExportOptions {

}

/**
 * Represents image DTO.
 */
export class Image extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Get or sets the width of an image.
     */
    width: number;

    /**
     * Get or sets the height of an image.
     */
    height: number;

    /**
     * Get or sets the content type of an image.
     */
    contentType?: string;

}

/**
 * Represents a format for image export.
 */
    /**
    * Represents a format for image export.
    */
export enum ImageExportFormat {
    'Jpeg' = <any> 'Jpeg',
    'Png' = <any> 'Png',
    'Gif' = <any> 'Gif',
    'Bmp' = <any> 'Bmp',
    'Tiff' = <any> 'Tiff'
}

/**
 * Provides options that control how a presentation is saved in an image format.
 */
export class ImageExportOptions extends ImageExportOptionsBase {
    constructor() {
        super();
        this.format = 'image';
    }

    /**
     * Gets or sets the position of the notes on the page.
     */
    notesPosition?: ImageExportOptions.NotesPositionEnum;

    /**
     * Gets or sets the position of the comments on the page.
     */
    commentsPosition?: ImageExportOptions.CommentsPositionEnum;

    /**
     * Gets or sets the width of the comment output area in pixels (Applies only if comments are displayed on the right).
     */
    commentsAreaWidth?: number;

    /**
     * Gets or sets the color of comments area (Applies only if comments are displayed on the right).
     */
    commentsAreaColor?: string;

    /**
     * Show hidden slides. If true, hidden are exported.
     */
    showHiddenSlides?: boolean;

}
export namespace ImageExportOptions {
    export enum NotesPositionEnum {
        None = <any> 'None',
        BottomFull = <any> 'BottomFull',
        BottomTruncated = <any> 'BottomTruncated'
    }
    export enum CommentsPositionEnum {
        None = <any> 'None',
        Bottom = <any> 'Bottom',
        Right = <any> 'Right'
    }
}

/**
 * List of images.
 */
export class Images extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Image list.
     */
    list?: Array<Image>;

}

/**
 * Represents inner shadow effect 
 */
export class InnerShadowEffect {

    /**
     * direction
     */
    direction: number;

    /**
     * distance
     */
    distance: number;

    /**
     * blur radius
     */
    blurRadius: number;

    /**
     * shadow color
     */
    shadowColor?: string;

}

/**
 * Represents input document for pipeline.
 */
export class Input {

    /**
     * Get or sets template document. If property is null new empty presentation will be created.
     */
    template?: InputFile;

    /**
     * Get or sets html data for generate new presentation.
     */
    htmlData?: InputFile;

    /**
     * Get or sets data for template engine.
     */
    templateData?: InputFile;

}

/**
 * Represents comments collection of slide
 */
export class InteractiveSequence {

    /**
     * Effect list.
     */
    effects?: Array<Effect>;

    /**
     * Index of the shape that triggers the sequence.
     */
    triggerShapeIndex: number;

}

/**
 * Layout slide.
 */
export class LayoutSlide extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Name.
     */
    name?: string;

    /**
     * Layout slide type.
     */
    type: LayoutSlide.TypeEnum;

    /**
     * Master slide link.
     */
    masterSlide?: ResourceUri;

    /**
     * List of depending slides.
     */
    dependingSlides?: Array<ResourceUri>;

}
export namespace LayoutSlide {
    export enum TypeEnum {
        Title = <any> 'Title',
        Text = <any> 'Text',
        TwoColumnText = <any> 'TwoColumnText',
        Table = <any> 'Table',
        TextAndChart = <any> 'TextAndChart',
        ChartAndText = <any> 'ChartAndText',
        Diagram = <any> 'Diagram',
        Chart = <any> 'Chart',
        TextAndClipArt = <any> 'TextAndClipArt',
        ClipArtAndText = <any> 'ClipArtAndText',
        TitleOnly = <any> 'TitleOnly',
        Blank = <any> 'Blank',
        TextAndObject = <any> 'TextAndObject',
        ObjectAndText = <any> 'ObjectAndText',
        Object = <any> 'Object',
        TitleAndObject = <any> 'TitleAndObject',
        TextAndMedia = <any> 'TextAndMedia',
        MediaAndText = <any> 'MediaAndText',
        ObjectOverText = <any> 'ObjectOverText',
        TextOverObject = <any> 'TextOverObject',
        TextAndTwoObjects = <any> 'TextAndTwoObjects',
        TwoObjectsAndText = <any> 'TwoObjectsAndText',
        TwoObjectsOverText = <any> 'TwoObjectsOverText',
        FourObjects = <any> 'FourObjects',
        VerticalText = <any> 'VerticalText',
        ClipArtAndVerticalText = <any> 'ClipArtAndVerticalText',
        VerticalTitleAndText = <any> 'VerticalTitleAndText',
        VerticalTitleAndTextOverChart = <any> 'VerticalTitleAndTextOverChart',
        TwoObjects = <any> 'TwoObjects',
        ObjectAndTwoObject = <any> 'ObjectAndTwoObject',
        TwoObjectsAndObject = <any> 'TwoObjectsAndObject',
        SectionHeader = <any> 'SectionHeader',
        TwoTextAndTwoObjects = <any> 'TwoTextAndTwoObjects',
        TitleObjectAndCaption = <any> 'TitleObjectAndCaption',
        PictureAndCaption = <any> 'PictureAndCaption',
        Custom = <any> 'Custom'
    }
}

/**
 * Layout slide list.
 */
export class LayoutSlides extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * List of layout slide links.
     */
    slideList?: Array<ResourceUri>;

}

/**
 * Specifies the Sub-Superscript object
 */
export class LeftSubSuperscriptElement extends MathElement {
    constructor() {
        super();
        this.type = LeftSubSuperscriptElement.TypeEnum.LeftSubSuperscriptElement;
    }

    /**
     * Base argument
     */
    base?: MathElement;

    /**
     * Subscript
     */
    subscript?: MathElement;

    /**
     * Superscript
     */
    superscript?: MathElement;

}
export namespace LeftSubSuperscriptElement {
}

/**
 * Represents a chart legend
 */
export class Legend {

    /**
     * position
     */
    position?: Legend.PositionEnum;

    /**
     * the X location
     */
    x?: number;

    /**
     * the Y location
     */
    y?: number;

    /**
     * Width
     */
    width?: number;

    /**
     * Height
     */
    height?: number;

    /**
     * true if other elements are allowed to overlay the legend
     */
    overlay?: boolean;

    /**
     * Get or sets the fill format.
     */
    fillFormat?: FillFormat;

    /**
     * Get or sets the effect format.
     */
    effectFormat?: EffectFormat;

    /**
     * Get or sets the line format.
     */
    lineFormat?: LineFormat;

    /**
     * Get or sets value determines the visibility of legend
     */
    hasLegend?: boolean;

}
export namespace Legend {
    export enum PositionEnum {
        Bottom = <any> 'Bottom',
        Left = <any> 'Left',
        Right = <any> 'Right',
        Top = <any> 'Top',
        TopRight = <any> 'TopRight'
    }
}

/**
 * Light rig
 */
export class LightRig {

    /**
     * Light direction
     */
    direction?: LightRig.DirectionEnum;

    /**
     * Light type
     */
    lightType?: LightRig.LightTypeEnum;

    /**
     * XRotation
     */
    xRotation?: number;

    /**
     * YRotation
     */
    yRotation?: number;

    /**
     * ZRotation
     */
    zRotation?: number;

}
export namespace LightRig {
    export enum DirectionEnum {
        TopLeft = <any> 'TopLeft',
        Top = <any> 'Top',
        TopRight = <any> 'TopRight',
        Right = <any> 'Right',
        BottomRight = <any> 'BottomRight',
        Bottom = <any> 'Bottom',
        BottomLeft = <any> 'BottomLeft',
        Left = <any> 'Left',
        NotDefined = <any> 'NotDefined'
    }
    export enum LightTypeEnum {
        Balanced = <any> 'Balanced',
        BrightRoom = <any> 'BrightRoom',
        Chilly = <any> 'Chilly',
        Contrasting = <any> 'Contrasting',
        Flat = <any> 'Flat',
        Flood = <any> 'Flood',
        Freezing = <any> 'Freezing',
        Glow = <any> 'Glow',
        Harsh = <any> 'Harsh',
        LegacyFlat1 = <any> 'LegacyFlat1',
        LegacyFlat2 = <any> 'LegacyFlat2',
        LegacyFlat3 = <any> 'LegacyFlat3',
        LegacyFlat4 = <any> 'LegacyFlat4',
        LegacyHarsh1 = <any> 'LegacyHarsh1',
        LegacyHarsh2 = <any> 'LegacyHarsh2',
        LegacyHarsh3 = <any> 'LegacyHarsh3',
        LegacyHarsh4 = <any> 'LegacyHarsh4',
        LegacyNormal1 = <any> 'LegacyNormal1',
        LegacyNormal2 = <any> 'LegacyNormal2',
        LegacyNormal3 = <any> 'LegacyNormal3',
        LegacyNormal4 = <any> 'LegacyNormal4',
        Morning = <any> 'Morning',
        Soft = <any> 'Soft',
        Sunrise = <any> 'Sunrise',
        Sunset = <any> 'Sunset',
        ThreePt = <any> 'ThreePt',
        TwoPt = <any> 'TwoPt',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Specifies the Limit object
 */
export class LimitElement extends MathElement {
    constructor() {
        super();
        this.type = LimitElement.TypeEnum.Limit;
    }

    /**
     * Base
     */
    base?: MathElement;

    /**
     * Limit
     */
    limit?: MathElement;

    /**
     * Specifies upper or lower limit
     */
    upperLimit?: boolean;

}
export namespace LimitElement {
}

/**
 * Line format.
 */
export class LineFormat {

    /**
     * Alignment.
     */
    alignment?: LineFormat.AlignmentEnum;

    /**
     * Cap style.
     */
    capStyle?: LineFormat.CapStyleEnum;

    /**
     * Dash style.
     */
    dashStyle?: LineFormat.DashStyleEnum;

    /**
     * Join style.
     */
    joinStyle?: LineFormat.JoinStyleEnum;

    /**
     * Style.
     */
    style?: LineFormat.StyleEnum;

    /**
     * Sketch type.
     */
    sketchType?: LineFormat.SketchTypeEnum;

    /**
     * Begin arrowhead.
     */
    beginArrowHead?: ArrowHeadProperties;

    /**
     * End arrowhead.
     */
    endArrowHead?: ArrowHeadProperties;

    /**
     * Custom dash pattern.
     */
    customDashPattern?: CustomDashPattern;

    /**
     * Fill format.
     */
    fillFormat?: FillFormat;

    /**
     * Miter limit.
     */
    miterLimit?: number;

    /**
     * Width.
     */
    width?: number;

}
export namespace LineFormat {
    export enum AlignmentEnum {
        Center = <any> 'Center',
        Inset = <any> 'Inset',
        NotDefined = <any> 'NotDefined'
    }
    export enum CapStyleEnum {
        Round = <any> 'Round',
        Square = <any> 'Square',
        Flat = <any> 'Flat',
        NotDefined = <any> 'NotDefined'
    }
    export enum DashStyleEnum {
        Solid = <any> 'Solid',
        Dot = <any> 'Dot',
        Dash = <any> 'Dash',
        LargeDash = <any> 'LargeDash',
        DashDot = <any> 'DashDot',
        LargeDashDot = <any> 'LargeDashDot',
        LargeDashDotDot = <any> 'LargeDashDotDot',
        SystemDash = <any> 'SystemDash',
        SystemDot = <any> 'SystemDot',
        SystemDashDot = <any> 'SystemDashDot',
        SystemDashDotDot = <any> 'SystemDashDotDot',
        Custom = <any> 'Custom',
        NotDefined = <any> 'NotDefined'
    }
    export enum JoinStyleEnum {
        Round = <any> 'Round',
        Bevel = <any> 'Bevel',
        Miter = <any> 'Miter',
        NotDefined = <any> 'NotDefined'
    }
    export enum StyleEnum {
        Single = <any> 'Single',
        ThinThin = <any> 'ThinThin',
        ThinThick = <any> 'ThinThick',
        ThickThin = <any> 'ThickThin',
        ThickBetweenThin = <any> 'ThickBetweenThin',
        NotDefined = <any> 'NotDefined'
    }
    export enum SketchTypeEnum {
        None = <any> 'None',
        Curved = <any> 'Curved',
        Freehand = <any> 'Freehand',
        Scribble = <any> 'Scribble',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Line segment of the geometry path
 */
export class LineToPathSegment extends PathSegment {
    constructor() {
        super();
        this.type = LineToPathSegment.TypeEnum.LineTo;
    }

    /**
     * X coordinate of the end point of the line
     */
    x: number;

    /**
     * Y coordinate of the end point of the line
     */
    y: number;

}
export namespace LineToPathSegment {
}

/**
 * Represents string or double literals data source.
 */
export class Literals extends DataSource {
    constructor() {
        super();
        this.type = Literals.TypeEnum.Literals;
    }

}
export namespace Literals {
}

/**
 * Represents a Luminance effect.
 */
export class LuminanceEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = LuminanceEffect.TypeEnum.Luminance;
    }

    /**
     * Brightness
     */
    brightness: number;

    /**
     * Contrast
     */
    contrast: number;

}
export namespace LuminanceEffect {
}

/**
 * Master slide.
 */
export class MasterSlide extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Name.
     */
    name?: string;

    /**
     * List of layout slide links.
     */
    layoutSlides?: Array<ResourceUri>;

    /**
     * List of depending slide links.
     */
    dependingSlides?: Array<ResourceUri>;

}

/**
 * Master slide list.
 */
export class MasterSlides extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * List of slide links.
     */
    slideList?: Array<ResourceUri>;

}

/**
 * Mathematical paragraph that is a container for mathematical blocks
 */
export class MathParagraph {

    /**
     * List of math blocks
     */
    mathBlockList?: Array<BlockElement>;

    /**
     * Justification of the math paragraph
     */
    justification?: MathParagraph.JustificationEnum;

}
export namespace MathParagraph {
    export enum JustificationEnum {
        LeftJustified = <any> 'LeftJustified',
        RightJustified = <any> 'RightJustified',
        Centered = <any> 'Centered',
        CenteredAsGroup = <any> 'CenteredAsGroup'
    }
}

/**
 * Specifies the Matrix object,
 */
export class MatrixElement extends MathElement {
    constructor() {
        super();
        this.type = MatrixElement.TypeEnum.Matrix;
    }

    /**
     * Hide the placeholders for empty matrix elements
     */
    hidePlaceholders?: boolean;

    /**
     * Specifies the vertical justification respect to surrounding text. 
     */
    baseJustification?: MatrixElement.BaseJustificationEnum;

    /**
     * Minimum column width in twips (1/20th of a point)
     */
    minColumnWidth?: number;

    /**
     * The type of horizontal spacing between columns of a matrix.
     */
    columnGapRule?: MatrixElement.ColumnGapRuleEnum;

    /**
     * The value of horizontal spacing between columns of a matrix
     */
    columnGap?: number;

    /**
     * The type of vertical spacing between rows of a matrix
     */
    rowGapRule?: MatrixElement.RowGapRuleEnum;

    /**
     * The value of vertical spacing between rows of a matrix;             
     */
    rowGap?: number;

    /**
     * Matrix items
     */
    items?: Array<Array<MathElement>>;

}
export namespace MatrixElement {
    export enum BaseJustificationEnum {
        NotDefined = <any> 'NotDefined',
        Top = <any> 'Top',
        Center = <any> 'Center',
        Bottom = <any> 'Bottom'
    }
    export enum ColumnGapRuleEnum {
        SingleSpacingGap = <any> 'SingleSpacingGap',
        OneAndHalfSpacingGap = <any> 'OneAndHalfSpacingGap',
        DoubleSpacingGap = <any> 'DoubleSpacingGap',
        Exactly = <any> 'Exactly',
        Multiple = <any> 'Multiple'
    }
    export enum RowGapRuleEnum {
        SingleSpacingGap = <any> 'SingleSpacingGap',
        OneAndHalfSpacingGap = <any> 'OneAndHalfSpacingGap',
        DoubleSpacingGap = <any> 'DoubleSpacingGap',
        Exactly = <any> 'Exactly',
        Multiple = <any> 'Multiple'
    }
}

/**
 * Merge presentations task.
 */
export class Merge extends Task {
    constructor() {
        super();
        this.type = Merge.TypeEnum.Merge;
    }

    /**
     * Information about documents and slides being merging sources.
     */
    presentations?: Array<MergingSource>;

}
export namespace Merge {
}

/**
 * Merging source.
 */
export class MergingSource {

    /**
     * Source file.
     */
    input?: InputFile;

    /**
     * Indices of slides to be merged.
     */
    slides?: Array<number>;

}

/**
 * Error
 */
export class ModelError {

    /**
     * Code             
     */
    code?: string;

    /**
     * Message             
     */
    message?: string;

    /**
     * Description             
     */
    description?: string;

    /**
     * Inner Error             
     */
    innerError?: ErrorDetails;

}

/**
 * MoveTo segment of the geometry path
 */
export class MoveToPathSegment extends PathSegment {
    constructor() {
        super();
        this.type = MoveToPathSegment.TypeEnum.MoveTo;
    }

    /**
     * X coordinate of the point.
     */
    x: number;

    /**
     * Y coordinate of the point.
     */
    y: number;

}
export namespace MoveToPathSegment {
}

/**
 * Specifies an N-ary mathematical object, such as Summation and Integral.
 */
export class NaryOperatorElement extends MathElement {
    constructor() {
        super();
        this.type = NaryOperatorElement.TypeEnum.NaryOperator;
    }

    /**
     * Base argument
     */
    base?: MathElement;

    /**
     * Subscript argument
     */
    subscript?: MathElement;

    /**
     * Superscript argument
     */
    superscript?: MathElement;

    /**
     * Nary Operator Character
     */
    operator?: string;

    /**
     * The location of limits (subscript and superscript)
     */
    limitLocation?: NaryOperatorElement.LimitLocationEnum;

    /**
     * Operator Character grows vertically to match its operand height
     */
    growToMatchOperandHeight?: boolean;

    /**
     * Hide Subscript
     */
    hideSubscript?: boolean;

    /**
     * Hide Superscript
     */
    hideSuperscript?: boolean;

}
export namespace NaryOperatorElement {
    export enum LimitLocationEnum {
        NotDefined = <any> 'NotDefined',
        UnderOver = <any> 'UnderOver',
        SubscriptSuperscript = <any> 'SubscriptSuperscript'
    }
}

/**
 * Represents empty fill
 */
export class NoFill extends FillFormat {
    constructor() {
        super();
        this.type = NoFill.TypeEnum.NoFill;
    }

}
export namespace NoFill {
}

/**
 * The sizing of the slide region.
 */
export class NormalViewRestoredProperties {

    /**
     * True if the size of the side content region should compensate for the new size when resizing the window containing the view within the application.
     */
    autoAdjust?: boolean;

    /**
     * The size of the slide region.
     */
    dimensionSize?: number;

}

/**
 * Represents notes slide DTO.
 */
export class NotesSlide extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Get or sets text of notes slide.
     */
    text?: string;

    /**
     * Get or sets the  link to list notes slide shapes.
     */
    shapes?: ResourceUri;

}

/**
 * Represents a format for notes slide export.
 */
    /**
    * Represents a format for notes slide export.
    */
export enum NotesSlideExportFormat {
    'Jpeg' = <any> 'Jpeg',
    'Png' = <any> 'Png',
    'Gif' = <any> 'Gif',
    'Bmp' = <any> 'Bmp',
    'Tiff' = <any> 'Tiff',
    'Html' = <any> 'Html',
    'Pdf' = <any> 'Pdf',
    'Xps' = <any> 'Xps',
    'Pptx' = <any> 'Pptx',
    'Odp' = <any> 'Odp',
    'Otp' = <any> 'Otp',
    'Ppt' = <any> 'Ppt',
    'Pps' = <any> 'Pps',
    'Ppsx' = <any> 'Ppsx',
    'Pptm' = <any> 'Pptm',
    'Ppsm' = <any> 'Ppsm',
    'Potx' = <any> 'Potx',
    'Pot' = <any> 'Pot',
    'Potm' = <any> 'Potm',
    'Svg' = <any> 'Svg',
    'Fodp' = <any> 'Fodp',
    'Xaml' = <any> 'Xaml',
    'Html5' = <any> 'Html5'
}

/**
 * Represents header/footer info of notes slide
 */
export class NotesSlideHeaderFooter extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * True if date is displayed in the footer
     */
    isDateTimeVisible?: boolean;

    /**
     * Text to be displayed as date in the footer
     */
    dateTimeText?: string;

    /**
     * True if footer is displayed
     */
    isFooterVisible?: boolean;

    /**
     * Text to be displayed in the footer
     */
    footerText?: string;

    /**
     * True if header is displayed
     */
    isHeaderVisible?: boolean;

    /**
     * Text to be displayed in the header
     */
    headerText?: string;

    /**
     * True if slide number is displayed in the footer
     */
    isSlideNumberVisible?: boolean;

}

/**
 * Object exists
 */
export class ObjectExist {

    /**
     * Indicates that the file or folder exists.
     */
    exists: boolean;

    /**
     * True if it is a folder, false if it is a file.
     */
    isFolder: boolean;

}

/**
 * Represents OleObjectFrame resource.
 */
export class OleObjectFrame extends ShapeBase {
    constructor() {
        super();
        this.type = OleObjectFrame.TypeEnum.OleObjectFrame;
    }

    /**
     * True if an object is visible as icon.
     */
    isObjectIcon: boolean;

    /**
     * The title for OleObject icon.             
     */
    substitutePictureTitle?: string;

    /**
     * OleObject image fill properties.
     */
    substitutePictureFormat?: PictureFill;

    /**
     * Returns or sets the name of an object.
     */
    objectName?: string;

    /**
     * File data of embedded OLE object. 
     */
    embeddedFileBase64Data?: string;

    /**
     * File extension for the current embedded OLE object
     */
    embeddedFileExtension?: string;

    /**
     * ProgID of an object.
     */
    objectProgId?: string;

    /**
     * Full path to a linked file.
     */
    linkPath?: string;

    /**
     * Determines if the linked embedded object is automatically updated when the presentation is opened or printed. Read/write Boolean.
     */
    updateAutomatic?: boolean;

}
export namespace OleObjectFrame {
}

/**
 * One value chart data point.
 */
export class OneValueChartDataPoint extends DataPoint {
    constructor() {
        super();
        this.type = OneValueChartDataPoint.TypeEnum.OneValue;
    }

    /**
     * Value.
     */
    value?: number;

    /**
     * Spreadsheet formula in A1-style.
     */
    valueFormula?: string;

    /**
     * SetAsTotal. Applied to Waterfall data points only.
     */
    setAsTotal?: boolean;

    /**
     * True if the data point shall invert its colors if the value is negative. Applies to bar, column and bubble series.
     */
    invertIfNegative?: boolean;

}
export namespace OneValueChartDataPoint {
}

/**
 * One value series.
 */
export class OneValueSeries extends Series {
    constructor() {
        super();
        this.dataPointType = OneValueSeries.DataPointTypeEnum.OneValue;
    }

    /**
     * Gets or sets the values.
     */
    dataPoints?: Array<OneValueChartDataPoint>;

    /**
     * The number format for the series values.
     */
    numberFormatOfValues?: string;

    /**
     * Data source type for values.
     */
    dataSourceForValues?: DataSource;

    /**
     * True if inner points are shown. Applied to Waterfall series only.
     */
    showConnectorLines?: boolean;

    /**
     * Quartile method. Applied to BoxAndWhisker series only.
     */
    quartileMethod?: OneValueSeries.QuartileMethodEnum;

    /**
     * True if inner points are shown. Applied to BoxAndWhisker series only.
     */
    showInnerPoints?: boolean;

    /**
     * True if mean line is shown. Applied to BoxAndWhisker series only.
     */
    showMeanLine?: boolean;

    /**
     * True if mean markers are shown. Applied to BoxAndWhisker series only.
     */
    showMeanMarkers?: boolean;

    /**
     * True if outlier points are shown. Applied to BoxAndWhisker series only.
     */
    showOutlierPoints?: boolean;

}
export namespace OneValueSeries {
    export enum QuartileMethodEnum {
        Exclusive = <any> 'Exclusive',
        Inclusive = <any> 'Inclusive'
    }
}

/**
 * Request for presentations merge with optional order of slides
 */
export class OrderedMergeRequest {

    /**
     * Gets or sets the presentation paths.
     */
    presentations?: Array<PresentationToMerge>;

}

/**
 * Represents outer shadow effect 
 */
export class OuterShadowEffect {

    /**
     * direction
     */
    direction: number;

    /**
     * distance
     */
    distance: number;

    /**
     * blur radius
     */
    blurRadius: number;

    /**
     * shadow color
     */
    shadowColor?: string;

}

/**
 * Represents output file destination in pipeline.
 */
export class OutputFile {

    type?: OutputFile.TypeEnum;

}
export namespace OutputFile {
    export enum TypeEnum {
        Path = <any> 'Path',
        Response = <any> 'Response'
    }
}

/**
 * Represents paragraph resource
 */
export class Paragraph extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Left margin.
     */
    marginLeft?: number;

    /**
     * Right margin.
     */
    marginRight?: number;

    /**
     * Left spacing.
     */
    spaceBefore?: number;

    /**
     * Right spacing.
     */
    spaceAfter?: number;

    /**
     * Spacing between lines.
     */
    spaceWithin?: number;

    /**
     * First line indent.
     */
    indent?: number;

    /**
     * Text alignment.
     */
    alignment?: Paragraph.AlignmentEnum;

    /**
     * Font alignment.
     */
    fontAlignment?: Paragraph.FontAlignmentEnum;

    /**
     * Default tabulation size.
     */
    defaultTabSize?: number;

    /**
     * Depth.
     */
    depth?: number;

    /**
     * True if hanging punctuation is used with the paragraph.
     */
    hangingPunctuation?: Paragraph.HangingPunctuationEnum;

    /**
     * True if East Asian line break is used with the paragraph.
     */
    eastAsianLineBreak?: Paragraph.EastAsianLineBreakEnum;

    /**
     * True if Latin line break is used with the paragraph.
     */
    latinLineBreak?: Paragraph.LatinLineBreakEnum;

    /**
     * True if right to left direction is used with the paragraph.
     */
    rightToLeft?: Paragraph.RightToLeftEnum;

    /**
     * List of portion links.
     */
    portionList?: Array<Portion>;

    /**
     * Default portion format.
     */
    defaultPortionFormat?: PortionFormat;

    /**
     * Bullet char.
     */
    bulletChar?: string;

    /**
     * Bullet height.
     */
    bulletHeight?: number;

    /**
     * Bullet type.
     */
    bulletType?: Paragraph.BulletTypeEnum;

    /**
     * Starting number for a numbered bullet.
     */
    numberedBulletStartWith?: number;

    /**
     * Numbered bullet style.
     */
    numberedBulletStyle?: Paragraph.NumberedBulletStyleEnum;

    /**
     * Bullet fill format.
     */
    bulletFillFormat?: FillFormat;

}
export namespace Paragraph {
    export enum AlignmentEnum {
        Left = <any> 'Left',
        Center = <any> 'Center',
        Right = <any> 'Right',
        Justify = <any> 'Justify',
        JustifyLow = <any> 'JustifyLow',
        Distributed = <any> 'Distributed',
        NotDefined = <any> 'NotDefined'
    }
    export enum FontAlignmentEnum {
        Automatic = <any> 'Automatic',
        Top = <any> 'Top',
        Center = <any> 'Center',
        Bottom = <any> 'Bottom',
        Baseline = <any> 'Baseline',
        Default = <any> 'Default'
    }
    export enum HangingPunctuationEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum EastAsianLineBreakEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum LatinLineBreakEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum RightToLeftEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum BulletTypeEnum {
        None = <any> 'None',
        Symbol = <any> 'Symbol',
        Numbered = <any> 'Numbered',
        Picture = <any> 'Picture',
        NotDefined = <any> 'NotDefined'
    }
    export enum NumberedBulletStyleEnum {
        BulletAlphaLCPeriod = <any> 'BulletAlphaLCPeriod',
        BulletAlphaUCPeriod = <any> 'BulletAlphaUCPeriod',
        BulletArabicParenRight = <any> 'BulletArabicParenRight',
        BulletArabicPeriod = <any> 'BulletArabicPeriod',
        BulletRomanLCParenBoth = <any> 'BulletRomanLCParenBoth',
        BulletRomanLCParenRight = <any> 'BulletRomanLCParenRight',
        BulletRomanLCPeriod = <any> 'BulletRomanLCPeriod',
        BulletRomanUCPeriod = <any> 'BulletRomanUCPeriod',
        BulletAlphaLCParenBoth = <any> 'BulletAlphaLCParenBoth',
        BulletAlphaLCParenRight = <any> 'BulletAlphaLCParenRight',
        BulletAlphaUCParenBoth = <any> 'BulletAlphaUCParenBoth',
        BulletAlphaUCParenRight = <any> 'BulletAlphaUCParenRight',
        BulletArabicParenBoth = <any> 'BulletArabicParenBoth',
        BulletArabicPlain = <any> 'BulletArabicPlain',
        BulletRomanUCParenBoth = <any> 'BulletRomanUCParenBoth',
        BulletRomanUCParenRight = <any> 'BulletRomanUCParenRight',
        BulletSimpChinPlain = <any> 'BulletSimpChinPlain',
        BulletSimpChinPeriod = <any> 'BulletSimpChinPeriod',
        BulletCircleNumDBPlain = <any> 'BulletCircleNumDBPlain',
        BulletCircleNumWDWhitePlain = <any> 'BulletCircleNumWDWhitePlain',
        BulletCircleNumWDBlackPlain = <any> 'BulletCircleNumWDBlackPlain',
        BulletTradChinPlain = <any> 'BulletTradChinPlain',
        BulletTradChinPeriod = <any> 'BulletTradChinPeriod',
        BulletArabicAlphaDash = <any> 'BulletArabicAlphaDash',
        BulletArabicAbjadDash = <any> 'BulletArabicAbjadDash',
        BulletHebrewAlphaDash = <any> 'BulletHebrewAlphaDash',
        BulletKanjiKoreanPlain = <any> 'BulletKanjiKoreanPlain',
        BulletKanjiKoreanPeriod = <any> 'BulletKanjiKoreanPeriod',
        BulletArabicDBPlain = <any> 'BulletArabicDBPlain',
        BulletArabicDBPeriod = <any> 'BulletArabicDBPeriod',
        BulletThaiAlphaPeriod = <any> 'BulletThaiAlphaPeriod',
        BulletThaiAlphaParenRight = <any> 'BulletThaiAlphaParenRight',
        BulletThaiAlphaParenBoth = <any> 'BulletThaiAlphaParenBoth',
        BulletThaiNumPeriod = <any> 'BulletThaiNumPeriod',
        BulletThaiNumParenRight = <any> 'BulletThaiNumParenRight',
        BulletThaiNumParenBoth = <any> 'BulletThaiNumParenBoth',
        BulletHindiAlphaPeriod = <any> 'BulletHindiAlphaPeriod',
        BulletHindiNumPeriod = <any> 'BulletHindiNumPeriod',
        BulletKanjiSimpChinDBPeriod = <any> 'BulletKanjiSimpChinDBPeriod',
        BulletHindiNumParenRight = <any> 'BulletHindiNumParenRight',
        BulletHindiAlpha1Period = <any> 'BulletHindiAlpha1Period',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Paragraph formatting properties.
 */
export class ParagraphFormat {

    /**
     * Depth.
     */
    depth?: number;

    /**
     * Text alignment.
     */
    alignment?: ParagraphFormat.AlignmentEnum;

    /**
     * Left margin.
     */
    marginLeft?: number;

    /**
     * Right margin.
     */
    marginRight?: number;

    /**
     * Left spacing.
     */
    spaceBefore?: number;

    /**
     * Right spacing.
     */
    spaceAfter?: number;

    /**
     * Spacing between lines.
     */
    spaceWithin?: number;

    /**
     * Font alignment.
     */
    fontAlignment?: ParagraphFormat.FontAlignmentEnum;

    /**
     * First line indent.
     */
    indent?: number;

    /**
     * Determines whether the Right to Left writing is used in a paragraph. No inheritance applied.
     */
    rightToLeft?: ParagraphFormat.RightToLeftEnum;

    /**
     * Determines whether the East Asian line break is used in a paragraph. No inheritance applied.
     */
    eastAsianLineBreak?: ParagraphFormat.EastAsianLineBreakEnum;

    /**
     * Determines whether the Latin line break is used in a paragraph. No inheritance applied.
     */
    latinLineBreak?: ParagraphFormat.LatinLineBreakEnum;

    /**
     * Determines whether the hanging punctuation is used in a paragraph. No inheritance applied.
     */
    hangingPunctuation?: ParagraphFormat.HangingPunctuationEnum;

    /**
     * Returns or sets default tabulation size with no inheritance.
     */
    defaultTabSize?: number;

    /**
     * Default portion format.
     */
    defaultPortionFormat?: PortionFormat;

    /**
     * Bullet char.
     */
    bulletChar?: string;

    /**
     * Bullet height.
     */
    bulletHeight?: number;

    /**
     * Bullet type.
     */
    bulletType?: ParagraphFormat.BulletTypeEnum;

    /**
     * Starting number for a numbered bullet.
     */
    numberedBulletStartWith?: number;

    /**
     * Numbered bullet style.
     */
    numberedBulletStyle?: ParagraphFormat.NumberedBulletStyleEnum;

    /**
     * Bullet fill format.
     */
    bulletFillFormat?: FillFormat;

}
export namespace ParagraphFormat {
    export enum AlignmentEnum {
        Left = <any> 'Left',
        Center = <any> 'Center',
        Right = <any> 'Right',
        Justify = <any> 'Justify',
        JustifyLow = <any> 'JustifyLow',
        Distributed = <any> 'Distributed',
        NotDefined = <any> 'NotDefined'
    }
    export enum FontAlignmentEnum {
        Automatic = <any> 'Automatic',
        Top = <any> 'Top',
        Center = <any> 'Center',
        Bottom = <any> 'Bottom',
        Baseline = <any> 'Baseline',
        Default = <any> 'Default'
    }
    export enum RightToLeftEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum EastAsianLineBreakEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum LatinLineBreakEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum HangingPunctuationEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum BulletTypeEnum {
        None = <any> 'None',
        Symbol = <any> 'Symbol',
        Numbered = <any> 'Numbered',
        Picture = <any> 'Picture',
        NotDefined = <any> 'NotDefined'
    }
    export enum NumberedBulletStyleEnum {
        BulletAlphaLCPeriod = <any> 'BulletAlphaLCPeriod',
        BulletAlphaUCPeriod = <any> 'BulletAlphaUCPeriod',
        BulletArabicParenRight = <any> 'BulletArabicParenRight',
        BulletArabicPeriod = <any> 'BulletArabicPeriod',
        BulletRomanLCParenBoth = <any> 'BulletRomanLCParenBoth',
        BulletRomanLCParenRight = <any> 'BulletRomanLCParenRight',
        BulletRomanLCPeriod = <any> 'BulletRomanLCPeriod',
        BulletRomanUCPeriod = <any> 'BulletRomanUCPeriod',
        BulletAlphaLCParenBoth = <any> 'BulletAlphaLCParenBoth',
        BulletAlphaLCParenRight = <any> 'BulletAlphaLCParenRight',
        BulletAlphaUCParenBoth = <any> 'BulletAlphaUCParenBoth',
        BulletAlphaUCParenRight = <any> 'BulletAlphaUCParenRight',
        BulletArabicParenBoth = <any> 'BulletArabicParenBoth',
        BulletArabicPlain = <any> 'BulletArabicPlain',
        BulletRomanUCParenBoth = <any> 'BulletRomanUCParenBoth',
        BulletRomanUCParenRight = <any> 'BulletRomanUCParenRight',
        BulletSimpChinPlain = <any> 'BulletSimpChinPlain',
        BulletSimpChinPeriod = <any> 'BulletSimpChinPeriod',
        BulletCircleNumDBPlain = <any> 'BulletCircleNumDBPlain',
        BulletCircleNumWDWhitePlain = <any> 'BulletCircleNumWDWhitePlain',
        BulletCircleNumWDBlackPlain = <any> 'BulletCircleNumWDBlackPlain',
        BulletTradChinPlain = <any> 'BulletTradChinPlain',
        BulletTradChinPeriod = <any> 'BulletTradChinPeriod',
        BulletArabicAlphaDash = <any> 'BulletArabicAlphaDash',
        BulletArabicAbjadDash = <any> 'BulletArabicAbjadDash',
        BulletHebrewAlphaDash = <any> 'BulletHebrewAlphaDash',
        BulletKanjiKoreanPlain = <any> 'BulletKanjiKoreanPlain',
        BulletKanjiKoreanPeriod = <any> 'BulletKanjiKoreanPeriod',
        BulletArabicDBPlain = <any> 'BulletArabicDBPlain',
        BulletArabicDBPeriod = <any> 'BulletArabicDBPeriod',
        BulletThaiAlphaPeriod = <any> 'BulletThaiAlphaPeriod',
        BulletThaiAlphaParenRight = <any> 'BulletThaiAlphaParenRight',
        BulletThaiAlphaParenBoth = <any> 'BulletThaiAlphaParenBoth',
        BulletThaiNumPeriod = <any> 'BulletThaiNumPeriod',
        BulletThaiNumParenRight = <any> 'BulletThaiNumParenRight',
        BulletThaiNumParenBoth = <any> 'BulletThaiNumParenBoth',
        BulletHindiAlphaPeriod = <any> 'BulletHindiAlphaPeriod',
        BulletHindiNumPeriod = <any> 'BulletHindiNumPeriod',
        BulletKanjiSimpChinDBPeriod = <any> 'BulletKanjiSimpChinDBPeriod',
        BulletHindiNumParenRight = <any> 'BulletHindiNumParenRight',
        BulletHindiAlpha1Period = <any> 'BulletHindiAlpha1Period',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Represents list of Links to Paragraphs resources
 */
export class Paragraphs extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * List of paragraph links.
     */
    paragraphLinks?: Array<ResourceUri>;

}

/**
 * Represents input file from filesystem.
 */
export class PathInputFile extends InputFile {
    constructor() {
        super();
        this.type = PathInputFile.TypeEnum.Path;
    }

    /**
     * Get or sets path to file.
     */
    path?: string;

    /**
     * Get or sets name of storage.
     */
    storage?: string;

}
export namespace PathInputFile {
}

/**
 * Represents fileSystem file with path.
 */
export class PathOutputFile extends OutputFile {
    constructor() {
        super();
        this.type = PathOutputFile.TypeEnum.Path;
    }

    /**
     * Get or sets path to file.
     */
    path?: string;

    /**
     * Get or sets name of storage.
     */
    storage?: string;

}
export namespace PathOutputFile {
}

/**
 * Represents Pattern Fill
 */
export class PatternFill extends FillFormat {
    constructor() {
        super();
        this.type = PatternFill.TypeEnum.Pattern;
    }

    /**
     * Gets or sets the back color of the pattern fill.
     */
    backColor?: string;

    /**
     * Gets or sets the fore color of the pattern fill.
     */
    foreColor?: string;

    /**
     * Gets or sets the style of pattern fill.
     */
    style: PatternFill.StyleEnum;

}
export namespace PatternFill {
    export enum StyleEnum {
        Unknown = <any> 'Unknown',
        Percent05 = <any> 'Percent05',
        Percent10 = <any> 'Percent10',
        Percent20 = <any> 'Percent20',
        Percent25 = <any> 'Percent25',
        Percent30 = <any> 'Percent30',
        Percent40 = <any> 'Percent40',
        Percent50 = <any> 'Percent50',
        Percent60 = <any> 'Percent60',
        Percent70 = <any> 'Percent70',
        Percent75 = <any> 'Percent75',
        Percent80 = <any> 'Percent80',
        Percent90 = <any> 'Percent90',
        DarkHorizontal = <any> 'DarkHorizontal',
        DarkVertical = <any> 'DarkVertical',
        DarkDownwardDiagonal = <any> 'DarkDownwardDiagonal',
        DarkUpwardDiagonal = <any> 'DarkUpwardDiagonal',
        SmallCheckerBoard = <any> 'SmallCheckerBoard',
        Trellis = <any> 'Trellis',
        LightHorizontal = <any> 'LightHorizontal',
        LightVertical = <any> 'LightVertical',
        LightDownwardDiagonal = <any> 'LightDownwardDiagonal',
        LightUpwardDiagonal = <any> 'LightUpwardDiagonal',
        SmallGrid = <any> 'SmallGrid',
        DottedDiamond = <any> 'DottedDiamond',
        WideDownwardDiagonal = <any> 'WideDownwardDiagonal',
        WideUpwardDiagonal = <any> 'WideUpwardDiagonal',
        DashedUpwardDiagonal = <any> 'DashedUpwardDiagonal',
        DashedDownwardDiagonal = <any> 'DashedDownwardDiagonal',
        NarrowVertical = <any> 'NarrowVertical',
        NarrowHorizontal = <any> 'NarrowHorizontal',
        DashedVertical = <any> 'DashedVertical',
        DashedHorizontal = <any> 'DashedHorizontal',
        LargeConfetti = <any> 'LargeConfetti',
        LargeGrid = <any> 'LargeGrid',
        HorizontalBrick = <any> 'HorizontalBrick',
        LargeCheckerBoard = <any> 'LargeCheckerBoard',
        SmallConfetti = <any> 'SmallConfetti',
        Zigzag = <any> 'Zigzag',
        SolidDiamond = <any> 'SolidDiamond',
        DiagonalBrick = <any> 'DiagonalBrick',
        OutlinedDiamond = <any> 'OutlinedDiamond',
        Plaid = <any> 'Plaid',
        Sphere = <any> 'Sphere',
        Weave = <any> 'Weave',
        DottedGrid = <any> 'DottedGrid',
        Divot = <any> 'Divot',
        Shingle = <any> 'Shingle',
        Wave = <any> 'Wave',
        Horizontal = <any> 'Horizontal',
        Vertical = <any> 'Vertical',
        Cross = <any> 'Cross',
        DownwardDiagonal = <any> 'DownwardDiagonal',
        UpwardDiagonal = <any> 'UpwardDiagonal',
        DiagonalCross = <any> 'DiagonalCross',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Provides options that control how a presentation is saved in Pdf format.
 */
export class PdfExportOptions extends ExportOptions {
    constructor() {
        super();
        this.format = 'pdf';
    }

    /**
     * Specifies compression type to be used for all textual content in the document.
     */
    textCompression?: PdfExportOptions.TextCompressionEnum;

    /**
     * Determines if all characters of font should be embedded or only used subset.
     */
    embedFullFonts?: boolean;

    /**
     * Desired conformance level for generated PDF document.
     */
    compliance?: PdfExportOptions.ComplianceEnum;

    /**
     * Returns or sets a value determining resolution of images inside PDF document.  Property affects on file size, time of export and image quality. The default value is 96.
     */
    sufficientResolution?: number;

    /**
     * Returns or sets a value determining the quality of the JPEG images inside PDF document.
     */
    jpegQuality?: number;

    /**
     * True to draw black frame around each slide.
     */
    drawSlidesFrame?: boolean;

    /**
     * Specifies whether the generated document should include hidden slides or not. Default is false. 
     */
    showHiddenSlides?: boolean;

    /**
     * True to convert all metafiles used in a presentation to the PNG images.
     */
    saveMetafilesAsPng?: boolean;

    /**
     * Setting user password to protect the PDF document. 
     */
    password?: string;

    /**
     * Determines if Aspose.Slides will embed common fonts for ASCII (33..127 code range) text. Fonts for character codes greater than 127 are always embedded. Common fonts list includes PDF's base 14 fonts and additional user specified fonts.
     */
    embedTrueTypeFontsForASCII?: boolean;

    /**
     * Returns or sets an array of user-defined names of font families which Aspose.Slides should consider common.
     */
    additionalCommonFontFamilies?: Array<string>;

    /**
     * Gets or sets the position of the notes on the page.
     */
    notesPosition?: PdfExportOptions.NotesPositionEnum;

    /**
     * Gets or sets the position of the comments on the page.
     */
    commentsPosition?: PdfExportOptions.CommentsPositionEnum;

    /**
     * Gets or sets the width of the comment output area in pixels (Applies only if comments are displayed on the right).
     */
    commentsAreaWidth?: number;

    /**
     * Gets or sets the color of comments area (Applies only if comments are displayed on the right).
     */
    commentsAreaColor?: string;

    /**
     * True if comments that have no author are displayed. (Applies only if comments are displayed).
     */
    showCommentsByNoAuthor?: boolean;

    /**
     * Image transparent color.
     */
    imageTransparentColor?: string;

    /**
     * True to apply specified ImageTransparentColor  to an image.
     */
    applyImageTransparent?: boolean;

    /**
     * Access permissions that should be granted when the document is opened with user access.  Default is AccessPermissions.None.             
     */
    accessPermissions?: AccessPermissions;

}
export namespace PdfExportOptions {
    export enum TextCompressionEnum {
        None = <any> 'None',
        Flate = <any> 'Flate'
    }
    export enum ComplianceEnum {
        Pdf15 = <any> 'Pdf15',
        Pdf16 = <any> 'Pdf16',
        Pdf17 = <any> 'Pdf17',
        PdfA1b = <any> 'PdfA1b',
        PdfA1a = <any> 'PdfA1a',
        PdfA2b = <any> 'PdfA2b',
        PdfA2a = <any> 'PdfA2a',
        PdfA3b = <any> 'PdfA3b',
        PdfA3a = <any> 'PdfA3a',
        PdfUa = <any> 'PdfUa',
        PdfA2u = <any> 'PdfA2u'
    }
    export enum NotesPositionEnum {
        None = <any> 'None',
        BottomFull = <any> 'BottomFull',
        BottomTruncated = <any> 'BottomTruncated'
    }
    export enum CommentsPositionEnum {
        None = <any> 'None',
        Bottom = <any> 'Bottom',
        Right = <any> 'Right'
    }
}

/**
 * Picture fill.
 */
export class PictureFill extends FillFormat {
    constructor() {
        super();
        this.type = PictureFill.TypeEnum.Picture;
    }

    /**
     * Percentage of image height that is cropped from the bottom.
     */
    cropBottom: number;

    /**
     * Percentage of image height that is cropped from the left.
     */
    cropLeft: number;

    /**
     * Percentage of image height that is cropped from the right.
     */
    cropRight: number;

    /**
     * Percentage of image height that is cropped from the top.
     */
    cropTop: number;

    /**
     * Picture resolution.
     */
    dpi: number;

    /**
     * Internal image link.
     */
    image?: ResourceUri;

    /**
     * Base 64 image data.
     */
    base64Data?: string;

    /**
     * SVG image data.
     */
    svgData?: string;

    /**
     * Fill mode.
     */
    pictureFillMode: PictureFill.PictureFillModeEnum;

    /**
     * Image transform effects.
     */
    imageTransformList?: Array<ImageTransformEffect>;

}
export namespace PictureFill {
    export enum PictureFillModeEnum {
        Tile = <any> 'Tile',
        Stretch = <any> 'Stretch'
    }
}

/**
 * Represents PictureFrame resource.
 */
export class PictureFrame extends GeometryShape {
    constructor() {
        super();
        this.type = PictureFrame.TypeEnum.PictureFrame;
    }

    /**
     * Fill format.
     */
    pictureFillFormat?: PictureFill;

}
export namespace PictureFrame {
}

/**
 * Represents pipeline for one input document.
 */
export class Pipeline {

    /**
     * Get or sets input document.
     */
    input?: Input;

    /**
     * Get or sets list of tasks representing pipeline.
     */
    tasks?: Array<Task>;

}

/**
 * Represents placeholder
 */
export class Placeholder extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Index.
     */
    index: number;

    /**
     * Orientation.
     */
    orientation: Placeholder.OrientationEnum;

    /**
     * Size.
     */
    size: Placeholder.SizeEnum;

    /**
     * Placeholder type.
     */
    type: Placeholder.TypeEnum;

    /**
     * Shape link.
     */
    shape?: ResourceUri;

}
export namespace Placeholder {
    export enum OrientationEnum {
        Horizontal = <any> 'Horizontal',
        Vertical = <any> 'Vertical'
    }
    export enum SizeEnum {
        Full = <any> 'Full',
        Half = <any> 'Half',
        Quarter = <any> 'Quarter'
    }
    export enum TypeEnum {
        Title = <any> 'Title',
        Body = <any> 'Body',
        CenteredTitle = <any> 'CenteredTitle',
        Subtitle = <any> 'Subtitle',
        DateAndTime = <any> 'DateAndTime',
        SlideNumber = <any> 'SlideNumber',
        Footer = <any> 'Footer',
        Header = <any> 'Header',
        Object = <any> 'Object',
        Chart = <any> 'Chart',
        Table = <any> 'Table',
        ClipArt = <any> 'ClipArt',
        Diagram = <any> 'Diagram',
        Media = <any> 'Media',
        SlideImage = <any> 'SlideImage',
        Picture = <any> 'Picture'
    }
}

/**
 * Placeholder list.
 */
export class Placeholders extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * List for placeholder links.
     */
    placeholderLinks?: Array<ResourceUri>;

}

/**
 * Represents the plot area
 */
export class PlotArea {

    /**
     * the X location
     */
    x?: number;

    /**
     * the Y location
     */
    y?: number;

    /**
     * Width
     */
    width?: number;

    /**
     * Height
     */
    height?: number;

    /**
     * If layout of the plot area is defined manually specifies whether to layout the plot area by its inside (not including axis and axis labels) or outside.
     */
    layoutTargetType?: PlotArea.LayoutTargetTypeEnum;

    /**
     * Get or sets the fill format.
     */
    fillFormat?: FillFormat;

    /**
     * Get or sets the effect format.
     */
    effectFormat?: EffectFormat;

    /**
     * Get or sets the line format.
     */
    lineFormat?: LineFormat;

}
export namespace PlotArea {
    export enum LayoutTargetTypeEnum {
        Inner = <any> 'Inner',
        Outer = <any> 'Outer'
    }
}

/**
 * Represents portion resource
 */
export class Portion extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Text.
     */
    text?: string;

    /**
     * Math paragraph.
     */
    mathParagraph?: MathParagraph;

    /**
     * True for bold font.
     */
    fontBold?: Portion.FontBoldEnum;

    /**
     * True for italic font.
     */
    fontItalic?: Portion.FontItalicEnum;

    /**
     * Text underline type.
     */
    fontUnderline?: Portion.FontUnderlineEnum;

    /**
     * Text strikethrough type.
     */
    strikethroughType?: Portion.StrikethroughTypeEnum;

    /**
     * Text capitalization type.
     */
    textCapType?: Portion.TextCapTypeEnum;

    /**
     * Superscript or subscript of the text.
     */
    escapement?: number;

    /**
     * Intercharacter spacing increment.
     */
    spacing?: number;

    /**
     * Font color.
     */
    fontColor?: string;

    /**
     * Highlight color.
     */
    highlightColor?: string;

    /**
     * Font height.
     */
    fontHeight?: number;

    /**
     * True to normalize the text.
     */
    normaliseHeight?: Portion.NormaliseHeightEnum;

    /**
     * True if the text proof should be disabled.
     */
    proofDisabled?: Portion.ProofDisabledEnum;

    /**
     * True if smart tag should be cleaned.
     */
    smartTagClean?: boolean;

    /**
     * Minimal font size for kerning.
     */
    kerningMinimalSize?: number;

    /**
     * True if numbers should ignore East-Asian specific vertical text layout.
     */
    kumimoji?: Portion.KumimojiEnum;

    /**
     * Proving language ID.
     */
    languageId?: string;

    /**
     * Alternative proving language ID.
     */
    alternativeLanguageId?: string;

    /**
     * True if underline style has own FillFormat properties.
     */
    isHardUnderlineFill?: Portion.IsHardUnderlineFillEnum;

    /**
     * True if underline style has own LineFormat properties.
     */
    isHardUnderlineLine?: Portion.IsHardUnderlineLineEnum;

    /**
     * Fill format.
     */
    fillFormat?: FillFormat;

    /**
     * Effect format.
     */
    effectFormat?: EffectFormat;

    /**
     * Line format.
     */
    lineFormat?: LineFormat;

    /**
     * Underline fill format.
     */
    underlineFillFormat?: FillFormat;

    /**
     * Underline line format.
     */
    underlineLineFormat?: LineFormat;

    /**
     * Hyperlink defined for mouse click.
     */
    hyperlinkClick?: Hyperlink;

    /**
     * Hyperlink defined for mouse over.
     */
    hyperlinkMouseOver?: Hyperlink;

    /**
     * Returns or sets the Latin font info.
     */
    latinFont?: string;

    /**
     * Returns or sets the East Asian font info.
     */
    eastAsianFont?: string;

    /**
     * Returns or sets the complex script font info.
     */
    complexScriptFont?: string;

}
export namespace Portion {
    export enum FontBoldEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum FontItalicEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum FontUnderlineEnum {
        None = <any> 'None',
        Words = <any> 'Words',
        Single = <any> 'Single',
        Double = <any> 'Double',
        Heavy = <any> 'Heavy',
        Dotted = <any> 'Dotted',
        HeavyDotted = <any> 'HeavyDotted',
        Dashed = <any> 'Dashed',
        HeavyDashed = <any> 'HeavyDashed',
        LongDashed = <any> 'LongDashed',
        HeavyLongDashed = <any> 'HeavyLongDashed',
        DotDash = <any> 'DotDash',
        HeavyDotDash = <any> 'HeavyDotDash',
        DotDotDash = <any> 'DotDotDash',
        HeavyDotDotDash = <any> 'HeavyDotDotDash',
        Wavy = <any> 'Wavy',
        HeavyWavy = <any> 'HeavyWavy',
        DoubleWavy = <any> 'DoubleWavy',
        NotDefined = <any> 'NotDefined'
    }
    export enum StrikethroughTypeEnum {
        None = <any> 'None',
        Single = <any> 'Single',
        Double = <any> 'Double',
        NotDefined = <any> 'NotDefined'
    }
    export enum TextCapTypeEnum {
        None = <any> 'None',
        Small = <any> 'Small',
        All = <any> 'All',
        NotDefined = <any> 'NotDefined'
    }
    export enum NormaliseHeightEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum ProofDisabledEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum KumimojiEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum IsHardUnderlineFillEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum IsHardUnderlineLineEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Represents portion format.
 */
export class PortionFormat {

    /**
     * True for bold font.
     */
    fontBold?: PortionFormat.FontBoldEnum;

    /**
     * True for italic font.
     */
    fontItalic?: PortionFormat.FontItalicEnum;

    /**
     * Text underline type.
     */
    fontUnderline?: PortionFormat.FontUnderlineEnum;

    /**
     * Text strikethrough type.
     */
    strikethroughType?: PortionFormat.StrikethroughTypeEnum;

    /**
     * Text capitalization type.
     */
    textCapType?: PortionFormat.TextCapTypeEnum;

    /**
     * Superscript or subscript of the text.
     */
    escapement?: number;

    /**
     * Intercharacter spacing increment.
     */
    spacing?: number;

    /**
     * Font color.
     */
    fontColor?: string;

    /**
     * Highlight color.
     */
    highlightColor?: string;

    /**
     * Font height.
     */
    fontHeight?: number;

    /**
     * True to normalize the text.
     */
    normaliseHeight?: PortionFormat.NormaliseHeightEnum;

    /**
     * True if the text proof should be disabled.
     */
    proofDisabled?: PortionFormat.ProofDisabledEnum;

    /**
     * True if smart tag should be cleaned.
     */
    smartTagClean?: boolean;

    /**
     * Minimal font size for kerning.
     */
    kerningMinimalSize?: number;

    /**
     * True if numbers should ignore East-Asian specific vertical text layout.
     */
    kumimoji?: PortionFormat.KumimojiEnum;

    /**
     * Proving language ID.
     */
    languageId?: string;

    /**
     * Alternative proving language ID.
     */
    alternativeLanguageId?: string;

    /**
     * True if underline style has own FillFormat properties.
     */
    isHardUnderlineFill?: PortionFormat.IsHardUnderlineFillEnum;

    /**
     * True if underline style has own LineFormat properties.
     */
    isHardUnderlineLine?: PortionFormat.IsHardUnderlineLineEnum;

    /**
     * Fill format.
     */
    fillFormat?: FillFormat;

    /**
     * Effect format.
     */
    effectFormat?: EffectFormat;

    /**
     * Line format.
     */
    lineFormat?: LineFormat;

    /**
     * Underline fill format.
     */
    underlineFillFormat?: FillFormat;

    /**
     * Underline line format.
     */
    underlineLineFormat?: LineFormat;

    /**
     * Hyperlink defined for mouse click.
     */
    hyperlinkClick?: Hyperlink;

    /**
     * Hyperlink defined for mouse over.
     */
    hyperlinkMouseOver?: Hyperlink;

    /**
     * Returns or sets the Latin font info.
     */
    latinFont?: string;

    /**
     * Returns or sets the East Asian font info.
     */
    eastAsianFont?: string;

    /**
     * Returns or sets the complex script font info.
     */
    complexScriptFont?: string;

}
export namespace PortionFormat {
    export enum FontBoldEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum FontItalicEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum FontUnderlineEnum {
        None = <any> 'None',
        Words = <any> 'Words',
        Single = <any> 'Single',
        Double = <any> 'Double',
        Heavy = <any> 'Heavy',
        Dotted = <any> 'Dotted',
        HeavyDotted = <any> 'HeavyDotted',
        Dashed = <any> 'Dashed',
        HeavyDashed = <any> 'HeavyDashed',
        LongDashed = <any> 'LongDashed',
        HeavyLongDashed = <any> 'HeavyLongDashed',
        DotDash = <any> 'DotDash',
        HeavyDotDash = <any> 'HeavyDotDash',
        DotDotDash = <any> 'DotDotDash',
        HeavyDotDotDash = <any> 'HeavyDotDotDash',
        Wavy = <any> 'Wavy',
        HeavyWavy = <any> 'HeavyWavy',
        DoubleWavy = <any> 'DoubleWavy',
        NotDefined = <any> 'NotDefined'
    }
    export enum StrikethroughTypeEnum {
        None = <any> 'None',
        Single = <any> 'Single',
        Double = <any> 'Double',
        NotDefined = <any> 'NotDefined'
    }
    export enum TextCapTypeEnum {
        None = <any> 'None',
        Small = <any> 'Small',
        All = <any> 'All',
        NotDefined = <any> 'NotDefined'
    }
    export enum NormaliseHeightEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum ProofDisabledEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum KumimojiEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum IsHardUnderlineFillEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum IsHardUnderlineLineEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Represents list of Links to Paragraphs resources
 */
export class Portions extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * List of portion links.
     */
    items?: Array<Portion>;

}

/**
 * Provides options that control how a presentation is saved in PPTX format.
 */
export class PptxExportOptions extends ExportOptions {
    constructor() {
        super();
        this.format = 'pptx';
    }

    /**
     * The conformance class to which the PresentationML document conforms. Read/write Conformance.
     */
    conformance?: PptxExportOptions.ConformanceEnum;

}
export namespace PptxExportOptions {
    export enum ConformanceEnum {
        Ecma376 = <any> 'Ecma376',
        Iso29500Transitional = <any> 'Iso29500Transitional',
        Iso29500Strict = <any> 'Iso29500Strict'
    }
}

/**
 * Represents presentation to merge
 */
export class PresentationToMerge {

    /**
     * Get or sets the presentation path
     */
    path?: string;

    /**
     * Get or sets the presentation password
     */
    password?: string;

    /**
     * Get or sets the indexes of slides to merge
     */
    slides?: Array<number>;

    /**
     * Merge (request or storage). 
     */
    source?: PresentationToMerge.SourceEnum;

}
export namespace PresentationToMerge {
    export enum SourceEnum {
        Storage = <any> 'Storage',
        Request = <any> 'Request',
        Url = <any> 'Url'
    }
}

/**
 * Request for presentations merge
 */
export class PresentationsMergeRequest {

    /**
     * Gets or sets the presentation paths.
     */
    presentationPaths?: Array<string>;

    /**
     * Gets or sets the presentation passwords.
     */
    presentationPasswords?: Array<string>;

}

/**
 * Represents preset shadow effect 
 */
export class PresetShadowEffect {

    /**
     * direction
     */
    direction: number;

    /**
     * distance
     */
    distance: number;

    /**
     * preset
     */
    preset: PresetShadowEffect.PresetEnum;

    /**
     * shadow color
     */
    shadowColor?: string;

}
export namespace PresetShadowEffect {
    export enum PresetEnum {
        TopLeftDropShadow = <any> 'TopLeftDropShadow',
        TopLeftLargeDropShadow = <any> 'TopLeftLargeDropShadow',
        BackLeftLongPerspectiveShadow = <any> 'BackLeftLongPerspectiveShadow',
        BackRightLongPerspectiveShadow = <any> 'BackRightLongPerspectiveShadow',
        TopLeftDoubleDropShadow = <any> 'TopLeftDoubleDropShadow',
        BottomRightSmallDropShadow = <any> 'BottomRightSmallDropShadow',
        FrontLeftLongPerspectiveShadow = <any> 'FrontLeftLongPerspectiveShadow',
        FrontRightLongPerspectiveShadow = <any> 'FrontRightLongPerspectiveShadow',
        OuterBoxShadow3D = <any> 'OuterBoxShadow3D',
        InnerBoxShadow3D = <any> 'InnerBoxShadow3D',
        BackCenterPerspectiveShadow = <any> 'BackCenterPerspectiveShadow',
        TopRightDropShadow = <any> 'TopRightDropShadow',
        FrontBottomShadow = <any> 'FrontBottomShadow',
        BackLeftPerspectiveShadow = <any> 'BackLeftPerspectiveShadow',
        BackRightPerspectiveShadow = <any> 'BackRightPerspectiveShadow',
        BottomLeftDropShadow = <any> 'BottomLeftDropShadow',
        BottomRightDropShadow = <any> 'BottomRightDropShadow',
        FrontLeftPerspectiveShadow = <any> 'FrontLeftPerspectiveShadow',
        FrontRightPerspectiveShadow = <any> 'FrontRightPerspectiveShadow',
        TopLeftSmallDropShadow = <any> 'TopLeftSmallDropShadow'
    }
}

/**
 * Protection properties.
 */
export class ProtectionProperties extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * True if document properties are encrypted. Has effect only for password protected presentations.
     */
    encryptDocumentProperties?: boolean;

    /**
     * True if the document should be opened as read-only.
     */
    readOnlyRecommended?: boolean;

    /**
     * Password for read protection.
     */
    readPassword?: string;

    /**
     * Password for write protection.
     */
    writePassword?: string;

    /**
     * Returns true if the presentation protected for editing. 
     */
    isWriteProtected: boolean;

    /**
     * Returns true if the presentation protected for reading. 
     */
    isEncrypted: boolean;

}

/**
 * Quadratic Bezier curve segment of the geometry path
 */
export class QuadraticBezierToPathSegment extends PathSegment {
    constructor() {
        super();
        this.type = QuadraticBezierToPathSegment.TypeEnum.QuadBezierTo;
    }

    /**
     * X coordinate of direction point
     */
    x1: number;

    /**
     * Y coordinate of direction point
     */
    y1: number;

    /**
     * X coordinate of end point
     */
    x2: number;

    /**
     * Y coordinate of end point
     */
    y2: number;

}
export namespace QuadraticBezierToPathSegment {
}

/**
 * Radical function
 */
export class RadicalElement extends MathElement {
    constructor() {
        super();
        this.type = RadicalElement.TypeEnum.Radical;
    }

    /**
     * Base argument
     */
    base?: MathElement;

    /**
     * Degree argument
     */
    degree?: MathElement;

    /**
     * Hide degree
     */
    hideDegree?: boolean;

}
export namespace RadicalElement {
}

/**
 * Represents reflection effect 
 */
export class ReflectionEffect {

    /**
     * direction
     */
    direction: number;

    /**
     * fade direction
     */
    fadeDirection: number;

    /**
     * distance
     */
    distance: number;

    /**
     * blur radius
     */
    blurRadius: number;

    /**
     * scale horizontal
     */
    scaleHorizontal: number;

    /**
     * scale vertical
     */
    scaleVertical: number;

    /**
     * skew horizontal
     */
    skewHorizontal: number;

    /**
     * skew vertical
     */
    skewVertical: number;

    /**
     * start pos alpha
     */
    startPosAlpha: number;

    /**
     * end pos alpha
     */
    endPosAlpha: number;

    /**
     * start reflection opacity
     */
    startReflectionOpacity: number;

    /**
     * end reflection opacity
     */
    endReflectionOpacity: number;

    /**
     * rectangle alignment
     */
    rectangleAlign: ReflectionEffect.RectangleAlignEnum;

    /**
     * true if the reflection should rotate with the shape when the shape is rotated
     */
    rotateShadowWithShape: boolean;

}
export namespace ReflectionEffect {
    export enum RectangleAlignEnum {
        TopLeft = <any> 'TopLeft',
        Top = <any> 'Top',
        TopRight = <any> 'TopRight',
        Left = <any> 'Left',
        Center = <any> 'Center',
        Right = <any> 'Right',
        BottomLeft = <any> 'BottomLeft',
        Bottom = <any> 'Bottom',
        BottomRight = <any> 'BottomRight',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Remove shape task.
 */
export class RemoveShape extends Task {
    constructor() {
        super();
        this.type = RemoveShape.TypeEnum.RemoveShape;
    }

    /**
     * Shape path for a grouped or smart art shape.
     */
    shapePath?: string;

}
export namespace RemoveShape {
}

/**
 * Remove slide task.
 */
export class RemoveSlide extends Task {
    constructor() {
        super();
        this.type = RemoveSlide.TypeEnum.RemoveSlide;
    }

    /**
     * Position of slide to be removed.
     */
    position: number;

}
export namespace RemoveSlide {
}

/**
 * Reorder slide task.
 */
export class ReorderSlide extends Task {
    constructor() {
        super();
        this.type = ReorderSlide.TypeEnum.ReoderSlide;
    }

    /**
     * Old position.
     */
    oldPosition: number;

    /**
     * New position.
     */
    newPosition: number;

}
export namespace ReorderSlide {
}

/**
 * Replace text task.
 */
export class ReplaceText extends Task {
    constructor() {
        super();
        this.type = ReplaceText.TypeEnum.ReplaceText;
    }

    /**
     * Text to be replaced.
     */
    oldText?: string;

    /**
     * Text to replace with.
     */
    newText?: string;

    /**
     * True to ignore case in replace pattern search.
     */
    ignoreCase: boolean;

    /**
     * One-based position of the slide to perform the replace in. 0 to make the replace throughout the presentation.
     */
    slidePosition: number;

}
export namespace ReplaceText {
}

/**
 * Represents input file from multipart request.
 */
export class RequestInputFile extends InputFile {
    constructor() {
        super();
        this.type = RequestInputFile.TypeEnum.Request;
    }

    /**
     * Get or sets index of file from request.
     */
    index: number;

}
export namespace RequestInputFile {
}

/**
 * Reset slide task.
 */
export class ResetSlide extends Task {
    constructor() {
        super();
        this.type = ResetSlide.TypeEnum.ResetSlide;
    }

    /**
     * Slide position.
     */
    position: number;

}
export namespace ResetSlide {
}

/**
 * Represents Resource URI
 */
export class ResourceUri {

    /**
     * Gets or sets the href.
     */
    href?: string;

    /**
     * Gets or sets the relation.
     */
    relation?: string;

    /**
     * Gets or sets the type of link.
     */
    linkType?: string;

    /**
     * Gets or sets the title of link.
     */
    title?: string;

    /**
     * Resource slide index.
     */
    slideIndex?: number;

    /**
     * Resource shape index.
     */
    shapeIndex?: number;

}

/**
 * Represents output file that will be sent to response.
 */
export class ResponseOutputFile extends OutputFile {
    constructor() {
        super();
        this.type = ResponseOutputFile.TypeEnum.Response;
    }

}
export namespace ResponseOutputFile {
}

/**
 * Specifies the Sub-Superscript object
 */
export class RightSubSuperscriptElement extends MathElement {
    constructor() {
        super();
        this.type = RightSubSuperscriptElement.TypeEnum.RightSubSuperscriptElement;
    }

    /**
     * Base argument
     */
    base?: MathElement;

    /**
     * Subscript
     */
    subscript?: MathElement;

    /**
     * Superscript
     */
    superscript?: MathElement;

    /**
     * Alignment of subscript/superscript.
     */
    alignScripts?: boolean;

}
export namespace RightSubSuperscriptElement {
}

/**
 * Save slide task.
 */
export class Save extends Task {
    constructor() {
        super();
        this.type = Save.TypeEnum.Save;
    }

    /**
     * Format.
     */
    format: Save.FormatEnum;

    /**
     * Output file.
     */
    output?: OutputFile;

    /**
     * Save options.
     */
    options?: ExportOptions;

}
export namespace Save {
    export enum FormatEnum {
        Pdf = <any> 'Pdf',
        Xps = <any> 'Xps',
        Tiff = <any> 'Tiff',
        Pptx = <any> 'Pptx',
        Odp = <any> 'Odp',
        Otp = <any> 'Otp',
        Ppt = <any> 'Ppt',
        Pps = <any> 'Pps',
        Ppsx = <any> 'Ppsx',
        Pptm = <any> 'Pptm',
        Ppsm = <any> 'Ppsm',
        Pot = <any> 'Pot',
        Potx = <any> 'Potx',
        Potm = <any> 'Potm',
        Html = <any> 'Html',
        Html5 = <any> 'Html5',
        Swf = <any> 'Swf',
        Svg = <any> 'Svg',
        Jpeg = <any> 'Jpeg',
        Png = <any> 'Png',
        Gif = <any> 'Gif',
        Bmp = <any> 'Bmp',
        Fodp = <any> 'Fodp',
        Xaml = <any> 'Xaml',
        Mpeg4 = <any> 'Mpeg4'
    }
}

/**
 * Save shape task.
 */
export class SaveShape extends Task {
    constructor() {
        super();
        this.type = SaveShape.TypeEnum.SaveShape;
    }

    /**
     * Format.
     */
    format: SaveShape.FormatEnum;

    /**
     * Shape path.
     */
    shapePath?: string;

    /**
     * Output file.
     */
    output?: OutputFile;

    /**
     * Save options.
     */
    options?: IShapeExportOptions;

}
export namespace SaveShape {
    export enum FormatEnum {
        Jpeg = <any> 'Jpeg',
        Png = <any> 'Png',
        Gif = <any> 'Gif',
        Bmp = <any> 'Bmp',
        Tiff = <any> 'Tiff',
        Svg = <any> 'Svg'
    }
}

/**
 * Save slide task.
 */
export class SaveSlide extends Task {
    constructor() {
        super();
        this.type = SaveSlide.TypeEnum.SaveSlide;
    }

    /**
     * Output to save the slide to.
     */
    output?: OutputFile;

    /**
     * Save format.
     */
    format: SaveSlide.FormatEnum;

    /**
     * Save options.
     */
    options?: ExportOptions;

    /**
     * Result width for saving to an image format.
     */
    width?: number;

    /**
     * Result height for saving to an image format.
     */
    height?: number;

    /**
     * Slide index.
     */
    position: number;

}
export namespace SaveSlide {
    export enum FormatEnum {
        Jpeg = <any> 'Jpeg',
        Png = <any> 'Png',
        Gif = <any> 'Gif',
        Bmp = <any> 'Bmp',
        Tiff = <any> 'Tiff',
        Html = <any> 'Html',
        Pdf = <any> 'Pdf',
        Xps = <any> 'Xps',
        Pptx = <any> 'Pptx',
        Odp = <any> 'Odp',
        Otp = <any> 'Otp',
        Ppt = <any> 'Ppt',
        Pps = <any> 'Pps',
        Ppsx = <any> 'Ppsx',
        Pptm = <any> 'Pptm',
        Ppsm = <any> 'Ppsm',
        Potx = <any> 'Potx',
        Pot = <any> 'Pot',
        Potm = <any> 'Potm',
        Svg = <any> 'Svg',
        Fodp = <any> 'Fodp',
        Xaml = <any> 'Xaml',
        Html5 = <any> 'Html5'
    }
}

/**
 * A scatter series
 */
export class ScatterSeries extends XYSeries {
    constructor() {
        super();
        this.dataPointType = ScatterSeries.DataPointTypeEnum.Scatter;
    }

    /**
     * Gets or sets the values.
     */
    dataPoints?: Array<ScatterChartDataPoint>;

}
export namespace ScatterSeries {
}

/**
 * Presentation section.
 */
export class Section extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Name.
     */
    name?: string;

    /**
     * One-based index of slide with which the section starts.
     */
    firstSlideIndex: number;

    /**
     * Links to the shapes contained in the section.
     */
    slideList?: Array<ResourceUri>;

}

/**
 * Zoom object.
 */
export class ZoomObject extends ShapeBase {
    constructor() {
        super();
    }

    /**
     * Image type of a zoom object. 
     */
    imageType?: ZoomObject.ImageTypeEnum;

    /**
     * Navigation behavior in slideshow. 
     */
    returnToParent?: boolean;

    /**
     * Specifies whether the Zoom will use the background of the destination slide.
     */
    showBackground?: boolean;

    /**
     * Internal image link for zoom object
     */
    image?: ResourceUri;

    /**
     * Duration of the transition between Zoom and slide.
     */
    transitionDuration?: number;

}
export namespace ZoomObject {
    export enum ImageTypeEnum {
        Preview = <any> 'Preview',
        Cover = <any> 'Cover'
    }
}

/**
 * Section zoom frame.             
 */
export class SectionZoomFrame extends ZoomObject {
    constructor() {
        super();
        this.type = SectionZoomFrame.TypeEnum.SectionZoomFrame;
    }

    /**
     * Index of the target section
     */
    targetSectionIndex?: number;

}
export namespace SectionZoomFrame {
}

/**
 * Section list.
 */
export class Sections extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * List of slide links.
     */
    sectionList?: Array<Section>;

}

/**
 * Represents a series marker
 */
export class SeriesMarker {

    /**
     * size
     */
    size?: number;

    /**
     * symbol
     */
    symbol?: SeriesMarker.SymbolEnum;

    /**
     * Get or sets the fill format.
     */
    fillFormat?: FillFormat;

    /**
     * Get or sets the effect format.
     */
    effectFormat?: EffectFormat;

    /**
     * Get or sets the line format.
     */
    lineFormat?: LineFormat;

}
export namespace SeriesMarker {
    export enum SymbolEnum {
        Circle = <any> 'Circle',
        Dash = <any> 'Dash',
        Diamond = <any> 'Diamond',
        Dot = <any> 'Dot',
        None = <any> 'None',
        Picture = <any> 'Picture',
        Plus = <any> 'Plus',
        Square = <any> 'Square',
        Star = <any> 'Star',
        Triangle = <any> 'Triangle',
        X = <any> 'X',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Represents AutoShape resource.
 */
export class Shape extends GeometryShape {
    constructor() {
        super();
        this.type = Shape.TypeEnum.Shape;
    }

    /**
     * Gets or sets the text.
     */
    text?: string;

    /**
     * Get or sets list to paragraphs list
     */
    paragraphs?: ResourceUri;

    /**
     * Returns TextFrame's formatting properties.
     */
    textFrameFormat?: TextFrameFormat;

}
export namespace Shape {
}

/**
 * ShapeBevel
 */
export class ShapeBevel {

    /**
     * Bevel type
     */
    bevelType?: ShapeBevel.BevelTypeEnum;

    /**
     * Bevel width
     */
    width?: number;

    /**
     * Bevel height
     */
    height?: number;

}
export namespace ShapeBevel {
    export enum BevelTypeEnum {
        Angle = <any> 'Angle',
        ArtDeco = <any> 'ArtDeco',
        Circle = <any> 'Circle',
        Convex = <any> 'Convex',
        CoolSlant = <any> 'CoolSlant',
        Cross = <any> 'Cross',
        Divot = <any> 'Divot',
        HardEdge = <any> 'HardEdge',
        RelaxedInset = <any> 'RelaxedInset',
        Riblet = <any> 'Riblet',
        Slope = <any> 'Slope',
        SoftRound = <any> 'SoftRound',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Represents a format for individual shape export.
 */
    /**
    * Represents a format for individual shape export.
    */
export enum ShapeExportFormat {
    'Jpeg' = <any> 'Jpeg',
    'Png' = <any> 'Png',
    'Gif' = <any> 'Gif',
    'Bmp' = <any> 'Bmp',
    'Tiff' = <any> 'Tiff',
    'Svg' = <any> 'Svg'
}

/**
 * Provides options that control how a shape is saved in thumbnail.
 */
export class ShapeImageExportOptions {

    /**
     * Get or sets scaling ratio by X axis.
     */
    scaleX?: number;

    /**
     * Get or sets scaling ratio by Y axis.
     */
    scaleY?: number;

    /**
     * Get or sets thumbnail bounds
     */
    thumbnailBounds?: ShapeImageExportOptions.ThumbnailBoundsEnum;

    /**
     * Gets export format.
     */
    format?: string;

}
export namespace ShapeImageExportOptions {
    export enum ThumbnailBoundsEnum {
        Slide = <any> 'Slide',
        Shape = <any> 'Shape',
        Appearance = <any> 'Appearance'
    }
}

/**
 * Represents thumnail bounds settings.
 */
    /**
    * Represents thumnail bounds settings.
    */
export enum ShapeThumbnailBounds {
    'Slide' = <any> 'Slide',
    'Shape' = <any> 'Shape',
    'Appearance' = <any> 'Appearance'
}

/**
 * Shape type
 */
    /**
    * Shape type
    */
export enum ShapeType {
    'Shape' = <any> 'Shape',
    'Chart' = <any> 'Chart',
    'Table' = <any> 'Table',
    'PictureFrame' = <any> 'PictureFrame',
    'VideoFrame' = <any> 'VideoFrame',
    'AudioFrame' = <any> 'AudioFrame',
    'SmartArt' = <any> 'SmartArt',
    'OleObjectFrame' = <any> 'OleObjectFrame',
    'GroupShape' = <any> 'GroupShape',
    'GraphicalObject' = <any> 'GraphicalObject',
    'Connector' = <any> 'Connector',
    'SmartArtShape' = <any> 'SmartArtShape',
    'ZoomFrame' = <any> 'ZoomFrame',
    'SectionZoomFrame' = <any> 'SectionZoomFrame',
    'SummaryZoomFrame' = <any> 'SummaryZoomFrame',
    'SummaryZoomSection' = <any> 'SummaryZoomSection'
}

/**
 * Represents list of Links to Shapes resources
 */
export class Shapes extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * List of shape links.
     */
    shapesLinks?: Array<ResourceUri>;

}

/**
 * 
 */
    /**
    * 
    */
export enum ShapesAlignmentType {
    'AlignLeft' = <any> 'AlignLeft',
    'AlignRight' = <any> 'AlignRight',
    'AlignCenter' = <any> 'AlignCenter',
    'AlignTop' = <any> 'AlignTop',
    'AlignMiddle' = <any> 'AlignMiddle',
    'AlignBottom' = <any> 'AlignBottom',
    'DistributeHorizontally' = <any> 'DistributeHorizontally',
    'DistributeVertically' = <any> 'DistributeVertically'
}

/**
 * Presentation slide.
 */
export class Slide extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Gets or sets the width.
     */
    width: number;

    /**
     * Gets or sets the height.
     */
    height: number;

    /**
     * Specifies if shapes of the master slide should be shown on the slide. True by default.
     */
    showMasterShapes: boolean;

    /**
     * Gets or sets the  link to the layout slide.
     */
    layoutSlide?: ResourceUri;

    /**
     * Gets or sets the  link to list of top-level shapes.
     */
    shapes?: ResourceUri;

    /**
     * Gets or sets the link to theme.
     */
    theme?: ResourceUri;

    /**
     * Gets or sets the  link to placeholders.
     */
    placeholders?: ResourceUri;

    /**
     * Gets or sets the link to images.
     */
    images?: ResourceUri;

    /**
     * Gets or sets the link to comments.
     */
    comments?: ResourceUri;

    /**
     * Get or sets the link to slide's background
     */
    background?: ResourceUri;

    /**
     * Get or sets the link to notes slide.
     */
    notesSlide?: ResourceUri;

}

/**
 * Represents comments collection of slide
 */
export class SlideAnimation extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Main sequence.
     */
    mainSequence?: Array<Effect>;

    /**
     * Interactive sequence list.
     */
    interactiveSequences?: Array<InteractiveSequence>;

}

/**
 * Represents background of slide
 */
export class SlideBackground extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Fill type.
     */
    type: SlideBackground.TypeEnum;

    /**
     * Fill format.
     */
    fillFormat?: FillFormat;

    /**
     * Effect format.
     */
    effectFormat?: EffectFormat;

}
export namespace SlideBackground {
    export enum TypeEnum {
        NoFill = <any> 'NoFill',
        Solid = <any> 'Solid',
        Gradient = <any> 'Gradient',
        Pattern = <any> 'Pattern',
        Picture = <any> 'Picture',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Represents slide comment
 */
export class SlideCommentBase {

    /**
     * Author.
     */
    author?: string;

    /**
     * Text.
     */
    text?: string;

    /**
     * Creation time.
     */
    createdTime?: string;

    /**
     * Child comments.
     */
    childComments?: Array<SlideCommentBase>;

    type?: SlideCommentBase.TypeEnum;

}
export namespace SlideCommentBase {
    export enum TypeEnum {
        Regular = <any> 'Regular',
        Modern = <any> 'Modern'
    }
}

/**
 * Represents comment of slide
 */
export class SlideComment extends SlideCommentBase {
    constructor() {
        super();
        this.type = SlideComment.TypeEnum.Regular;
    }

}
export namespace SlideComment {
}

/**
 * Represents comments collection of slide
 */
export class SlideComments extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Slide comment list.
     */
    list?: Array<SlideCommentBase>;

}

/**
 * Slide Export Format
 */
    /**
    * Slide Export Format
    */
export enum SlideExportFormat {
    'Jpeg' = <any> 'Jpeg',
    'Png' = <any> 'Png',
    'Gif' = <any> 'Gif',
    'Bmp' = <any> 'Bmp',
    'Tiff' = <any> 'Tiff',
    'Html' = <any> 'Html',
    'Pdf' = <any> 'Pdf',
    'Xps' = <any> 'Xps',
    'Pptx' = <any> 'Pptx',
    'Odp' = <any> 'Odp',
    'Otp' = <any> 'Otp',
    'Ppt' = <any> 'Ppt',
    'Pps' = <any> 'Pps',
    'Ppsx' = <any> 'Ppsx',
    'Pptm' = <any> 'Pptm',
    'Ppsm' = <any> 'Ppsm',
    'Potx' = <any> 'Potx',
    'Pot' = <any> 'Pot',
    'Potm' = <any> 'Potm',
    'Svg' = <any> 'Svg',
    'Fodp' = <any> 'Fodp',
    'Xaml' = <any> 'Xaml',
    'Html5' = <any> 'Html5'
}

/**
 * Represents modern comment of slide
 */
export class SlideModernComment extends SlideCommentBase {
    constructor() {
        super();
        this.type = SlideModernComment.TypeEnum.Modern;
    }

    /**
     * Returns or sets starting position of text selection in text frame if the comment associated with AutoShape. Read/write Int32.
     */
    textSelectionStart?: number;

    /**
     * Returns or sets text selection length in text frame if the comment associated with AutoShape. Read/write Int32.
     */
    textSelectionLength?: number;

    /**
     * Returns or sets the status of the comment. Read/write ModernCommentStatus.
     */
    status?: SlideModernComment.StatusEnum;

}
export namespace SlideModernComment {
    export enum StatusEnum {
        NotDefined = <any> 'NotDefined',
        Active = <any> 'Active',
        Resolved = <any> 'Resolved',
        Closed = <any> 'Closed'
    }
}

/**
 * Slide properties.
 */
export class SlideProperties extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * First slide number.
     */
    firstSlideNumber?: number;

    /**
     * Slide orientation.
     */
    orientation?: SlideProperties.OrientationEnum;

    /**
     * Scale type.
     */
    scaleType?: SlideProperties.ScaleTypeEnum;

    /**
     * Size type.
     */
    sizeType?: SlideProperties.SizeTypeEnum;

    /**
     * Width.
     */
    width?: number;

    /**
     * Height.
     */
    height?: number;

}
export namespace SlideProperties {
    export enum OrientationEnum {
        Landscape = <any> 'Landscape',
        Portrait = <any> 'Portrait'
    }
    export enum ScaleTypeEnum {
        DoNotScale = <any> 'DoNotScale',
        EnsureFit = <any> 'EnsureFit',
        Maximize = <any> 'Maximize'
    }
    export enum SizeTypeEnum {
        OnScreen = <any> 'OnScreen',
        LetterPaper = <any> 'LetterPaper',
        A4Paper = <any> 'A4Paper',
        Slide35mm = <any> 'Slide35mm',
        Overhead = <any> 'Overhead',
        Banner = <any> 'Banner',
        Custom = <any> 'Custom',
        Ledger = <any> 'Ledger',
        A3Paper = <any> 'A3Paper',
        B4IsoPaper = <any> 'B4IsoPaper',
        B5IsoPaper = <any> 'B5IsoPaper',
        B4JisPaper = <any> 'B4JisPaper',
        B5JisPaper = <any> 'B5JisPaper',
        HagakiCard = <any> 'HagakiCard',
        OnScreen16x9 = <any> 'OnScreen16x9',
        OnScreen16x10 = <any> 'OnScreen16x10',
        Widescreen = <any> 'Widescreen'
    }
}

/**
 * Represents slide replace result DTO.
 */
export class SlideReplaceResult extends Slide {
    constructor() {
        super();
    }

    /**
     * Gets or sets the number of matches 
     */
    matches: number;

}

/**
 * Slide show properties.
 */
export class SlideShowProperties extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Loop slide show.
     */
    loop?: boolean;

    /**
     * Start slide in the slide show.
     */
    startSlide?: number;

    /**
     * End slides in the slide show.
     */
    endSlide?: number;

    /**
     * Pen color.
     */
    penColor?: string;

    /**
     * Show animation.
     */
    showAnimation?: boolean;

    /**
     * Show narrration.
     */
    showNarration?: boolean;

    /**
     * Use timings.
     */
    useTimings?: boolean;

    /**
     * Slide show type.
     */
    slideShowType?: SlideShowProperties.SlideShowTypeEnum;

    /**
     * Show scroll bar. Applied with BrowsedByIndividual slide show type.
     */
    showScrollbar?: boolean;

}
export namespace SlideShowProperties {
    export enum SlideShowTypeEnum {
        BrowsedAtKiosk = <any> 'BrowsedAtKiosk',
        BrowsedByIndividual = <any> 'BrowsedByIndividual',
        PresentedBySpeaker = <any> 'PresentedBySpeaker'
    }
}

/**
 * Slide list.
 */
export class Slides extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * List of slide links.
     */
    slideList?: Array<ResourceUri>;

}

/**
 * Represents SmartArt shape resource.
 */
export class SmartArt extends ShapeBase {
    constructor() {
        super();
        this.type = SmartArt.TypeEnum.SmartArt;
    }

    /**
     * Layout type.
     */
    layout: SmartArt.LayoutEnum;

    /**
     * Quick style.
     */
    quickStyle: SmartArt.QuickStyleEnum;

    /**
     * Color style.
     */
    colorStyle: SmartArt.ColorStyleEnum;

    /**
     * Collection of nodes in SmartArt object.             
     */
    nodes?: Array<SmartArtNode>;

    /**
     * The state of the SmartArt diagram with regard to (left-to-right) LTR or (right-to-left) RTL, if the diagram supports reversal.
     */
    isReversed: boolean;

}
export namespace SmartArt {
    export enum LayoutEnum {
        AccentProcess = <any> 'AccentProcess',
        AccentedPicture = <any> 'AccentedPicture',
        AlternatingFlow = <any> 'AlternatingFlow',
        AlternatingHexagons = <any> 'AlternatingHexagons',
        AlternatingPictureBlocks = <any> 'AlternatingPictureBlocks',
        AlternatingPictureCircles = <any> 'AlternatingPictureCircles',
        ArrowRibbon = <any> 'ArrowRibbon',
        AscendingPictureAccentProcess = <any> 'AscendingPictureAccentProcess',
        Balance = <any> 'Balance',
        BasicBendingProcess = <any> 'BasicBendingProcess',
        BasicBlockList = <any> 'BasicBlockList',
        BasicChevronProcess = <any> 'BasicChevronProcess',
        BasicCycle = <any> 'BasicCycle',
        BasicMatrix = <any> 'BasicMatrix',
        BasicPie = <any> 'BasicPie',
        BasicProcess = <any> 'BasicProcess',
        BasicPyramid = <any> 'BasicPyramid',
        BasicRadial = <any> 'BasicRadial',
        BasicTarget = <any> 'BasicTarget',
        BasicTimeline = <any> 'BasicTimeline',
        BasicVenn = <any> 'BasicVenn',
        BendingPictureAccentList = <any> 'BendingPictureAccentList',
        BendingPictureBlocks = <any> 'BendingPictureBlocks',
        BendingPictureCaption = <any> 'BendingPictureCaption',
        BendingPictureCaptionList = <any> 'BendingPictureCaptionList',
        BendingPictureSemiTransparentText = <any> 'BendingPictureSemiTransparentText',
        BlockCycle = <any> 'BlockCycle',
        BubblePictureList = <any> 'BubblePictureList',
        CaptionedPictures = <any> 'CaptionedPictures',
        ChevronList = <any> 'ChevronList',
        CircleAccentTimeline = <any> 'CircleAccentTimeline',
        CircleArrowProcess = <any> 'CircleArrowProcess',
        CirclePictureHierarchy = <any> 'CirclePictureHierarchy',
        CircleRelationship = <any> 'CircleRelationship',
        CircularBendingProcess = <any> 'CircularBendingProcess',
        CircularPictureCallout = <any> 'CircularPictureCallout',
        ClosedChevronProcess = <any> 'ClosedChevronProcess',
        ContinuousArrowProcess = <any> 'ContinuousArrowProcess',
        ContinuousBlockProcess = <any> 'ContinuousBlockProcess',
        ContinuousCycle = <any> 'ContinuousCycle',
        ContinuousPictureList = <any> 'ContinuousPictureList',
        ConvergingArrows = <any> 'ConvergingArrows',
        ConvergingRadial = <any> 'ConvergingRadial',
        CounterbalanceArrows = <any> 'CounterbalanceArrows',
        CycleMatrix = <any> 'CycleMatrix',
        DescendingBlockList = <any> 'DescendingBlockList',
        DescendingProcess = <any> 'DescendingProcess',
        DetailedProcess = <any> 'DetailedProcess',
        DivergingArrows = <any> 'DivergingArrows',
        DivergingRadial = <any> 'DivergingRadial',
        Equation = <any> 'Equation',
        FramedTextPicture = <any> 'FramedTextPicture',
        Funnel = <any> 'Funnel',
        Gear = <any> 'Gear',
        GridMatrix = <any> 'GridMatrix',
        GroupedList = <any> 'GroupedList',
        HalfCircleOrganizationChart = <any> 'HalfCircleOrganizationChart',
        HexagonCluster = <any> 'HexagonCluster',
        Hierarchy = <any> 'Hierarchy',
        HierarchyList = <any> 'HierarchyList',
        HorizontalBulletList = <any> 'HorizontalBulletList',
        HorizontalHierarchy = <any> 'HorizontalHierarchy',
        HorizontalLabeledHierarchy = <any> 'HorizontalLabeledHierarchy',
        HorizontalMultiLevelHierarchy = <any> 'HorizontalMultiLevelHierarchy',
        HorizontalOrganizationChart = <any> 'HorizontalOrganizationChart',
        HorizontalPictureList = <any> 'HorizontalPictureList',
        IncreasingArrowsProcess = <any> 'IncreasingArrowsProcess',
        IncreasingCircleProcess = <any> 'IncreasingCircleProcess',
        InvertedPyramid = <any> 'InvertedPyramid',
        LabeledHierarchy = <any> 'LabeledHierarchy',
        LinearVenn = <any> 'LinearVenn',
        LinedList = <any> 'LinedList',
        MultidirectionalCycle = <any> 'MultidirectionalCycle',
        NameandTitleOrganizationChart = <any> 'NameandTitleOrganizationChart',
        NestedTarget = <any> 'NestedTarget',
        NondirectionalCycle = <any> 'NondirectionalCycle',
        OpposingArrows = <any> 'OpposingArrows',
        OpposingIdeas = <any> 'OpposingIdeas',
        OrganizationChart = <any> 'OrganizationChart',
        PhasedProcess = <any> 'PhasedProcess',
        PictureAccentBlocks = <any> 'PictureAccentBlocks',
        PictureAccentList = <any> 'PictureAccentList',
        PictureAccentProcess = <any> 'PictureAccentProcess',
        PictureCaptionList = <any> 'PictureCaptionList',
        PictureGrid = <any> 'PictureGrid',
        PictureLineup = <any> 'PictureLineup',
        PictureStrips = <any> 'PictureStrips',
        PieProcess = <any> 'PieProcess',
        PlusandMinus = <any> 'PlusandMinus',
        ProcessArrows = <any> 'ProcessArrows',
        ProcessList = <any> 'ProcessList',
        PyramidList = <any> 'PyramidList',
        RadialCluster = <any> 'RadialCluster',
        RadialCycle = <any> 'RadialCycle',
        RadialList = <any> 'RadialList',
        RadialVenn = <any> 'RadialVenn',
        RandomToResultProcess = <any> 'RandomToResultProcess',
        RepeatingBendingProcess = <any> 'RepeatingBendingProcess',
        ReverseList = <any> 'ReverseList',
        SegmentedCycle = <any> 'SegmentedCycle',
        SegmentedProcess = <any> 'SegmentedProcess',
        SegmentedPyramid = <any> 'SegmentedPyramid',
        SnapshotPictureList = <any> 'SnapshotPictureList',
        SpiralPicture = <any> 'SpiralPicture',
        SquareAccentList = <any> 'SquareAccentList',
        StackedList = <any> 'StackedList',
        StackedVenn = <any> 'StackedVenn',
        StaggeredProcess = <any> 'StaggeredProcess',
        StepDownProcess = <any> 'StepDownProcess',
        StepUpProcess = <any> 'StepUpProcess',
        SubStepProcess = <any> 'SubStepProcess',
        TableHierarchy = <any> 'TableHierarchy',
        TableList = <any> 'TableList',
        TargetList = <any> 'TargetList',
        TextCycle = <any> 'TextCycle',
        TitlePictureLineup = <any> 'TitlePictureLineup',
        TitledMatrix = <any> 'TitledMatrix',
        TitledPictureAccentList = <any> 'TitledPictureAccentList',
        TitledPictureBlocks = <any> 'TitledPictureBlocks',
        TrapezoidList = <any> 'TrapezoidList',
        UpwardArrow = <any> 'UpwardArrow',
        VerticalAccentList = <any> 'VerticalAccentList',
        VerticalArrowList = <any> 'VerticalArrowList',
        VerticalBendingProcess = <any> 'VerticalBendingProcess',
        VerticalBlockList = <any> 'VerticalBlockList',
        VerticalBoxList = <any> 'VerticalBoxList',
        VerticalBulletList = <any> 'VerticalBulletList',
        VerticalChevronList = <any> 'VerticalChevronList',
        VerticalCircleList = <any> 'VerticalCircleList',
        VerticalCurvedList = <any> 'VerticalCurvedList',
        VerticalEquation = <any> 'VerticalEquation',
        VerticalPictureAccentList = <any> 'VerticalPictureAccentList',
        VerticalPictureList = <any> 'VerticalPictureList',
        VerticalProcess = <any> 'VerticalProcess',
        Custom = <any> 'Custom',
        PictureOrganizationChart = <any> 'PictureOrganizationChart'
    }
    export enum QuickStyleEnum {
        SimpleFill = <any> 'SimpleFill',
        WhiteOutline = <any> 'WhiteOutline',
        SubtleEffect = <any> 'SubtleEffect',
        ModerateEffect = <any> 'ModerateEffect',
        IntenceEffect = <any> 'IntenceEffect',
        Polished = <any> 'Polished',
        Inset = <any> 'Inset',
        Cartoon = <any> 'Cartoon',
        Powder = <any> 'Powder',
        BrickScene = <any> 'BrickScene',
        FlatScene = <any> 'FlatScene',
        MetallicScene = <any> 'MetallicScene',
        SunsetScene = <any> 'SunsetScene',
        BirdsEyeScene = <any> 'BirdsEyeScene'
    }
    export enum ColorStyleEnum {
        Dark1Outline = <any> 'Dark1Outline',
        Dark2Outline = <any> 'Dark2Outline',
        DarkFill = <any> 'DarkFill',
        ColorfulAccentColors = <any> 'ColorfulAccentColors',
        ColorfulAccentColors2to3 = <any> 'ColorfulAccentColors2to3',
        ColorfulAccentColors3to4 = <any> 'ColorfulAccentColors3to4',
        ColorfulAccentColors4to5 = <any> 'ColorfulAccentColors4to5',
        ColorfulAccentColors5to6 = <any> 'ColorfulAccentColors5to6',
        ColoredOutlineAccent1 = <any> 'ColoredOutlineAccent1',
        ColoredFillAccent1 = <any> 'ColoredFillAccent1',
        GradientRangeAccent1 = <any> 'GradientRangeAccent1',
        GradientLoopAccent1 = <any> 'GradientLoopAccent1',
        TransparentGradientRangeAccent1 = <any> 'TransparentGradientRangeAccent1',
        ColoredOutlineAccent2 = <any> 'ColoredOutlineAccent2',
        ColoredFillAccent2 = <any> 'ColoredFillAccent2',
        GradientRangeAccent2 = <any> 'GradientRangeAccent2',
        GradientLoopAccent2 = <any> 'GradientLoopAccent2',
        TransparentGradientRangeAccent2 = <any> 'TransparentGradientRangeAccent2',
        ColoredOutlineAccent3 = <any> 'ColoredOutlineAccent3',
        ColoredFillAccent3 = <any> 'ColoredFillAccent3',
        GradientRangeAccent3 = <any> 'GradientRangeAccent3',
        GradientLoopAccent3 = <any> 'GradientLoopAccent3',
        TransparentGradientRangeAccent3 = <any> 'TransparentGradientRangeAccent3',
        ColoredOutlineAccent4 = <any> 'ColoredOutlineAccent4',
        ColoredFillAccent4 = <any> 'ColoredFillAccent4',
        GradientRangeAccent4 = <any> 'GradientRangeAccent4',
        GradientLoopAccent4 = <any> 'GradientLoopAccent4',
        TransparentGradientRangeAccent4 = <any> 'TransparentGradientRangeAccent4',
        ColoredOutlineAccent5 = <any> 'ColoredOutlineAccent5',
        ColoredFillAccent5 = <any> 'ColoredFillAccent5',
        GradientRangeAccent5 = <any> 'GradientRangeAccent5',
        GradientLoopAccent5 = <any> 'GradientLoopAccent5',
        TransparentGradientRangeAccent5 = <any> 'TransparentGradientRangeAccent5',
        ColoredOutlineAccent6 = <any> 'ColoredOutlineAccent6',
        ColoredFillAccent6 = <any> 'ColoredFillAccent6',
        GradientRangeAccent6 = <any> 'GradientRangeAccent6',
        GradientLoopAccent6 = <any> 'GradientLoopAccent6',
        TransparentGradientRangeAccent6 = <any> 'TransparentGradientRangeAccent6'
    }
}

/**
 * Smart art node.
 */
export class SmartArtNode {

    /**
     * Node list.
     */
    nodes?: Array<SmartArtNode>;

    /**
     * Gets or sets the link to shapes.
     */
    shapes?: ResourceUri;

    /**
     * True for and assistant node.
     */
    isAssistant: boolean;

    /**
     * Node text.
     */
    text?: string;

    /**
     * Organization chart layout type associated with current node.
     */
    orgChartLayout: SmartArtNode.OrgChartLayoutEnum;

    /**
     * Get or sets list to paragraphs list
     */
    paragraphs?: ResourceUri;

}
export namespace SmartArtNode {
    export enum OrgChartLayoutEnum {
        Initial = <any> 'Initial',
        Standart = <any> 'Standart',
        BothHanging = <any> 'BothHanging',
        LeftHanging = <any> 'LeftHanging',
        RightHanging = <any> 'RightHanging'
    }
}

/**
 * Represents SmartArt resource.
 */
export class SmartArtShape extends GeometryShape {
    constructor() {
        super();
        this.type = SmartArtShape.TypeEnum.SmartArtShape;
    }

}
export namespace SmartArtShape {
}

/**
 * Represents soft edge effect 
 */
export class SoftEdgeEffect {

    /**
     * radius
     */
    radius: number;

}

/**
 * Represents solid fill format 
 */
export class SolidFill extends FillFormat {
    constructor() {
        super();
        this.type = SolidFill.TypeEnum.Solid;
    }

    /**
     * Color.
     */
    color?: string;

}
export namespace SolidFill {
}

/**
 * 
 */
    /**
    * 
    */
export enum SpecialSlideType {
    'MasterSlide' = <any> 'MasterSlide',
    'LayoutSlide' = <any> 'LayoutSlide',
    'NotesSlide' = <any> 'NotesSlide'
}

/**
 * Split document result.
 */
export class SplitDocumentResult extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * List of slide links.
     */
    slides?: Array<ResourceUri>;

}

/**
 * Storage exists
 */
export class StorageExist {

    /**
     * Shows that the storage exists.             
     */
    exists: boolean;

}

/**
 * Subscript object
 */
export class SubscriptElement extends MathElement {
    constructor() {
        super();
        this.type = SubscriptElement.TypeEnum.SubscriptElement;
    }

    /**
     * Base argument
     */
    base?: MathElement;

    /**
     * Subscript
     */
    subscript?: MathElement;

}
export namespace SubscriptElement {
}

/**
 * Summary zoom frame.
 */
export class SummaryZoomFrame extends ShapeBase {
    constructor() {
        super();
        this.type = SummaryZoomFrame.TypeEnum.SummaryZoomFrame;
    }

    /**
     * Zoom layout type
     */
    zoomLayout?: SummaryZoomFrame.ZoomLayoutEnum;

    /**
     * Zoom frame sections
     */
    sections?: Array<SummaryZoomSection>;

}
export namespace SummaryZoomFrame {
    export enum ZoomLayoutEnum {
        GridLayout = <any> 'GridLayout',
        FixedLayout = <any> 'FixedLayout'
    }
}

/**
 * Represents summary zoom section
 */
export class SummaryZoomSection extends SectionZoomFrame {
    constructor() {
        super();
        this.type = SummaryZoomSection.TypeEnum.SummaryZoomSection;
    }

    /**
     * Section title
     */
    title?: string;

    /**
     * Description of the Summary Zoom Section object. 
     */
    description?: string;

}
export namespace SummaryZoomSection {
}

/**
 * Subscript object
 */
export class SuperscriptElement extends MathElement {
    constructor() {
        super();
        this.type = SuperscriptElement.TypeEnum.SuperscriptElement;
    }

    /**
     * Base argument
     */
    base?: MathElement;

    /**
     * Superscript
     */
    superscript?: MathElement;

}
export namespace SuperscriptElement {
}

/**
 * Provides options that control how a presentation is saved in SVG format.
 */
export class SvgExportOptions extends ExportOptions {
    constructor() {
        super();
        this.format = 'svg';
    }

    /**
     * Determines whether the text on a slide will be saved as graphics.
     */
    vectorizeText?: boolean;

    /**
     * Returns or sets the lower resolution limit for metafile rasterization.
     */
    metafileRasterizationDpi?: number;

    /**
     * Determines whether the 3D text is disabled in SVG.
     */
    disable3DText?: boolean;

    /**
     * Disables splitting FromCornerX and FromCenter gradients.
     */
    disableGradientSplit?: boolean;

    /**
     * SVG 1.1 lacks ability to define insets for markers. Aspose.Slides SVG writing engine has workaround for that problem: it crops end of line with arrow, so, line doesn't overlap markers. This option switches off such behavior.
     */
    disableLineEndCropping?: boolean;

    /**
     * Determines JPEG encoding quality.
     */
    jpegQuality?: number;

    /**
     * Represents the pictures compression level
     */
    picturesCompression?: SvgExportOptions.PicturesCompressionEnum;

    /**
     * A boolean flag indicates if the cropped parts remain as part of the document. If true the cropped  parts will removed, if false they will be serialized in the document (which can possible lead to a  larger file)
     */
    deletePicturesCroppedAreas?: boolean;

    /**
     * Determines a way of handling externally loaded fonts.
     */
    externalFontsHandling?: SvgExportOptions.ExternalFontsHandlingEnum;

    /**
     * Determines whether the text frame will be included in a rendering area or not.
     */
    useFrameSize?: boolean;

    /**
     * Determines whether to perform the specified rotation of the shape when rendering or not.
     */
    useFrameRotation?: boolean;

}
export namespace SvgExportOptions {
    export enum PicturesCompressionEnum {
        Dpi330 = <any> 'Dpi330',
        Dpi220 = <any> 'Dpi220',
        Dpi150 = <any> 'Dpi150',
        Dpi96 = <any> 'Dpi96',
        Dpi72 = <any> 'Dpi72',
        DocumentResolution = <any> 'DocumentResolution'
    }
    export enum ExternalFontsHandlingEnum {
        AddLinksToFontFiles = <any> 'AddLinksToFontFiles',
        Embed = <any> 'Embed',
        Vectorize = <any> 'Vectorize'
    }
}

/**
 * Provides options that control how a presentation is saved in SWF format.
 */
export class SwfExportOptions extends ExportOptions {
    constructor() {
        super();
        this.format = 'swf';
    }

    /**
     * Specifies whether the generated document should include hidden slides or not. Default is false. 
     */
    showHiddenSlides?: boolean;

    /**
     * Specifies whether the generated SWF document should be compressed or not. Default is true. 
     */
    compressed?: boolean;

    /**
     * Specifies whether the generated SWF document should include the integrated document viewer or not. Default is true. 
     */
    viewerIncluded?: boolean;

    /**
     * Specifies whether border around pages should be shown. Default is true. 
     */
    showPageBorder?: boolean;

    /**
     * Show/hide fullscreen button. Can be overridden in flashvars. Default is true. 
     */
    showFullScreen?: boolean;

    /**
     * Show/hide page stepper. Can be overridden in flashvars. Default is true. 
     */
    showPageStepper?: boolean;

    /**
     * Show/hide search section. Can be overridden in flashvars. Default is true. 
     */
    showSearch?: boolean;

    /**
     * Show/hide whole top pane. Can be overridden in flashvars. Default is true. 
     */
    showTopPane?: boolean;

    /**
     * Show/hide bottom pane. Can be overridden in flashvars. Default is true. 
     */
    showBottomPane?: boolean;

    /**
     * Show/hide left pane. Can be overridden in flashvars. Default is true. 
     */
    showLeftPane?: boolean;

    /**
     * Start with opened left pane. Can be overridden in flashvars. Default is false. 
     */
    startOpenLeftPane?: boolean;

    /**
     * Enable/disable context menu. Default is true. 
     */
    enableContextMenu?: boolean;

    /**
     * Image that will be displayed as logo in the top right corner of the viewer. The image data is a base 64 string. Image should be 32x64 pixels PNG image, otherwise logo can be displayed improperly. 
     */
    logoImage?: string;

    /**
     * Gets or sets the full hyperlink address for a logo. Has an effect only if a LogoImage is specified. 
     */
    logoLink?: string;

    /**
     * Specifies the quality of JPEG images. Default is 95.
     */
    jpegQuality?: number;

    /**
     * Gets or sets the position of the notes on the page.
     */
    notesPosition?: SwfExportOptions.NotesPositionEnum;

    /**
     * Gets or sets the position of the comments on the page.
     */
    commentsPosition?: SwfExportOptions.CommentsPositionEnum;

    /**
     * Gets or sets the width of the comment output area in pixels (Applies only if comments are displayed on the right).
     */
    commentsAreaWidth?: number;

    /**
     * Gets or sets the color of comments area (Applies only if comments are displayed on the right).
     */
    commentsAreaColor?: string;

    /**
     * True if comments that have no author are displayed. (Applies only if comments are displayed).
     */
    showCommentsByNoAuthor?: boolean;

}
export namespace SwfExportOptions {
    export enum NotesPositionEnum {
        None = <any> 'None',
        BottomFull = <any> 'BottomFull',
        BottomTruncated = <any> 'BottomTruncated'
    }
    export enum CommentsPositionEnum {
        None = <any> 'None',
        Bottom = <any> 'Bottom',
        Right = <any> 'Right'
    }
}

/**
 * Represents Table shape resource.
 */
export class Table extends ShapeBase {
    constructor() {
        super();
        this.type = Table.TypeEnum.Table;
    }

    /**
     * Builtin table style.
     */
    style?: Table.StyleEnum;

    /**
     * Rows.
     */
    rows?: Array<TableRow>;

    /**
     * Columns.
     */
    columns?: Array<TableColumn>;

    /**
     * Determines whether the first column of a table has to be drawn with a special formatting.
     */
    firstCol?: boolean;

    /**
     * Determines whether the first row of a table has to be drawn with a special formatting.
     */
    firstRow?: boolean;

    /**
     * Determines whether the even rows has to be drawn with a different formatting.
     */
    horizontalBanding?: boolean;

    /**
     * Determines whether the last column of a table has to be drawn with a special formatting.
     */
    lastCol?: boolean;

    /**
     * Determines whether the last row of a table has to be drawn with a special formatting.
     */
    lastRow?: boolean;

    /**
     * Determines whether the table has right to left reading order.
     */
    rightToLeft?: boolean;

    /**
     * Determines whether the even columns has to be drawn with a different formatting.
     */
    verticalBanding?: boolean;

}
export namespace Table {
    export enum StyleEnum {
        None = <any> 'None',
        MediumStyle2Accent1 = <any> 'MediumStyle2Accent1',
        MediumStyle2 = <any> 'MediumStyle2',
        NoStyleNoGrid = <any> 'NoStyleNoGrid',
        ThemedStyle1Accent1 = <any> 'ThemedStyle1Accent1',
        ThemedStyle1Accent2 = <any> 'ThemedStyle1Accent2',
        ThemedStyle1Accent3 = <any> 'ThemedStyle1Accent3',
        ThemedStyle1Accent4 = <any> 'ThemedStyle1Accent4',
        ThemedStyle1Accent5 = <any> 'ThemedStyle1Accent5',
        ThemedStyle1Accent6 = <any> 'ThemedStyle1Accent6',
        NoStyleTableGrid = <any> 'NoStyleTableGrid',
        ThemedStyle2Accent1 = <any> 'ThemedStyle2Accent1',
        ThemedStyle2Accent2 = <any> 'ThemedStyle2Accent2',
        ThemedStyle2Accent3 = <any> 'ThemedStyle2Accent3',
        ThemedStyle2Accent4 = <any> 'ThemedStyle2Accent4',
        ThemedStyle2Accent5 = <any> 'ThemedStyle2Accent5',
        ThemedStyle2Accent6 = <any> 'ThemedStyle2Accent6',
        LightStyle1 = <any> 'LightStyle1',
        LightStyle1Accent1 = <any> 'LightStyle1Accent1',
        LightStyle1Accent2 = <any> 'LightStyle1Accent2',
        LightStyle1Accent3 = <any> 'LightStyle1Accent3',
        LightStyle1Accent4 = <any> 'LightStyle1Accent4',
        LightStyle2Accent5 = <any> 'LightStyle2Accent5',
        LightStyle1Accent6 = <any> 'LightStyle1Accent6',
        LightStyle2 = <any> 'LightStyle2',
        LightStyle2Accent1 = <any> 'LightStyle2Accent1',
        LightStyle2Accent2 = <any> 'LightStyle2Accent2',
        LightStyle2Accent3 = <any> 'LightStyle2Accent3',
        MediumStyle2Accent3 = <any> 'MediumStyle2Accent3',
        MediumStyle2Accent4 = <any> 'MediumStyle2Accent4',
        MediumStyle2Accent5 = <any> 'MediumStyle2Accent5',
        LightStyle2Accent6 = <any> 'LightStyle2Accent6',
        LightStyle2Accent4 = <any> 'LightStyle2Accent4',
        LightStyle3 = <any> 'LightStyle3',
        LightStyle3Accent1 = <any> 'LightStyle3Accent1',
        MediumStyle2Accent2 = <any> 'MediumStyle2Accent2',
        LightStyle3Accent2 = <any> 'LightStyle3Accent2',
        LightStyle3Accent3 = <any> 'LightStyle3Accent3',
        LightStyle3Accent4 = <any> 'LightStyle3Accent4',
        LightStyle3Accent5 = <any> 'LightStyle3Accent5',
        LightStyle3Accent6 = <any> 'LightStyle3Accent6',
        MediumStyle1 = <any> 'MediumStyle1',
        MediumStyle1Accent1 = <any> 'MediumStyle1Accent1',
        MediumStyle1Accent2 = <any> 'MediumStyle1Accent2',
        MediumStyle1Accent3 = <any> 'MediumStyle1Accent3',
        MediumStyle1Accent4 = <any> 'MediumStyle1Accent4',
        MediumStyle1Accent5 = <any> 'MediumStyle1Accent5',
        MediumStyle1Accent6 = <any> 'MediumStyle1Accent6',
        MediumStyle2Accent6 = <any> 'MediumStyle2Accent6',
        MediumStyle3 = <any> 'MediumStyle3',
        MediumStyle3Accent1 = <any> 'MediumStyle3Accent1',
        MediumStyle3Accent2 = <any> 'MediumStyle3Accent2',
        MediumStyle3Accent3 = <any> 'MediumStyle3Accent3',
        MediumStyle3Accent4 = <any> 'MediumStyle3Accent4',
        MediumStyle3Accent5 = <any> 'MediumStyle3Accent5',
        MediumStyle3Accent6 = <any> 'MediumStyle3Accent6',
        MediumStyle4 = <any> 'MediumStyle4',
        MediumStyle4Accent1 = <any> 'MediumStyle4Accent1',
        MediumStyle4Accent2 = <any> 'MediumStyle4Accent2',
        MediumStyle4Accent3 = <any> 'MediumStyle4Accent3',
        MediumStyle4Accent4 = <any> 'MediumStyle4Accent4',
        MediumStyle4Accent5 = <any> 'MediumStyle4Accent5',
        MediumStyle4Accent6 = <any> 'MediumStyle4Accent6',
        DarkStyle1 = <any> 'DarkStyle1',
        DarkStyle1Accent1 = <any> 'DarkStyle1Accent1',
        DarkStyle1Accent2 = <any> 'DarkStyle1Accent2',
        DarkStyle1Accent3 = <any> 'DarkStyle1Accent3',
        DarkStyle1Accent4 = <any> 'DarkStyle1Accent4',
        DarkStyle1Accent5 = <any> 'DarkStyle1Accent5',
        DarkStyle1Accent6 = <any> 'DarkStyle1Accent6',
        DarkStyle2 = <any> 'DarkStyle2',
        DarkStyle2Accent1Accent2 = <any> 'DarkStyle2Accent1Accent2',
        DarkStyle2Accent3Accent4 = <any> 'DarkStyle2Accent3Accent4',
        DarkStyle2Accent5Accent6 = <any> 'DarkStyle2Accent5Accent6',
        LightStyle1Accent5 = <any> 'LightStyle1Accent5',
        Custom = <any> 'Custom'
    }
}

/**
 * Represents one cell of table.
 */
export class TableCell {

    /**
     * Cell text.
     */
    text?: string;

    /**
     * The number of rows spanned by a merged cell.
     */
    rowSpan?: number;

    /**
     * The number of columns spanned by a merged cell.
     */
    colSpan?: number;

    /**
     * The top margin of the cell.
     */
    marginTop?: number;

    /**
     * The right margin of the cell.
     */
    marginRight?: number;

    /**
     * The left margin of the cell.
     */
    marginLeft?: number;

    /**
     * The bottom margin of the cell.
     */
    marginBottom?: number;

    /**
     * Text anchor type.
     */
    textAnchorType?: TableCell.TextAnchorTypeEnum;

    /**
     * The type of vertical text.
     */
    textVerticalType?: TableCell.TextVerticalTypeEnum;

    /**
     * Fill properties set of the cell.
     */
    fillFormat?: FillFormat;

    /**
     * Line properties set for the top border of the cell.
     */
    borderTop?: LineFormat;

    /**
     * Line properties set for the right border of the cell.
     */
    borderRight?: LineFormat;

    /**
     * Line properties set for the left border of the cell.
     */
    borderLeft?: LineFormat;

    /**
     * Line properties set for the bottom border of the cell.
     */
    borderBottom?: LineFormat;

    /**
     * Line properties set for the diagonal up border of the cell.
     */
    borderDiagonalUp?: LineFormat;

    /**
     * Line properties set for the diagonal down border of the cell.
     */
    borderDiagonalDown?: LineFormat;

    /**
     * Cell column index
     */
    columnIndex?: number;

    /**
     * Cell row index
     */
    rowIndex?: number;

    /**
     * Returns TextFrame's formatting properties.
     */
    textFrameFormat?: TextFrameFormat;

    /**
     * Get or sets list to paragraphs list
     */
    paragraphs?: ResourceUri;

}
export namespace TableCell {
    export enum TextAnchorTypeEnum {
        Top = <any> 'Top',
        Center = <any> 'Center',
        Bottom = <any> 'Bottom',
        Justified = <any> 'Justified',
        Distributed = <any> 'Distributed',
        NotDefined = <any> 'NotDefined'
    }
    export enum TextVerticalTypeEnum {
        Horizontal = <any> 'Horizontal',
        Vertical = <any> 'Vertical',
        Vertical270 = <any> 'Vertical270',
        WordArtVertical = <any> 'WordArtVertical',
        EastAsianVertical = <any> 'EastAsianVertical',
        MongolianVertical = <any> 'MongolianVertical',
        WordArtVerticalRightToLeft = <any> 'WordArtVerticalRightToLeft',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Table cells merge options
 */
export class TableCellMergeOptions {

    /**
     * Row index of the first cell
     */
    firstRowIndex: number;

    /**
     * First cell index in the row
     */
    firstCellIndex: number;

    /**
     * Row index of the last cell
     */
    lastRowIndex: number;

    /**
     * Last cell index in the row
     */
    lastCellIndex: number;

    /**
     * Allow splitting
     */
    allowSplitting: boolean;

}

/**
 * Table cell split type
 */
    /**
    * Table cell split type
    */
export enum TableCellSplitType {
    'SplitByWidth' = <any> 'SplitByWidth',
    'SplitByHeight' = <any> 'SplitByHeight',
    'SplitByColSpan' = <any> 'SplitByColSpan',
    'SplitByRowSpan' = <any> 'SplitByRowSpan'
}

/**
 * Table column.
 */
export class TableColumn {

    /**
     * Width.
     */
    width: number;

}

/**
 * Table Row.
 */
export class TableRow {

    /**
     * Cells for the row.
     */
    cells?: Array<TableCell>;

    /**
     * Minimal height of the row.
     */
    minimalHeight: number;

    /**
     * Height of the row.
     */
    height: number;

}

/**
 * Represents text bounds within a paragraph or portion.
 */
export class TextBounds {

    /**
     * X coordinate of the text bounds.
     */
    x: number;

    /**
     * X coordinate of the text bounds.             
     */
    y: number;

    /**
     * Width of the text bounds.
     */
    width: number;

    /**
     * Height of the text bounds.
     */
    height: number;

}

/**
 * Mathematical text
 */
export class TextElement extends MathElement {
    constructor() {
        super();
        this.type = TextElement.TypeEnum.Text;
    }

    /**
     * Value
     */
    value?: string;

}
export namespace TextElement {
}

/**
 * Contains the TextFrame's formatting properties.
 */
export class TextFrameFormat {

    /**
     * Represents 3d effect properties for a text.
     */
    threeDFormat?: ThreeDFormat;

    /**
     * Gets or sets text wrapping shape.
     */
    transform?: TextFrameFormat.TransformEnum;

    /**
     * Left margin. Left margin.
     */
    marginLeft?: number;

    /**
     * Right margin.
     */
    marginRight?: number;

    /**
     * Top margin.
     */
    marginTop?: number;

    /**
     * Bottom margin.
     */
    marginBottom?: number;

    /**
     * True if text is wrapped at TextFrame's margins.
     */
    wrapText?: TextFrameFormat.WrapTextEnum;

    /**
     * Returns or sets vertical anchor text in a TextFrame.
     */
    anchoringType?: TextFrameFormat.AnchoringTypeEnum;

    /**
     * If True then text should be centered in box horizontally.
     */
    centerText?: TextFrameFormat.CenterTextEnum;

    /**
     * Determines text orientation. The resulted value of visual text rotation summarized from this property and custom angle in property RotationAngle.
     */
    textVerticalType?: TextFrameFormat.TextVerticalTypeEnum;

    /**
     * Returns or sets text's auto-fit mode.
     */
    autofitType?: TextFrameFormat.AutofitTypeEnum;

    /**
     * Returns or sets number of columns in the text area. This value must be a positive number. Otherwise, the value will be set to zero.  Value 0 means undefined value.
     */
    columnCount?: number;

    /**
     * Returns or sets the space between text columns in the text area (in points). This should only apply  when there is more than 1 column present. This value must be a positive number. Otherwise, the value will be set to zero. 
     */
    columnSpacing?: number;

    /**
     * Returns or set keeping text out of 3D scene entirely.
     */
    keepTextFlat?: boolean;

    /**
     * Specifies the custom rotation that is being applied to the text within the bounding box.
     */
    rotationAngle?: number;

    /**
     * Default portion format.
     */
    defaultParagraphFormat?: ParagraphFormat;

}
export namespace TextFrameFormat {
    export enum TransformEnum {
        None = <any> 'None',
        Plain = <any> 'Plain',
        Stop = <any> 'Stop',
        Triangle = <any> 'Triangle',
        TriangleInverted = <any> 'TriangleInverted',
        Chevron = <any> 'Chevron',
        ChevronInverted = <any> 'ChevronInverted',
        RingInside = <any> 'RingInside',
        RingOutside = <any> 'RingOutside',
        ArchUp = <any> 'ArchUp',
        ArchDown = <any> 'ArchDown',
        Circle = <any> 'Circle',
        Button = <any> 'Button',
        ArchUpPour = <any> 'ArchUpPour',
        ArchDownPour = <any> 'ArchDownPour',
        CirclePour = <any> 'CirclePour',
        ButtonPour = <any> 'ButtonPour',
        CurveUp = <any> 'CurveUp',
        CurveDown = <any> 'CurveDown',
        CanUp = <any> 'CanUp',
        CanDown = <any> 'CanDown',
        Wave1 = <any> 'Wave1',
        Wave2 = <any> 'Wave2',
        DoubleWave1 = <any> 'DoubleWave1',
        Wave4 = <any> 'Wave4',
        Inflate = <any> 'Inflate',
        Deflate = <any> 'Deflate',
        InflateBottom = <any> 'InflateBottom',
        DeflateBottom = <any> 'DeflateBottom',
        InflateTop = <any> 'InflateTop',
        DeflateTop = <any> 'DeflateTop',
        DeflateInflate = <any> 'DeflateInflate',
        DeflateInflateDeflate = <any> 'DeflateInflateDeflate',
        FadeRight = <any> 'FadeRight',
        FadeLeft = <any> 'FadeLeft',
        FadeUp = <any> 'FadeUp',
        FadeDown = <any> 'FadeDown',
        SlantUp = <any> 'SlantUp',
        SlantDown = <any> 'SlantDown',
        CascadeUp = <any> 'CascadeUp',
        CascadeDown = <any> 'CascadeDown',
        Custom = <any> 'Custom',
        NotDefined = <any> 'NotDefined'
    }
    export enum WrapTextEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum AnchoringTypeEnum {
        Top = <any> 'Top',
        Center = <any> 'Center',
        Bottom = <any> 'Bottom',
        Justified = <any> 'Justified',
        Distributed = <any> 'Distributed',
        NotDefined = <any> 'NotDefined'
    }
    export enum CenterTextEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
    export enum TextVerticalTypeEnum {
        Horizontal = <any> 'Horizontal',
        Vertical = <any> 'Vertical',
        Vertical270 = <any> 'Vertical270',
        WordArtVertical = <any> 'WordArtVertical',
        EastAsianVertical = <any> 'EastAsianVertical',
        MongolianVertical = <any> 'MongolianVertical',
        WordArtVerticalRightToLeft = <any> 'WordArtVerticalRightToLeft',
        NotDefined = <any> 'NotDefined'
    }
    export enum AutofitTypeEnum {
        None = <any> 'None',
        Normal = <any> 'Normal',
        Shape = <any> 'Shape',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Represents text item, referenced by TextItems
 */
export class TextItem {

    /**
     * Gets or sets the URI to resource that contains text
     */
    uri?: ResourceUri;

    /**
     * Gets or sets the text.
     */
    text?: string;

}

/**
 * Represents text of resource
 */
export class TextItems extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Gets or sets the text items.
     */
    items?: Array<TextItem>;

}

/**
 * Represents Slide's theme 
 */
export class Theme extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Name.
     */
    name?: string;

    /**
     * Color scheme.
     */
    colorScheme?: ResourceUri;

    /**
     * Font scheme.
     */
    fontScheme?: ResourceUri;

    /**
     * Format scheme.
     */
    formatScheme?: ResourceUri;

}

/**
 * ThreeDFormat
 */
export class ThreeDFormat {

    /**
     * Type of a bottom 3D bevel.             
     */
    bevelBottom?: ShapeBevel;

    /**
     * Type of a top 3D bevel.             
     */
    bevelTop?: ShapeBevel;

    /**
     * Camera
     */
    camera?: Camera;

    /**
     * Contour color
     */
    contourColor?: string;

    /**
     * Contour width
     */
    contourWidth?: number;

    /**
     * Depth
     */
    depth?: number;

    /**
     * Extrusion color
     */
    extrusionColor?: string;

    /**
     * Extrusion height
     */
    extrusionHeight?: number;

    /**
     * Light rig
     */
    lightRig?: LightRig;

    /**
     * Material
     */
    material?: ThreeDFormat.MaterialEnum;

}
export namespace ThreeDFormat {
    export enum MaterialEnum {
        Clear = <any> 'Clear',
        DkEdge = <any> 'DkEdge',
        Flat = <any> 'Flat',
        LegacyMatte = <any> 'LegacyMatte',
        LegacyMetal = <any> 'LegacyMetal',
        LegacyPlastic = <any> 'LegacyPlastic',
        LegacyWireframe = <any> 'LegacyWireframe',
        Matte = <any> 'Matte',
        Metal = <any> 'Metal',
        Plastic = <any> 'Plastic',
        Powder = <any> 'Powder',
        SoftEdge = <any> 'SoftEdge',
        Softmetal = <any> 'Softmetal',
        TranslucentPowder = <any> 'TranslucentPowder',
        WarmMatte = <any> 'WarmMatte',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Provides options that control how a presentation is saved in TIFF format.
 */
export class TiffExportOptions extends ImageExportOptionsBase {
    constructor() {
        super();
        this.format = 'tiff';
    }

    /**
     * Compression type.
     */
    compression?: TiffExportOptions.CompressionEnum;

    /**
     * Horizontal resolution, in dots per inch.
     */
    dpiX?: number;

    /**
     * Vertical resolution, in dots per inch.
     */
    dpiY?: number;

    /**
     * Specifies whether the generated document should include hidden slides or not. Default is false. 
     */
    showHiddenSlides?: boolean;

    /**
     * Specifies the pixel format for the generated images. Read/write ImagePixelFormat.
     */
    pixelFormat?: TiffExportOptions.PixelFormatEnum;

    /**
     * Gets or sets the position of the notes on the page.
     */
    notesPosition?: TiffExportOptions.NotesPositionEnum;

    /**
     * Gets or sets the position of the comments on the page.
     */
    commentsPosition?: TiffExportOptions.CommentsPositionEnum;

    /**
     * Gets or sets the width of the comment output area in pixels (Applies only if comments are displayed on the right).
     */
    commentsAreaWidth?: number;

    /**
     * Gets or sets the color of comments area (Applies only if comments are displayed on the right).
     */
    commentsAreaColor?: string;

    /**
     * True if comments that have no author are displayed. (Applies only if comments are displayed).
     */
    showCommentsByNoAuthor?: boolean;

}
export namespace TiffExportOptions {
    export enum CompressionEnum {
        Default = <any> 'Default',
        None = <any> 'None',
        CCITT3 = <any> 'CCITT3',
        CCITT4 = <any> 'CCITT4',
        LZW = <any> 'LZW',
        RLE = <any> 'RLE'
    }
    export enum PixelFormatEnum {
        Format1bppIndexed = <any> 'Format1bppIndexed',
        Format4bppIndexed = <any> 'Format4bppIndexed',
        Format8bppIndexed = <any> 'Format8bppIndexed',
        Format24bppRgb = <any> 'Format24bppRgb',
        Format32bppArgb = <any> 'Format32bppArgb'
    }
    export enum NotesPositionEnum {
        None = <any> 'None',
        BottomFull = <any> 'BottomFull',
        BottomTruncated = <any> 'BottomTruncated'
    }
    export enum CommentsPositionEnum {
        None = <any> 'None',
        Bottom = <any> 'Bottom',
        Right = <any> 'Right'
    }
}

/**
 * Represents a Tint effect.
 */
export class TintEffect extends ImageTransformEffect {
    constructor() {
        super();
        this.type = TintEffect.TypeEnum.Tint;
    }

    /**
     * Hue
     */
    hue: number;

    /**
     * Amount
     */
    amount: number;

}
export namespace TintEffect {
}

/**
 * Update background task.
 */
export class UpdateBackground extends Task {
    constructor() {
        super();
        this.type = UpdateBackground.TypeEnum.UpdateBackground;
    }

    /**
     * List of slide indices.
     */
    slides?: Array<number>;

    /**
     * Background DTO.
     */
    background?: SlideBackground;

}
export namespace UpdateBackground {
}

/**
 * Update shape task.
 */
export class UpdateShape extends Task {
    constructor() {
        super();
        this.type = UpdateShape.TypeEnum.UpdateShape;
    }

    /**
     * Shape DTO.
     */
    shape?: ShapeBase;

    /**
     * Shape path for a grouped or SmartArt shape.
     */
    shapePath?: string;

}
export namespace UpdateShape {
}

/**
 * Provides options that control how a presentation is saved in an video format.
 */
export class VideoExportOptions extends ExportOptions {
    constructor() {
        super();
        this.format = 'mpeg4';
    }

    /**
     * Slides transition duration.
     */
    slidesTransitionDuration?: number;

    /**
     * Video transition type
     */
    transitionType?: VideoExportOptions.TransitionTypeEnum;

    /**
     * Duration of transition defined in TransitionType property.
     */
    transitionDuration?: number;

    /**
     * Video resolution type
     */
    videoResolutionType?: VideoExportOptions.VideoResolutionTypeEnum;

}
export namespace VideoExportOptions {
    export enum TransitionTypeEnum {
        None = <any> 'None',
        Fade = <any> 'Fade',
        Distance = <any> 'Distance',
        Slidedown = <any> 'Slidedown',
        Slideright = <any> 'Slideright',
        Slideleft = <any> 'Slideleft',
        Slideup = <any> 'Slideup',
        Smoothleft = <any> 'Smoothleft',
        Smoothright = <any> 'Smoothright',
        Smoothup = <any> 'Smoothup',
        Smoothdown = <any> 'Smoothdown',
        Rectcrop = <any> 'Rectcrop',
        Circlecrop = <any> 'Circlecrop',
        Circleclose = <any> 'Circleclose',
        Circleopen = <any> 'Circleopen',
        Horzclose = <any> 'Horzclose',
        Horzopen = <any> 'Horzopen',
        Vertclose = <any> 'Vertclose',
        Vertopen = <any> 'Vertopen',
        Diagbl = <any> 'Diagbl',
        Diagbr = <any> 'Diagbr',
        Diagtl = <any> 'Diagtl',
        Diagtr = <any> 'Diagtr',
        Hlslice = <any> 'Hlslice',
        Hrslice = <any> 'Hrslice',
        Vuslice = <any> 'Vuslice',
        Vdslice = <any> 'Vdslice',
        Dissolve = <any> 'Dissolve',
        Pixelize = <any> 'Pixelize',
        Radial = <any> 'Radial'
    }
    export enum VideoResolutionTypeEnum {
        FullHD = <any> 'FullHD',
        SD = <any> 'SD',
        HD = <any> 'HD',
        QHD = <any> 'QHD'
    }
}

/**
 * Represents VideoFrame resource.
 */
export class VideoFrame extends GeometryShape {
    constructor() {
        super();
        this.type = VideoFrame.TypeEnum.VideoFrame;
    }

    /**
     * Determines whether a video is shown in full screen mode.
     */
    fullScreenMode?: boolean;

    /**
     * Determines whether a VideoFrame is hidden. 
     */
    hideAtShowing?: boolean;

    /**
     * Determines whether a video is looped.
     */
    playLoopMode?: boolean;

    /**
     * Returns or sets the video play mode.  
     */
    playMode?: VideoFrame.PlayModeEnum;

    /**
     * Determines whether a video is automatically rewinded to start as soon as the movie has finished playing
     */
    rewindVideo?: boolean;

    /**
     * Returns or sets the audio volume.
     */
    volume?: VideoFrame.VolumeEnum;

    /**
     * Video data encoded in base64.
     */
    base64Data?: string;

    /**
     * Picture fill format.
     */
    pictureFillFormat?: PictureFill;

}
export namespace VideoFrame {
    export enum PlayModeEnum {
        Auto = <any> 'Auto',
        OnClick = <any> 'OnClick',
        AllSlides = <any> 'AllSlides',
        InClickSequence = <any> 'InClickSequence',
        Mixed = <any> 'Mixed'
    }
    export enum VolumeEnum {
        Mute = <any> 'Mute',
        Low = <any> 'Low',
        Medium = <any> 'Medium',
        Loud = <any> 'Loud',
        Mixed = <any> 'Mixed'
    }
}

/**
 * Slides document properties.
 */
export class ViewProperties extends ResourceBase {
    constructor() {
        super();
    }

    /**
     * Last used view mode.
     */
    lastView?: ViewProperties.LastViewEnum;

    /**
     * Horizontal bar state.
     */
    horizontalBarState?: ViewProperties.HorizontalBarStateEnum;

    /**
     * Vertical bar state.
     */
    verticalBarState?: ViewProperties.VerticalBarStateEnum;

    /**
     * True to prefer single view.
     */
    preferSingleView?: boolean;

    /**
     * The sizing of the side content region of the normal view, when the region is of a variable restored size.
     */
    restoredLeft?: NormalViewRestoredProperties;

    /**
     * The sizing of the top slide region of the normal view, when the region is of a variable restored size.
     */
    restoredTop?: NormalViewRestoredProperties;

    /**
     * Slide view mode properties.
     */
    slideViewProperties?: CommonSlideViewProperties;

    /**
     * Notes view mode properties.
     */
    notesViewProperties?: CommonSlideViewProperties;

    /**
     * True if the comments should be shown.
     */
    showComments?: ViewProperties.ShowCommentsEnum;

}
export namespace ViewProperties {
    export enum LastViewEnum {
        NotDefined = <any> 'NotDefined',
        SlideView = <any> 'SlideView',
        SlideMasterView = <any> 'SlideMasterView',
        NotesView = <any> 'NotesView',
        HandoutView = <any> 'HandoutView',
        NotesMasterView = <any> 'NotesMasterView',
        OutlineView = <any> 'OutlineView',
        SlideSorterView = <any> 'SlideSorterView',
        SlideThumbnailView = <any> 'SlideThumbnailView'
    }
    export enum HorizontalBarStateEnum {
        Minimized = <any> 'Minimized',
        Restored = <any> 'Restored',
        Maximized = <any> 'Maximized'
    }
    export enum VerticalBarStateEnum {
        Minimized = <any> 'Minimized',
        Restored = <any> 'Restored',
        Maximized = <any> 'Maximized'
    }
    export enum ShowCommentsEnum {
        False = <any> 'False',
        True = <any> 'True',
        NotDefined = <any> 'NotDefined'
    }
}

/**
 * Represents Excel spreadsheet data source.
 */
export class Workbook extends DataSource {
    constructor() {
        super();
        this.type = Workbook.TypeEnum.Workbook;
    }

    /**
     * Worksheet index.
     */
    worksheetIndex: number;

    /**
     * Column index of the first value.
     */
    columnIndex: number;

    /**
     * Row index of the first value.
     */
    rowIndex: number;

}
export namespace Workbook {
}

/**
 * Provides options that control how a presentation is saved in XAML format.
 */
export class XamlExportOptions extends ExportOptions {
    constructor() {
        super();
        this.format = 'xaml';
    }

    /**
     * Export hidden slides
     */
    exportHiddenSlides?: boolean;

}

/**
 * Provides options that control how a presentation is saved in XPS format.
 */
export class XpsExportOptions extends ExportOptions {
    constructor() {
        super();
        this.format = 'xps';
    }

    /**
     * Specifies whether the generated document should include hidden slides or not. Default is false. 
     */
    showHiddenSlides?: boolean;

    /**
     * True to convert all metafiles used in a presentation to the PNG images.
     */
    saveMetafilesAsPng?: boolean;

    /**
     * True to draw black frame around each slide.
     */
    drawSlidesFrame?: boolean;

}

/**
 * Zoom frame.
 */
export class ZoomFrame extends ZoomObject {
    constructor() {
        super();
        this.type = ZoomFrame.TypeEnum.ZoomFrame;
    }

    /**
     * Links to the target slide
     */
    targetSlideIndex?: number;

}
export namespace ZoomFrame {
}
