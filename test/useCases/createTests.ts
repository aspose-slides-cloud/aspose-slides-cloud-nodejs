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

describe("Create tests", () => {
    it("empty", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.deleteFile(TestUtils.filePath).then(() => {
                return api.createPresentation(TestUtils.fileName, null, null, null, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                });
            });
        });
    });

    it("from request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.deleteFile(TestUtils.filePath).then(() => {
                return api.createPresentation(TestUtils.fileName, fs.createReadStream(TestUtils.localFilePath), TestUtils.password, null, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                });
            });
        });
    });

    it("from storage", () => {
        return TestUtils.runTest(() => {
            const newFileName = "test2.pptx";
            const api = TestUtils.getSlidesApi();
            return api.deleteFile(TestUtils.folderName + "/" + newFileName).then(() => {
                return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                    return api.createPresentationFromSource(newFileName, TestUtils.filePath, TestUtils.password, null, null, TestUtils.folderName).then((result) => {
                        assert.equal(201, result.response.statusCode);
                    });
                });
            });
        });
    });

    it("from template", () => {
        return TestUtils.runTest(() => {
            const templateFileName = "TemplateCV.pptx";
            const api = TestUtils.getSlidesApi();
            return api.deleteFile(TestUtils.filePath).then(() => {
                return api.copyFile(TestUtils.tempFolderName + "/" + templateFileName, TestUtils.folderName + "/" + templateFileName).then(() => {
                    const templatePath = TestUtils.folderName + "/" + templateFileName;
                    const data = "<staff><person><name>John Doe</name><address><line1>10 Downing Street</line1><line2>London</line2></address><phone>+457 123456</phone><bio>Hi, I'm John and this is my CV</bio><skills><skill><title>C#</title><level>Excellent</level></skill><skill><title>C++</title><level>Good</level></skill><skill><title>Java</title><level>Average</level></skill></skills></person></staff>";
                    return api.createPresentationFromTemplate(TestUtils.fileName, templatePath, data, null, null, null, null, TestUtils.folderName).then((result) => {
                        assert.equal(201, result.response.statusCode);
                    });
                });
            });
        });
    });

    it("from HTML", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.deleteFile(TestUtils.filePath).then(() => {
                return api.importFromHtml(TestUtils.fileName, "<html><body>New Content</body></html>", null, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                });
            });
        });
    });

    it("append from HTML", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getSlides(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((r1) => {
                    const slideCount = (r1.body as model.Slides).slideList.length;
                    return api.importFromHtml(TestUtils.fileName, "<html><body>New Content</body></html>", TestUtils.password, TestUtils.folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        return api.getSlides(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((r2) => {
                            assert.equal(slideCount + 1, (r2.body as model.Slides).slideList.length);
                        });
                    });
                });
            });
        });
    });

    it("from PDF", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.deleteFile(TestUtils.filePath).then(() => {
                return api.importFromPdf(TestUtils.fileName, fs.createReadStream("TestData/test.pdf"), null, null, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                });
            });
        });
    });

    it("append from PDF", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getSlides(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((r1) => {
                    const slideCount = (r1.body as model.Slides).slideList.length;
                    const options = new model.PdfImportOptions();
                    options.detectTables = false;
                    return api.importFromPdf(TestUtils.fileName, fs.createReadStream("TestData/test.pdf"), options, TestUtils.password, TestUtils.folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        return api.getSlides(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((r2) => {
                            assert.equal(slideCount + 4, (r2.body as model.Slides).slideList.length);
                        });
                    });
                });
            });
        });
    });
});