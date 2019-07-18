<template>
  <div class="container">
    <header class="header">
      <van-nav-bar
        title="购物车"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />

    </header>
    <div class="content">
      <van-card
        num="1"
        price="128.00"
        desc="继《追风筝的人》《外婆的道歉信》之后，又一部探究爱与人性的温暖之作"  
        title="不存在的女儿"
        thumb="http://img3m0.ddimg.cn/91/14/27874630-1_b_2.jpg"
      >
        <!-- <div slot="tags">
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </div> -->
        <div slot="footer">
          <van-button size="mini">数量 +</van-button>
          <van-button size="mini">数量 -</van-button>
        </div>
      </van-card>

      <van-card
        num="1"
        price="180.00"
        desc="科幻三巨头阿瑟·克拉克被公认的至高杰作！"  
        title="太空漫游"
        thumb="http://img3m1.ddimg.cn/63/29/27872721-1_b_3.jpg"
      >
        <!-- <div slot="tags">
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </div> -->
        <div slot="footer">
          <van-button size="mini">数量 +</van-button>
          <van-button size="mini">数量 -</van-button>
        </div>
      </van-card>

    </div>



    <van-submit-bar
      :price="30800"
      button-text="提交订单"
      @submit="onSubmit"
      
    >
      <van-checkbox v-model="checked" @click="ckqx">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import { SubmitBar,Card,NavBar,Icon } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Card);
Vue.use(SubmitBar);
Vue.use(Checkbox).use(CheckboxGroup);
export default {
    data() {
    return {
      checked: true
    };
  },
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

  },
  methods:{
    onClickLeft(){

    },
    onSubmit(){

    },
    ckqx(){
      // this.checked=!this.checked;
      console.log(this.checked)
    }

  }
}
</script>

<style lang="scss">

</style>
