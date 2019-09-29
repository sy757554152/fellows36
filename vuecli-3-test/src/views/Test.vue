<template>
  <div>
      count的值是：{{count}}
      num的值是：{{$store.state.num}}
      sum的值是：{{sum}}
    test
    {{$route.params.id}}
    {{$route.params.name}}
    {{$store.state.count}}
    <button @click="add(5)">add</button>
    <button @click="reduce()">reduce</button>
    <button @click="addAction()">异步add</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
export default {
  // 计算属性
  computed:{ ...mapState(["count"]),
  ...mapGetters(['sum'])},

  methods: {...mapMutations(["add", "reduce"]),
  ...mapActions(['addAction'])}
};
</script>
<style lang="scss" scoped>
</style>