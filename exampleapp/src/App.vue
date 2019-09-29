<template>
  <div id="app">
    <common-header></common-header>
    <router-view></router-view>
    
      
    <common-footer></common-footer>
  </div>
</template>

<script>
// 1 CommonHeader组件导入 impor
// 2 Commponents声明组件
  import commonHeader from './components/CommonHeader';
  import CommonFooter from './components/CommonFooter';
  export default {
    components:{
      commonHeader,
      CommonFooter
    },
    methods:{
    
    }
  };
</script>
<style lang="scss">
#app {
  margin-top:1rem;
}

</style>
