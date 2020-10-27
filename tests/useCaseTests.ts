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
import * as sdkApi from "../sdk/api";
import * as model from "../sdk/model";
import * as requests from "../sdk/requests";
import { TestInitializer } from "./testInitializer";

describe("Convert tests", () => {
    it("post from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            const postRequest = new requests.PostSlidesConvertRequest();
            postRequest.document = fs.createReadStream("TestData/test.ppt");
            postRequest.password = "password";
            postRequest.format = 'pdf';
            return api.postSlidesConvert(postRequest).then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("put from request", () => {
        return TestInitializer.runTest(() => {
            const outPath = "TestData/test.pdf";
            const api = TestInitializer.getApi();
            const putRequest = new requests.PutSlidesConvertRequest();
            putRequest.document = fs.createReadStream("TestData/test.ppt");
            putRequest.password = "password";
            putRequest.format = 'pdf';
            putRequest.outPath = outPath;
            return api.putSlidesConvert(putRequest).then((putResult) => {
                assert.equal(200, putResult.response.statusCode);
                const existsRequest = new requests.ObjectExistsRequest();
                existsRequest.path = outPath;
                return api.objectExists(existsRequest).then((existsResult) => {
                    assert.equal(200, existsResult.response.statusCode);
                    assert((existsResult.body as model.ObjectExist).exists);
                });
            });
        });
    });

    it("post from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.ppt";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostSlidesSaveAsRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.format = 'pdf';
                return api.postSlidesSaveAs(postRequest).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("put from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.ppt";
            const outPath = "TestData/test.pdf";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSlidesSaveAsRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                putRequest.format = 'pdf';
                putRequest.outPath = outPath;
                return api.putSlidesSaveAs(putRequest).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    const existsRequest = new requests.ObjectExistsRequest();
                    existsRequest.path = outPath;
                    return api.objectExists(existsRequest).then((existsResult) => {
                        assert.equal(200, existsResult.response.statusCode);
                        assert((existsResult.body as model.ObjectExist).exists);
                    });
                });
            });
        });
    });

    it("with options", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.ppt";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostSlidesSaveAsRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.format = 'pdf';
                return api.postSlidesSaveAs(postRequest).then((result1) => {
                    assert.equal(200, result1.response.statusCode);
                    const options = new model.PdfExportOptions();
                    options.textCompression = model.PdfExportOptions.TextCompressionEnum.Flate;
                    postRequest.options = options;
                    return api.postSlidesSaveAs(postRequest).then((result2) => {
                        assert.equal(200, result2.response.statusCode);
                        assert.notEqual(result1.body.length, result2.body.length);
                    });
                });
            });
        });
    });                                             
});

describe("NotesSlide tests", () => {
    it("get from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.ppt";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetNotesSlideRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = "password";
                getRequest.slideIndex = 1;
                return api.getNotesSlide(getRequest).then((result) => {
                    assert((result.body as model.NotesSlide) != null);
                });
            });
        });
    });

    it("exists from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.ppt";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetNotesSlideExistsRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = "password";
                getRequest.slideIndex = 1;
                return api.getNotesSlideExists(getRequest).then((result) => {
                    assert.equal(true, (result.body as model.EntityExists).exists);
                });
            });
        });
    });

    it("download from storage", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.ppt";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetNotesSlideWithFormatRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = "password";
                getRequest.slideIndex = 1;
                getRequest.format = 'png';
                return api.getNotesSlideWithFormat(getRequest).then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("get from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            const request = new requests.PostGetNotesSlideRequest();
            request.document = fs.createReadStream("TestData/test.ppt");
            request.password = "password";
            request.slideIndex = 1;
            return api.postGetNotesSlide(request).then((result) => {
                assert((result.body as model.NotesSlide) != null);
            });
        });
    });

    it("exists from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            const request = new requests.PostGetNotesSlideExistsRequest();
            request.document = fs.createReadStream("TestData/test.ppt");
            request.password = "password";
            request.slideIndex = 1;
            return api.postGetNotesSlideExists(request).then((result) => {
                let res = "" + result.body;
                assert.equal(true, JSON.parse(res)["exists"]);
            });
        });
    });

    it("download from request", () => {
        return TestInitializer.runTest(() => {
            const api = TestInitializer.getApi();
            const request = new requests.PostGetNotesSlideWithFormatRequest();
            request.document = fs.createReadStream("TestData/test.ppt");
            request.password = "password";
            request.slideIndex = 1;
            request.format = 'png';
            return api.postGetNotesSlideWithFormat(request).then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });
});

