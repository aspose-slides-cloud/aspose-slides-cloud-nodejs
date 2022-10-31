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

var assert = require('assert');
var fs = require('fs');
import * as model from "../../sdk/model";
import {TestInitializer} from "../testInitializer";

describe("Convert tests", () => {
    it("post from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            return api.convert(fs.createReadStream("TestData/test.pptx"), model.ExportFormat.Pdf, "password").then((result) => {
                assert.equal(200, result.response.statusCode);
                return api.convert(fs.createReadStream("TestData/test.pptx"), model.ExportFormat.Pdf, "password", null, null, [2, 4]).then((resultSlides) => {
                    assert.equal(200, resultSlides.response.statusCode);
                    assert(result.body.length > resultSlides.body.length);
                });
            });
        });
    });

    it("put from request", () => {
        return TestInitializer.runTest(() => {
            const outPath = "TestData/test.pdf";
            const api = TestInitializer.getApi();
            return api.convertAndSave(fs.createReadStream("TestData/test.pptx"), model.ExportFormat.Pdf, outPath, "password").then((putResult) => {
                assert.equal(200, putResult.response.statusCode);
                return api.objectExists(outPath).then((existsResult) => {
                    assert.equal(200, existsResult.response.statusCode);
                    assert((existsResult.body as model.ObjectExist).exists);
                });
            });
        });
    });

    it("post from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pdf";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadPresentation(fileName, model.ExportFormat.Html5, null, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("put from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const outPath = "TestData/test.pdf";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.savePresentation(fileName, model.ExportFormat.Pdf, outPath, null, "password", folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    return api.objectExists(outPath).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });

    it("with options from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            return api.convert(fs.createReadStream("TestData/test.pptx"), model.ExportFormat.Pdf, "password").then((result1) => {
                assert.equal(200, result1.response.statusCode);
                const options = new model.PdfExportOptions();
                options.drawSlidesFrame = true;
                return api.convert(fs.createReadStream("TestData/test.pptx"), model.ExportFormat.Pdf, "password", null, null, null, options).then((result2) => {
                    assert.equal(200, result2.response.statusCode);
                    assert.notEqual(result1.body.length, result2.body.length);
                });
            });
        });
    });

    it("with options from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadPresentation(fileName, model.ExportFormat.Png, null, "password", folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    const options = new model.ImageExportOptions();
                    options.width = 480;
                    options.height = 360;
                    return api.downloadPresentation(fileName, model.ExportFormat.Png, options, "password", folderName).then((result2) => {
                        assert.equal(200, result2.response.statusCode);
                        assert(result1.body.length > result2.body.length);
                    });
                });
            });
        });
    });

    it("slide post from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            return api.downloadSlideOnline(fs.createReadStream("TestData/test.pptx"), 1, model.SlideExportFormat.Pdf, null, null, "password").then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("slide put from request", () => {
        return TestInitializer.runTest(() => {
            const outPath = "TestData/test.pdf";
            const api = TestInitializer.getApi();
            const data = fs.createReadStream("TestData/test.pptx");
            return api.saveSlideOnline(data, 1, model.SlideExportFormat.Pdf, outPath, null, null, "password").then((putResult) => {
                assert.equal(200, putResult.response.statusCode);
                return api.objectExists(outPath).then((existsResult) => {
                    assert.equal(200, existsResult.response.statusCode);
                    assert((existsResult.body as model.ObjectExist).exists);
                });
            });
        });
    });

    it("slide post from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadSlide(fileName, 1, model.SlideExportFormat.Pdf, null, null, null, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("slide put from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const outPath = "TestData/test.pdf";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.saveSlide(fileName, 1, model.SlideExportFormat.Pdf, outPath, null, null, null, "password", folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    return api.objectExists(outPath).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });

    it("slide with options from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            return api.downloadSlideOnline(fs.createReadStream("TestData/test.pptx"), 1, model.SlideExportFormat.Pdf, null, null, "password").then((result1) => {
                assert.equal(200, result1.response.statusCode);
                const options = new model.PdfExportOptions();
                options.drawSlidesFrame = true;
                return api.downloadSlideOnline(fs.createReadStream("TestData/test.pptx"), 1, model.SlideExportFormat.Pdf, null, null, "password", null, null, options).then((result2) => {
                    assert.equal(200, result2.response.statusCode);
                    assert.notEqual(result1.body.length, result2.body.length);
                });
            });
        });
    });

    it("slide with options from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadSlide(fileName, 1, model.SlideExportFormat.Pdf, null, null, null, "password", folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    const options = new model.PdfExportOptions();
                    options.drawSlidesFrame = true;
                    return api.downloadSlide(fileName, 1, model.SlideExportFormat.Pdf, options, null, null, "password", folderName).then((result2) => {
                        assert.equal(200, result2.response.statusCode);
                        assert.notEqual(result1.body.length, result2.body.length);
                    });
                });
            });
        });
    });

    it("shape post from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            return api.downloadShapeOnline(fs.createReadStream("TestData/test.pptx"), 1, 3, model.ShapeExportFormat.Png, null, null, null, "password").then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("shape put from request", () => {
        return TestInitializer.runTest(() => {
            const outPath = "TestData/test.png";
            const api = TestInitializer.getApi();
            const data = fs.createReadStream("TestData/test.pptx");
            return api.saveShapeOnline(data, 1, 1, model.ShapeExportFormat.Png, outPath, null, null, null, "password").then((putResult) => {
                assert.equal(200, putResult.response.statusCode);
                return api.objectExists(outPath).then((existsResult) => {
                    assert.equal(200, existsResult.response.statusCode);
                    assert((existsResult.body as model.ObjectExist).exists);
                });
            });
        });
    });

    it("shape post from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadShape(fileName, 1, 1, model.ShapeExportFormat.Png, null, null, null, null, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("sub-shape post from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadShape(fileName, 1,  4, model.ShapeExportFormat.Png, null,
                 null, null, null, "password", folderName, null, null, 
                 "1").then((result) => {assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("shape put from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const outPath = "TestData/test.png";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.saveShape(fileName, 1, 1, model.ShapeExportFormat.Png, outPath, 
                null, null, null, null, "password", folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    return api.objectExists(outPath).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });

    it("sub-shape put from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const outPath = "TestData/test.png";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.saveShape(fileName, 1, 4, model.ShapeExportFormat.Png, outPath, 
                null, null, null, null, "password", folderName, null, 
                null, "1").then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    return api.objectExists(outPath).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });

    it("convert with font fallback rules", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const startUnicodeIndex = 0x0B80;
            const endUnicodeIndex = 0x0BFF;

            const rule1 = new model.FontFallbackRule();
            rule1.rangeStartIndex = startUnicodeIndex;
            rule1.rangeEndIndex = endUnicodeIndex;
            rule1.fallbackFontList = ["Vijaya"];

            const rule2 = new model.FontFallbackRule();
            rule2.rangeStartIndex = startUnicodeIndex;
            rule2.rangeEndIndex = endUnicodeIndex;
            rule2.fallbackFontList = ["Segoe UI Emoji, Segoe UI Symbol", "Arial"];

            const imageOptions = new model.ImageExportOptions();
            imageOptions.fontFallbackRules = [rule1, rule2];

            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);
            const response = await api.downloadPresentation(fileName, model.ExportFormat.Pdf, imageOptions, "password", folderName);
            assert.equal(200, response.response.statusCode);
        });
    });
});