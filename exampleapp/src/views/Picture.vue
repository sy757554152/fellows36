<template>
    <div class="photolist">
        <ul class="photolist-ul">
            <li v-for="(obj,index) in photoList2" :key="index">
                <img :src="obj.src" alt="" @click="godetails(index)">
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        components:{
        },
        data(){
            return{
                photoList2:[]

            }
        },
        created(){
            axios.get('./data/photodata.json')
            .then((res)=>{
                this.photoList2=res.data.photoData;
                console.log(res.data)
            }).catch((res)=>{
                console.log("错误")
            })
        },
        methods:{
            godetails(index){
                this.$router.push({path:"/picturedetails",query:{index:index}})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .photolist{
        .photolist-ul{
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 1rem;
            li{
                width: 50%;
                img{
                    width: 100%;
                    display: block;
                }
            }
        }
    }
</style>