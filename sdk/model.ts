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


export interface ArrowHeadProperties {
    length: LineArrowheadLength;

    style: LineArrowheadStyle;

    width: LineArrowheadWidth;

}

/**
 * Constants which define how a sound is played.
 */
    /**
    * Constants which define how a sound is played.
    */
export enum AudioPlayModePreset {
    Auto = <any> 'Auto',
    OnClick = <any> 'OnClick',
    AllSlides = <any> 'AllSlides',
    Mixed = <any> 'Mixed'
}

/**
 * Constants which define audio volume.
 */
    /**
    * Constants which define audio volume.
    */
export enum AudioVolumeMode {
    Mute = <any> 'Mute',
    Low = <any> 'Low',
    Medium = <any> 'Medium',
    Loud = <any> 'Loud',
    Mixed = <any> 'Mixed'
}

/**
 * Represents chart axes
 */
export interface Axes {
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
export interface Axis {
    /**
     * True if the axis is visible
     */
    isVisible: boolean;

    /**
     * True if the axis has a visible title
     */
    hasTitle: boolean;

    /**
     * Axis position
     */
    position: AxisPositionType;

    /**
     * The scaling value of the display units for the value axis
     */
    displayUnit: DisplayUnitType;

    /**
     * The smallest time unit that is represented on the date axis
     */
    baseUnitScale: TimeUnitType;

    /**
     * True the major unit of the axis is automatically assigned
     */
    isAutomaticMajorUnit: boolean;

    /**
     * The major units for the date or value axis
     */
    majorUnit: number;

    /**
     * The major unit scale for the date axis
     */
    majorUnitScale: TimeUnitType;

    /**
     * The type of major tick mark for the specified axis
     */
    majorTickMark: TickMarkType;

    /**
     * True the minor unit of the axis is automatically assigned
     */
    isAutomaticMinorUnit: boolean;

    /**
     * The minor units for the date or value axis
     */
    minorUnit: number;

    /**
     * The minor unit scale for the date axis
     */
    minorUnitScale: TimeUnitType;

    /**
     * The type of minor tick mark for the specified axis
     */
    minorTickMark: TickMarkType;

    /**
     * True if the max value is automatically assigned
     */
    isAutomaticMaxValue: boolean;

    /**
     * The maximum value on the value axis
     */
    maxValue: number;

    /**
     * True if the min value is automatically assigned
     */
    isAutomaticMinValue: boolean;

    /**
     * The minimum value on the value axis
     */
    minValue: number;

    /**
     * True if the value axis scale type is logarithmic
     */
    isLogarithmic: boolean;

    /**
     * The logarithmic base. Default value is 10
     */
    logBase: number;

    /**
     * The type of the category axis
     */
    categoryAxisType: CategoryAxisType;

    /**
     * True if the value axis crosses the category axis between categories. This property applies only to category axes, and it doesn't apply to 3-D charts
     */
    axisBetweenCategories: boolean;

    /**
     * The distance of labels from the axis. Applied to category or date axis. Value must be between 0% and 1000%.             
     */
    labelOffset: number;

    /**
     * True if MS PowerPoint plots data points from last to first
     */
    isPlotOrderReversed: boolean;

    /**
     * True if the format is linked to source data
     */
    isNumberFormatLinkedToSource: boolean;

    /**
     * the format string for the Axis Labels
     */
    numberFormat?: string;

    /**
     * The CrossType on the specified axis where the other axis crosses
     */
    crossType: CrossesType;

    /**
     * The point on the axis where the perpendicular axis crosses it
     */
    crossAt: number;

    /**
     * True for automatic tick marks spacing value
     */
    isAutomaticTickMarksSpacing: boolean;

    /**
     * Specifies how many tick marks shall be skipped before the next one shall be drawn. Applied to category or series axis.
     */
    tickMarksSpacing: number;

    /**
     * True for automatic tick label spacing value
     */
    isAutomaticTickLabelSpacing: boolean;

    /**
     * Specifies how many tick labels to skip between label that is drawn.
     */
    tickLabelSpacing: number;

    /**
     * The position of tick-mark labels on the specified axis.
     */
    tickLabelPosition: TickLabelPositionType;

    /**
     * Represents the rotation angle of tick labels.
     */
    tickLabelRotationAngle: number;

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

/**
 * Determines the position of an axis.
 */
    /**
    * Determines the position of an axis.
    */
export enum AxisPositionType {
    Bottom = <any> 'Bottom',
    Left = <any> 'Left',
    Right = <any> 'Right',
    Top = <any> 'Top'
}

/**
 * Represents blur effect 
 */
export interface BlurEffect {
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
 * 
 */
    /**
    * 
    */
export enum BulletType {
    None = <any> 'None',
    Symbol = <any> 'Symbol',
    Numbered = <any> 'Numbered',
    Picture = <any> 'Picture',
    NotDefined = <any> 'NotDefined'
}

/**
 * Represents a type of a category axis
 */
    /**
    * Represents a type of a category axis
    */
export enum CategoryAxisType {
    Text = <any> 'Text',
    Date = <any> 'Date'
}

/**
 * Represents type of data points in series.
 */
    /**
    * Represents type of data points in series.
    */
export enum ChartDataPointType {
    OneValue = <any> 'OneValue',
    Scatter = <any> 'Scatter',
    Bubble = <any> 'Bubble'
}

/**
 * Represents chart title
 */
export interface ChartTitle {
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
 * Represents a type of chart.
 */
    /**
    * Represents a type of chart.
    */
export enum ChartType {
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
    SeriesOfMixedTypes = <any> 'SeriesOfMixedTypes'
}

/**
 * Represents a chart wall
 */
export interface ChartWall {
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
    thickness: number;

