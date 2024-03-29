﻿/*
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

describe("Split tests", () => {
    it("split", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.split(TestUtils.fileName, null, null, null, null, null, null, null, TestUtils.password, TestUtils.folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    return api.split(TestUtils.fileName, null, null, null, null, 2, 3, null, TestUtils.password, TestUtils.folderName).then((result2) => {
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
    it("split online", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.splitOnline(fs.createReadStream(TestUtils.localFilePath), model.SlideExportFormat.Png, null, null, null, null, TestUtils.password).then((result1) => {
                assert.equal(200, result1.response.statusCode);
                return api.splitOnline(fs.createReadStream(TestUtils.localFilePath), model.SlideExportFormat.Png, null, null, 2, 3, TestUtils.password).then((result2) => {
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
    it("split and save online", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.splitAndSaveOnline(fs.createReadStream(TestUtils.localFilePath), model.SlideExportFormat.Png, null, null, null, null, null, TestUtils.password).then((result1) => {
                assert.equal(200, result1.response.statusCode);
                return api.splitAndSaveOnline(fs.createReadStream(TestUtils.localFilePath), model.SlideExportFormat.Png, null, null, null, 2, 3, TestUtils.password).then((result2) => {
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
    it("split with options", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const options = new model.PdfExportOptions();
                options.jpegQuality = 50;
                return api.split(TestUtils.fileName, options, null, null, null, null, null, null, TestUtils.password, TestUtils.folderName).then((result) => {
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
