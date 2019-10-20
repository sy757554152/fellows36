<template>
    <div class="header">
        <transition-group :name="mode" tag="ul">
            <li v-for="(obj,index) in imgList" :key="index" v-show="index == nowIndex">
                <img :src="obj" alt="">
            </li>
        </transition-group>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                nowIndex:0
            }
        },
        props:['imgList','mode','speed'],
        created(){
            setInterval((obj)=>{
                this.nowIndex++;
                if(this.nowIndex==this.imgList.length){
                    this.nowIndex=0;
                }
            },this.speed)
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        position: relative;
        overflow: hidden;
        .fade-enter{
            transform: translateX(100%)
        }
        .fade-enter-active{
            transition: transform 2s ease
        }
        .fade-enter-to{
            transform: translateX(0%)
        }
        .fade-leave{
            transform: translateX(0%)
        }
        .fade-leave-active{
            transition: transform 2s ease
        }
        .fade-leave-to{
            transform: translateX(-100%)
        }
        ul{
            height: 5rem;
            
        }
        li{
                width: 100%;
                position: absolute;
                left:0;
                top:0;
                img{
                    width: 100%;
                    height: 5rem;
                }
            }

    }
</style>