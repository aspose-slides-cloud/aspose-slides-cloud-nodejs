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
var fs = require('fs');
import * as sdkApi from "../sdk/api";
import * as model from "../sdk/model";
import { TestInitializer } from "./testInitializer";

describe("Create tests", () => {
    it("empty", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.deleteFile(folderName + "/" + fileName).then(() => {
                return api.createPresentation(fileName, null, null, null, folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                });
            });
        });
    });

    it("from request", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.deleteFile(folderName + "/" + fileName).then(() => {
                return api.createPresentation(fileName, fs.createReadStream("TestData/test.pptx"), "password", null, folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                });
            });
        });
    });

    it("from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const newFileName = "test2.pptx";
            const api = TestInitializer.getApi();
            return api.deleteFile(folderName + "/" + newFileName).then(() => {
                return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                    const sourcePath = folderName + "/" + fileName;
                    return api.createPresentationFromSource(newFileName, sourcePath, "password", null, null, folderName).then((result) => {
                        assert.equal(201, result.response.statusCode);
                    });
                });
            });
        });
    });

    it("from template", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const templateFileName = "TemplateCV.pptx";
            const api = TestInitializer.getApi();
            return api.deleteFile(folderName + "/" + fileName).then(() => {
                return api.copyFile("TempTests/" + templateFileName, folderName + "/" + templateFileName).then(() => {
                    const templatePath = folderName + "/" + templateFileName;
                    const data = "<staff><person><name>John Doe</name><address><line1>10 Downing Street</line1><line2>London</line2></address><phone>+457 123456</phone><bio>Hi, I'm John and this is my CV</bio><skills><skill><title>C#</title><level>Excellent</level></skill><skill><title>C++</title><level>Good</level></skill><skill><title>Java</title><level>Average</level></skill></skills></person></staff>";
                    return api.createPresentationFromTemplate(fileName, templatePath, data, null, null, null, null, folderName).then((result) => {
                        assert.equal(201, result.response.statusCode);
                    });
                });
            });
        });
    });

    it("from HTML", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.deleteFile(folderName + "/" + fileName).then(() => {
                return api.importFromHtml(fileName, "<html><body>New Content</body></html>", null, folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                });
            });
        });
    });

    it("append from HTML", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSlides(fileName, password, folderName).then((r1) => {
                    const slideCount = (r1.body as model.Slides).slideList.length;
                    return api.importFromHtml(fileName, "<html><body>New Content</body></html>", password, folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        return api.getSlides(fileName, password, folderName).then((r2) => {
                            assert.equal(slideCount + 1, (r2.body as model.Slides).slideList.length);
                        });
                    });
                });
            });
        });
    });

    it("from PDF", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.deleteFile(folderName + "/" + fileName).then(() => {
                return api.importFromPdf(fileName, fs.createReadStream("TestData/test.pdf"), null, folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                });
            });
        });
    });

    it("append from PDF", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSlides(fileName, password, folderName).then((r1) => {
                    const slideCount = (r1.body as model.Slides).slideList.length;
                    return api.importFromPdf(fileName, fs.createReadStream("TestData/test.pdf"), password, folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        return api.getSlides(fileName, password, folderName).then((r2) => {
                            assert.equal(slideCount + 4, (r2.body as model.Slides).slideList.length);
                        });
                    });
                });
            });
        });
    });
});

describe("Convert tests", () => {
    it("post from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            return api.convert(fs.createReadStream("TestData/test.pptx"), model.ExportFormat.Pdf, "password").then((result) => {
                assert.equal(200, result.response.statusCode);
                return api.convert(fs.createReadStream("TestData/test.pptx"), model.ExportFormat.Pdf, "password", null, null, [ 2, 4 ]).then((resultSlides) => {
                    assert.equal(200, resultSlides.response.statusCode);
                    assert(result.body.length > resultSlides.body.length);
                });
            });
        });
    });

    it("put from request", () => {
        return TestInitializer.runTest(() => {
            const outPath = "TestData/test.pdf";
            const api = TestInitializer.getApi();
            return api.convertAndSave(fs.createReadStream("TestData/test.pptx"), model.ExportFormat.Pdf, outPath, "password").then((putResult) => {
                assert.equal(200, putResult.response.statusCode);
                return api.objectExists(outPath).then((existsResult) => {
                    assert.equal(200, existsResult.response.statusCode);
                    assert((existsResult.body as model.ObjectExist).exists);
                });
            });
        });
    });

    it("post from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pdf";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadPresentation(fileName, model.ExportFormat.Html5, null, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("put from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const outPath = "TestData/test.pdf";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.savePresentation(fileName, model.ExportFormat.Pdf, outPath, null, "password", folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    return api.objectExists(outPath).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });

    it("with options from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            return api.convert(fs.createReadStream("TestData/test.pptx"), model.ExportFormat.Pdf, "password").then((result1) => {
                assert.equal(200, result1.response.statusCode);
                const options = new model.PdfExportOptions();
                options.drawSlidesFrame = true;
                return api.convert(fs.createReadStream("TestData/test.pptx"), model.ExportFormat.Pdf, "password", null, null, null, options).then((result2) => {
                    assert.equal(200, result2.response.statusCode);
                    assert.notEqual(result1.body.length, result2.body.length);
                });
            });
        });
    });                                             

    it("with options from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadPresentation(fileName, model.ExportFormat.Png, null, "password", folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    const options = new model.ImageExportOptions();
                    options.width = 480;
                    options.height = 360;
                    return api.downloadPresentation(fileName, model.ExportFormat.Png, options, "password", folderName).then((result2) => {
                        assert.equal(200, result2.response.statusCode);
                        assert(result1.body.length > result2.body.length);
                    });
                });
            });
        });
    });                                             

    it("slide post from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            return api.downloadSlideOnline(fs.createReadStream("TestData/test.pptx"), 1, model.SlideExportFormat.Pdf, null, null, "password").then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("slide put from request", () => {
        return TestInitializer.runTest(() => {
            const outPath = "TestData/test.pdf";
            const api = TestInitializer.getApi();
            const data = fs.createReadStream("TestData/test.pptx");
            return api.saveSlideOnline(data, 1, model.SlideExportFormat.Pdf, outPath, null, null, "password").then((putResult) => {
                assert.equal(200, putResult.response.statusCode);
                return api.objectExists(outPath).then((existsResult) => {
                    assert.equal(200, existsResult.response.statusCode);
                    assert((existsResult.body as model.ObjectExist).exists);
                });
            });
        });
    });

    it("slide post from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadSlide(fileName, 1, model.SlideExportFormat.Pdf, null, null, null, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("slide put from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const outPath = "TestData/test.pdf";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.saveSlide(fileName, 1, model.SlideExportFormat.Pdf, outPath, null, null, null, "password", folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    return api.objectExists(outPath).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });

    it("slide with options from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            return api.downloadSlideOnline(fs.createReadStream("TestData/test.pptx"), 1, model.SlideExportFormat.Pdf, null, null, "password").then((result1) => {
                assert.equal(200, result1.response.statusCode);
                const options = new model.PdfExportOptions();
                options.drawSlidesFrame = true;
                return api.downloadSlideOnline(fs.createReadStream("TestData/test.pptx"), 1, model.SlideExportFormat.Pdf, null, null, "password", null, null, options).then((result2) => {
                    assert.equal(200, result2.response.statusCode);
                    assert.notEqual(result1.body.length, result2.body.length);
                });
            });
        });
    });                                             

    it("slide with options from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadSlide(fileName, 1, model.SlideExportFormat.Pdf, null, null, null, "password", folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    const options = new model.PdfExportOptions();
                    options.drawSlidesFrame = true;
                    return api.downloadSlide(fileName, 1, model.SlideExportFormat.Pdf, options, null, null, "password", folderName).then((result2) => {
                        assert.equal(200, result2.response.statusCode);
                        assert.notEqual(result1.body.length, result2.body.length);
                    });
                });
            });
        });
    });                                             

    it("shape post from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            return api.downloadShapeOnline(fs.createReadStream("TestData/test.pptx"), 1, 3, model.ShapeExportFormat.Png, null, null, null, "password").then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("shape put from request", () => {
        return TestInitializer.runTest(() => {
            const outPath = "TestData/test.png";
            const api = TestInitializer.getApi();
            const data = fs.createReadStream("TestData/test.pptx");
            return api.saveShapeOnline(data, 1, 1, model.ShapeExportFormat.Png, outPath, null, null, null, "password").then((putResult) => {
                assert.equal(200, putResult.response.statusCode);
                return api.objectExists(outPath).then((existsResult) => {
                    assert.equal(200, existsResult.response.statusCode);
                    assert((existsResult.body as model.ObjectExist).exists);
                });
            });
        });
    });

    it("shape post from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadShape(fileName, 1, 1, model.ShapeExportFormat.Png, null, null, null, null, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("shape put from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const outPath = "TestData/test.pdf";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.saveShape(fileName, 1, 1, model.ShapeExportFormat.Png, outPath, null, null, null, null, "password", folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    return api.objectExists(outPath).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });
});

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
                    dto.portionList = [ portion ];
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
});

