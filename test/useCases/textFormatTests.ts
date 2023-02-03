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

describe("text format tests", () => {
    it("textFormat3D", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;

            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const bevelBottomDto = new model.ShapeBevel();
            bevelBottomDto.bevelType = model.ShapeBevel.BevelTypeEnum.Circle;
            bevelBottomDto.height = 3.5;
            bevelBottomDto.width = 3.5;

            const bevelTopDto = new model.ShapeBevel();
            bevelTopDto.bevelType = model.ShapeBevel.BevelTypeEnum.Circle;
            bevelTopDto.height = 4;
            bevelTopDto.width = 4;

            const lightRigDto = new model.LightRig();
            lightRigDto.lightType = model.LightRig.LightTypeEnum.Balanced;
            lightRigDto.direction = model.LightRig.DirectionEnum.Top;
            lightRigDto.xRotation = 0;
            lightRigDto.yRotation = 0;
            lightRigDto.zRotation = 40;

            const cameraDto = new model.Camera();
            cameraDto.cameraType = model.Camera.CameraTypeEnum.PerspectiveContrastingRightFacing;

            const threeDFormatDto = new model.ThreeDFormat();
            threeDFormatDto.bevelTop = bevelTopDto;
            threeDFormatDto.bevelBottom = bevelBottomDto;
            threeDFormatDto.lightRig = lightRigDto;
            threeDFormatDto.camera = cameraDto;
            threeDFormatDto.extrusionColor = "#FF008000";
            threeDFormatDto.extrusionHeight = 6;
            threeDFormatDto.contourColor = "#FF25353D";
            threeDFormatDto.contourWidth = 1.5;
            threeDFormatDto.depth = 3;
            threeDFormatDto.material = model.ThreeDFormat.MaterialEnum.Plastic;

            const textFrameFormatDto = new model.TextFrameFormat();
            textFrameFormatDto.transform = model.TextFrameFormat.TransformEnum.ArchUpPour;
            textFrameFormatDto.threeDFormat = threeDFormatDto;

            const shapeDto = new model.Shape();
            shapeDto.shapeType = model.GeometryShape.ShapeTypeEnum.Rectangle;
            shapeDto.x = 100;
            shapeDto.y = 100;
            shapeDto.height = 100;
            shapeDto.width = 200;
            shapeDto.text = "Sample text";

            shapeDto.textFrameFormat = textFrameFormatDto;

            const result = await api.createShape(fileName, slideIndex, shapeDto, null, null, "password", folderName);
            assert.equal((result.body as model.Shape).type, "Shape");

        });
    });
});