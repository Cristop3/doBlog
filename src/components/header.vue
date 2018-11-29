<template>
  <div class="header">
    <!-- 个人说明 -->
    <div class='site-name'>
      <a id='logo' href='./'>Caristop3</a>
      <p>不是你快乐才笑，而是你笑才快乐</p>
    </div>
    <!-- 导航条 -->
    <div id='nav-menu'>
      <!-- 总结1：在router-link中绑定路由 使用to关键字使用如下
            总结2：router-link绑定click等事件，使用如下
       -->
      <!-- <span  v-for='(item,index) in navArr' :key="item">  -->
      <router-link :to="{path:item.navRouter}" tag='a' v-for='(item,index) in navArr' :key="index" @click.native="toggle(index)">{{item.navName}}</router-link>
      <!-- </span> -->
    </div>
    <!-- 搜索组件 -->
    <!-- <div id='search-form'>
      <img id='searchPng' src='../assets/search.png' />
      <label>
        <input id='search-key' type='text' autocomplete="off" placeholder="请输入关键字.." />
      </label>
    </div> -->
    <my-search v-show="checkindex!=3"></my-search>
  </div>
</template>

<script>
  //引入组件
  import mySearch from './search'
  export default {
    name: 'myheader',
    data() {
      return {
        navArr: [
          // {
          //   title: '首页',
          //   vrouter: '/index/contentleft'
          // },
          // {
          //   title: '归档',
          //   vrouter: '/archive/archiveleft'
          // },
          // {
          //   title: '个人简介',
          //   vrouter: '/about/aboutleft'
          // },
          // {
          //   title: '留言区',
          //   vrouter: '/read'
          // }
        ],
        checkindex: 0
      }
    },
    methods: {
      //切换菜单栏
      toggle: function (index) {
        this.checkindex = index
      },
      //获取后台菜单栏
      getNavbar: function () {
        this.$ajax.get('/api/navbar/getnavbar').then((Response) => {
          // console.log(Response)
          // console.log(Response.data)

          //赋值后台接口导航栏值
          this.navArr = Response.data

        }).catch((err) => {
          console.log(err)
        })
      }
    },
    components: {
      'my-search': mySearch
    },
    mounted() {
      this.getNavbar()
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    min-height: 300px;
    /* background-color: blue; */
    position: relative;
    /* border: 1px solid blue; */
  }

  .header .site-name {
    padding-top: 100px;
    /* border: 1px solid red; */
  }

  #logo {
    font: bold 42px/1.2 "宋体";
    white-space: nowrap;
    color: #fff;
    text-shadow: 1px 3px 6px #113f6e;
  }

  #nav-menu {
    margin: 20px 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    /* border: 1px solid green; */
  }

  #nav-menu a {
    display: inline-block;
    padding: 3px 18px 3px;
    line-height: 30px;
    color: #fff;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
  }

  /* #search-form {
    position: absolute;
    bottom: -55px;
    right: 5px;
    padding: 20px 0;
    color: #333;
    width: 25%;
     border: 1px solid yellow 
  } */

  /* 可视化配置 */

  @media screen and (max-width: 48em) {
    .site-name {
      margin-bottom: 20px;
      text-align: center;
    }
    #nav-menu {
      position: relative;
      text-align: center;
    }
    #search-form {
      position: relative;
      bottom: 0;
      width: 100%;
    }
  }

  /* 导航栏变化 */

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active below version 2.1.8 */

    {
    opacity: 0;
  }

  #nav-menu .router-link-active {
    color: red;
  }

  /* #nav-menu .active {
    color: red;
  } */

  /* 搜索 */

  /* #search-form input {
    outline: none;
    取消焦点获取时周围的边框
    box-sizing: border-box;
    height: 32px;
    padding: 7px 11px 7px 35px;
    line-height: 16px;
    width: 100%;
    border-radius: 15px;
    background: #fff;
    -webkit-box-shadow: 1px 2px 3px #adc2d7;
    box-shadow: 1px 2px 3px #adc2d7;
    border: 1px solid #adc2d7;
  }

  #searchPng {
    position: absolute;
    left: 10px;
    top: 24px;
  } */

</style>