describe("MasterSlide tests", () => {
    it("master slides", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const sourceFile = "TemplateCV.pptx";
            const sourcePath = folderName + "/" + sourceFile;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.copyFile("TempTests/" + sourceFile, folderName + "/" + sourceFile).then(() => {
                    return api.getMasterSlides(fileName, password, folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        assert.equal(1, (result.body as model.MasterSlides).slideList.length);
                        return api.getMasterSlide(fileName, 1, password, folderName).then((getResult) => {
                            assert.equal(200, getResult.response.statusCode);
                            assert.equal("Office Theme", (getResult.body as model.MasterSlide).name);
                            return api.copyMasterSlide(fileName, sourcePath, 1, null, null, null, "password", folderName).then((copyResult) => {
                                assert.equal(201, copyResult.response.statusCode);
                                assert.equal("Digital portfolio", (copyResult.body as model.MasterSlide).name);
                                return api.getMasterSlides(fileName, password, folderName).then((listResult) => {
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
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const shapeCount = 6;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSpecialSlideShapes(fileName, slideIndex, model.SpecialSlideType.MasterSlide, password, folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(shapeCount, (result1.body as model.Shapes).shapesLinks.length);
                    const dto = new model.Shape();
                    dto.x = 100;
                    dto.y = 100;
                    dto.width = 500;
                    dto.height = 200;
                    dto.shapeType = model.GeometryShape.ShapeTypeEnum.Rectangle;
                    dto.text = "New shape";
                    return api.createSpecialSlideShape(fileName, slideIndex, model.SpecialSlideType.MasterSlide, dto, null, null, password, folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.text, (createResult.body as model.Shape).text);
                        return api.getSpecialSlideShapes(fileName, slideIndex, model.SpecialSlideType.MasterSlide, password, folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(shapeCount + 1, (result2.body as model.Shapes).shapesLinks.length);
                            dto.text = "Updated shape";
                            return api.updateSpecialSlideShape(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeCount + 1, dto, password, folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.text, (updateResult.body as model.Shape).text);
                                return api.getSpecialSlideShapes(fileName, slideIndex, model.SpecialSlideType.MasterSlide, password, folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(shapeCount + 1, (result3.body as model.Shapes).shapesLinks.length);
                                    return api.deleteSpecialSlideShape(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeCount + 1, password, folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlideShapes(fileName, slideIndex, model.SpecialSlideType.MasterSlide, password, folderName).then((result4) => {
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
            const paragraphCount = 5;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSpecialSlideParagraphs(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, password, folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(paragraphCount, (result1.body as model.Paragraphs).paragraphLinks.length);
                    var dto = new model.Paragraph();
                    dto.alignment = model.Paragraph.AlignmentEnum.Right;
                    const portion = new model.Portion();
                    portion.text = "New paragraph";
                    dto.portionList = [ portion ];
                    return api.createSpecialSlideParagraph(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, dto, null, password, folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.alignment, (createResult.body as model.Paragraph).alignment);
                        return api.getSpecialSlideParagraphs(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, password, folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(paragraphCount + 1, (result2.body as model.Paragraphs).paragraphLinks.length);
                            dto = new model.Paragraph();
                            dto.alignment = model.Paragraph.AlignmentEnum.Center;
                            return api.updateSpecialSlideParagraph(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphCount + 1, dto, password, folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.alignment, (updateResult.body as model.Paragraph).alignment);
                                return api.getSpecialSlideParagraphs(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, password, folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(paragraphCount + 1, (result3.body as model.Paragraphs).paragraphLinks.length);
                                    return api.deleteSpecialSlideParagraph(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphCount + 1, password, folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlideParagraphs(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, password, folderName).then((result4) => {
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
            const paragraphIndex = 3;
            const portionCount = 1;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSpecialSlidePortions(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, password, folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(portionCount, (result1.body as model.Portions).items.length);
                    const dto = new model.Portion();
                    dto.fontBold = model.Portion.FontBoldEnum.True;
                    dto.text = "New portion";
                    return api.createSpecialSlidePortion(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, dto, null, password, folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.fontBold, (createResult.body as model.Portion).fontBold);
                        assert.equal(dto.text, (createResult.body as model.Portion).text);
                        return api.getSpecialSlidePortions(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, password, folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(portionCount + 1, (result2.body as model.Portions).items.length);
                            const dto2 = new model.Portion();
                            dto2.fontHeight = 22;
                            dto2.text = "Updated portion";
                            return api.updateSpecialSlidePortion(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, portionCount + 1, dto2, password, folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.fontBold, (updateResult.body as model.Portion).fontBold);
                                assert.equal(dto2.fontHeight, (updateResult.body as model.Portion).fontHeight);
                                assert.equal(dto2.text, (updateResult.body as model.Portion).text);
                                return api.getSpecialSlidePortions(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, password, folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(portionCount + 1, (result2.body as model.Portions).items.length);
                                    return api.deleteSpecialSlidePortion(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, portionCount + 1, password, folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlidePortions(fileName, slideIndex, model.SpecialSlideType.MasterSlide, shapeIndex, paragraphIndex, password, folderName).then((result4) => {
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
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSpecialSlideAnimation(fileName, slideIndex, model.SpecialSlideType.MasterSlide, null, null, password, folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(1, (result1.body as model.SlideAnimation).mainSequence.length);
                    const dto = new model.SlideAnimation();
                    const effect1 = new model.Effect();
                    effect1.type = model.Effect.TypeEnum.Blink;
                    effect1.shapeIndex = 2;
                    const effect2 = new model.Effect();
                    effect2.type = model.Effect.TypeEnum.Appear;
                    effect2.shapeIndex = 3;
                    dto.mainSequence = [ effect1, effect2 ];
                    return api.setSpecialSlideAnimation(fileName, slideIndex, model.SpecialSlideType.MasterSlide, dto, password, folderName).then((createResult) => {
                        assert.equal(200, createResult.response.statusCode);
                        assert.equal(2, (createResult.body as model.SlideAnimation).mainSequence.length);
                        return api.getSpecialSlideAnimation(fileName, slideIndex, model.SpecialSlideType.MasterSlide, 3, null, password, folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(1, (result2.body as model.SlideAnimation).mainSequence.length);
                            return api.deleteSpecialSlideAnimationEffect(fileName, slideIndex, model.SpecialSlideType.MasterSlide, 2, password, folderName).then((deleteResult) => {
                                assert.equal(200, deleteResult.response.statusCode);
                                assert.equal(1, (deleteResult.body as model.SlideAnimation).mainSequence.length);
                                return api.getSpecialSlideAnimation(fileName, slideIndex, model.SpecialSlideType.MasterSlide, 3, null, password, folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(0, (result3.body as model.SlideAnimation).mainSequence.length);
                                    return api.deleteSpecialSlideAnimation(fileName, slideIndex, model.SpecialSlideType.MasterSlide, password, folderName).then((deleteResult) => {
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
});

describe("LayoutSlide tests", () => {
    it("layout slides", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const sourceFile = "TemplateCV.pptx";
            const sourcePath = folderName + "/" + sourceFile;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.copyFile("TempTests/" + sourceFile, folderName + "/" + sourceFile).then(() => {
                    return api.getLayoutSlides(fileName, password, folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        assert.equal(11, (result.body as model.MasterSlides).slideList.length);
                        return api.getLayoutSlide(fileName, 1, password, folderName).then((getResult) => {
                            assert.equal(200, getResult.response.statusCode);
                            assert.equal("Title Slide", (getResult.body as model.MasterSlide).name);
                            return api.copyLayoutSlide(fileName, sourcePath, 2, null, null, password, folderName).then((copyResult) => {
                                assert.equal(201, copyResult.response.statusCode);
                                assert.equal("Title and Content", (copyResult.body as model.MasterSlide).name);
                                return api.getLayoutSlides(fileName, password, folderName).then((listResult) => {
                                    assert.equal(200, listResult.response.statusCode);
                                    assert.equal(12, (listResult.body as model.MasterSlides).slideList.length);
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("shapes", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const shapeCount = 6;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSpecialSlideShapes(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, password, folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(shapeCount, (result1.body as model.Shapes).shapesLinks.length);
                    const dto = new model.Shape();
                    dto.x = 100;
                    dto.y = 100;
                    dto.width = 500;
                    dto.height = 200;
                    dto.shapeType = model.GeometryShape.ShapeTypeEnum.Rectangle;
                    dto.text = "New shape";
                    return api.createSpecialSlideShape(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, dto, null, null, password, folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.text, (createResult.body as model.Shape).text);
                        return api.getSpecialSlideShapes(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, password, folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(shapeCount + 1, (result2.body as model.Shapes).shapesLinks.length);
                            dto.text = "Updated shape";
                            return api.updateSpecialSlideShape(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeCount + 1, dto, password, folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.text, (updateResult.body as model.Shape).text);
                                return api.getSpecialSlideShapes(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, password, folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(shapeCount + 1, (result3.body as model.Shapes).shapesLinks.length);
                                    return api.deleteSpecialSlideShape(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeCount + 1, password, folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlideShapes(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, password, folderName).then((result4) => {
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
                return api.getSpecialSlideParagraphs(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, password, folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(paragraphCount, (result1.body as model.Paragraphs).paragraphLinks.length);
                    var dto = new model.Paragraph();
                    dto.alignment = model.Paragraph.AlignmentEnum.Right;
                    const portion = new model.Portion();
                    portion.text = "New paragraph";
                    dto.portionList = [ portion ];
                    return api.createSpecialSlideParagraph(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, dto, null, password, folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.alignment, (createResult.body as model.Paragraph).alignment);
                        return api.getSpecialSlideParagraphs(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, password, folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(paragraphCount + 1, (result2.body as model.Paragraphs).paragraphLinks.length);
                            dto = new model.Paragraph();
                            dto.alignment = model.Paragraph.AlignmentEnum.Center;
                            return api.updateSpecialSlideParagraph(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, paragraphCount + 1, dto, password, folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.alignment, (updateResult.body as model.Paragraph).alignment);
                                return api.getSpecialSlideParagraphs(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, password, folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(paragraphCount + 1, (result3.body as model.Paragraphs).paragraphLinks.length);
                                    return api.deleteSpecialSlideParagraph(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, paragraphCount + 1, password, folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlideParagraphs(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, password, folderName).then((result4) => {
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
                return api.getSpecialSlidePortions(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, paragraphIndex, password, folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(portionCount, (result1.body as model.Portions).items.length);
                    const dto = new model.Portion();
                    dto.fontBold = model.Portion.FontBoldEnum.True;
                    dto.text = "New portion";
                    return api.createSpecialSlidePortion(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, paragraphIndex, dto, null, password, folderName).then((createResult) => {
                        assert.equal(201, createResult.response.statusCode);
                        assert.equal(dto.fontBold, (createResult.body as model.Portion).fontBold);
                        assert.equal(dto.text, (createResult.body as model.Portion).text);
                        return api.getSpecialSlidePortions(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, paragraphIndex, password, folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(portionCount + 1, (result2.body as model.Portions).items.length);
                            const dto2 = new model.Portion();
                            dto2.fontHeight = 22;
                            dto2.text = "Updated portion";
                            return api.updateSpecialSlidePortion(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, paragraphIndex, portionCount + 1, dto2, password, folderName).then((updateResult) => {
                                assert.equal(200, updateResult.response.statusCode);
                                assert.equal(dto.fontBold, (updateResult.body as model.Portion).fontBold);
                                assert.equal(dto2.fontHeight, (updateResult.body as model.Portion).fontHeight);
                                assert.equal(dto2.text, (updateResult.body as model.Portion).text);
                                return api.getSpecialSlidePortions(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, paragraphIndex, password, folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(portionCount + 1, (result2.body as model.Portions).items.length);
                                    return api.deleteSpecialSlidePortion(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, paragraphIndex, portionCount + 1, password, folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getSpecialSlidePortions(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, shapeIndex, paragraphIndex, password, folderName).then((result4) => {
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
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSpecialSlideAnimation(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, null, null, password, folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    assert.equal(1, (result1.body as model.SlideAnimation).mainSequence.length);
                    const dto = new model.SlideAnimation();
                    const effect1 = new model.Effect();
                    effect1.type = model.Effect.TypeEnum.Blink;
                    effect1.shapeIndex = 2;
                    const effect2 = new model.Effect();
                    effect2.type = model.Effect.TypeEnum.Appear;
                    effect2.shapeIndex = 3;
                    dto.mainSequence = [ effect1, effect2 ];
                    return api.setSpecialSlideAnimation(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, dto, password, folderName).then((createResult) => {
                        assert.equal(200, createResult.response.statusCode);
                        assert.equal(2, (createResult.body as model.SlideAnimation).mainSequence.length);
                        return api.getSpecialSlideAnimation(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, 3, null, password, folderName).then((result2) => {
                            assert.equal(200, result2.response.statusCode);
                            assert.equal(1, (result2.body as model.SlideAnimation).mainSequence.length);
                            return api.deleteSpecialSlideAnimationEffect(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, 2, password, folderName).then((deleteResult) => {
                                assert.equal(200, deleteResult.response.statusCode);
                                assert.equal(1, (deleteResult.body as model.SlideAnimation).mainSequence.length);
                                return api.getSpecialSlideAnimation(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, 3, null, password, folderName).then((result3) => {
                                    assert.equal(200, result3.response.statusCode);
                                    assert.equal(0, (result3.body as model.SlideAnimation).mainSequence.length);
                                    return api.deleteSpecialSlideAnimation(fileName, slideIndex, model.SpecialSlideType.LayoutSlide, password, folderName).then((deleteResult) => {
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
});

describe("Shape tests", () => {
    it("shape add", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Shape();
                dto.shapeType = model.GeometryShape.ShapeTypeEnum.Callout1;
                return api.createShape(fileName, 1, dto, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.Shape);
                });
            });
        });
    });

    it("shape empty", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.createShape(fileName, 1, new model.Shape(), null, null, "password", folderName)
                    .then(() => assert.fail("Shape with undefinined type should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("graphicalObject empty", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.createShape(fileName, 1, new model.GraphicalObject(), null, null, "password", folderName)
                    .then(() => assert.fail("GraphicalObject should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("pictureFrame add", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.PictureFrame();
                const fill = new model.PictureFill();
                fill.base64Data = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY5g+ffp/AAZTAsWGL27gAAAAAElFTkSuQmCC";
                dto.pictureFillFormat = fill;
                return api.createShape(fileName, 1, dto, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.PictureFrame);
                });
            });
        });
    });

    it("pictureFrame empty", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.createShape(fileName, 1, new model.PictureFrame(), null, null, "password", folderName)
                    .then(() => assert.fail("PictureFrame with undefinined data should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("audioFrame add", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.AudioFrame();
                dto.base64Data = "bXAzc2FtcGxl";
                return api.createShape(fileName, 1, dto, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.AudioFrame);
                });
            });
        });
    });

    it("audioFrame empty", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.createShape(fileName, 1, new model.AudioFrame(), null, null, "password", folderName)
                    .then(() => assert.fail("AudioFrame with undefinined data should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("videoFrame add", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.VideoFrame();
                dto.base64Data = "bXAzc2FtcGxl";
                return api.createShape(fileName, 1, dto, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.VideoFrame);
                });
            });
        });
    });

    it("videoFrame empty", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.createShape(fileName, 1, new model.VideoFrame(), null, null, "password", folderName)
                    .then(() => assert.fail("VideoFrame with undefinined data should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("oleObjectFrame empty", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.createShape(fileName, 1, new model.OleObjectFrame(), null, null, "password", folderName)
                    .then(() => assert.fail("OleObjectFrame  should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("smartArt add", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.SmartArt();
                dto.x = 0;
                dto.y = 0;
                dto.width = 300;
                dto.height = 200;
                dto.layout = model.SmartArt.LayoutEnum.BasicProcess;
                dto.quickStyle = model.SmartArt.QuickStyleEnum.SimpleFill;
                dto.colorStyle = model.SmartArt.ColorStyleEnum.ColoredFillAccent1;
                const node1 = new model.SmartArtNode();
                node1.text = "First";
                node1.orgChartLayout = model.SmartArtNode.OrgChartLayoutEnum.Initial;
                const subNode1 = new model.SmartArtNode();
                subNode1.text = "SubFirst";
                subNode1.orgChartLayout = model.SmartArtNode.OrgChartLayoutEnum.Initial;
                node1.nodes = [ subNode1 ];
                const node2 = new model.SmartArtNode();
                node2.text = "Second";
                node2.orgChartLayout = model.SmartArtNode.OrgChartLayoutEnum.Initial;
                dto.nodes = [ node1, node2 ];
                return api.createShape(fileName, 1, dto, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.SmartArt);
                });
            });
        });
    });

    it("smartArt empty", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.createShape(fileName, 1, new model.SmartArt(), null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.SmartArt);
                });
            });
        });
    });

    it("chart empty", () => { //See Chart tests for non-empty chart examples
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.createShape(fileName, 1, new model.Chart(), null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.Chart);
                });
            });
        });
    });

    it("table add", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Table();
                dto.x = 30;
                dto.y = 20;
                dto.style = model.Table.StyleEnum.MediumStyle2Accent1;
                const row1 = new model.TableRow();
                const cell11 = new model.TableCell();
                cell11.text = "0.1";
                const cell12 = new model.TableCell();
                cell12.text = "0.2";
                const cell13 = new model.TableCell();
                cell13.text = "0.3";
                const cell14 = new model.TableCell();
                cell14.text = "0.4";
                row1.cells = [ cell11, cell12, cell13, cell14 ];
                const row2 = new model.TableRow();
                const cell21 = new model.TableCell();
                cell21.text = "1";
                const cell22 = new model.TableCell();
                cell22.text = "2-3";
                cell22.colSpan = 2;
                cell22.rowSpan = 2;
                const cell24 = new model.TableCell();
                cell24.text = "4";
                row2.cells = [ cell21, cell22, cell24 ];
                const row3 = new model.TableRow();
                const cell31 = new model.TableCell();
                cell31.text = "first";
                const cell32 = new model.TableCell();
                cell32.text = "last";
                row3.cells = [ cell31, cell32 ];
                const row4 = new model.TableRow();
                const cell41 = new model.TableCell();
                cell41.text = "3.1";
                const cell42 = new model.TableCell();
                cell42.text = "3.2";
                const cell43 = new model.TableCell();
                cell43.text = "3.3";
                const cell44 = new model.TableCell();
                cell44.text = "3.4";
                row4.cells = [ cell41, cell42, cell43, cell44 ];
                const row5 = new model.TableRow();
                const cell51 = new model.TableCell();
                cell51.text = "4.1";
                const cell52 = new model.TableCell();
                cell52.text = "4.2";
                const cell53 = new model.TableCell();
                cell53.text = "4.3";
                const cell54 = new model.TableCell();
                cell54.text = "4.4";
                row5.cells = [ cell51, cell52, cell53, cell54 ];
                dto.rows = [ row1, row2, row3, row4, row5 ];
                const column1 = new model.TableColumn();
                column1.width = 100;
                const column2 = new model.TableColumn();
                column2.width = 100;
                const column3 = new model.TableColumn();
                column3.width = 100;
                const column4 = new model.TableColumn();
                column4.width = 100;
                dto.columns = [ column1, column2, column3, column4 ];
                dto.firstRow = true;
                dto.horizontalBanding = true;
                return api.createShape(fileName, 1, dto, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.SmartArt);
                });
            });
        });
    });

    it("table empty", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.createShape(fileName, 1, new model.Table(), null, null, "password", folderName)
                    .then(() => assert.fail("Table with undefinined cell data should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("groupShape empty", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.createShape(fileName, 1, new model.GroupShape(), null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.GroupShape);
                });
            });
        });
    });

    it("connector add", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Connector();
                dto.shapeType = model.GeometryShape.ShapeTypeEnum.BentConnector3;
                const start = new model.ResourceUri();
                start.href = "https://api.aspose.cloud/v3.0/slides/myPresentation.pptx/slides/1/shapes/1";
                dto.startShapeConnectedTo = start;
                const end = new model.ResourceUri();
                end.href = "https://api.aspose.cloud/v3.0/slides/myPresentation.pptx/slides/1/shapes/2";
                dto.endShapeConnectedTo = end;
                return api.createShape(fileName, 1, dto, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.SmartArt);
                });
            });
        });
    });

    it("connector empty", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.createShape(fileName, 1, new model.Connector(), null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.Connector);
                });
            });
        });
    });

    it("align", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 3;
            const shape1Index = 1;
            const shape2Index = 2;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShape(fileName, slideIndex, shape1Index, password, folderName).then((getResult11) => {
                    assert.equal(200, getResult11.response.statusCode);
                    return api.getShape(fileName, slideIndex, shape2Index, password, folderName).then((getResult12) => {
                        assert.equal(200, getResult12.response.statusCode);
                        assert((getResult11.body as model.ShapeBase).x != (getResult12.body as model.ShapeBase).x);
                        assert((getResult11.body as model.ShapeBase).y != (getResult12.body as model.ShapeBase).y);
                        return api.alignShapes(fileName, slideIndex, model.ShapesAlignmentType.AlignTop, null, null, password, folderName).then((result1) => {
                            assert.equal(200, result1.response.statusCode);
                            return api.getShape(fileName, slideIndex, shape1Index, password, folderName).then((getResult21) => {
                                assert.equal(200, getResult21.response.statusCode);
                                return api.getShape(fileName, slideIndex, shape2Index, password, folderName).then((getResult22) => {
                                    assert.equal(200, getResult22.response.statusCode);
                                    assert((getResult21.body as model.ShapeBase).x != (getResult22.body as model.ShapeBase).x);
                                    assert(Math.abs((getResult21.body as model.ShapeBase).y - (getResult22.body as model.ShapeBase).y) < 1);
                                    return api.alignShapes(fileName, slideIndex, model.ShapesAlignmentType.AlignLeft, true, [1, 2], password, folderName).then((result2) => {
                                        assert.equal(200, result2.response.statusCode);
                                        return api.getShape(fileName, slideIndex, shape1Index, password, folderName).then((getResult31) => {
                                            assert.equal(200, getResult31.response.statusCode);
                                            return api.getShape(fileName, slideIndex, shape2Index, password, folderName).then((getResult32) => {
                                                assert.equal(200, getResult32.response.statusCode);
                                                assert(Math.abs((getResult31.body as model.ShapeBase).x - (getResult32.body as model.ShapeBase).x) < 1);
                                                assert(Math.abs((getResult31.body as model.ShapeBase).y - (getResult32.body as model.ShapeBase).y) < 1);
                                                assert(Math.abs((getResult31.body as model.ShapeBase).x) < 1);
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
    });

    it("align group", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const path = "4/shapes";
            const shape1Index = 1;
            const shape2Index = 2;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSubshape(fileName, slideIndex, path, shape1Index, password, folderName).then((getResult11) => {
                    assert.equal(200, getResult11.response.statusCode);
                    return api.getSubshape(fileName, slideIndex, path, shape2Index, password, folderName).then((getResult12) => {
                        assert.equal(200, getResult12.response.statusCode);
                        assert((getResult11.body as model.ShapeBase).x != (getResult12.body as model.ShapeBase).x);
                        assert((getResult11.body as model.ShapeBase).y != (getResult12.body as model.ShapeBase).y);
                        return api.alignSubshapes(fileName, slideIndex, path, model.ShapesAlignmentType.AlignTop, null, null, password, folderName).then((result1) => {
                            assert.equal(200, result1.response.statusCode);
                            return api.getSubshape(fileName, slideIndex, path, shape1Index, password, folderName).then((getResult21) => {
                                assert.equal(200, getResult21.response.statusCode);
                                return api.getSubshape(fileName, slideIndex, path, shape2Index, password, folderName).then((getResult22) => {
                                    assert.equal(200, getResult22.response.statusCode);
                                    assert((getResult21.body as model.ShapeBase).x != (getResult22.body as model.ShapeBase).x);
                                    assert(Math.abs((getResult21.body as model.ShapeBase).y - (getResult22.body as model.ShapeBase).y) < 1);
                                    return api.alignSubshapes(fileName, slideIndex, path, model.ShapesAlignmentType.AlignLeft, true, [1, 2], password, folderName).then((result2) => {
                                        assert.equal(200, result2.response.statusCode);
                                        return api.getSubshape(fileName, slideIndex, path, shape1Index, password, folderName).then((getResult31) => {
                                            assert.equal(200, getResult31.response.statusCode);
                                            return api.getSubshape(fileName, slideIndex, path, shape2Index, password, folderName).then((getResult32) => {
                                                assert.equal(200, getResult32.response.statusCode);
                                                assert(Math.abs((getResult31.body as model.ShapeBase).x - (getResult32.body as model.ShapeBase).x) < 1);
                                                assert(Math.abs((getResult31.body as model.ShapeBase).y - (getResult32.body as model.ShapeBase).y) < 1);
                                                assert(Math.abs((getResult31.body as model.ShapeBase).x) < 1);
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
    });

    it("geometry get", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShapeGeometryPath(fileName, 4, 2, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert((result.body as model.GeometryPaths).paths);
                    assert.equal(1, (result.body as model.GeometryPaths).paths.length);
                });
            });
        });
    });

    it("geometry set", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.GeometryPaths();
                const path = new model.GeometryPath();
                const start = new model.MoveToPathSegment();
                start.x = 0;
                start.y = 0;
                const line1 = new model.MoveToPathSegment();
                line1.x = 0;
                line1.y = 200;
                const line2 = new model.MoveToPathSegment();
                line2.x = 200;
                line2.y = 300;
                const line3 = new model.MoveToPathSegment();
                line3.x = 400;
                line3.y = 200;
                const line4 = new model.MoveToPathSegment();
                line4.x = 400;
                line4.y = 0;
                const end = new model.ClosePathSegment();
                path.pathData = [ start, line1, line2, line3, line4, end ];
                dto.paths = [ path ];
                return api.setShapeGeometryPath(fileName, 4, 1, dto, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert((result.body as model.ShapeBase));
                });
            });
        });
    });
});

describe("Shape format tests", () => {
    it("shape format line", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const shapeIndex = 1;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Shape();
                const lineFormat = new model.LineFormat();
                lineFormat.style = model.LineFormat.StyleEnum.ThickThin;
                lineFormat.width = 7;
                lineFormat.dashStyle = model.LineFormat.DashStyleEnum.Dash;
                dto.lineFormat = lineFormat;
                return api.updateShape(fileName, slideIndex, shapeIndex, dto, password, folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert(putResult.body as model.Shape);
                    return api.getShape(fileName, slideIndex, shapeIndex, password, folderName).then((getResult) => {
                        assert.equal(200, getResult.response.statusCode);
                        assert(getResult.body as model.Shape);
                        assert(dto.lineFormat.width, (getResult.body as model.Shape).width);
                    });
                });
            });
        });
    });

    it("shape format fill", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const shapeIndex = 1;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Shape();
                const fillFormat = new model.SolidFill();
                fillFormat.color = "#FFFFFF00";
                dto.fillFormat = fillFormat;
                return api.updateShape(fileName, slideIndex, shapeIndex, dto, password, folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert(putResult.body as model.Shape);
                    return api.getShape(fileName, slideIndex, shapeIndex, password, folderName).then((getResult) => {
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
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const shapeIndex = 1;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Shape();
                const effectFormat = new model.EffectFormat();
                const innerShadow = new model.InnerShadowEffect();
                innerShadow.direction = 35;
                innerShadow.blurRadius = 30;
                innerShadow.distance = 40;
                innerShadow.shadowColor = "#FFFFFF00";
                effectFormat.innerShadow = innerShadow;
                dto.effectFormat = effectFormat;
                return api.updateShape(fileName, slideIndex, shapeIndex, dto, password, folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert(putResult.body as model.Shape);
                    return api.getShape(fileName, slideIndex, shapeIndex, password, folderName).then((getResult) => {
                        assert.equal(200, getResult.response.statusCode);
                        assert(getResult.body as model.Shape);
                        assert(dto.effectFormat.innerShadow.direction, (getResult.body as model.Shape).effectFormat.innerShadow.direction);
                    });
                });
            });
        });
    });

    it("shape format 3D", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const shapeIndex = 1;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
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
                return api.updateShape(fileName, slideIndex, shapeIndex, dto, password, folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert(putResult.body as model.Shape);
                    return api.getShape(fileName, slideIndex, shapeIndex, password, folderName).then((getResult) => {
                        assert.equal(200, getResult.response.statusCode);
                        assert(getResult.body as model.Shape);
                        assert(dto.threeDFormat.depth, (getResult.body as model.Shape).threeDFormat.depth);
                    });
                });
            });
        });
    });
});

describe("Chart tests", () => {
    it("get", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShape(fileName, 3, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                    assert((result.body as model.NotesSlide) != null);
                });
            });
        });
    });

    it("create", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.ClusteredColumn;
                chart.width = 400;
                chart.height = 300;
                const series1 = new model.OneValueSeries();
                series1.name = "Series1";
                series1.dataPoints = [{ value: 40 }, { value: 50 }, { value: 70 }];
                const series2 = new model.OneValueSeries();
                series2.name = "Series2";
                series2.dataPoints = [{ value: 55 }, { value: 35 }, { value: 90 }];
                chart.series = [ series1, series2 ];
                chart.categories = [{ value: "Category1" }, { value: "Category2" }, { value: "Category3" }];
                return api.createShape(fileName, 3, chart, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(2, (result.body as model.Chart).series.length);
                    assert.equal(3, (result.body as model.Chart).categories.length);
                });
            });
        });
    });

    it("update", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.ClusteredColumn;
                chart.width = 400;
                chart.height = 300;
                const series1 = new model.OneValueSeries();
                series1.name = "Series1";
                series1.dataPoints = [{ value: 40 }, { value: 50 }, { value: 70 }];
                const series2 = new model.OneValueSeries();
                series2.name = "Series2";
                series2.dataPoints = [{ value: 55 }, { value: 35 }, { value: 90 }];
                chart.series = [ series1, series2 ];
                chart.categories = [{ value: "Category1" }, { value: "Category2" }, { value: "Category3" }];
                return api.updateShape(fileName, 3, 1, chart, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(2, (result.body as model.Chart).series.length);
                    assert.equal(3, (result.body as model.Chart).categories.length);
                });
            });
        });
    });

    it("series create", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const series = new model.OneValueSeries();
                series.name = "Series3";
                series.dataPoints = [{ value: 40 }, { value: 50 }, { value: 14 }, { value: 70 }];
                return api.createChartSeries(fileName, 3, 1, series, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(4, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                });
            });
        });
    });

    it("series update", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const series = new model.OneValueSeries();
                series.name = "Series3";
                series.dataPoints = [{ value: 40 }, { value: 50 }, { value: 14 }, { value: 70 }];
                return api.updateChartSeries(fileName, 3, 1, 2, series, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                });
            });
        });
    });

    it("series delete", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteChartSeries(fileName, 3, 1, 2, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(2, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                });
            });
        });
    });

    it("category create", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const category = new model.ChartCategory();
                category.value = "NewCategory";
                category.dataPoints = [{ value: 40 }, { value: 50 }, { value: 14 }];
                return api.createChartCategory(fileName, 3, 1, category, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(5, (result.body as model.Chart).categories.length);
                    assert.equal(5, ((result.body as model.Chart).series[0] as model.OneValueSeries).dataPoints.length);
                    assert.equal(
                        category.dataPoints[0].value, ((result.body as model.Chart).series[0] as model.OneValueSeries).dataPoints[4].value);
                });
            });
        });
    });

    it("category update", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const category = new model.ChartCategory();
                category.value = "NewCategory";
                category.dataPoints = [{ value: 40 }, { value: 50 }, { value: 14 }];
                return api.updateChartCategory(fileName, 3, 1, 2, category, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                    assert.equal(4, ((result.body as model.Chart).series[0] as model.OneValueSeries).dataPoints.length);
                    assert.equal(
                        category.dataPoints[0].value, ((result.body as model.Chart).series[0] as model.OneValueSeries).dataPoints[1].value);
                });
            });
        });
    });

    it("category delete", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteChartCategory(fileName, 3, 1, 2, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(3, (result.body as model.Chart).categories.length);
                    assert.equal(3, ((result.body as model.Chart).series[0] as model.OneValueSeries).dataPoints.length);
                });
            });
        });
    });

    it("data point create", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dataPoint = new model.OneValueChartDataPoint();
                dataPoint.value = 40;
                return api.createChartDataPoint(fileName, 3, 1, 2, dataPoint, "password", folderName)
                        //Must throw ApiException because adding data points only works with Scatter & Bubble charts.
                    .then(() => assert.fail("Must have failed"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("data point update", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dataPoint = new model.OneValueChartDataPoint();
                dataPoint.value = 40;
                return api.updateChartDataPoint(fileName, 3, 1, 2, 2, dataPoint, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                    assert.equal(4, ((result.body as model.Chart).series[1] as model.OneValueSeries).dataPoints.length);
                    assert.equal(dataPoint.value, ((result.body as model.Chart).series[1] as model.OneValueSeries).dataPoints[1].value);
                });
            });
        });
    });

    it("data point delete", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteChartDataPoint(fileName, 3, 1, 2, 2, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                    assert(((result.body as model.Chart).series[1] as model.OneValueSeries).dataPoints[1] == null);
                });
            });
        });
    });

    it("sunburst", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.Sunburst;
                chart.width = 400;
                chart.height = 300;
                const series1 = new model.OneValueSeries();
                series1.name = "Series1";
                series1.dataPoints = [{ value: 40 }, { value: 50 }, { value: 70 }, { value: 60 }];
                chart.series = [ series1 ];
                const category1 = new model.ChartCategory();
                category1.value = "Leaf1";
                category1.level = 3;
                category1.parentCategories = [ "Branch1", "Stem1" ];
                const category2 = new model.ChartCategory();
                category2.value = "Leaf2";
                category2.level = 3;
                category2.parentCategories = [ "Branch1", "Stem1" ];
                const category3 = new model.ChartCategory();
                category3.value = "Branch2";
                category3.level = 2;
                category3.parentCategories = [ "Stem1" ];
                const category4 = new model.ChartCategory();
                category4.value = "Stem2";
                category4.level = 1;
                chart.categories = [ category1, category2, category3, category4 ];
                return api.createShape(fileName, 3, chart, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(1, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                });
            });
        });
    });
});

