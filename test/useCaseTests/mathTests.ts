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
import {TestInitializer} from "../testInitializer";

describe("Math tests", () => {
    it("get", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getPortion(fileName, 2, 3, 1, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert((result.body as model.Portion).mathParagraph);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList);
                    assert.equal(1, (result.body as model.Portion).mathParagraph.mathBlockList.length);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList);
                    assert.equal(3, (result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList.length);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList[2] as model.FractionElement);
                });
            });
        });
    });

    it("get null", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getPortion(fileName, 2, 1, 1, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert(!(result.body as model.Portion).mathParagraph);
                });
            });
        });
    });

    it("create", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Portion();
                const mathParagraph = new model.MathParagraph();
                const blockElement = new model.BlockElement();
                const functionElement = new model.FunctionElement();
                const limitElement = new model.LimitElement();
                const textElement1 = new model.TextElement();
                textElement1.value = "lim";
                limitElement.base = textElement1;

                const textElement2 = new model.TextElement();
                textElement2.value = "x->0";
                limitElement.limit = textElement2;
                functionElement.name = limitElement;

                const fractionElement = new model.FractionElement();
                const sinusElement = new model.FunctionElement();
                const textElement3 = new model.TextElement();
                textElement3.value = "sin";
                sinusElement.name = textElement3;

                const textElement4 = new model.TextElement();
                textElement4.value = "x";
                sinusElement.base = textElement4;
                fractionElement.numerator = sinusElement;

                const textElement5 = new model.TextElement();
                textElement5.value = "x";
                fractionElement.denominator = textElement5;
                functionElement.base = fractionElement;

                blockElement.mathElementList = [functionElement];
                mathParagraph.mathBlockList = [blockElement];
                dto.mathParagraph = mathParagraph;
                return api.createPortion(fileName, 1, 1, 1, dto, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert((result.body as model.Portion).mathParagraph);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList);
                    assert.equal(1, (result.body as model.Portion).mathParagraph.mathBlockList.length);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList);
                    assert.equal(1, (result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList.length);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList[0] as model.FunctionElement);
                });
            });
        });
    });

    it("update", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Portion();
                const mathParagraph = new model.MathParagraph();
                const blockElement = new model.BlockElement();
                const functionElement = new model.FunctionElement();
                const limitElement = new model.LimitElement();
                const textElement1 = new model.TextElement();
                textElement1.value = "lim";
                limitElement.base = textElement1;

                const textElement2 = new model.TextElement();
                textElement2.value = "x->0";
                limitElement.limit = textElement2;
                functionElement.name = limitElement;

                const fractionElement = new model.FractionElement();
                const sinusElement = new model.FunctionElement();
                const textElement3 = new model.TextElement();
                textElement3.value = "sin";
                sinusElement.name = textElement3;

                const textElement4 = new model.TextElement();
                textElement4.value = "x";
                sinusElement.base = textElement4;
                fractionElement.numerator = sinusElement;

                const textElement5 = new model.TextElement();
                textElement5.value = "x";
                fractionElement.denominator = textElement5;
                functionElement.base = fractionElement;

                blockElement.mathElementList = [functionElement];
                mathParagraph.mathBlockList = [blockElement];
                dto.mathParagraph = mathParagraph;
                return api.updatePortion(fileName, 2, 3, 1, 1, dto, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert((result.body as model.Portion).mathParagraph);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList);
                    assert.equal(1, (result.body as model.Portion).mathParagraph.mathBlockList.length);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList);
                    assert.equal(1, (result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList.length);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList[0] as model.FunctionElement);
                });
            });
        });
    });

    it("download", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadPortionAsMathMl(fileName, 2, 3, 1, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert(result.body.length);
                });
            });
        });
    });

    it("download null", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadPortionAsMathMl(fileName, 2, 1, 1, 1, "password", folderName)
                    .then(() => assert.fail("Must have failed"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("save", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const outPath = folderName + "/mathml.xml";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.savePortionAsMathMl(fileName, 2, 3, 1, 1, outPath, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    return api.objectExists(outPath).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });
});