    /**
     * Get or sets mode of bar picture filling.
     */
    pictureType: PictureType;

}

/**
 * 
 */
    /**
    * 
    */
export enum CombinedShapeType {
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
    Chart = <any> 'Chart',
    Table = <any> 'Table',
    PictureFrame = <any> 'PictureFrame',
    VideoFrame = <any> 'VideoFrame',
    AudioFrame = <any> 'AudioFrame',
    Diagram = <any> 'Diagram',
    OleObjectFrame = <any> 'OleObjectFrame',
    GroupShape = <any> 'GroupShape',
    GraphicalObject = <any> 'GraphicalObject',
    NotDefined = <any> 'NotDefined'
}

/**
 * Represents the rule to render comments into exported document
 */
    /**
    * Represents the rule to render comments into exported document
    */
export enum CommentsPositions {
    None = <any> 'None',
    Bottom = <any> 'Bottom',
    Right = <any> 'Right'
}

/**
 * The conformance class to which the PresentationML document conforms.
 */
    /**
    * The conformance class to which the PresentationML document conforms.
    */
export enum Conformance {
    Ecma3762006 = <any> 'Ecma376_2006',
    Iso295002008Transitional = <any> 'Iso29500_2008_Transitional',
    Iso295002008Strict = <any> 'Iso29500_2008_Strict'
}

/**
 * Determines where axis will cross.
 */
    /**
    * Determines where axis will cross.
    */
export enum CrossesType {
    AxisCrossesAtZero = <any> 'AxisCrossesAtZero',
    Maximum = <any> 'Maximum',
    Custom = <any> 'Custom'
}

export interface CustomDashPattern {
    items?: Array<number>;

}

/**
 * Determines multiplicity of the displayed data.
 */
    /**
    * Determines multiplicity of the displayed data.
    */
export enum DisplayUnitType {
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

/**
 * Effect format
 */
export interface EffectFormat {
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
 * Available export formats
 */
    /**
    * Available export formats
    */
export enum ExportFormat {
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
    Potx = <any> 'Potx',
    Potm = <any> 'Potm',
    Html = <any> 'Html',
    Swf = <any> 'Swf',
    Svg = <any> 'Svg',
    Jpeg = <any> 'Jpeg',
    Png = <any> 'Png',
    Gif = <any> 'Gif',
    Bmp = <any> 'Bmp'
}

/**
 * Represents export options for whole presentation.
 */
export interface ExportOptions {
    format?: string;

}

/**
 * Represents a way to handle external fonts used for text drawing.
 */
    /**
    * Represents a way to handle external fonts used for text drawing.
    */
export enum ExternalFontsHandling {
    AddLinksToFontFiles = <any> 'AddLinksToFontFiles',
    Embed = <any> 'Embed',
    Vectorize = <any> 'Vectorize'
}

/**
 * fill blend modes
 */
    /**
    * fill blend modes
    */
export enum FillBlendMode {
    Darken = <any> 'Darken',
    Lighten = <any> 'Lighten',
    Multiply = <any> 'Multiply',
    Overlay = <any> 'Overlay',
    Screen = <any> 'Screen'
}

export interface FillFormat {
    type: FillType;

}

/**
 * Represents fill overlay effect 
 */
export interface FillOverlayEffect {
    /**
     * blend mode
     */
    blend: FillBlendMode;

}

/**
 * 
 */
    /**
    * 
    */
export enum FillType {
    NoFill = <any> 'NoFill',
    Solid = <any> 'Solid',
    Gradient = <any> 'Gradient',
    Pattern = <any> 'Pattern',
    Picture = <any> 'Picture',
    NotDefined = <any> 'NotDefined'
}

/**
 * 
 */
    /**
    * 
    */
export enum FontAlignment {
    Automatic = <any> 'Automatic',
    Top = <any> 'Top',
    Center = <any> 'Center',
    Bottom = <any> 'Bottom',
    Baseline = <any> 'Baseline',
    Default = <any> 'Default'
}

export interface FontSet {
    complexScript?: string;

    eastAsian?: string;

    latin?: string;

}

/**
 * 
 */
    /**
    * 
    */
export enum GeometryShapeType {
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

/**
 * Represents glow effect 
 */
export interface GlowEffect {
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
 * Gradient style.
 */
    /**
    * Gradient style.
    */
export enum GradientDirection {
    FromCorner1 = <any> 'FromCorner1',
    FromCorner2 = <any> 'FromCorner2',
    FromCorner3 = <any> 'FromCorner3',
    FromCorner4 = <any> 'FromCorner4',
    FromCenter = <any> 'FromCenter',
    NotDefined = <any> 'NotDefined'
}

export interface GradientFillStop {
    color?: string;

    position: number;

}

/**
 * 
 */
    /**
    * 
    */
export enum GradientShapeType {
    Linear = <any> 'Linear',
    Rectangle = <any> 'Rectangle',
    Radial = <any> 'Radial',
    Path = <any> 'Path',
    NotDefined = <any> 'NotDefined'
}

/**
 * 
 */
    /**
    * 
    */
export enum GradientTileFlip {
    NoFlip = <any> 'NoFlip',
    FlipX = <any> 'FlipX',
    FlipY = <any> 'FlipY',
    FlipBoth = <any> 'FlipBoth',
    NotDefined = <any> 'NotDefined'
}

/**
 * Represents export options for whole presentation.
 */
export interface IShapeExportOptions {
    format?: string;

}

/**
 * Represents a format for image export.
 */
    /**
    * Represents a format for image export.
    */
export enum ImageExportFormat {
    Jpeg = <any> 'Jpeg',
    Png = <any> 'Png',
    Gif = <any> 'Gif',
    Bmp = <any> 'Bmp',
    Tiff = <any> 'Tiff'
}

/**
 * Specifies the pixel format for the generated images.
 */
    /**
    * Specifies the pixel format for the generated images.
    */
export enum ImagePixelFormat {
    Format1bppIndexed = <any> 'Format1bppIndexed',
    Format4bppIndexed = <any> 'Format4bppIndexed',
    Format8bppIndexed = <any> 'Format8bppIndexed',
    Format24bppRgb = <any> 'Format24bppRgb',
    Format32bppArgb = <any> 'Format32bppArgb'
}

/**
 * Represents inner shadow effect 
 */
export interface InnerShadowEffect {
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
export interface Input {
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
 * Represents abstract input file source for pipeline.
 */
export interface InputFile {
    /**
     * Gets type of input source.
     */
    type: InputFileType;

    /**
     * Get or sets password to open document.
     */
    password?: string;

}

/**
 * Represents type of input file source in pipeline.
 */
    /**
    * Represents type of input file source in pipeline.
    */
export enum InputFileType {
    Path = <any> 'Path',
    Request = <any> 'Request',
    Base64 = <any> 'Base64'
}

/**
 * Represents type of Layout Slide
 */
    /**
    * Represents type of Layout Slide
    */
export enum LayoutSlideType {
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

/**
 * Represents a chart legend
 */
export interface Legend {
    /**
     * position
     */
    position: LegendPositionType;

    /**
     * the X location
     */
    x: number;

    /**
     * the Y location
     */
    y: number;

    /**
     * Width
     */
    width: number;

    /**
     * Height
     */
    height: number;

    /**
     * true if other elements are allowed to overlay the legend
     */
    overlay: boolean;

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

/**
 * the position of the legend on the chart
 */
    /**
    * the position of the legend on the chart
    */
export enum LegendPositionType {
    Bottom = <any> 'Bottom',
    Left = <any> 'Left',
    Right = <any> 'Right',
    Top = <any> 'Top',
    TopRight = <any> 'TopRight'
}

/**
 * 
 */
    /**
    * 
    */
export enum LineAlignment {
    Center = <any> 'Center',
    Inset = <any> 'Inset',
    NotDefined = <any> 'NotDefined'
}

/**
 * 
 */
    /**
    * 
    */
export enum LineArrowheadLength {
    Short = <any> 'Short',
    Medium = <any> 'Medium',
    Long = <any> 'Long',
    NotDefined = <any> 'NotDefined'
}

/**
 * 
 */
    /**
    * 
    */
export enum LineArrowheadStyle {
    None = <any> 'None',
    Triangle = <any> 'Triangle',
    Stealth = <any> 'Stealth',
    Diamond = <any> 'Diamond',
    Oval = <any> 'Oval',
    Open = <any> 'Open',
    NotDefined = <any> 'NotDefined'
}

/**
 * 
 */
    /**
    * 
    */
export enum LineArrowheadWidth {
    Narrow = <any> 'Narrow',
    Medium = <any> 'Medium',
    Wide = <any> 'Wide',
    NotDefined = <any> 'NotDefined'
}

/**
 * 
 */
    /**
    * 
    */
export enum LineCapStyle {
    Round = <any> 'Round',
    Square = <any> 'Square',
    Flat = <any> 'Flat',
    NotDefined = <any> 'NotDefined'
}

/**
 * Dash style of a line.
 */
    /**
    * Dash style of a line.
    */
export enum LineDashStyle {
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

export interface LineFormat {
    alignment: LineAlignment;

