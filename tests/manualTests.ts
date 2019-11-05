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
import * as model from "../sdk/model";
import { PostSlidesPipelineRequest, /*PostSlideSaveAsRequest, */SlidesApi } from "../sdk/api";
/*import { TestInitializer } from "./testInitializer";*/

describe("Additional tests", () => {
    it("multiple files upload", () => {
        const config = require("../testConfig.json");
        const fs = require('fs');
        const api = new SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.Debug);
        const request = new PostSlidesPipelineRequest();
        let file1 = new model.RequestInputFile();
        file1.index = 0;
        let file2 = new model.RequestInputFile();
        file2.index = 1;
        let task = new model.Save();
        task.format = model.Save.FormatEnum.Pptx;
        task.output = new model.ResponseOutputFile();
        request.pipeline = { input: { templateData: file1, template: file2 }, tasks: [ task ] };
        request.files = [
            fs.createReadStream("TestData/TemplatingCVDataWithBase64.xml"),
            fs.createReadStream("TestData/TemplateCV.pptx")
        ];
        
        return api.postSlidesPipeline(request).then((result) => {
            assert.equal(200, result.response.statusCode);
        });
    });

    it("chart type", () => {
        let chart = new model.Chart();
        assert.equal("Chart", chart.type);
        assert.equal("Chart", chart.shapeType);
    });
});

/*unstable test
describe("Tests for timeout configuration parameter", () => {
    it("convert slide to svg", () => {
        return TestInitializer.initialize("postSlideSaveAs", null, null).then(() => {
            const config = require("../testConfig.json");
            const fs = require('fs');
            const api = new SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.debug, 1);
            const request = new PostSlideSaveAsRequest();
            request.format = "svg";
            request.name = "test.ppt";
            request.folder = "TempSlidesSDK";
            request.password = "password";
            request.slideIndex = 1;
            return api.postSlideSaveAs(request)
                .then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.fail("must have failed because of timeout");
                }).catch((e) => {
                });
        }).catch((err) => assert.fail(err));
    });
});*/
