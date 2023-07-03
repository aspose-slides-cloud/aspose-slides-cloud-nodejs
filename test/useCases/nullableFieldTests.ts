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

describe("Nullable field tests", () => {
    it("default chart values", () => {
        return TestUtils.runTest(() => {
            const min1 = 44.3;
            const min2 = 12;
            const max1 = 104.3;
            const max2 = 87;
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
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
                return api.createShape(TestUtils.fileName, 1, chart, null, null, TestUtils.password, TestUtils.folderName).then(() => {
                    return api.getShape(TestUtils.fileName, 1, 5, TestUtils.password, TestUtils.folderName).then((result) => {
                        assert.equal(min1, (result.body as model.Chart).axes.horizontalAxis.minValue);
                        assert.equal(max1, (result.body as model.Chart).axes.horizontalAxis.maxValue);
                        chart = new model.Chart();
                        chart.axes = {horizontalAxis: {minValue: min2}};
                        return api.updateShape(TestUtils.fileName, 1, 5, chart, TestUtils.password, TestUtils.folderName).then(() => {
                            return api.getShape(TestUtils.fileName, 1, 5, TestUtils.password, TestUtils.folderName).then((result2) => {
                                assert.equal(min2, (result2.body as model.Chart).axes.horizontalAxis.minValue);
                                assert.equal(max1, (result2.body as model.Chart).axes.horizontalAxis.maxValue);
                                chart.axes = {horizontalAxis: {maxValue: max2}};
                                return api.updateShape(TestUtils.fileName, 1, 5, chart, TestUtils.password, TestUtils.folderName).then(() => {
                                    return api.getShape(TestUtils.fileName, 1, 5, TestUtils.password, TestUtils.folderName).then((result3) => {
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