    capStyle: LineCapStyle;

    dashStyle: LineDashStyle;

    joinStyle: LineJoinStyle;

    style: LineStyle;

    beginArrowHead?: ArrowHeadProperties;

    endArrowHead?: ArrowHeadProperties;

    customDashPattern?: CustomDashPattern;

    fillFormat?: FillFormat;

    miterLimit: number;

    width: number;

}

/**
 * 
 */
    /**
    * 
    */
export enum LineJoinStyle {
    Round = <any> 'Round',
    Bevel = <any> 'Bevel',
    Miter = <any> 'Miter',
    NotDefined = <any> 'NotDefined'
}

/**
 * 
 */
    /**
    * 
    */
export enum LineStyle {
    Single = <any> 'Single',
    ThinThin = <any> 'ThinThin',
    ThinThick = <any> 'ThinThick',
    ThickThin = <any> 'ThickThin',
    ThickBetweenThin = <any> 'ThickBetweenThin',
    NotDefined = <any> 'NotDefined'
}

/**
 * Determines form of marker on chart's data point
 */
    /**
    * Determines form of marker on chart's data point
    */
export enum MarkerStyleType {
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

export interface MarshalByRefObject {
}

export interface MergingSource {
    input?: InputFile;

    slides?: Array<number>;

}

/**
 * Represents the rule to render notes into exported document
 */
    /**
    * Represents the rule to render notes into exported document
    */
export enum NotesPositions {
    None = <any> 'None',
    BottomFull = <any> 'BottomFull',
    BottomTruncated = <any> 'BottomTruncated'
}

/**
 * 
 */
    /**
    * 
    */
export enum NotesSlideExportFormat {
    Jpeg = <any> 'Jpeg',
    Png = <any> 'Png',
    Gif = <any> 'Gif',
    Bmp = <any> 'Bmp',
    Tiff = <any> 'Tiff'
}

/**
 * 
 */
    /**
    * 
    */
export enum NullableBool {
    False = <any> 'False',
    True = <any> 'True',
    NotDefined = <any> 'NotDefined'
}

/**
 * 
 */
    /**
    * 
    */
export enum NumberedBulletStyle {
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

export interface OneValueChartDataPoint {
    value: number;

}

/**
 * Request for presentations merge with optional order of slides
 */
export interface OrderedMergeRequest {
    /**
     * Gets or sets the presentation paths.
     */
    presentations?: Array<PresentationToMerge>;

}

/**
 * Represents formatting type the child nodes in an organization chart
 */
    /**
    * Represents formatting type the child nodes in an organization chart
    */
export enum OrganizationChartLayoutType {
    Initial = <any> 'Initial',
    Standart = <any> 'Standart',
    BothHanging = <any> 'BothHanging',
    LeftHanging = <any> 'LeftHanging',
    RightHanging = <any> 'RightHanging'
}

/**
 * Represents outer shadow effect 
 */
export interface OuterShadowEffect {
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
export interface OutputFile {
    /**
     * Gets type of output destination.
     */
    type: OutputFileType;

}

/**
 * Represents type of output file destination in pipeline.
 */
    /**
    * Represents type of output file destination in pipeline.
    */
export enum OutputFileType {
    Path = <any> 'Path',
    Response = <any> 'Response'
}

/**
 * Available pattern styles
 */
    /**
    * Available pattern styles
    */
export enum PatternStyle {
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

/**
 * Constants which define the PDF standards compliance level.
 */
    /**
    * Constants which define the PDF standards compliance level.
    */
export enum PdfCompliance {
    Pdf15 = <any> 'Pdf15',
    PdfA1b = <any> 'PdfA1b'
}

/**
 * Constants which define the type of a compression applied to all content in the PDF file except images.
 */
    /**
    * Constants which define the type of a compression applied to all content in the PDF file except images.
    */
export enum PdfTextCompression {
    None = <any> 'None',
    Flate = <any> 'Flate'
}

/**
 * 
 */
    /**
    * 
    */
export enum PictureFillMode {
    Tile = <any> 'Tile',
    Stretch = <any> 'Stretch'
}

/**
 * Determines mode of bar picture filling.
 */
    /**
    * Determines mode of bar picture filling.
    */
export enum PictureType {
    Stack = <any> 'Stack',
    StackScale = <any> 'StackScale',
    Stretch = <any> 'Stretch',
    NotDefined = <any> 'NotDefined'
}

/**
 * Represents the pictures compression level
 */
    /**
    * Represents the pictures compression level
    */
export enum PicturesCompression {
    Dpi330 = <any> 'Dpi330',
    Dpi220 = <any> 'Dpi220',
    Dpi150 = <any> 'Dpi150',
    Dpi96 = <any> 'Dpi96',
    Dpi72 = <any> 'Dpi72',
    DocumentResolution = <any> 'DocumentResolution'
}

/**
 * Represents pipeline for one input document.
 */
export interface Pipeline {
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
 * 
 */
    /**
    * 
    */
export enum PlaceholderOrientation {
    Horizontal = <any> 'Horizontal',
    Vertical = <any> 'Vertical'
}

/**
 * 
 */
    /**
    * 
    */
export enum PlaceholderSize {
    Full = <any> 'Full',
    Half = <any> 'Half',
    Quarter = <any> 'Quarter'
}

/**
 * 
 */
    /**
    * 
    */
export enum PlaceholderType {
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

/**
 * Represents the plot area
 */
export interface PlotArea {
    /**
     * the X location
     */
    x: number;

    /**
     * the Y location
     */
    y: number;

    /**
     * Width
     */
    width: number;

    /**
     * Height
     */
    height: number;

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

/**
 * Represents presentation to merge
 */
export interface PresentationToMerge {
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

}

/**
 * Request for presentations merge
 */
export interface PresentationsMergeRequest {
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
export interface PresetShadowEffect {
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
    preset: PresetShadowType;

    /**
     * shadow color
     */
    shadowColor?: string;

}

/**
 * preset shadow types
 */
    /**
    * preset shadow types
    */
export enum PresetShadowType {
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

/**
 * rectangle alignment types
 */
    /**
    * rectangle alignment types
    */
export enum RectangleAlignment {
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

/**
 * Represents reflection effect 
 */
export interface ReflectionEffect {
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
    rectangleAlign: RectangleAlignment;

    /**
     * true if the reflection should rotate with the shape when the shape is rotated
     */
    rotateShadowWithShape: boolean;

}

/**
 * Base class for all Slide's DTO objects 
 */
export interface ResourceBase {
    /**
     * Gets or sets the link to this resource.
     */
    selfUri?: ResourceUri;

