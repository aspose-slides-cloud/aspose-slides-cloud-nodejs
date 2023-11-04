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

import { MasterSlides} from "../../sdk/model";

var assert = require('assert');
import * as model from "../../sdk/model";
import {TestUtils} from "../testUtils";
var fs = require('fs');

describe("MasterSlide tests", () => {
    it("master slides", () => {
        return TestUtils.runTest(() => {
            const sourceFile = "TemplateCV.pptx";
            const sourcePath = TestUtils.folderName + "/" + sourceFile;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.copyFile(TestUtils.tempFolderName + "/" + sourceFile, sourcePath).then(() => {
                    return api.getMasterSlides(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        assert.equal(1, (result.body as model.MasterSlides).slideList.length);
                        return api.getMasterSlide(TestUtils.fileName, 1, TestUtils.password, TestUtils.folderName).then((getResult) => {
                            assert.equal(200, getResult.response.statusCode);
                            assert.equal("Office Theme", (getResult.body as model.MasterSlide).name);
                            return api.copyMasterSlide(TestUtils.fileName, sourcePath, 1, null, null, null, TestUtils.password, TestUtils.folderName).then((copyResult) => {
                                assert.equal(201, copyResult.response.statusCode);
                                assert.equal("Digital portfolio", (copyResult.body as model.MasterSlide).name);
                                return api.getMasterSlides(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((listResult) => {
                                    assert.equal(200, listResult.response.statusCode);
                                    assert.equal(2, (listResult.body as model.MasterSlides).slideList.length);
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("shapes", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const shapeCount = 6;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getSpecialSlideShapes(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, TestUtils.password, TestUtils.folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(shapeCount, (result1.body as model.Shapes).shapesLinks.length);
                    const dto = new model.Shape();
                    dto.x = 100;
                    dto.y = 100;
                    dto.width = 500;
                    dto.height = 200;
                    dto.shapeType = model.GeometryShape.ShapeTypeEnum.Rectangle;
                    dto.text = "New shape";
                    return api.createSpecialSlideShape(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, dto, null, null, TestUtils.password, TestUtils.folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.text, (createResult.body as model.Shape).text);
                        return api.getSpecialSlideShapes(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, TestUtils.password, TestUtils.folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(shapeCount + 1, (result2.body as model.Shapes).shapesLinks.length);
                            dto.text = "Updated shape";
                            return api.updateSpecialSlideShape(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeCount + 1, dto, TestUtils.password, TestUtils.folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.text, (updateResult.body as model.Shape).text);
                                return api.getSpecialSlideShapes(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, TestUtils.password, TestUtils.folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(shapeCount + 1, (result3.body as model.Shapes).shapesLinks.length);
                                    return api.deleteSpecialSlideShape(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeCount + 1, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlideShapes(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, TestUtils.password, TestUtils.folderName).then((result4) => {
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
            const paragraphCount = 5;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getSpecialSlideParagraphs(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, TestUtils.password, TestUtils.folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(paragraphCount, (result1.body as model.Paragraphs).paragraphLinks.length);
                    var dto = new model.Paragraph();
                    dto.alignment = model.Paragraph.AlignmentEnum.Right;
                    const portion = new model.Portion();
                    portion.text = "New paragraph";
                    dto.portionList = [portion];
                    return api.createSpecialSlideParagraph(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, dto, null, TestUtils.password, TestUtils.folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.alignment, (createResult.body as model.Paragraph).alignment);
                        return api.getSpecialSlideParagraphs(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, TestUtils.password, TestUtils.folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(paragraphCount + 1, (result2.body as model.Paragraphs).paragraphLinks.length);
                            dto = new model.Paragraph();
                            dto.alignment = model.Paragraph.AlignmentEnum.Center;
                            return api.updateSpecialSlideParagraph(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphCount + 1, dto, TestUtils.password, TestUtils.folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.alignment, (updateResult.body as model.Paragraph).alignment);
                                return api.getSpecialSlideParagraphs(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, TestUtils.password, TestUtils.folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(paragraphCount + 1, (result3.body as model.Paragraphs).paragraphLinks.length);
                                    return api.deleteSpecialSlideParagraph(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphCount + 1, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlideParagraphs(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, TestUtils.password, TestUtils.folderName).then((result4) => {
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
            const paragraphIndex = 3;
            const portionCount = 1;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getSpecialSlidePortions(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(portionCount, (result1.body as model.Portions).items.length);
                    const dto = new model.Portion();
                    dto.fontBold = model.Portion.FontBoldEnum.True;
                    dto.text = "New portion";
                    return api.createSpecialSlidePortion(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, dto, null, TestUtils.password, TestUtils.folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.fontBold, (createResult.body as model.Portion).fontBold);
                        assert.equal(dto.text, (createResult.body as model.Portion).text);
                        return api.getSpecialSlidePortions(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(portionCount + 1, (result2.body as model.Portions).items.length);
                            const dto2 = new model.Portion();
                            dto2.fontHeight = 22;
                            dto2.text = "Updated portion";
                            return api.updateSpecialSlidePortion(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, portionCount + 1, dto2, TestUtils.password, TestUtils.folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.fontBold, (updateResult.body as model.Portion).fontBold);
                                assert.equal(dto2.fontHeight, (updateResult.body as model.Portion).fontHeight);
                                assert.equal(dto2.text, (updateResult.body as model.Portion).text);
                                return api.getSpecialSlidePortions(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(portionCount + 1, (result2.body as model.Portions).items.length);
                                    return api.deleteSpecialSlidePortion(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, portionCount + 1, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlidePortions(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, TestUtils.password, TestUtils.folderName).then((result4) => {
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

    it("animation", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getSpecialSlideAnimation(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, null, null, TestUtils.password, TestUtils.folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(1, (result1.body as model.SlideAnimation).mainSequence.length);
                    const dto = new model.SlideAnimation();
                    const effect1 = new model.Effect();
                    effect1.type = model.Effect.TypeEnum.Blink;
                    effect1.shapeIndex = 2;
                    const effect2 = new model.Effect();
                    effect2.type = model.Effect.TypeEnum.Appear;
                    effect2.shapeIndex = 3;
                    dto.mainSequence = [effect1, effect2];
                    return api.setSpecialSlideAnimation(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, dto, TestUtils.password, TestUtils.folderName).then((createResult) => {
                        assert.equal(200, createResult.response.statusCode);
                        assert.equal(2, (createResult.body as model.SlideAnimation).mainSequence.length);
                        return api.getSpecialSlideAnimation(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, 3, null, TestUtils.password, TestUtils.folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(1, (result2.body as model.SlideAnimation).mainSequence.length);
                            return api.deleteSpecialSlideAnimationEffect(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, 2, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                                assert.equal(200, deleteResult.response.statusCode);
                                assert.equal(1, (deleteResult.body as model.SlideAnimation).mainSequence.length);
                                return api.getSpecialSlideAnimation(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, 3, null, TestUtils.password, TestUtils.folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(0, (result3.body as model.SlideAnimation).mainSequence.length);
                                    return api.deleteSpecialSlideAnimation(TestUtils.fileName, slideIndex, model.SpecialSlideType.MasterSlide, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        assert.equal(0, (deleteResult.body as model.SlideAnimation).mainSequence.length);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("delete unused", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const response = await api.deleteUnusedMasterSlides(TestUtils.fileName, true, TestUtils.password, TestUtils.folderName);
            assert.equal(response.response.statusCode, 200);
            assert.equal((response.body as MasterSlides).slideList.length, 1);
        });
    });

    it("delete unused online", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const response = await api.deleteUnusedMasterSlidesOnline(fs.createReadStream(TestUtils.localFilePath), true, TestUtils.password);
            assert.equal(response.response.statusCode, 200);
            assert(response.body.length > 0);
        });
    });
});
