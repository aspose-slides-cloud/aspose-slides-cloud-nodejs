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
import {PresentationToMerge} from "../../sdk/model";
import {TestUtils} from "../testUtils";

var assert = require('assert');
var fs = require('fs');
import SourceEnum = PresentationToMerge.SourceEnum;

describe("Merge tests", () => {
    it("merge", () => {
        return TestUtils.runTest(() => {
            const fileName2 = "test-unprotected.pptx";
            const filePath2 = TestUtils.folderName + "/" + fileName2;
            const fileNamePdf = "test.pdf";
            const filePathPdf = TestUtils.folderName + "/" + fileNamePdf;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.copyFile(TestUtils.tempFolderName + "/" + fileName2, filePath2).then(() => {
                    return api.copyFile(TestUtils.tempFolderName + "/" + fileNamePdf, filePathPdf).then(() => {
                        let request = new model.PresentationsMergeRequest();
                        request.presentationPaths = [filePath2, filePathPdf];
                        return api.merge(TestUtils.fileName, request, TestUtils.password, TestUtils.folderName).then((defaultResult) => {
                            assert.equal(200, defaultResult.response.statusCode);
                        });
                    });
                });
            });
        });
    });
    it("ordered merge", () => {
        return TestUtils.runTest(() => {
            const fileName2 = "test-unprotected.pptx";
            const filePath2 = TestUtils.folderName + "/" + fileName2;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.copyFile(TestUtils.tempFolderName + "/" + fileName2, filePath2).then(() => {
                    let request = new model.OrderedMergeRequest();
                    let presentation = new model.PresentationToMerge();
                    presentation.path = filePath2;
                    presentation.slides = [2, 1];
                    request.presentations = [presentation];
                    return api.orderedMerge(TestUtils.fileName, request, TestUtils.password, TestUtils.folderName).then((defaultResult) => {
                        assert.equal(200, defaultResult.response.statusCode);
                    });
                });
            });
        });
    });
    it("merge online", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            const files = [fs.createReadStream("TestData/TemplateCV.pptx"), fs.createReadStream("TestData/test-unprotected.pptx")];
            return api.mergeOnline(files).then((defaultResult) => {
                assert.equal(200, defaultResult.response.statusCode);
            });
        });
    });
    it("merge and save online", () => {
        return TestUtils.runTest(() => {
            const outPath = "TestData/out.pptx";
            const api = TestUtils.getSlidesApi();
            const files = [fs.createReadStream("TestData/TemplateCV.pptx"), fs.createReadStream("TestData/test-unprotected.pptx")];
            return api.mergeAndSaveOnline(outPath, files).then((defaultResult) => {
                assert.equal(200, defaultResult.response.statusCode);
                return api.objectExists(outPath).then((existsResult) => {
                    assert.equal(200, existsResult.response.statusCode);
                    assert((existsResult.body as model.ObjectExist).exists);
                });
            });
        });
    });
    it("merge online with request", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            const files = [fs.createReadStream(TestUtils.localFilePath), fs.createReadStream("TestData/test-unprotected.pptx")];
            let request = new model.OrderedMergeRequest();
            let presentation1 = new model.PresentationToMerge();
            presentation1.path = TestUtils.fileName;
            presentation1.password = TestUtils.password;
            let presentation2 = new model.PresentationToMerge();
            presentation2.path = "test-unprotected.pptx";
            presentation2.slides = [1, 2];
            request.presentations = [presentation1, presentation2];
            return api.mergeOnline(files, request).then((defaultResult) => {
                assert.equal(200, defaultResult.response.statusCode);
            });
        });
    });
    it("merge online combined", () => {
        return TestUtils.runTest(() => {
            const fileName2 = "test-unprotected.pptx";
            const filePath2 = TestUtils.folderName + "/" + fileName2;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFolderName + "/" + fileName2, filePath2).then(() => {
                const files = [fs.createReadStream(TestUtils.localFilePath)];
                let request = new model.OrderedMergeRequest();
                let presentation1 = new model.PresentationToMerge();
                presentation1.path = TestUtils.fileName;
                presentation1.password = TestUtils.password;
                let presentation2 = new model.PresentationToMerge();
                presentation2.slides = [1, 2];
                presentation2.source = model.PresentationToMerge.SourceEnum.Storage;
                presentation2.path = filePath2;
                request.presentations = [presentation1, presentation2];
                return api.mergeOnline(files, request).then((defaultResult) => {
                    assert.equal(200, defaultResult.response.statusCode);
                });
            });
        });
    });
    it("merge online url", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let request = new model.OrderedMergeRequest();
            let presentation1 = new model.PresentationToMerge();
            presentation1.path = TestUtils.filePath;
            presentation1.password = TestUtils.password;
            presentation1.source = SourceEnum.Storage;
            presentation1.slides = [1, 2];
            
            let presentation2 = new model.PresentationToMerge();
            presentation2.slides = [1];
            presentation2.source =  model.PresentationToMerge.SourceEnum.Url;
            presentation2.path = "https://www.dropbox.com/scl/fi/nz3yt2wpg4eugiw12bz3g/info.pptx?rlkey=wju4vbi6h46q8733tzzvfgufz&e=1&st=pqt66x86&dl=1";
            request.presentations = [presentation1, presentation2];
            const response = await api.mergeOnline(null, request);
            assert.equal(200, response.response.statusCode);
        });
    });
});
