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

import {TestUtils} from "../testUtils";
import {ExportFormat, FontSubstRule, ImageExportOptions} from "../../sdk/model";

var assert = require('assert');
var fs = require('fs');

describe("Font tests", () => {
    it("get available fonts", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const result = await api.getAvailableFonts();
            assert(result.body.list.length > 1);
            assert(!result.body.list[0].isCustom);
        });
    });

    it("get fonts", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getFonts(TestUtils.fileName, TestUtils.password, TestUtils.folderName);
            assert.equal(3, result.body.list.length);
        });
    });

    it("get fonts online", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const stream = fs.createReadStream(TestUtils.localFilePath);
            const result = await api.getFontsOnline(stream, TestUtils.password);
            assert.equal(3, result.body.list.length);
        });
    });

    it("set embedded font", () => {
        return TestUtils.runTest(async () => {
            const fontName = "Calibri";
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.setEmbeddedFont(TestUtils.fileName, fontName, false, TestUtils.password, TestUtils.folderName);
            assert.equal(3, result.body.list.length);
            assert.equal(true, result.body.list[2].isEmbedded);
            assert.equal(fontName, result.body.list[2].fontName);
        });
    });

    it("set embedded font online", () => {
        return TestUtils.runTest(async () => {
            const fontName = "Calibri";
            const api = TestUtils.getSlidesApi();
            const stream = fs.createReadStream(TestUtils.localFilePath);

            const result = await api.setEmbeddedFontOnline(stream, fontName, false, TestUtils.password);
            assert.equal(200, result.response.statusCode);
        });
    });

    it("set embedded font from request", () => {
        return TestUtils.runTest(async () => {
            const fontFileName = "calibri.ttf";
            const fontName = "Calibri";
            
            const stream = fs.createReadStream("TestData/" + fontFileName);
            
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.setEmbeddedFontFromRequest(stream, TestUtils.fileName, false, TestUtils.password, TestUtils.folderName);
            assert.equal(3, result.body.list.length);
            assert.equal(true, result.body.list[2].isEmbedded);
            assert.equal(fontName, result.body.list[2].fontName);
        });
    });

    it("set embedded font from request online", () => {
        return TestUtils.runTest(async () => {
            const fontFileName = "calibri.ttf";

            const fileStream = fs.createReadStream(TestUtils.localFilePath);
            const fontStream = fs.createReadStream("TestData/" + fontFileName);
            
            const api = TestUtils.getSlidesApi();
            const result = await api.setEmbeddedFontFromRequestOnline(fileStream, fontStream, false, TestUtils.password);
            assert.equal(200, result.response.statusCode);
        });
    });

    it("compress embedded fonts", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.compressEmbeddedFonts(TestUtils.fileName, TestUtils.password, TestUtils.folderName);
            assert.equal(200, result.response.statusCode);
        });
    });

    it("compress embedded fonts online", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const stream = fs.createReadStream(TestUtils.localFilePath);

            const result = await api.compressEmbeddedFontsOnline(stream, TestUtils.password);
            assert.equal(200, result.response.statusCode);
        });
    });

    it("delete embedded font", () => {
        return TestUtils.runTest(async () => {
            const fontName = "Calibri Light";
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deleteEmbeddedFont(TestUtils.fileName, fontName, TestUtils.password, TestUtils.folderName);
            assert.equal(200, result.response.statusCode);
        });
    });

    it("delete embedded font online", () => {
        return TestUtils.runTest(async () => {
            const fontName = "Calibri Light";
            const api = TestUtils.getSlidesApi();
            const stream = fs.createReadStream(TestUtils.localFilePath);

            const result = await api.deleteEmbeddedFontOnline(stream, fontName, TestUtils.password);
            assert.equal(200, result.response.statusCode);
        });
    });

    it("replace font", () => {
        return TestUtils.runTest(async () => {
            const sourceFontName = "Calibri";
            const targetFontName = "Times New Roman";
            
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.replaceFont(TestUtils.fileName, sourceFontName, targetFontName, true, TestUtils.password, TestUtils.folderName);
            assert.equal(true, result.body.list[2].isEmbedded);
            assert.equal(targetFontName, result.body.list[2].fontName);
        });
    });

    it("replace font online", () => {
        return TestUtils.runTest(async () => {
            const sourceFontName = "Calibri";
            const targetFontName = "Times New Roman";
            
            const api = TestUtils.getSlidesApi();
            const stream = fs.createReadStream(TestUtils.localFilePath);

            const result = await api.replaceFontOnline(stream, sourceFontName, targetFontName, true, TestUtils.password);
            assert.equal(200, result.response.statusCode);
        });
    });

    it("font substitution", () => {
        return TestUtils.runTest(async () => {
            const targetFontName = "Times New Roman";

            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            
            const fontRule1 = new FontSubstRule();
            fontRule1.sourceFont = "Arial";
            fontRule1.targetFont = targetFontName;
            fontRule1.notFoundOnly = false;

            const fontRule2 = new FontSubstRule();
            fontRule2.sourceFont = "Arial";
            fontRule2.targetFont = targetFontName;
            fontRule2.notFoundOnly = false;
            
            const exportOptions = new ImageExportOptions();
            exportOptions.fontSubstRules = [fontRule1, fontRule2];

            const result = await api.downloadPresentation(TestUtils.fileName, ExportFormat.Png, exportOptions, TestUtils.password, TestUtils.folderName);
            assert.equal(200, result.response.statusCode);
        });
    });
});