describe("Hyperlink tests", () => {
    it("get shape", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShape(fileName, 2, 2, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert((result.body as model.ShapeBase).hyperlinkClick);
                    assert.equal(model.Hyperlink.ActionTypeEnum.Hyperlink, (result.body as model.ShapeBase).hyperlinkClick.actionType);
                    assert(!(result.body as model.ShapeBase).hyperlinkMouseOver);
                });
            });
        });
    });

    it("get portion", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getPortion(fileName, 2, 1, 1, 2, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert(!(result.body as model.ShapeBase).hyperlinkClick);
                    assert((result.body as model.ShapeBase).hyperlinkMouseOver);
                    assert.equal(model.Hyperlink.ActionTypeEnum.JumpLastSlide, (result.body as model.ShapeBase).hyperlinkMouseOver.actionType);
                });
            });
        });
    });

    it("create shape", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const shape = new model.Shape();
                const hyperlink = new model.Hyperlink();
                hyperlink.actionType = model.Hyperlink.ActionTypeEnum.Hyperlink;
                hyperlink.externalUrl = "https://docs.aspose.cloud/slides";
                shape.hyperlinkClick = hyperlink;
                return api.updateShape(fileName, 1, 1, shape, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert((result.body as model.ShapeBase).hyperlinkClick);
                    assert.equal(hyperlink.externalUrl, (result.body as model.ShapeBase).hyperlinkClick.externalUrl);
                });
            });
        });
    });

    it("create portion", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Portion();
                dto.text = "Link text";
                const hyperlink = new model.Hyperlink();
                hyperlink.actionType = model.Hyperlink.ActionTypeEnum.JumpLastSlide;
                dto.hyperlinkMouseOver = hyperlink;
                return api.createPortion(fileName, 1, 1, 1, dto, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert((result.body as model.Portion).hyperlinkMouseOver);
                    assert.equal(dto.hyperlinkMouseOver.actionType, (result.body as model.Portion).hyperlinkMouseOver.actionType);
                });
            });
        });
    });

    it("delete", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const shape = new model.PictureFrame();
                const hyperlink = new model.Hyperlink();
                hyperlink.isDisabled = true;
                shape.hyperlinkClick = hyperlink;
                return api.updateShape(fileName, 2, 2, shape, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert(!(result.body as model.ShapeBase).hyperlinkClick);
                });
            });
        });
    });
});


