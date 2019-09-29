<template>
    <div class="header" :style ="{background : $store.state.color}">
        <div id="first"><button @click="getfirst()">首页</button></div>
        <div id="name">{{$store.state.title}}</div>
    </div>
</template>

<script>
    export default {
        methods:{
            getfirst(){
                this.$router.push('/movie');
                this.$store.state.title="电影";
                this.$store.state.color="red";
            }
            
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 1rem;
        position: fixed;
        top:0;
        display: flex;
        background: #f00;
        text-align: center;
        line-height: 1rem;
        #first{
            width: 20%;
        }
        #name{
            flex: 1;
            margin-right: 20%;
        }
    }
</style>