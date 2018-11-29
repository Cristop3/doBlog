<template>
  <span class="about">
    <div class='contentainer'>
      <div class='post'>
        <h1 class="post-title">个人简介</h1>
        <div class='post-content'>
          <div class='author-page'>
            <a href='#' class="headPic">
              <img src='../assets/headpic.jpg' />
            </a>
            <div class="author">
              <p><span>姓名：</span>Caristop3</p>
              <p><span>工种：</span>前端开发</p>
              <p><span>现工作地：</span>天府新谷</p>
              <p><span>邮箱：</span>ljx_lijiaxin@126.com</p>
              <p><span>github:</span>cristop3.github.io</p>
            </div>
          </div>
        </div>
      </div>

      <div class='post'>
        <h1 class="post-title">教育经历</h1>
        <div class='post-content'>
          <div class='author-page'>
            <a href='#' class="headPic">
              <img src='../assets/cuit.jpg' />
            </a>
            <div class="education">
              <p><span>学校：</span>成都信息工程大学</p>
              <p><span>学历：</span>本科</p>
              <p><span>专业：</span>计算机科学与技术</p>
              <p><span>成绩：</span>全年级倒数10名</p>
              <p><span>最大成就:</span>英雄联盟钻石段位</p>
            </div>
          </div>
        </div>
      </div>

      <div class='post'>
        <h1 class="post-title">工作经历</h1>
        <div class='post-content'>
          <my-work></my-work>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import workTimeTree from '../components/timeTree'

  export default {
    name: 'myabout',
    data() {
      return {

      }
    },
    components:{
      'my-work':workTimeTree
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  

  /*左边内容*/

  .about {
    display: inline-block;
    zoom: 1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
    width: 75%;
    min-height: 300px;
  }

  .contentainer {
    padding-right: 40px;
    /* border: 1px solid cadetblue; */
    min-height: 200px;
  }

  @media screen and (max-width: 48em) {
    .about {
      width: 100%;
    }

    .contentainer {
    width: 100%;
  }
  }

  .post {
    padding: 25px;
    background: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 1px 2px 3px #adc2d7;
    box-shadow: 1px 2px 3px #adc2d7;
    /* border: 1px solid #adc2d7; */
    margin-bottom: 40px;
  }

  .post-title {
    margin: 0;
    color: #40759b;
    text-align: left;
    border-bottom: 1px solid #d8e2eb;
    padding-bottom: 10px;
    font-weight: bold;
    font-size: 22px;
    line-height: 1.1;
  }

  .post .post-content {
    clear: left;
    font-size: 15px;
    line-height: 1.77;
    color: #333;
    padding-top: 15px;
    text-align: justify;
    text-justify: distribute;
    word-break: normal;
  }

  .author-page {
    padding: 40px 0 20px 0;
    text-align: center;
  }

  .author-page .headPic {
    display: inline-block;
    vertical-align: top;
    box-sizing: content-box;
    padding: 0 30px 30px 30px;
    width: 180px;
    height: 180px;
  }

  .post .post-content img {
    max-width: 100%;
    padding: .5em 0;
    margin: auto;
    display: block;
  }

  .author-page .headPic img {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    -webkit-box-shadow: 1px 2px 3px #adc2d7;
    box-shadow: 1px 2px 3px #adc2d7;
  }

  .author-page .author,.education {
    font-size: 16px;
    white-space: nowrap;
    display: inline-block;
    vertical-align: top;
    text-align: left;
  }

  .post .post-content p {
    margin: 0 0 1.234em;
}

.author  p:nth-child(1) span::before{
  content:url('../assets/name.png');
  margin-right:5px;
}

.author  p:nth-child(2) span::before{
  content:url('../assets/work.png');
  margin-right:5px;
}

.author  p:nth-child(3) span::before{
  content:url('../assets/place.png');
  margin-right:5px;
}

.author  p:nth-child(4) span::before{
  content:url('../assets/email.png');
  margin-right:5px;
}

.author  p:nth-child(5) span::before{
  content:url('../assets/github.png');
  margin-right:5px;
}

.education  p:nth-child(1) span::before{
  content:url('../assets/school.png');
  margin-right:5px;
}

.education  p:nth-child(2) span::before{
  content:url('../assets/education.png');
  margin-right:5px;
}

.education  p:nth-child(3) span::before{
  content:url('../assets/direct.png');
  margin-right:5px;
}

.education  p:nth-child(4) span::before{
  content:url('../assets/grade.png');
  margin-right:5px;
}

.education  p:nth-child(5) span::before{
  content:url('../assets/goal.png');
  margin-right:5px;
}

</style>