    alternateLinks?: Array<ResourceUri>;

    /**
     * A list of links that originate from this document.
     */
    links?: Array<ResourceUri>;

}

/**
 * Represents Resource URI
 */
export interface ResourceUri {
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

}

export interface ResourceUriElement {
    uri?: ResourceUri;

}

/**
 * The basic SaaSposeResponse response class kept from the old Aspose for Cloud Platform. We keep this base class and use it because most probably users are already using it to get API responses. The plan in future is to get rid of this name, but who knows when ?!
 */
export interface SaaSposeResponse {
    code: number;

    status?: string;

}

/**
 * 
 */
    /**
    * 
    */
export enum ScaleType {
    DoNotScale = <any> 'DoNotScale',
    EnsureFit = <any> 'EnsureFit',
    Maximize = <any> 'Maximize'
}

/**
 * Scatter chart (two-dimensional) data point
 */
export interface ScatterChartDataPoint {
    /**
     * X-value
     */
    xValue: number;

    /**
     * Y-value
     */
    yValue: number;

}

/**
 * A chart series.
 */
export interface Series {
    /**
     * Data point type.
     */
    dataPointType: ChartDataPointType;

    /**
     * Series type.
     */
    type: ChartType;

    /**
     * Series name.
     */
    name?: string;

    /**
     * True if each data marker in the series has a different color.
     */
    isColorVaried: boolean;

    /**
     * Invert solid color for the series.
     */
    invertedSolidFillColor?: string;

    /**
     * True if curve smoothing is turned on. Applies only to line and scatter connected by lines charts.
     */
    smooth: boolean;

    /**
     * True if the series is plotted on second value axis.
     */
    plotOnSecondAxis: boolean;

    /**
     * Series order.
     */
    order: number;

    /**
     * The number format for the series y values.
     */
    numberFormatOfYValues?: string;

    /**
     * The number format for the series x values.
     */
    numberFormatOfXValues?: string;

    /**
     * The number format for the series values.
     */
    numberFormatOfValues?: string;

    /**
     * The number format for the series bubble sizes.
     */
    numberFormatOfBubbleSizes?: string;

    /**
     * True if the series shall invert its colors if the value is negative. Applies to bar, column and bubble series.
     */
    invertIfNegative: boolean;

    /**
     * The distance of an open pie slice from the center of the pie chart is expressed as a percentage of the pie diameter.
     */
    explosion: number;

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

}

/**
 * Represents a series marker
 */
export interface SeriesMarker {
    /**
     * size
     */
    size: number;

    /**
     * symbol
     */
    symbol: MarkerStyleType;

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

/**
 * Represents a format for export individual shape.
 */
    /**
    * Represents a format for export individual shape.
    */
export enum ShapeExportFormat {
    Jpeg = <any> 'Jpeg',
    Png = <any> 'Png',
    Gif = <any> 'Gif',
    Bmp = <any> 'Bmp',
    Tiff = <any> 'Tiff',
    Svg = <any> 'Svg'
}

/**
 * Provides options that control how a shape is saved in thumbnail.
 */
export interface ShapeImageExportOptions {
    /**
     * Get or sets scaling ratio by X axis.
     */
    scaleX: number;

    /**
     * Get or sets scaling ratio by Y axis.
     */
    scaleY: number;

    /**
     * Get or sets thumbnail bounds
     */
    thumbnailBounds: ShapeThumbnailBounds;

    /**
     * Gets export format.
     */
    format?: string;

}

/**
 * Represents thumnail bounds settings.
 */
    /**
    * Represents thumnail bounds settings.
    */
export enum ShapeThumbnailBounds {
    Slide = <any> 'Slide',
    Shape = <any> 'Shape',
    Appearance = <any> 'Appearance'
}

/**
 * Shape type
 */
    /**
    * Shape type
    */
export enum ShapeType {
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
    SmartArtShape = <any> 'SmartArtShape'
}

/**
 * 
 */
    /**
    * 
    */
export enum SizeType {
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
    OnScreen16x10 = <any> 'OnScreen16x10'
}

/**
 * Represents comment of slide
 */
export interface SlideComment {
    author?: string;

    text?: string;

    createdTime?: string;

}

/**
 * Slide Export Format
 */
    /**
    * Slide Export Format
    */
export enum SlideExportFormat {
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
    Potm = <any> 'Potm',
    Svg = <any> 'Svg'
}

/**
 * Represents color scheme of a SmartArt diagram.
 */
    /**
    * Represents color scheme of a SmartArt diagram.
    */
export enum SmartArtColorType {
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

/**
 * Represents layout type of a SmartArt diagram.
 */
    /**
    * Represents layout type of a SmartArt diagram.
    */
export enum SmartArtLayoutType {
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

/**
 * Smart art node.
 */
export interface SmartArtNode {
    /**
     * Node list.
     */
    nodes?: Array<SmartArtNode>;

    /**
     * Gets or sets the link to shapes.
     */
    shapes?: ResourceUriElement;

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
    orgChartLayout: OrganizationChartLayoutType;

}

/**
 * Represents style scheme of a SmartArt diagram.
 */
    /**
    * Represents style scheme of a SmartArt diagram.
    */
export enum SmartArtQuickStyleType {
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

/**
 * Represents soft edge effect 
 */
export interface SoftEdgeEffect {
    /**
     * radius
     */
    radius: number;

}

/**
 * Represents one cell of table.
 */
export interface TableCell {
    /**
     * Cell text.
     */
    text?: string;

    /**
     * The number of rows spanned by a merged cell.
     */
    rowSpan: number;

    /**
     * The number of columns spanned by a merged cell.
     */
    colSpan: number;

    /**
     * The top margin of the cell.
     */
    marginTop: number;

    /**
     * The right margin of the cell.
     */
    marginRight: number;

    /**
     * The left margin of the cell.
     */
    marginLeft: number;

    /**
     * The bottom margin of the cell.
     */
    marginBottom: number;

    /**
     * Text anchor type.
     */
    textAnchorType: TextAnchorType;