describe("Chart tests", () => {
    it("get", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "ChartTest.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetSlideShapeRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = "password";
                getRequest.slideIndex = 1;
                getRequest.shapeIndex = 2;
                return api.getSlideShape(getRequest).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(3, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                    assert((result.body as model.NotesSlide) != null);
                });
            });
        });
    });

    it("create", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "ChartTest.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.ClusteredColumn;
                chart.width = 400;
                chart.height = 300;
                const series1 = new model.OneValueSeries();
                series1.name = "Series1";
                series1.dataPoints = [{ value: 40 }, { value: 50 }, { value: 70 }];
                const series2 = new model.OneValueSeries();
                series2.name = "Series2";
                series2.dataPoints = [{ value: 55 }, { value: 35 }, { value: 90 }];
                chart.series = [ series1, series2 ];
                chart.categories = [{ value: "Category1" }, { value: "Category2" }, { value: "Category3" }];
                postRequest.dto = chart;
                return api.postAddNewShape(postRequest).then((result) => {
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
            const fileName = "ChartTest.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSlideShapeInfoRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                putRequest.slideIndex = 1;
                putRequest.shapeIndex = 2;
                const chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.ClusteredColumn;
                chart.width = 400;
                chart.height = 300;
                const series1 = new model.OneValueSeries();
                series1.name = "Series1";
                series1.dataPoints = [{ value: 40 }, { value: 50 }, { value: 70 }];
                const series2 = new model.OneValueSeries();
                series2.name = "Series2";
                series2.dataPoints = [{ value: 55 }, { value: 35 }, { value: 90 }];
                chart.series = [ series1, series2 ];
                chart.categories = [{ value: "Category1" }, { value: "Category2" }, { value: "Category3" }];
                putRequest.dto = chart;
                return api.putSlideShapeInfo(putRequest).then((result) => {
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
            const fileName = "ChartTest.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostChartSeriesRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                postRequest.shapeIndex = 2;
                const series = new model.OneValueSeries();
                series.name = "Series3";
                series.dataPoints = [{ value: 40 }, { value: 50 }, { value: 14 }, { value: 70 }];
                postRequest.series = series;
                return api.postChartSeries(postRequest).then((result) => {
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
            const fileName = "ChartTest.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutChartSeriesRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                putRequest.slideIndex = 1;
                putRequest.shapeIndex = 2;
                putRequest.seriesIndex = 2;
                const series = new model.OneValueSeries();
                series.name = "Series3";
                series.dataPoints = [{ value: 40 }, { value: 50 }, { value: 14 }, { value: 70 }];
                putRequest.series = series;
                return api.putChartSeries(putRequest).then((result) => {
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
            const fileName = "ChartTest.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const deleteRequest = new requests.DeleteChartSeriesRequest();
                deleteRequest.name = fileName;
                deleteRequest.folder = folderName;
                deleteRequest.password = "password";
                deleteRequest.slideIndex = 1;
                deleteRequest.shapeIndex = 2;
                deleteRequest.seriesIndex = 2;
                return api.deleteChartSeries(deleteRequest).then((result) => {
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
            const fileName = "ChartTest.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostChartCategoryRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                postRequest.shapeIndex = 2;
                const category = new model.ChartCategory();
                category.value = "NewCategory";
                category.dataPoints = [{ value: 40 }, { value: 50 }, { value: 14 }];
                postRequest.category = category;
                return api.postChartCategory(postRequest).then((result) => {
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
            const fileName = "ChartTest.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutChartCategoryRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                putRequest.slideIndex = 1;
                putRequest.shapeIndex = 2;
                putRequest.categoryIndex = 2;
                const category = new model.ChartCategory();
                category.value = "NewCategory";
                category.dataPoints = [{ value: 40 }, { value: 50 }, { value: 14 }];
                putRequest.category = category;
                return api.putChartCategory(putRequest).then((result) => {
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
            const fileName = "ChartTest.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const deleteRequest = new requests.DeleteChartCategoryRequest();
                deleteRequest.name = fileName;
                deleteRequest.folder = folderName;
                deleteRequest.password = "password";
                deleteRequest.slideIndex = 1;
                deleteRequest.shapeIndex = 2;
                deleteRequest.categoryIndex = 2;
                return api.deleteChartCategory(deleteRequest).then((result) => {
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
            const fileName = "ChartTest.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostChartDataPointRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                postRequest.shapeIndex = 2;
                postRequest.seriesIndex = 2;
                const dataPoint = new model.OneValueChartDataPoint();
                dataPoint.value = 40;
                postRequest.dataPoint = dataPoint;
                return api.postChartDataPoint(postRequest)
                    .then(() => {
                        assert.fail('Must have failed');
                    }).catch((err) => {
                        //Must throw ApiException because adding data points only works with Scatter & Bubble charts.
                        assert.equal(400, err.code);
                    });
            });
        });
    });

    it("data point update", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "ChartTest.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutChartDataPointRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                putRequest.slideIndex = 1;
                putRequest.shapeIndex = 2;
                putRequest.seriesIndex = 2;
                putRequest.pointIndex = 2;
                const dataPoint = new model.OneValueChartDataPoint();
                dataPoint.value = 40;
                putRequest.dataPoint = dataPoint;
                return api.putChartDataPoint(putRequest).then((result) => {
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
            const fileName = "ChartTest.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const deleteRequest = new requests.DeleteChartDataPointRequest();
                deleteRequest.name = fileName;
                deleteRequest.folder = folderName;
                deleteRequest.password = "password";
                deleteRequest.slideIndex = 1;
                deleteRequest.shapeIndex = 2;
                deleteRequest.seriesIndex = 2;
                deleteRequest.pointIndex = 2;
                return api.deleteChartDataPoint(deleteRequest).then((result) => {
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
            const fileName = "ChartTest.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.Sunburst;
                chart.width = 400;
                chart.height = 300;
                const series1 = new model.OneValueSeries();
                series1.name = "Series1";
                series1.dataPoints = [{ value: 40 }, { value: 50 }, { value: 70 }, { value: 60 }];
                chart.series = [ series1 ];
                const category1 = new model.ChartCategory();
                category1.value = "Leaf1";
                category1.level = 3;
                category1.parentCategories = [ "Branch1", "Stem1" ];
                const category2 = new model.ChartCategory();
                category2.value = "Leaf2";
                category2.level = 3;
                category2.parentCategories = [ "Branch1", "Stem1" ];
                const category3 = new model.ChartCategory();
                category3.value = "Branch2";
                category3.level = 2;
                category3.parentCategories = [ "Stem1" ];
                const category4 = new model.ChartCategory();
                category4.value = "Stem2";
                category4.level = 1;
                chart.categories = [ category1, category2, category3, category4 ];
                postRequest.dto = chart;
                return api.postAddNewShape(postRequest).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(1, (result.body as model.Chart).series.length);
                    assert.equal(4, (result.body as model.Chart).categories.length);
                });
            });
        });
    });
});

describe("HeaderFooter tests", () => {
    it("all slides", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.ppt";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSlidesHeaderFooterRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                const dto = new model.HeaderFooter();
                dto.isFooterVisible = true;
                dto.footerText = "footer";
                dto.isDateTimeVisible = false;
                putRequest.dto = dto;
                return api.putSlidesHeaderFooter(putRequest).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    const getRequest = new requests.GetSlideHeaderFooterRequest();
                    getRequest.name = fileName;
                    getRequest.folder = folderName;
                    getRequest.password = "password";
                    getRequest.slideIndex = 1;
                    return api.getSlideHeaderFooter(getRequest).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        assert.equal(true, (result.body as model.HeaderFooter).isFooterVisible);
                        assert.equal(false, (result.body as model.HeaderFooter).isDateTimeVisible);
                    });
                });
            });
        });
    });

    it("slide", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.ppt";
            const password = "password";
            const slideIndex = 1;
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSlideHeaderFooterRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = password;
                putRequest.slideIndex = slideIndex;
                const dto = new model.HeaderFooter();
                dto.isFooterVisible = true;
                dto.footerText = "footer";
                dto.isDateTimeVisible = false;
                putRequest.dto = dto;
                return api.putSlideHeaderFooter(putRequest).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(true, (putResult.body as model.HeaderFooter).isFooterVisible);
                    assert.equal(false, (putResult.body as model.HeaderFooter).isDateTimeVisible);
                    const getRequest = new requests.GetSlideHeaderFooterRequest();
                    getRequest.name = fileName;
                    getRequest.folder = folderName;
                    getRequest.password = password;
                    getRequest.slideIndex = slideIndex;
                    return api.getSlideHeaderFooter(getRequest).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        assert.equal(true, (result.body as model.HeaderFooter).isFooterVisible);
                        assert.equal(false, (result.body as model.HeaderFooter).isDateTimeVisible);
                    });
                });
            });
        });
    });

    it("notes slide", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.ppt";
            const password = "password";
            const slideIndex = 1;
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutNotesSlideHeaderFooterRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = password;
                putRequest.slideIndex = slideIndex;
                const dto = new model.NotesSlideHeaderFooter();
                dto.isHeaderVisible = true;
                dto.footerText = "footer";
                dto.isDateTimeVisible = false;
                putRequest.dto = dto;
                return api.putNotesSlideHeaderFooter(putRequest).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(true, (putResult.body as model.NotesSlideHeaderFooter).isHeaderVisible);
                    assert.equal(false, (putResult.body as model.NotesSlideHeaderFooter).isDateTimeVisible);
                    const getRequest = new requests.GetNotesSlideHeaderFooterRequest();
                    getRequest.name = fileName;
                    getRequest.folder = folderName;
                    getRequest.password = password;
                    getRequest.slideIndex = slideIndex;
                    return api.getNotesSlideHeaderFooter(getRequest).then((result) => {
                        assert.equal(200, result.response.statusCode);
                        assert.equal(true, (result.body as model.NotesSlideHeaderFooter).isHeaderVisible);
                        assert.equal(false, (result.body as model.NotesSlideHeaderFooter).isDateTimeVisible);
                    });
                });
            });
        });
    });
});

