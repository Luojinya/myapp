<template>
  <div>
    <header class="header">
      <van-nav-bar
        title="购物车"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>

    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"
      >
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />

      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    >
    <van-checkbox class="chebox" v-model="checked" @click="ckbox">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>


<script>
import Vue from 'vue'
import { SubmitBar,Card,NavBar,Icon } from 'vant';
import { Checkbox, CheckboxGroup,Toast } from 'vant';
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Card);
Vue.use(SubmitBar);
Vue.use(Checkbox).use(CheckboxGroup);
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
    data() {
    return {
      checked: true,
      checkedGoods: ['1', '2', '3'],
      checkmax: ['1', '2', '3'],
      checkmin:[],
      goods: [{
        id: '1',
        title: '《笔尖上的清宫苑》',
        desc: '一秒梦回大清，揭开深宫秘密！',
        price: 2000,
        num: 1,
        thumb: 'http://img3m5.ddimg.cn/35/8/27878435-1_b_5.jpg'
      }, {
        id: '2',
        title: '李清照，前半生比林徽因美满',
        desc: '你若安好 便是晴天',
        price: 5000,
        num: 2,
        thumb: 'http://img3m5.ddimg.cn/28/1/27874765-1_b_2.jpg'
      }, {
        id: '3',
        title: '《杨绛传》',
        desc: '民国女子 : 她们谋生亦谋爱',
        price: 4000,
        num: 2,
        thumb: 'http://img3m6.ddimg.cn/28/31/27872686-1_b_3.jpg'
      }]
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
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      if (count===this.checkmax.length){
        this.checked=true
      } else {
        this.checked=false
      }
      return '结算' + (count ? `(${count})` : '');
    },
    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price*item.num : 0), 0);
    }
  },
  mounted(){
    fetch('http://10.11.56.121:3000/124').then(res=>res.json()).then(data=>{
      console.log("luoinfo:" + data[0].data.literature[0].details)
    })
  },
  methods:{
    onClickLeft(){
      this.$router.back()
    },
    onSubmit(){

    },
    ckbox(){
      // this.checked=!this.checked;
     // console.log(this.checked)
      if(!this.checked){
        this.checkedGoods=this.checkmax
      }else{
        this.checkedGoods=this.checkmin
      }
    },
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },

    onSubmit() {
      Toast('点击结算');
    }

  }
}
</script>

<style lang="scss">
.chebox{
  margin-left: 10px;
}
.card-goods {
  padding: 10px 0;
  background-color: #fff;

  &__item {
    position: relative;
    background-color: #fafafa;

    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>
