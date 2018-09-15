var express = require('express');
var app = express();
var bodyParser = require('body-parser');//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
app.use(bodyParser.json());


//连接mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'mysql'
});

connection.connect();

//Node.js express 跨域
 app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
 
//主页表单
app.get('/books', function (req, res) {
  var sql = 'SELECT * FROM `books`';
  connection.query(sql,function(err,result){
      if(err){
          console.log(err.message);
          return;
      }
      res.send(result);//发送数据
  })
})

//购物车表单
app.get('/cart',function (req,res){
  var sql = 'SELECT name, price FROM `cart`';
  connection.query(sql,function(err,result){
    if(err){
      console.log(err.message);
      return;
    }
    res.send(result);
  })
})

//添加入购物车
//如果是get方法，下面是req.query.name，此时能用url传参
app.post('/cart', function (req, res) {
  console.log(req.body)
  var name = req.body.name;
  var price = req.body.price;
  var sql = "INSERT INTO `mysql`.`cart`(`name`, `price`) VALUES ('" + name + "', "+ price +")";
  console.log(sql)
  connection.query(sql,function(err,result){
      if(err){
          console.log(err.message);
          return;
      }
  })
})
 
var server = app.listen(8082, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Server running at http://192.168.0.134", host, port)
  
})
