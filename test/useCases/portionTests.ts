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

describe("Portion tests", () => {
    it("get portions", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getPortions(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items.length, 2)
        });
    });

    it("get sub-shape portions", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 3;
            const paragraphIndex = 1;
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getPortions(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName, null, "1");
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items.length, 2)
        });
    });

    it("get portion", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const portionIndex = 1;
            const portionText = "portion 1";
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getPortion(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, portionIndex, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert((result.body as model.Portion).text.includes(portionText));
        });
    });

    it("get sub-shape portion", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 3;
            const paragraphIndex = 1;
            const portionIndex = 1;
            const portionText = "portion 1";
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getPortion(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, portionIndex, 
                TestUtils.password, TestUtils.folderName, null, "1");
            assert.equal(result.response.statusCode, 200);
            assert((result.body as model.Portion).text.includes(portionText));
        });
    });

    it("create portion", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const portionText = "portion 1";
            const fontName = "Arial";
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const dto = new model.Portion();
            dto.text = portionText;
            dto.fontBold = model.Portion.FontBoldEnum.True;
            dto.fontHeight = 20;
            dto.latinFont = fontName;

            const fillFormat = new model.SolidFill();
            fillFormat.color = "#FFF5FF8A";
            dto.fillFormat = fillFormat;

            const result = await api.createPortion(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, dto, null, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 201);
            assert.equal((result.body as model.Portion).text, dto.text);
            assert.equal((result.body as model.Portion).fontBold, dto.fontBold);
            assert.equal((result.body as model.Portion).fontHeight, dto.fontHeight);
            assert.equal((result.body as model.Portion).latinFont, dto.latinFont);
            assert.equal((result.body as model.Portion).fillFormat.type, "Solid");
        });
    });

    it("create sub-shape portion", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 3;
            const paragraphIndex = 1;
            const portionText = "portion 1";
            const fontName = "Arial";
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const dto = new model.Portion();
            dto.text = portionText;
            dto.fontBold = model.Portion.FontBoldEnum.True;
            dto.fontHeight = 20;
            dto.latinFont = fontName;

            const fillFormat = new model.SolidFill();
            fillFormat.color = "#FFF5FF8A";
            dto.fillFormat = fillFormat;

            const result = await api.createPortion(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, dto, null,
                TestUtils.password, TestUtils.folderName,  null, "1");
            assert.equal(result.response.statusCode, 201);
            assert.equal((result.body as model.Portion).text, dto.text);
            assert.equal((result.body as model.Portion).fontBold, dto.fontBold);
            assert.equal((result.body as model.Portion).fontHeight, dto.fontHeight);
            assert.equal((result.body as model.Portion).latinFont, dto.latinFont);
            assert.equal((result.body as model.Portion).fillFormat.type, "Solid");
        });
    });

    it("update portion", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const portionIndex = 1;
            const portionText = "portion 1";
            const fontName = "Arial";
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const dto = new model.Portion();
            dto.text = portionText;
            dto.fontBold = model.Portion.FontBoldEnum.True;
            dto.fontHeight = 20;
            dto.latinFont = fontName;

            const fillFormat = new model.SolidFill();
            fillFormat.color = "#FFF5FF8A";
            dto.fillFormat = fillFormat;

            const result = await api.updatePortion(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, portionIndex, dto, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portion).text, dto.text);
            assert.equal((result.body as model.Portion).fontBold, dto.fontBold);
            assert.equal((result.body as model.Portion).fontHeight, dto.fontHeight);
            assert.equal((result.body as model.Portion).latinFont, dto.latinFont);
            assert.equal((result.body as model.Portion).fillFormat.type, "Solid");
        });
    });

    it("update sub-shape portion", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 3;
            const paragraphIndex = 1;
            const portionIndex = 1;
            const portionText = "portion 1";
            const fontName = "Arial";
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const dto = new model.Portion();
            dto.text = portionText;
            dto.fontBold = model.Portion.FontBoldEnum.True;
            dto.fontHeight = 20;
            dto.latinFont = fontName;

            const fillFormat = new model.SolidFill();
            fillFormat.color = "#FFF5FF8A";
            dto.fillFormat = fillFormat;

            const result = await api.updatePortion(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, portionIndex, dto,
                TestUtils.password, TestUtils.folderName,  null, "1");
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portion).text, dto.text);
            assert.equal((result.body as model.Portion).fontBold, dto.fontBold);
            assert.equal((result.body as model.Portion).fontHeight, dto.fontHeight);
            assert.equal((result.body as model.Portion).latinFont, dto.latinFont);
            assert.equal((result.body as model.Portion).fillFormat.type, "Solid");
        });
    });

    it("delete portions", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;

            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deletePortions(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, null, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items, 0);
        });
    });

    it("delete portions by indexes", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;

            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deletePortions(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, [1], TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items.length, 1);
        });
    });

    it("delete sub-shape portions", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const paragraphIndex = 1;

            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deletePortions(TestUtils.fileName, slideIndex, 3, paragraphIndex, null,
                TestUtils.password, TestUtils.folderName, null, "1");
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items, 0);
        });
    });

    it("delete sub-shapes portions by indexes", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const paragraphIndex = 1;

            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deletePortions(TestUtils.fileName, slideIndex, 3, paragraphIndex, [1], 
                TestUtils.password, TestUtils.folderName, null, "1");
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items.length, 1);
        });
    });

    it("delete portion", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const portionIndex = 1;

            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deletePortion(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, portionIndex, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items.length, 1);
        });
    });

    it("delete sub-shape portion", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 3;
            const paragraphIndex = 1;
            const portionIndex = 1;

            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deletePortion(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, portionIndex,
                TestUtils.password, TestUtils.folderName, null, "1");
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items.length, 1);
        });
    });

    it("get portion rectangle", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const portionIndex = 1;

            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getPortionRectangle(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, portionIndex, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert((result.body as model.TextBounds).x > 0);
            assert((result.body as model.TextBounds).y > 0);
            assert((result.body as model.TextBounds).width > 0);
            assert((result.body as model.TextBounds).height > 0);
        });
    });

    it("get portion effective", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const portionIndex = 1;
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getPortionEffective(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, portionIndex, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal(result.body.fontHeight, 18);
        });
    });

    it("get sub-shape portion effective", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 3;
            const paragraphIndex = 1;
            const portionIndex = 1;
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getPortionEffective(TestUtils.fileName, slideIndex, shapeIndex,
                paragraphIndex, portionIndex, TestUtils.password, TestUtils.folderName,  null, "1");
            assert.equal(result.response.statusCode, 200);
            assert.equal(result.body.fontHeight, 18);
        });
    });
});