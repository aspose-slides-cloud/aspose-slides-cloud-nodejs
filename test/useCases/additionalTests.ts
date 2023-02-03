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
import {TestUtils} from "../testUtils";

describe("Additional tests", () => {
    it("multiple files upload", () => {
        let file1 = new model.RequestInputFile();
        file1.index = 0;
        let file2 = new model.RequestInputFile();
        file2.index = 1;
        let task = new model.Save();
        task.format = model.Save.FormatEnum.Pptx;
        task.output = new model.ResponseOutputFile();
        const pipeline = {input: {templateData: file1, template: file2}, tasks: [task]};
        const fs = require('fs');
        const files = [
            fs.createReadStream("TestData/TemplatingCVDataWithBase64.xml"),
            fs.createReadStream("TestData/TemplateCV.pptx")
        ];
        return TestUtils.getApi().pipeline(pipeline, files).then((result) => {
            assert.equal(200, result.response.statusCode);
        });
    });

    it("shape type", () => {
        return TestUtils.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestUtils.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShape(fileName, 1, 1, "password", folderName).then((result) => {
                    assert.equal("Shape", (result.body as model.ShapeBase).type);
                    assert.equal("1", (result.body as model.Shape).text);
                });
            });
        });
    });

    it("chart type", () => {
        let chart = new model.Chart();
        assert.equal("Chart", chart.type);
    });

    it("nullable fields", () => {
        return TestUtils.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const min1 = 44.3;
            const min2 = 12;
            const max1 = 104.3;
            const max2 = 87;
            const api = TestUtils.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                let chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.Line;
                chart.width = 400;
                chart.height = 300;
                chart.title = {hasTitle: true, text: "MyChart"};
                const series = new model.OneValueSeries();
                series.type = model.Series.TypeEnum.ClusteredColumn;
                series.dataPointType = model.OneValueSeries.DataPointTypeEnum.OneValue;
                series.name = "Series1";
                const dataPoint1 = new model.OneValueChartDataPoint();
                dataPoint1.value = 40;
                const dataPoint2 = new model.OneValueChartDataPoint();
                dataPoint2.value = 50;
                series.dataPoints = [dataPoint1, dataPoint2];
                chart.series = [series];
                chart.axes = {
                    horizontalAxis: {
                        isAutomaticMinValue: false,
                        minValue: min1,
                        isAutomaticMaxValue: false,
                        maxValue: max1
                    }
                };
                return api.createShape(fileName, 1, chart, null, null, "password", folderName).then(() => {
                    return api.getShape(fileName, 1, 5, "password", folderName).then((result) => {
                        assert.equal(min1, (result.body as model.Chart).axes.horizontalAxis.minValue);
                        assert.equal(max1, (result.body as model.Chart).axes.horizontalAxis.maxValue);
                        chart = new model.Chart();
                        chart.axes = {horizontalAxis: {minValue: min2}};
                        return api.updateShape(fileName, 1, 5, chart, "password", folderName).then(() => {
                            return api.getShape(fileName, 1, 5, "password", folderName).then((result2) => {
                                assert.equal(min2, (result2.body as model.Chart).axes.horizontalAxis.minValue);
                                assert.equal(max1, (result2.body as model.Chart).axes.horizontalAxis.maxValue);
                                chart.axes = {horizontalAxis: {maxValue: max2}};
                                return api.updateShape(fileName, 1, 5, chart, "password", folderName).then(() => {
                                    return api.getShape(fileName, 1, 5, "password", folderName).then((result3) => {
                                        assert.equal(min2, (result3.body as model.Chart).axes.horizontalAxis.minValue);
                                        assert.equal(max2, (result3.body as model.Chart).axes.horizontalAxis.maxValue);
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
