<template>
    <div class="footer" :style="{background:$store.state.color}">
        <!-- router-link是组件，点击事件需要用@click.native="" -->
        <router-link v-for="(obj,index) in Menu" :key="index" @click.native="$store.commit('changename',[obj.title,obj.color])" class="router-a" :to="obj.path">{{obj.title}}</router-link>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        data(){
            return{
                Menu:[
                    {
                        title:'电影',
                        path:'/movie',
                        color:'red'    
                    },
                    {
                        title:'音乐',
                        path:'/music',
                        color:'green'    
                    },
                    {
                        title:'书籍',
                        path:'/book',
                        color:'blue'    
                    },
                    {
                        title:'图片',
                        path:'/picture',
                        color:'pink'    
                    }
                ]
            }
        },
        computed:{
            ...mapState(['title','color'])
        },
        methods:{
            ...mapMutations(['changename'])
        },
        created(){
            this.Menu.forEach((obj,index)=>{
                if(obj.path==this.$route.path){
                    this.changename([obj.title,obj.color]);
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        bottom: 0;
        display: flex;
        background:#f00;
        text-align: center;
        .router-a{
            flex: 1;
            line-height: 1rem;
            &.router-link-exact-active{
                color: #fff;
            }
        }
    }
</style>