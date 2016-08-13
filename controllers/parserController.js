var parser = require('ua-parser');
var reqIp = require('request-ip');
var simpleLang = require('simple-accept-language');

module.exports = function (app){

app.get('/', function (req, res){
    var headers = parser.parse(req.headers['user-agent']);
    var software = headers.os.toString();
    var clientIp = reqIp.getClientIp(req);
    var lang = simpleLang(req);
     res.json({"ipaddress": clientIp, "language": lang, "software": software});
});
};