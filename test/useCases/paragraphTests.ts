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

describe("Paragraph tests", () => {
    it("get paragraph", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getParagraph(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Paragraph).portionList.length, 2)
        });
    });

    it("get paragraphs", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getParagraphs(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Paragraphs).paragraphLinks.length, 2)
        });
    });

    it("get sub-shape paragraph", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 3;
            const paragraphIndex = 1;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getParagraph(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, TestUtils.password,
                TestUtils.folderName, null, "1");
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Paragraph).portionList.length, 2)
        });
    });

    it("get sub-shape paragraphs", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 3;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getParagraphs(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName, null, "1");
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Paragraphs).paragraphLinks.length, 2)
        });
    });

    it("create paragraph", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const dto = new model.Paragraph();
            dto.marginLeft = 2;
            dto.marginRight = 2;
            dto.alignment = model.Paragraph.AlignmentEnum.Center;

            const result = await api.createParagraph(TestUtils.fileName, slideIndex, shapeIndex, dto, null, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 201);
            assert.equal((result.body as model.Paragraph).marginLeft, 2);
            assert.equal((result.body as model.Paragraph).marginRight, 2);
            assert.equal((result.body as model.Paragraph).alignment, model.Paragraph.AlignmentEnum.Center);
        });
    });

    it("create paragraph with portions", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const portion1Dto = new model.Portion();
            portion1Dto.text = "Portion 1 Text";
            const portion2Dto = new model.Portion();
            portion2Dto.text = "Portion 2 Text";

            const dto = new model.Paragraph();
            dto.portionList = [portion1Dto, portion2Dto];

            const result = await api.createParagraph(TestUtils.fileName, slideIndex, shapeIndex, dto, null, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 201);
            assert.equal((result.body as model.Paragraph).portionList.length, 2);
        });
    });

    it("create sub-shape paragraph", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 3;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const dto = new model.Paragraph();
            dto.marginLeft = 2;
            dto.marginRight = 2;
            dto.alignment = model.Paragraph.AlignmentEnum.Center;

            const result = await api.createParagraph(TestUtils.fileName, slideIndex, shapeIndex, dto, null,
                TestUtils.password, TestUtils.folderName, null, "1");
            assert.equal(result.response.statusCode, 201);
            assert.equal((result.body as model.Paragraph).marginLeft, 2);
            assert.equal((result.body as model.Paragraph).marginRight, 2);
            assert.equal((result.body as model.Paragraph).alignment, model.Paragraph.AlignmentEnum.Center);
        });
    });

    it("update paragraph", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const dto = new model.Paragraph();
            dto.marginLeft = 2;
            dto.marginRight = 2;
            dto.alignment = model.Paragraph.AlignmentEnum.Center;

            const result = await api.updateParagraph(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, dto, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Paragraph).marginLeft, 2);
            assert.equal((result.body as model.Paragraph).marginRight, 2);
            assert.equal((result.body as model.Paragraph).alignment, model.Paragraph.AlignmentEnum.Center);
        });
    });

    it("update sub-shape paragraph", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 3;
            const paragraphIndex = 1;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const dto = new model.Paragraph();
            dto.marginLeft = 2;
            dto.marginRight = 2;
            dto.alignment = model.Paragraph.AlignmentEnum.Center;

            const result = await api.updateParagraph(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, dto,
                TestUtils.password, TestUtils.folderName, null, "1");
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Paragraph).marginLeft, 2);
            assert.equal((result.body as model.Paragraph).marginRight, 2);
            assert.equal((result.body as model.Paragraph).alignment, model.Paragraph.AlignmentEnum.Center);
        });
    });

    it("delete paragraphs", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deleteParagraphs(TestUtils.fileName, slideIndex, shapeIndex, null, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Paragraphs).paragraphLinks.length, 0)
        });
    });

    it("delete paragraphs by indexes", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deleteParagraphs(TestUtils.fileName, slideIndex, shapeIndex, [2], TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Paragraphs).paragraphLinks.length, 1)
        });
    });

    it("delete sub-shape paragraphs", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 3;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deleteParagraphs(TestUtils.fileName, slideIndex, shapeIndex, null, TestUtils.password,
                TestUtils.folderName, null, "1");
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Paragraphs).paragraphLinks.length, 0);
        });
    });

    it("delete sub-shape paragraphs by indexes", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 3;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.deleteParagraphs(TestUtils.fileName, slideIndex, shapeIndex, [2],
                TestUtils.password, TestUtils.folderName, null, "1");
            assert.equal(result.response.statusCode, 200);
            assert.equal((result.body as model.Paragraphs).paragraphLinks.length, 1);
        });
    });

    it("delete paragraph", async () => {
        const slideIndex = 6;
        const shapeIndex = 2;
        const paragraphIndex = 1;

        const api = TestUtils.getSlidesApi();
        await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

        const result = await api.deleteParagraph(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName);
        assert.equal(result.response.statusCode, 200);
        assert.equal((result.body as model.Paragraphs).paragraphLinks.length, 1);
    });

    it("delete sub-shape paragraph", async () => {
        const slideIndex = 6;
        const shapeIndex = 3;
        const paragraphIndex = 1;

        const api = TestUtils.getSlidesApi();
        await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

        const result = await api.deleteParagraph(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex,
            TestUtils.password, TestUtils.folderName, null, "1");
        assert.equal(result.response.statusCode, 200);
        assert.equal((result.body as model.Paragraphs).paragraphLinks.length, 1);
    });

    it("get paragraph rectangle", async () => {
        const slideIndex = 6;
        const shapeIndex = 2;
        const paragraphIndex = 1;

        const api = TestUtils.getSlidesApi();
        await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

        const result = await api.getParagraphRectangle(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName);
        assert.equal(result.response.statusCode, 200);
        assert((result.body as model.TextBounds).x > 0);
        assert((result.body as model.TextBounds).y > 0);
        assert((result.body as model.TextBounds).width > 0);
        assert((result.body as model.TextBounds).height > 0);
    });

    it("default portion format", async () => {
        const slideIndex = 6;
        const shapeIndex = 2;
    
        const api = TestUtils.getSlidesApi();
        await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath)
        
        const paragraphDto = new model.Paragraph();
        const portion1Dto = new model.Portion();
        portion1Dto.text = "Portion1";
        const portion2Dto = new model.Portion();
        portion2Dto.text = "Portion2";
        paragraphDto.portionList = [portion1Dto, portion2Dto];
        
        assert(paragraphDto.defaultPortionFormat == null);
    
        const defPortionFormatDto = new model.PortionFormat();
        defPortionFormatDto.fontHeight = 20;
        defPortionFormatDto.latinFont = "Arial";
        paragraphDto.defaultPortionFormat = defPortionFormatDto;
    
        const result = await api.createParagraph(TestUtils.fileName, slideIndex, shapeIndex, paragraphDto, null, TestUtils.password, TestUtils.folderName);
    
        assert.equal(result.body.portionList.length, paragraphDto.portionList.length);
        assert(result.body.defaultPortionFormat != null);
        assert.equal(result.body.defaultPortionFormat.latinFont, paragraphDto.defaultPortionFormat.latinFont);
        assert.equal(result.body.defaultPortionFormat.fontHeight, paragraphDto.defaultPortionFormat.fontHeight);
    });

    it("get paragraph effective", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getParagraphEffective(TestUtils.fileName, slideIndex, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName);
            assert.equal(result.response.statusCode, 200);
            assert.equal(result.body.defaultTabSize, 72);
        });
    });

    it("get sub-shape paragraph effective", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 6;
            const shapeIndex = 3;
            const paragraphIndex = 1;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const result = await api.getParagraphEffective(TestUtils.fileName, slideIndex, shapeIndex,
                paragraphIndex, TestUtils.password, TestUtils.folderName, null, "1");
            assert.equal(result.response.statusCode, 200);
            assert.equal(result.body.defaultTabSize, 72);
        });
    });
});