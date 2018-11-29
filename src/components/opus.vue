<template>
  <div class="opus">
    <div class='opus-item'>
      <div class="opus-item-title">
        <h3 class="title-name">易车网官网仿写</h3>
        <span class="title-date">20140625</span>
      </div>
      <div class="opus-item-img">
        <img src='../assets/opus1.jpg' />
      </div>
      <p class="opus-item-content">
        <div class="content-tips">
          <span>HTML5</span>
          <span>Jquery</span>
          <span>vueJS</span>
          <span>reactJS</span>
          <span>flex</span>
        </div>
        <div class="content-main">
          <p>
            此作品是仿照新浪网首页做的一个静态页面。 其中运用div+css布局，并考虑兼容主流浏览器和ie7\8， 用photoshop进行大部分的切图或合成图片，用原生javascript 实现原网站上的交互。而仿易车网是photoshop切图、 纯布局来完成。不足与体会：css方面:1.样式重用化
            2.合理布局 3.命名规范性 4.css预处理 js方面: 1.相同效果的代码封装 了解到浏览器间的差异和兼容性。
          </p>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myopus',
    data() {
      return {

      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .opus-item {
    width: 80%;
    min-height: 650px;
    margin: 0 auto;
    background-color: #fff;
    /* border-radius: 10px; */
    overflow: hidden;
    box-shadow: 3px 4px 5px #303030;
  }

  .opus-item-title {
    width: 100%;
    min-height: 40px;
    /* background-color: aqua; */
    /* border-bottom: 1px solid rgb(164, 172, 172); */
    padding: 5px;
    line-height: 40px;
  }

  .title-name {
    display: inline-block;
    margin: 0 15px;
    height: 33px;
    font-size: 18px;
    font-weight: 400;
  }

  .title-date {
    float: right;
    font-size: 18px;
    color: #777;
    margin-right: 25px;
  }

  .opus-item-img {
    width: 100%;
    min-height: 70px;
  }

  .opus-item-img img {
    width: 100%;
    vertical-align: middle;
  }

  .opus-item-content {
    width: 100%;
    height: 20px;
    /* background-color: aqua; */
    padding: 10px;
  }

  .content-tips span {
    display: inline-block;
    font-size: 12px;
    border-radius: 3px;
    padding: 0 4px;
    border: thin solid #795548;
  }

  .content-main {
    width: 96%;
    padding: 10px;
  }

</style>