describe("Math tests", () => {
    it("get", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getPortion(fileName, 2, 3, 1, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert((result.body as model.Portion).mathParagraph);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList);
                    assert.equal(1, (result.body as model.Portion).mathParagraph.mathBlockList.length);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList);
                    assert.equal(3, (result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList.length);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList[2] as model.FractionElement);
                });
            });
        });
    });

    it("get null", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getPortion(fileName, 2, 1, 1, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert(!(result.body as model.Portion).mathParagraph);
                });
            });
        });
    });

    it("create", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Portion();
                const mathParagraph = new model.MathParagraph();
                const blockElement = new model.BlockElement();
                const functionElement = new model.FunctionElement();
                const limitElement = new model.LimitElement();
                const textElement1 = new model.TextElement();
                textElement1.value = "lim";
                limitElement.base = textElement1;

                const textElement2 = new model.TextElement();
                textElement2.value = "x->0";
                limitElement.limit = textElement2;
                functionElement.name = limitElement;

                const fractionElement = new model.FractionElement();
                const sinusElement = new model.FunctionElement();
                const textElement3 = new model.TextElement();
                textElement3.value = "sin";
                sinusElement.name = textElement3;

                const textElement4 = new model.TextElement();
                textElement4.value = "x";
                sinusElement.base = textElement4;
                fractionElement.numerator = sinusElement;

                const textElement5 = new model.TextElement();
                textElement5.value = "x";
                fractionElement.denominator = textElement5;
                functionElement.base = fractionElement;

                blockElement.mathElementList = [ functionElement ];
                mathParagraph.mathBlockList = [ blockElement ];
                dto.mathParagraph = mathParagraph;
                return api.createPortion(fileName, 1, 1, 1, dto, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert((result.body as model.Portion).mathParagraph);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList);
                    assert.equal(1, (result.body as model.Portion).mathParagraph.mathBlockList.length);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList);
                    assert.equal(1, (result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList.length);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList[0] as model.FunctionElement);
                });
            });
        });
    });

    it("update", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Portion();
                const mathParagraph = new model.MathParagraph();
                const blockElement = new model.BlockElement();
                const functionElement = new model.FunctionElement();
                const limitElement = new model.LimitElement();
                const textElement1 = new model.TextElement();
                textElement1.value = "lim";
                limitElement.base = textElement1;

                const textElement2 = new model.TextElement();
                textElement2.value = "x->0";
                limitElement.limit = textElement2;
                functionElement.name = limitElement;

                const fractionElement = new model.FractionElement();
                const sinusElement = new model.FunctionElement();
                const textElement3 = new model.TextElement();
                textElement3.value = "sin";
                sinusElement.name = textElement3;

                const textElement4 = new model.TextElement();
                textElement4.value = "x";
                sinusElement.base = textElement4;
                fractionElement.numerator = sinusElement;

                const textElement5 = new model.TextElement();
                textElement5.value = "x";
                fractionElement.denominator = textElement5;
                functionElement.base = fractionElement;

                blockElement.mathElementList = [ functionElement ];
                mathParagraph.mathBlockList = [ blockElement ];
                dto.mathParagraph = mathParagraph;
                return api.updatePortion(fileName, 2, 3, 1, 1, dto, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert((result.body as model.Portion).mathParagraph);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList);
                    assert.equal(1, (result.body as model.Portion).mathParagraph.mathBlockList.length);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList);
                    assert.equal(1, (result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList.length);
                    assert((result.body as model.Portion).mathParagraph.mathBlockList[0].mathElementList[0] as model.FunctionElement);
                });
            });
        });
    });

    it("download", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadPortionAsMathMl(fileName, 2, 3, 1, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert(result.body.length);
                });
            });
        });
    });

    it("download null", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadPortionAsMathMl(fileName, 2, 1, 1, 1, "password", folderName)
                    .then(() => assert.fail("Must have failed"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("save", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const outPath = folderName + "/mathml.xml";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.savePortionAsMathMl(fileName, 2, 3, 1, 1, outPath, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    return api.objectExists(outPath).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });
});

describe("HeaderFooter tests", () => {
    it("all slides", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.HeaderFooter();
                dto.isFooterVisible = true;
                dto.footerText = "footer";
                dto.isDateTimeVisible = false;
                return api.setPresentationHeaderFooter(fileName, dto, password, folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    return api.getSlideHeaderFooter(fileName, 1, password, folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        assert.equal(true, (result.body as model.HeaderFooter).isFooterVisible);
                        assert.equal(false, (result.body as model.HeaderFooter).isDateTimeVisible);
                    });
                });
            });
        });
    });

    it("slide", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.HeaderFooter();
                dto.isFooterVisible = true;
                dto.footerText = "footer";
                dto.isDateTimeVisible = false;
                return api.setSlideHeaderFooter(fileName, slideIndex, dto, password, folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(true, (putResult.body as model.HeaderFooter).isFooterVisible);
                    assert.equal(false, (putResult.body as model.HeaderFooter).isDateTimeVisible);
                    return api.getSlideHeaderFooter(fileName, slideIndex, password, folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        assert.equal(true, (result.body as model.HeaderFooter).isFooterVisible);
                        assert.equal(false, (result.body as model.HeaderFooter).isDateTimeVisible);
                    });
                });
            });
        });
    });

    it("notes slide", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const slideIndex = 1;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.NotesSlideHeaderFooter();
                dto.isHeaderVisible = true;
                dto.footerText = "footer";
                dto.isDateTimeVisible = false;
                return api.setNotesSlideHeaderFooter(fileName, slideIndex, dto, password, folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(true, (putResult.body as model.NotesSlideHeaderFooter).isHeaderVisible);
                    assert.equal(false, (putResult.body as model.NotesSlideHeaderFooter).isDateTimeVisible);
                    return api.getNotesSlideHeaderFooter(fileName, slideIndex, password, folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        assert.equal(true, (result.body as model.NotesSlideHeaderFooter).isHeaderVisible);
                        assert.equal(false, (result.body as model.NotesSlideHeaderFooter).isDateTimeVisible);
                    });
                });
            });
        });
    });
});

