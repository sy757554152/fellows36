import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:"0",
    title:'电影',
    color:"red"
  },
  mutations: {
    changename(state,[name,color]){
      state.title=name;
      state.color=color;
    }
  },
  actions: {
    
  }
})
