<template>
  <div class="app-container">
    <el-button @click="fetchData">请求</el-button>
    <my-table
      :show-page="true"
      :loading="listLoading"
      :data-list="list"
      @request="fetchData">
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="name">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="country" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.country }}</span>
        </template>
      </el-table-column>
      <el-table-column label="phone" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="110" align="right">
        <template slot-scope="scope">
          <el-button type="primary" @click="deleteUser(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
      <!-- <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column> -->
    </my-table>
  </div>
</template>

<script>
import { queryUserListAPI, deleteUserAPI } from '@/api/login'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: {
        count: 0,
        items: []
      },
      listLoading: true,
      params: {
        page: 1,
        size: 2
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(data) {
      this.listLoading = true
      this.params = Object.assign({}, this.params, data || {})
      queryUserListAPI(this.params).then(res => {
        this.list = res
        this.listLoading = false
      })
    },
    deleteUser(id) {
      deleteUserAPI(id).then(res => {
        this.fetchData()
      })
    }
  }
}
</script>