    /**
     * The type of vertical text.
     */
    textVerticalType: TextVerticalType;

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

}

export interface TableColumn {
    width: number;

}

/**
 * Table Row.
 */
export interface TableRow {
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
 * 
 */
    /**
    * 
    */
export enum TableStylePreset {
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

/**
 * Represents task for pipeline.
 */
export interface Task {
    /**
     * Gets type of task.
     */
    type: TaskType;

}

/**
 * Pipeline task type.
 */
    /**
    * Pipeline task type.
    */
export enum TaskType {
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

/**
 * 
 */
    /**
    * 
    */
export enum TextAlignment {
    Left = <any> 'Left',
    Center = <any> 'Center',
    Right = <any> 'Right',
    Justify = <any> 'Justify',
    JustifyLow = <any> 'JustifyLow',
    Distributed = <any> 'Distributed',
    NotDefined = <any> 'NotDefined'
}

/**
 * Text box alignment within a text area.
 */
    /**
    * Text box alignment within a text area.
    */
export enum TextAnchorType {
    Top = <any> 'Top',
    Center = <any> 'Center',
    Bottom = <any> 'Bottom',
    Justified = <any> 'Justified',
    Distributed = <any> 'Distributed',
    NotDefined = <any> 'NotDefined'
}

/**
 * 
 */
    /**
    * 
    */
export enum TextCapType {
    None = <any> 'None',
    Small = <any> 'Small',
    All = <any> 'All',
    NotDefined = <any> 'NotDefined'
}

/**
 * Represents text item, referenced by 
 */
export interface TextItem {
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
 * 
 */
    /**
    * 
    */
export enum TextStrikethroughType {
    None = <any> 'None',
    Single = <any> 'Single',
    Double = <any> 'Double',
    NotDefined = <any> 'NotDefined'
}

/**
 * 
 */
    /**
    * 
    */
export enum TextUnderlineType {
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

/**
 * Vertical text writing mode
 */
    /**
    * Vertical text writing mode
    */
export enum TextVerticalType {
    Horizontal = <any> 'Horizontal',
    Vertical = <any> 'Vertical',
    Vertical270 = <any> 'Vertical270',
    WordArtVertical = <any> 'WordArtVertical',
    EastAsianVertical = <any> 'EastAsianVertical',
    MongolianVertical = <any> 'MongolianVertical',
    WordArtVerticalRightToLeft = <any> 'WordArtVerticalRightToLeft',
    NotDefined = <any> 'NotDefined'
}

/**
 * Represents the position type of tick-mark labels on the specified axis.
 */
    /**
    * Represents the position type of tick-mark labels on the specified axis.
    */
export enum TickLabelPositionType {
    High = <any> 'High',
    Low = <any> 'Low',
    NextTo = <any> 'NextTo',
    None = <any> 'None'
}

/**
 * Represents the tick mark type for the specified axis.
 */
    /**
    * Represents the tick mark type for the specified axis.
    */
export enum TickMarkType {
    Cross = <any> 'Cross',
    Inside = <any> 'Inside',
    None = <any> 'None',
    Outside = <any> 'Outside'
}

/**
 * Provides options that control how a presentation is compressed in TIFF format.
 */
    /**
    * Provides options that control how a presentation is compressed in TIFF format.
    */
export enum TiffCompressionType {
    Default = <any> 'Default',
    None = <any> 'None',
    CCITT3 = <any> 'CCITT3',
    CCITT4 = <any> 'CCITT4',
    LZW = <any> 'LZW',
    RLE = <any> 'RLE'
}

/**
 * Represents the base unit for the category axis
 */
    /**
    * Represents the base unit for the category axis
    */
export enum TimeUnitType {
    Days = <any> 'Days',
    Months = <any> 'Months',
    Years = <any> 'Years'
}

/**
 * 
 */
    /**
    * 
    */
export enum VideoPlayModePreset {
    Auto = <any> 'Auto',
    OnClick = <any> 'OnClick',
    AllSlides = <any> 'AllSlides',
    Mixed = <any> 'Mixed'
}

export interface AddLayoutSlide extends Task {
    cloneFromFile?: InputFile;

    cloneFromPosition?: number;

}

/**
 * Add master slide task.
 */
export interface AddMasterSlide extends Task {
    /**
     * Source presentation clone from.
     */
    cloneFromFile?: InputFile;

    /**
     * Index of slide to clone.
     */
    cloneFromPosition?: number;

    /**
     * True if cloned master slide is applied to all slides.
     */
    applyToAll?: boolean;

}

export interface AddShape extends Task {
    shape?: ShapeBase;

    shapePath?: string;

}

/**
 * Add slide task.
 */
export interface AddSlide extends Task {
    /**
     * File to clone a slide from.
     */
    cloneFromFile?: InputFile;

    /**
     * Position of the slide to clone.
     */
    cloneFromPosition?: number;

    /**
     * Position at which to insert the slide.
     */
    position?: number;

    /**
     * Alias of layout (href, index or type). If value is null a blank slide is added.
     */
    layoutAlias?: string;

}

/**
 * Represents response for   DTO
 */
export interface ApiInfoResponse extends SaaSposeResponse {
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
 * Represents base64 inline encoded file.
 */
export interface Base64InputFile extends InputFile {
    /**
     * Get or sets base64 data.
     */
    data?: string;

}

export interface BubbleChartDataPoint extends ScatterChartDataPoint {
    bubbleSize?: number;

}

/**
 * A bubble series.
 */
export interface BubbleSeries extends Series {
    /**
     * Gets or sets the values.
     */
    dataPoints?: Array<BubbleChartDataPoint>;

}

/**
 * Slide's color scheme DTO
 */
export interface ColorScheme extends ResourceBase {
    accent1?: string;

    accent2?: string;

    accent3?: string;

    accent4?: string;

    accent5?: string;

    accent6?: string;

    dark1?: string;

    dark2?: string;

    followedHyperlink?: string;

    hyperlink?: string;

    light1?: string;

    light2?: string;

}

/**
 * Represents response for   DTO
 */
export interface ColorSchemeResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    colorScheme?: ColorScheme;

}

/**
 * Represents document DTO.
 */
export interface Document extends ResourceBase {
    /**
     * Link to Document properties.
     */
    documentProperties?: ResourceUriElement;

    /**
     * Link to slides collection.
     */
    slides?: ResourceUriElement;

    /**
     * Link to images collection.
     */
    images?: ResourceUriElement;

    /**
     * Link to layout slides collection.
     */
    layoutSlides?: ResourceUriElement;

    /**
     * Link to master slides collection.
     */
    masterSlides?: ResourceUriElement;

}

/**
 * Slides document properties.
 */
export interface DocumentProperties extends ResourceBase {
    list?: Array<DocumentProperty>;

}

/**
 * Represents response for   DTO
 */
export interface DocumentPropertiesResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    documentProperties?: DocumentProperties;

}

export interface DocumentProperty extends ResourceBase {
    name?: string;

    value?: string;

    builtIn?: boolean;

}

/**
 * Represents response for   DTO
 */
export interface DocumentPropertyResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    documentProperty?: DocumentProperty;

}

/**
 * Represents response for   DTO
 */
export interface DocumentResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    document?: Document;

}

/**
 * Represents font scheme
 */
export interface FontScheme extends ResourceBase {
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
 * Represents response for   DTO
 */
export interface FontSchemeResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    fontScheme?: FontScheme;

}

/**
 * Represents Format Scheme for slide's theme
 */
export interface FormatScheme extends ResourceBase {
    backgroundStyles?: Array<ResourceUri>;

    effectStyles?: Array<ResourceUri>;

    fillStyles?: Array<ResourceUri>;

    lineStyles?: Array<ResourceUri>;

}

/**
 * Represents response for   DTO
 */
export interface FormatSchemeResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    formatScheme?: FormatScheme;

}

/**
 * Represents gradient fill format
 */
export interface GradientFill extends FillFormat {
    /**
     * Gradient style.
     */
    direction?: GradientDirection;

    /**
     * Gradient shape.
     */
    shape?: GradientShapeType;

