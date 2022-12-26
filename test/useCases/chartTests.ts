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

import * as model from "../../sdk/model";
import {
    Axis,
    AxisType,
    BlurEffect,
    ChartWall,
    ChartWallType,
    EffectFormat,
    Legend,
    LineFormat, OneValueChartDataPoint, OneValueSeries,
    SolidFill
} from "../../sdk/model";
import {TestInitializer} from "../testInitializer";

var assert = require('assert');

describe.only("Chart tests", () => {
    it("get", async () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.getShape(fileName, 3, 1, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                    assert((result.body as model.NotesSlide) != null);
                });
            });
        });
    });

    it("create chart auto data source", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.ClusteredColumn;
                chart.width = 400;
                chart.height = 300;
                const series1 = new model.OneValueSeries();
                series1.name = "Series1";
                series1.dataPoints = [{value: 40}, {value: 50}, {value: 70}];
                const series2 = new model.OneValueSeries();
                series2.name = "Series2";
                series2.dataPoints = [{value: 55}, {value: 35}, {value: 90}];
                chart.series = [series1, series2];
                chart.categories = [{value: "Category1"}, {value: "Category2"}, {value: "Category3"}];
                return api.createShape(fileName, 3, chart, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(2, (result.body as model.Chart).series.length);
                    assert.equal(3, (result.body as model.Chart).categories.length);
                });
            });
        });
    });

    it("create chart workbook", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.ClusteredColumn;
                chart.width = 400;
                chart.height = 300;

                const dataSourceForCategories = new model.Workbook();
                dataSourceForCategories.worksheetIndex = 1;
                dataSourceForCategories.columnIndex = 1;
                dataSourceForCategories.rowIndex = 2;
                chart.dataSourceForCategories = dataSourceForCategories;
                
                const series1 = new model.OneValueSeries();
                const dataSourceForSeriesName1 = new model.Workbook();
                dataSourceForSeriesName1.worksheetIndex = 1;
                dataSourceForSeriesName1.columnIndex = 2;
                dataSourceForSeriesName1.rowIndex = 1;
                series1.dataSourceForSeriesName = dataSourceForSeriesName1;
                series1.name = "Series1";
                
                const dataSourceForValues1 = new model.Workbook();
                dataSourceForValues1.worksheetIndex = 1;
                dataSourceForValues1.columnIndex = 2;
                dataSourceForValues1.rowIndex = 2;
                series1.dataSourceForValues = dataSourceForValues1;
                series1.dataPoints = [{value: 40}, {value: 50}, {value: 70}];
                
                const series2 = new model.OneValueSeries();
                const dataSourceForSeriesName2 = new model.Workbook();
                dataSourceForSeriesName2.worksheetIndex = 1;
                dataSourceForSeriesName2.columnIndex = 3;
                dataSourceForSeriesName2.rowIndex = 1;
                series2.dataSourceForSeriesName = dataSourceForSeriesName2;
                series2.name = "Series2";

                const dataSourceForValues2 = new model.Workbook();
                dataSourceForValues2.worksheetIndex = 1;
                dataSourceForValues2.columnIndex = 3;
                dataSourceForValues2.rowIndex = 2;
                series2.dataSourceForValues = dataSourceForValues2;
                series2.dataPoints = [{value: 55}, {value: 35}, {value: 90}];
                
                chart.series = [series1, series2];
                chart.categories = [{value: "Category1"}, {value: "Category2"}, {value: "Category3"}];
                return api.createShape(fileName, 3, chart, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(2, (result.body as model.Chart).series.length);
                    assert.equal(3, (result.body as model.Chart).categories.length);
                });
            });
        });
    });

    it("create chart literals", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.ClusteredColumn;
                chart.width = 400;
                chart.height = 300;
                
                const series1 = new model.OneValueSeries();
                series1.dataSourceForSeriesName = new model.Literals();
                series1.name = "Series1";
                series1.dataSourceForValues = new model.Literals();
                series1.dataPoints = [{value: 40}, {value: 50}, {value: 70}];

                const series2 = new model.OneValueSeries();
                series2.dataSourceForSeriesName = new model.Literals();
                series2.name = "Series2";
                series2.dataSourceForValues = new model.Literals();
                series2.dataPoints = [{value: 55}, {value: 35}, {value: 90}];

                chart.series = [series1, series2];
                chart.dataSourceForCategories = new model.Literals();
                chart.categories = [{value: "Category1"}, {value: "Category2"}, {value: "Category3"}];
                return api.createShape(fileName, 3, chart, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(2, (result.body as model.Chart).series.length);
                    assert.equal(3, (result.body as model.Chart).categories.length);
                });
            });
        });
    });

    it("update", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.ClusteredColumn;
                chart.width = 400;
                chart.height = 300;
                const series1 = new model.OneValueSeries();
                series1.name = "Series1";
                series1.dataPoints = [{value: 40}, {value: 50}, {value: 70}];
                const series2 = new model.OneValueSeries();
                series2.name = "Series2";
                series2.dataPoints = [{value: 55}, {value: 35}, {value: 90}];
                chart.series = [series1, series2];
                chart.categories = [{value: "Category1"}, {value: "Category2"}, {value: "Category3"}];
                return api.updateShape(fileName, 3, 1, chart, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(2, (result.body as model.Chart).series.length);
                    assert.equal(3, (result.body as model.Chart).categories.length);
                });
            });
        });
    });

    it("series create", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const series = new model.OneValueSeries();
                series.name = "Series3";
                series.dataPoints = [{value: 40}, {value: 50}, {value: 14}, {value: 70}];
                return api.createChartSeries(fileName, 3, 1, series, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(4, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                });
            });
        });
    });

    it("series update", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const series = new model.OneValueSeries();
                series.name = "Series3";
                series.dataPoints = [{value: 40}, {value: 50}, {value: 14}, {value: 70}];
                return api.updateChartSeries(fileName, 3, 1, 2, series, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                });
            });
        });
    });

    it("series delete", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteChartSeries(fileName, 3, 1, 2, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(2, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                });
            });
        });
    });

    it("category create", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const category = new model.ChartCategory();
                category.value = "NewCategory";
                category.dataPoints = [{value: 40}, {value: 50}, {value: 14}];
                return api.createChartCategory(fileName, 3, 1, category, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(5, (result.body as model.Chart).categories.length);
                    assert.equal(5, ((result.body as model.Chart).series[0] as model.OneValueSeries).dataPoints.length);
                    assert.equal(
                        category.dataPoints[0].value, ((result.body as model.Chart).series[0] as model.OneValueSeries).dataPoints[4].value);
                });
            });
        });
    });

    it("category update", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const category = new model.ChartCategory();
                category.value = "NewCategory";
                category.dataPoints = [{value: 40}, {value: 50}, {value: 14}];
                return api.updateChartCategory(fileName, 3, 1, 2, category, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                    assert.equal(4, ((result.body as model.Chart).series[0] as model.OneValueSeries).dataPoints.length);
                    assert.equal(
                        category.dataPoints[0].value, ((result.body as model.Chart).series[0] as model.OneValueSeries).dataPoints[1].value);
                });
            });
        });
    });

    it("category delete", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteChartCategory(fileName, 3, 1, 2, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(3, (result.body as model.Chart).categories.length);
                    assert.equal(3, ((result.body as model.Chart).series[0] as model.OneValueSeries).dataPoints.length);
                });
            });
        });
    });

    it("data point create", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dataPoint = new model.OneValueChartDataPoint();
                dataPoint.value = 40;
                return api.createChartDataPoint(fileName, 3, 1, 2, dataPoint, "password", folderName)
                    //Must throw ApiException because adding data points only works with Scatter & Bubble charts.
                    .then(() => assert.fail("Must have failed"))
                    .catch((err) => {
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("data point update", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const dataPoint = new model.OneValueChartDataPoint();
                dataPoint.value = 40;
                return api.updateChartDataPoint(fileName, 3, 1, 2, 2, dataPoint, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                    assert.equal(4, ((result.body as model.Chart).series[1] as model.OneValueSeries).dataPoints.length);
                    assert.equal(dataPoint.value, ((result.body as model.Chart).series[1] as model.OneValueSeries).dataPoints[1].value);
                });
            });
        });
    });

    it("data point delete", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                return api.deleteChartDataPoint(fileName, 3, 1, 2, 2, "password", folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                    assert(((result.body as model.Chart).series[1] as model.OneValueSeries).dataPoints[1] == null);
                });
            });
        });
    });

    it("sunburst", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.Sunburst;
                chart.width = 400;
                chart.height = 300;
                const series1 = new model.OneValueSeries();
                series1.name = "Series1";
                series1.dataPoints = [{value: 40}, {value: 50}, {value: 70}, {value: 60}];
                chart.series = [series1];
                const category1 = new model.ChartCategory();
                category1.value = "Leaf1";
                category1.parentCategories = ["Branch1", "Stem1"];
                const category2 = new model.ChartCategory();
                category2.value = "Leaf2";
                category2.parentCategories = ["Branch1", "Stem1"];
                const category3 = new model.ChartCategory();
                category3.value = "Branch2";
                category3.parentCategories = ["Stem1"];
                const category4 = new model.ChartCategory();
                category4.value = "Stem2";
                chart.categories = [category1, category2, category3, category4];
                return api.createShape(fileName, 3, chart, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(1, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                });
            });
        });
    });

    it("multiLevelCategoryAxis", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const chart = new model.Chart();
                chart.x = 100;
                chart.y = 100;
                chart.width = 500;
                chart.height = 400;
                chart.chartType = model.Chart.ChartTypeEnum.ClusteredColumn;

                const series = new model.OneValueSeries();
                series.type = model.Series.TypeEnum.ClusteredColumn;
                series.dataPoints = [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}];

                chart.series = [series];

                const category1 = new model.ChartCategory();
                category1.value = "Category1";
                category1.parentCategories = ["Sub-category 1", "Root 1"];

                const category2 = new model.ChartCategory();
                category2.value = "Category2";

                const category3 = new model.ChartCategory();
                category3.value = "Category3";
                category3.parentCategories = ["Sub-category 2"];

                const category4 = new model.ChartCategory();
                category4.value = "Category4";

                const category5 = new model.ChartCategory();
                category5.value = "Category5";
                category5.parentCategories = ["Sub-category 3", "Root 2"];

                const category6 = new model.ChartCategory();
                category6.value = "Category6";

                const category7 = new model.ChartCategory();
                category7.value = "Category7";
                category7.parentCategories = ["Sub-category 4"];

                const category8 = new model.ChartCategory();
                category8.value = "Category8";

                chart.categories = [category1, category2, category3, category4, category5, category6, category7, category8];

                return api.createShape(fileName, 3, chart, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(1, (result.body as model.Chart).series.length);
                    assert.equal(8, (result.body as model.Chart).categories.length);
                    assert.equal(2, (result.body as model.Chart).categories[0].parentCategories.length);
                });
            });
        });
    });

    it("hideChartLegend", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();

            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            let result = await api.getShape(fileName, 3, 1, "password", folderName)
            assert.equal(200, result.response.statusCode);

            let chart = result.body as model.Chart;
            chart.legend.hasLegend = false;

            result = await api.updateShape(fileName, 3, 1, chart, "password", folderName)
            assert.equal(200, result.response.statusCode);
            chart = result.body as model.Chart;
            assert.equal(chart.legend.hasLegend, false);
        });
    });

    it("chartGridLinesFormat", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();

            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const axes = new model.Axes();
            axes.horizontalAxis = new model.Axis();
            axes.horizontalAxis.majorGridLinesFormat = new model.ChartLinesFormat();
            axes.horizontalAxis.majorGridLinesFormat.lineFormat = new model.LineFormat();
            axes.horizontalAxis.majorGridLinesFormat.lineFormat.fillFormat = new model.NoFill();

            axes.horizontalAxis.minorGridLinesFormat = new model.ChartLinesFormat();
            axes.horizontalAxis.minorGridLinesFormat.lineFormat = new model.LineFormat();
            const solidFillFormat = new model.SolidFill();
            solidFillFormat.color = "Black";
            axes.horizontalAxis.minorGridLinesFormat.lineFormat.fillFormat = solidFillFormat;

            axes.verticalAxis = new model.Axis();
            axes.verticalAxis.majorGridLinesFormat = new model.ChartLinesFormat();
            axes.verticalAxis.majorGridLinesFormat.lineFormat = new model.LineFormat();
            const gradientFillFormat = new model.GradientFill();
            const gradientStop1 = new model.GradientFillStop();
            gradientStop1.color = "White";
            gradientStop1.position = 0;
            const gradientStop2 = new model.GradientFillStop();
            gradientStop2.color = "Black";
            gradientStop2.position = 1;
            gradientFillFormat.stops = [gradientStop1, gradientStop2];
            axes.verticalAxis.majorGridLinesFormat.lineFormat.fillFormat = gradientFillFormat;

            axes.verticalAxis.minorGridLinesFormat = new model.ChartLinesFormat();
            axes.verticalAxis.minorGridLinesFormat.lineFormat = new model.LineFormat();
            axes.verticalAxis.minorGridLinesFormat.lineFormat.fillFormat = new model.NoFill();

            let result = await api.getShape(fileName, 3, 1, "password", folderName)
            assert.equal(200, result.response.statusCode);

            let chart = result.body as model.Chart;
            chart.axes = axes;

            result = await api.updateShape(fileName, 3, 1, chart, "password", folderName)
            assert.equal(200, result.response.statusCode);
            chart = result.body as model.Chart;
            assert.equal("NoFill", chart.axes.horizontalAxis.majorGridLinesFormat.lineFormat.fillFormat.type);
            assert.equal("Solid", chart.axes.horizontalAxis.minorGridLinesFormat.lineFormat.fillFormat.type);
            assert.equal("Gradient", chart.axes.verticalAxis.majorGridLinesFormat.lineFormat.fillFormat.type);
            assert.equal("NoFill", chart.axes.verticalAxis.minorGridLinesFormat.lineFormat.fillFormat.type);
        });
    });

    it("chartSeriesGroups", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();

            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            let result = await api.getShape(fileName, 3, 1, "password", folderName)
            assert.equal(200, result.response.statusCode);

            let chart = result.body as model.Chart;
            assert.equal(1, chart.seriesGroups.length);
            let seriesGroup = chart.seriesGroups[0];
            seriesGroup.overlap = 10;
       
            let newResult = await api.setChartSeriesGroup(fileName, 3, 1, 1, seriesGroup,
                "password", folderName);
            chart = newResult.body as model.Chart;
            assert.equal(10, chart.seriesGroups[0].overlap);
        });
    });

    it("set chart legend", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const fillFormat = new SolidFill();
            fillFormat.color = "#77CEF9";
            const legend = new Legend();
            legend.overlay = true;
            legend.fillFormat = fillFormat;
            let result = await api.setChartLegend(fileName, 3, 1, legend, "password", folderName);
            assert.equal("Solid" ,result.body.fillFormat.type);
        });
    });

    it("set chart axis", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const axis = new Axis();
            axis.hasTitle = true;
            axis.isAutomaticMaxValue = false;
            axis.maxValue = 10;
            
            let result = await api.setChartAxis(fileName, 3, 1, AxisType.VerticalAxis, axis, "password", folderName);
            assert.equal(true ,result.body.hasTitle);
            assert.equal(false ,result.body.isAutomaticMaxValue);
            assert.equal(10 ,result.body.maxValue);
        });
    });

    it("set chart wall", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);
            
            const fillFormat = new SolidFill();
            fillFormat.color = "#77CEF9";
            const wall = new ChartWall();
            wall.fillFormat = fillFormat;

            let result = await api.setChartWall(fileName, 8, 2, ChartWallType.BackWall, wall, "password", folderName);
            assert.equal("Solid" ,result.body.fillFormat.type);
        });
    });

    it("update data potin format", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const fillFormat = new SolidFill();
            fillFormat.color = "#77CEF9";
            const lineFormat = new LineFormat();
            const lineFillFormat = new SolidFill();
            fillFormat.color = "#77CEF9";
            lineFormat.fillFormat = new SolidFill();
            lineFormat.fillFormat = lineFillFormat
            const effectFormat = new EffectFormat();
            effectFormat.blur = new BlurEffect();
            effectFormat.blur.grow = true;
            effectFormat.blur.radius = 5;
            
            const dto = new OneValueChartDataPoint();
            dto.value = 40;
            dto.fillFormat = fillFormat;
            dto.lineFormat = lineFormat;
            dto.effectFormat = effectFormat;
            
            const slideIndex = 8;
            const shapeIndex = 2;
            const seriesIndex = 2;
            const dataPointIndex = 2;

            let result = await api.updateChartDataPoint(fileName, slideIndex, shapeIndex, seriesIndex, dataPointIndex, dto, "password", folderName);
            var series = Object.assign(new OneValueSeries(), result.body.series[seriesIndex - 1]);
            const dataPoint =  series.dataPoints[dataPointIndex -1];
            assert.equal("Solid" ,dataPoint.fillFormat.type);
            assert.equal("Solid" ,dataPoint.lineFormat.fillFormat.type);
            assert.notEqual(null, dataPoint.effectFormat.blur);
        });
    });

    it("chart workbook formulas", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            return api.copyFile("TempTests/" + fileName, folderName + "/" + fileName).then(() => {
                const chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.ClusteredColumn;
                chart.width = 400;
                chart.height = 300;

                const dataSourceForCategories = new model.Workbook();
                dataSourceForCategories.worksheetIndex = 1;
                dataSourceForCategories.columnIndex = 1;
                dataSourceForCategories.rowIndex = 2;
                chart.dataSourceForCategories = dataSourceForCategories;
                chart.categories = [{value: "Category1"}, {value: "Category2"}, {value: "Category3"}];
                
                const series1 = new model.OneValueSeries();
                const dataSourceForSeriesName1 = new model.Workbook();
                dataSourceForSeriesName1.worksheetIndex = 1;
                dataSourceForSeriesName1.columnIndex = 2;
                dataSourceForSeriesName1.rowIndex = 1;
                series1.dataSourceForSeriesName = dataSourceForSeriesName1;
                series1.name = "Series1";

                const dataSourceForValues1 = new model.Workbook();
                dataSourceForValues1.worksheetIndex = 1;
                dataSourceForValues1.columnIndex = 2;
                dataSourceForValues1.rowIndex = 2;
                series1.dataSourceForValues = dataSourceForValues1;
                series1.dataPoints = [{ value: 40 }, { value: 50 }, { type: model.DataPoint.TypeEnum.OneValue, valueFormula: "SUM(B2:B3)" }];

                chart.series = [series1];
                
                return api.createShape(fileName, 3, chart, null, null, "password", folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    const series = ((result.body as model.Chart).series[0] as model.OneValueSeries);
                    assert.equal(90, series.dataPoints[2].value);
                });
            });
        });
    });
});
