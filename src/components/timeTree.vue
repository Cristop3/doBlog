<template>
  <span class="timeTree">
    <div class="post-archive">
      <div class='archive-wrap'>
        <h2>2015</h2>
        <ul class="archive-list">
          <li>
            <a href='#'>
              <span class='date'>7月9日</span>
              <span class='title'> 中软国际（实习）</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class='date'>8月15日</span>
              <span class='title'>中软国际（实习结束）</span>
            </a>
          </li>
        </ul>

        <h2>2016</h2>
        <ul class="archive-list">
          <li>
            <a href='#'>
              <span class='date'>3月14日</span>
              <span class='title'> 北京致远互联航空事业部（实习）</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class='date'>7月1日</span>
              <span class='title'>北京致远互联航空事业部（转正）</span>
            </a>
          </li>
        </ul>

        <h2>2017</h2>
        <ul class="archive-list">
          
        </ul>

        <h2>2018</h2>
        <ul class="archive-list">
          <li>
            <a href='#'>
              <span class='date'>7月10日</span>
              <span class='title'>依然在致远搬砖shit!</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </span>
</template>

<script>
  export default {
    name: 'mytimeTree',
    data() {
      return {

      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*时间树*/

  .post-archive {
    font-size: 15px;
    line-height: 2;
    padding: 2em 0;
  }

  .archive-wrap {
    position: relative;
    border-left: 2px solid #d8e2eb;
    margin-left: 140px;
    padding: 3em 0;
  }

  .archive-wrap::after,
  .archive-wrap::before {
    content: '';
    position: absolute;
    left: -6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #d8e2eb;
  }

  /*年份*/

  .post-archive h2 {
    margin: 0 0 15px -51px;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: -1px;
    background: #d8e2eb;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    color: #5483b1;
  }

  .post-archive h2::before {
    content: url('../assets/archivedate.png');
  }

  /*时间树中的文章列表*/

  .archive-wrap ul li {
    margin-bottom: 50px;
    position: relative;
    list-style: none;
  }

  .archive-wrap .archive-list li a::before {
    content: '';
    position: absolute;
    z-index: 1;
    left: -11px;
    bottom: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #d8e2eb;
    -webkit-box-shadow: 0 0 4px #d8e2eb inset;
    box-shadow: 0 0 4px #d8e2eb inset;
  }

  /*树状中心小灰点*/

  .archive-wrap .archive-list li a::after {
    content: '';
    position: absolute;
    z-index: 2;
    left: -5px;
    bottom: -4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #d8e2eb;
    -webkit-box-shadow: 0 0 3px #d8e2eb inset;
    box-shadow: 0 0 3px #d8e2eb inset;
  }

  /*日期*/

  .archive-list .date {
    position: absolute;
    left: -112px;
    width: 100px;
    bottom: 0;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px 30px 0 15px;
    border: 1px solid #d8e2eb;
    -webkit-box-shadow: 0 0 4px #d8e2eb inset;
    box-shadow: 0 0 4px #d8e2eb inset;
  }

  /*标题*/

  .archive-list .title {
    position: relative;
    bottom: -5px;
    display: inline-block;
    border-bottom: 1px solid #d8e2eb;
    line-height: 1.2em;
    padding: 0 30px;
    max-width: 100%;
    box-sizing: border-box;
  }

  /*标题后小黑点*/

  .archive-list .title::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #d8e2eb;
  }

  /*li的所有hover效果*/

  .archive-wrap .archive-list li:hover .title {
    color: black;
    border-bottom: 1px solid #5483b1;
  }

  .archive-wrap .archive-list li:hover .date {
    border: 1px solid #5483b1;
  }

  .archive-wrap .archive-list li:hover a::after {
    content: '';
    position: absolute;
    z-index: 2;
    left: -5px;
    bottom: -4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: red;
    -webkit-box-shadow: 0 0 3px #d8e2eb inset;
    box-shadow: 0 0 3px #d8e2eb inset;
  }

  .archive-wrap .archive-list li:hover .title::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: red;
  }

  .archive-wrap .archive-list li:hover a::before {
    content: '';
    position: absolute;
    z-index: 1;
    left: -11px;
    bottom: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #5483b1;
    -webkit-box-shadow: 0 0 4px #d8e2eb inset;
    box-shadow: 0 0 4px #d8e2eb inset;
  }

</style>
