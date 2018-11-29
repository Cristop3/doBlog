/**
 *  index.js node后台express服务器入口文件
 */

 //引入node接口文件
 const navApi = require('./api/api')
 //引入文件模块
 const fs = require('fs')
//引入路径模块
 const path = require('path')
//引入body-parser模块
 const bodyParser = require('body-parser')
//引入express服务
 const express = require('express')
//声明express对象
 const app = express()

 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({
     extended:false
 }))

 //后端路由api 这里指定获取navbar
 app.use('/api/navbar',navApi)

 //后端node监听端口
 var server = app.listen(3000,'127.0.0.1',()=>{
    console.log(server.address().address+":"+server.address().port);
    
//console.log('success listen at port 3000.....')
 })
 //console.log('success listen at port 3000.....')