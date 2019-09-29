import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state 存储状态
  state: {
    count:0,
    num:2
  },
  // mutations 修改状态
  mutations: {
    add(state,num){
      state.count+=num;
    },
    reduce(state){
      state.count--;
    }
  },
  getters:{
    sum(state){
        return state.count*state.num;
    }
  },
  //actions 异步操作
  actions: {
    addAction({commit}){
      setTimeout(()=>{
        commit('add',100);
        //最终还是需要调用mutations内的方法进行修改
      },1000)
    }
  }
})
