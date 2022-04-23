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
import {TestInitializer} from "../testInitializer";

var assert = require('assert');
var fs = require('fs');

describe("NotesSlide tests", () => {
    it("get from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getNotesSlide(fileName, 1, "password", folderName).then((result) => {
                    assert((result.body as model.NotesSlide) != null);
                });
            });
        });
    });

    it("exists from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.notesSlideExists(fileName, 1, "password", folderName).then((result) => {
                    assert.equal(true, (result.body as model.EntityExists).exists);
                });
            });
        });
    });

    it("download from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadNotesSlide(fileName, 1, model.NotesSlideExportFormat.Png, null, null, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("get from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            return api.getNotesSlideOnline(fs.createReadStream("TestData/test.pptx"), 1, "password").then((result) => {
                assert((result.body as model.NotesSlide) != null);
            });
        });
    });

    it("exists from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            return api.notesSlideExistsOnline(fs.createReadStream("TestData/test.pptx"), 1, "password").then((result) => {
                assert((result.body as model.ObjectExist).exists);
            });
        });
    });

    it("download from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            return api.downloadNotesSlideOnline(fs.createReadStream("TestData/test.pptx"), 1, model.NotesSlideExportFormat.Png, null, null, "password").then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("shapes", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const shapeCount = 3;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSpecialSlideShapes(fileName, slideIndex, model.SpecialSlideType.NotesSlide, password, folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(shapeCount, (result1.body as model.Shapes).shapesLinks.length);
                    const dto = new model.Shape();
                    dto.x = 100;
                    dto.y = 100;
                    dto.width = 500;
                    dto.height = 200;
                    dto.shapeType = model.GeometryShape.ShapeTypeEnum.Rectangle;
                    dto.text = "New shape";
                    return api.createSpecialSlideShape(fileName, slideIndex, model.SpecialSlideType.NotesSlide, dto, null, null, password, folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.text, (createResult.body as model.Shape).text);
                        return api.getSpecialSlideShapes(fileName, slideIndex, model.SpecialSlideType.NotesSlide, password, folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(shapeCount + 1, (result2.body as model.Shapes).shapesLinks.length);
                            dto.text = "Updated shape";
                            return api.updateSpecialSlideShape(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeCount + 1, dto, password, folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.text, (updateResult.body as model.Shape).text);
                                return api.getSpecialSlideShapes(fileName, slideIndex, model.SpecialSlideType.NotesSlide, password, folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(shapeCount + 1, (result3.body as model.Shapes).shapesLinks.length);
                                    return api.deleteSpecialSlideShape(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeCount + 1, password, folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlideShapes(fileName, slideIndex, model.SpecialSlideType.NotesSlide, password, folderName).then((result4) => {
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
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const shapeIndex = 2;
            const paragraphCount = 1;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSpecialSlideParagraphs(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, password, folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(paragraphCount, (result1.body as model.Paragraphs).paragraphLinks.length);
                    var dto = new model.Paragraph();
                    dto.alignment = model.Paragraph.AlignmentEnum.Right;
                    const portion = new model.Portion();
                    portion.text = "New paragraph";
                    dto.portionList = [portion];
                    return api.createSpecialSlideParagraph(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, dto, null, password, folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.alignment, (createResult.body as model.Paragraph).alignment);
                        return api.getSpecialSlideParagraphs(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, password, folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(paragraphCount + 1, (result2.body as model.Paragraphs).paragraphLinks.length);
                            dto = new model.Paragraph();
                            dto.alignment = model.Paragraph.AlignmentEnum.Center;
                            return api.updateSpecialSlideParagraph(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphCount + 1, dto, password, folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.alignment, (updateResult.body as model.Paragraph).alignment);
                                return api.getSpecialSlideParagraphs(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, password, folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(paragraphCount + 1, (result3.body as model.Paragraphs).paragraphLinks.length);
                                    return api.deleteSpecialSlideParagraph(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphCount + 1, password, folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlideParagraphs(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, password, folderName).then((result4) => {
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
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const shapeIndex = 2;
            const paragraphIndex = 1;
            const portionCount = 1;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSpecialSlidePortions(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, password, folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(portionCount, (result1.body as model.Portions).items.length);
                    const dto = new model.Portion();
                    dto.fontBold = model.Portion.FontBoldEnum.True;
                    dto.text = "New portion";
                    return api.createSpecialSlidePortion(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, dto, null, password, folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.fontBold, (createResult.body as model.Portion).fontBold);
                        assert.equal(dto.text, (createResult.body as model.Portion).text);
                        return api.getSpecialSlidePortions(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, password, folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(portionCount + 1, (result2.body as model.Portions).items.length);
                            const dto2 = new model.Portion();
                            dto2.fontHeight = 22;
                            dto2.text = "Updated portion";
                            return api.updateSpecialSlidePortion(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, portionCount + 1, dto2, password, folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.fontBold, (updateResult.body as model.Portion).fontBold);
                                assert.equal(dto2.fontHeight, (updateResult.body as model.Portion).fontHeight);
                                assert.equal(dto2.text, (updateResult.body as model.Portion).text);
                                return api.getSpecialSlidePortions(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, password, folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(portionCount + 1, (result2.body as model.Portions).items.length);
                                    return api.deleteSpecialSlidePortion(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, portionCount + 1, password, folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlidePortions(fileName, slideIndex, model.SpecialSlideType.NotesSlide, shapeIndex, paragraphIndex, password, folderName).then((result4) => {
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

    it("create note slide", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const noteSlideText = "Note slide text";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName)

            const dto = new model.NotesSlide();
            dto.text = noteSlideText;

            const response = await api.createNotesSlide(fileName, 1, dto, "password", folderName)
            assert.equal(response.response.statusCode, 201);
            assert.equal((response.body as NotesSlide).text, noteSlideText);
        });
    });

    it("update note slide", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const noteSlideText = "Note slide text";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName)

            const dto = new model.NotesSlide();
            dto.text = noteSlideText;

            const response = await api.updateNotesSlide(fileName, 1, dto, "password", folderName)
            assert.equal(response.response.statusCode, 200);
            assert.equal((response.body as NotesSlide).text, noteSlideText);
        });
    });

    it("delete note slide", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";

            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName)

            const response = await api.deleteNotesSlide(fileName, 1, "password", folderName)
            assert.equal(response.response.statusCode, 200);
        });
    });
});
