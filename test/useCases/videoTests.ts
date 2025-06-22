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

describe("Video tests", () => {
    it("caption tracks", () => {
        const slideIndex = 3;
        const shapeIndex = 3;
        const track1Label = "track1";
        const track2Label = "track2";
        const track1Data = "WEBVTT\n\n00:00:00.000 --> 00:00:10.000\nCaption 1 text.";
        const track2Data = "WEBVTT\n\n00:00:00.000 --> 00:00:10.000\nCaption 2 text.";
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.VideoFrame();
                dto.base64Data = "bXAzc2FtcGxl";
                return api.createShape(TestUtils.fileName, slideIndex, dto, null, null, TestUtils.password, TestUtils.folderName).then((createResult) => {
                    assert.equal(201, createResult.response.statusCode);
                    return api.getVideoCaptionTracks(TestUtils.fileName, slideIndex, shapeIndex, null, TestUtils.password, TestUtils.folderName).then((getResult) => {
                        assert.equal(200, getResult.response.statusCode);
                        assert.equal(0, (getResult.body as model.CaptionTracks).items.length);
                        return api.createVideoCaptionTrack(TestUtils.fileName, slideIndex, shapeIndex, track1Label, track1Data, TestUtils.password, TestUtils.folderName).then((create1Result) => {
                            assert.equal(201, create1Result.response.statusCode);
                            return api.createVideoCaptionTrack(TestUtils.fileName, slideIndex, shapeIndex, track2Label, track2Data, TestUtils.password, TestUtils.folderName).then((create2Result) => {
                                assert.equal(201, create2Result.response.statusCode);
                                return api.getVideoCaptionTracks(TestUtils.fileName, slideIndex, shapeIndex, true, TestUtils.password, TestUtils.folderName).then((get2Result) => {
                                    assert.equal(200, get2Result.response.statusCode);
                                    assert.equal(2, (get2Result.body as model.CaptionTracks).items.length);
                                    assert.equal(track1Label, (get2Result.body as model.CaptionTracks).items[0].label);
                                    assert.equal(track1Data, (get2Result.body as model.CaptionTracks).items[0].dataAsString);
                                    assert.equal(track2Label, (get2Result.body as model.CaptionTracks).items[1].label);
                                    assert.equal(track2Data, (get2Result.body as model.CaptionTracks).items[1].dataAsString);
                                    return api.deleteVideoCaptionTrack(TestUtils.fileName, slideIndex, shapeIndex, 1, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                                        assert.equal(200, deleteResult.response.statusCode);
                                        return api.getVideoCaptionTracks(TestUtils.fileName, slideIndex, shapeIndex, false, TestUtils.password, TestUtils.folderName).then((get3Result) => {
                                            assert.equal(200, get3Result.response.statusCode);
                                            assert.equal(1, (get3Result.body as model.CaptionTracks).items.length);
                                            assert.equal(track2Label, (get3Result.body as model.CaptionTracks).items[0].label);
                                            assert.equal(null, (get3Result.body as model.CaptionTracks).items[0].dataAsString);
                                            return api.deleteVideoCaptionTracks(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName).then((deleteAllResult) => {
                                                assert.equal(200, deleteAllResult.response.statusCode);
                                                return api.getVideoCaptionTracks(TestUtils.fileName, slideIndex, shapeIndex, true, TestUtils.password, TestUtils.folderName).then((get4Result) => {
                                                    assert.equal(200, get4Result.response.statusCode);
                                                    assert.equal(0, (get4Result.body as model.CaptionTracks).items.length);
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
    });
});