describe("Section tests", () => {
    it("get", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSections(fileName, "password", folderName).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    assert.equal(3, (getResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("replace", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Sections();
                const section1 = new model.Section();
                section1.name = "Section1";
                section1.firstSlideIndex = 1;
                const section2 = new model.Section();
                section2.name = "Section2";
                section2.firstSlideIndex = 3;
                dto.sectionList = [ section1, section2 ];
                return api.setSections(fileName, dto, "password", folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(dto.sectionList.length, (putResult.body as model.Sections).sectionList.length);
                    assert.equal(
                        section2.firstSlideIndex - section1.firstSlideIndex, (putResult.body as model.Sections).sectionList[0].slideList.length);
                });
            });
        });
    });

    it("post", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.createSection(fileName, "NewSection", 5, "password", folderName).then((postResult) => {
                    assert.equal(201, postResult.response.statusCode);
                    assert.equal(4, (postResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("put", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const sectionIndex = 2;
                const sectionName = "UpdatedSection";
                return api.updateSection(fileName, sectionIndex, sectionName, "password", folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(3, (putResult.body as model.Sections).sectionList.length);
                    assert.equal(sectionName, (putResult.body as model.Sections).sectionList[sectionIndex - 1].name);
                });
            });
        });
    });

    it("move", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.moveSection(fileName, 1, 2, "password", folderName).then((postResult) => {
                    assert.equal(200, postResult.response.statusCode);
                    assert.equal(3, (postResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("clear", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteSections(fileName, null, null, "password", folderName).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert.equal(0, (deleteResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("delete many", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteSections(fileName, [ 2, 3 ], null, "password", folderName).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert.equal(1, (deleteResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("delete", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteSection(fileName, 2, null, "password", folderName).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert.equal(2, (deleteResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });
});

describe("Property tests", () => {
    it("builtin", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const propertyName = "Author";
            const updatedPropertyValue = "New Value";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getDocumentProperty(fileName, propertyName, password, folderName).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    assert.equal(propertyName, (getResult.body as model.DocumentProperty).name);
                    assert((getResult.body as model.DocumentProperty).builtIn);
                    const property = new model.DocumentProperty();
                    property.value = updatedPropertyValue;
                    return api.setDocumentProperty(fileName, propertyName, property, password, folderName).then((putResult) => {
                        assert.equal(200, putResult.response.statusCode);
                        assert.equal(propertyName, (putResult.body as model.DocumentProperty).name);
                        assert.equal(updatedPropertyValue, (putResult.body as model.DocumentProperty).value);
                        assert((putResult.body as model.DocumentProperty).builtIn);
                        return api.deleteDocumentProperty(fileName, propertyName, password, folderName).then((deleteResult) => {
                            assert.equal(200, deleteResult.response.statusCode);
                            return api.getDocumentProperty(fileName, propertyName, password, folderName).then((getResult2) => {
                                //built-in property is not actually deleted
                                assert.equal(200, getResult2.response.statusCode);
                                assert.equal(propertyName, (getResult2.body as model.DocumentProperty).name);
                                assert.notEqual(updatedPropertyValue, (getResult2.body as model.DocumentProperty).value);
                                assert((getResult2.body as model.DocumentProperty).builtIn);
                            });
                        });
                    });
                });
            });
        });
    });

    it("custom", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const propertyName = "CustomProperty2";
            const updatedPropertyValue = "New Value";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const property = new model.DocumentProperty();
                property.value = updatedPropertyValue;
                return api.setDocumentProperty(fileName, propertyName, property, password, folderName).then((putResult) => {
                    assert.equal(201, putResult.response.statusCode);
                    assert.equal(propertyName, (putResult.body as model.DocumentProperty).name);
                    assert.equal(updatedPropertyValue, (putResult.body as model.DocumentProperty).value);
                    assert(!(putResult.body as model.DocumentProperty).builtIn);
                    return api.deleteDocumentProperty(fileName, propertyName, password, folderName).then((deleteResult) => {
                        assert.equal(200, deleteResult.response.statusCode);
                        return api.getDocumentProperty(fileName, propertyName, password, folderName)
                            .then(() => assert.fail("The property must have been deleted"))
                            .catch((err) => {
                                assert.equal(404, err.code);
                            });
                    });
                });
            });
        });
    });

    it("bulkUpdate", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const propertyName = "Author";
            const customPropertyName = "CustomProperty2";
            const updatedPropertyValue = "New Value";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getDocumentProperties(fileName, password, folderName).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    const count = (getResult.body as model.DocumentProperties).list.length;
                    const property1 = new model.DocumentProperty();
                    property1.name = propertyName;
                    property1.value = updatedPropertyValue;
                    const property2 = new model.DocumentProperty();
                    property2.name = customPropertyName;
                    property2.value = updatedPropertyValue;
                    const properties = new model.DocumentProperties();
                    properties.list = [ property1, property2 ];
                    return api.setDocumentProperties(fileName, properties, password, folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        assert.equal(count + 1, (postResult.body as model.DocumentProperties).list.length);
                        return api.deleteDocumentProperties(fileName, password, folderName).then((deleteResult) => {
                            assert.equal(200, deleteResult.response.statusCode);
                            assert.equal(count - 1, (deleteResult.body as model.DocumentProperties).list.length);
                        });
                    });
                });
            });
        });
    });

    it("slideProperties", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSlideProperties(fileName, password, folderName).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    const properties = getResult.body as model.SlideProperties;
                    const dto = new model.SlideProperties();
                    dto.firstSlideNumber = properties.firstSlideNumber + 2;
                    return api.setSlideProperties(fileName, dto, password, folderName).then((putResult) => {
                        assert.equal(200, putResult.response.statusCode);
                        assert.equal(properties.orientation, (putResult.body as model.SlideProperties).orientation);
                        assert.notEqual(properties.firstSlideNumber, (putResult.body as model.SlideProperties).firstSlideNumber);
                    });
                });
            });
        });
    });

    it("slideSizePreset", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.SlideProperties();
                dto.sizeType = model.SlideProperties.SizeTypeEnum.B4IsoPaper;
                return api.setSlideProperties(fileName, dto, password, folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(model.SlideProperties.SizeTypeEnum.B4IsoPaper, (putResult.body as model.SlideProperties).sizeType);
                    assert.equal(852, (putResult.body as model.SlideProperties).width);
                    assert.equal(639, (putResult.body as model.SlideProperties).height);
                });
            });
        });
    });

    it("slideSizeCustom", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const width = 800;
            const height = 500;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.SlideProperties();
                dto.width = width;
                dto.height = height;
                return api.setSlideProperties(fileName, dto, password, folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(model.SlideProperties.SizeTypeEnum.Custom, (putResult.body as model.SlideProperties).sizeType);
                    assert.equal(width, (putResult.body as model.SlideProperties).width);
                    assert.equal(height, (putResult.body as model.SlideProperties).height);
                });
            });
        });
    });

    it("protectionProperties", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getProtectionProperties(fileName, password, folderName).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    const properties = getResult.body as model.ProtectionProperties;
                    const dto = new model.ProtectionProperties();
                    dto.readOnlyRecommended = !properties.readOnlyRecommended;
                    return api.setProtection(fileName, dto, password, folderName).then((putResult) => {
                        assert.equal(200, putResult.response.statusCode);
                        assert.equal(properties.encryptDocumentProperties, (putResult.body as model.ProtectionProperties).encryptDocumentProperties);
                        assert.notEqual(properties.readOnlyRecommended, (putResult.body as model.ProtectionProperties).readOnlyRecommended);
                    });
                });
            });
        });
    });

    it("deleteProtection", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteProtection(fileName, password, folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert(!(result.body as model.ProtectionProperties).isEncrypted);
                    assert(!(result.body as model.ProtectionProperties).readOnlyRecommended);
                    assert(!(result.body as model.ProtectionProperties).readPassword);
                });
            });
        });
    });

    it("protectOnline", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            const dto = new model.ProtectionProperties();
            dto.readPassword = "newPassword";
            const input = fs.createReadStream("TestData/test.pptx");
            return api.setProtectionOnline(input, dto, "password").then((result) => {
                assert.equal(200, result.response.statusCode);
                assert(result.body.length != input.length);
            });
        });
    });

    it("unprotectOnline", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            const input = fs.createReadStream("TestData/test.pptx");
            return api.deleteProtectionOnline(input, "password").then((result) => {
                assert.equal(200, result.response.statusCode);
                assert(result.body.length != input.length);
            });
        });
    });
});

