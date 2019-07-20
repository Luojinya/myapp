<template>
    <ul class="goodlist1">
       <li class="proitem" v-for="(item, index) of goodlist1" :key="index" @click="goDetail10(item.goods_id)">
        <img :src="item.src">
        <p>{{ item.short_name }}</p>
       </li>
    </ul>
</template>

<script>
export default {
  props: {
    goodlist1: Array
  },
  methods: {
    goDetail10 (id) {
      this.$router.push({ path: '/detail/' + id })
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
  .goodlist1{
    background: #fff;
    @include flexbox();
    @include justify-content($justify-content:space-around);
    @include align-items();
    flex-flow: row wrap;
    li{
      width:20%;
      text-align: center;
      margin-top:0.1rem;
      img{
        width:100%;
      }
       p{
        width:100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        }
    }
  }
</style>
