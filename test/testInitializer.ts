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

import { Readable } from 'stream';
import * as sdkApi from "../sdk/api";
import * as model from "../sdk/model";

var assert = require('assert');
var fs = require('fs');

export class TestInitializer {
    static readonly testRules = require("../testRules.json");
    static isInitialized : boolean = false;
    static expectedFilesVersion = "1";
    static api : sdkApi.SlidesApi;

    public static getValue(functionName: string, name: string, type: string): any {
        type = type;
        var value = null;
        TestInitializer.enumerateRules(TestInitializer.testRules.Values, functionName, name, type, function(r) {
            if ("Value" in r) {
                value = r.Value;
            }
        });
        if (value && value.startsWith && value.startsWith("@"))
        {
            if (value.startsWith("@(") && value.endsWith(")")) {
                return value.substring(2, value.length - 1).split(',').map(x => fs.createReadStream("TestData/" + x));
            }
            return fs.createReadStream("TestData/" + value.substring(1));
        }
        return value;
    }

    public static invalidizeValue(value: any, name: string, type: string, functionName: string): any {
        type = type;
        var invalidValue = null;
        TestInitializer.enumerateRules(TestInitializer.testRules.Values, functionName, name, type, function(r) {
            if ("InvalidValue" in r) {
                invalidValue = r.InvalidValue;
            }
        });
        return TestInitializer.untemplatize(invalidValue, name, value);
    }

    public static getApi() {
        if (!TestInitializer.api) {
            const config = require("../testConfig.json");
            TestInitializer.api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
        }
        return TestInitializer.api;
    }

    public static initialize(functionName: string, invalidFieldName: string, invalidFieldType: string, invalidFieldValue: any) {
        const api = TestInitializer.getApi();
        if (!TestInitializer.isInitialized) {
            TestInitializer.initializeStorage();
            TestInitializer.isInitialized = true;
        }
        const files = [];
        TestInitializer.enumerateRules(TestInitializer.testRules.Files, functionName, invalidFieldName, invalidFieldType, function (r) {
            const actualName = TestInitializer.untemplatize(r.File, invalidFieldType, invalidFieldValue);
            var path = "TempSlidesSDK";
            if ("Folder" in r) {
                path = TestInitializer.untemplatize(r.Folder, invalidFieldType, invalidFieldValue)
            }
            path = path + "/" + actualName;
            files[path] = r;
            files[path].ActualName = actualName;
        });
        const promises = [];
        for (var path in files) {
            var rule = files[path];
            if (rule.Action == "Put") {
                promises.push(new Promise((resolve, reject) => {
                    api.copyFile("TempTests/" + files[path].ActualName, path)
                        .then(() => resolve(null))
                        .catch(() => reject(new Error("Could not upload file " + path)));
                }));
            } else if (rule.Action == "Delete") {
                promises.push(new Promise((resolve, reject) => {
                    api.deleteFile(path)
                        .then(() => resolve(null))
                        .catch(() => reject(new Error("Could not delete file " + path)));
                }));
            }
        }
        return Promise.all(promises);
    }

    public static async initializeStorage() {
        const api = TestInitializer.getApi();
        const versionFilePath = "TempTests/version.txt";
        let uploaded = false;
        await api.downloadFile(versionFilePath).then((result) => {
            if (TestInitializer.expectedFilesVersion == result.body.toString()) {
                uploaded = true;
            }
        }).catch((err) => {
            console.log(err);
        });
        if (!uploaded) {
            const promises = [];
            fs.readdir("TestData", (err, files) => {
                if (err) {
                    console.log(err);
                }
                files.forEach(file => {
                    const fileStream = fs.createReadStream("TestData/" + file);
                    promises.push(api.uploadFile("TempTests/" + file, fileStream).catch((err) => { console.log(err); }));
                });
            });
            await Promise.all(promises);
            var version = new Readable();
            version.push(TestInitializer.expectedFilesVersion);
            version.push(null);
            await api.uploadFile(versionFilePath, version).catch((err) => { console.log(err); });
        }
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

    public static assertValidCall(call: Promise<any>, isBinary: boolean, functionName: string) {
        return call.then((result) => {
            var code = 0;
            TestInitializer.enumerateRules(TestInitializer.testRules.Results, functionName, null, null, function(r) {
                if ("Code" in r) {
                    code = r.Code;
                }
            });
            assert.equal(code, result.response.statusCode);
            if (result.body && isBinary && functionName != "pipeline") {
                assert(result.body.length > 0);
            }
        }).catch((err) => {
            console.log(err);
            assert.fail(err);
        });
    }

    public static assertInvalidCall(call: Promise<any>, functionName: string, fieldName: string, fieldType: string, fieldValue: any) {
        var failed = false;
        return call
            .then(() => {
                failed = true;
                TestInitializer.enumerateRules(TestInitializer.testRules.OKToNotFail, functionName, fieldName, fieldType, function() { failed = false; });
                if (failed) {
                    assert.fail('Must have failed');
                }
            }).catch((err) => {
                if (failed) {
                    assert.fail(err);
                } else {
                    var code = 0;
                    var message = "Unexpeceted message";
                    TestInitializer.enumerateRules(TestInitializer.testRules.Results, functionName, fieldName, fieldType, function(r) {
                        if ("Code" in r) {
                            code = r.Code;
                        }
                        if ("Message" in r) {
                            message = r.Message;
                        }
                    });
                }
                if (err.code) {
                    assert.equal(code, err.code);
                }
                if (err.message) {
                    assert(err.message.includes(TestInitializer.untemplatize(message, fieldName, fieldValue)));
                }
            });
    }

    private static enumerateRules(rules: any, functionName: string, fieldName: string, type: string, action: (rule: any) => void) {
        for (var i in rules) {
            if (TestInitializer.applies(rules[i], functionName, fieldName, type)) {
                action(rules[i]);
            }
        }
    }

    private static applies(rule: any, functionName: string, fieldName: string, type: string): boolean {
        if (!TestInitializer.matches(rule.Method, functionName)) {
            return false;
        }
        if (("Invalid" in rule) && rule.Invalid == !fieldName) {
            return false;
        }
        if (!TestInitializer.matches(rule.Parameter, fieldName)) {
            return false;
        }
        if (("Language" in rule) && rule.Language.toLowerCase() != "nodejs") {
            return false;
        }
        if ("Type" in rule) {
            if (!type) {
                return false;
            }
            if (rule.Type == "number") {
                return type == "number";
            }
            if (rule.Type == "int") {
                return type == "number";
            }
            if (rule.Type == "int[]") {
                return type == "Array<number>";
            }
            if (rule.Type == "bool") {
                return type == "boolean";
            }
            if (rule.Type == "stream") {
                return type == "Readable";
            }
            if (rule.Type == "stream[]") {
                return type == "Array<Readable>";
            }
            if (rule.Type == "model") {
                return type in model;
            }
            if (rule.Type in model) {
                return (type in model) && (new model[rule.Type]() instanceof model[type]);
            }
            return true;
        }
        return true;
    }

    private static matches(pattern: string, text: string): boolean {
        if (!pattern) {
            return true;
        }
        if (!text) {
            return false;
        }
        if (pattern.startsWith("/") && pattern.endsWith("/")) {
            return new RegExp(pattern.substring(1, pattern.length - 1), "i").test(text);
        }
        return pattern.toLowerCase() == text.toLowerCase();
    }

    private static untemplatize(t: any, name: string, value: any): string {
        return t && t.replace ? t.replace("%n", name ? name : "").replace("%v", value ? value : "") : t;
    }
}
