<template>
    <div>
        {{$route.query.id}}
        <aplayer autoplay
            :music="musicList[0]"
            :showLrc="true"
            :list="musicList"
            v-if="show"
        />
    </div>
</template>

<script>
    import axios from 'axios';
    import VueAplayer from 'vue-aplayer'
    export default {
        components: {
            'aplayer': VueAplayer
        },
        data(){
            return{
                musicList:[],
                show:false
            }
        },
        created(){
            axios.get('./data/musicdata.json')
            .then((res)=>{
                // this.musicList=res.data.musicData;
                console.log(res.data.musicData);
                // this.musicList=res.data;
                res.data.musicData.forEach((obj)=>{
                    let music={
                        src:obj.src,
                        title:obj.title,
                        pic:obj.musicImgSrc,
                        lrc:obj.lrc,
                        artist:obj.author
                    }
                    this.musicList.push(music)
                })
                this.show=true;
            })
            .catch((res)=>{
                console.log('服务器错误');
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>