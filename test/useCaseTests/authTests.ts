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
import * as sdkApi from "../../sdk/api";
import {TestInitializer} from "../testInitializer";

describe("Auth tests", () => {
    it("good auth", () => {
        return TestInitializer.runTest(() => {
            const config = require("../../testConfig.json");
            const api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            return api.getApiInfo().then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("bad auth", () => {
        return TestInitializer.runTest(() => {
            const config = require("../../testConfig.json");
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
            const config = require("../../testConfig.json");
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
            const config = require("../../testConfig.json");
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
