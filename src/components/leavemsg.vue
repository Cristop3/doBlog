<template>
  <div class="leavemsg">
      <!-- 留言区-登录 -->
          <div class='msg-post-btn' v-show='isLoginShow'>
            <div class='post-btn-title'>
                <span>登录</span>
            </div>
          </div>

          <!-- 留言区-留言板 -->
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

          <!-- 留言区-提交 -->
          <div class="msg-post-btn">
              <div class="post-btn-pos">
                <a href='#'></a>
              </div>
          </div>
  </div>
</template>

<script>
  export default {
    name: 'myleavemsg',
    data() {
      return {
        
      }
    },
    props:[
      'isLoginShow'
    ]
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leavemsg{
  position: relative;
}
  /*留言板*/
  .msg-post-btn{
    width: 100%;
  }
  .msg-post-btn .post-btn-title{
    width:50px;
    height: 50px;
    border-radius: 50%;
    /* background-color: #adc2d7; */
    border:1px solid #4398ed;
    text-align: center;
    margin-left: 3px;
  }
  .post-btn-title span{
    color:blue;
    line-height: 50px;
    font-size:18px;
  }

  /*输入框*/
  .msg-input{
        display: block;
    position: relative;
    zoom: 1;
    z-index: 2;
    min-height: 100px
  }
  .input-left{
    width: 8px;
    height: 97px;
    position: absolute;
    background: url('../assets/msg-border-l.png');
    top: 0;
    left: 0;
  }
  .input-right{
        width: 8px;
    height: 97px;
    position: absolute;
    background: url('../assets/msg-border-r.png');
    top: 0;
    right: 0;
  }
  .input-main{
        margin: 0 8px;
    height: 96px;
    border-bottom: 1px solid #4398ed;
  }
  .imput-main .main-top{
        height: 8px;
    position: relative;
  }
  .main-top .input-top{
        width: 46px;
    height: 8px;
    background: url('../assets/msg-border-t.png');
    overflow: hidden;
    position: absolute;
    left: 10;
    top: 0;
  }
  .main-top .input-top-top{
        height: 7px;
    border-top: 1px solid #4398ed;
    margin-left: 46px;
  }

  .main-textarea{
    padding: 13px 10px 0;
  }

  .textarea-textarea{
        width: 100%;
    height: 70px;
    background: 0 0;
    overflow-x: hidden;
    overflow-y: auto;
    border: 0;
    font-size: 14px;
    color: #bfbfbf;
    resize: none;
    line-height: normal;
    text-align: left;
        margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    
      color: #333;
      font-size: 14px;
  }

  /*留言板-提交*/
  .msg-post-btn{
    width:100%;
    min-height:50px;
    position: relative;
  }

  .msg-post-btn .post-btn-pos{
    text-decoration: none!important;
    display: block;
    float: right;
  }

  .msg-post-btn .post-btn-pos a{
    display: inline-block;
    width: 102px;
    height: 30px;
    overflow: hidden;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    background-image: url('../assets/msg-post-btn.png');
    background-repeat: no-repeat;
    background-color: transparent;
  }

  .msg-post-btn::after{
    content: ".";
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
  }
</style>