describe("Auth tests", () => {
    it("good auth", () => {
        return TestInitializer.runTest(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            return api.getApiInfo().then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("bad auth", () => {
        return TestInitializer.runTest(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            api.configuration.appSid = "invalid";
            return api.getApiInfo().then(() => {
                assert.fail('Must have failed');
            }).catch((err) => {
                assert.equal(401, err.code);
            });
        });
    });

    it("good token", () => {
        return TestInitializer.runTest(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            return api.getApiInfo().then(() => {
                const api2 = new sdkApi.SlidesApi("invalid", config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
                api2.configuration.accessToken = api.configuration.accessToken;
                return api2.getApiInfo().then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("bad token", () => {
        return TestInitializer.runTest(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            return api.getApiInfo().then(() => {
                api.configuration.accessToken = "invalid";
                return api.getApiInfo().then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });
});

describe("Image tests", () => {
    it("get", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getPresentationImages(fileName, password, folderName).then((presentationResult) => {
                    assert.equal(200, presentationResult.response.statusCode);
                    return api.getSlideImages(fileName, 1, password, folderName).then((slideResult) => {
                        assert.equal(200, slideResult.response.statusCode);
                        assert((slideResult.body as model.Images).list.length < (presentationResult.body as model.Images).list.length);
                    });
                });
            });
        });
    });
    it("download all storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadImagesDefaultFormat(fileName, password, folderName).then((defaultResult) => {
                    assert.equal(200, defaultResult.response.statusCode);
                    return api.downloadImages(fileName, model.ImageExportFormat.Png, password, folderName).then((pngResult) => {
                        assert.equal(200, pngResult.response.statusCode);
                        assert(defaultResult.body.length != pngResult.body.length);
                        var AdmZip = require('adm-zip');
                        var defaultZip = new AdmZip(defaultResult.body);
                        var pngZip = new AdmZip(pngResult.body);
                        assert.equal(defaultZip.getEntries().length, pngZip.getEntries().length);
                    });
                });
            });
        });
    });
    it("download all request", () => {
        return TestInitializer.runTest(() => {
            const password = "password";
            const api = TestInitializer.getApi();
            return api.downloadImagesDefaultFormatOnline(fs.createReadStream("TestData/test.pptx"), password).then((defaultResult) => {
                assert.equal(200, defaultResult.response.statusCode);
                return api.downloadImagesOnline(fs.createReadStream("TestData/test.pptx"), model.ImageExportFormat.Png, password).then((pngResult) => {
                    assert.equal(200, pngResult.response.statusCode);
                    assert(defaultResult.body.length != pngResult.body.length);
                    var AdmZip = require('adm-zip');
                    var defaultZip = new AdmZip(defaultResult.body);
                    var pngZip = new AdmZip(pngResult.body);
                    assert.equal(defaultZip.getEntries().length, pngZip.getEntries().length);
                });
            });
        });
    });
    it("download storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.downloadImageDefaultFormat(fileName, 1, password, folderName).then((defaultResult) => {
                    assert.equal(200, defaultResult.response.statusCode);
                    return api.downloadImage(fileName, 1, model.ImageExportFormat.Png, password, folderName).then((pngResult) => {
                        assert.equal(200, pngResult.response.statusCode);
                        assert(defaultResult.body.length != pngResult.body.length);
                    });
                });
            });
        });
    });
    it("download request", () => {
        return TestInitializer.runTest(() => {
            const password = "password";
            const api = TestInitializer.getApi();
            return api.downloadImageDefaultFormatOnline(fs.createReadStream("TestData/test.pptx"), 1, password).then((defaultResult) => {
                assert.equal(200, defaultResult.response.statusCode);
                return api.downloadImageOnline(fs.createReadStream("TestData/test.pptx"), 1, model.ImageExportFormat.Png, password).then((pngResult) => {
                    assert.equal(200, pngResult.response.statusCode);
                    assert(defaultResult.body.length != pngResult.body.length);
                });
            });
        });
    });
});

describe("Merge tests", () => {
    it("merge storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const fileName2 = "test-unprotected.pptx";
            const fileNamePdf = "test.pdf";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.copyFile("TempTests/" + fileName2, folderName + "/" + fileName2).then(() => {
                    return api.copyFile("TempTests/" + fileNamePdf, folderName + "/" + fileNamePdf).then(() => {
                        let request = new model.PresentationsMergeRequest();
                        request.presentationPaths = [ folderName + "/" + fileName2, folderName + "/" + fileNamePdf ];
                        return api.merge(fileName, request, password, folderName).then((defaultResult) => {
                            assert.equal(200, defaultResult.response.statusCode);
                        });
                    });
                });
            });
        });
    });
    it("merge ordered storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const fileName2 = "test-unprotected.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.copyFile("TempTests/" + fileName2, folderName + "/" + fileName2).then(() => {
                    let request = new model.OrderedMergeRequest();
                    let presentation = new model.PresentationToMerge();
                    presentation.path = folderName + "/" + fileName2;
                    presentation.slides = [ 2, 1 ];
                    request.presentations = [ presentation ];
                    return api.orderedMerge(fileName, request, password, folderName).then((defaultResult) => {
                        assert.equal(200, defaultResult.response.statusCode);
                    });
                });
            });
        });
    });
    it("merge request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            const files = [ fs.createReadStream("TestData/TemplateCV.pptx"), fs.createReadStream("TestData/test-unprotected.pptx") ];
            return api.mergeOnline(files).then((defaultResult) => {
                assert.equal(200, defaultResult.response.statusCode);
            });
        });
    });
    it("merge and save request", () => {
        return TestInitializer.runTest(() => {
            const outPath = "TestData/out.pptx";
            const api = TestInitializer.getApi();
            const files = [ fs.createReadStream("TestData/TemplateCV.pptx"), fs.createReadStream("TestData/test-unprotected.pptx") ];
            return api.mergeAndSaveOnline(outPath, files).then((defaultResult) => {
                assert.equal(200, defaultResult.response.statusCode);
                return api.objectExists(outPath).then((existsResult) => {
                    assert.equal(200, existsResult.response.statusCode);
                    assert((existsResult.body as model.ObjectExist).exists);
                });
            });
        });
    });
    it("merge ordered request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            const files = [ fs.createReadStream("TestData/test.pptx"), fs.createReadStream("TestData/test-unprotected.pptx") ];
            let request = new model.OrderedMergeRequest();
            let presentation1 = new model.PresentationToMerge();
            presentation1.path = "test.pptx";
            presentation1.password = "password";
            let presentation2 = new model.PresentationToMerge();
            presentation2.path = "test-unprotected.pptx";
            presentation2.slides = [ 1, 2 ];
            request.presentations = [ presentation1, presentation2 ];
            return api.mergeOnline(files, request).then((defaultResult) => {
                assert.equal(200, defaultResult.response.statusCode);
            });
        });
    });
    it("merge ordered combined", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName2 = "test-unprotected.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName2, folderName + "/" + fileName2).then(() => {
                const files = [ fs.createReadStream("TestData/test.pptx") ];
                let request = new model.OrderedMergeRequest();
                let presentation1 = new model.PresentationToMerge();
                presentation1.path = "test.pptx";
                presentation1.password = "password";
                let presentation2 = new model.PresentationToMerge();
                presentation2.slides = [ 1, 2 ];
                presentation2.source = model.PresentationToMerge.SourceEnum.Storage;
                presentation2.path = folderName + "/" + fileName2;
                request.presentations = [ presentation1, presentation2 ];
                return api.mergeOnline(files, request).then((defaultResult) => {
                    assert.equal(200, defaultResult.response.statusCode);
                });
            });
        });
    });
});

