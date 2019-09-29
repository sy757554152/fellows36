<template>
    <div>
        我的信息
        {{$store.state.count}}
        <!-- 子路由下路径为父目录加子目录 -->
        <router-link to="/mine/test1">子路由1</router-link>
        <router-link to="/mine/test2">子路由2</router-link>
        <!-- {{$route.params.id}} -->
        <!-- {{$route.params.name}} -->
        {{$route.query.id}}
        {{$route.query.name}}
       <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
div{
    margin: 50px,auto;
    font-size: 30px;
}
</style>