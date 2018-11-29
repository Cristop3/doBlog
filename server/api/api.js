/**
 *  api.js 针对前台所有对服务器发起的请求接口
 */

//引入数据库mysql配置文件
 const models = require('../db')
 //引入express服务
 const express = require('express')
 //引入express请求路由
 const router = express.Router()
 //引入mysql服务无
 const mysql = require('mysql')
 //引入sql语句的映射
 const $sql = require('../sqlMap')


 //创建链接数据库
 var conn = mysql.createConnection(models.mysql) //猜测：使用models来表示该文件下的变量

 //链接数据库
 conn.connect()

 //博客导航栏接口实现
 //直接get方式
 router.get('/getnavbar',(req,res) => {
    //定义配置的sql 
    var sql = $sql.navbar.get

    //查询数据库
    conn.query(sql,function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            console.log('成功请求')
            if(typeof result == 'undefined'){
                res.json({
                    code:"1",
                    msg:"操作失败"
                })
            }else{
                res.json(result)
            }
        }
    })
 })


 module.exports = router