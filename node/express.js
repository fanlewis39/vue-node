var express = require('express');
const router = require('./controllers/index');
var app = express();
var bodyParser = require('body-parser');//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
app.use(bodyParser.json());

app.use('/', router);

var server = app.listen(8082, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server running at http://192.168.0.134", host, port)

})

