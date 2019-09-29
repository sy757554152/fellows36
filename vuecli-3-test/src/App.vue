<!-- 总组件-->
<template>
  <div id="app">
    <index-head></index-head>
    <!--router-view是路由*(router)放置位置  -->
    
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <!-- <router-link to="/Mine">我的</router-link> -->
      <!-- <router-link :to="{name:'mine',params:{id:666,name:'shiyu',age:22}}">我的</router-link> -->
      <router-link :to="{path:'/Mine',query:{id:666,name:'shiyu',age:22}}">我的</router-link>|
      <!-- 传参方法有三种
      params传参
      一种为 :to="{name:'',params:{id:666,name:''}}" 
      query传参
      第二种为 :to="{path:'',query:{id:666,name:''}}"
      路径传参
      第三种为 to="path名+/参数/参数"
      -->
      <router-link to="/test/5/lisi">test</router-link>|
      <router-link to="/aaa">重定向</router-link>|
      <router-link to='/c'>别名</router-link>
      <transition name="animation">
        <router-view/>
      </transition>
      <button @click="$router.push('/')"> 首页 </button>
       <button @click="$router.go(-1)"> 上一页 </button>
        <button @click="$router.go(1)"> 下一页 </button>
    </div>
    
  </div>
</template>
<!--vbase 生成template，script，style的快捷方式-->
<script>
  import IndexHead from "./views/index1";
    export default {
        components:{
          IndexHead
        }
    }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.animation-enter{
  opacity: 0;
}
.animation-enter-active{
  transition: opacity 1s ease;
}
.animation-enter-to{
  opacity: 100%;
}
.animation-leave{
  transform: translateX(0);
}
.animation-leave-active{
  transition: transform 1s ease;
}
.animation-leave-to{
  transform: translateX(100%);
}
</style>

