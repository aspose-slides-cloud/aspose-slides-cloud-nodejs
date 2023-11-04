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
    it("get slides", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getSlides(TestUtils.fileName, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Slides).slideList.length, 9)
        });
    });

    it("get slide", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 3;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getSlide(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
        });
    });

    it("create slide", () => {
        return TestUtils.runTest(async () => {
            const layoutSlidePath = "layoutSlides/3";
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let result = await api.createSlide(TestUtils.fileName, layoutSlidePath, 1, TestUtils.password, TestUtils.folderName);

            assert.equal(result.response.statusCode, 201);
            assert.equal((result.body as model.Slides).slideList.length, 10);

            result = await api.createSlide(TestUtils.fileName, null, null, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 201);
            assert.equal((result.body as model.Slides).slideList.length, 11);
        });
    });

    it("copy slide", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 3;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.copySlide(TestUtils.fileName, slideIndex, null, null, null, null, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Slides).slideList.length, 10);
        });
    });

    it("copy slide from source", () => {
        return TestUtils.runTest(async () => {
            const sourceFileName = "TemplateCV.pptx";
            const sourceFilePath = TestUtils.folderName + "/" + sourceFileName;
            const slideIndex = 1;

            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            await api.copyFile("TempTests/" + sourceFileName, sourceFilePath);

            const result = await api.copySlide(TestUtils.fileName, slideIndex, 1, sourceFilePath, null, null, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Slides).slideList.length, 10);
        });
    });

    it("move slide", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 1;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.moveSlide(TestUtils.fileName, slideIndex, 2, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Slides).slideList.length, 9);
        });
    });

    it("reorder slides", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const oldPositions = [1, 2, 3, 4, 5, 6];
            const newPositions = [6, 5, 4, 3, 2, 1];

            const result = await api.reorderSlides(TestUtils.fileName, oldPositions, newPositions, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Slides).slideList.length, 9);
        });
    });

    it("update slide", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 1;
            const layoutSlideHref = "layoutSlides/3";
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const dtoLayoutSlide = new model.ResourceUri();
            dtoLayoutSlide.href = layoutSlideHref;
            const dto = new model.Slide();
            dto.layoutSlide = dtoLayoutSlide;

            const result = await api.updateSlide(TestUtils.fileName, slideIndex, dto, TestUtils.password, TestUtils.folderName);
            assert((result.body as model.Slide).layoutSlide.href.includes(layoutSlideHref));
        });
    });

    it("delete slides", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deleteSlides(TestUtils.fileName, null, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Slides).slideList.length, 1);
        });
    });

    it("delete slides by indexes", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deleteSlides(TestUtils.fileName, [1, 3, 5], TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Slides).slideList.length, 6);
        });
    });

    it("delete slide", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 1;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deleteSlide(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Slides).slideList.length, 8);
        });
    });

    it("get background", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 5;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getBackground(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.SlideBackground).fillFormat.type, "Solid");
        });
    });

    it("set background", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 1;
            const fillColor = "#FFF5FF8A";
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const fillDto = new model.SolidFill()
            fillDto.color = fillColor;
            const dto = new model.SlideBackground();
            dto.fillFormat = fillDto;

            const result = await api.setBackground(TestUtils.fileName, slideIndex, dto, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.SlideBackground).fillFormat.type, "Solid");
            assert.equal((result.body.fillFormat as SolidFill).color, fillColor);
        });
    });

    it("set background color", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 1;
            const fillColor = "#FFF5FF8A";
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.setBackgroundColor(TestUtils.fileName, slideIndex, fillColor, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.SlideBackground).fillFormat.type, "Solid");
            assert.equal((result.body.fillFormat as SolidFill).color, fillColor);
        });
    });

    it("delete background", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 5;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deleteBackground(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.SlideBackground).fillFormat.type, "NoFill");
        });
    });
});