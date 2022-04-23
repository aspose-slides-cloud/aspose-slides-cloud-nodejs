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

describe("Portion tests", () => {
    it("get portions", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.getPortions(fileName, slideIndex, shapeIndex, paragraphIndex, "password", folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items.length, 2)
        });
    });

    it("get sub-shape portions", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.getSubshapePortions(fileName, slideIndex, "3/shapes", shapeIndex, paragraphIndex, "password", folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items.length, 2)
        });
    });

    it("get portion", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const portionIndex = 1;
            const portionText = "portion 1";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.getPortion(fileName, slideIndex, shapeIndex, paragraphIndex, portionIndex, "password", folderName);
            assert.equal(result.response.statusCode, 200);
            assert((result.body as model.Portion).text.includes(portionText));
        });
    });

    it("get sub-shape portion", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const portionIndex = 1;
            const portionText = "portion 1";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.getSubshapePortion(fileName, slideIndex, "3/shapes", shapeIndex, paragraphIndex, portionIndex, "password", folderName);
            assert.equal(result.response.statusCode, 200);
            assert((result.body as model.Portion).text.includes(portionText));
        });
    });

    it("create portion", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const portionText = "portion 1";
            const fontName = "Arial";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const dto = new model.Portion();
            dto.text = portionText;
            dto.fontBold = model.Portion.FontBoldEnum.True;
            dto.fontHeight = 20;
            dto.latinFont = fontName;

            const fillFormat = new model.SolidFill();
            fillFormat.color = "#FFF5FF8A";
            dto.fillFormat = fillFormat;

            const result = await api.createPortion(fileName, slideIndex, shapeIndex, paragraphIndex, dto, null, "password", folderName);
            assert.equal(result.response.statusCode, 201);
            assert.equal((result.body as model.Portion).text, dto.text);
            assert.equal((result.body as model.Portion).fontBold, dto.fontBold);
            assert.equal((result.body as model.Portion).fontHeight, dto.fontHeight);
            assert.equal((result.body as model.Portion).latinFont, dto.latinFont);
            assert.equal((result.body as model.Portion).fillFormat.type, "Solid");
        });
    });

    it("create sub-shape portion", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const portionText = "portion 1";
            const fontName = "Arial";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const dto = new model.Portion();
            dto.text = portionText;
            dto.fontBold = model.Portion.FontBoldEnum.True;
            dto.fontHeight = 20;
            dto.latinFont = fontName;

            const fillFormat = new model.SolidFill();
            fillFormat.color = "#FFF5FF8A";
            dto.fillFormat = fillFormat;

            const result = await api.createSubshapePortion(fileName, slideIndex, "3/shapes", shapeIndex, paragraphIndex, dto, null, "password", folderName);
            assert.equal(result.response.statusCode, 201);
            assert.equal((result.body as model.Portion).text, dto.text);
            assert.equal((result.body as model.Portion).fontBold, dto.fontBold);
            assert.equal((result.body as model.Portion).fontHeight, dto.fontHeight);
            assert.equal((result.body as model.Portion).latinFont, dto.latinFont);
            assert.equal((result.body as model.Portion).fillFormat.type, "Solid");
        });
    });

    it("update portion", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const portionIndex = 1;
            const portionText = "portion 1";
            const fontName = "Arial";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const dto = new model.Portion();
            dto.text = portionText;
            dto.fontBold = model.Portion.FontBoldEnum.True;
            dto.fontHeight = 20;
            dto.latinFont = fontName;

            const fillFormat = new model.SolidFill();
            fillFormat.color = "#FFF5FF8A";
            dto.fillFormat = fillFormat;

            const result = await api.updatePortion(fileName, slideIndex, shapeIndex, paragraphIndex, portionIndex, dto, "password", folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portion).text, dto.text);
            assert.equal((result.body as model.Portion).fontBold, dto.fontBold);
            assert.equal((result.body as model.Portion).fontHeight, dto.fontHeight);
            assert.equal((result.body as model.Portion).latinFont, dto.latinFont);
            assert.equal((result.body as model.Portion).fillFormat.type, "Solid");
        });
    });

    it("update sub-shape portion", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const portionIndex = 1;
            const portionText = "portion 1";
            const fontName = "Arial";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const dto = new model.Portion();
            dto.text = portionText;
            dto.fontBold = model.Portion.FontBoldEnum.True;
            dto.fontHeight = 20;
            dto.latinFont = fontName;

            const fillFormat = new model.SolidFill();
            fillFormat.color = "#FFF5FF8A";
            dto.fillFormat = fillFormat;

            const result = await api.updateSubshapePortion(fileName, slideIndex, "3/shapes", shapeIndex, paragraphIndex, portionIndex, dto, "password", folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portion).text, dto.text);
            assert.equal((result.body as model.Portion).fontBold, dto.fontBold);
            assert.equal((result.body as model.Portion).fontHeight, dto.fontHeight);
            assert.equal((result.body as model.Portion).latinFont, dto.latinFont);
            assert.equal((result.body as model.Portion).fillFormat.type, "Solid");
        });
    });

    it("delete portions", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;

            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.deletePortions(fileName, slideIndex, shapeIndex, paragraphIndex, null, "password", folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items, 0);
        });
    });

    it("delete portions by indexes", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;

            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.deletePortions(fileName, slideIndex, shapeIndex, paragraphIndex, [1], "password", folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items.length, 1);
        });
    });

    it("delete sub-shape portions", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const paragraphIndex = 1;

            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.deleteSubshapePortions(fileName, slideIndex, "3/shapes", 1, paragraphIndex, null, "password", folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items, 0);
        });
    });

    it("delete sub-shapes portions by indexes", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const paragraphIndex = 1;

            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.deleteSubshapePortions(fileName, slideIndex, "3/shapes", 1, paragraphIndex, [1], "password", folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items.length, 1);
        });
    });

    it("delete portion", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const portionIndex = 1;

            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.deletePortion(fileName, slideIndex, shapeIndex, paragraphIndex, portionIndex, "password", folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items.length, 1);
        });
    });

    it("delete sub-shape portion", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 1;
            const paragraphIndex = 1;
            const portionIndex = 1;

            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.deleteSubshapePortion(fileName, slideIndex, "3/shapes", shapeIndex, paragraphIndex, portionIndex, "password", folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Portions).items.length, 1);
        });
    });

    it("get portion rectangle", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const portionIndex = 1;

            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const result = await api.getPortionRectangle(fileName, slideIndex, shapeIndex, paragraphIndex, portionIndex, "password", folderName);
            assert.equal(result.response.statusCode, 200);
            assert((result.body as model.TextBounds).x > 0);
            assert((result.body as model.TextBounds).y > 0);
            assert((result.body as model.TextBounds).width > 0);
            assert((result.body as model.TextBounds).height > 0);
        });
    });
});