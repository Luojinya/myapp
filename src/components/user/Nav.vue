<template>
     <div class="nav">
         <ul>
           <li v-on:click="collectiongoods()">
              <p>0</p>
              <span>收藏的所有商品</span>
           </li>
           <i></i>
           <li v-on:click="collectionshop()">
              <p>0</p>
              <span>关注的店铺</span>
           </li>
           <i></i>
           <li>
              <p>0</p>
              <span>我的足迹</span>
           </li>
         </ul>
      </div>
</template>
<script>
export default {
  methods: {
    collectiongoods () {
      console.log(1)
      this.$router.push('/collection')
    },
    collectionshop () {
      console.log(2)
      this.$router.push('/collectionshop')
    }
  }
}
</script>
