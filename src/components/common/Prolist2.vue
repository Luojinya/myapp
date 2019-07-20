<template>
    <ul class="goodlist3">
       <li class="proitem" v-for="(item, index) of goodlist3" :key="index" @click="goDetail11(item.goods_id)">
        <img :src="item.src">
        <p>{{ item.short_name }}</p>
       </li>
    </ul>
</template>

<script>
export default {
  props: {
    goodlist3: Array
  },
  methods: {
    goDetail11 (id) {
      this.$router.push({ path: '/detail/' + id })
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
  .goodlist3{
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
