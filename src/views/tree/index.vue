<template>
  <div class="app-container">
    <!-- <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />

    <el-tree
      ref="tree2"
      :data="data2"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    /> -->
    <el-input v-model="params.username"></el-input>
    <el-input v-model="params.pwd"></el-input>
    <el-button @click="add">增加</el-button>
  </div>
</template>

<script>
import { addUserAPI } from '../../api/login'
export default {
  data() {
    return {
      params: {
        username: '',
        pwd: ''
      }
    }
  },
  methods: {
    add() {
      addUserAPI(this.params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

