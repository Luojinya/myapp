<template>
  <div class="container">
    <header class="header">
      <div class="header_left">
        <span class="iconfont icon-left" @click="back"></span>
      </div>
      <div class="header_middle">关注的店铺</div>
      <div class="header_right">
        <span class="iconfont icon-menu"></span>
      </div>
    </header>
    <div class="content">
      <img src="http://img2.imgtn.bdimg.com/it/u=484749994,4018774976&fm=26&gp=0.jpg" alt="" class="img1">
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
        next()
      } else {
        next('/login')
      }
    })
  }
}
</script>
<style lang="scss" scoped>
 .img1{
   width:100%;
   height:100%;
 }
</style>
