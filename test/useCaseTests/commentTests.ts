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

var fs = require('fs');

var assert = require('assert');
import * as model from "../../sdk/model";
import {TestInitializer} from "../testInitializer";

describe("Comment tests", () => {
    it("createComment", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const author = "Test author";
            const text = "Comment text";
            const childText = "Child comment text";

            const childComment = new model.SlideComment();
            childComment.author = author;
            childComment.text = childText;

            const comment = new model.SlideComment();
            comment.author = author;
            comment.text = text;
            comment.childComments = [childComment];

            const response = await api.createComment(fileName, 3, comment, null, "password", folderName)
            assert.equal(200, response.response.statusCode);
            const comments = response.body as model.SlideComments;

            assert.equal(1, comments.list.length);
            assert.equal(author, comments.list[0].author);
            assert.equal(text, comments.list[0].text);
            assert.equal(1, comments.list[0].childComments.length);
            assert.equal(author, comments.list[0].childComments[0].author);
            assert.equal(childText, comments.list[0].childComments[0].text);
        });
    });

    it("createCommentOnline", () => {
        return TestInitializer.runTest(async () => {
            const author = "Test author";
            const text = "Comment text";
            const childText = "Child comment text";

            const childComment = new model.SlideComment();
            childComment.author = author;
            childComment.text = childText;

            const comment = new model.SlideComment();
            comment.author = author;
            comment.text = text;
            comment.childComments = [childComment];

            const api = TestInitializer.getApi();
            const response = await api.createCommentOnline(fs.createReadStream("TestData/test.pptx"), 3, comment, null, "password");
            assert.equal(200, response.response.statusCode);
            assert(response.body.length > 0);
        });
    });

    it("getSlideComments", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);
            const response = await api.getSlideComments(fileName, 1, "password", folderName);

            const comments = response.body as model.SlideComments;
            assert.equal(2, comments.list.length);
            assert.equal(1, comments.list[0].childComments.length);
        });
    });

    it("deleteComments", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);
            const response = await api.deleteComments(fileName, null, "password", folderName);
            assert.equal(200, response.response.statusCode);

            const result = await api.getSlideComments(fileName, 1, "password", folderName);
            const comments = result.body as model.SlideComments;
            assert.equal(0, comments.list.length);
        });
    });

    it("deleteCommentsOnline", () => {
        return TestInitializer.runTest(async () => {
            const api = TestInitializer.getApi();
            const response = await api.deleteCommentsOnline(fs.createReadStream("TestData/test.pptx"), null, "password");
            assert.equal(200, response.response.statusCode);
            assert(response.body.length > 0);
        });
    });

    it("deleteSlideComments", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);
            const response = await api.deleteSlideComments(fileName, 1, null, "password", folderName);
            assert.equal(200, response.response.statusCode);

            const result = await api.getSlideComments(fileName, 1, "password", folderName);
            const comments = result.body as model.SlideComments;
            assert.equal(0, comments.list.length);
        });
    });

    it("deleteSlideCommentsOnline", () => {
        return TestInitializer.runTest(async () => {
            const api = TestInitializer.getApi();
            const response = await api.deleteSlideCommentsOnline(fs.createReadStream("TestData/test.pptx"), 1, null, "password");
            assert.equal(200, response.response.statusCode);
            assert(response.body.length > 0);
        });
    });

    it("createModernComment", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const author = "Test author";
            const text = "Comment text";
            const childText = "Child comment text";

            const childComment = new model.SlideModernComment();
            childComment.author = author;
            childComment.text = childText;
            childComment.status = model.SlideModernComment.StatusEnum.Resolved;

            const comment = new model.SlideModernComment();
            comment.author = author;
            comment.text = text;
            comment.childComments = [childComment];
            comment.status = model.SlideModernComment.StatusEnum.Active;

            const response = await api.createComment(fileName, 3, comment, null, "password", folderName)
            assert.equal(200, response.response.statusCode);
            const comments = response.body as model.SlideComments;

            assert.equal(1, comments.list.length);
            assert.equal(comments.list[0].type, model.SlideCommentBase.TypeEnum.Modern);
        });
    });

    it("createShapeModernComment", () => {
        return TestInitializer.runTest(async () => {
            const folderName = "TempSlidesSDK";
            const fileName = "test.pptx";
            const api = TestInitializer.getApi();
            await api.copyFile("TempTests/" + fileName, folderName + "/" + fileName);

            const author = "Test author";
            const text = "Comment text";
            const childText = "Child comment text";

            const childComment = new model.SlideModernComment();
            childComment.author = author;
            childComment.text = childText;
            childComment.status = model.SlideModernComment.StatusEnum.Resolved;

            const comment = new model.SlideModernComment();
            comment.author = author;
            comment.text = text;
            comment.childComments = [childComment];
            comment.status = model.SlideModernComment.StatusEnum.Active;
            comment.textSelectionStart = 1;
            comment.textSelectionLength = 4;

            const response = await api.createComment(fileName, 3, comment, 1, "password", folderName)
            assert.equal(200, response.response.statusCode);
            const comments = response.body as model.SlideComments;

            assert.equal(1, comments.list.length);
            assert.equal(comments.list[0].type, model.SlideCommentBase.TypeEnum.Modern);
        });
    });
});