const sdkApi = require("asposeslidescloud/api");
const requests = require("asposeslidescloud/requests");
const api = new sdkApi.DocumentApi("78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9", "b125f13bf6b76ed81ee990142d841195");


const request = new requests.PostSlidesDocumentRequest();
request.name = "test.pptx"
request.data = "<staff><person><name>John Doe</name><address><line1>10 Downing Street</line1><line2>London</line2></address><phone>+457 123456</phone><bio>Hi, I'm John and this is my CV</bio><skills><skill><title>C#</title><level>Excellent</level></skill><skill><title>C++</title><level>Good</level></skill><skill><title>Java</title><level>Average</level></skill></skills></person></staff>"
request.folder = null
request.templatePath="test.pptx"
request.isImageDataEmbedded =false

api.postSlidesDocument(request).then((result) => {
    console.log(result.response);
});