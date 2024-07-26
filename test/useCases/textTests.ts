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

describe("Text tests", () => {
    it("get", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getPresentationTextItems(TestUtils.fileName, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    return api.getPresentationTextItems(TestUtils.fileName, true, TestUtils.password, TestUtils.folderName).then((resultWithEmpty) => {
                        assert.equal(200, resultWithEmpty.response.statusCode);
                        return api.getSlideTextItems(TestUtils.fileName, slideIndex, null, TestUtils.password, TestUtils.folderName).then((slideResult) => {
                            assert.equal(200, slideResult.response.statusCode);
                            return api.getSlideTextItems(TestUtils.fileName, slideIndex, true, TestUtils.password, TestUtils.folderName).then((slideResultWithEmpty) => {
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
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const oldValue = "text";
            const newValue = "new_text";
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.replacePresentationText(TestUtils.fileName, oldValue, newValue, null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                        return api.replacePresentationText(TestUtils.fileName, oldValue, newValue, true, null, TestUtils.password, TestUtils.folderName).then((resultWithEmpty) => {
                            assert.equal(200, resultWithEmpty.response.statusCode);
                            return api.replacePresentationText(TestUtils.fileName, oldValue, newValue, true, true, TestUtils.password, TestUtils.folderName).then((resultWholeWords) => {
                                assert.equal(200, resultWithEmpty.response.statusCode);
                                return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                                    return api.replaceSlideText(TestUtils.fileName, slideIndex, oldValue, newValue, null, TestUtils.password, TestUtils.folderName).then((slideResult) => {
                                        assert.equal(200, slideResult.response.statusCode);
                                        return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                                            return api.replaceSlideText(TestUtils.fileName, slideIndex, oldValue, newValue, true, TestUtils.password, TestUtils.folderName).then((slideResultWithEmpty) => {
                                                assert.equal(200, slideResultWithEmpty.response.statusCode);
                                                assert((result.body as model.DocumentReplaceResult).matches < (resultWithEmpty.body as model.DocumentReplaceResult).matches);
                                                assert((resultWholeWords.body as model.DocumentReplaceResult).matches < (resultWithEmpty.body as model.DocumentReplaceResult).matches);
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
    });
    it("replace request", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const oldValue = "text";
            const newValue = "new_text";
            const api = TestUtils.getSlidesApi();
            return api.replacePresentationTextOnline(fs.createReadStream(TestUtils.localFilePath), oldValue, newValue, null, null, TestUtils.password).then((result) => {
                assert.equal(200, result.response.statusCode);
                return api.replacePresentationTextOnline(fs.createReadStream(TestUtils.localFilePath), oldValue, newValue, true, null, TestUtils.password).then((resultWithEmpty) => {
                    assert.equal(200, resultWithEmpty.response.statusCode);
                    return api.replaceSlideTextOnline(fs.createReadStream(TestUtils.localFilePath), slideIndex, oldValue, newValue, null, TestUtils.password).then((slideResult) => {
                        assert.equal(200, slideResult.response.statusCode);
                        return api.replaceSlideTextOnline(fs.createReadStream(TestUtils.localFilePath), slideIndex, oldValue, newValue, true, TestUtils.password).then((slideResultWithEmpty) => {
                            assert.equal(200, slideResultWithEmpty.response.statusCode);
                        });
                    });
                });
            });
        });
    });

    it("replace text formatting", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const oldText = "banana";
            const newText = "orange";
            const color = "#FFFFA500";
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const portionIndex = 1;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const portion = new model.Portion();
                portion.text = oldText;
                const portionFormat = new model.PortionFormat();
                portionFormat.fontColor = color;

                return api.createPortion(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, portion, portionIndex, TestUtils.password, TestUtils.folderName).then((createResult) => {
                    assert.equal(201, createResult.response.statusCode);
                    return api.replaceTextFormatting(TestUtils.fileName, oldText, newText, portionFormat, false, TestUtils.password, TestUtils.folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        return api.getPortion(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, portionIndex, TestUtils.password, TestUtils.folderName).then((getResult) => {
                            assert.equal(200, getResult.response.statusCode);
                            assert.equal(newText, (getResult.body as model.Portion).text);
                            assert.equal(color, (getResult.body as model.Portion).fontColor);
                        });
                    });
                });
            });
        });
    });

    it("replace text formatting online", () => {
        return TestUtils.runTest(() => {
            const portionFormat = new model.PortionFormat();
            portionFormat.fontColor = "#FFFFA500";
            const api = TestUtils.getSlidesApi();
            return api.replaceTextFormattingOnline(fs.createReadStream(TestUtils.localFilePath), "banana", "orange", portionFormat, false, TestUtils.password).then((result) => {
                assert.equal(200, result.response.statusCode);
                assert(result.body.length > 0);
            });
        });
    });

    it("highlight shape text", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const textToHighlight = "highlight";
            const highlightColor = "#FFF5FF8A";

            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.highlightShapeText(TestUtils.fileName, slideIndex, shapeIndex, textToHighlight,
                highlightColor, null, false, TestUtils.password, TestUtils.folderName);

            assert.equal(result.response.statusCode, 200)
            const paragraph = await api.getParagraph(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName);
            assert.equal(paragraph.body.portionList[1].text, textToHighlight);
            assert.equal(paragraph.body.portionList[1].highlightColor, highlightColor);
        });
    });

    it("highlight shape regex", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const textToHighlight = "highlight";
            const highlightRegex = "h.ghl[abci]ght";
            const highlightColor = "#FFF5FF8A";

            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.highlightShapeRegex(TestUtils.fileName, slideIndex, shapeIndex, highlightRegex,
                highlightColor, null, false, TestUtils.password, TestUtils.folderName);

            assert.equal(result.response.statusCode, 200)
            const paragraph = await api.getParagraph(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName);
            assert.equal(paragraph.body.portionList[1].text, textToHighlight);
            assert.equal(paragraph.body.portionList[1].highlightColor, highlightColor);
        });
    });
});
