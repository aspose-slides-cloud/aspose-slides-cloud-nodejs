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
                    return api.getSlideImages(TestUtils.fileName, 1, null, null, TestUtils.password, TestUtils.folderName).then((slideResult) => {
                        assert.equal(200, slideResult.response.statusCode);
                        assert((slideResult.body as model.Images).list.length < (presentationResult.body as model.Images).list.length);
                        return api.getSlideImages(TestUtils.fileName, 2, 2, null, TestUtils.password, TestUtils.folderName).then((shapeResult) => {
                            assert.equal(200, shapeResult.response.statusCode);
                            assert.equal(1, (shapeResult.body as model.Images).list.length);
                            return api.getSlideImages(TestUtils.fileName, 2, null, "title", TestUtils.password, TestUtils.folderName).then((altResult) => {
                                assert.equal(200, altResult.response.statusCode);
                                assert.equal(0, (altResult.body as model.Images).list.length);
                            });
                        });
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
    it("download quality", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.downloadImage(TestUtils.fileName, 1, model.ImageExportFormat.Jpeg, TestUtils.password, TestUtils.folderName, null, 100).then((goodResult) => {
                    assert.equal(200, goodResult.response.statusCode);
                    return api.downloadImage(TestUtils.fileName, 1, model.ImageExportFormat.Jpeg, TestUtils.password, TestUtils.folderName, null, 50).then((badResult) => {
                        assert.equal(200, badResult.response.statusCode);
                        assert(goodResult.body.length > badResult.body.length);
                    });
                });
            });
        });
    });
    it("download quality useless", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.downloadImage(TestUtils.fileName, 1, model.ImageExportFormat.Png, TestUtils.password, TestUtils.folderName, null, 100).then((goodResult) => {
                    assert.equal(200, goodResult.response.statusCode);
                    return api.downloadImage(TestUtils.fileName, 1, model.ImageExportFormat.Png, TestUtils.password, TestUtils.folderName, null, 50).then((badResult) => {
                        assert.equal(200, badResult.response.statusCode);
                        //Quality property only has effect on Jpeg images so these two must be identical
                        assert.equal(goodResult.body.length, badResult.body.length);
                    });
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
    it("compress image",()=>{
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath)
            var response = await  api.compressImage(TestUtils.fileName, 2, 2, 150, false, TestUtils.password, TestUtils.folderName);
            assert.equal(200, response.response.statusCode);
        })
    });
    it("delete picture cropped areas",()=>{
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath)
            var response = await  api.compressImage(TestUtils.fileName, 2, 2, null, true, TestUtils.password, TestUtils.folderName);
            assert.equal(200, response.response.statusCode);
        })
    });
    it("delete picture cropped areas wrong shape type",()=>{
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath)
            return api.compressImage(TestUtils.fileName, 2, 3, null, true, TestUtils.password, TestUtils.folderName)
                .then(() => assert.fail("compressImage works only with picture frames"))
                .catch((err) => {
                    assert.equal(400, err.code);
                });
        })
    });
});
