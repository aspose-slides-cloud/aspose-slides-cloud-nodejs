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
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestUtils.getApi();
            return api.deleteFile(folderName + "/" + fileName).then(() => {
                return api.createPresentation(fileName, null, null, null, folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                });
            });
        });
    });

    it("from request", () => {
        return TestUtils.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestUtils.getApi();
            return api.deleteFile(folderName + "/" + fileName).then(() => {
                return api.createPresentation(fileName, fs.createReadStream("TestData/test.pptx"), "password", null, folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                });
            });
        });
    });

    it("from storage", () => {
        return TestUtils.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const newFileName = "test2.pptx";
            const api = TestUtils.getApi();
            return api.deleteFile(folderName + "/" + newFileName).then(() => {
                return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                    const sourcePath = folderName + "/" + fileName;
                    return api.createPresentationFromSource(newFileName, sourcePath, "password", null, null, folderName).then((result) => {
                        assert.equal(201, result.response.statusCode);
                    });
                });
            });
        });
    });

    it("from template", () => {
        return TestUtils.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const templateFileName = "TemplateCV.pptx";
            const api = TestUtils.getApi();
            return api.deleteFile(folderName + "/" + fileName).then(() => {
                return api.copyFile("TempTests/" + templateFileName, folderName + "/" + templateFileName).then(() => {
                    const templatePath = folderName + "/" + templateFileName;
                    const data = "<staff><person><name>John Doe</name><address><line1>10 Downing Street</line1><line2>London</line2></address><phone>+457 123456</phone><bio>Hi, I'm John and this is my CV</bio><skills><skill><title>C#</title><level>Excellent</level></skill><skill><title>C++</title><level>Good</level></skill><skill><title>Java</title><level>Average</level></skill></skills></person></staff>";
                    return api.createPresentationFromTemplate(fileName, templatePath, data, null, null, null, null, folderName).then((result) => {
                        assert.equal(201, result.response.statusCode);
                    });
                });
            });
        });
    });

    it("from HTML", () => {
        return TestUtils.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestUtils.getApi();
            return api.deleteFile(folderName + "/" + fileName).then(() => {
                return api.importFromHtml(fileName, "<html><body>New Content</body></html>", null, folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                });
            });
        });
    });

    it("append from HTML", () => {
        return TestUtils.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestUtils.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSlides(fileName, password, folderName).then((r1) => {
                    const slideCount = (r1.body as model.Slides).slideList.length;
                    return api.importFromHtml(fileName, "<html><body>New Content</body></html>", password, folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        return api.getSlides(fileName, password, folderName).then((r2) => {
                            assert.equal(slideCount + 1, (r2.body as model.Slides).slideList.length);
                        });
                    });
                });
            });
        });
    });

    it("from PDF", () => {
        return TestUtils.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestUtils.getApi();
            return api.deleteFile(folderName + "/" + fileName).then(() => {
                return api.importFromPdf(fileName, fs.createReadStream("TestData/test.pdf"), null, folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                });
            });
        });
    });

    it("append from PDF", () => {
        return TestUtils.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestUtils.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSlides(fileName, password, folderName).then((r1) => {
                    const slideCount = (r1.body as model.Slides).slideList.length;
                    return api.importFromPdf(fileName, fs.createReadStream("TestData/test.pdf"), password, folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        return api.getSlides(fileName, password, folderName).then((r2) => {
                            assert.equal(slideCount + 4, (r2.body as model.Slides).slideList.length);
                        });
                    });
                });
            });
        });
    });
});