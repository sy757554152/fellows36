<template>
    <v-touch class="picturedetails" v-on:swipeleft="left()">
        
        <img :src="'/img/photo/'+$store.state.id+'.jpg'" alt="" @click="goreturn()">
    </v-touch>
</template>

<script>
    import Vue from 'vue' 
    import VueTouch from 'vue-touch'
    Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        components:{
        },
        data(){
            return{
                pictureList:[],
            }
        },
        beforeMount(){
            this.$store.state.id=this.$route.query.index*1+1
        },
        methods:{
            goreturn(){
                this.$router.push({path:'/picture'});
            },
            left(){
                if(this.$store.state.id==24){
                    this.$store.state.id=0;
                }
                this.$store.state.id++;
                
            }
        }
    }

</script>

<style lang="scss" scoped>
    .picturedetails{
        position: absolute;
        top: 1rem;
        right: 0;
        bottom: 0;
        left: 0;
        background: #000;
        img{
            width: 100%;
            margin-top: 2.5rem;
        }
    }
</style>