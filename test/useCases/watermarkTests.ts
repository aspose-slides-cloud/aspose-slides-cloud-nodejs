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

describe("Watermark tests", () => {
    it("text storage", () => {
        return TestUtils.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const password = "password";
            const watermarkText = "watermarkText";
            const api = TestUtils.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShapes(fileName, slideIndex, password, folderName).then((get1Result) => {
                    assert.equal(200, get1Result.response.statusCode);
                    const shapeCount = (get1Result.body as model.Shapes).shapesLinks.length + 1;
                    return api.createWatermark(fileName, null, null, watermarkText, null, null, password, folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        return api.getShapes(fileName, slideIndex, password, folderName).then((get2Result) => {
                            assert.equal(200, get2Result.response.statusCode);
                            assert.equal(shapeCount, (get2Result.body as model.Shapes).shapesLinks.length);
                            return api.getShape(fileName, slideIndex, shapeCount, password, folderName).then((getShape2Result) => {
                                assert.equal(200, getShape2Result.response.statusCode);
                                const shape = getShape2Result.body as model.Shape;
                                assert.equal("watermark", shape.name);
                                assert.equal(watermarkText, shape.text);
                                return api.deleteWatermark(fileName, null, password, folderName).then((deleteResult) => {
                                    assert.equal(200, deleteResult.response.statusCode);
                                    return api.getShapes(fileName, slideIndex, password, folderName).then((get3Result) => {
                                        assert.equal(200, get3Result.response.statusCode);
                                        assert.equal(shapeCount - 1, (get3Result.body as model.Shapes).shapesLinks.length);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("text dto storage", () => {
        return TestUtils.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const password = "password";
            const watermarkText = "watermarkText";
            const api = TestUtils.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShapes(fileName, slideIndex, password, folderName).then((get1Result) => {
                    assert.equal(200, get1Result.response.statusCode);
                    const shapeCount = (get1Result.body as model.Shapes).shapesLinks.length + 1;
                    let watermark = new model.Shape();
                    watermark.text = watermarkText;
                    return api.createWatermark(fileName, watermark, null, null, null, null, password, folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        return api.getShapes(fileName, slideIndex, password, folderName).then((get2Result) => {
                            assert.equal(200, get2Result.response.statusCode);
                            assert.equal(shapeCount, (get2Result.body as model.Shapes).shapesLinks.length);
                            return api.getShape(fileName, slideIndex, shapeCount, password, folderName).then((getShape2Result) => {
                                assert.equal(200, getShape2Result.response.statusCode);
                                const shape = getShape2Result.body as model.Shape;
                                assert.equal("watermark", shape.name);
                                assert.equal(watermarkText, shape.text);
                                return api.deleteWatermark(fileName, null, password, folderName).then((deleteResult) => {
                                    assert.equal(200, deleteResult.response.statusCode);
                                    return api.getShapes(fileName, slideIndex, password, folderName).then((get3Result) => {
                                        assert.equal(200, get3Result.response.statusCode);
                                        assert.equal(shapeCount - 1, (get3Result.body as model.Shapes).shapesLinks.length);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("image storage", () => {
        return TestUtils.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const password = "password";
            const api = TestUtils.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShapes(fileName, slideIndex, password, folderName).then((get1Result) => {
                    assert.equal(200, get1Result.response.statusCode);
                    const shapeCount = (get1Result.body as model.Shapes).shapesLinks.length + 1;
                    return api.createImageWatermark(fileName, fs.createReadStream("TestData/watermark.png"), null, password, folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        return api.getShapes(fileName, slideIndex, password, folderName).then((get2Result) => {
                            assert.equal(200, get2Result.response.statusCode);
                            assert.equal(shapeCount, (get2Result.body as model.Shapes).shapesLinks.length);
                            return api.getShape(fileName, slideIndex, shapeCount, password, folderName).then((getShape2Result) => {
                                assert.equal(200, getShape2Result.response.statusCode);
                                const shape = getShape2Result.body as model.Shape;
                                assert.equal("watermark", shape.name);
                                return api.deleteWatermark(fileName, null, password, folderName).then((deleteResult) => {
                                    assert.equal(200, deleteResult.response.statusCode);
                                    return api.getShapes(fileName, slideIndex, password, folderName).then((get3Result) => {
                                        assert.equal(200, get3Result.response.statusCode);
                                        assert.equal(shapeCount - 1, (get3Result.body as model.Shapes).shapesLinks.length);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("image dto storage", () => {
        return TestUtils.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const password = "password";
            const watermarkName = "myWatermark";
            const api = TestUtils.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShapes(fileName, slideIndex, password, folderName).then((get1Result) => {
                    assert.equal(200, get1Result.response.statusCode);
                    const shapeCount = (get1Result.body as model.Shapes).shapesLinks.length + 1;
                    let watermark = new model.PictureFrame();
                    let fillFormat = new model.PictureFill();
                    fillFormat.base64Data = fs.readFileSync("TestData/watermark.png").toString("base64");
                    watermark.fillFormat = fillFormat;
                    watermark.name = watermarkName;
                    return api.createImageWatermark(fileName, null, watermark, password, folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        return api.getShapes(fileName, slideIndex, password, folderName).then((get2Result) => {
                            assert.equal(200, get2Result.response.statusCode);
                            assert.equal(shapeCount, (get2Result.body as model.Shapes).shapesLinks.length);
                            return api.getShape(fileName, slideIndex, shapeCount, password, folderName).then((getShape2Result) => {
                                assert.equal(200, getShape2Result.response.statusCode);
                                const shape = getShape2Result.body as model.Shape;
                                assert.equal(watermarkName, shape.name);
                                return api.deleteWatermark(fileName, watermarkName, password, folderName).then((deleteResult) => {
                                    assert.equal(200, deleteResult.response.statusCode);
                                    return api.getShapes(fileName, slideIndex, password, folderName).then((get3Result) => {
                                        assert.equal(200, get3Result.response.statusCode);
                                        assert.equal(shapeCount - 1, (get3Result.body as model.Shapes).shapesLinks.length);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("text request", () => {
        return TestUtils.runTest(() => {
            const password = "password";
            const api = TestUtils.getApi();
            return api.createWatermarkOnline(fs.createReadStream("TestData/test.pptx"), null, null, "watermarkText", null, null, password).then((postResult) => {
                assert.equal(200, postResult.response.statusCode);
                assert(fs.createReadStream("TestData/test.pptx").length != postResult.body.length);
                return api.deleteWatermarkOnline(fs.createReadStream("TestData/test.pptx"), null, password).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert(deleteResult.body.length < postResult.body.length);
                });
            });
        });
    });

    it("text dto request", () => {
        return TestUtils.runTest(() => {
            const password = "password";
            const api = TestUtils.getApi();
            let watermark = new model.Shape();
            watermark.text = "watermarkText";
            return api.createWatermarkOnline(fs.createReadStream("TestData/test.pptx"), watermark, null, null, null, null, password).then((postResult) => {
                assert.equal(200, postResult.response.statusCode);
                assert(fs.createReadStream("TestData/test.pptx").length != postResult.body.length);
                return api.deleteWatermarkOnline(fs.createReadStream("TestData/test.pptx"), null, password).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert(deleteResult.body.length < postResult.body.length);
                });
            });
        });
    });

    it("image request", () => {
        return TestUtils.runTest(() => {
            const password = "password";
            const api = TestUtils.getApi();
            return api.createImageWatermarkOnline(fs.createReadStream("TestData/test.pptx"), fs.createReadStream("TestData/watermark.png"), null, password).then((postResult) => {
                assert.equal(200, postResult.response.statusCode);
                assert(fs.createReadStream("TestData/test.pptx").length != postResult.body.length);
                return api.deleteWatermarkOnline(fs.createReadStream("TestData/test.pptx"), null, password).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert(deleteResult.body.length < postResult.body.length);
                });
            });
        });
    });

    it("image dto request", () => {
        return TestUtils.runTest(() => {
            const password = "password";
            const api = TestUtils.getApi();
            let watermark = new model.PictureFrame();
            let fillFormat = new model.PictureFill();
            fillFormat.base64Data = fs.readFileSync("TestData/watermark.png").toString("base64");
            watermark.fillFormat = fillFormat;
            return api.createImageWatermarkOnline(fs.createReadStream("TestData/test.pptx"), null, watermark, password).then((postResult) => {
                assert.equal(200, postResult.response.statusCode);
                assert(fs.createReadStream("TestData/test.pptx").length != postResult.body.length);
                return api.deleteWatermarkOnline(fs.createReadStream("TestData/test.pptx"), null, password).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert(deleteResult.body.length < postResult.body.length);
                });
            });
        });
    });
});
