<template>
  <div class="my-table">
    <el-table
      :data="showPage ? dataList.items : dataList"
      v-bind="$attrs"
      element-loading-text="Loading"
      highlight-current-row
      border
      fit
      v-on="$listeners">
      <slot></slot>
    </el-table>
    <div
      v-if="showPage"
      :class="`flex-box space-${pageAlign}`">
      <el-pagination
        :current-page="currentPage || 1"
        :page-sizes="pageSizeS"
        :page-size="size"
        :layout="pageLayout"
        :total="dataList.count"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    dataList: {
      type: [Object, Array],
      default: () => {}
    },
    pageAlign: {
      type: String,
      default: 'center'
    },
    pageSizeS: {
      type: Array,
      default: () => [2, 3, 4, 5]
    },
    pageLayout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    showPage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      size: this.pageSizeS[0],
      currentPage: 1
    }
  },
  computed: {
    list() {
      return this.showPage ? this.dataList.items : this.dataList
    }
  },
  watch: {
    'list.length'(len) {
      if (this.showPage && !len && this.currentPage !== 1) {
        this.handleCurrentChange(this.currentPage - 1)
      }
    }
  },
  methods: {
    handleSizeChange(size) {
      this.size = size
      this.$emit('request', { size, page: 1 })
    },
    handleCurrentChange(page) {
      this.currentPage = page
      this.$emit('request', { page })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