    /**
     * Gradient stops.
     */
    stops?: Array<GradientFillStop>;

    /**
     * Gradient angle.
     */
    linearAngle?: number;

    /**
     * True if the gradient is scaled.
     */
    isScaled?: boolean;

    /**
     * Gradient flipping mode.
     */
    tileFlip?: GradientTileFlip;

}

/**
 * Provides options that control how a presentation is saved in Html format.
 */
export interface HtmlExportOptions extends ExportOptions {
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
     * Returns or sets a value determining the quality of the JPEG images inside PDF document.
     */
    jpegQuality?: number;

    /**
     * Represents the pictures compression level
     */
    picturesCompression?: PicturesCompression;

    /**
     * A boolean flag indicates if the cropped parts remain as part of the document. If true the cropped  parts will removed, if false they will be serialized in the document (which can possible lead to a  larger file)
     */
    deletePicturesCroppedAreas?: boolean;

    /**
     * Gets or sets the position of the notes on the page.
     */
    notesPosition?: NotesPositions;

    /**
     * Gets or sets the position of the comments on the page.
     */
    commentsPosition?: CommentsPositions;

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

/**
 * Represents image DTO.
 */
export interface Image extends ResourceBase {
    /**
     * Get or sets the width of an image.
     */
    width?: number;

    /**
     * Get or sets the height of an image.
     */
    height?: number;

    /**
     * Get or sets the content type of an image.
     */
    contentType?: string;

}

/**
 * Provides options that control how a presentation is saved in an image format.
 */
export interface ImageExportOptions extends ExportOptions {
    /**
     * Gets or sets the position of the notes on the page.
     */
    notesPosition?: NotesPositions;

    /**
     * Gets or sets the position of the comments on the page.
     */
    commentsPosition?: CommentsPositions;

    /**
     * Gets or sets the width of the comment output area in pixels (Applies only if comments are displayed on the right).
     */
    commentsAreaWidth?: number;

    /**
     * Gets or sets the color of comments area (Applies only if comments are displayed on the right).
     */
    commentsAreaColor?: string;

}

/**
 * List of images.
 */
export interface Images extends ResourceBase {
    list?: Array<Image>;

}

/**
 * Represents response for   DTO
 */
export interface ImagesResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    images?: Images;

}

export interface LayoutSlide extends ResourceBase {
    name?: string;

    type?: LayoutSlideType;

    masterSlide?: ResourceUriElement;

    dependingSlides?: Array<ResourceUriElement>;

}

/**
 * Represents response for   DTO
 */
export interface LayoutSlideListResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    slides?: LayoutSlides;

}

/**
 * Represents response for   DTO
 */
export interface LayoutSlideResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    slide?: LayoutSlide;

}

export interface LayoutSlides extends ResourceBase {
    slideList?: Array<ResourceUriElement>;

}

export interface MasterSlide extends ResourceBase {
    name?: string;

    layoutSlides?: Array<ResourceUriElement>;

    dependingSlides?: Array<ResourceUriElement>;

}

/**
 * Represents response for   DTO.
 */
export interface MasterSlideListResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO.
     */
    slides?: MasterSlides;

}

/**
 * Represents response for   DTO
 */
export interface MasterSlideResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    slide?: MasterSlide;

}

export interface MasterSlides extends ResourceBase {
    slideList?: Array<ResourceUriElement>;

}

/**
 * Merge presentations task.
 */
export interface Merge extends Task {
    /**
     * Information about documents and slides being merging sources.
     */
    presentations?: Array<MergingSource>;

}

/**
 * Represents empty fill
 */
export interface NoFill extends FillFormat {
}

/**
 * Represents notes slide DTO.
 */
export interface NotesSlide extends ResourceBase {
    /**
     * Get or sets text of notes slide.
     */
    text?: string;

    /**
     * Get or sets the  link to list notes slide shapes.
     */
    shapes?: ResourceUriElement;

}

/**
 * Represents response for   DTO.
 */
export interface NotesSlideResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO.
     */
    slide?: NotesSlide;

}

/**
 * One value series.
 */
export interface OneValueSeries extends Series {
    /**
     * Gets or sets the values.
     */
    dataPoints?: Array<OneValueChartDataPoint>;

}

/**
 * Represents paragraph resource
 */
export interface Paragraph extends ResourceBase {
    marginLeft?: number;

    marginRight?: number;

    spaceBefore?: number;

    spaceAfter?: number;

    spaceWithin?: number;

    indent?: number;

    alignment?: TextAlignment;

    fontAlignment?: FontAlignment;

    defaultTabSize?: number;

    depth?: number;

    bulletChar?: string;

    bulletHeight?: number;

    bulletType?: BulletType;

    numberedBulletStartWith?: number;

    numberedBulletStyle?: NumberedBulletStyle;

    hangingPunctuation?: NullableBool;

    eastAsianLineBreak?: NullableBool;

    latinLineBreak?: NullableBool;

    rightToLeft?: NullableBool;

    portionList?: Array<ResourceUriElement>;

}

/**
 * Represents list of Links to Paragraphs resources
 */
export interface ParagraphList extends ResourceBase {
    paragraphLinks?: Array<ResourceUriElement>;

}

/**
 * Represents response for   DTO
 */
export interface ParagraphListResponse extends SaaSposeResponse {
    /**
     * Represents response for   DTO
     */
    paragraphs?: ParagraphList;

}

/**
 * Represents response for   DTO
 */
export interface ParagraphResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    paragraph?: Paragraph;

}

/**
 * Represents input file from filesystem.
 */
export interface PathInputFile extends InputFile {
    /**
     * Get or sets path to file.
     */
    path?: string;

    /**
     * Get or sets name of storage.
     */
    storage?: string;

}

/**
 * Represents fileSystem file with path.
 */
export interface PathOutputFile extends OutputFile {
    /**
     * Get or sets path to file.
     */
    path?: string;

    /**
     * Get or sets name of storage.
     */
    storage?: string;

}

/**
 * Represents Pattern Fill
 */
export interface PatternFill extends FillFormat {
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
    style?: PatternStyle;

}

/**
 * Provides options that control how a presentation is saved in Pdf format.
 */
export interface PdfExportOptions extends ExportOptions {
    /**
     * Specifies compression type to be used for all textual content in the document.
     */
    textCompression?: PdfTextCompression;

    /**
     * Determines if all characters of font should be embedded or only used subset.
     */
    embedFullFonts?: boolean;

    /**
     * Desired conformance level for generated PDF document.
     */
    compliance?: PdfCompliance;

    /**
     * Returns or sets a value determining resolution of images inside PDF document. Property affects on file size, time of export and image quality.The default value is 96.
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
    notesPosition?: NotesPositions;

    /**
     * Gets or sets the position of the comments on the page.
     */
    commentsPosition?: CommentsPositions;

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
     * True to apply specified   to an image.
     */
    applyImageTransparent?: boolean;

}

export interface PictureFill extends FillFormat {
    cropBottom?: number;

    cropLeft?: number;

    cropRight?: number;

    cropTop?: number;

    dpi?: number;

    image?: ResourceUriElement;

