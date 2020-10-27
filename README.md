# Aspose.Slides Cloud SDK for NodeJS [![npm](https://badge.fury.io/js/asposeslidescloud.svg)](https://www.npmjs.com/package/asposeslidescloud)
This repository contains Aspose.Slides Cloud SDK for NodeJS source code. This SDK allows you to work with Aspose.Slides Cloud REST APIs in your NodeJS applications.

## Key Features
* Conversion between various document-related formats (20+ formats supported), including PDF<->PowerPoint conversion
* Download slides and shapes in various formats, including PDF and SVG
* Merge and split PowerPoint presentations
* Access PowerPoint presentation metadata and statistics
* Find and replace
* Full read & write access to Document Object Model, including slides, shapes, paragraphs, portions and many others
* Support of Aspose.Storage API

### New Features & Recent API Changes
#### 20.10
* Removed shapeType property from BaseShape class; replaced geometryShapeType with shapeType property for GeometryShape.
* Removed redundant ResourceUriElement class. All properties of ResourceUriElement type are changed to ResourceUri type.

#### 20.9
* New getSections, putSections, putSection, postSection, postSectionMove, deleteSection, deleteSections methods to add, update and delete presentation sections.
* New postSlidesHeaderFooter, postSlideHeaderFooter, getSlideHeaderFooter, postNotesSlideHeaderFooter, getNotesSlideHeaderFooter methods to manage header/footer settings for slides.
* Replaces categories for parentCategories & level properties in ChartCategory class to properly support Sunburst & Treeview charts.

## Licensing
All Aspose.Slides Cloud SDKs are licensed under MIT License.

## How to use the SDK?
The complete source code is available in this repository folder. You can either directly use it in your project via source code or get [NPM package](https://www.npmjs.com/package/asposeslidescloud) (recommended).

## Prerequisites
To use Aspose Slides Cloud NodeJS SDK you need to register an account with [Aspose Cloud](https://www.aspose.cloud/) and lookup/create App Key and SID at [Cloud Dashboard](https://dashboard.aspose.cloud/#/apps). There is free quota available. For more details, see [Aspose Cloud Pricing](https://purchase.aspose.cloud/pricing).

### Installation

From the command line:

	npm install asposeslidescloud --save

### Sample usage

The example code below converts a PowerPoint document to PDF format using asposeslidescloud library:
```js
const api = require("asposeslidescloud");
const fs = require('fs');

const slidesApi = new api.SlidesApi("MyAppSid", "MyAppKey");
const postSlidesConvertRequest = new api.GetSlidesApiInfoRequest();
postSlidesConvertRequest.format = 'pdf';
postSlidesConvertRequest.document = fs.createReadStream("MyPresentation.pptx");
slidesApi.postSlidesConvert(postSlidesConvertRequest).then((response) => {
    fs.writeFile("MyPresentation.pdf", response.body, (err) => {
        if (err) throw err;
    });
});
```
You can check more [Examples](Examples) of using the SDK.

## Contact Us

Your feedback is very important to us. Please feel free to contact us using our [Support Forums](https://forum.aspose.cloud/c/slides).

## Resources
 
[Website](https://www.aspose.cloud/)  
[Product Home](https://products.aspose.cloud/slides/family)  
[API Reference](https://apireference.aspose.cloud/slides/)  
[Documentation](https://docs.aspose.cloud/slides/)  
[Blog](https://blog.aspose.cloud/category/slides/)  
 
## Other languages

We generate our SDKs in different languages so you may check if yours is available in our [list](https://github.com/aspose-slides-cloud).
 
If you don't find your language in the list, feel free to request it from us, or use raw REST API requests as you can find it [here](https://products.aspose.cloud/slides/curl).
