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
import {TestUtils} from "../testUtils";

describe("Convert tests", () => {
    it("request to request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.convert(fs.createReadStream(TestUtils.localFilePath), model.ExportFormat.Pdf, TestUtils.password).then((result) => {
                assert.equal(200, result.response.statusCode);
                return api.convert(fs.createReadStream(TestUtils.localFilePath), model.ExportFormat.Pdf, TestUtils.password, null, null, [2, 4]).then((resultSlides) => {
                    assert.equal(200, resultSlides.response.statusCode);
                    assert(result.body.length > resultSlides.body.length);
                });
            });
        });
    });

    it("request to storage", () => {
        return TestUtils.runTest(() => {
            const outPath = TestUtils.testDataPath + "/test.pdf";
            const api = TestUtils.getSlidesApi();
            return api.convertAndSave(fs.createReadStream(TestUtils.localFilePath), model.ExportFormat.Pdf, outPath, TestUtils.password).then((putResult) => {
                assert.equal(200, putResult.response.statusCode);
                return api.objectExists(outPath).then((existsResult) => {
                    assert.equal(200, existsResult.response.statusCode);
                    assert((existsResult.body as model.ObjectExist).exists);
                });
            });
        });
    });

    it("storage to request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.downloadPresentation(TestUtils.fileName, model.ExportFormat.Html5, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("storage to storage", () => {
        return TestUtils.runTest(() => {
            const outPath = TestUtils.testDataPath + "/test.pdf";
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.savePresentation(TestUtils.fileName, model.ExportFormat.Pdf, outPath, null, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    return api.objectExists(outPath).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });

    it("request with options", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.convert(fs.createReadStream(TestUtils.localFilePath), model.ExportFormat.Pdf, TestUtils.password).then((result1) => {
                assert.equal(200, result1.response.statusCode);
                const options = new model.PdfExportOptions();
                options.drawSlidesFrame = true;
                return api.convert(fs.createReadStream(TestUtils.localFilePath), model.ExportFormat.Pdf, TestUtils.password, null, null, null, options).then((result2) => {
                    assert.equal(200, result2.response.statusCode);
                    assert.notEqual(result1.body.length, result2.body.length);
                });
            });
        });
    });

    it("storage with options", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.downloadPresentation(TestUtils.fileName, model.ExportFormat.Png, null, TestUtils.password, TestUtils.folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    const options = new model.ImageExportOptions();
                    options.width = 480;
                    options.height = 360;
                    return api.downloadPresentation(TestUtils.fileName, model.ExportFormat.Png, options, TestUtils.password, TestUtils.folderName).then((result2) => {
                        assert.equal(200, result2.response.statusCode);
                        assert(result1.body.length > result2.body.length);
                    });
                });
            });
        });
    });

    it("slide request to request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.downloadSlideOnline(fs.createReadStream(TestUtils.localFilePath), 1, model.SlideExportFormat.Pdf, null, null, TestUtils.password).then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("slide request to storage", () => {
        return TestUtils.runTest(() => {
            const outPath = TestUtils.testDataPath + "/test.pdf";
            const api = TestUtils.getSlidesApi();
            const data = fs.createReadStream(TestUtils.localFilePath);
            return api.saveSlideOnline(data, 1, model.SlideExportFormat.Pdf, outPath, null, null, TestUtils.password).then((putResult) => {
                assert.equal(200, putResult.response.statusCode);
                return api.objectExists(outPath).then((existsResult) => {
                    assert.equal(200, existsResult.response.statusCode);
                    assert((existsResult.body as model.ObjectExist).exists);
                });
            });
        });
    });

    it("slide storage to request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.downloadSlide(TestUtils.fileName, 1, model.SlideExportFormat.Pdf, null, null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("slide storage to storage", () => {
        return TestUtils.runTest(() => {
            const outPath = TestUtils.testDataPath + "/test.pdf";
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.saveSlide(TestUtils.fileName, 1, model.SlideExportFormat.Pdf, outPath, null, null, null, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    return api.objectExists(outPath).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });

    it("slide request with options", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.downloadSlideOnline(fs.createReadStream(TestUtils.localFilePath), 1, model.SlideExportFormat.Pdf, null, null, TestUtils.password).then((result1) => {
                assert.equal(200, result1.response.statusCode);
                const options = new model.PdfExportOptions();
                options.drawSlidesFrame = true;
                return api.downloadSlideOnline(fs.createReadStream(TestUtils.localFilePath), 1, model.SlideExportFormat.Pdf, null, null, TestUtils.password, null, null, options).then((result2) => {
                    assert.equal(200, result2.response.statusCode);
                    assert.notEqual(result1.body.length, result2.body.length);
                });
            });
        });
    });

    it("slide storage with options", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.downloadSlide(TestUtils.fileName, 1, model.SlideExportFormat.Pdf, null, null, null, TestUtils.password, TestUtils.folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    const options = new model.PdfExportOptions();
                    options.drawSlidesFrame = true;
                    return api.downloadSlide(TestUtils.fileName, 1, model.SlideExportFormat.Pdf, options, null, null, TestUtils.password, TestUtils.folderName).then((result2) => {
                        assert.equal(200, result2.response.statusCode);
                        assert.notEqual(result1.body.length, result2.body.length);
                    });
                });
            });
        });
    });

    it("shape request to request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.downloadShapeOnline(fs.createReadStream(TestUtils.localFilePath), 1, 3, model.ShapeExportFormat.Png, null, null, null, TestUtils.password).then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("shape request to storage", () => {
        return TestUtils.runTest(() => {
            const outPath = TestUtils.testDataPath + "/test.png";
            const api = TestUtils.getSlidesApi();
            const data = fs.createReadStream(TestUtils.localFilePath);
            return api.saveShapeOnline(data, 1, 1, model.ShapeExportFormat.Png, outPath, null, null, null, TestUtils.password).then((putResult) => {
                assert.equal(200, putResult.response.statusCode);
                return api.objectExists(outPath).then((existsResult) => {
                    assert.equal(200, existsResult.response.statusCode);
                    assert((existsResult.body as model.ObjectExist).exists);
                });
            });
        });
    });

    it("shape storage to request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.downloadShape(TestUtils.fileName, 1, 1, model.ShapeExportFormat.Png, null, null, null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("sub-shape storage to request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.downloadShape(TestUtils.fileName, 1,  4, model.ShapeExportFormat.Png, null,
                 null, null, null, TestUtils.password, TestUtils.folderName, null, null, 
                 "1").then((result) => {assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("shape storage to storage", () => {
        return TestUtils.runTest(() => {
            const outPath = TestUtils.testDataPath + "/test.png";
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.saveShape(TestUtils.fileName, 1, 1, model.ShapeExportFormat.Png, outPath, 
                null, null, null, null, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    return api.objectExists(outPath).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });

    it("sub-shape storage to storage", () => {
        return TestUtils.runTest(() => {
            const outPath = TestUtils.testDataPath + "/test.png";
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.saveShape(TestUtils.fileName, 1, 4, model.ShapeExportFormat.Png, outPath, 
                null, null, null, null, TestUtils.password, TestUtils.folderName, null, 
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

    it("with font fallback rules", () => {
        return TestUtils.runTest(async () => {
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

            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const response = await api.downloadPresentation(TestUtils.fileName, model.ExportFormat.Pdf, imageOptions, TestUtils.password, TestUtils.folderName);
            assert.equal(200, response.response.statusCode);
        });
    });
});