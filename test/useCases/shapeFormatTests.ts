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

describe("Shape format tests", () => {
    it("shape format line", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const shapeIndex = 1;
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.Shape();
                const lineFormat = new model.LineFormat();
                lineFormat.style = model.LineFormat.StyleEnum.ThickThin;
                lineFormat.width = 7;
                lineFormat.dashStyle = model.LineFormat.DashStyleEnum.Dash;
                dto.lineFormat = lineFormat;
                return api.updateShape(TestUtils.fileName, slideIndex, shapeIndex, dto, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert(putResult.body as model.Shape);
                    return api.getShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName).then((getResult) => {
                        assert.equal(200, getResult.response.statusCode);
                        assert(getResult.body as model.Shape);
                        assert(dto.lineFormat.width, (getResult.body as model.Shape).width);
                    });
                });
            });
        });
    });

    it("shape format fill", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const shapeIndex = 1;
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.Shape();
                const fillFormat = new model.SolidFill();
                fillFormat.color = "#FFFFFF00";
                dto.fillFormat = fillFormat;
                return api.updateShape(TestUtils.fileName, slideIndex, shapeIndex, dto, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert(putResult.body as model.Shape);
                    return api.getShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName).then((getResult) => {
                        assert.equal(200, getResult.response.statusCode);
                        assert(getResult.body as model.Shape);
                        assert((getResult.body as model.Shape).fillFormat as model.SolidFill);
                        assert((dto.fillFormat as model.SolidFill).color, ((getResult.body as model.Shape).fillFormat as model.SolidFill).color);
                    });
                });
            });
        });
    });

    it("shape format effect", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const shapeIndex = 1;
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.Shape();
                const effectFormat = new model.EffectFormat();
                const innerShadow = new model.InnerShadowEffect();
                innerShadow.direction = 35;
                innerShadow.blurRadius = 30;
                innerShadow.distance = 40;
                innerShadow.shadowColor = "#FFFFFF00";
                effectFormat.innerShadow = innerShadow;
                dto.effectFormat = effectFormat;
                return api.updateShape(TestUtils.fileName, slideIndex, shapeIndex, dto, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert(putResult.body as model.Shape);
                    return api.getShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName).then((getResult) => {
                        assert.equal(200, getResult.response.statusCode);
                        assert(getResult.body as model.Shape);
                        assert(dto.effectFormat.innerShadow.direction, (getResult.body as model.Shape).effectFormat.innerShadow.direction);
                    });
                });
            });
        });
    });

    it("shape format 3D", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const shapeIndex = 1;
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.Shape();
                const threeDFormat = new model.ThreeDFormat();
                threeDFormat.depth = 4;

                const bevelTop = new model.ShapeBevel();
                bevelTop.bevelType = model.ShapeBevel.BevelTypeEnum.Circle;
                bevelTop.height = 6;
                bevelTop.width = 6;
                threeDFormat.bevelTop = bevelTop;

                const camera = new model.Camera();
                camera.cameraType = model.Camera.CameraTypeEnum.OrthographicFront;
                threeDFormat.camera = camera;

                const lightRig = new model.LightRig();
                lightRig.lightType = model.LightRig.LightTypeEnum.ThreePt;
                lightRig.direction = model.LightRig.DirectionEnum.Top;
                threeDFormat.lightRig = lightRig;
                dto.threeDFormat = threeDFormat;
                return api.updateShape(TestUtils.fileName, slideIndex, shapeIndex, dto, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert(putResult.body as model.Shape);
                    return api.getShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName).then((getResult) => {
                        assert.equal(200, getResult.response.statusCode);
                        assert(getResult.body as model.Shape);
                        assert(dto.threeDFormat.depth, (getResult.body as model.Shape).threeDFormat.depth);
                    });
                });
            });
        });
    });
});
