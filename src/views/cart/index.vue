<template>
  <div class="container">
    <header class="cartheader">
      <van-nav-bar
        title="购物车"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <div class="content">
    <van-checkbox-group class="card-goods" v-model="checkedGoods" v-show="goods.length!==0">
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
        <div class="delet">
          <button @click= "delet(item.id)">删除</button>
        </div>

      </van-checkbox>
    </van-checkbox-group>
    <div class="carnil" v-show="goods.length === 0">
      <img src="http://img3.imgtn.bdimg.com/it/u=1864153355,1186988212&fm=26&gp=0.jpg" alt="">
      <span>购物车空空如也……</span><br/>
      <van-button class="btn" type="default" size="small" @click="gogo">再去逛逛</van-button>
      <van-button class="btn" type="default" size="small" @click="like">进入收藏</van-button>
    </div>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    >
    <van-checkbox class="chebox" v-model="checked" @click="ckbox">全选</van-checkbox>
    </van-submit-bar>
  </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { SubmitBar, Card, NavBar, Icon } from 'vant'
import { Checkbox, CheckboxGroup, Toast } from 'vant'
import { Button } from 'vant'
Vue.use(Button)
Vue.use(Icon)
Vue.use(NavBar)
Vue.use(Card)
Vue.use(SubmitBar)
Vue.use(Checkbox).use(CheckboxGroup)
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data () {
    return {
      loging: false,
      checked: true,
      checkedGoods: [],
      checkmax: [],
      checkmin: [],
      goods: ['123A'],
      datas: '',
      username: '',
      goodss: [{
        id: '14',
        title: '《笔尖上的清宫苑》',
        desc: '一秒梦回大清，揭开深宫秘密！',
        price: 2000,
        num: 1,
        thumb: 'http://img3m5.ddimg.cn/35/8/27878435-1_b_5.jpg'
      }, {
        id: '21',
        title: '李清照，前半生比林徽因美满',
        desc: '你若安好 便是晴天',
        price: 5000,
        num: 2,
        thumb: 'http://img3m5.ddimg.cn/28/1/27874765-1_b_2.jpg'
      }, {
        id: '32',
        title: '《杨绛传》',
        desc: '民国女子 : 她们谋生亦谋爱',
        price: 4000,
        num: 2,
        thumb: 'http://img3m6.ddimg.cn/28/31/27872686-1_b_3.jpg'
      }]
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const {$store: {state: { loginState } } } = vm
      if (loginState === 'ok') {
        next()
      }else{
        next('/login')
      }
    })
  },
  computed: {
    submitBarText () {
      const count = this.checkedGoods.length;
      if (count === this.checkmax.length) {
        this.checked = true
      } else {
        this.checked = false
      }
      return '结算' + (count ? `(${count})` : '')
    },
    totalPrice () {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price*item.num : 0), 0)
    }
  },
  mounted () {
    fetch('http://10.11.56.121:3000/124').then(res=>res.json()).then(data=>{this.datas=data })
    this.ljy()

    if (this.goods.length === 0) {
      this.checked = false
    }
  },
  methods:{
    delet(id,e){
      var e=e||window.event
      e.stopPropagation()
      // e.cancelBubble = true;
      console.log(id)
    },
    onClickLeft () {
      this.$router.back()
    },
    onSubmit () {

    },
    ckbox () {
      // this.checked=!this.checked;
     // console.log(this.checked)
      if (!this.checked) {
        this.checkedGoods = this.checkmax
      } else {
        this.checkedGoods = this.checkmin
      }
    },
    formatPrice (price) {
      return (price / 100).toFixed(2);
    },

    onSubmit () {
      Toast('结算系统升级中……敬请期待！');
    },
    gogo () {
      this.$router.push('/home')
    },
    like () {
      this.$router.push('/kind')
    }, 
    ljy () {
      this.username = localStorage.getItem('username')
    fetch('http://10.11.56.121:3000/128?username=' + this.username).then(res => res.json()).then(data => {
      const {$store: {state: { loginState } } } = this
      if (loginState === "ok" && data.length !== 0  ) {
        let arrs = [],goodt = [],goodobj = {},arrid = []
        this.goods = []
        for (let i = 0; i < data.length; i++) {
          // 商品数量
            goodobj.num = data[i].num
          // ===找商品具体数据===
          //商品ID
            var spid = data[i].id
            arrs.push(String(spid))
          if (!this.datas[0]) {
              this.ljy()
              return false
          }
            console.log(this.datas[0])
            var info = this.datas[0].data
            var bk = false
            // 获取所有数据的类型名
            for (var key in info) {
              if (info[key].length > 5) {
                for (let j = 0; j < info[key].length; j++) {
                  // 找到对应商品
                  if (info[key][j].goods_id === spid) {
                    // 对应商品ID
                    goodobj.id = String(spid)
                    // 商品标题
                    goodobj.title = info[key][j].short_name.slice(0, 4)
                    // 商品描述
                    goodobj.desc = info[key][j].goods_name.slice(0, 8)
                    // 商品价格
                    goodobj.price = info[key][j].group_price * 100
                    // 商品链接
                    goodobj.thumb = info[key][j].src
                    // 加入数组
                    this.goods.push(goodobj)
                    goodobj = {}
                    bk = true
                  }
                  if (bk) {
                    break
                  }
                }
              }
              if (bk) {
                break
              }
            }
          }
          this.checkedGoods = this.checkmax = arrs
        }
      })
    }
  }
}
</script>
<style lang="scss">
.chebox{
  margin-left: 10px;
}
.card-goods {
  // padding: 10px 0;
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
    .delet{
      position: absolute;
      bottom: 10px;
      right:10px;
      font-size:12px;
      
      button{
        padding:0 8px;
        border:1px solid #dfdfdf;
        background-color: #fff;
        // background-color: red;
        // border-radius: 2px;
      }
    }
  }
}
.carnil{
  position: relative;
  top:-22px;
  height: 120%;
  background-color: #f6f6f6;
  text-align: center;
  img{
    width:100%
  }
  span{
    width:100%;
    color:#999;
  }
  .btn{
    margin:5px 15px;
    border-radius: 5px;
  }
}
</style>