describe("Split tests", () => {
    it("storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.split(fileName, null, null, null, null, null, null, null, password, folderName).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    return api.split(fileName, null, null, null, null, 2, 3, null, password, folderName).then((result2) => {
                        assert.equal(200, result2.response.statusCode);
                        assert.equal(2, (result2.body as model.SplitDocumentResult).slides.length);
                        assert((result1.body as model.SplitDocumentResult).slides.length > (result2.body as model.SplitDocumentResult).slides.length);
                        const url = (result1.body as model.SplitDocumentResult).slides[0].href;
                        const path = url.substring(url.indexOf("/storage/file/") + "/storage/file/".length);
                        return api.objectExists(path).then((existsResult) => {
                            assert.equal(200, existsResult.response.statusCode);
                            assert((existsResult.body as model.ObjectExist).exists);
                        });
                    });
                });
            });
        });
    });
    it("request", () => {
        return TestInitializer.runTest(() => {
            const password = "password";
            const api = TestInitializer.getApi();
            return api.splitOnline(fs.createReadStream("TestData/test.pptx"), model.SlideExportFormat.Png, null, null, null, null, password).then((result1) => {
                assert.equal(200, result1.response.statusCode);
                return api.splitOnline(fs.createReadStream("TestData/test.pptx"), model.SlideExportFormat.Png, null, null, 2, 3, password).then((result2) => {
                    assert.equal(200, result2.response.statusCode);
                    var AdmZip = require('adm-zip');
                    var zip1 = new AdmZip(result1.body);
                    var zip2 = new AdmZip(result2.body);
                    assert.equal(2, zip2.getEntries().length);
                    assert(zip1.getEntries().length > zip2.getEntries().length);
                });
            });
        });
    });
    it("request to storage", () => {
        return TestInitializer.runTest(() => {
            const password = "password";
            const api = TestInitializer.getApi();
            return api.splitAndSaveOnline(fs.createReadStream("TestData/test.pptx"), model.SlideExportFormat.Png, null, null, null, null, null, password).then((result1) => {
                assert.equal(200, result1.response.statusCode);
                return api.splitAndSaveOnline(fs.createReadStream("TestData/test.pptx"), model.SlideExportFormat.Png, null, null, null, 2, 3, password).then((result2) => {
                    assert.equal(200, result2.response.statusCode);
                    assert.equal(2, (result2.body as model.SplitDocumentResult).slides.length);
                    assert((result1.body as model.SplitDocumentResult).slides.length > (result2.body as model.SplitDocumentResult).slides.length);
                    const url = (result1.body as model.SplitDocumentResult).slides[0].href;
                    const path = url.substring(url.indexOf("/storage/file/") + "/storage/file/".length);
                    return api.objectExists(path).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });
    it("with options", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const options = new model.PdfExportOptions();
                options.jpegQuality = 50;
                return api.split(fileName, options, null, null, null, null, null, null, password, folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    const url = (result.body as model.SplitDocumentResult).slides[0].href;
                    const path = url.substring(url.indexOf("/storage/file/") + "/storage/file/".length);
                    return api.objectExists(path).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });
});

describe("Text tests", () => {
    it("get", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getPresentationTextItems(fileName, null, password, folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    return api.getPresentationTextItems(fileName, true, password, folderName).then((resultWithEmpty) => {
                        assert.equal(200, resultWithEmpty.response.statusCode);
                        return api.getSlideTextItems(fileName, slideIndex, null, password, folderName).then((slideResult) => {
                            assert.equal(200, slideResult.response.statusCode);
                            return api.getSlideTextItems(fileName, slideIndex, true, password, folderName).then((slideResultWithEmpty) => {
                                assert.equal(200, slideResultWithEmpty.response.statusCode);
                                assert((result.body as model.TextItems).items.length < (resultWithEmpty.body as model.TextItems).items.length);
                                assert((slideResult.body as model.TextItems).items.length < (result.body as model.TextItems).items.length);
                                assert((slideResult.body as model.TextItems).items.length < (slideResultWithEmpty.body as model.TextItems).items.length);
                            });
                        });
                    });
                });
            });
        });
    });
    it("replace storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const password = "password";
            const oldValue = "text";
            const newValue = "new_text";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.replacePresentationText(fileName, oldValue, newValue, null, password, folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                        return api.replacePresentationText(fileName, oldValue, newValue, true, password, folderName).then((resultWithEmpty) => {
                            assert.equal(200, resultWithEmpty.response.statusCode);
                            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                                return api.replaceSlideText(fileName, slideIndex, oldValue, newValue, null, password, folderName).then((slideResult) => {
                                    assert.equal(200, slideResult.response.statusCode);
                                    return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                                        return api.replaceSlideText(fileName, slideIndex, oldValue, newValue, true, password, folderName).then((slideResultWithEmpty) => {
                                            assert.equal(200, slideResultWithEmpty.response.statusCode);
                                            assert((result.body as model.DocumentReplaceResult).matches < (resultWithEmpty.body as model.DocumentReplaceResult).matches);
                                            assert((slideResult.body as model.SlideReplaceResult).matches < (result.body as model.DocumentReplaceResult).matches);
                                            assert((slideResult.body as model.SlideReplaceResult).matches < (slideResultWithEmpty.body as model.SlideReplaceResult).matches);
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
    it("replace request", () => {
        return TestInitializer.runTest(() => {
            const slideIndex = 1;
            const password = "password";
            const oldValue = "text";
            const newValue = "new_text";
            const api = TestInitializer.getApi();
            return api.replacePresentationTextOnline(fs.createReadStream("TestData/test.pptx"), oldValue, newValue, null, password).then((result) => {
                assert.equal(200, result.response.statusCode);
                return api.replacePresentationTextOnline(fs.createReadStream("TestData/test.pptx"), oldValue, newValue, true, password).then((resultWithEmpty) => {
                    assert.equal(200, resultWithEmpty.response.statusCode);
                    return api.replaceSlideTextOnline(fs.createReadStream("TestData/test.pptx"), slideIndex, oldValue, newValue, null, password).then((slideResult) => {
                        assert.equal(200, slideResult.response.statusCode);
                        return api.replaceSlideTextOnline(fs.createReadStream("TestData/test.pptx"), slideIndex, oldValue, newValue, true, password).then((slideResultWithEmpty) => {
                            assert.equal(200, slideResultWithEmpty.response.statusCode);
                        });
                    });
                });
            });
        });
    });

});

describe("Watermark tests", () => {
    it("text storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const password = "password";
            const watermarkText = "watermarkText";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShapes(fileName, slideIndex, password, folderName).then((get1Result) => {
                    assert.equal(200, get1Result.response.statusCode);
                    const shapeCount = (get1Result.body as model.Shapes).shapesLinks.length + 1;
                    return api.createWatermark(fileName, null, null, watermarkText, null, null, password, folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        return api.getShapes(fileName, slideIndex, password, folderName).then((get2Result) => {
                            assert.equal(200, get2Result.response.statusCode);
                            assert.equal(shapeCount, (get2Result.body as model.Shapes).shapesLinks.length);
                            return api.getShape(fileName, slideIndex, shapeCount, password, folderName).then((getShape2Result) => {
                                assert.equal(200, getShape2Result.response.statusCode);
                                const shape = getShape2Result.body as model.Shape;
                                assert.equal("watermark", shape.name);
                                assert.equal(watermarkText, shape.text);
                                return api.deleteWatermark(fileName, null, password, folderName).then((deleteResult) => {
                                    assert.equal(200, deleteResult.response.statusCode);
                                    return api.getShapes(fileName, slideIndex, password, folderName).then((get3Result) => {
                                        assert.equal(200, get3Result.response.statusCode);
                                        assert.equal(shapeCount - 1, (get3Result.body as model.Shapes).shapesLinks.length);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("text dto storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const password = "password";
            const watermarkText = "watermarkText";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShapes(fileName, slideIndex, password, folderName).then((get1Result) => {
                    assert.equal(200, get1Result.response.statusCode);
                    const shapeCount = (get1Result.body as model.Shapes).shapesLinks.length + 1;
                    let watermark = new model.Shape();
                    watermark.text = watermarkText;
                    return api.createWatermark(fileName, watermark, null, null, null, null, password, folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        return api.getShapes(fileName, slideIndex, password, folderName).then((get2Result) => {
                            assert.equal(200, get2Result.response.statusCode);
                            assert.equal(shapeCount, (get2Result.body as model.Shapes).shapesLinks.length);
                            return api.getShape(fileName, slideIndex, shapeCount, password, folderName).then((getShape2Result) => {
                                assert.equal(200, getShape2Result.response.statusCode);
                                const shape = getShape2Result.body as model.Shape;
                                assert.equal("watermark", shape.name);
                                assert.equal(watermarkText, shape.text);
                                return api.deleteWatermark(fileName, null, password, folderName).then((deleteResult) => {
                                    assert.equal(200, deleteResult.response.statusCode);
                                    return api.getShapes(fileName, slideIndex, password, folderName).then((get3Result) => {
                                        assert.equal(200, get3Result.response.statusCode);
                                        assert.equal(shapeCount - 1, (get3Result.body as model.Shapes).shapesLinks.length);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("image storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShapes(fileName, slideIndex, password, folderName).then((get1Result) => {
                    assert.equal(200, get1Result.response.statusCode);
                    const shapeCount = (get1Result.body as model.Shapes).shapesLinks.length + 1;
                    return api.createImageWatermark(fileName, fs.createReadStream("TestData/watermark.png"), null, password, folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        return api.getShapes(fileName, slideIndex, password, folderName).then((get2Result) => {
                            assert.equal(200, get2Result.response.statusCode);
                            assert.equal(shapeCount, (get2Result.body as model.Shapes).shapesLinks.length);
                            return api.getShape(fileName, slideIndex, shapeCount, password, folderName).then((getShape2Result) => {
                                assert.equal(200, getShape2Result.response.statusCode);
                                const shape = getShape2Result.body as model.Shape;
                                assert.equal("watermark", shape.name);
                                return api.deleteWatermark(fileName, null, password, folderName).then((deleteResult) => {
                                    assert.equal(200, deleteResult.response.statusCode);
                                    return api.getShapes(fileName, slideIndex, password, folderName).then((get3Result) => {
                                        assert.equal(200, get3Result.response.statusCode);
                                        assert.equal(shapeCount - 1, (get3Result.body as model.Shapes).shapesLinks.length);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("image dto storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const password = "password";
            const watermarkName = "myWatermark";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShapes(fileName, slideIndex, password, folderName).then((get1Result) => {
                    assert.equal(200, get1Result.response.statusCode);
                    const shapeCount = (get1Result.body as model.Shapes).shapesLinks.length + 1;
                    let watermark = new model.PictureFrame();
                    let fillFormat = new model.PictureFill();
                    fillFormat.base64Data = fs.readFileSync("TestData/watermark.png").toString("base64");
                    watermark.fillFormat = fillFormat;
                    watermark.name = watermarkName;
                    return api.createImageWatermark(fileName, null, watermark, password, folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        return api.getShapes(fileName, slideIndex, password, folderName).then((get2Result) => {
                            assert.equal(200, get2Result.response.statusCode);
                            assert.equal(shapeCount, (get2Result.body as model.Shapes).shapesLinks.length);
                            return api.getShape(fileName, slideIndex, shapeCount, password, folderName).then((getShape2Result) => {
                                assert.equal(200, getShape2Result.response.statusCode);
                                const shape = getShape2Result.body as model.Shape;
                                assert.equal(watermarkName, shape.name);
                                return api.deleteWatermark(fileName, watermarkName, password, folderName).then((deleteResult) => {
                                    assert.equal(200, deleteResult.response.statusCode);
                                    return api.getShapes(fileName, slideIndex, password, folderName).then((get3Result) => {
                                        assert.equal(200, get3Result.response.statusCode);
                                        assert.equal(shapeCount - 1, (get3Result.body as model.Shapes).shapesLinks.length);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    it("text request", () => {
        return TestInitializer.runTest(() => {
            const password = "password";
            const api = TestInitializer.getApi();
            return api.createWatermarkOnline(fs.createReadStream("TestData/test.pptx"), null, null, "watermarkText", null, null, password).then((postResult) => {
                assert.equal(200, postResult.response.statusCode);
                assert(fs.createReadStream("TestData/test.pptx").length != postResult.body.length);
                return api.deleteWatermarkOnline(fs.createReadStream("TestData/test.pptx"), null, password).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert(deleteResult.body.length < postResult.body.length);
                });
            });
        });
    });

    it("text dto request", () => {
        return TestInitializer.runTest(() => {
            const password = "password";
            const api = TestInitializer.getApi();
            let watermark = new model.Shape();
            watermark.text = "watermarkText";
            return api.createWatermarkOnline(fs.createReadStream("TestData/test.pptx"), watermark, null, null, null, null, password).then((postResult) => {
                assert.equal(200, postResult.response.statusCode);
                assert(fs.createReadStream("TestData/test.pptx").length != postResult.body.length);
                return api.deleteWatermarkOnline(fs.createReadStream("TestData/test.pptx"), null, password).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert(deleteResult.body.length < postResult.body.length);
                });
            });
        });
    });

    it("image request", () => {
        return TestInitializer.runTest(() => {
            const password = "password";
            const api = TestInitializer.getApi();
            return api.createImageWatermarkOnline(fs.createReadStream("TestData/test.pptx"), fs.createReadStream("TestData/watermark.png"), null, password).then((postResult) => {
                assert.equal(200, postResult.response.statusCode);
                assert(fs.createReadStream("TestData/test.pptx").length != postResult.body.length);
                return api.deleteWatermarkOnline(fs.createReadStream("TestData/test.pptx"), null, password).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert(deleteResult.body.length < postResult.body.length);
                });
            });
        });
    });

    it("image dto request", () => {
        return TestInitializer.runTest(() => {
            const password = "password";
            const api = TestInitializer.getApi();
            let watermark = new model.PictureFrame();
            let fillFormat = new model.PictureFill();
            fillFormat.base64Data = fs.readFileSync("TestData/watermark.png").toString("base64");
            watermark.fillFormat = fillFormat;
            return api.createImageWatermarkOnline(fs.createReadStream("TestData/test.pptx"), null, watermark, password).then((postResult) => {
                assert.equal(200, postResult.response.statusCode);
                assert(fs.createReadStream("TestData/test.pptx").length != postResult.body.length);
                return api.deleteWatermarkOnline(fs.createReadStream("TestData/test.pptx"), null, password).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert(deleteResult.body.length < postResult.body.length);
                });
            });
        });
    });
});


describe("Animation tests", () => {
    it("animation get", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const slideIndex = 1;
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getAnimation(fileName, slideIndex, null, null, password, folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                    return api.getAnimation(fileName, slideIndex, 3, null, password, folderName).then((shapeResult) => {
                        assert.equal(200, shapeResult.response.statusCode);
                        assert.equal(1, (shapeResult.body as model.SlideAnimation).mainSequence.length);
                        assert.equal(0, (shapeResult.body as model.SlideAnimation).interactiveSequences.length);
                        return api.getAnimation(fileName, slideIndex, 3, 1, password, folderName).then((paragraphResult) => {
                            assert.equal(200, paragraphResult.response.statusCode);
                            assert.equal(0, (paragraphResult.body as model.SlideAnimation).mainSequence.length);
                        });
                    });
                });
            });
        });
    });

    it("animation set", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.SlideAnimation();
                const effect1 = new model.Effect();
                effect1.type = model.Effect.TypeEnum.Blink;
                effect1.shapeIndex = 2;
                effect1.paragraphIndex = 1;

                const effect2 = new model.Effect();
                effect2.type = model.Effect.TypeEnum.Box;
                effect2.subtype = model.Effect.SubtypeEnum.In;
                effect2.presetClassType = model.Effect.PresetClassTypeEnum.Entrance;
                effect2.shapeIndex = 4;
                dto.mainSequence = [ effect1, effect2 ];
                dto.interactiveSequences = [];
                return api.setAnimation(fileName, 1, dto, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(dto.mainSequence.length, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(0, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("animation create effect", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Effect();
                dto.type = model.Effect.TypeEnum.Blast;
                dto.shapeIndex = 3;
                return api.createAnimationEffect(fileName, 1, dto, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(2, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("animation create interactive sequence", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.InteractiveSequence();
                const effect = new model.Effect();
                effect.type = model.Effect.TypeEnum.Blast;
                effect.shapeIndex = 3;
                dto.triggerShapeIndex = 2;
                dto.effects = [ effect ];
                return api.createAnimationInteractiveSequence(fileName, 1, dto, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(2, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("animation create interactive sequence effect", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Effect();
                dto.type = model.Effect.TypeEnum.Blast;
                dto.shapeIndex = 3;
                return api.createAnimationInteractiveSequenceEffect(fileName, 1, 1, dto, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("animation update effect", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Effect();
                dto.type = model.Effect.TypeEnum.Blast;
                dto.shapeIndex = 3;
                return api.updateAnimationEffect(fileName, 1, 1, dto, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("animation update interactive sequence effect", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Effect();
                dto.type = model.Effect.TypeEnum.Blast;
                dto.shapeIndex = 3;
                return api.updateAnimationInteractiveSequenceEffect(fileName, 1, 1, 1, dto, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("animation delete", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteAnimation(fileName, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(0, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(0, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("animation delete main sequence", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteAnimationMainSequence(fileName, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(0, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("animation delete main sequence effect", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteAnimationEffect(fileName, 1, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(0, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("animation delete interactive sequences", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteAnimationInteractiveSequences(fileName, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(0, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("animation delete interactive sequence", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteAnimationInteractiveSequence(fileName, 1, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(0, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("animation delete interactive sequence effect", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteAnimationInteractiveSequenceEffect(fileName, 1, 1, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });
});

describe("Additional tests", () => {
    it("multiple files upload", () => {
        let file1 = new model.RequestInputFile();
        file1.index = 0;
        let file2 = new model.RequestInputFile();
        file2.index = 1;
        let task = new model.Save();
        task.format = model.Save.FormatEnum.Pptx;
        task.output = new model.ResponseOutputFile();
        const pipeline = { input: { templateData: file1, template: file2 }, tasks: [ task ] };
        const fs = require('fs');
        const files = [
            fs.createReadStream("TestData/TemplatingCVDataWithBase64.xml"),
            fs.createReadStream("TestData/TemplateCV.pptx")
        ];
        return TestInitializer.getApi().pipeline(pipeline, files).then((result) => {
            assert.equal(200, result.response.statusCode);
        });
    });

    it("shape type", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShape(fileName, 1, 1, "password", folderName).then((result) => {
                    assert.equal("Shape", (result.body as model.ShapeBase).type);
                    assert.equal("1", (result.body as model.Shape).text);
                });
            });
        });
    });

    it("chart type", () => {
        let chart = new model.Chart();
        assert.equal("Chart", chart.type);
    });

    it("nullable fields", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const min1  = 44.3;
            const min2 = 12;
            const max1 = 104.3;
            const max2 = 87;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                let chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.Line;
                chart.width = 400;
                chart.height = 300;
                chart.title = { hasTitle: true, text: "MyChart" };
                const series = new model.OneValueSeries();
                series.type = model.Series.TypeEnum.ClusteredColumn;
                series.dataPointType = model.OneValueSeries.DataPointTypeEnum.OneValue;
                series.name = "Series1";
                series.dataPoints = [{ value: 40}, { value: 50 }];
                chart.series = [series];
                chart.axes = { horizontalAxis: { isAutomaticMinValue: false, minValue: min1, isAutomaticMaxValue: false, maxValue: max1 } };
                return api.createShape(fileName, 1, chart, null, null, "password", folderName).then(() => {
                    return api.getShape(fileName, 1, 5, "password", folderName).then((result) => {
                        assert.equal(min1, (result.body as model.Chart).axes.horizontalAxis.minValue);
                        assert.equal(max1, (result.body as model.Chart).axes.horizontalAxis.maxValue);
                        chart = new model.Chart();
                        chart.axes = { horizontalAxis: { minValue: min2 } };
                        return api.updateShape(fileName, 1, 5, chart, "password", folderName).then(() => {
                            return api.getShape(fileName, 1, 5, "password", folderName).then((result2) => {
                                assert.equal(min2, (result2.body as model.Chart).axes.horizontalAxis.minValue);
                                assert.equal(max1, (result2.body as model.Chart).axes.horizontalAxis.maxValue);
                                chart.axes = { horizontalAxis: { maxValue: max2 } };
                                return api.updateShape(fileName, 1, 5, chart, "password", folderName).then(() => {
                                    return api.getShape(fileName, 1, 5, "password", folderName).then((result3) => {
                                        assert.equal(min2, (result3.body as model.Chart).axes.horizontalAxis.minValue);
                                        assert.equal(max2, (result3.body as model.Chart).axes.horizontalAxis.maxValue);
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

describe("Tests for timeout configuration parameter", () => {
    it("convert slide to svg", () => {
/*unstable test
        return TestInitializer.initialize("postSlideSaveAs", null, null).then(() => {
            return TestInitializer.getApi().downloadSlide("test.pptx", 1, "svg", null, "password", "TempSlidesSDK")
                .then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.fail("must have failed because of timeout");
                }).catch((e) => {
                });
        }).catch((err) => assert.fail(err));*/
    });
});