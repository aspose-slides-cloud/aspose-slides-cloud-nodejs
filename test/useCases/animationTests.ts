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

describe("Animation tests", () => {
    it("get animation", () => {
        return TestUtils.runTest(() => {
            const slideIndex = 1;
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.getAnimation(TestUtils.fileName, slideIndex, null, null, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                    return api.getAnimation(TestUtils.fileName, slideIndex, 3, null, TestUtils.password, TestUtils.folderName).then((shapeResult) => {
                        assert.equal(200, shapeResult.response.statusCode);
                        assert.equal(1, (shapeResult.body as model.SlideAnimation).mainSequence.length);
                        assert.equal(0, (shapeResult.body as model.SlideAnimation).interactiveSequences.length);
                        return api.getAnimation(TestUtils.fileName, slideIndex, 3, 1, TestUtils.password, TestUtils.folderName).then((paragraphResult) => {
                            assert.equal(200, paragraphResult.response.statusCode);
                            assert.equal(0, (paragraphResult.body as model.SlideAnimation).mainSequence.length);
                        });
                    });
                });
            });
        });
    });

    it("set animation", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.SlideAnimation();
                const effect1 = new model.Effect();
                effect1.type = model.Effect.TypeEnum.Blink;
                effect1.shapeIndex = 2;
                effect1.paragraphIndex = 1;

                const effect2 = new model.Effect();
                effect2.type = model.Effect.TypeEnum.Box;
                effect2.subtype = model.Effect.SubtypeEnum.In;
                effect2.presetClassType = model.Effect.PresetClassTypeEnum.Entrance;
                effect2.shapeIndex = 4;
                dto.mainSequence = [effect1, effect2];
                dto.interactiveSequences = [];
                return api.setAnimation(TestUtils.fileName, 1, dto, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(dto.mainSequence.length, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(0, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("create animation effect", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.Effect();
                dto.type = model.Effect.TypeEnum.Blast;
                dto.shapeIndex = 3;
                return api.createAnimationEffect(TestUtils.fileName, 1, dto, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(2, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("create animation interactive sequence", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.InteractiveSequence();
                const effect = new model.Effect();
                effect.type = model.Effect.TypeEnum.Blast;
                effect.shapeIndex = 3;
                dto.triggerShapeIndex = 2;
                dto.effects = [effect];
                return api.createAnimationInteractiveSequence(TestUtils.fileName, 1, dto, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(2, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("create animation interactive sequence effect", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.Effect();
                dto.type = model.Effect.TypeEnum.Blast;
                dto.shapeIndex = 3;
                return api.createAnimationInteractiveSequenceEffect(TestUtils.fileName, 1, 1, dto, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(201, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("update animation effect", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.Effect();
                dto.type = model.Effect.TypeEnum.Blast;
                dto.shapeIndex = 3;
                return api.updateAnimationEffect(TestUtils.fileName, 1, 1, dto, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("update animation interactive sequence effect", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                const dto = new model.Effect();
                dto.type = model.Effect.TypeEnum.Blast;
                dto.shapeIndex = 3;
                return api.updateAnimationInteractiveSequenceEffect(TestUtils.fileName, 1, 1, 1, dto, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("delete animation", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.deleteAnimation(TestUtils.fileName, 1, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(0, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(0, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("delete animation main sequence", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.deleteAnimationMainSequence(TestUtils.fileName, 1, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(0, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("delete animation effect", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.deleteAnimationEffect(TestUtils.fileName, 1, 1, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(0, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("delete animation interactive sequences", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.deleteAnimationInteractiveSequences(TestUtils.fileName, 1, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(0, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("delete animation interactive sequence", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.deleteAnimationInteractiveSequence(TestUtils.fileName, 1, 1, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(0, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });

    it("delete animation interactive sequence effect", () => {
        return TestUtils.runTest(() => {
            const api = TestUtils.getApi();
            return api.copyFile(TestUtils.tempFilePath, TestUtils.filePath).then(() => {
                return api.deleteAnimationInteractiveSequenceEffect(TestUtils.fileName, 1, 1, 1, TestUtils.password, TestUtils.folderName).then((result) => {
                    assert.equal(200, result.response.statusCode);
                    assert.equal(1, (result.body as model.SlideAnimation).mainSequence.length);
                    assert.equal(1, (result.body as model.SlideAnimation).interactiveSequences.length);
                });
            });
        });
    });
});