describe("Section tests", () => {
    it("get", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const getRequest = new requests.GetSectionsRequest();
                getRequest.name = fileName;
                getRequest.folder = folderName;
                getRequest.password = "password";
                return api.getSections(getRequest).then((getResult) => {
                    assert.equal(200, getResult.response.statusCode);
                    assert.equal(3, (getResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("put", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSectionsRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                const dto = new model.Sections();
                const section1 = new model.Section();
                section1.name = "Section1";
                section1.firstSlideIndex = 1;
                const section2 = new model.Section();
                section2.name = "Section2";
                section2.firstSlideIndex = 3;
                dto.sectionList = [ section1, section2 ];
                putRequest.sections = dto;
                return api.putSections(putRequest).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(dto.sectionList.length, (putResult.body as model.Sections).sectionList.length);
                    assert.equal(
                        section2.firstSlideIndex - section1.firstSlideIndex, (putResult.body as model.Sections).sectionList[0].slideList.length);
                });
            });
        });
    });

    it("post", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostSectionRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.sectionName = "NewSection";
                postRequest.slideIndex = 4;
                return api.postSection(postRequest).then((postResult) => {
                    assert.equal(201, postResult.response.statusCode);
                    assert.equal(4, (postResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("put", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const putRequest = new requests.PutSectionRequest();
                putRequest.name = fileName;
                putRequest.folder = folderName;
                putRequest.password = "password";
                putRequest.sectionIndex = 2;
                putRequest.sectionName = "UpdatedSection";
                return api.putSection(putRequest).then((putResult) => {
                    assert.equal(200, putResult.response.statusCode);
                    assert.equal(3, (putResult.body as model.Sections).sectionList.length);
                    assert.equal(putRequest.sectionName, (putResult.body as model.Sections).sectionList[1].name);
                });
            });
        });
    });

    it("move", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const postRequest = new requests.PostSectionMoveRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.sectionIndex = 1;
                postRequest.newPosition = 2;
                return api.postSectionMove(postRequest).then((postResult) => {
                    assert.equal(200, postResult.response.statusCode);
                    assert.equal(3, (postResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("clear", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const deleteRequest = new requests.DeleteSectionsRequest();
                deleteRequest.name = fileName;
                deleteRequest.folder = folderName;
                deleteRequest.password = "password";
                return api.deleteSections(deleteRequest).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert.equal(0, (deleteResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("delete many", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const deleteRequest = new requests.DeleteSectionsRequest();
                deleteRequest.name = fileName;
                deleteRequest.folder = folderName;
                deleteRequest.password = "password";
                deleteRequest.sections = [ 2, 3 ];
                return api.deleteSections(deleteRequest).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert.equal(1, (deleteResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });

    it("delete", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "Sections.pptx";
            const api = TestInitializer.getApi();
            const copyRequest = new requests.CopyFileRequest();
            copyRequest.srcPath = "TempTests/" + fileName;
            copyRequest.destPath = folderName + "/" + fileName;
            return api.copyFile(copyRequest).then(() => {
                const deleteRequest = new requests.DeleteSectionRequest();
                deleteRequest.name = fileName;
                deleteRequest.folder = folderName;
                deleteRequest.password = "password";
                deleteRequest.sectionIndex = 2;
                return api.deleteSection(deleteRequest).then((deleteResult) => {
                    assert.equal(200, deleteResult.response.statusCode);
                    assert.equal(2, (deleteResult.body as model.Sections).sectionList.length);
                });
            });
        });
    });
});

describe("Auth tests", () => {
    it("good auth", () => {
        return TestInitializer.runTest(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            return api.getSlidesApiInfo().then((result) => {
                assert.equal(200, result.response.statusCode);
            });
        });
    });

    it("bad auth", () => {
        return TestInitializer.runTest(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            api.configuration.appSid = "invalid";
            return api.getSlidesApiInfo().then(() => {
                assert.fail('Must have failed');
            }).catch((err) => {
                assert.equal(401, err.code);
            });
        });
    });

    it("good token", () => {
        return TestInitializer.runTest(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            return api.getSlidesApiInfo().then(() => {
                const api2 = new sdkApi.SlidesApi("invalid", config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.Debug);
                api2.configuration.accessToken = api.configuration.accessToken;
                return api2.getSlidesApiInfo().then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });

    it("bad token", () => {
        return TestInitializer.runTest(() => {
            const config = require("../testConfig.json");
            const api = new sdkApi.SlidesApi(config.AppSid, config.AppKey, config.BaseUrl, config.AuthBaseUrl, config.Debug);
            return api.getSlidesApiInfo().then(() => {
                api.configuration.accessToken = "invalid";
                return api.getSlidesApiInfo().then((result) => {
                    assert.equal(200, result.response.statusCode);
                });
            });
        });
    });
});

describe("Additional tests", () => {
    it("multiple files upload", () => {
        const request = new requests.PostSlidesPipelineRequest();
        let file1 = new model.RequestInputFile();
        file1.index = 0;
        let file2 = new model.RequestInputFile();
        file2.index = 1;
        let task = new model.Save();
        task.format = model.Save.FormatEnum.Pptx;
        task.output = new model.ResponseOutputFile();
        request.pipeline = { input: { templateData: file1, template: file2 }, tasks: [ task ] };
        const fs = require('fs');
        request.files = [
            fs.createReadStream("TestData/TemplatingCVDataWithBase64.xml"),
            fs.createReadStream("TestData/TemplateCV.pptx")
        ];
        
        return TestInitializer.getApi().postSlidesPipeline(request).then((result) => {
            assert.equal(200, result.response.statusCode);
        });
    });

    it("shape type", () => {
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.ppt";
            const api = TestInitializer.getApi();
            const request = new requests.CopyFileRequest();
            request.srcPath = "TempTests/" + fileName;
            request.destPath = folderName + "/" + fileName;
            return api.copyFile(request).then(() => {
                const shapeRequest = new requests.GetSlideShapeRequest();
                shapeRequest.name = fileName;
                shapeRequest.folder = folderName;
                shapeRequest.password = "password";
                shapeRequest.slideIndex = 1;
                shapeRequest.shapeIndex = 1;
                return api.getSlideShape(shapeRequest).then((result) => {
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
        return TestInitializer.runTest(() => {
            const folderName = "TempSlidesSDK";
            const fileName = "placeholders.pptx";
            const min1  = 44.3;
            const min2 = 12;
            const max1 = 104.3;
            const max2 = 87;
            const api = TestInitializer.getApi();
            const request = new requests.CopyFileRequest();
            request.srcPath = "TempTests/" + fileName;
            request.destPath = folderName + "/" + fileName;
            return api.copyFile(request).then(() => {
                const postRequest = new requests.PostAddNewShapeRequest();
                postRequest.name = fileName;
                postRequest.folder = folderName;
                postRequest.password = "password";
                postRequest.slideIndex = 1;
                const chart = new model.Chart();
                chart.chartType = model.Chart.ChartTypeEnum.Line;
                chart.width = 400;
                chart.height = 300;
                chart.title = { hasTitle: true, text: "MyChart" };
                const series = new model.OneValueSeries();
                series.type = model.Series.TypeEnum.ClusteredColumn;
                series.dataPointType = model.OneValueSeries.DataPointTypeEnum.OneValue;
                series.name = "Series1";
                series.dataPoints = [{ value: 40}, { value: 50 }];
                chart.series = [series];
                chart.axes = { horizontalAxis: { isAutomaticMinValue: false, minValue: min1, isAutomaticMaxValue: false, maxValue: max1 } };
                postRequest.dto = chart;
                return api.postAddNewShape(postRequest).then(() => {
                    const getRequest = new requests.GetSlideShapeRequest();
                    getRequest.name = fileName;
                    getRequest.folder = folderName;
                    getRequest.password = "password";
                    getRequest.slideIndex = 1;
                    getRequest.shapeIndex = 4;
                    return api.getSlideShape(getRequest).then((result) => {
                        assert.equal(min1, (result.body as model.Chart).axes.horizontalAxis.minValue);
                        assert.equal(max1, (result.body as model.Chart).axes.horizontalAxis.maxValue);
                        const putRequest = new requests.PutSlideShapeInfoRequest();
                        putRequest.name = fileName;
                        putRequest.folder = folderName;
                        putRequest.password = "password";
                        putRequest.slideIndex = 1;
                        putRequest.shapeIndex = 4;
                        putRequest.dto = new model.Chart();
                        (putRequest.dto as model.Chart).axes = { horizontalAxis: { minValue: min2 } };
                        return api.putSlideShapeInfo(putRequest).then(() => {
                            return api.getSlideShape(getRequest).then((result2) => {
                                assert.equal(min2, (result2.body as model.Chart).axes.horizontalAxis.minValue);
                                assert.equal(max1, (result2.body as model.Chart).axes.horizontalAxis.maxValue);
                                (putRequest.dto as model.Chart).axes = { horizontalAxis: { maxValue: max2 } };
                                return api.putSlideShapeInfo(putRequest).then(() => {
                                    return api.getSlideShape(getRequest).then((result3) => {
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
/*unstable test
describe("Tests for timeout configuration parameter", () => {
    it("convert slide to svg", () => {
        return TestInitializer.initialize("postSlideSaveAs", null, null).then(() => {
            const request = new PostSlideSaveAsRequest();
            request.format = "svg";
            request.name = "test.ppt";
            request.folder = "TempSlidesSDK";
            request.password = "password";
            request.slideIndex = 1;
            return TestInitializer.getApi().postSlideSaveAs(request)
                .then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.fail("must have failed because of timeout");
                }).catch((e) => {
                });
        }).catch((err) => assert.fail(err));
    });
});*/
