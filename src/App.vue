<template>
  <div id="app">
    <my-header></my-header>
    <router-view />
    <!-- <my-content></my-content> -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './components/header.vue';
import myContent from './components/content.vue';
import myFooter from './components/footer.vue';
export default {
  name: 'App',
  components: {
    'my-header':myHeader,
    'my-content':myContent,
    'my-footer':myFooter
  }
}
</script>

<style>
#app {
  padding:0px 50px;
  max-width: 1200px;
  margin:0 auto;
  box-sizing: border-box;
  display: block;
  background: #d8e2eb url('./assets/bg.jpg') no-repeat top center;
  
   
} 
</style>
