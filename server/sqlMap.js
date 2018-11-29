/**
 *  sqlMap.js 用于mysql的sql语句映射文件，供api接口调用
 *  分离sql与业务逻辑代码
 */

 const sqlMap = {
     //获取博客导航栏
     navbar:{
         get:'select t.* from tb_config_navbar t order by t.navOrder'
     }
 }

 module.exports = sqlMap