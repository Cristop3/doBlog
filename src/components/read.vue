<template>
  <div class="read">
    <div class='opus'>
      <!-- <div class='opus-item'>
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
      </div> -->
      <!-- 个人作品展示 -->
      <my-opus></my-opus>

      <div class='msg-hr'>
        <h2 class="msg-hr-title">留言板</h2>
        <span class="msg-hr-line"></span>
      </div>

      <!-- 留言区 -->
      <div class="msg">
        <div class='msg-post'>

          <my-leavemsg :isLoginShow='true'></my-leavemsg>

          <!-- 留言区-登录
          <div class='msg-post-btn'>
            <div class='post-btn-title'>
                <span>登录</span>
            </div>
          </div>

          <! 留言区-留言板 
          <div class="msg-input">
              <div class='input-left'></div>
              <div class='input-right'></div>
              <div class='input-main'>
                <div class='main-top'>
                  <div class='input-top'></div>
                  <div class='input-top-top'></div>
                </div>

                <div class="main-textarea">
                  <textarea class="textarea-textarea" placeholder="在这里留下你的足迹..."></textarea>
                </div>
              </div>
          </div>

          <! 留言区-提交 
          <div class="msg-post-btn">
              <div class="post-btn-pos">
                <a href='#'></a>
              </div>
          </div> -->

          <!-- 留言区-留言标题 -->
          <div class='leave-msg'>
            <span class="leave-msg-title">
              <span>评论</span>
            </span>
            <span class='leave-msg-bg'></span>
          </div>

          <!-- 留言区-留言内容 -->
          <div class="leave-content">
            <div class="content-top">
              <div class='left-img'>
                <img src='../assets/defaultuser.png' />
              </div>

              <div class='right-content'>
                <div class='content-title'>
                  <span class="title-name">西南王北车</span>
                  <span class='title-date'>2018-07-12 10:24:26</span>
                </div>
                <div class='content-msg'>一根热的火腿肠 配上一碗热腾腾的方便面 这就非常的舒服...</div>
                <div class='content-back'>
                  <span @click="isReply()">{{this.isSelfShow==true?'取消回复':'回复'}}</span>
                </div>
              </div>
            </div>
            <div class='back-msg'>
              <my-leavemsg v-show="isSelfShow" :isLoginShow='false'></my-leavemsg>
              <!-- <my-textarea></my-textarea> -->
            </div>
          </div>

          <div class="leave-content">
            <div class="content-top">
              <div class='left-img'>
                <img src='../assets/defaultuser.png' />
              </div>

              <div class='right-content'>
                <div class='content-title'>
                  <span class="title-name">西南王北车</span>
                  <span class='title-date'>2018-07-12 10:24:26</span>
                </div>
                <div class='content-msg'>一根热的火腿肠 配上一碗热腾腾的方便面 这就非常的舒服...</div>
                <div class='content-back'>
                  <span @click="isReply()">{{this.isSelfShow==true?'取消回复':'回复'}}</span>
                </div>
              </div>
            </div>
            <div class='back-msg'>
              <my-leavemsg v-show="isSelfShow" :isLoginShow='false'></my-leavemsg>
              <!-- <my-textarea></my-textarea> -->
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import myOpus from './opus'
  import myLeaveMsg from './leavemsg'
  export default {
    name: 'myread',
    data() {
      return {
        isSelfShow: false
      }
    },
    components: {
      'my-opus': myOpus,
      'my-leavemsg': myLeaveMsg
    },
    methods: {
      isReply: function () {
        this.isSelfShow = !this.isSelfShow
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .opus {
    /* border: 1px solid gray; */
    min-height: 650px;
    /* letter-spacing: -.31em;
    word-spacing: -.43em; */
    text-rendering: optimizespeed;
  }

  @media screen and (max-width: 48em) {
    .opus {
      /* border: 1px solid gray; */
      /* min-height: 650px; */
      /* letter-spacing: -.31em;
    word-spacing: -.43em; */
      text-rendering: optimizespeed;
    }
  }

  /*分隔线*/

  .msg-hr {
    width: 100%;
    position: relative;
  }

  .msg-hr .msg-hr-line {
    display: inline-block;
    height: 5px;
    width: 100%;
    background-color: aqua;
    margin-bottom: 20px;
  }

  .msg-hr .msg-hr-title {
    color: cadetblue;
    /* font-size:18px; */
    text-align: center;
  }

  /*留言板*/

  .msg {
    padding: 20px;
    /* border: 1px solid cadetblue; */
    min-height: 200px;
  }

  .msg-post {
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 1px 2px 3px #adc2d7;
    box-shadow: 1px 2px 3px #adc2d7;
    /* border: 1px solid #adc2d7; */
    margin-bottom: 40px;
  }


  /*显示留言*/

  .leave-msg {
    line-height: 30px;
    height: 30px;
    position: relative;
    margin-top: 50px;
    overflow: hidden;
    /* background-color: #333; */
  }

  .leave-msg-title {
    height: 30px;
    background: url('../assets/msg-leave.png') no-repeat;
    position: relative;
    bottom: -1px;
    line-height: 30px;
    color: #4398ed;
    font-size: 16px;
    width: 66px;
    /* background-color: #adc2d7; */
    display: inline-block;
  }

  .leave-msg-title span {
    display: inline-block;
    margin-left: 15px;
  }

  .leave-msg-bg {
    display: inline-block;
    height: 2px;
    background-color: aqua;
    width: 88%;
    position: relative;
    top: 10px;
    left: -3px
  }

  /*留言内容*/

  .leave-content {
    width: 100%;
    margin-top: 10px;
    min-height: 110px;
    border-bottom: 1px solid gainsboro;
  }

  .content-top {
    width: 100%;
    /* border: 1px solid blue; */
    min-height: 100px;
  }

  .leave-content .left-img {
    width: 10%;
    height: 60px;
    float: left;
    /* border:1px solid #111; */
  }

  .leave-content .content-top::after {
    clear: both;
  }

  .leave-content .left-img img {
    width: 60%;
    height: 60%;
    border-radius: 10%;
    max-width: 100%;
    margin: auto;
    display: block;
    /* border:1px solid red; */
  }

  .leave-content .right-content {
    width: 89%;
    float: right;
    min-height: 90px;
    /* border:1px solid aqua; */
  }

  .right-content .content-title {
    height: 25px;
    width: 100%;
    /* border:1px solid yellow; */
  }

  .content-title::after {
    clear: both;
  }

  .content-title .title-name {
    display: inline-block;
    padding: 5px 3px;
    color: #4398ed;
  }

  .content-title .title-date {
    float: right;
    color: silver;
    padding: 5px 3px;
  }

  .right-content .content-msg {
    border: 0;
    margin-top: 10px;
    padding: 0;
    font-size: 100%;
    text-align: left;
    vertical-align: baseline;
    background-image: none;
    background-position: 0 0;
    width: auto;
    float: none;
    overflow: visible;
    text-indent: 30px;
  }

  .right-content .content-back {
    width: 100%;
    height: 20px;
    margin-top: 15px;
  }

  .right-content .content-back span {
    float: right;
    margin-right: 10px;
    color: silver;
    cursor: pointer;
  }

  .right-content::after {
    clear: both;
    content: '';
  }

  .content-back::after {
    clear: both;
    content: '';
  }

  .back-msg {
    position: relative;
    margin-top: 10px;
    width: 100%;
    /* border:1px solid red; */
  }

</style>
