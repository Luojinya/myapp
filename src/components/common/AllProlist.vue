<template>
    <ul class="allgoodlist">
        <li v-for="item of allgoodlist.literature" :key="item.id" @click="goDetail1(item.goods_id)">
          <img :src="item.src">
          <p>{{ item.short_name }}</p>
        </li>
        <li v-for="item1 of allgoodlist.E_book" :key="item1.id" @click="goDetail2(item1.goods_id)">
          <img :src="item1.src">
          <p>{{ item1.short_name }}</p>
        </li>
        <li v-for="item2 of allgoodlist.Parent_child_tutoring" :key="item2.id" @click="goDetail3(item2.goods_id)">
          <img :src="item2.src">
          <p>{{ item2.short_name }}</p>
        </li>
        <li v-for="item3 of allgoodlist.socialscience" :key="item3.id" @click="goDetail4(item3.goods_id)">
          <img :src="item3.src">
          <p>{{ item3.short_name }}</p>
        </li>
        <li v-for="item9 of allgoodlist.education" :key="item9.id" @click="goDetail5(item9.goods_id)">
          <img :src="item9.src">
          <p>{{ item9.short_name }}</p>
        </li>
        <li v-for="item4 of allgoodlist.Examination_Books" :key="item4.id" @click="goDetail6(item4.goods_id)">
          <img :src="item4.src">
          <p>{{ item4.short_name }}</p>
        </li>
        <li v-for="item5 of allgoodlist.Economic_management" :key="item5.id" @click="goDetail7(item5.goods_id)">
          <img :src="item5.src">
          <p>{{ item5.short_name }}</p>
        </li>
        <li v-for="item6 of allgoodlist.Science_and_Technology_Books" :key="item6.id" @click="goDetail8(item6.goods_id)">
          <img :src="item6.src">
          <p>{{ item6.short_name }}</p>
        </li>
    </ul>
</template>
<script>
export default {
  props: {
    allgoodlist: Object
  },
  methods: {
    goDetail1 (id) {
      this.$router.push({ path: '/detail/' + id })
    },
    goDetail2 (id) {
      this.$router.push({ path: '/detail/' + id })
    },
    goDetail3 (id) {
      this.$router.push({ path: '/detail/' + id })
    },
    goDetail4 (id) {
      this.$router.push({ path: '/detail/' + id })
    },
    goDetail5 (id) {
      this.$router.push({ path: '/detail/' + id })
    },
    goDetail6 (id) {
      this.$router.push({ path: '/detail/' + id })
    },
    goDetail7 (id) {
      this.$router.push({ path: '/detail/' + id })
    },
    goDetail8 (id) {
      this.$router.push({ path: '/detail/' + id })
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
   .allgoodlist{
        width:100%;
        background: #fff;
        // @include flexbox();
        // @include justify-content($justify-content:space-around);
        // @include align-items();
        // flex-flow: row wrap;
       li{
        float:left;
        width:49%;
        border:1px solid #efefef;
        p{
        text-align: center;
        width:100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        }
        img{
            width:100%;
        }
       }
   }
</style>
