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
import * as model from "../sdk/model";

var assert = require('assert');
var fs = require('fs');

export class TestInitializer {
    static readonly testRules = require("../testRules.json");
    static isInitialized : boolean = false;
    static expectedFilesVersion = "1";
    static api : sdkApi.SlidesApi;

    public static getStreamValue(functionName: string, name: string) {
        name = name + ""; //just to delude the TS compiler
        var fileName = "test.pptx";
        if (functionName.endsWith('FromPdf')) {
            fileName = "test.pdf";
        }
        if (name == 'image') {
            fileName = "watermark.png";
        }
        return fs.createReadStream("TestData/" + fileName);
    }

    public static getBinArrayValue(functionName: string, name: string) {
        functionName = functionName + ""; //just to delude the TS compiler
        name = name + ""; //just to delude the TS compiler
        return [ fs.createReadStream("TestData/test.pptx"), fs.createReadStream("TestData/test-unprotected.pptx") ];
    }

    public static getValue(functionName: string, name: string, type: string) : any {
        var value = "test" + name;
        TestInitializer.enumerateRules(TestInitializer.testRules.Values, functionName, name, function(r) {
            if ("Value" in r) {
                if ("Type" in r) {
                    if (model[r.Type] && model[type] && (new model[r.Type]() instanceof model[type])) {
                        value = r.Value;
                    }
                } else {
                    value = r.Value;
                }
            }
        });
        return value;
    }

    public static invalidizeValue(value: any, name: string, type: string, functionName: string) : any {
        var invalidValue = null;
        if (type == "Buffer" || type == "Array&lt;Buffer&gt;") {
            return null;
        }
        TestInitializer.enumerateRules(TestInitializer.testRules.Values, functionName, name, function(r) {
            if ("InvalidValue" in r) {
                if ("Type" in r) {
                    if (model[r.Type] && model[type] && (new model[r.Type]() instanceof model[type])) {
                        invalidValue = r.InvalidValue;
                    }
                } else {
                    invalidValue = r.InvalidValue;
                }
            }
        });
        return TestInitializer.untemplatize(invalidValue, value);
    }

    public static getApi() {
        if (!TestInitializer.api) {
            const config = require("../testConfig.json");
            TestInitializer.api = new sdkApi.SlidesApi(config.ClientId, config.ClientSecret, config.BaseUrl, config.AuthBaseUrl, config.Debug);
        }
        return TestInitializer.api;
    }

    public static initialize(functionName: string, invalidFieldName: string, invalidFieldValue: any) {
        const api = TestInitializer.getApi();
        if (!TestInitializer.isInitialized) {
            TestInitializer.initializeStorage();
            TestInitializer.isInitialized = true;
        }
        const files = [];
        TestInitializer.enumerateRules(TestInitializer.testRules.Files, functionName, invalidFieldName, function(r) {
            const actualName = TestInitializer.untemplatize(r.File, invalidFieldValue);
            var path = "TempSlidesSDK";
            if ("Folder" in r) {
                path = TestInitializer.untemplatize(r.Folder, invalidFieldValue)
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
                        .then(() => resolve())
                        .catch(() => reject(new Error("Could not upload file " + path)));
                }));
            } else if (rule.Action == "Delete") {
                promises.push(new Promise((resolve, reject) => {
                    api.deleteFile(path)
                        .then(() => resolve())
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
            const fileStream = Buffer.from(TestInitializer.expectedFilesVersion, 'utf8');
            await api.uploadFile(versionFilePath, fileStream).catch((err) => { console.log(err); });
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
            TestInitializer.enumerateRules(TestInitializer.testRules.Results, functionName, null, function(r) {
                if ("Code" in r) {
                    code = r.Code;
                }
            });
            assert.equal(code, result.response.statusCode);
            if (result.body && isBinary && functionName != "pipeline") {
                assert(result.body.length > 0);
            }
        }).catch((err) => {
            assert.fail(err);
        });
    }

    public static assertInvalidCall(call: Promise<any>, functionName: string, fieldName: string, fieldValue: any) {
        var failed = false;
        return call
            .then(() => {
                failed = true;
                TestInitializer.enumerateRules(TestInitializer.testRules.OKToNotFail, functionName, fieldName, function() { failed = false; });
                if (failed) {
                    assert.fail('Must have failed');
                }
            }).catch((err) => {
                if (failed) {
                    assert.fail(err);
                } else {
                    var code = 0;
                    var message = "Unexpeceted message";
                    TestInitializer.enumerateRules(TestInitializer.testRules.Results, functionName, fieldName, function(r) {
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
                    assert(err.message.includes(TestInitializer.untemplatize(message, fieldValue)));
                }
            });
    }

    private static enumerateRules(rules: any, functionName: string, fieldName: string, action: (rule: any) => void) {
        for (var i in rules) {
            if (TestInitializer.applies(rules[i], functionName, fieldName)) {
                action(rules[i]);
            }
        }
    }

    private static applies(rule: any, functionName: string, fieldName: string) : boolean {
        return (!("Method" in rule) || (functionName && rule.Method.toLowerCase() == functionName.toLowerCase()))
            && (!("Invalid" in rule) || rule.Invalid == !!fieldName)
            && (!("Parameter" in rule) || (fieldName && rule.Parameter.toLowerCase() == fieldName.toLowerCase()))
            && (!("Language" in rule) || rule.Language.toLowerCase() == "nodejs");
    }

    private static untemplatize(t: any, value: any) : string {
        return t && t.replace ? t.replace("%v", value) : t;
    }
}
