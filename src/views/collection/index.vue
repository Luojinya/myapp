<template>
  <div class="container">
    <header class="header">
      <div class="header_left">
        <span class="iconfont icon-left" @click="back"></span>
      </div>
      <div class="header_middle">我的收藏</div>
      <div class="header_right">
        <span class="iconfont icon-menu"></span>
      </div>
    </header>
    <div class="content">
      <img src="http://img4.imgtn.bdimg.com/it/u=3604256700,3353094332&fm=26&gp=0.jpg" alt="" class="img1">
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.back()
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.loginState === 'ok') {
        next('/collection')
      } else {
        next('/login')
      }
    })
  }
}
</script>
<style lang="scss" scoped>
 img{
   width:100%;
 }
</style>
