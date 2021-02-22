![](https://img.shields.io/badge/api-v3.0-lightgrey) ![npm](https://img.shields.io/npm/v/asposeslidescloud) ![npm bundle size](https://img.shields.io/bundlephobia/min/asposeslidescloud) ![node-current](https://img.shields.io/node/v/asposeslidescloud) ![npm type definitions](https://img.shields.io/npm/types/asposeslidescloud) [![GitHub license](https://img.shields.io/github/license/aspose-slides-cloud/aspose-slides-cloud-nodejs)](https://github.com/aspose-slides-cloud/aspose-slides-cloud-nodejs/blob/master/LICENSE)

# Nodejs REST API to Process Presentation in Cloud
This repository contains Aspose.Slides Cloud SDK for Nodejs source code. This SDK allows you to [process & manipulate PPT, PPTX, ODP, OTP](https://products.aspose.cloud/slides/nodejs) using Aspose.slides Cloud REST APIs in your Nodejs applications.

## Presentation Processing Features

- Fetch presentation images in any of the supported file formats.
- Copy the layout side or clone the master slide from the source presentation.
- Process slides shapes, slides notes, placeholders, colors & font theme info.
- Programmatically create a presentation from HTML & export it to various formats.
- Merge multiple presentations or split the single presentation into multiple ones.
- Extract and replace text from a specific slide or an entire presentation.

## Read & Write Presentation Formats

**Microsoft PowerPoint:** PPT, PPTX, PPS, PPSX, PPTM, PPSM, POTX, POTM
**OpenOffice:** ODP, OTP, FODP

## Save Presentation As

**Fixed Layout:** PDF, PDF/A, XPS
**Images:** JPEG, PNG, BMP, TIFF, SVG
**Web:** HTML
**Other:** SWF (export whole presentations)

## Enhancements in Version 21.2
* New **Map** value of **ChartTypeEnum** type to manage map charts.
* New **SketchFromat** property of **LineFormat** class.

## Enhancements in Version 21.1
* New **PostSlidesDocumentFromPdf** method allows creating presentations or adding slides to it using a PDF file as a source.
* New **GetSlidesSlideProperties**, **GetSlidesProtectionProperties**, **PutSlidesSlideProperties**, **PutSlidesProtectionProperties** allow to get/set presentaion properties like slide size, orientaion, read-only etc.
* **PutSlidesDocumentFromHtml** method is deprecated and will be deleted in 21.4 release. Use **PostSlidesDocumentFromHtml** method instead.
* **PutSlidesSlideSize** method is deprecated and will be deleted in 21.4 release. Use **PutSlidesProtectionProperties** method instead.

## Enhancements in Version 20.12
- Updated the SDK to run with cloud image.
- **HttpRequestTimeout** property is added to SDK configuration. It allows specifying a custom timeout (in seconds) for **HTTP** requests made by the SDK.

## Enhancements in Version 20.10
* Removed ****ShapeType** property from BaseShape class; replaced **GeometryShapeType** with **ShapeType** property for **GeometryShape**.
* Removed redundant **ResourceUriElement** class. All properties of **ResourceUriElement** type are changed to ResourceUri type.

## Enhancements in Version 20.9
* New **GetSections, PutSections, PutSection, PostSection, PostSectionMove, DeleteSection, DeleteSections** methods to add, update and delete presentation sections.
* New **PostslidesHeaderFooter, PostSlideHeaderFooter, GetSlideHeaderFooter, PostNotesSlideHeaderFooter, GetNotesSlideHeaderFooter** methods to manage header/footer settings for slides.
* Replaced Categories for **ParentCategories** & Level properties in **ChartCategory** class to properly support Sunburst & Treeview charts.


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

const slidesApi = new api.SlidesApi("MyClientId", "MyClientSecret");
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

## Aspose.Slides Cloud SDKs in Popular Languages

| .NET | Java | PHP | Python | Ruby | Node.js | Android | Swift|Perl|Go|
|---|---|---|---|---|---|---|--|--|--|
| [GitHub](https://github.com/aspose-slides-cloud/aspose-slides-cloud-dotnet) | [GitHub](https://github.com/aspose-slides-cloud/aspose-slides-cloud-java) | [GitHub](https://github.com/aspose-slides-cloud/aspose-slides-cloud-php) | [GitHub](https://github.com/aspose-slides-cloud/aspose-slides-cloud-python) | [GitHub](https://github.com/aspose-slides-cloud/aspose-slides-cloud-ruby)  | [GitHub](https://github.com/aspose-slides-cloud/aspose-slides-cloud-nodejs) | [GitHub](https://github.com/aspose-slides-cloud/aspose-slides-cloud-android) | [GitHub](https://github.com/aspose-slides-cloud/aspose-slides-cloud-swift)|[GitHub](https://github.com/aspose-slides-cloud/aspose-slides-cloud-perl) |[GitHub](https://github.com/aspose-slides-cloud/aspose-slides-cloud-go) |
| [NuGet](https://www.nuget.org/packages/Aspose.slides-Cloud/) | [Maven](https://repository.aspose.cloud/webapp/#/artifacts/browse/tree/General/repo/com/aspose/aspose-slides-cloud) | [Composer](https://packagist.org/packages/aspose/slides-sdk-php) | [PIP](https://pypi.org/project/asposeslidescloud/) | [GEM](https://rubygems.org/gems/aspose_slides_cloud)  | [NPM](https://www.npmjs.com/package/asposeslidescloud) | [Maven](https://repository.aspose.cloud/webapp/#/artifacts/browse/tree/General/repo/com/aspose/aspose-slides-cloud) | [Cocoapods](https://cocoapods.org/pods/AsposeslidesCloud)|[Meta Cpan](https://metacpan.org/release/AsposeSlidesCloud-SlidesApi) | [Go.Dev](https://pkg.go.dev/github.com/aspose-slides-cloud/aspose-slides-cloud-go/) |

[Product Page](https://products.aspose.cloud/slides/nodejs) | [Documentation](https://docs.aspose.cloud/display/slidescloud/Home) | [API Reference](https://apireference.aspose.cloud/slides/) | [Code Samples](https://github.com/aspose-slides-cloud/aspose-slides-cloud-nodejs) | [Blog](https://blog.aspose.cloud/category/slides/) | [Free Support](https://forum.aspose.cloud/c/slides) | [Free Trial](https://dashboard.aspose.cloud/#/apps)