    base64Data?: string;

    svgData?: string;

    pictureFillMode?: PictureFillMode;

}

/**
 * Represents placeholder
 */
export interface Placeholder extends ResourceBase {
    index?: number;

    orientation?: PlaceholderOrientation;

    size?: PlaceholderSize;

    type?: PlaceholderType;

    shape?: ResourceUriElement;

}

/**
 * Represents response for   DTO
 */
export interface PlaceholderResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    placeholder?: Placeholder;

}

export interface Placeholders extends ResourceBase {
    placeholderLinks?: Array<ResourceUri>;

}

/**
 * Represents response for   DTO
 */
export interface PlaceholdersResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    placeholders?: Placeholders;

}

/**
 * Represents portion resource
 */
export interface Portion extends ResourceBase {
    text?: string;

    fontBold?: NullableBool;

    fontItalic?: NullableBool;

    fontUnderline?: TextUnderlineType;

    strikethroughType?: TextStrikethroughType;

    textCapType?: TextCapType;

    escapement?: number;

    spacing?: number;

    fontColor?: string;

    highlightColor?: string;

    fontHeight?: number;

    normaliseHeight?: NullableBool;

    proofDisabled?: NullableBool;

    smartTagClean?: boolean;

    kerningMinimalSize?: number;

    kumimoji?: NullableBool;

    languageId?: string;

    alternativeLanguageId?: string;

    isHardUnderlineFill?: NullableBool;

    isHardUnderlineLine?: NullableBool;

    fillFormat?: FillFormat;

    effectFormat?: EffectFormat;

    lineFormat?: LineFormat;

    underlineFillFormat?: FillFormat;

    underlineLineFormat?: LineFormat;

}

/**
 * Represents list of Links to Paragraphs resources
 */
export interface PortionList extends ResourceBase {
    portionLinks?: Array<ResourceUriElement>;

}

/**
 * Represents response for   DTO
 */
export interface PortionListResponse extends SaaSposeResponse {
    /**
     * Represents response for   DTO
     */
    portions?: PortionList;

}

/**
 * Represents response for   DTO
 */
export interface PortionResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    portion?: Portion;

}

export interface PptxExportOptions extends ExportOptions {
    /**
     * The conformance class to which the PresentationML document conforms. Read/write .
     */
    conformance?: Conformance;

}

export interface RemoveShape extends Task {
    shapePath?: string;

}

export interface RemoveSlide extends Task {
    position?: number;

}

export interface ReorderSlide extends Task {
    oldPosition?: number;

    newPosition?: number;

}

/**
 * Replace text task.
 */
export interface ReplaceText extends Task {
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
    ignoreCase?: boolean;

    /**
     * One-based position of the slide to perform the replace in. 0 to make the replace throughout the presentation.
     */
    slidePosition?: number;

}

/**
 * Represents input file from multipart request.
 */
export interface RequestInputFile extends InputFile {
    /**
     * Get or sets index of file from request.
     */
    index?: number;

}

export interface ResetSlide extends Task {
    position?: number;

}

/**
 * Represents output file that will be sent to response.
 */
export interface ResponseOutputFile extends OutputFile {
}

/**
 * Save slide task.
 */
export interface Save extends Task {
    /**
     * Format.
     */
    format?: ExportFormat;

    /**
     * Output file.
     */
    output?: OutputFile;

    /**
     * Save options.
     */
    options?: ExportOptions;

}

/**
 * Save shape task.
 */
export interface SaveShape extends Task {
    /**
     * Format.
     */
    format?: ShapeExportFormat;

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

/**
 * Save slide task.
 */
export interface SaveSlide extends Task {
    /**
     * Output to save the slide to.
     */
    output?: OutputFile;

    /**
     * Save format.
     */
    format?: SlideExportFormat;

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
    position?: number;

}

/**
 * A scatter series
 */
export interface ScatterSeries extends Series {
    /**
     * Gets or sets the values.
     */
    dataPoints?: Array<ScatterChartDataPoint>;

}

export interface ShapeBase extends ResourceBase {
    type?: ShapeType;

    /**
     * Gets or sets the type of the shape.
     */
    shapeType?: CombinedShapeType;

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
     * Gets or sets a value indicating whether this  is hidden.
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
    zOrderPosition?: number;

    /**
     * Gets or sets the link to shapes.
     */
    shapes?: ResourceUriElement;

    /**
     * Gets or sets the fill format.
     */
    fillFormat?: FillFormat;

    /**
     * Gets or sets the effect format.
     */
    effectFormat?: EffectFormat;

    /**
     * Gets or sets the line format.
     */
    lineFormat?: LineFormat;

}

/**
 * Represents response for   DTO
 */
export interface ShapeListResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    shapeList?: Shapes;

}

/**
 * Represents response for   DTO
 */
export interface ShapeResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    shape?: ShapeBase;

}

/**
 * Represents list of Links to Shapes resources
 */
export interface Shapes extends ResourceBase {
    shapesLinks?: Array<ResourceUriElement>;

}

export interface Slide extends ResourceBase {
    /**
     * Gets or sets the width.
     */
    width?: number;

    /**
     * Gets or sets the height.
     */
    height?: number;

    /**
     * Specifies if shapes of the master slide should be shown on the slide. True by default.
     */
    showMasterShapes?: boolean;

    /**
     * Gets or sets the  link to the layout slide.
     */
    layoutSlide?: ResourceUriElement;

    /**
     * Gets or sets the  link to list of top-level shapes.
     */
    shapes?: ResourceUriElement;

    /**
     * Gets or sets the link to theme.
     */
    theme?: ResourceUriElement;

    /**
     * Gets or sets the  link to placeholders.
     */
    placeholders?: ResourceUriElement;

    /**
     * Gets or sets the link to images.
     */
    images?: ResourceUriElement;

    /**
     * Gets or sets the link to comments.
     */
    comments?: ResourceUriElement;

    /**
     * Get or sets the link to slide's background
     */
    background?: ResourceUriElement;

    /**
     * Get or sets the link to notes slide.
     */
    notesSlide?: ResourceUriElement;

}

/**
 * Represents background of slide
 */
export interface SlideBackground extends ResourceBase {
    type?: FillType;

    fillFormat?: FillFormat;

    effectFormat?: EffectFormat;

}

/**
 * Represents response for  DTO
 */
export interface SlideBackgroundResponse extends SaaSposeResponse {
    /**
     * Get or sets slide's background DTO
     */
    background?: SlideBackground;

}

/**
 * Represents comments collection of slide
 */
export interface SlideComments extends ResourceBase {
    list?: Array<SlideComment>;

}

/**
 * Represents response for  DTO
 */
export interface SlideCommentsResponse extends SaaSposeResponse {
    /**
     * Get or sets the  DTO
     */
    slideComments?: SlideComments;

}

/**
 * Represents response for   DTO
 */
export interface SlideListResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    slides?: Slides;

}

/**
 * Represents response for   DTO
 */
export interface SlideResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    slide?: Slide;

}

export interface Slides extends ResourceBase {
    slideList?: Array<ResourceUriElement>;

}

/**
 * Represents solid fill format 
 */
export interface SolidFill extends FillFormat {
    color?: string;

}

export interface SplitDocumentResponse extends SaaSposeResponse {
    splitResult?: SplitDocumentResult;

}

export interface SplitDocumentResult extends ResourceBase {
    slides?: Array<ResourceUri>;

}

export interface Stream extends MarshalByRefObject {
    canRead?: boolean;

