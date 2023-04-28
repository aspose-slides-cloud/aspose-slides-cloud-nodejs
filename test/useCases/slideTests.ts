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

import * as model from "../../sdk/model";
import {SolidFill} from "../../sdk/model";
import {TestUtils} from "../testUtils";

var assert = require('assert');

describe("Slide tests", () => {
    it("getSlides", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.getSlides(fileName, "password", folderName);
            assert.equal((result.body as model.Slides).slideList.length, 9)
        });
    });

    it("getSlide", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 3;
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.getSlide(fileName, slideIndex, "password", folderName);
            assert.equal(result.response.statusCode, 200);
        });
    });

    it("createSlide", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const layoutSlidePath = "layoutSlides/3";
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            let result = await api.createSlide(fileName, layoutSlidePath, 1, "password", folderName);

            assert.equal(result.response.statusCode, 201);
            assert.equal((result.body as model.Slides).slideList.length, 10);

            result = await api.createSlide(fileName, null, null, "password", folderName);
            assert.equal(result.response.statusCode, 201);
            assert.equal((result.body as model.Slides).slideList.length, 11);
        });
    });

    it("copySlide", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 3;
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.copySlide(fileName, slideIndex, null, null, null, null, "password", folderName);
            assert.equal((result.body as model.Slides).slideList.length, 10);
        });
    });

    it("copySlideFromSource", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const sourceFileName = "TemplateCV.pptx";
            const slideIndex = 1;

            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);
            await api.copyFile("TempTests/" + sourceFileName, folderName + "/" + sourceFileName);

            const result = await api.copySlide(fileName, slideIndex, 1, folderName + "/" + sourceFileName, null, null, "password", folderName);
            assert.equal((result.body as model.Slides).slideList.length, 10);
        });
    });

    it("moveSlide", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.moveSlide(fileName, slideIndex, 2, "password", folderName);
            assert.equal((result.body as model.Slides).slideList.length, 9);
        });
    });

    it("reorderSlides", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);
            const oldPositions = [1, 2, 3, 4, 5, 6];
            const newPositions = [6, 5, 4, 3, 2, 1];

            const result = await api.reorderSlides(fileName, oldPositions, newPositions, "password", folderName);
            assert.equal((result.body as model.Slides).slideList.length, 9);
        });
    });

    it("updateSlide", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const layoutSlideHref = "layoutSlides/3";
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const dtoLayoutSlide = new model.ResourceUri();
            dtoLayoutSlide.href = layoutSlideHref;
            const dto = new model.Slide();
            dto.layoutSlide = dtoLayoutSlide;

            const result = await api.updateSlide(fileName, slideIndex, dto, "password", folderName);
            assert((result.body as model.Slide).layoutSlide.href.includes(layoutSlideHref));
        });
    });

    it("deleteSlides", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.deleteSlides(fileName, null, "password", folderName);
            assert.equal((result.body as model.Slides).slideList.length, 1);
        });
    });

    it("deleteSlidesByIndex", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.deleteSlides(fileName, [1, 3, 5], "password", folderName);
            assert.equal((result.body as model.Slides).slideList.length, 6);
        });
    });

    it("deleteSlide", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.deleteSlide(fileName, slideIndex, "password", folderName);
            assert.equal((result.body as model.Slides).slideList.length, 8);
        });
    });

    it("getBackground", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 5;
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.getBackground(fileName, slideIndex, "password", folderName);
            assert.equal((result.body as model.SlideBackground).fillFormat.type, "Solid");
        });
    });

    it("setBackground", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const fillColor = "#FFF5FF8A";
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const fillDto = new model.SolidFill()
            fillDto.color = fillColor;
            const dto = new model.SlideBackground();
            dto.fillFormat = fillDto;


            const result = await api.setBackground(fileName, slideIndex, dto, "password", folderName);
            assert.equal((result.body as model.SlideBackground).fillFormat.type, "Solid");
            assert.equal((result.body.fillFormat as SolidFill).color, fillColor);
        });
    });

    it("setBackgroundColor", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const fillColor = "#FFF5FF8A";
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.setBackgroundColor(fileName, slideIndex, fillColor, "password", folderName);
            assert.equal((result.body as model.SlideBackground).fillFormat.type, "Solid");
            assert.equal((result.body.fillFormat as SolidFill).color, fillColor);
        });
    });

    it("deleteBackground", () => {
        return TestUtils.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 5;
            const api = TestUtils.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.deleteBackground(fileName, slideIndex, "password", folderName);
            assert.equal((result.body as model.SlideBackground).fillFormat.type, "NoFill");
        });
    });
});