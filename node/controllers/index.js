//把URL处理函数集中

const express = require('express');
const router = express.Router();


//连接mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'mysql'
});

connection.connect();

//Node.js express 跨域
router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.sendStatus(200);/*让options请求快速返回*/
    else next();
});

// 登录
router.post('/login', function (req, res) {
    console.log(req);
    var user = req.body.user;
    var pwd = req.body.pwd;
    var sql = "SELECT *FROM login where username = '" + user + "' and password = '" + pwd + "'";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        if (result != undefined) {
            if (result.length == 0) {
                console.log("账号密码错误");
                res.sendStatus(404);
            } else {
                res.send(result);
                console.log('登录成功，账号密码为：' + user + "---" + pwd);
            }
        }
    })
})

//主页表单
router.get('/books', function (req, res) {
    var sql = 'SELECT * FROM `books`';
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err.message);
            return;
        }
        res.send(result);//发送数据
    })
})

//购物车表单
router.get('/cart', function (req, res) {
    var sql = 'SELECT * FROM `cart`';
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err.message);
            return;
        }
        res.send(result);
    })
})

//添加入购物车
//如果是get方法，下面是req.query.name，此时能用url传参
router.post('/cart', function (req, res) {
    console.log(req.body)
    var name = req.body.name;
    var price = req.body.price;
    var sql = "INSERT INTO `mysql`.`cart`(`name`, `price`) VALUES ('" + name + "', " + price + ")";
    console.log(sql)
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err.message);
            return;
        }
    })
})

// 删除购物车数据
router.post('/cancel', function (req, res) {
    var no = req.body.id;
    var sql = "DELETE from `cart` where id =" + no;
    console.log(sql)
    connection.query(sql, function (err, result) {
        if (err) {
            console, log(err.message);
            return;
        }
    })
})

module.exports = router;