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

import {TestInitializer} from "../testInitializer";

var assert = require('assert');
var fs = require('fs');

describe("Font tests", () => {
    it("get fonts", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.getFonts(fileName, "password", folderName);
            assert.equal(3, result.body.list.length);
        });
    });

    it("get fonts online", () => {
        return TestInitializer.runTest(async () => {
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            const stream = fs.createReadStream("TestData/" + fileName)
            const result = await api.getFontsOnline(stream, "password");
            assert.equal(3, result.body.list.length);
        });
    });

    it("set embedded font", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const fontName = "Calibri";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.setEmbeddedFont(fileName, fontName, false, "password", folderName);
            assert.equal(3, result.body.list.length);
            assert.equal(true, result.body.list[2].isEmbedded);
            assert.equal(fontName, result.body.list[2].fontName);
        });
    });

    it("set embedded font online", () => {
        return TestInitializer.runTest(async () => {
            const fileName = "test.pptx";
            const fontName = "Calibri";
            const api = TestInitializer.getApi();
            const stream = fs.createReadStream("TestData/" + fileName)

            const result = await api.setEmbeddedFontOnline(stream, fontName, false, "password");
            assert.equal(200, result.response.statusCode);
        });
    });

    it("delete embedded font", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const fontName = "Arial";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.deleteEmbeddedFont(fileName, fontName,  "password", folderName);
            assert.equal(200, result.response.statusCode);
        });
    });

    it("delete embedded font online", () => {
        return TestInitializer.runTest(async () => {
            const fileName = "test.pptx";
            const fontName = "Arial";
            const api = TestInitializer.getApi();
            const stream = fs.createReadStream("TestData/" + fileName)

            const result = await api.deleteEmbeddedFontOnline(stream, fontName, "password");
            assert.equal(200, result.response.statusCode);
        });
    });
});