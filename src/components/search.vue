<template>
  <div class="search">
    <div id='search-form'>
      <img id='searchPng' src='../assets/search.png' />
      <label>
        <input id='search-key' type='text' autocomplete="off" placeholder="请输入关键字.." />
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mysearch',
    data() {
      return {

      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search-form {
    position: absolute;
    bottom: -55px;
    right: 5px;
    padding: 20px 0;
    color: #333;
    width: 25%;
    /* border: 1px solid yellow */
  }

  #search-form input {
    outline: none;
    /*取消焦点获取时周围的边框*/
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
  }

  /* 可视化配置 */

  @media screen and (max-width: 48em) {
    #search-form {
      position: relative;
      bottom: 0;
      width: 100%;
    }
  }

</style>
