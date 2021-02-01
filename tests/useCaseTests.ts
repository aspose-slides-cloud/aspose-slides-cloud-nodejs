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
import * as requests from "../sdk/requests";
import { TestInitializer } from "./testInitializer";

describe("Create tests", () => {
    it("empty", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            const deleteRequest = new requests.DeleteFileRequest();
            deleteRequest.path = folderName + "/" + fileName;
            return api.deleteFile(deleteRequest).then(() => {
                const postRequest = new requests.PostSlidesDocumentRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                return api.postSlidesDocument(postRequest).then((result) => {
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
            const deleteRequest = new requests.DeleteFileRequest();
            deleteRequest.path = folderName + "/" + fileName;
            return api.deleteFile(deleteRequest).then(() => {
                const postRequest = new requests.PostSlidesDocumentRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.inputPassword = "password";
                postRequest.data = fs.createReadStream("TestData/test.pptx");
                return api.postSlidesDocument(postRequest).then((result) => {
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
            const deleteRequest = new requests.DeleteFileRequest();
            deleteRequest.path = folderName + "/" + newFileName;
            return api.deleteFile(deleteRequest).then(() => {
                const copyRequest = new requests.CopyFileRequest();
                copyRequest.srcPath = "TempTests/" + fileName;
                copyRequest.destPath = folderName + "/" + fileName;
                return api.copyFile(copyRequest).then(() => {
                    const postRequest = new requests.PostSlidesDocumentFromSourceRequest();
                    postRequest.name = newFileName;
                    postRequest.folder = folderName;
                    postRequest.sourcePassword = "password";
                    postRequest.sourcePath = folderName + "/" + fileName;
                    return api.postSlidesDocumentFromSource(postRequest).then((result) => {
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
            const deleteRequest = new requests.DeleteFileRequest();
            deleteRequest.path = folderName + "/" + fileName;
            return api.deleteFile(deleteRequest).then(() => {
                const copyRequest = new requests.CopyFileRequest();
                copyRequest.srcPath = "TempTests/" + templateFileName;
                copyRequest.destPath = folderName + "/" + templateFileName;
                return api.copyFile(copyRequest).then(() => {
                    const postRequest = new requests.PostSlidesDocumentFromTemplateRequest();
                    postRequest.name = fileName;
                    postRequest.folder = folderName;
                    postRequest.templatePath = folderName + "/" + templateFileName;
                    postRequest.data = "<staff><person><name>John Doe</name><address><line1>10 Downing Street</line1><line2>London</line2></address><phone>+457 123456</phone><bio>Hi, I'm John and this is my CV</bio><skills><skill><title>C#</title><level>Excellent</level></skill><skill><title>C++</title><level>Good</level></skill><skill><title>Java</title><level>Average</level></skill></skills></person></staff>";
                    return api.postSlidesDocumentFromTemplate(postRequest).then((result) => {
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
            const deleteRequest = new requests.DeleteFileRequest();
            deleteRequest.path = folderName + "/" + fileName;
            return api.deleteFile(deleteRequest).then(() => {
                const postRequest = new requests.PostSlidesDocumentFromHtmlRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.html = "<html><body>New Content</body></html>";
                return api.postSlidesDocumentFromHtml(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const slidesRequest = new requests.GetSlidesSlidesListRequest();
                slidesRequest.name = fileName;
                slidesRequest.folder = folderName;
                slidesRequest.password = password;
                return api.getSlidesSlidesList(slidesRequest).then((r1) => {
                    const slideCount = (r1.body as model.Slides).slideList.length;
                    const postRequest = new requests.PostSlidesDocumentFromHtmlRequest();
                    postRequest.name = fileName;
                    postRequest.folder = folderName;
                    postRequest.password = password;
                    postRequest.html = "<html><body>New Content</body></html>";
                    return api.postSlidesDocumentFromHtml(postRequest).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        return api.getSlidesSlidesList(slidesRequest).then((r2) => {
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
            const deleteRequest = new requests.DeleteFileRequest();
            deleteRequest.path = folderName + "/" + fileName;
            return api.deleteFile(deleteRequest).then(() => {
                const postRequest = new requests.PostSlidesDocumentFromPdfRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.pdf = fs.createReadStream("TestData/test.pdf");
                return api.postSlidesDocumentFromPdf(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const slidesRequest = new requests.GetSlidesSlidesListRequest();
                slidesRequest.name = fileName;
                slidesRequest.folder = folderName;
                slidesRequest.password = password;
                return api.getSlidesSlidesList(slidesRequest).then((r1) => {
                    const slideCount = (r1.body as model.Slides).slideList.length;
                    const postRequest = new requests.PostSlidesDocumentFromPdfRequest();
                    postRequest.name = fileName;
                    postRequest.folder = folderName;
                    postRequest.password = password;
                    postRequest.pdf = fs.createReadStream("TestData/test.pdf");
                    return api.postSlidesDocumentFromPdf(postRequest).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        return api.getSlidesSlidesList(slidesRequest).then((r2) => {
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
            const postRequest = new requests.PostSlidesConvertRequest();
            postRequest.document = fs.createReadStream("TestData/test.pptx");
            postRequest.password = "password";
            postRequest.format = 'pdf';
            return api.postSlidesConvert(postRequest).then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("put from request", () => {
        return TestInitializer.runTest(() => {
            const outPath = "TestData/test.pdf";
            const api = TestInitializer.getApi();
            const putRequest = new requests.PutSlidesConvertRequest();
            putRequest.document = fs.createReadStream("TestData/test.pptx");
            putRequest.password = "password";
            putRequest.format = 'pdf';
            putRequest.outPath = outPath;
            return api.putSlidesConvert(putRequest).then((putResult) => {
                assert.equal(200, putResult.response.statusCode);
                const existsRequest = new requests.ObjectExistsRequest();
                existsRequest.path = outPath;
                return api.objectExists(existsRequest).then((existsResult) => {
                    assert.equal(200, existsResult.response.statusCode);
                    assert((existsResult.body as model.ObjectExist).exists);
                });
            });
        });
    });

    it("post from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostSlidesSaveAsRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.format = 'pdf';
                return api.postSlidesSaveAs(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSlidesSaveAsRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                putRequest.format = 'pdf';
                putRequest.outPath = outPath;
                return api.putSlidesSaveAs(putRequest).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    const existsRequest = new requests.ObjectExistsRequest();
                    existsRequest.path = outPath;
                    return api.objectExists(existsRequest).then((existsResult) => {
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
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostSlidesSaveAsRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.format = 'pdf';
                return api.postSlidesSaveAs(postRequest).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    const options = new model.PdfExportOptions();
                    options.drawSlidesFrame = true;
                    postRequest.options = options;
                    return api.postSlidesSaveAs(postRequest).then((result2) => {
                        assert.equal(200, result2.response.statusCode);
                        assert.notEqual(result1.body.length, result2.body.length);
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetNotesSlideRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = "password";
                getRequest.slideIndex = 1;
                return api.getNotesSlide(getRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetNotesSlideExistsRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = "password";
                getRequest.slideIndex = 1;
                return api.getNotesSlideExists(getRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetNotesSlideWithFormatRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = "password";
                getRequest.slideIndex = 1;
                getRequest.format = 'png';
                return api.getNotesSlideWithFormat(getRequest).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("get from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            const request = new requests.PostGetNotesSlideRequest();
            request.document = fs.createReadStream("TestData/test.pptx");
            request.password = "password";
            request.slideIndex = 1;
            return api.postGetNotesSlide(request).then((result) => {
                assert((result.body as model.NotesSlide) != null);
            });
        });
    });

    it("exists from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            const request = new requests.PostGetNotesSlideExistsRequest();
            request.document = fs.createReadStream("TestData/test.pptx");
            request.password = "password";
            request.slideIndex = 1;
            return api.postGetNotesSlideExists(request).then((result) => {
                let res = "" + result.body;
                assert.equal(true, JSON.parse(res)["exists"]);
            });
        });
    });

    it("download from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            const request = new requests.PostGetNotesSlideWithFormatRequest();
            request.document = fs.createReadStream("TestData/test.pptx");
            request.password = "password";
            request.slideIndex = 1;
            request.format = 'png';
            return api.postGetNotesSlideWithFormat(request).then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });
});


describe("ShapeType tests", () => {
    it("shape add", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.Shape();
                dto.shapeType = model.GeometryShape.ShapeTypeEnum.Callout1;
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.Shape();
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest)
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.GraphicalObject();
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest)
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.PictureFrame();
                const fill = new model.PictureFill();
                fill.base64Data = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY5g+ffp/AAZTAsWGL27gAAAAAElFTkSuQmCC";
                dto.pictureFillFormat = fill;
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.PictureFrame();
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest)
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.AudioFrame();
                dto.base64Data = "bXAzc2FtcGxl";
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.AudioFrame();
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest)
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.VideoFrame();
                dto.base64Data = "bXAzc2FtcGxl";
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.VideoFrame();
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest)
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.OleObjectFrame();
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest)
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
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
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.SmartArt();
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.Chart();
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
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
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.Table();
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest)
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.GroupShape();
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest)
                    .then(() => assert.fail("GroupShape should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("connector add", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.Connector();
                dto.shapeType = model.GeometryShape.ShapeTypeEnum.BentConnector3;
                const start = new model.ResourceUri();
                start.href = "https://api.aspose.cloud/v3.0/slides/myPresentation.pptx/slides/1/shapes/1";
                dto.startShapeConnectedTo = start;
                const end = new model.ResourceUri();
                end.href = "https://api.aspose.cloud/v3.0/slides/myPresentation.pptx/slides/1/shapes/2";
                dto.endShapeConnectedTo = end;
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const dto = new model.Connector();
                postRequest.dto = dto;
                return api.postAddNewShape(postRequest).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.Connector);
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetSlideShapeRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = "password";
                getRequest.slideIndex = 3;
                getRequest.shapeIndex = 1;
                return api.getSlideShape(getRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 3;
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
                postRequest.dto = chart;
                return api.postAddNewShape(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSlideShapeInfoRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                putRequest.slideIndex = 3;
                putRequest.shapeIndex = 1;
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
                putRequest.dto = chart;
                return api.putSlideShapeInfo(putRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostChartSeriesRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 3;
                postRequest.shapeIndex = 1;
                const series = new model.OneValueSeries();
                series.name = "Series3";
                series.dataPoints = [{ value: 40 }, { value: 50 }, { value: 14 }, { value: 70 }];
                postRequest.series = series;
                return api.postChartSeries(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutChartSeriesRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                putRequest.slideIndex = 3;
                putRequest.shapeIndex = 1;
                putRequest.seriesIndex = 2;
                const series = new model.OneValueSeries();
                series.name = "Series3";
                series.dataPoints = [{ value: 40 }, { value: 50 }, { value: 14 }, { value: 70 }];
                putRequest.series = series;
                return api.putChartSeries(putRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const deleteRequest = new requests.DeleteChartSeriesRequest();
                deleteRequest.name = fileName;
                deleteRequest.folder = folderName;
                deleteRequest.password = "password";
                deleteRequest.slideIndex = 3;
                deleteRequest.shapeIndex = 1;
                deleteRequest.seriesIndex = 2;
                return api.deleteChartSeries(deleteRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostChartCategoryRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 3;
                postRequest.shapeIndex = 1;
                const category = new model.ChartCategory();
                category.value = "NewCategory";
                category.dataPoints = [{ value: 40 }, { value: 50 }, { value: 14 }];
                postRequest.category = category;
                return api.postChartCategory(postRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutChartCategoryRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                putRequest.slideIndex = 3;
                putRequest.shapeIndex = 1;
                putRequest.categoryIndex = 2;
                const category = new model.ChartCategory();
                category.value = "NewCategory";
                category.dataPoints = [{ value: 40 }, { value: 50 }, { value: 14 }];
                putRequest.category = category;
                return api.putChartCategory(putRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const deleteRequest = new requests.DeleteChartCategoryRequest();
                deleteRequest.name = fileName;
                deleteRequest.folder = folderName;
                deleteRequest.password = "password";
                deleteRequest.slideIndex = 3;
                deleteRequest.shapeIndex = 1;
                deleteRequest.categoryIndex = 2;
                return api.deleteChartCategory(deleteRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostChartDataPointRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 3;
                postRequest.shapeIndex = 1;
                postRequest.seriesIndex = 2;
                const dataPoint = new model.OneValueChartDataPoint();
                dataPoint.value = 40;
                postRequest.dataPoint = dataPoint;
                return api.postChartDataPoint(postRequest)
                    .then(() => {
                        assert.fail('Must have failed');
                    }).catch((err) => {
                        //Must throw ApiException because adding data points only works with Scatter & Bubble charts.
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutChartDataPointRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                putRequest.slideIndex = 3;
                putRequest.shapeIndex = 1;
                putRequest.seriesIndex = 2;
                putRequest.pointIndex = 2;
                const dataPoint = new model.OneValueChartDataPoint();
                dataPoint.value = 40;
                putRequest.dataPoint = dataPoint;
                return api.putChartDataPoint(putRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const deleteRequest = new requests.DeleteChartDataPointRequest();
                deleteRequest.name = fileName;
                deleteRequest.folder = folderName;
                deleteRequest.password = "password";
                deleteRequest.slideIndex = 3;
                deleteRequest.shapeIndex = 1;
                deleteRequest.seriesIndex = 2;
                deleteRequest.pointIndex = 2;
                return api.deleteChartDataPoint(deleteRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 3;
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
                postRequest.dto = chart;
                return api.postAddNewShape(postRequest).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(1, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
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
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSlidesHeaderFooterRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                const dto = new model.HeaderFooter();
                dto.isFooterVisible = true;
                dto.footerText = "footer";
                dto.isDateTimeVisible = false;
                putRequest.dto = dto;
                return api.putSlidesHeaderFooter(putRequest).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    const getRequest = new requests.GetSlideHeaderFooterRequest();
                    getRequest.name = fileName;
                    getRequest.folder = folderName;
                    getRequest.password = "password";
                    getRequest.slideIndex = 1;
                    return api.getSlideHeaderFooter(getRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSlideHeaderFooterRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = password;
                putRequest.slideIndex = slideIndex;
                const dto = new model.HeaderFooter();
                dto.isFooterVisible = true;
                dto.footerText = "footer";
                dto.isDateTimeVisible = false;
                putRequest.dto = dto;
                return api.putSlideHeaderFooter(putRequest).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(true, (putResult.body as model.HeaderFooter).isFooterVisible);
                    assert.equal(false, (putResult.body as model.HeaderFooter).isDateTimeVisible);
                    const getRequest = new requests.GetSlideHeaderFooterRequest();
                    getRequest.name = fileName;
                    getRequest.folder = folderName;
                    getRequest.password = password;
                    getRequest.slideIndex = slideIndex;
                    return api.getSlideHeaderFooter(getRequest).then((result) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutNotesSlideHeaderFooterRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = password;
                putRequest.slideIndex = slideIndex;
                const dto = new model.NotesSlideHeaderFooter();
                dto.isHeaderVisible = true;
                dto.footerText = "footer";
                dto.isDateTimeVisible = false;
                putRequest.dto = dto;
                return api.putNotesSlideHeaderFooter(putRequest).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(true, (putResult.body as model.NotesSlideHeaderFooter).isHeaderVisible);
                    assert.equal(false, (putResult.body as model.NotesSlideHeaderFooter).isDateTimeVisible);
                    const getRequest = new requests.GetNotesSlideHeaderFooterRequest();
                    getRequest.name = fileName;
                    getRequest.folder = folderName;
                    getRequest.password = password;
                    getRequest.slideIndex = slideIndex;
                    return api.getNotesSlideHeaderFooter(getRequest).then((result) => {
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
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetSectionsRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = "password";
                return api.getSections(getRequest).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    assert.equal(3, (getResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("replace", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSectionsRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                const dto = new model.Sections();
                const section1 = new model.Section();
                section1.name = "Section1";
                section1.firstSlideIndex = 1;
                const section2 = new model.Section();
                section2.name = "Section2";
                section2.firstSlideIndex = 3;
                dto.sectionList = [ section1, section2 ];
                putRequest.sections = dto;
                return api.putSections(putRequest).then((putResult) => {
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
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostSectionRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.sectionName = "NewSection";
                postRequest.slideIndex = 4;
                return api.postSection(postRequest).then((postResult) => {
                    assert.equal(201, postResult.response.statusCode);
                    assert.equal(4, (postResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("put", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSectionRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                putRequest.sectionIndex = 2;
                putRequest.sectionName = "UpdatedSection";
                return api.putSection(putRequest).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(3, (putResult.body as model.Sections).sectionList.length);
                    assert.equal(putRequest.sectionName, (putResult.body as model.Sections).sectionList[1].name);
                });
            });
        });
    });

    it("move", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostSectionMoveRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.sectionIndex = 1;
                postRequest.newPosition = 2;
                return api.postSectionMove(postRequest).then((postResult) => {
                    assert.equal(200, postResult.response.statusCode);
                    assert.equal(3, (postResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("clear", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const deleteRequest = new requests.DeleteSectionsRequest();
                deleteRequest.name = fileName;
                deleteRequest.folder = folderName;
                deleteRequest.password = "password";
                return api.deleteSections(deleteRequest).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert.equal(0, (deleteResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("delete many", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const deleteRequest = new requests.DeleteSectionsRequest();
                deleteRequest.name = fileName;
                deleteRequest.folder = folderName;
                deleteRequest.password = "password";
                deleteRequest.sections = [ 2, 3 ];
                return api.deleteSections(deleteRequest).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert.equal(1, (deleteResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("delete", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const deleteRequest = new requests.DeleteSectionRequest();
                deleteRequest.name = fileName;
                deleteRequest.folder = folderName;
                deleteRequest.password = "password";
                deleteRequest.sectionIndex = 2;
                return api.deleteSection(deleteRequest).then((deleteResult) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetSlidesDocumentPropertyRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = password;
                getRequest.propertyName = propertyName;
                return api.getSlidesDocumentProperty(getRequest).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    assert.equal(propertyName, (getResult.body as model.DocumentProperty).name);
                    assert((getResult.body as model.DocumentProperty).builtIn);
                    const putRequest = new requests.PutSlidesSetDocumentPropertyRequest();
                    putRequest.name = fileName;
                    putRequest.folder = folderName;
                    putRequest.password = password;
                    putRequest.propertyName = propertyName;
                    const property = new model.DocumentProperty();
                    property.value = updatedPropertyValue;
                    putRequest.property = property;
                    return api.putSlidesSetDocumentProperty(putRequest).then((putResult) => {
                        assert.equal(200, putResult.response.statusCode);
                        assert.equal(propertyName, (putResult.body as model.DocumentProperty).name);
                        assert.equal(updatedPropertyValue, (putResult.body as model.DocumentProperty).value);
                        assert((putResult.body as model.DocumentProperty).builtIn);
                        const deleteRequest = new requests.DeleteSlidesDocumentPropertyRequest();
                        deleteRequest.name = fileName;
                        deleteRequest.folder = folderName;
                        deleteRequest.password = password;
                        deleteRequest.propertyName = propertyName;
                        return api.deleteSlidesDocumentProperty(deleteRequest).then((deleteResult) => {
                            assert.equal(200, deleteResult.response.statusCode);
                            return api.getSlidesDocumentProperty(getRequest).then((getResult2) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSlidesSetDocumentPropertyRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = password;
                putRequest.propertyName = propertyName;
                const property = new model.DocumentProperty();
                property.value = updatedPropertyValue;
                putRequest.property = property;
                return api.putSlidesSetDocumentProperty(putRequest).then((putResult) => {
                    assert.equal(201, putResult.response.statusCode);
                    assert.equal(propertyName, (putResult.body as model.DocumentProperty).name);
                    assert.equal(updatedPropertyValue, (putResult.body as model.DocumentProperty).value);
                    assert(!(putResult.body as model.DocumentProperty).builtIn);
                    const deleteRequest = new requests.DeleteSlidesDocumentPropertyRequest();
                    deleteRequest.name = fileName;
                    deleteRequest.folder = folderName;
                    deleteRequest.password = password;
                    deleteRequest.propertyName = propertyName;
                    return api.deleteSlidesDocumentProperty(deleteRequest).then((deleteResult) => {
                        assert.equal(200, deleteResult.response.statusCode);
                        const getRequest = new requests.GetSlidesDocumentPropertyRequest();
                        getRequest.name = fileName;
                        getRequest.folder = folderName;
                        getRequest.password = password;
                        getRequest.propertyName = propertyName;
                        return api.getSlidesDocumentProperty(getRequest)
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetSlidesDocumentPropertiesRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = password;
                return api.getSlidesDocumentProperties(getRequest).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    const count = (getResult.body as model.DocumentProperties).list.length;
                    const postRequest = new requests.PostSlidesSetDocumentPropertiesRequest();
                    postRequest.name = fileName;
                    postRequest.folder = folderName;
                    postRequest.password = password;
                    const property1 = new model.DocumentProperty();
                    property1.name = propertyName;
                    property1.value = updatedPropertyValue;
                    const property2 = new model.DocumentProperty();
                    property2.name = customPropertyName;
                    property2.value = updatedPropertyValue;
                    const properties = new model.DocumentProperties();
                    properties.list = [ property1, property2 ];
                    postRequest.properties = properties;
                    return api.postSlidesSetDocumentProperties(postRequest).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        assert.equal(count + 1, (postResult.body as model.DocumentProperties).list.length);
                        const deleteRequest = new requests.DeleteSlidesDocumentPropertiesRequest();
                        deleteRequest.name = fileName;
                        deleteRequest.folder = folderName;
                        deleteRequest.password = password;
                        return api.deleteSlidesDocumentProperties(deleteRequest).then((deleteResult) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetSlidesSlidePropertiesRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = password;
                return api.getSlidesSlideProperties(getRequest).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    const properties = getResult.body as model.SlideProperties;
                    const putRequest = new requests.PutSlidesSlidePropertiesRequest();
                    putRequest.name = fileName;
                    putRequest.folder = folderName;
                    putRequest.password = password;
                    const dto = new model.SlideProperties();
                    dto.firstSlideNumber = properties.firstSlideNumber + 2;
                    putRequest.dto = dto;
                    return api.putSlidesSlideProperties(putRequest).then((putResult) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSlidesSlidePropertiesRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = password;
                const dto = new model.SlideProperties();
                dto.sizeType = model.SlideProperties.SizeTypeEnum.B4IsoPaper;
                putRequest.dto = dto;
                return api.putSlidesSlideProperties(putRequest).then((putResult) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSlidesSlidePropertiesRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = password;
                const dto = new model.SlideProperties();
                dto.width = width;
                dto.height = height;
                putRequest.dto = dto;
                return api.putSlidesSlideProperties(putRequest).then((putResult) => {
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
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetSlidesProtectionPropertiesRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = password;
                return api.getSlidesProtectionProperties(getRequest).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    const properties = getResult.body as model.ProtectionProperties;
                    const putRequest = new requests.PutSlidesProtectionPropertiesRequest();
                    putRequest.name = fileName;
                    putRequest.folder = folderName;
                    putRequest.password = password;
                    const dto = new model.ProtectionProperties();
                    dto.readOnlyRecommended = !properties.readOnlyRecommended;
                    putRequest.dto = dto;
                    return api.putSlidesProtectionProperties(putRequest).then((putResult) => {
                        assert.equal(200, putResult.response.statusCode);
                        assert.equal(properties.encryptDocumentProperties, (putResult.body as model.ProtectionProperties).encryptDocumentProperties);
                        assert.notEqual(properties.readOnlyRecommended, (putResult.body as model.ProtectionProperties).readOnlyRecommended);
                    });
                });
            });
        });
    });
});

describe("Auth tests", () => {
    it("good auth", () => {
        return TestInitializer.runTest(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            return api.getSlidesApiInfo().then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("bad auth", () => {
        return TestInitializer.runTest(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            api.configuration.appSid = "invalid";
            return api.getSlidesApiInfo().then(() => {
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
            return api.getSlidesApiInfo().then(() => {
                const api2 = new sdkApi.SlidesApi("invalid", config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
                api2.configuration.accessToken = api.configuration.accessToken;
                return api2.getSlidesApiInfo().then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("bad token", () => {
        return TestInitializer.runTest(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            return api.getSlidesApiInfo().then(() => {
                api.configuration.accessToken = "invalid";
                return api.getSlidesApiInfo().then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });
});

describe("Additional tests", () => {
    it("multiple files upload", () => {
        const request = new requests.PostSlidesPipelineRequest();
        let file1 = new model.RequestInputFile();
        file1.index = 0;
        let file2 = new model.RequestInputFile();
        file2.index = 1;
        let task = new model.Save();
        task.format = model.Save.FormatEnum.Pptx;
        task.output = new model.ResponseOutputFile();
        request.pipeline = { input: { templateData: file1, template: file2 }, tasks: [ task ] };
        const fs = require('fs');
        request.files = [
            fs.createReadStream("TestData/TemplatingCVDataWithBase64.xml"),
            fs.createReadStream("TestData/TemplateCV.pptx")
        ];
        
        return TestInitializer.getApi().postSlidesPipeline(request).then((result) => {
            assert.equal(200, result.response.statusCode);
        });
    });

    it("shape type", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            const request = new requests.CopyFileRequest();
            request.srcPath = "TempTests/" + fileName;
            request.destPath = folderName + "/" + fileName;
            return api.copyFile(request).then(() => {
                const shapeRequest = new requests.GetSlideShapeRequest();
                shapeRequest.name = fileName;
                shapeRequest.folder = folderName;
                shapeRequest.password = "password";
                shapeRequest.slideIndex = 1;
                shapeRequest.shapeIndex = 1;
                return api.getSlideShape(shapeRequest).then((result) => {
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
            const fileName = "placeholders.pptx";
            const min1  = 44.3;
            const min2 = 12;
            const max1 = 104.3;
            const max2 = 87;
            const api = TestInitializer.getApi();
            const request = new requests.CopyFileRequest();
            request.srcPath = "TempTests/" + fileName;
            request.destPath = folderName + "/" + fileName;
            return api.copyFile(request).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const chart = new model.Chart();
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
                postRequest.dto = chart;
                return api.postAddNewShape(postRequest).then(() => {
                    const getRequest = new requests.GetSlideShapeRequest();
                    getRequest.name = fileName;
                    getRequest.folder = folderName;
                    getRequest.password = "password";
                    getRequest.slideIndex = 1;
                    getRequest.shapeIndex = 4;
                    return api.getSlideShape(getRequest).then((result) => {
                        assert.equal(min1, (result.body as model.Chart).axes.horizontalAxis.minValue);
                        assert.equal(max1, (result.body as model.Chart).axes.horizontalAxis.maxValue);
                        const putRequest = new requests.PutSlideShapeInfoRequest();
                        putRequest.name = fileName;
                        putRequest.folder = folderName;
                        putRequest.password = "password";
                        putRequest.slideIndex = 1;
                        putRequest.shapeIndex = 4;
                        putRequest.dto = new model.Chart();
                        (putRequest.dto as model.Chart).axes = { horizontalAxis: { minValue: min2 } };
                        return api.putSlideShapeInfo(putRequest).then(() => {
                            return api.getSlideShape(getRequest).then((result2) => {
                                assert.equal(min2, (result2.body as model.Chart).axes.horizontalAxis.minValue);
                                assert.equal(max1, (result2.body as model.Chart).axes.horizontalAxis.maxValue);
                                (putRequest.dto as model.Chart).axes = { horizontalAxis: { maxValue: max2 } };
                                return api.putSlideShapeInfo(putRequest).then(() => {
                                    return api.getSlideShape(getRequest).then((result3) => {
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
/*unstable test
describe("Tests for timeout configuration parameter", () => {
    it("convert slide to svg", () => {
        return TestInitializer.initialize("postSlideSaveAs", null, null).then(() => {
            const request = new PostSlideSaveAsRequest();
            request.format = "svg";
            request.name = "test.pptx";
            request.folder = "TempSlidesSDK";
            request.password = "password";
            request.slideIndex = 1;
            return TestInitializer.getApi().postSlideSaveAs(request)
                .then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.fail("must have failed because of timeout");
                }).catch((e) => {
                });
        }).catch((err) => assert.fail(err));
    });
});*/