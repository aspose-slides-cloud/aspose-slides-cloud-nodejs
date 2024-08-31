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
import * as model from "../../sdk/model";
import {TestUtils} from "../testUtils";

describe("Async Api tests", () => {
    it("async convert", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesAsyncApi();
            const startResult = await api.startConvert(fs.createReadStream(TestUtils.localFilePath), model.ExportFormat.Pdf, TestUtils.password);
            assert.equal(201, startResult.response.statusCode);
            const operationId = startResult.body;

            var operation = null;
            const maxTries = 20;
            const sleepTimeout = 3;
            for (var i = 0; i < maxTries; i++) {
                await TestUtils.sleep(sleepTimeout);
                var getStatusResult = await api.getOperationStatus(operationId);
                operation = getStatusResult. body as model.Operation;
                assert.equal(200, getStatusResult.response.statusCode);
                if (operation.status != model.Operation.StatusEnum.Created
                    && operation.status != model.Operation.StatusEnum.Enqueued
                    && operation.status != model.Operation.StatusEnum.Started) {
                    break;
                }
            }
            assert.equal(model.Operation.StatusEnum.Finished, operation.status);
            assert(operation.error == null);

            const convertResult = await api.getOperationResult(operationId);
            assert.equal(200, convertResult.response.statusCode);
            assert(convertResult.body.length);
        });
    });

    it("async download presentation", () => {
        return TestUtils.runTest(async () => {
            await TestUtils.getSlidesApi().copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const api = TestUtils.getSlidesAsyncApi();
            const startResult = await api.startDownloadPresentation(TestUtils.fileName, model.ExportFormat.Pdf, null, TestUtils.password, TestUtils.folderName);
            assert.equal(201, startResult.response.statusCode);
            const operationId = startResult.body;

            var operation = null;
            const maxTries = 20;
            const sleepTimeout = 3;
            for (var i = 0; i < maxTries; i++) {
                await TestUtils.sleep(sleepTimeout);
                var getStatusResult = await api.getOperationStatus(operationId);
                operation = getStatusResult. body as model.Operation;
                assert.equal(200, getStatusResult.response.statusCode);
                if (operation.status != model.Operation.StatusEnum.Created
                    && operation.status != model.Operation.StatusEnum.Enqueued
                    && operation.status != model.Operation.StatusEnum.Started) {
                    break;
                }
            }
            assert.equal(model.Operation.StatusEnum.Finished, operation.status);
            assert(operation.error == null);

            const convertResult = await api.getOperationResult(operationId);
            assert.equal(200, convertResult.response.statusCode);
            assert(convertResult.body.length);
        });
    });

    it("async convert and save", () => {
        return TestUtils.runTest(async () => {
            const slidesApi = TestUtils.getSlidesApi();
            const outPath = TestUtils.testDataPath + "/test.pdf";
            await slidesApi.deleteFile(outPath);
            const api = TestUtils.getSlidesAsyncApi();
            const startResult = await api.startConvertAndSave(fs.createReadStream(TestUtils.localFilePath), model.ExportFormat.Pdf, outPath, TestUtils.password);
            assert.equal(201, startResult.response.statusCode);
            const operationId = startResult.body;

            var operation = null;
            const maxTries = 20;
            const sleepTimeout = 3;
            for (var i = 0; i < maxTries; i++) {
                await TestUtils.sleep(sleepTimeout);
                var getStatusResult = await api.getOperationStatus(operationId);
                operation = getStatusResult. body as model.Operation;
                assert.equal(200, getStatusResult.response.statusCode);
                if (operation.status != model.Operation.StatusEnum.Created
                    && operation.status != model.Operation.StatusEnum.Enqueued
                    && operation.status != model.Operation.StatusEnum.Started) {
                    break;
                }
            }
            assert.equal(model.Operation.StatusEnum.Finished, operation.status);
            assert(operation.error == null);

            const existsResult = await slidesApi.objectExists(outPath);
            assert.equal(200, existsResult.response.statusCode);
            assert((existsResult.body as model.ObjectExist).exists);
        });
    });

    it("async save presentation", () => {
        return TestUtils.runTest(async () => {
            const slidesApi = TestUtils.getSlidesApi();
            const outPath = TestUtils.testDataPath + "/test.pdf";

            await slidesApi.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const api = TestUtils.getSlidesAsyncApi();
            const startResult = await api.startSavePresentation(TestUtils.fileName, model.ExportFormat.Pdf, outPath, null, TestUtils.password, TestUtils.folderName);
            assert.equal(201, startResult.response.statusCode);
            const operationId = startResult.body;


            var operation = null;
            const maxTries = 20;
            const sleepTimeout = 3;
            for (var i = 0; i < maxTries; i++) {
                await TestUtils.sleep(sleepTimeout);
                var getStatusResult = await api.getOperationStatus(operationId);
                operation = getStatusResult. body as model.Operation;
                assert.equal(200, getStatusResult.response.statusCode);
                if (operation.status != model.Operation.StatusEnum.Created
                    && operation.status != model.Operation.StatusEnum.Enqueued
                    && operation.status != model.Operation.StatusEnum.Started) {
                    break;
                }
            }
            assert.equal(model.Operation.StatusEnum.Finished, operation.status);
            assert(operation.error == null);

            const existsResult = await slidesApi.objectExists(outPath);
            assert.equal(200, existsResult.response.statusCode);
            assert((existsResult.body as model.ObjectExist).exists);
        });
    });

    it("async merge", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesAsyncApi();
            const files = [fs.createReadStream("TestData/TemplateCV.pptx"), fs.createReadStream("TestData/test-unprotected.pptx")];
            const startResult = await api.startMerge(files);
            assert.equal(201, startResult.response.statusCode);
            const operationId = startResult.body;

            var operation = null;
            const maxTries = 20;
            const sleepTimeout = 3;
            for (var i = 0; i < maxTries; i++) {
                await TestUtils.sleep(sleepTimeout);
                var getStatusResult = await api.getOperationStatus(operationId);
                operation = getStatusResult.body as model.Operation;
                assert.equal(200, getStatusResult.response.statusCode);
                if (operation.status != model.Operation.StatusEnum.Created
                    && operation.status != model.Operation.StatusEnum.Enqueued
                    && operation.status != model.Operation.StatusEnum.Started) {
                    break;
                }
            }
            assert.equal(model.Operation.StatusEnum.Finished, operation.status);
            assert(operation.progress != null);
            assert.equal(2, operation.progress.stepCount);
            assert.equal(operation.progress.stepCount, operation.progress.stepIndex);
            assert(operation.error == null);

            const mergeResult = await api.getOperationResult(operationId);
            assert.equal(200, mergeResult.response.statusCode);
            assert(mergeResult.body.length);
        });
    });

    it("async merge and save", () => {
        return TestUtils.runTest(async () => {
            const slidesApi = TestUtils.getSlidesApi();
            const outPath = TestUtils.testDataPath + "/test.pdf";
            await slidesApi.deleteFile(outPath);

            const api = TestUtils.getSlidesAsyncApi();
            const files = [fs.createReadStream("TestData/TemplateCV.pptx"), fs.createReadStream("TestData/test-unprotected.pptx")];
            const startResult = await api.startMergeAndSave(outPath, files);
            assert.equal(201, startResult.response.statusCode);
            const operationId = startResult.body;

            var operation = null;
            const maxTries = 20;
            const sleepTimeout = 3;
            for (var i = 0; i < maxTries; i++) {
                await TestUtils.sleep(sleepTimeout);
                var getStatusResult = await api.getOperationStatus(operationId);
                operation = getStatusResult.body as model.Operation;
                assert.equal(200, getStatusResult.response.statusCode);
                if (operation.status != model.Operation.StatusEnum.Created
                    && operation.status != model.Operation.StatusEnum.Enqueued
                    && operation.status != model.Operation.StatusEnum.Started) {
                    break;
                }
            }
            assert.equal(model.Operation.StatusEnum.Finished, operation.status);
            assert(operation.progress != null);
            assert.equal(2, operation.progress.stepCount);
            assert.equal(operation.progress.stepCount, operation.progress.stepIndex);
            assert(operation.error == null);

            const existsResult = await slidesApi.objectExists(outPath);
            assert.equal(200, existsResult.response.statusCode);
            assert((existsResult.body as model.ObjectExist).exists);
        });
    });

    it("async split", () => {
        return TestUtils.runTest(async () => {
            const slidesApi = TestUtils.getSlidesApi();
            const outFolder = "splitResult";

            await slidesApi.deleteFolder(outFolder, null, true);
            await slidesApi.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const api = TestUtils.getSlidesAsyncApi();
            const startResult = await api.startSplit(TestUtils.fileName, model.SlideExportFormat.Png, null, null, null, null, null, outFolder, TestUtils.password, TestUtils.folderName);
            assert.equal(201, startResult.response.statusCode);
            const operationId = startResult.body;

            var operation = null;
            const maxTries = 20;
            const sleepTimeout = 3;
            for (var i = 0; i < maxTries; i++) {
                await TestUtils.sleep(sleepTimeout);
                var getStatusResult = await api.getOperationStatus(operationId);
                operation = getStatusResult. body as model.Operation;
                assert.equal(200, getStatusResult.response.statusCode);
                if (operation.status != model.Operation.StatusEnum.Created
                    && operation.status != model.Operation.StatusEnum.Enqueued
                    && operation.status != model.Operation.StatusEnum.Started) {
                    break;
                }
            }
            assert.equal(model.Operation.StatusEnum.Finished, operation.status);
            assert(operation.error == null);

            const existsResult = await slidesApi.objectExists(outFolder);
            assert.equal(200, existsResult.response.statusCode);
            assert((existsResult.body as model.ObjectExist).exists);
        });
    });

    it("async upload and split", () => {
        return TestUtils.runTest(async () => {
            const slidesApi = TestUtils.getSlidesApi();
            const outFolder = "splitResult";
            await slidesApi.deleteFolder(outFolder, null, true);

            const api = TestUtils.getSlidesAsyncApi();
            const startResult = await api.startUploadAndSplit(fs.createReadStream(TestUtils.localFilePath), model.SlideExportFormat.Png, outFolder, null, null, null, null, TestUtils.password);
            assert.equal(201, startResult.response.statusCode);
            const operationId = startResult.body;

            var operation = null;
            const maxTries = 20;
            const sleepTimeout = 3;
            for (var i = 0; i < maxTries; i++) {
                await TestUtils.sleep(sleepTimeout);
                var getStatusResult = await api.getOperationStatus(operationId);
                operation = getStatusResult. body as model.Operation;
                assert.equal(200, getStatusResult.response.statusCode);
                if (operation.status != model.Operation.StatusEnum.Created
                    && operation.status != model.Operation.StatusEnum.Enqueued
                    && operation.status != model.Operation.StatusEnum.Started) {
                    break;
                }
            }
            assert.equal(model.Operation.StatusEnum.Finished, operation.status);
            assert(operation.error == null);

            const existsResult = await slidesApi.objectExists(outFolder);
            assert.equal(200, existsResult.response.statusCode);
            assert((existsResult.body as model.ObjectExist).exists);
        });
    });

    it("async bad operation", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesAsyncApi();
            const startResult = await api.startDownloadPresentation("IDoNotExist.pptx", model.ExportFormat.Pdf);
            assert.equal(201, startResult.response.statusCode);
            const operationId = startResult.body;

            var getStatusResult = null;
            var operation = null;

            const maxTries = 20;
            const sleepTimeout = 3;
            for (var i = 0; i < maxTries; i++) {
                await TestUtils.sleep(sleepTimeout);
                getStatusResult = await api.getOperationStatus(operationId);
                operation = getStatusResult. body as model.Operation;
                assert.equal(200, getStatusResult.response.statusCode);
                if (operation.status != model.Operation.StatusEnum.Created
                    && operation.status != model.Operation.StatusEnum.Enqueued
                    && operation.status != model.Operation.StatusEnum.Started) {
                    break;
                }
            }
            assert.equal(model.Operation.StatusEnum.Failed, operation.status);
            assert(operation.error != null);
        });
    });
});