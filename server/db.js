/**
 *  db.js 用来配置添加mysql的数据库信息
 *  配置mysql的IP，端口，用户名，密码，数据库名称
 * 
 */

 module.exports = {
     mysql:{
         host:'localhost',   //主机
         user:'root',        //mysql用户
         password:'123456',  //密码
         database:'doblog',  //mysql数据库名称
         port:'3306'  //端口
     }
 }