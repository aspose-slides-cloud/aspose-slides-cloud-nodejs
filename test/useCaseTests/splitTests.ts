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

describe("Split tests", () => {
    it("storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.split(fileName, null, null, null, null, null, null, null, password, folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    return api.split(fileName, null, null, null, null, 2, 3, null, password, folderName).then((result2) => {
                        assert.equal(200, result2.response.statusCode);
                        assert.equal(2, (result2.body as model.SplitDocumentResult).slides.length);
                        assert((result1.body as model.SplitDocumentResult).slides.length > (result2.body as model.SplitDocumentResult).slides.length);
                        const url = (result1.body as model.SplitDocumentResult).slides[0].href;
                        const path = url.substring(url.indexOf("/storage/file/") + "/storage/file/".length);
                        return api.objectExists(path).then((existsResult) => {
                            assert.equal(200, existsResult.response.statusCode);
                            assert((existsResult.body as model.ObjectExist).exists);
                        });
                    });
                });
            });
        });
    });
    it("request", () => {
        return TestInitializer.runTest(() => {
            const password = "password";
            const api = TestInitializer.getApi();
            return api.splitOnline(fs.createReadStream("TestData/test.pptx"), model.SlideExportFormat.Png, null, null, null, null, password).then((result1) => {
                assert.equal(200, result1.response.statusCode);
                return api.splitOnline(fs.createReadStream("TestData/test.pptx"), model.SlideExportFormat.Png, null, null, 2, 3, password).then((result2) => {
                    assert.equal(200, result2.response.statusCode);
                    var AdmZip = require('adm-zip');
                    var zip1 = new AdmZip(result1.body);
                    var zip2 = new AdmZip(result2.body);
                    assert.equal(2, zip2.getEntries().length);
                    assert(zip1.getEntries().length > zip2.getEntries().length);
                });
            });
        });
    });
    it("request to storage", () => {
        return TestInitializer.runTest(() => {
            const password = "password";
            const api = TestInitializer.getApi();
            return api.splitAndSaveOnline(fs.createReadStream("TestData/test.pptx"), model.SlideExportFormat.Png, null, null, null, null, null, password).then((result1) => {
                assert.equal(200, result1.response.statusCode);
                return api.splitAndSaveOnline(fs.createReadStream("TestData/test.pptx"), model.SlideExportFormat.Png, null, null, null, 2, 3, password).then((result2) => {
                    assert.equal(200, result2.response.statusCode);
                    assert.equal(2, (result2.body as model.SplitDocumentResult).slides.length);
                    assert((result1.body as model.SplitDocumentResult).slides.length > (result2.body as model.SplitDocumentResult).slides.length);
                    const url = (result1.body as model.SplitDocumentResult).slides[0].href;
                    const path = url.substring(url.indexOf("/storage/file/") + "/storage/file/".length);
                    return api.objectExists(path).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });
    it("with options", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const options = new model.PdfExportOptions();
                options.jpegQuality = 50;
                return api.split(fileName, options, null, null, null, null, null, null, password, folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    const url = (result.body as model.SplitDocumentResult).slides[0].href;
                    const path = url.substring(url.indexOf("/storage/file/") + "/storage/file/".length);
                    return api.objectExists(path).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });
});
