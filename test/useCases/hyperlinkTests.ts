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
import {TestInitializer} from "../testInitializer";

describe("Hyperlink tests", () => {
    it("get shape", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShape(fileName, 2, 2, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert((result.body as model.ShapeBase).hyperlinkClick);
                    assert.equal(model.Hyperlink.ActionTypeEnum.Hyperlink, (result.body as model.ShapeBase).hyperlinkClick.actionType);
                    assert(!(result.body as model.ShapeBase).hyperlinkMouseOver);
                });
            });
        });
    });

    it("get portion", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getPortion(fileName, 2, 1, 1, 2, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert(!(result.body as model.ShapeBase).hyperlinkClick);
                    assert((result.body as model.ShapeBase).hyperlinkMouseOver);
                    assert.equal(model.Hyperlink.ActionTypeEnum.JumpLastSlide, (result.body as model.ShapeBase).hyperlinkMouseOver.actionType);
                });
            });
        });
    });

    it("create shape", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const shape = new model.Shape();
                const hyperlink = new model.Hyperlink();
                hyperlink.actionType = model.Hyperlink.ActionTypeEnum.Hyperlink;
                hyperlink.externalUrl = "https://docs.aspose.cloud/slides";
                shape.hyperlinkClick = hyperlink;
                return api.updateShape(fileName, 1, 1, shape, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert((result.body as model.ShapeBase).hyperlinkClick);
                    assert.equal(hyperlink.externalUrl, (result.body as model.ShapeBase).hyperlinkClick.externalUrl);
                });
            });
        });
    });

    it("create portion", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dto = new model.Portion();
                dto.text = "Link text";
                const hyperlink = new model.Hyperlink();
                hyperlink.actionType = model.Hyperlink.ActionTypeEnum.JumpLastSlide;
                dto.hyperlinkMouseOver = hyperlink;
                return api.createPortion(fileName, 1, 1, 1, dto, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert((result.body as model.Portion).hyperlinkMouseOver);
                    assert.equal(dto.hyperlinkMouseOver.actionType, (result.body as model.Portion).hyperlinkMouseOver.actionType);
                });
            });
        });
    });

    it("delete", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const shape = new model.PictureFrame();
                const hyperlink = new model.Hyperlink();
                hyperlink.isDisabled = true;
                shape.hyperlinkClick = hyperlink;
                return api.updateShape(fileName, 2, 2, shape, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert(!(result.body as model.ShapeBase).hyperlinkClick);
                });
            });
        });
    });
});
