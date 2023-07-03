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
import {Paragraph, Portion, TableCell, TableCellMergeOptions, TableCellSplitType, TableRow} from "../../sdk/model";
import {TestUtils} from "../testUtils";

var assert = require('assert');

describe("Table tests", () => {
    it("update table cell", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 2;
            let cellIndex = 1;
            let dto = new TableCell();
            dto.text = "Test text";

            const result = await api.updateTableCell(TestUtils.fileName, slideIndex, shapeIndex, rowIndex, cellIndex, dto, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.TableCell).text, dto.text);
        });
    });

    it("create table row", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;

            let cell0 = new TableCell();
            cell0.text = "Cell 1";
            let cell1 = new TableCell();
            cell1.text = "Cell 2";
            let cell2 = new TableCell();
            cell2.text = "Cell 3";
            let cell3 = new TableCell();
            cell3.text = "Cell 4";
            
            let dto = new TableRow();
            dto.minimalHeight = 30;
            dto.cells = [cell0, cell1, cell2, cell3];

            const result = await api.createTableRow(TestUtils.fileName, slideIndex, shapeIndex, dto, null, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.TableRow).cells.length, dto.cells.length);
            assert.equal((result.body as model.TableRow).minimalHeight, dto.minimalHeight);
        });
    });

    it("delete table row", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 2;
            let withAttachedRows = true;

            const result = await api.deleteTableRow(TestUtils.fileName, slideIndex, shapeIndex, rowIndex, withAttachedRows,
                TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Table).rows.length, 2);
        });
    });

    it("update table row", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 1;

            let dto = new TableRow();
            dto.minimalHeight = 30;

            const result = await api.updateTableRow(TestUtils.fileName, slideIndex, shapeIndex, rowIndex, dto, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.TableRow).minimalHeight, dto.minimalHeight);
        });
    });

    it("merge table cells", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let dto = new TableCellMergeOptions()
            dto.firstRowIndex = 1;
            dto.firstCellIndex = 1;
            dto.lastRowIndex = 2;
            dto.lastCellIndex = 2;
            dto.allowSplitting = true;

            const result = await api.mergeTableCells(TestUtils.fileName, slideIndex, shapeIndex, dto, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Table).rows[0].cells[0].colSpan, 2);
            assert.equal((result.body as model.Table).rows[0].cells[0].rowSpan, 2);
        });
    });

    it("split table cells by width", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 1;
            let cellIndex = 1;
            let cellWidth = 10;

            const result = await api.splitTableCell(TestUtils.fileName,
                slideIndex, shapeIndex, rowIndex, cellIndex, TableCellSplitType.SplitByWidth, cellWidth, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Table).rows[0].cells.length, 5);
        });
    });

    it("split table cells by height", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 1;
            let cellIndex = 1;
            let cellHeight = 10;

            const result = await api.splitTableCell(TestUtils.fileName,
                slideIndex, shapeIndex, rowIndex, cellIndex, TableCellSplitType.SplitByHeight, cellHeight, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Table).rows.length, 5);
        });
    });

    it("split table cells by col span", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 3;
            let cellIndex = 1;
            let colSpan = 1;

            const result = await api.splitTableCell(TestUtils.fileName,
                slideIndex, shapeIndex, rowIndex, cellIndex, TableCellSplitType.SplitByColSpan, colSpan, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Table).rows[2].cells[0].colSpan, null);
        });
    });

    it("split table cells by row span", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 2;
            let cellIndex = 3;
            let colSpan = 1;

            const result = await api.splitTableCell(TestUtils.fileName,
                slideIndex, shapeIndex, rowIndex, cellIndex, TableCellSplitType.SplitByRowSpan, colSpan, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Table).rows[1].cells[2].rowSpan, null);
        });
    });

    it("get table cell paragraphs", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 1;
            let cellIndex = 1;

            const result = await api.getTableCellParagraphs(TestUtils.fileName, slideIndex, shapeIndex, rowIndex, cellIndex,
                TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Paragraphs).paragraphLinks.length, 1);
        });
    });

    it("get table cell paragraph", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 1;
            let cellIndex = 1;
            let paragraphIndex = 1;

            const result = await api.getTableCellParagraph(TestUtils.fileName, slideIndex, shapeIndex, rowIndex, cellIndex,
                paragraphIndex, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Paragraph).portionList.length, 2);
        });
    });

    it("create table cell paragraph", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 1;
            let cellIndex = 1;
            
            let portion0 = new Portion();
            portion0.text = "Portion 1";
            let portion1 = new Portion();
            portion1.text = "Portion 2";
            
            let dto = new Paragraph();
            dto.portionList = [portion0, portion1];

            const result = await api.createTableCellParagraph(TestUtils.fileName, slideIndex, shapeIndex, rowIndex, cellIndex,
                dto, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Paragraph).portionList.length, 2);
        });
    });

    it("update table cell paragraph", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 1;
            let cellIndex = 1;
            let paragraphIndex = 1;

            let portion0 = new Portion();
            portion0.text = "Portion 1";
            let portion1 = new Portion();
            portion1.text = "Portion 2";

            let dto = new Paragraph();
            dto.portionList = [portion0, portion1];

            const result = await api.updateTableCellParagraph(TestUtils.fileName, slideIndex, shapeIndex, rowIndex, cellIndex,
                paragraphIndex, dto, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Paragraph).portionList.length, 2);
        });
    });

    it("delete table cell paragraph", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 1;
            let cellIndex = 1;
            let paragraphIndex = 1;

            const result = await api.deleteTableCellParagraph(TestUtils.fileName, slideIndex, shapeIndex, rowIndex, cellIndex,
                paragraphIndex, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Paragraphs).paragraphLinks.length, 0);
        });
    });

    it("get table cell portions", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 1;
            let cellIndex = 1;
            let paragraphIndex = 1;

            const result = await api.getTableCellPortions(TestUtils.fileName, slideIndex, shapeIndex, rowIndex, cellIndex,
                paragraphIndex, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Portions).items.length, 2);
        });
    });

    it("get table cell portion", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 1;
            let cellIndex = 1;
            let paragraphIndex = 1;
            let portionIndex = 1;

            const result = await api.getTableCellPortion(TestUtils.fileName, slideIndex, shapeIndex, rowIndex, cellIndex,
                paragraphIndex, portionIndex, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Portion).text, "Header");
        });
    });

    it("create table cell portion", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 1;
            let cellIndex = 1;
            let paragraphIndex = 1;
            let dto = new Portion();
            dto.text = "Portion 1";
            const result = await api.createTableCellPortion(TestUtils.fileName, slideIndex, shapeIndex, rowIndex, cellIndex,
                paragraphIndex, dto, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Portion).text, dto.text);
        });
    });

    it("update table cell portion", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 1;
            let cellIndex = 1;
            let paragraphIndex = 1;
            let portionIndex = 1;
            let dto = new Portion();
            dto.text = "Portion 1";
            const result = await api.updateTableCellPortion(TestUtils.fileName, slideIndex, shapeIndex, rowIndex, cellIndex,
                paragraphIndex, portionIndex, dto, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Portion).text, dto.text);
        });
    });

    it("delete table cell portion", () => {
        return TestUtils.runTest(async () => {
            const api = TestUtils.getApi();
            await api.copyFile(TestUtils.tempFilePath, TestUtils.filePath);

            let slideIndex = 9;
            let shapeIndex = 1;
            let rowIndex = 1;
            let cellIndex = 1;
            let paragraphIndex = 1;
            let portionIndex = 1;

            const result = await api.deleteTableCellPortion(TestUtils.fileName, slideIndex, shapeIndex, rowIndex, cellIndex,
                paragraphIndex, portionIndex, TestUtils.password, TestUtils.folderName);
            assert.equal((result.body as model.Portions).items.length, 1);
        });
    });
});