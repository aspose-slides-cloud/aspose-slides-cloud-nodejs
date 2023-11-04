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

import * as sdkApi from "../sdk/api";

var assert = require('assert');

export class TestUtils {
    static tempFolderName = "TempTests";
    static folderName = "TempSlidesSDK";
    static testDataPath = "TestData";
    static fileName = "test.pptx";
    static tempFilePath = TestUtils.tempFolderName + "/" + TestUtils.fileName;
    static filePath = TestUtils.folderName + "/" + TestUtils.fileName;
    static localFilePath = TestUtils.testDataPath + "/" + TestUtils.fileName;
    static password = "password";
    static api : sdkApi.SlidesApi;
    static asyncApi : sdkApi.SlidesAsyncApi;

    public static getSlidesApi() {
        if (!TestUtils.api) {
            const config = require("../testConfig.json");
            TestUtils.api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            TestUtils.api.configuration.allowInsecureRequests = config.AllowInsecureRequests;
        }
        return TestUtils.api;
    }

    public static getSlidesAsyncApi() {
        if (!TestUtils.asyncApi) {
            const config = require("../testConfig.json");
            TestUtils.asyncApi = new sdkApi.SlidesAsyncApi(config.ClientId, config.ClientSecret, config.AsyncBaseUrl, config.AuthBaseUrl, config.Debug);
            TestUtils.asyncApi.configuration.allowInsecureRequests = config.AllowInsecureRequests;
        }
        return TestUtils.asyncApi;
    }

    public static runTest(test: () => Promise<any>) {
        //retry each test on failure to minimize accidental failure chance
        return test()
            .catch(async (err) => {
                if (err instanceof assert.AssertionError) {
                    throw err;
                }
                await test();
            });
    }

    public static sleep(interval: number) {
        return new Promise(resolve => setTimeout(resolve, interval * 1000))
    }
}
