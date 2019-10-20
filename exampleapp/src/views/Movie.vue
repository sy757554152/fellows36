<template>

  <div>
    <ul class="movie-box" id="content">
      <li class="movielist" v-for="(obj,index) in movielist" :key="index" @click="godetails(obj.id)">
        <!-- 只有子路由to不加斜线/，其他都加斜线/ -->
        <img :src="obj.images.medium" alt />
        <div>
          <h2>{{obj.original_title}}</h2>
          <p>{{obj.collect_count}}</p>
          <p>
            演员:
            <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}</span>
          </p>
          <p>时间: {{obj.mainland_pubdate}}</p>
        </div>
      </li>
    </ul>
    <img class="loading" v-show="isshow" src="@/assets/img/loading.gif" alt="">
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isshow:false,
      flag:true,
      num: 0,
      movielist: []
    };
  },
  created() {
    this.getMovie(0);
  },
  methods:{
    getMovie(num) {
      this.isshow=true;
      if(this.flag){
      this.flag=false;
      axios.get(
          "https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=" +
            num +
            "&count=10"
        // './data/movie'+num+'.json'
        ).then(res => {
          var movielist2 = new Array();
          movielist2 = res.data.subjects;
          this.movielist = [...this.movielist, ...movielist2];
          console.log(res.data);
          this.num+=10;
          this.flag=true;
          this.isshow=false;
        })
        .catch(res => {
          console.log(res);
        });
      }
    },
    godetails(id){
      this.$router.push({path:'/details',query:{id:id}})
    }
  },
  mounted() {
    window.onscroll = () => {
      var scrollTop =document.documentElement.scrollTop || document.body.scrollTop;//滚动条距离顶部的高度
      var clientHeight =document.documentElement.clientHeight || document.body.clientHeight;//页面可视高度
      var scrollHeight =document.documentElement.scrollHeight || document.body.scrollHeight;//文档总高度
      if (scrollHeight == Math.ceil(scrollTop) + clientHeight) {
        this.getMovie(this.num);
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.movie-box{
    padding: 0.2rem;
    .movielist{
        display: flex;
        img{
            width:2rem;
            margin-right:0.2rem;
        }
        margin-bottom:0.2rem;
        border-bottom: 1px solid #000;
    }
}
.loading{
    width:1.5rem;
    position: fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}
</style>