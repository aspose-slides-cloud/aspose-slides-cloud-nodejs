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
import {NotesSlide} from "../../sdk/model";
import {TestUtils} from "../testUtils";

var assert = require('assert');
var fs = require('fs');

describe("NotesSlide tests", () => {
    it("get notes slide", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getNotesSlide(TestUtils.fileName, 1, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert((result.body as model.NotesSlide) != null);
                });
            });
        });
    });

    it("notes slide exists", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.notesSlideExists(TestUtils.fileName, 1, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(true, (result.body as model.EntityExists).exists);
                });
            });
        });
    });

    it("download notes slide", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.downloadNotesSlide(TestUtils.fileName, 1, model.NotesSlideExportFormat.Png, null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("get notes slide online", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.getNotesSlideOnline(fs.createReadStream(TestUtils.localFilePath), 1, TestUtils.password).then((result) => {
                assert((result.body as model.NotesSlide) != null);
            });
        });
    });

    it("notes slide exists online", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.notesSlideExistsOnline(fs.createReadStream(TestUtils.localFilePath), 1, TestUtils.password).then((result) => {
                assert((result.body as model.ObjectExist).exists);
            });
        });
    });

    it("download notes slide online", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.downloadNotesSlideOnline(fs.createReadStream(TestUtils.localFilePath), 1, model.NotesSlideExportFormat.Png, null, null, TestUtils.password).then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("shapes", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const shapeCount = 3;
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getSpecialSlideShapes(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, TestUtils.password, TestUtils.folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(shapeCount, (result1.body as model.Shapes).shapesLinks.length);
                    const dto = new model.Shape();
                    dto.x = 100;
                    dto.y = 100;
                    dto.width = 500;
                    dto.height = 200;
                    dto.shapeType = model.GeometryShape.ShapeTypeEnum.Rectangle;
                    dto.text = "New shape";
                    return api.createSpecialSlideShape(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, dto, null, null, TestUtils.password, TestUtils.folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.text, (createResult.body as model.Shape).text);
                        return api.getSpecialSlideShapes(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, TestUtils.password, TestUtils.folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(shapeCount + 1, (result2.body as model.Shapes).shapesLinks.length);
                            dto.text = "Updated shape";
                            return api.updateSpecialSlideShape(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeCount + 1, dto, TestUtils.password, TestUtils.folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.text, (updateResult.body as model.Shape).text);
                                return api.getSpecialSlideShapes(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, TestUtils.password, TestUtils.folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(shapeCount + 1, (result3.body as model.Shapes).shapesLinks.length);
                                    return api.deleteSpecialSlideShape(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeCount + 1, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlideShapes(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, TestUtils.password, TestUtils.folderName).then((result4) => {
                                            assert.equal(200, result4.response.statusCode);
                                            assert.equal(shapeCount, (result4.body as model.Shapes).shapesLinks.length);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("paragraphs", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const shapeIndex = 2;
            const paragraphCount = 1;
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getSpecialSlideParagraphs(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, TestUtils.password, TestUtils.folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(paragraphCount, (result1.body as model.Paragraphs).paragraphLinks.length);
                    var dto = new model.Paragraph();
                    dto.alignment = model.Paragraph.AlignmentEnum.Right;
                    const portion = new model.Portion();
                    portion.text = "New paragraph";
                    dto.portionList = [portion];
                    return api.createSpecialSlideParagraph(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, dto, null, TestUtils.password, TestUtils.folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.alignment, (createResult.body as model.Paragraph).alignment);
                        return api.getSpecialSlideParagraphs(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, TestUtils.password, TestUtils.folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(paragraphCount + 1, (result2.body as model.Paragraphs).paragraphLinks.length);
                            dto = new model.Paragraph();
                            dto.alignment = model.Paragraph.AlignmentEnum.Center;
                            return api.updateSpecialSlideParagraph(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphCount + 1, dto, TestUtils.password, TestUtils.folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.alignment, (updateResult.body as model.Paragraph).alignment);
                                return api.getSpecialSlideParagraphs(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, TestUtils.password, TestUtils.folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(paragraphCount + 1, (result3.body as model.Paragraphs).paragraphLinks.length);
                                    return api.deleteSpecialSlideParagraph(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphCount + 1, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlideParagraphs(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, TestUtils.password, TestUtils.folderName).then((result4) => {
                                            assert.equal(200, result4.response.statusCode);
                                            assert.equal(paragraphCount, (result4.body as model.Paragraphs).paragraphLinks.length);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("portions", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const portionCount = 1;
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getSpecialSlidePortions(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(portionCount, (result1.body as model.Portions).items.length);
                    const dto = new model.Portion();
                    dto.fontBold = model.Portion.FontBoldEnum.True;
                    dto.text = "New portion";
                    return api.createSpecialSlidePortion(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, dto, null, TestUtils.password, TestUtils.folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.fontBold, (createResult.body as model.Portion).fontBold);
                        assert.equal(dto.text, (createResult.body as model.Portion).text);
                        return api.getSpecialSlidePortions(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(portionCount + 1, (result2.body as model.Portions).items.length);
                            const dto2 = new model.Portion();
                            dto2.fontHeight = 22;
                            dto2.text = "Updated portion";
                            return api.updateSpecialSlidePortion(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, portionCount + 1, dto2, TestUtils.password, TestUtils.folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.fontBold, (updateResult.body as model.Portion).fontBold);
                                assert.equal(dto2.fontHeight, (updateResult.body as model.Portion).fontHeight);
                                assert.equal(dto2.text, (updateResult.body as model.Portion).text);
                                return api.getSpecialSlidePortions(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(portionCount + 1, (result2.body as model.Portions).items.length);
                                    return api.deleteSpecialSlidePortion(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, portionCount + 1, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlidePortions(TestUtils.fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName).then((result4) => {
                                            assert.equal(200, result4.response.statusCode);
                                            assert.equal(portionCount, (result4.body as model.Portions).items.length);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("create notes slide", () => {
        return TestUtils.runTest(async () => {
            const noteSlideText = "Note slide text";
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath)

            const dto = new model.NotesSlide();
            dto.text = noteSlideText;

            const response = await api.createNotesSlide(TestUtils.fileName, 1, dto, TestUtils.password, TestUtils.folderName)
            assert.equal(response.response.statusCode, 201);
            assert.equal((response.body as NotesSlide).text, noteSlideText);
        });
    });

    it("update notes slide", () => {
        return TestUtils.runTest(async () => {
            const noteSlideText = "Note slide text";
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath)

            const dto = new model.NotesSlide();
            dto.text = noteSlideText;

            const response = await api.updateNotesSlide(TestUtils.fileName, 1, dto, TestUtils.password, TestUtils.folderName)
            assert.equal(response.response.statusCode, 200);
            assert.equal((response.body as NotesSlide).text, noteSlideText);
        });
    });

    it("delete notes slide", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath)

            const response = await api.deleteNotesSlide(TestUtils.fileName, 1, TestUtils.password, TestUtils.folderName)
            assert.equal(response.response.statusCode, 200);
        });
    });
});
