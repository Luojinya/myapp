<template>
    <ul class="prolist3">
        <li class="proitem" v-for="(item, index) of prolist3" :key="index" @click="goDetail12(item.goods_id)">
        <img :src="item.src">
        <p>{{ item.short_name }}</p>
       </li>
    </ul>
</template>
<script>
export default {
  props: {
    prolist3: Array
  },
  methods: {
    goDetail12 (id) {
      this.$router.push({ path: '/detail/' + id })
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.prolist3{
  background: #fff;
    width:100%;
    height:100%;
    @include flexbox();
    @include justify-content($justify-content:space-around);
    @include align-items();
    flex-flow: row wrap;
    li{
        width:30%;
        border:1px solid #efefef;
        margin-top:0.18rem;
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
