const sdkApi = require("asposeslidescloud/api");
const requests = require("asposeslidescloud/requests");
const models = require("asposeslidescloud/model");
const api = new sdkApi.ShapesApi("78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195");


const request = new requests.PostAddNewParagraphRequest();
request.name = "test.ppt"
request.password="password"
request.slideIndex = 2
request.path = ""
request.shapeIndex = 1
request.dto = {}


api.postAddNewParagraph(request).then((result) => {
    console.log(result.response);
});