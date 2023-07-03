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

describe("Section tests", () => {
    it("get sections", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getSections(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    assert.equal(3, (getResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("set sections", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.Sections();
                const section1 = new model.Section();
                section1.name = "Section1";
                section1.firstSlideIndex = 1;
                const section2 = new model.Section();
                section2.name = "Section2";
                section2.firstSlideIndex = 3;
                dto.sectionList = [section1, section2];
                return api.setSections(TestUtils.fileName, dto, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(dto.sectionList.length, (putResult.body as model.Sections).sectionList.length);
                    assert.equal(
                        section2.firstSlideIndex - section1.firstSlideIndex, (putResult.body as model.Sections).sectionList[0].slideList.length);
                });
            });
        });
    });

    it("create section", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.createSection(TestUtils.fileName, "NewSection", 5, TestUtils.password, TestUtils.folderName).then((postResult) => {
                    assert.equal(201, postResult.response.statusCode);
                    assert.equal(4, (postResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("update section", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const sectionIndex = 2;
                const sectionName = "UpdatedSection";
                return api.updateSection(TestUtils.fileName, sectionIndex, sectionName, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(3, (putResult.body as model.Sections).sectionList.length);
                    assert.equal(sectionName, (putResult.body as model.Sections).sectionList[sectionIndex - 1].name);
                });
            });
        });
    });

    it("move section", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.moveSection(TestUtils.fileName, 1, 2, TestUtils.password, TestUtils.folderName).then((postResult) => {
                    assert.equal(200, postResult.response.statusCode);
                    assert.equal(3, (postResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("clear sections", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.deleteSections(TestUtils.fileName, null, null, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert.equal(0, (deleteResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("delete sections", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.deleteSections(TestUtils.fileName, [2, 3], null, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert.equal(1, (deleteResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("delete section", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.deleteSection(TestUtils.fileName, 2, null, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert.equal(2, (deleteResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });
});