<template>
  <div class="footer">
      <div class='footer-info'>
          <p>
            <a href='#'>网站地图</a>
             | 
            <a href='#'>订阅本站</a>
             | 
            <a href='#'>联系博主</a>
          </p>
          <p>
            本站总访问量1314次
          </p>
          <p>
            <span>
              Copyright @ Caristop3.
            </span>
            <span>
              Theme use for Charles.Zheng.
            </span>
            <span>
              count by busuanzi.
            </span>
            <span>
              Powered by LJX.
            </span>
          </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'myfooter',
  data () {
    return {
     
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    width: 100%;
    margin-top: 50px;
    padding:30px 0px;
  }

  .footer .footer-info{
    line-height:2;
    color:#333;
    text-align: center;
    font-size:.925em;
  }

  .footer .footer-info span{
    margin:0 6px;
  }
</style>
