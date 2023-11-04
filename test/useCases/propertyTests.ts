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

describe("Property tests", () => {
    it("document properties builtin", () => {
        return TestUtils.runTest(() => {
            const propertyName = "Author";
            const updatedPropertyValue = "New Value";
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getDocumentProperty(TestUtils.fileName, propertyName, TestUtils.password, TestUtils.folderName).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    assert.equal(propertyName, (getResult.body as model.DocumentProperty).name);
                    assert((getResult.body as model.DocumentProperty).builtIn);
                    const property = new model.DocumentProperty();
                    property.value = updatedPropertyValue;
                    return api.setDocumentProperty(TestUtils.fileName, propertyName, property, TestUtils.password, TestUtils.folderName).then((putResult) => {
                        assert.equal(200, putResult.response.statusCode);
                        assert.equal(propertyName, (putResult.body as model.DocumentProperty).name);
                        assert.equal(updatedPropertyValue, (putResult.body as model.DocumentProperty).value);
                        assert((putResult.body as model.DocumentProperty).builtIn);
                        return api.deleteDocumentProperty(TestUtils.fileName, propertyName, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                            assert.equal(200, deleteResult.response.statusCode);
                            return api.getDocumentProperty(TestUtils.fileName, propertyName, TestUtils.password, TestUtils.folderName).then((getResult2) => {
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

    it("document properties custom", () => {
        return TestUtils.runTest(() => {
            const propertyName = "CustomProperty2";
            const updatedPropertyValue = "New Value";
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const property = new model.DocumentProperty();
                property.value = updatedPropertyValue;
                return api.setDocumentProperty(TestUtils.fileName, propertyName, property, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(201, putResult.response.statusCode);
                    assert.equal(propertyName, (putResult.body as model.DocumentProperty).name);
                    assert.equal(updatedPropertyValue, (putResult.body as model.DocumentProperty).value);
                    assert(!(putResult.body as model.DocumentProperty).builtIn);
                    return api.deleteDocumentProperty(TestUtils.fileName, propertyName, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                        assert.equal(200, deleteResult.response.statusCode);
                        return api.getDocumentProperty(TestUtils.fileName, propertyName, TestUtils.password, TestUtils.folderName)
                            .then(() => assert.fail("The property must have been deleted"))
                            .catch((err) => {
                                assert.equal(404, err.code);
                            });
                    });
                });
            });
        });
    });

    it("document properties bulk update", () => {
        return TestUtils.runTest(() => {
            const propertyName = "Author";
            const customPropertyName = "CustomProperty2";
            const updatedPropertyValue = "New Value";
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getDocumentProperties(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((getResult) => {
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
                    return api.setDocumentProperties(TestUtils.fileName, properties, TestUtils.password, TestUtils.folderName).then((postResult) => {
                        assert.equal(200, postResult.response.statusCode);
                        assert.equal(count + 1, (postResult.body as model.DocumentProperties).list.length);
                        return api.deleteDocumentProperties(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((deleteResult) => {
                            assert.equal(200, deleteResult.response.statusCode);
                            assert.equal(count - 1, (deleteResult.body as model.DocumentProperties).list.length);
                        });
                    });
                });
            });
        });
    });

    it("slide properties", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getSlideProperties(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    const properties = getResult.body as model.SlideProperties;
                    const dto = new model.SlideProperties();
                    dto.firstSlideNumber = properties.firstSlideNumber + 2;
                    return api.setSlideProperties(TestUtils.fileName, dto, TestUtils.password, TestUtils.folderName).then((putResult) => {
                        assert.equal(200, putResult.response.statusCode);
                        assert.equal(properties.orientation, (putResult.body as model.SlideProperties).orientation);
                        assert.notEqual(properties.firstSlideNumber, (putResult.body as model.SlideProperties).firstSlideNumber);
                    });
                });
            });
        });
    });

    it("slide size preset", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.SlideProperties();
                dto.sizeType = model.SlideProperties.SizeTypeEnum.B4IsoPaper;
                return api.setSlideProperties(TestUtils.fileName, dto, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(model.SlideProperties.SizeTypeEnum.B4IsoPaper, (putResult.body as model.SlideProperties).sizeType);
                    assert.equal(852, (putResult.body as model.SlideProperties).width);
                    assert.equal(639, (putResult.body as model.SlideProperties).height);
                });
            });
        });
    });

    it("slide size custom", () => {
        return TestUtils.runTest(() => {
            const width = 800;
            const height = 500;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.SlideProperties();
                dto.width = width;
                dto.height = height;
                return api.setSlideProperties(TestUtils.fileName, dto, TestUtils.password, TestUtils.folderName).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(model.SlideProperties.SizeTypeEnum.Custom, (putResult.body as model.SlideProperties).sizeType);
                    assert.equal(width, (putResult.body as model.SlideProperties).width);
                    assert.equal(height, (putResult.body as model.SlideProperties).height);
                });
            });
        });
    });

    it("protection", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getProtectionProperties(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    const properties = getResult.body as model.ProtectionProperties;
                    const dto = new model.ProtectionProperties();
                    dto.readOnlyRecommended = !properties.readOnlyRecommended;
                    return api.setProtection(TestUtils.fileName, dto, TestUtils.password, TestUtils.folderName).then((putResult) => {
                        assert.equal(200, putResult.response.statusCode);
                        assert.equal(properties.encryptDocumentProperties, (putResult.body as model.ProtectionProperties).encryptDocumentProperties);
                        assert.notEqual(properties.readOnlyRecommended, (putResult.body as model.ProtectionProperties).readOnlyRecommended);
                    });
                });
            });
        });
    });

    it("delete protection", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.deleteProtection(TestUtils.fileName, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert(!(result.body as model.ProtectionProperties).isEncrypted);
                    assert(!(result.body as model.ProtectionProperties).readOnlyRecommended);
                    assert(!(result.body as model.ProtectionProperties).readPassword);
                });
            });
        });
    });

    it("protect online", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            const dto = new model.ProtectionProperties();
            dto.readPassword = "newPassword";
            const input = fs.createReadStream(TestUtils.localFilePath);
            return api.setProtectionOnline(input, dto, TestUtils.password).then((result) => {
                assert.equal(200, result.response.statusCode);
                assert(result.body.length != input.length);
            });
        });
    });

    it("unprotect online", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            const input = fs.createReadStream(TestUtils.localFilePath);
            return api.deleteProtectionOnline(input, TestUtils.password).then((result) => {
                assert.equal(200, result.response.statusCode);
                assert(result.body.length != input.length);
            });
        });
    });

    it("get view properties", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const response = await api.getViewProperties(TestUtils.fileName, TestUtils.password, TestUtils.folderName);
            assert.equal((response.body as model.ViewProperties).showComments, model.ViewProperties.ShowCommentsEnum.True);
        });
    });

    it("set view properties", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const slideViewPropDto = new model.CommonSlideViewProperties();
            slideViewPropDto.scale = 50;

            const dto = new model.ViewProperties();
            dto.showComments = model.ViewProperties.ShowCommentsEnum.False;
            dto.slideViewProperties = slideViewPropDto;

            const response = await api.setViewProperties(TestUtils.fileName, dto, TestUtils.password, TestUtils.folderName);
            assert.equal((response.body as model.ViewProperties).showComments, model.ViewProperties.ShowCommentsEnum.False);
            assert.equal((response.body as model.ViewProperties).slideViewProperties.scale, 50);
        });
    });

    it("protection check", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            let result = await api.getProtectionProperties(TestUtils.fileName, null, TestUtils.folderName)
            assert.equal(200, result.response.statusCode);
            assert.equal(result.body.isEncrypted, true);
            assert.equal(result.body.readPassword, null);

            result = await api.getProtectionProperties(TestUtils.fileName, TestUtils.password, TestUtils.folderName)
            assert.equal(200, result.response.statusCode);
            assert.equal(result.body.isEncrypted, true);
            assert.notEqual(result.body.readPassword, null);
        });
    });

    it("get slideshow properties", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const response = await api.getSlideShowProperties(TestUtils.fileName, TestUtils.password, TestUtils.folderName);
            assert.equal((response.body as model.SlideShowProperties).showAnimation, true);
            assert.equal((response.body as model.SlideShowProperties).showNarration, true);
        });
    });

    it("set slideshow properties", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const dto = new model.SlideShowProperties();
            dto.loop = true;
            dto.useTimings = true;
            dto.slideShowType = model.SlideShowProperties.SlideShowTypeEnum.PresentedBySpeaker;
            

            const response = await api.setSlideShowProperties(TestUtils.fileName, dto, TestUtils.password, TestUtils.folderName);
            assert.equal((response.body as model.SlideShowProperties).loop, dto.loop);
            assert.equal((response.body as model.SlideShowProperties).useTimings, dto.useTimings);
            assert.equal((response.body as model.SlideShowProperties).slideShowType, dto.slideShowType);
        });
    });
});