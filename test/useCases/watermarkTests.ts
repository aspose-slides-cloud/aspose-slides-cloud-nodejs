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
            const slideIndex = 1;
            const watermarkText = "watermarkText";
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((get1Result) => {
                    assert.equal(200, get1Result.response.statusCode);
                    const shapeCount = (get1Result.body as model.Shapes).shapesLinks.length + 1;
                    return api.createWatermark(TestUtils.fileName, null, null, watermarkText, null, null, TestUtils.password, TestUtils.folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        return api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((get2Result) => {
                            assert.equal(200, get2Result.response.statusCode);
                            assert.equal(shapeCount, (get2Result.body as model.Shapes).shapesLinks.length);
                            return api.getShape(TestUtils.fileName, slideIndex, shapeCount, TestUtils.password, TestUtils.folderName).then((getShape2Result) => {
                                assert.equal(200, getShape2Result.response.statusCode);
                                const shape = getShape2Result.body as model.Shape;
                                assert.equal("watermark", shape.name);
                                assert.equal(watermarkText, shape.text);
                                return api.deleteWatermark(TestUtils.fileName, null, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                                    assert.equal(200, deleteResult.response.statusCode);
                                    return api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((get3Result) => {
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
            const slideIndex = 1;
            const watermarkText = "watermarkText";
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((get1Result) => {
                    assert.equal(200, get1Result.response.statusCode);
                    const shapeCount = (get1Result.body as model.Shapes).shapesLinks.length + 1;
                    let watermark = new model.Shape();
                    watermark.text = watermarkText;
                    return api.createWatermark(TestUtils.fileName, watermark, null, null, null, null, TestUtils.password, TestUtils.folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        return api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((get2Result) => {
                            assert.equal(200, get2Result.response.statusCode);
                            assert.equal(shapeCount, (get2Result.body as model.Shapes).shapesLinks.length);
                            return api.getShape(TestUtils.fileName, slideIndex, shapeCount, TestUtils.password, TestUtils.folderName).then((getShape2Result) => {
                                assert.equal(200, getShape2Result.response.statusCode);
                                const shape = getShape2Result.body as model.Shape;
                                assert.equal("watermark", shape.name);
                                assert.equal(watermarkText, shape.text);
                                return api.deleteWatermark(TestUtils.fileName, null, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                                    assert.equal(200, deleteResult.response.statusCode);
                                    return api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((get3Result) => {
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
            const slideIndex = 1;
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((get1Result) => {
                    assert.equal(200, get1Result.response.statusCode);
                    const shapeCount = (get1Result.body as model.Shapes).shapesLinks.length + 1;
                    return api.createImageWatermark(TestUtils.fileName, fs.createReadStream("TestData/watermark.png"), null, TestUtils.password, TestUtils.folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        return api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((get2Result) => {
                            assert.equal(200, get2Result.response.statusCode);
                            assert.equal(shapeCount, (get2Result.body as model.Shapes).shapesLinks.length);
                            return api.getShape(TestUtils.fileName, slideIndex, shapeCount, TestUtils.password, TestUtils.folderName).then((getShape2Result) => {
                                assert.equal(200, getShape2Result.response.statusCode);
                                const shape = getShape2Result.body as model.Shape;
                                assert.equal("watermark", shape.name);
                                return api.deleteWatermark(TestUtils.fileName, null, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                                    assert.equal(200, deleteResult.response.statusCode);
                                    return api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((get3Result) => {
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
            const slideIndex = 1;
            const watermarkName = "myWatermark";
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((get1Result) => {
                    assert.equal(200, get1Result.response.statusCode);
                    const shapeCount = (get1Result.body as model.Shapes).shapesLinks.length + 1;
                    let watermark = new model.PictureFrame();
                    let fillFormat = new model.PictureFill();
                    fillFormat.base64Data = fs.readFileSync("TestData/watermark.png").toString("base64");
                    watermark.fillFormat = fillFormat;
                    watermark.name = watermarkName;
                    return api.createImageWatermark(TestUtils.fileName, null, watermark, TestUtils.password, TestUtils.folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        return api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((get2Result) => {
                            assert.equal(200, get2Result.response.statusCode);
                            assert.equal(shapeCount, (get2Result.body as model.Shapes).shapesLinks.length);
                            return api.getShape(TestUtils.fileName, slideIndex, shapeCount, TestUtils.password, TestUtils.folderName).then((getShape2Result) => {
                                assert.equal(200, getShape2Result.response.statusCode);
                                const shape = getShape2Result.body as model.Shape;
                                assert.equal(watermarkName, shape.name);
                                return api.deleteWatermark(TestUtils.fileName, watermarkName, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                                    assert.equal(200, deleteResult.response.statusCode);
                                    return api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName).then((get3Result) => {
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
            const api = TestUtils.getApi();
            return api.createWatermarkOnline(fs.createReadStream(TestUtils.localFilePath), null, null, "watermarkText", null, null, TestUtils.password).then((postResult) => {
                assert.equal(200, postResult.response.statusCode);
                assert(fs.createReadStream(TestUtils.localFilePath).length != postResult.body.length);
                return api.deleteWatermarkOnline(fs.createReadStream(TestUtils.localFilePath), null, TestUtils.password).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert(deleteResult.body.length < postResult.body.length);
                });
            });
        });
    });

    it("text dto request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            let watermark = new model.Shape();
            watermark.text = "watermarkText";
            return api.createWatermarkOnline(fs.createReadStream(TestUtils.localFilePath), watermark, null, null, null, null, TestUtils.password).then((postResult) => {
                assert.equal(200, postResult.response.statusCode);
                assert(fs.createReadStream(TestUtils.localFilePath).length != postResult.body.length);
                return api.deleteWatermarkOnline(fs.createReadStream(TestUtils.localFilePath), null, TestUtils.password).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert(deleteResult.body.length < postResult.body.length);
                });
            });
        });
    });

    it("image request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.createImageWatermarkOnline(fs.createReadStream(TestUtils.localFilePath), fs.createReadStream("TestData/watermark.png"), null, TestUtils.password).then((postResult) => {
                assert.equal(200, postResult.response.statusCode);
                assert(fs.createReadStream(TestUtils.localFilePath).length != postResult.body.length);
                return api.deleteWatermarkOnline(fs.createReadStream(TestUtils.localFilePath), null, TestUtils.password).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert(deleteResult.body.length < postResult.body.length);
                });
            });
        });
    });

    it("image dto request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            let watermark = new model.PictureFrame();
            let fillFormat = new model.PictureFill();
            fillFormat.base64Data = fs.readFileSync("TestData/watermark.png").toString("base64");
            watermark.fillFormat = fillFormat;
            return api.createImageWatermarkOnline(fs.createReadStream(TestUtils.localFilePath), null, watermark, TestUtils.password).then((postResult) => {
                assert.equal(200, postResult.response.statusCode);
                assert(fs.createReadStream(TestUtils.localFilePath).length != postResult.body.length);
                return api.deleteWatermarkOnline(fs.createReadStream(TestUtils.localFilePath), null, TestUtils.password).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert(deleteResult.body.length < postResult.body.length);
                });
            });
        });
    });
});
