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
import {TestUtils} from "../testUtils";

describe("Auth tests", () => {
    it("good credentials", () => {
        return TestUtils.runTest(() => {
            const config = require("../../testConfig.json");
            const api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            api.configuration.allowInsecureRequests = config.AllowInsecureRequests;
            return api.getApiInfo().then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("bad credentials", () => {
        return TestUtils.runTest(() => {
            const config = require("../../testConfig.json");
            const api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            api.configuration.allowInsecureRequests = config.AllowInsecureRequests;
            api.configuration.appSid = "invalid";
            return api.getApiInfo().then(() => {
                assert.fail('Must have failed');
            }).catch((err) => {
                assert.equal(401, err.code);
            });
        });
    });

    it("good token", () => {
        return TestUtils.runTest(() => {
            const config = require("../../testConfig.json");
            const api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            api.configuration.allowInsecureRequests = config.AllowInsecureRequests;
            return api.getApiInfo().then(() => {
                const api2 = new sdkApi.SlidesApi("invalid", config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
                api2.configuration.allowInsecureRequests = config.AllowInsecureRequests;
                api2.configuration.accessToken = api.configuration.accessToken;
                return api2.getApiInfo().then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("bad token", () => {
        return TestUtils.runTest(() => {
            const config = require("../../testConfig.json");
            const api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            api.configuration.allowInsecureRequests = config.AllowInsecureRequests;
            return api.getApiInfo().then(() => {
                api.configuration.accessToken = "invalid";
                return api.getApiInfo().then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("expired token", () => {
        return TestUtils.runTest(() => {
            const config = require("../../testConfig.json");
            const api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            api.configuration.allowInsecureRequests = config.AllowInsecureRequests;
            return api.getApiInfo().then(() => {
                api.configuration.accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODYzMzI5ODAsImV4cCI6MTY4NjQxOTM4MCwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6ImVhMTFkNzAwLWE3YjAtNDgwMi05YjFjLWRmYWVhNGI2OTA0YSIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiIyNDc5NjRmYy04MjIyLTQ4M2EtYmZmMS1kNTYxYzM5MjQ3ZWIiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc2MjY4MiIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.qGRwbpVQNJ7k09FF81bfknBd_9bERkProMukobxkAEzwIhIRSwCDvzgVhhUcA-OMr8s-49XLYtFb6ZtuDT2r3xDsYXWxwjYekFk4MZhEFKeIqLyI9-kSxanL7w4WoKkE_OAXHquChRJcsqz5vhKOOJ9swu4PS0TSRYHfkLFsLpZLXIV4X53Ear8vDosOfeZONq9QPCfikCi1ruSMa3OddD2WE17_V3FzzyuC7d3FQxRznFJhyWoKI2jvOw7a92KatWVt3I78fOl9M-3MkkHR1ip5CXp3arnn139i73D-TfXeRNcAU5UpAGfuYPbIDpTkJ-DirqYWO6I5S7JmchPl1A";
                return api.getApiInfo().then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });
});
