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

describe("Image tests", () => {
    it("get", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getPresentationImages(fileName, password, folderName).then((presentationResult) => {
                    assert.equal(200, presentationResult.response.statusCode);
                    return api.getSlideImages(fileName, 1, password, folderName).then((slideResult) => {
                        assert.equal(200, slideResult.response.statusCode);
                        assert((slideResult.body as model.Images).list.length < (presentationResult.body as model.Images).list.length);
                    });
                });
            });
        });
    });
    it("download all storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadImagesDefaultFormat(fileName, password, folderName).then((defaultResult) => {
                    assert.equal(200, defaultResult.response.statusCode);
                    return api.downloadImages(fileName, model.ImageExportFormat.Png, password, folderName).then((pngResult) => {
                        assert.equal(200, pngResult.response.statusCode);
                        assert(defaultResult.body.length != pngResult.body.length);
                        var AdmZip = require('adm-zip');
                        var defaultZip = new AdmZip(defaultResult.body);
                        var pngZip = new AdmZip(pngResult.body);
                        assert.equal(defaultZip.getEntries().length, pngZip.getEntries().length);
                    });
                });
            });
        });
    });
    it("download all request", () => {
        return TestInitializer.runTest(() => {
            const password = "password";
            const api = TestInitializer.getApi();
            return api.downloadImagesDefaultFormatOnline(fs.createReadStream("TestData/test.pptx"), password).then((defaultResult) => {
                assert.equal(200, defaultResult.response.statusCode);
                return api.downloadImagesOnline(fs.createReadStream("TestData/test.pptx"), model.ImageExportFormat.Png, password).then((pngResult) => {
                    assert.equal(200, pngResult.response.statusCode);
                    assert(defaultResult.body.length != pngResult.body.length);
                    var AdmZip = require('adm-zip');
                    var defaultZip = new AdmZip(defaultResult.body);
                    var pngZip = new AdmZip(pngResult.body);
                    assert.equal(defaultZip.getEntries().length, pngZip.getEntries().length);
                });
            });
        });
    });
    it("download storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadImageDefaultFormat(fileName, 1, password, folderName).then((defaultResult) => {
                    assert.equal(200, defaultResult.response.statusCode);
                    return api.downloadImage(fileName, 1, model.ImageExportFormat.Png, password, folderName).then((pngResult) => {
                        assert.equal(200, pngResult.response.statusCode);
                        assert(defaultResult.body.length != pngResult.body.length);
                    });
                });
            });
        });
    });
    it("download request", () => {
        return TestInitializer.runTest(() => {
            const password = "password";
            const api = TestInitializer.getApi();
            return api.downloadImageDefaultFormatOnline(fs.createReadStream("TestData/test.pptx"), 1, password).then((defaultResult) => {
                assert.equal(200, defaultResult.response.statusCode);
                return api.downloadImageOnline(fs.createReadStream("TestData/test.pptx"), 1, model.ImageExportFormat.Png, password).then((pngResult) => {
                    assert.equal(200, pngResult.response.statusCode);
                    assert(defaultResult.body.length != pngResult.body.length);
                });
            });
        });
    });
});
