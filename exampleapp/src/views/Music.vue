<template>
    <div>
       <ul class="musiclist">
           <li v-for="(obj,index) in musicList" :key="index">
               <img :src="obj.bg" alt="" @click="gomusic(obj.id)">
           </li>
       </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                musicList:[]
            }
        },
        created(){
            axios.get('./data/musiclist.json')
            .then((res)=>{
                this.musicList=res.data.albums;
            }).catch((res)=>{
                alert('服务器错误');
            })
        },
        methods:{
            gomusic(id){
                this.$router.push({path:'/musicdetails',query:{id:id}})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .musiclist{
        display: flex;
        flex-wrap: wrap;
        li{
            width: 50%;
            img{
                width: 100%;
                display: block;
            }
        }
    }
</style>