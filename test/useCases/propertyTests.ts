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
import {TestInitializer} from "../testInitializer";

describe("Property tests", () => {
    it("builtin", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const propertyName = "Author";
            const updatedPropertyValue = "New Value";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getDocumentProperty(fileName, propertyName, password, folderName).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    assert.equal(propertyName, (getResult.body as model.DocumentProperty).name);
                    assert((getResult.body as model.DocumentProperty).builtIn);
                    const property = new model.DocumentProperty();
                    property.value = updatedPropertyValue;
                    return api.setDocumentProperty(fileName, propertyName, property, password, folderName).then((putResult) => {
                        assert.equal(200, putResult.response.statusCode);
                        assert.equal(propertyName, (putResult.body as model.DocumentProperty).name);
                        assert.equal(updatedPropertyValue, (putResult.body as model.DocumentProperty).value);
                        assert((putResult.body as model.DocumentProperty).builtIn);
                        return api.deleteDocumentProperty(fileName, propertyName, password, folderName).then((deleteResult) => {
                            assert.equal(200, deleteResult.response.statusCode);
                            return api.getDocumentProperty(fileName, propertyName, password, folderName).then((getResult2) => {
                                //built-in property is not actually deleted
                                assert.equal(200, getResult2.response.statusCode);
                                assert.equal(propertyName, (getResult2.body as model.DocumentProperty).name);
                                assert.notEqual(updatedPropertyValue, (getResult2.body as model.DocumentProperty).value);
                                assert((getResult2.body as model.DocumentProperty).builtIn);
                            });
                        });
                    });
                });
            });
        });
    });

    it("custom", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const propertyName = "CustomProperty2";
            const updatedPropertyValue = "New Value";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const property = new model.DocumentProperty();
                property.value = updatedPropertyValue;
                return api.setDocumentProperty(fileName, propertyName, property, password, folderName).then((putResult) => {
                    assert.equal(201, putResult.response.statusCode);
                    assert.equal(propertyName, (putResult.body as model.DocumentProperty).name);
                    assert.equal(updatedPropertyValue, (putResult.body as model.DocumentProperty).value);
                    assert(!(putResult.body as model.DocumentProperty).builtIn);
                    return api.deleteDocumentProperty(fileName, propertyName, password, folderName).then((deleteResult) => {
                        assert.equal(200, deleteResult.response.statusCode);
                        return api.getDocumentProperty(fileName, propertyName, password, folderName)
                            .then(() => assert.fail("The property must have been deleted"))
                            .catch((err) => {
                                assert.equal(404, err.code);
                            });
                    });
                });
            });
        });
    });

    it("bulkUpdate", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const propertyName = "Author";
            const customPropertyName = "CustomProperty2";
            const updatedPropertyValue = "New Value";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getDocumentProperties(fileName, password, folderName).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    const count = (getResult.body as model.DocumentProperties).list.length;
                    const property1 = new model.DocumentProperty();
                    property1.name = propertyName;
                    property1.value = updatedPropertyValue;
                    const property2 = new model.DocumentProperty();
                    property2.name = customPropertyName;
                    property2.value = updatedPropertyValue;
                    const properties = new model.DocumentProperties();
                    properties.list = [property1, property2];
                    return api.setDocumentProperties(fileName, properties, password, folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        assert.equal(count + 1, (postResult.body as model.DocumentProperties).list.length);
                        return api.deleteDocumentProperties(fileName, password, folderName).then((deleteResult) => {
                            assert.equal(200, deleteResult.response.statusCode);
                            assert.equal(count - 1, (deleteResult.body as model.DocumentProperties).list.length);
                        });
                    });
                });
            });
        });
    });

    it("slideProperties", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getSlideProperties(fileName, password, folderName).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    const properties = getResult.body as model.SlideProperties;
                    const dto = new model.SlideProperties();
                    dto.firstSlideNumber = properties.firstSlideNumber + 2;
                    return api.setSlideProperties(fileName, dto, password, folderName).then((putResult) => {
                        assert.equal(200, putResult.response.statusCode);
                        assert.equal(properties.orientation, (putResult.body as model.SlideProperties).orientation);
                        assert.notEqual(properties.firstSlideNumber, (putResult.body as model.SlideProperties).firstSlideNumber);
                    });
                });
            });
        });
    });

    it("slideSizePreset", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.SlideProperties();
                dto.sizeType = model.SlideProperties.SizeTypeEnum.B4IsoPaper;
                return api.setSlideProperties(fileName, dto, password, folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(model.SlideProperties.SizeTypeEnum.B4IsoPaper, (putResult.body as model.SlideProperties).sizeType);
                    assert.equal(852, (putResult.body as model.SlideProperties).width);
                    assert.equal(639, (putResult.body as model.SlideProperties).height);
                });
            });
        });
    });

    it("slideSizeCustom", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const width = 800;
            const height = 500;
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.SlideProperties();
                dto.width = width;
                dto.height = height;
                return api.setSlideProperties(fileName, dto, password, folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(model.SlideProperties.SizeTypeEnum.Custom, (putResult.body as model.SlideProperties).sizeType);
                    assert.equal(width, (putResult.body as model.SlideProperties).width);
                    assert.equal(height, (putResult.body as model.SlideProperties).height);
                });
            });
        });
    });

    it("protectionProperties", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getProtectionProperties(fileName, password, folderName).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    const properties = getResult.body as model.ProtectionProperties;
                    const dto = new model.ProtectionProperties();
                    dto.readOnlyRecommended = !properties.readOnlyRecommended;
                    return api.setProtection(fileName, dto, password, folderName).then((putResult) => {
                        assert.equal(200, putResult.response.statusCode);
                        assert.equal(properties.encryptDocumentProperties, (putResult.body as model.ProtectionProperties).encryptDocumentProperties);
                        assert.notEqual(properties.readOnlyRecommended, (putResult.body as model.ProtectionProperties).readOnlyRecommended);
                    });
                });
            });
        });
    });

    it("deleteProtection", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const password = "password";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteProtection(fileName, password, folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert(!(result.body as model.ProtectionProperties).isEncrypted);
                    assert(!(result.body as model.ProtectionProperties).readOnlyRecommended);
                    assert(!(result.body as model.ProtectionProperties).readPassword);
                });
            });
        });
    });

    it("protectOnline", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            const dto = new model.ProtectionProperties();
            dto.readPassword = "newPassword";
            const input = fs.createReadStream("TestData/test.pptx");
            return api.setProtectionOnline(input, dto, "password").then((result) => {
                assert.equal(200, result.response.statusCode);
                assert(result.body.length != input.length);
            });
        });
    });

    it("unprotectOnline", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            const input = fs.createReadStream("TestData/test.pptx");
            return api.deleteProtectionOnline(input, "password").then((result) => {
                assert.equal(200, result.response.statusCode);
                assert(result.body.length != input.length);
            });
        });
    });

    it("getViewProperties", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";

            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const response = await api.getViewProperties(fileName, "password", folderName);
            assert.equal((response.body as model.ViewProperties).showComments, model.ViewProperties.ShowCommentsEnum.True);
        });
    });

    it("setViewProperties", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";

            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const slideViewPropDto = new model.CommonSlideViewProperties();
            slideViewPropDto.scale = 50;

            const dto = new model.ViewProperties();
            dto.showComments = model.ViewProperties.ShowCommentsEnum.False;
            dto.slideViewProperties = slideViewPropDto;

            const response = await api.setViewProperties(fileName, dto, "password", folderName);
            assert.equal((response.body as model.ViewProperties).showComments, model.ViewProperties.ShowCommentsEnum.False);
            assert.equal((response.body as model.ViewProperties).slideViewProperties.scale, 50);
        });
    });
});