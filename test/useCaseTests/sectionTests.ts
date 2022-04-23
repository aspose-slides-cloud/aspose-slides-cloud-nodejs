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
                dto.sectionList = [section1, section2];
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
                return api.deleteSections(fileName, [2, 3], null, "password", folderName).then((deleteResult) => {
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