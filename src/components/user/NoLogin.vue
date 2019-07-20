<template>
  <div class="headerview">
         <div class="rl">
            <span @click="login">登陆/注册</span>
           </div>
      </div>
</template>
<script>
export default {
  methods: {
    login () {
      this.$router.push('/login')
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.loginState === 'ok') {
        next('/user/login')
      } else {
        next()
      }
    })
  }
}
</script>
