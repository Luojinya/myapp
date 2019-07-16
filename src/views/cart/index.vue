<template>
  <div class="container">
    <header class="header">购物车头部</header>
    <div class="content">购物车内容</div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to,from,next){
    next(vm=>{
      const {$store: {state: { loginState } } } =vm
      if(loginState === "ok"){
        next()
      }else{
        next('/login')
      }
    })
  },
  mounted(){
    fetch('http://10.11.56.121:3000/124').then(res=>res.json()).then(data=>{
      console.log("luoinfo:" + data[0].data.literature[0].details)
    })

  }
}
</script>

<style lang="scss">

</style>
