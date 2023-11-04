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

describe("Image tests", () => {
    it("images get", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getPresentationImages(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((presentationResult) => {
                    assert.equal(200, presentationResult.response.statusCode);
                    return api.getSlideImages(TestUtils.fileName, 1, TestUtils.password, TestUtils.folderName).then((slideResult) => {
                        assert.equal(200, slideResult.response.statusCode);
                        assert((slideResult.body as model.Images).list.length < (presentationResult.body as model.Images).list.length);
                    });
                });
            });
        });
    });
    it("images download storage", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.downloadImagesDefaultFormat(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((defaultResult) => {
                    assert.equal(200, defaultResult.response.statusCode);
                    return api.downloadImages(TestUtils.fileName, model.ImageExportFormat.Png, TestUtils.password, TestUtils.folderName).then((pngResult) => {
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
    it("images download request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.downloadImagesDefaultFormatOnline(fs.createReadStream(TestUtils.localFilePath), TestUtils.password).then((defaultResult) => {
                assert.equal(200, defaultResult.response.statusCode);
                return api.downloadImagesOnline(fs.createReadStream(TestUtils.localFilePath), model.ImageExportFormat.Png, TestUtils.password).then((pngResult) => {
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
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.downloadImageDefaultFormat(TestUtils.fileName, 1, TestUtils.password, TestUtils.folderName).then((defaultResult) => {
                    assert.equal(200, defaultResult.response.statusCode);
                    return api.downloadImage(TestUtils.fileName, 1, model.ImageExportFormat.Png, TestUtils.password, TestUtils.folderName).then((pngResult) => {
                        assert.equal(200, pngResult.response.statusCode);
                        assert(defaultResult.body.length != pngResult.body.length);
                    });
                });
            });
        });
    });
    it("download request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.downloadImageDefaultFormatOnline(fs.createReadStream(TestUtils.localFilePath), 1, TestUtils.password).then((defaultResult) => {
                assert.equal(200, defaultResult.response.statusCode);
                return api.downloadImageOnline(fs.createReadStream(TestUtils.localFilePath), 1, model.ImageExportFormat.Png, TestUtils.password).then((pngResult) => {
                    assert.equal(200, pngResult.response.statusCode);
                    assert(defaultResult.body.length != pngResult.body.length);
                });
            });
        });
    });
    it("replace image",()=>{
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath)
            var image = fs.createReadStream("TestData/watermark.png");
            var response = await  api.replaceImage(TestUtils.fileName, 1, image, TestUtils.password, TestUtils.folderName);
            assert.equal(200, response.response.statusCode);
        })
    });
    it("replace image request",()=>{
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            var file = fs.createReadStream(TestUtils.localFilePath);
            var image = fs.createReadStream("TestData/watermark.png");
            var response = await api.replaceImageOnline(file, 1, image, TestUtils.password);
            assert.equal(200, response.response.statusCode);
            assert(response.body.length !== 0);
            return null;
        })
    });
});
