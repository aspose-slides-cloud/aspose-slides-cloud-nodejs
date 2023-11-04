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
import * as model from "../../sdk/model";
import {TestUtils} from "../testUtils";

describe("HeaderFooter tests", () => {
    it("slides", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.HeaderFooter();
                dto.isFooterVisible = true;
                dto.footerText = "footer";
                dto.isDateTimeVisible = false;
                return api.setPresentationHeaderFooter(TestUtils.fileName, dto, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    return api.getSlideHeaderFooter(TestUtils.fileName, 1, TestUtils.password, TestUtils.folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        assert.equal(true, (result.body as model.HeaderFooter).isFooterVisible);
                        assert.equal(false, (result.body as model.HeaderFooter).isDateTimeVisible);
                    });
                });
            });
        });
    });

    it("slide", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.HeaderFooter();
                dto.isFooterVisible = true;
                dto.footerText = "footer";
                dto.isDateTimeVisible = false;
                return api.setSlideHeaderFooter(TestUtils.fileName, slideIndex, dto, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(true, (putResult.body as model.HeaderFooter).isFooterVisible);
                    assert.equal(false, (putResult.body as model.HeaderFooter).isDateTimeVisible);
                    return api.getSlideHeaderFooter(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        assert.equal(true, (result.body as model.HeaderFooter).isFooterVisible);
                        assert.equal(false, (result.body as model.HeaderFooter).isDateTimeVisible);
                    });
                });
            });
        });
    });

    it("notes slide", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.NotesSlideHeaderFooter();
                dto.isHeaderVisible = true;
                dto.footerText = "footer";
                dto.isDateTimeVisible = false;
                return api.setNotesSlideHeaderFooter(TestUtils.fileName, slideIndex, dto, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(true, (putResult.body as model.NotesSlideHeaderFooter).isHeaderVisible);
                    assert.equal(false, (putResult.body as model.NotesSlideHeaderFooter).isDateTimeVisible);
                    return api.getNotesSlideHeaderFooter(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        assert.equal(true, (result.body as model.NotesSlideHeaderFooter).isHeaderVisible);
                        assert.equal(false, (result.body as model.NotesSlideHeaderFooter).isDateTimeVisible);
                    });
                });
            });
        });
    });
});