    canSeek?: boolean;

    canTimeout?: boolean;

    canWrite?: boolean;

    length?: number;

    position?: number;

    readTimeout?: number;

    writeTimeout?: number;

    null?: Stream;

}

/**
 * Represents response from replace text operation
 */
export interface StringReplaceResponse extends SaaSposeResponse {
    /**
     * Gets or sets the number of matches 
     */
    matches?: number;

}

export interface SvgExportOptions extends ExportOptions {
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
    picturesCompression?: PicturesCompression;

    /**
     * A boolean flag indicates if the cropped parts remain as part of the document. If true the cropped  parts will removed, if false they will be serialized in the document (which can possible lead to a  larger file)
     */
    deletePicturesCroppedAreas?: boolean;

    /**
     * Determines a way of handling externally loaded fonts.
     */
    externalFontsHandling?: ExternalFontsHandling;

}

/**
 * Provides options that control how a presentation is saved in SWF format.
 */
export interface SwfExportOptions extends ExportOptions {
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
     * Gets or sets the full hyperlink address for a logo. Has an effect only if a  is specified. 
     */
    logoLink?: string;

    /**
     * Specifies the quality of JPEG images. Default is 95.
     */
    jpegQuality?: number;

    /**
     * Gets or sets the position of the notes on the page.
     */
    notesPosition?: NotesPositions;

    /**
     * Gets or sets the position of the comments on the page.
     */
    commentsPosition?: CommentsPositions;

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

/**
 * Represents text of resource
 */
export interface TextItems extends ResourceBase {
    /**
     * Gets or sets the text items.
     */
    items?: Array<TextItem>;

}

/**
 * Represents response for   DTO
 */
export interface TextItemsResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    textItems?: TextItems;

}

/**
 * Represents Slide's theme 
 */
export interface Theme extends ResourceBase {
    name?: string;

    colorScheme?: ResourceUriElement;

    fontScheme?: ResourceUriElement;

    formatScheme?: ResourceUriElement;

}

/**
 * Represents response for   DTO
 */
export interface ThemeResponse extends SaaSposeResponse {
    /**
     * Gets or sets the  DTO
     */
    theme?: Theme;

}

export interface TiffExportOptions extends ExportOptions {
    compression?: TiffCompressionType;

    width?: number;

    height?: number;

    dpiX?: number;

    dpiY?: number;

    /**
     * Specifies whether the generated document should include hidden slides or not. Default is false. 
     */
    showHiddenSlides?: boolean;

    /**
     * Specifies the pixel format for the generated images. Read/write .
     */
    pixelFormat?: ImagePixelFormat;

    /**
     * Gets or sets the position of the notes on the page.
     */
    notesPosition?: NotesPositions;

    /**
     * Gets or sets the position of the comments on the page.
     */
    commentsPosition?: CommentsPositions;

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

export interface UpdateBackground extends Task {
    slides?: Array<number>;

    background?: SlideBackground;

}

export interface UpdateShape extends Task {
    shape?: ShapeBase;

    shapePath?: string;

}

export interface XpsExportOptions extends ExportOptions {
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
 * Represents chart resource
 */
export interface Chart extends ShapeBase {
    /**
     * Gets or sets the type of the chart.
     */
    chartType?: ChartType;

    /**
     * Gets or sets the series of chart data values.
     */
    series?: Array<Series>;

    /**
     * Gets or sets the categories for chart data
     */
    categories?: Array<string>;

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

}

/**
 * Represents GeometryShape resource.
 */
export interface GeometryShape extends ShapeBase {
    geometryShapeType?: GeometryShapeType;

}

/**
 * Represents AudioFrame resource.
 */
export interface GraphicalObject extends ShapeBase {
}

/**
 * Represents GroupShape resource.
 */
export interface GroupShape extends ShapeBase {
}

/**
 * Represents OleObjectFrame resource.
 */
export interface OleObjectFrame extends ShapeBase {
}

/**
 * Represents response from string replace operation for Presentation resource 
 */
export interface PresentationStringReplaceResponse extends StringReplaceResponse {
    /**
     * Gets or sets the document.
     */
    document?: Document;

}

/**
 * Represents response from string replace operation for Slide resource
 */
export interface SlideStringReplaceResponse extends StringReplaceResponse {
    /**
     * Gets or sets the slide.
     */
    slide?: Slide;

}

/**
 * Represents SmartArt shape resource.
 */
export interface SmartArt extends ShapeBase {
    /**
     * Layout type.
     */
    layout?: SmartArtLayoutType;

    /**
     * Quick style.
     */
    quickStyle?: SmartArtQuickStyleType;

    /**
     * Color style.
     */
    colorStyle?: SmartArtColorType;

    /**
     * Collection of nodes in SmartArt object.             
     */
    nodes?: Array<SmartArtNode>;

    /**
     * The state of the SmartArt diagram with regard to (left-to-right) LTR or (right-to-left) RTL, if the diagram supports reversal.
     */
    isReversed?: boolean;

}

/**
 * Represents SmartArt resource.
 */
export interface SmartArtShape extends ShapeBase {
}

/**
 * Represents Table shape resource.
 */
export interface Table extends ShapeBase {
    /**
     * Builtin table style.
     */
    style?: TableStylePreset;

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

/**
 * Represents AudioFrame resource.
 */
export interface AudioFrame extends GeometryShape {
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
    playMode?: AudioPlayModePreset;

    /**
     * Returns or sets the audio volume.
     */
    volume?: AudioVolumeMode;

    /**
     * Audio data encoded in base64.
     */
    base64Data?: string;

}

/**
 * Represents Connector resource.
 */
export interface Connector extends GeometryShape {
    startShapeConnectedTo?: ResourceUri;

    startShapeConnectedToIndex?: number;

    endShapeConnectedTo?: ResourceUri;

    endShapeConnectedToIndex?: number;

}

/**
 * Represents PictureFrame resource.
 */
export interface PictureFrame extends GeometryShape {
    pictureFillFormat?: PictureFill;

}

/**
 * Represents AutoShape resource.
 */
export interface Shape extends GeometryShape {
    /**
     * Gets or sets the text.
     */
    text?: string;

    /**
     * Get or sets list to paragraphs list
     */
    paragraphs?: ResourceUriElement;

}

/**
 * Represents VideoFrame resource.
 */
export interface VideoFrame extends GeometryShape {
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
    playMode?: VideoPlayModePreset;

    /**
     * Determines whether a video is automatically rewinded to start as soon as the movie has finished playing
     */
    rewindVideo?: boolean;

    /**
     * Returns or sets the audio volume.
     */
    volume?: AudioVolumeMode;

    /**
     * Video data encoded in base64.
     */
    base64Data?: string;

}
