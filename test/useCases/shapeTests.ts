﻿/*
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

import * as model from "../../sdk/model";
import {GeometryShape, Portion, ShapeExportFormat, SolidFill} from "../../sdk/model";
import {TestUtils} from "../testUtils";

var fs = require('fs');

var assert = require('assert');
import ShapeTypeEnum = GeometryShape.ShapeTypeEnum;

describe("Shape tests", () => {
    it("get shapes", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 3;
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Shapes).shapesLinks.length, 2);
        });
    });

    it("get shapes by type", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 3;
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName, null, model.ShapeType.Chart);
            assert.equal((result.body as model.Shapes).shapesLinks.length, 2);
        });
    });

    it("get sub-shapes", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 1;
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName, null, null, "4");
            assert.equal((result.body as model.Shapes).shapesLinks.length, 2);
        });
    });

    it("get shape", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 3;
            const shapeIndex = 1;
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.getShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Shape).type, "Chart");
        });
    });

    it("get sub-shape", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 1;
            const shapeIndex = 4;
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.getShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName, null, "1");
            assert.equal((result.body as model.ShapeBase).type, "Shape");
	        });
    });

    it("shape add", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.Shape();
                dto.shapeType = model.GeometryShape.ShapeTypeEnum.Callout1;
                return api.createShape(TestUtils.fileName, 1, dto, null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.Shape);
                });
            });
        });
    });

    it("shape load save", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getShape(TestUtils.fileName, 1, 1, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    const dto = result.body as model.ShapeBase;
                    return api.updateShape(TestUtils.fileName, 1, 1, dto, TestUtils.password, TestUtils.folderName).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        assert(result.body as model.Chart);
                    });
                });
            });
        });
    });

    it("shape empty", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.createShape(TestUtils.fileName, 1, new model.Shape(), null, null, TestUtils.password, TestUtils.folderName)
                    .then(() => assert.fail("Shape with undefinined type should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("graphicalObject empty", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.createShape(TestUtils.fileName, 1, new model.GraphicalObject(), null, null, TestUtils.password, TestUtils.folderName)
                    .then(() => assert.fail("GraphicalObject should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("pictureFrame add", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.PictureFrame();
                const fill = new model.PictureFill();
                fill.base64Data = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY5g+ffp/AAZTAsWGL27gAAAAAElFTkSuQmCC";
                dto.pictureFillFormat = fill;
                return api.createShape(TestUtils.fileName, 1, dto, null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.PictureFrame);
                });
            });
        });
    });

    it("pictureFrame empty", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.createShape(TestUtils.fileName, 1, new model.PictureFrame(), null, null, TestUtils.password, TestUtils.folderName)
                    .then(() => assert.fail("PictureFrame with undefinined data should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("audioFrame add", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.AudioFrame();
                dto.base64Data = "bXAzc2FtcGxl";
                return api.createShape(TestUtils.fileName, 1, dto, null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.AudioFrame);
                });
            });
        });
    });

    it("audioFrame empty", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.createShape(TestUtils.fileName, 1, new model.AudioFrame(), null, null, TestUtils.password, TestUtils.folderName)
                    .then(() => assert.fail("AudioFrame with undefinined data should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("videoFrame add", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.VideoFrame();
                dto.base64Data = "bXAzc2FtcGxl";
                return api.createShape(TestUtils.fileName, 1, dto, null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.VideoFrame);
                });
            });
        });
    });

    it("videoFrame empty", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.createShape(TestUtils.fileName, 1, new model.VideoFrame(), null, null, TestUtils.password, TestUtils.folderName)
                    .then(() => assert.fail("VideoFrame with undefined data should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("oleObjectFrame empty", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.createShape(TestUtils.fileName, 1, new model.OleObjectFrame(), null, null, TestUtils.password, TestUtils.folderName)
                    .then(() => assert.fail("OleObjectFrame  should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("smartArt add", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.SmartArt();
                dto.x = 0;
                dto.y = 0;
                dto.width = 300;
                dto.height = 200;
                dto.layout = model.SmartArt.LayoutEnum.BasicProcess;
                dto.quickStyle = model.SmartArt.QuickStyleEnum.SimpleFill;
                dto.colorStyle = model.SmartArt.ColorStyleEnum.ColoredFillAccent1;
                const node1 = new model.SmartArtNode();
                node1.text = "First";
                node1.orgChartLayout = model.SmartArtNode.OrgChartLayoutEnum.Initial;
                const subNode1 = new model.SmartArtNode();
                subNode1.text = "SubFirst";
                subNode1.orgChartLayout = model.SmartArtNode.OrgChartLayoutEnum.Initial;
                node1.nodes = [subNode1];
                const node2 = new model.SmartArtNode();
                node2.text = "Second";
                node2.orgChartLayout = model.SmartArtNode.OrgChartLayoutEnum.Initial;
                dto.nodes = [node1, node2];
                return api.createShape(TestUtils.fileName, 1, dto, null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.SmartArt);
                });
            });
        });
    });

    it ("smartArt text formatting", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath)
            const portion = new Portion();
            portion.text = "New text";
            portion.fontHeight = 24;
            portion.fontBold = Portion.FontBoldEnum.True;
            portion.spacing = 3;
            const fillFormat = new SolidFill();
            fillFormat.color = "#FFFFFF00";
            portion.fillFormat = fillFormat;

            const targetNodePath = "1/nodes/2";
            const slideIndex = 7;

            const response = await api.updatePortion(TestUtils.fileName, slideIndex, 1, 1, 1, portion, TestUtils.password, TestUtils.folderName, null, targetNodePath);

            assert.notEqual(null, response);
            assert.equal(portion.text, response.body.text)
            assert.equal(portion.fontHeight, response.body.fontHeight)
            assert.equal(portion.fontBold, response.body.fontBold)
            assert.equal(portion.spacing, response.body.spacing)
            assert.equal((portion.fillFormat as SolidFill).color, (response.body.fillFormat as SolidFill).color)
        })
    });

    it("smartArt empty", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.createShape(TestUtils.fileName, 1, new model.SmartArt(), null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.SmartArt);
                });
            });
        });
    });

    it("chart empty", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.createShape(TestUtils.fileName, 1, new model.Chart(), null, null, TestUtils.password, TestUtils.folderName)
                    .then(() => assert.fail("Empty Chart should not have been created"))
                    .catch((err) => {
                        assert.equal(500, err.code);
                    });
            });
        });
    });

    it("table add", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.Table();
                dto.x = 30;
                dto.y = 20;
                dto.style = model.Table.StyleEnum.MediumStyle2Accent1;
                const row1 = new model.TableRow();
                const cell11 = new model.TableCell();
                cell11.text = "0.1";
                const cell12 = new model.TableCell();
                cell12.text = "0.2";
                const cell13 = new model.TableCell();
                cell13.text = "0.3";
                const cell14 = new model.TableCell();
                cell14.text = "0.4";
                row1.cells = [cell11, cell12, cell13, cell14];
                const row2 = new model.TableRow();
                const cell21 = new model.TableCell();
                cell21.text = "1";
                const cell22 = new model.TableCell();
                cell22.text = "2-3";
                cell22.colSpan = 2;
                cell22.rowSpan = 2;
                const cell24 = new model.TableCell();
                cell24.text = "4";
                row2.cells = [cell21, cell22, cell24];
                const row3 = new model.TableRow();
                const cell31 = new model.TableCell();
                cell31.text = "first";
                const cell32 = new model.TableCell();
                cell32.text = "last";
                row3.cells = [cell31, cell32];
                const row4 = new model.TableRow();
                const cell41 = new model.TableCell();
                cell41.text = "3.1";
                const cell42 = new model.TableCell();
                cell42.text = "3.2";
                const cell43 = new model.TableCell();
                cell43.text = "3.3";
                const cell44 = new model.TableCell();
                cell44.text = "3.4";
                row4.cells = [cell41, cell42, cell43, cell44];
                const row5 = new model.TableRow();
                const cell51 = new model.TableCell();
                cell51.text = "4.1";
                const cell52 = new model.TableCell();
                cell52.text = "4.2";
                const cell53 = new model.TableCell();
                cell53.text = "4.3";
                const cell54 = new model.TableCell();
                cell54.text = "4.4";
                row5.cells = [cell51, cell52, cell53, cell54];
                dto.rows = [row1, row2, row3, row4, row5];
                const column1 = new model.TableColumn();
                column1.width = 100;
                const column2 = new model.TableColumn();
                column2.width = 100;
                const column3 = new model.TableColumn();
                column3.width = 100;
                const column4 = new model.TableColumn();
                column4.width = 100;
                dto.columns = [column1, column2, column3, column4];
                dto.firstRow = true;
                dto.horizontalBanding = true;
                return api.createShape(TestUtils.fileName, 1, dto, null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.SmartArt);
                });
            });
        });
    });

    it("table empty", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.createShape(TestUtils.fileName, 1, new model.Table(), null, null, TestUtils.password, TestUtils.folderName)
                    .then(() => assert.fail("Table with undefinined cell data should not have been created"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("groupShape empty", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.createShape(TestUtils.fileName, 1, new model.GroupShape(), null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.GroupShape);
                });
            });
        });
    });

    it("connector add", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.Connector();
                dto.shapeType = model.GeometryShape.ShapeTypeEnum.BentConnector3;
                const start = new model.ResourceUri();
                start.href = "https://api.aspose.cloud/v3.0/slides/myPresentation.pptx/slides/1/shapes/1";
                dto.startShapeConnectedTo = start;
                const end = new model.ResourceUri();
                end.href = "https://api.aspose.cloud/v3.0/slides/myPresentation.pptx/slides/1/shapes/2";
                dto.endShapeConnectedTo = end;
                return api.createShape(TestUtils.fileName, 1, dto, null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.SmartArt);
                });
            });
        });
    });

    it("connector empty", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.createShape(TestUtils.fileName, 1, new model.Connector(), null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert(result.body as model.Connector);
                });
            });
        });
    });

    it("create sub-shape", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 1;

            const dto = new model.Shape();
            dto.shapeType = model.GeometryShape.ShapeTypeEnum.Rectangle;
            dto.x = 200;
            dto.y = 200;
            dto.width = 50;
            dto.height = 50;

            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.createShape(TestUtils.fileName, slideIndex,  dto, null, null, TestUtils.password, TestUtils.folderName, null, "4");

            assert.equal((result.body as model.ShapeBase).type, "Shape");
        });
    });

    it("update shape", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 1;
            const shapeIndex = 3;

            const fillFormatDto = new model.SolidFill();
            fillFormatDto.color = "#FFF5FF8A";
            const dto = new model.Shape();
            dto.width = 200;
            dto.height = 200;
            dto.fillFormat = fillFormatDto;

            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.updateShape(TestUtils.fileName, slideIndex, shapeIndex, dto, TestUtils.password, TestUtils.folderName);

            assert.equal((result.body as model.ShapeBase).type, "Shape");
            assert.equal((result.body as model.ShapeBase).width, dto.width);
            assert.equal((result.body as model.ShapeBase).height, dto.height);
            assert.equal((result.body as model.ShapeBase).fillFormat.type, "Solid");
        });
    });

    it("update sub-shape", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 1;
            const shapeIndex = 4;

            const gradientStop1 = new model.GradientFillStop();
            gradientStop1.color = "#FFF5FF8A";
            gradientStop1.position = 0;

            const gradientStop2 = new model.GradientFillStop();
            gradientStop2.color = "#FFFFFFFF";
            gradientStop2.position = 1;

            const fillFormatDto = new model.GradientFill();
            fillFormatDto.shape = model.GradientFill.ShapeEnum.Linear;
            fillFormatDto.direction = model.GradientFill.DirectionEnum.FromCorner1;
            fillFormatDto.stops = [gradientStop1, gradientStop2];

            const dto = new model.Shape();
            dto.width = 200;
            dto.height = 200;
            dto.fillFormat = fillFormatDto;

            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.updateShape(TestUtils.fileName, slideIndex, shapeIndex, dto, TestUtils.password, TestUtils.folderName, null, "1");

            assert.equal((result.body as model.ShapeBase).type, "Shape");
            assert.equal((result.body as model.ShapeBase).width, dto.width);
            assert.equal((result.body as model.ShapeBase).height, dto.height);
            assert.equal((result.body as model.ShapeBase).fillFormat.type, "Gradient");
        });
    });

    it("delete shapes", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 3;

            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.deleteShapes(TestUtils.fileName, slideIndex, null, TestUtils.password, TestUtils.folderName);

            assert.equal((result.body as model.Shapes).shapesLinks.length, 0);
        });
    });

    it("delete shapes by indexes", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 3;

            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.deleteShapes(TestUtils.fileName, slideIndex, [2], TestUtils.password, TestUtils.folderName);

            assert.equal((result.body as model.Shapes).shapesLinks.length, 1);
        });
    });

    it("delete sub-shapes", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 1;

            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.deleteShapes(TestUtils.fileName, slideIndex, null, TestUtils.password, TestUtils.folderName, null, "4");

            assert.equal((result.body as model.Shapes).shapesLinks.length, 0);
        });
    });

    it("delete sub-shapes by indexes", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 1;

            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.deleteShapes(TestUtils.fileName, slideIndex, [2], TestUtils.password, TestUtils.folderName, null, "4");

            assert.equal((result.body as model.Shapes).shapesLinks.length, 1);
        });
    });

    it("delete shape", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 1;
            const shapeIndex = 4;

            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.deleteShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName);

            assert.equal((result.body as model.Shapes).shapesLinks.length, 3);
        });
    });

    it("delete sub-shape", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 1;
            const shapeIndex = 4;

            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.deleteShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName, null, "1");

            assert.equal((result.body as model.Shapes).shapesLinks.length, 1);
        });
    });

    it("align", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 3;
            const shape1Index = 1;
            const shape2Index = 2;
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getShape(TestUtils.fileName, slideIndex, shape1Index, TestUtils.password, TestUtils.folderName).then((getResult11) => {
                    assert.equal(200, getResult11.response.statusCode);
                    return api.getShape(TestUtils.fileName, slideIndex, shape2Index, TestUtils.password, TestUtils.folderName).then((getResult12) => {
                        assert.equal(200, getResult12.response.statusCode);
                        assert((getResult11.body as model.ShapeBase).x != (getResult12.body as model.ShapeBase).x);
                        assert((getResult11.body as model.ShapeBase).y != (getResult12.body as model.ShapeBase).y);
                        return api.alignShapes(TestUtils.fileName, slideIndex, model.ShapesAlignmentType.AlignTop, null, null, TestUtils.password, TestUtils.folderName).then((result1) => {
                            assert.equal(200, result1.response.statusCode);
                            return api.getShape(TestUtils.fileName, slideIndex, shape1Index, TestUtils.password, TestUtils.folderName).then((getResult21) => {
                                assert.equal(200, getResult21.response.statusCode);
                                return api.getShape(TestUtils.fileName, slideIndex, shape2Index, TestUtils.password, TestUtils.folderName).then((getResult22) => {
                                    assert.equal(200, getResult22.response.statusCode);
                                    assert((getResult21.body as model.ShapeBase).x != (getResult22.body as model.ShapeBase).x);
                                    assert(Math.abs((getResult21.body as model.ShapeBase).y - (getResult22.body as model.ShapeBase).y) < 1);
                                    return api.alignShapes(TestUtils.fileName, slideIndex, model.ShapesAlignmentType.AlignLeft, true, [1, 2], TestUtils.password, TestUtils.folderName).then((result2) => {
                                        assert.equal(200, result2.response.statusCode);
                                        return api.getShape(TestUtils.fileName, slideIndex, shape1Index, TestUtils.password, TestUtils.folderName).then((getResult31) => {
                                            assert.equal(200, getResult31.response.statusCode);
                                            return api.getShape(TestUtils.fileName, slideIndex, shape2Index, TestUtils.password, TestUtils.folderName).then((getResult32) => {
                                                assert.equal(200, getResult32.response.statusCode);
                                                assert(Math.abs((getResult31.body as model.ShapeBase).x - (getResult32.body as model.ShapeBase).x) < 1);
                                                assert(Math.abs((getResult31.body as model.ShapeBase).y - (getResult32.body as model.ShapeBase).y) < 1);
                                                assert(Math.abs((getResult31.body as model.ShapeBase).x) < 1);
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

    it("align group", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const shapeIndex = 4;
            const subShape1Path = "1";
            const subShape2Path = "2";
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName, null, subShape1Path).then((getResult11) => {
                    assert.equal(200, getResult11.response.statusCode);
                    return api.getShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName, null, subShape2Path).then((getResult12) => {
                        assert.equal(200, getResult12.response.statusCode);
                        assert((getResult11.body as model.ShapeBase).x != (getResult12.body as model.ShapeBase).x);
                        assert((getResult11.body as model.ShapeBase).y != (getResult12.body as model.ShapeBase).y);
                        return api.alignShapes(TestUtils.fileName, slideIndex, model.ShapesAlignmentType.AlignTop, null, null, TestUtils.password, TestUtils.folderName, null, "4").then((result1) => {
                            assert.equal(200, result1.response.statusCode);
                            return api.getShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName, null, subShape1Path).then((getResult21) => {
                                assert.equal(200, getResult21.response.statusCode);
                                return api.getShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName, null, subShape2Path).then((getResult22) => {
                                    assert.equal(200, getResult22.response.statusCode);
                                    assert((getResult21.body as model.ShapeBase).x != (getResult22.body as model.ShapeBase).x);
                                    assert(Math.abs((getResult21.body as model.ShapeBase).y - (getResult22.body as model.ShapeBase).y) < 1);
                                    return api.alignShapes(TestUtils.fileName, slideIndex, model.ShapesAlignmentType.AlignLeft, true, [1, 2], TestUtils.password, TestUtils.folderName, null, "4").then((result2) => {
                                        assert.equal(200, result2.response.statusCode);
                                        return api.getShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName, null, subShape1Path).then((getResult31) => {
                                            assert.equal(200, getResult31.response.statusCode);
                                            return api.getShape(TestUtils.fileName, slideIndex, shapeIndex, TestUtils.password, TestUtils.folderName, null, subShape2Path).then((getResult32) => {
                                                assert.equal(200, getResult32.response.statusCode);
                                                assert(Math.abs((getResult31.body as model.ShapeBase).x - (getResult32.body as model.ShapeBase).x) < 1);
                                                assert(Math.abs((getResult31.body as model.ShapeBase).y - (getResult32.body as model.ShapeBase).y) < 1);
                                                assert(Math.abs((getResult31.body as model.ShapeBase).x) < 1);
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

    it("geometry get", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getShapeGeometryPath(TestUtils.fileName, 4, 2, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert((result.body as model.GeometryPaths).paths);
                    assert.equal(1, (result.body as model.GeometryPaths).paths.length);
                });
            });
        });
    });

    it("geometry set", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getSlidesApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.GeometryPaths();
                const path = new model.GeometryPath();
                const start = new model.MoveToPathSegment();
                start.x = 0;
                start.y = 0;
                const line1 = new model.MoveToPathSegment();
                line1.x = 0;
                line1.y = 200;
                const line2 = new model.MoveToPathSegment();
                line2.x = 200;
                line2.y = 300;
                const line3 = new model.MoveToPathSegment();
                line3.x = 400;
                line3.y = 200;
                const line4 = new model.MoveToPathSegment();
                line4.x = 400;
                line4.y = 0;
                const end = new model.ClosePathSegment();
                path.pathData = [start, line1, line2, line3, line4, end];
                dto.paths = [path];
                return api.setShapeGeometryPath(TestUtils.fileName, 4, 1, dto, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert((result.body as model.ShapeBase));
                });
            });
        });
    });

    it("add zoom frame", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 3;

            const dto = new model.ZoomFrame();
            dto.x = 20;
            dto.y = 20;
            dto.width = 200;
            dto.height = 100;
            dto.targetSlideIndex = 2;

            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.createShape(TestUtils.fileName, slideIndex, dto, null, null, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Shape).type, "ZoomFrame");
            assert.equal((result.body as model.ZoomFrame).targetSlideIndex, 2);
        });
    });

    it("add section zoom frame", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const slideIndex = 3;

            const dto = new model.SectionZoomFrame();
            dto.x = 20;
            dto.y = 20;
            dto.width = 200;
            dto.height = 100;
            dto.targetSectionIndex = 2;

            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            const result = await api.createShape(TestUtils.fileName, slideIndex, dto, null, null, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Shape).type, "SectionZoomFrame");
            assert.equal((result.body as model.SectionZoomFrame).targetSectionIndex, 2);
        });
    });
    
    it("ole object frame add by link", async () => {
        const oleObjectFileName = "oleObject.xlsx";
        const slideIndex = 3;
        
        const api = TestUtils.getSlidesApi();
        await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath)
        
        const dto = new model.OleObjectFrame();
        dto.x = 100;
        dto.y = 100;
        dto.width = 200;
        dto.height = 200;
        dto.linkPath = oleObjectFileName;
        dto.objectProgId = "Excel.Sheet.8";
        
        const result = await api.createShape(TestUtils.fileName, slideIndex, dto, null, null, TestUtils.password, TestUtils.folderName);
        assert.equal(result.body.type, "OleObjectFrame");
        assert.equal((result.body as model.OleObjectFrame).linkPath, dto.linkPath);
    });

    it("ole object frame add embedded", async () => {
        const oleObjectFileName = "TestData/oleObject.xlsx";
        const slideIndex = 3;
        
        const api = TestUtils.getSlidesApi();
        await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath)
        
        const dto = new model.OleObjectFrame();
        dto.x = 100;
        dto.y = 100;
        dto.width = 200;
        dto.height = 200;
        dto.embeddedFileBase64Data =  fs.readFileSync(oleObjectFileName, {encoding: 'base64'});
        dto.embeddedFileExtension = "xlsx";

        const result = await api.createShape(TestUtils.fileName, slideIndex, dto, null, null, TestUtils.password, TestUtils.folderName);

        assert.equal((result.body as model.OleObjectFrame).embeddedFileBase64Data, dto.embeddedFileBase64Data);
        assert.equal((result.body as model.OleObjectFrame).embeddedFileExtension, dto.embeddedFileExtension);
    });
    
    it("group shape add", async () => {
        const slideIndex = 5;

        const api = TestUtils.getSlidesApi();
        await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath)
        
        let shapes = await api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName);
        assert.equal(0, shapes.body.shapesLinks.length);
        
        const groupShape = new model.GroupShape();
        await  api.createShape(TestUtils.fileName, slideIndex, groupShape, null, null, TestUtils.password, TestUtils.folderName);
        
        const shape1 = new model.Shape();
        shape1.shapeType = ShapeTypeEnum.Rectangle; 
        shape1.x = 50;
        shape1.y = 400;
        shape1.width = 50;
        shape1.height = 50;

        const shape2 = new model.Shape();
        shape2.shapeType = ShapeTypeEnum.Ellipse;
        shape2.x = 150;
        shape2.y = 400;
        shape2.width = 50;
        shape2.height = 50;

        const shape3 = new model.Shape();
        shape3.shapeType = ShapeTypeEnum.Ellipse;
        shape3.x = 250;
        shape3.y = 400;
        shape3.width = 50;
        shape3.height = 50;
        
        const shapePath = "1";

        await api.createShape(TestUtils.fileName, slideIndex, shape1, null, null, TestUtils.password, TestUtils.folderName, null, shapePath);
        await api.createShape(TestUtils.fileName, slideIndex, shape2, null, null, TestUtils.password, TestUtils.folderName, null, shapePath);
        await api.createShape(TestUtils.fileName, slideIndex, shape2, null, null, TestUtils.password, TestUtils.folderName, null, shapePath);

        shapes = await api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName);
        assert.equal(1, shapes.body.shapesLinks.length);

        shapes = await api.getShapes(TestUtils.fileName, slideIndex, TestUtils.password, TestUtils.folderName, null, null, shapePath);
        assert.equal(3, shapes.body.shapesLinks.length);
    });

    it("import shapes from SVG", () => {
        return TestUtils.runTest(async () => {
            const svgFileName = "shapes.svg";
            const slideIndex = 5;
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const stream = fs.createReadStream(TestUtils.testDataPath + "/" + svgFileName)
            const response = await api.importShapesFromSvg(TestUtils.fileName, slideIndex, stream, 50, 50, 300, 300,
                [1, 3, 5], false, TestUtils.password, TestUtils.folderName);
            assert.equal(3, response.body.shapesLinks.length)
        });
    });

    it("create smart art node", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 7;
            const smartArtIndex = 1;
            const newNodeText = "New root node";
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);
            
            const response = await api.createSmartArtNode(TestUtils.fileName, slideIndex, smartArtIndex, null, newNodeText,
                null, TestUtils.password, TestUtils.folderName);
            assert.equal(2, response.body.nodes.length)
            assert.equal(newNodeText, response.body.nodes[1].text)
        });
    });

    it("create smart art sub-node", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 7;
            const smartArtIndex = 1;
            const subNodePath = "1";
            const newSubNodeText = "New sub-node";
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const response = await api.createSmartArtNode(TestUtils.fileName, slideIndex, smartArtIndex, subNodePath, newSubNodeText,
                1, TestUtils.password, TestUtils.folderName);
            assert.equal(5, response.body.nodes[0].nodes.length)
            assert.equal(newSubNodeText, response.body.nodes[0].nodes[0].text)
        });
    });

    it("create smart art sub-sub-node", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 7;
            const smartArtIndex = 1;
            const subSubNodePath = "1/nodes/1";
            const newSubNodeText = "New sub-sub-node";
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const response = await api.createSmartArtNode(TestUtils.fileName, slideIndex, smartArtIndex, subSubNodePath, newSubNodeText,
                null, TestUtils.password, TestUtils.folderName);
            assert.equal(1, response.body.nodes[0].nodes[0].nodes.length)
            assert.equal(newSubNodeText, response.body.nodes[0].nodes[0].nodes[0].text)
        });
    });

    it("delete smart art node", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 7;
            const smartArtIndex = 2;
            const nodeIndex = 1;

            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const response = await api.deleteSmartArtNode(TestUtils.fileName, slideIndex, smartArtIndex, nodeIndex, null,
                TestUtils.password, TestUtils.folderName);
            assert.equal(2, response.body.nodes.length)
        });
    });

    it("delete smart art sub-node", () => {
        return TestUtils.runTest(async () => {
            const slideIndex = 7;
            const smartArtIndex = 1;
            const nodeIndex = 1;
            const subNodePath = "2";
            const api = TestUtils.getSlidesApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            const response = await api.deleteSmartArtNode(TestUtils.fileName, slideIndex, smartArtIndex, nodeIndex, subNodePath,
                TestUtils.password, TestUtils.folderName);
            assert.equal(3, response.body.nodes[0].nodes.length)
        });
    });

    it("download shape from DTO", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getSlidesApi();
            const dto = new model.Shape();
            dto.shapeType = ShapeTypeEnum.Rectangle;
            dto.width = 400;
            dto.height = 200;
            dto.text = "Shape text";
            
            const result = await api.downloadShapeFromDto(ShapeExportFormat.Png, dto);
            assert.equal(200, result.response.statusCode);
        });
    });
});
