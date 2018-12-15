<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  created() {
    this.initUser()
  },
  methods: {
    ...mapActions({
      'initUser': 'initUser'
    })
  }
}
</script>
