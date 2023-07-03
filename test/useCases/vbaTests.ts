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

describe("VBA tests", () => {
    it("create VBA module", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.VbaModule();
                dto.name = "Module2";
                dto.sourceCode = "Sub Test() MsgBox \"Test\" End Sub"
                dto.references = [
                    {
                        name: "stdole",
                        libId: "*\\\\G{00020430-0000-0000-C000-000000000046}#2.0#0#C:\\\\Windows\\\\system32\\\\stdole2.tlb#OLE Automation"
                    },
                    {
                        name: "Office",
                        libId: "*\\\\G{2DF8D04C-5BFA-101B-BDE5-00AA0044DE52}#2.0#0#C:\\\\Program Files\\\\Common Files\\\\Microsoft Shared\\\\OFFICE14\\\\MSO.DLL#Microsoft Office 14.0 Object Library"
                    }
                ];
                return api.createVbaModule("macros.pptm", dto, TestUtils.password, TestUtils.folderName).then((response) => {
                    const vbaModule = (response.body as model.VbaModule);
                    assert.equal(dto.name, vbaModule.name);
                });
            });
        });
    });
    

    it("delete VBA module", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFolderName + "/macros.pptm", TestUtils.folderName + "/macros.pptm").then(() => {
                const moduleIndex = 1;
                return api.deleteVbaModule("macros.pptm", moduleIndex, null, TestUtils.folderName).then((response) => {
                    const vbaProject = (response.body as model.VbaProject);
                    assert.equal(0, vbaProject.modules.length);
                });
            });
        });
    });

    it("get VBA module", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFolderName + "/macros.pptm", TestUtils.folderName + "/macros.pptm").then(() => {
                const moduleIndex = 1;
                return api.getVbaModule("macros.pptm", moduleIndex, null, TestUtils.folderName).then((response) => {
                    const vbaModule = (response.body as model.VbaModule);
                    assert.equal("Module1", vbaModule.name);
                });
            });
        });
    });

    it("get VBA project", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFolderName + "/macros.pptm", TestUtils.folderName + "/macros.pptm").then(() => {
                return api.getVbaProject("macros.pptm", null, TestUtils.folderName).then((response) => {
                    const vbaProject = (response.body as model.VbaProject);
                    assert.equal(1, vbaProject.modules.length);
                });
            });
        });
    });

    it("update VBA module", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFolderName + "/macros.pptm", TestUtils.folderName + "/macros.pptm").then(() => {
                const dto = new model.VbaModule();
                dto.sourceCode = "Sub Test() MsgBox \"Test\" End Sub";
                const moduleIndex = 1;
                return api.updateVbaModule("macros.pptm", moduleIndex, dto, TestUtils.password, TestUtils.folderName).then((response) => {
                    const vbaModule = (response.body as model.VbaModule);
                    assert.equal(dto.sourceCode, vbaModule.sourceCode);
                });
            });
        });
    });
});