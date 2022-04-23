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

describe("Text tests", () => {
    it("get", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getPresentationTextItems(fileName, null, password, folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    return api.getPresentationTextItems(fileName, true, password, folderName).then((resultWithEmpty) => {
                        assert.equal(200, resultWithEmpty.response.statusCode);
                        return api.getSlideTextItems(fileName, slideIndex, null, password, folderName).then((slideResult) => {
                            assert.equal(200, slideResult.response.statusCode);
                            return api.getSlideTextItems(fileName, slideIndex, true, password, folderName).then((slideResultWithEmpty) => {
                                assert.equal(200, slideResultWithEmpty.response.statusCode);
                                assert((result.body as model.TextItems).items.length < (resultWithEmpty.body as model.TextItems).items.length);
                                assert((slideResult.body as model.TextItems).items.length < (result.body as model.TextItems).items.length);
                                assert((slideResult.body as model.TextItems).items.length < (slideResultWithEmpty.body as model.TextItems).items.length);
                            });
                        });
                    });
                });
            });
        });
    });
    it("replace storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const password = "password";
            const oldValue = "text";
            const newValue = "new_text";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.replacePresentationText(fileName, oldValue, newValue, null, password, folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                        return api.replacePresentationText(fileName, oldValue, newValue, true, password, folderName).then((resultWithEmpty) => {
                            assert.equal(200, resultWithEmpty.response.statusCode);
                            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                                return api.replaceSlideText(fileName, slideIndex, oldValue, newValue, null, password, folderName).then((slideResult) => {
                                    assert.equal(200, slideResult.response.statusCode);
                                    return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                                        return api.replaceSlideText(fileName, slideIndex, oldValue, newValue, true, password, folderName).then((slideResultWithEmpty) => {
                                            assert.equal(200, slideResultWithEmpty.response.statusCode);
                                            assert((result.body as model.DocumentReplaceResult).matches < (resultWithEmpty.body as model.DocumentReplaceResult).matches);
                                            assert((slideResult.body as model.SlideReplaceResult).matches < (result.body as model.DocumentReplaceResult).matches);
                                            assert((slideResult.body as model.SlideReplaceResult).matches < (slideResultWithEmpty.body as model.SlideReplaceResult).matches);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    it("replace request", () => {
        return TestInitializer.runTest(() => {
            const slideIndex = 1;
            const password = "password";
            const oldValue = "text";
            const newValue = "new_text";
            const api = TestInitializer.getApi();
            return api.replacePresentationTextOnline(fs.createReadStream("TestData/test.pptx"), oldValue, newValue, null, password).then((result) => {
                assert.equal(200, result.response.statusCode);
                return api.replacePresentationTextOnline(fs.createReadStream("TestData/test.pptx"), oldValue, newValue, true, password).then((resultWithEmpty) => {
                    assert.equal(200, resultWithEmpty.response.statusCode);
                    return api.replaceSlideTextOnline(fs.createReadStream("TestData/test.pptx"), slideIndex, oldValue, newValue, null, password).then((slideResult) => {
                        assert.equal(200, slideResult.response.statusCode);
                        return api.replaceSlideTextOnline(fs.createReadStream("TestData/test.pptx"), slideIndex, oldValue, newValue, true, password).then((slideResultWithEmpty) => {
                            assert.equal(200, slideResultWithEmpty.response.statusCode);
                        });
                    });
                });
            });
        });
    });

    it("highlight shape text", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const textToHighlight = "highlight";
            const highlightColor = "#FFF5FF8A";

            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);
            const result = await api.highlightShapeText(fileName, slideIndex, shapeIndex, textToHighlight,
                highlightColor, null, false, "password", folderName);

            assert.equal(result.response.statusCode, 200)
            const paragraph = await api.getParagraph(fileName, slideIndex, shapeIndex, paragraphIndex, "password", folderName);
            assert.equal(paragraph.body.portionList[1].text, textToHighlight);
            assert.equal(paragraph.body.portionList[1].highlightColor, highlightColor);
        });
    });

    it("highlight shape text regex", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const textToHighlight = "highlight";
            const highlightRegex = "h.ghl[abci]ght";
            const highlightColor = "#FFF5FF8A";

            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);
            const result = await api.highlightShapeRegex(fileName, slideIndex, shapeIndex, highlightRegex,
                highlightColor, null, false, "password", folderName);

            assert.equal(result.response.statusCode, 200)
            const paragraph = await api.getParagraph(fileName, slideIndex, shapeIndex, paragraphIndex, "password", folderName);
            assert.equal(paragraph.body.portionList[1].text, textToHighlight);
            assert.equal(paragraph.body.portionList[1].highlightColor, highlightColor);
        });
    });
});
