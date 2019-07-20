<template>
<div class="headerview">
         <div class="rl">
              <div class="cycle"></div>
              <p id="text">hahahh</p>
           </div>
      </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.loginState === 'ok') {
        let text = document.getElementById('text')
        let name = localStorage.getItem('username')
        text.innerHTML = name.replace(name.substring(3, 8), '****')
        next()
      } else {
        next('/user/nologin')
      }
    })
  }
}
</script>
<style lang="scss">
 .cycle {
     width:0.6rem;
     height:0.6rem;
     border:1px solid #efefef;
     border-radius: 50%;
     position: absolute;
     left:0;
     right:0;
     bottom:0;
     top:0;
     margin:auto;
 }
 .rl{
     p{
         padding-top:.5rem;
     };
 }
</style>
