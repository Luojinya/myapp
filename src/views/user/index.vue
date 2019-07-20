<template>
  <div class="container">
    <header class="header">
      <div class="left">
        <span class="iconfont icon-left" @click="back"></span>
      </div>
      <div class="middle">我的当当</div>
      <div class="right">
      <span class="iconfont icon-menu"></span>
    </div>
    </header>
    <div class="content">
      <div class="headerview" v-if = !tag>
         <div class="rl">
            <span @click="login">登陆/注册</span>
           </div>
      </div>
      <div class="headerview" v-if = tag>
         <div class="rl">
              <div class="cycle"></div>
              <p id="text">{{ name }}</p>
           </div>
      </div>
      <div class="nav">
         <ul>
           <li @click = "collectiongoods" to="/collection">
              <p>0</p>
              <span>收藏的所有商品</span>
           </li>
           <i></i>
           <li @click = "collectionshop" to="/collectionshop">
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
      <div class="Order">
        <div class="Order_right">
          <img src="http://img63.ddimg.cn/upload_img/00487/11111/wd-012-1.png" alt="">
          <span>我的订单</span>
        </div>
        <div class="Order_left">
            <span>查看全部购买商品</span><span class="iconfont icon-right"></span>
        </div>
      </div>
      <div class="power">
        <ul>
          <li>
            <img src="http://img60.ddimg.cn/upload_img/00487/11111/fukuan-07.png" alt="">
            <p>待付款</p>
          </li>
          <li>
            <img src="http://img63.ddimg.cn/upload_img/00487/11111/shouhuo-07.png" alt="">
            <p>待收货</p>
          </li>
          <li>
            <img src="http://img61.ddimg.cn/upload_img/00555/touch/pd-return.png" alt="">
            <p>退换货</p>
          </li>
        </ul>
      </div>
      <div class="vip">
        <div class="vip_left">
          <img src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png" alt="">
          <span>会员中心</span>
        </div>
        <div class="vip_right">
          <span class="iconfont icon-right"></span>
        </div>
      </div>
      <div class="function">
        <ul>
          <li>
            <div class="li_right">
             <img src="http://img62.ddimg.cn/upload_img/00487/11111/wd-012-02.png" alt="">
             <span>我的礼卷</span>
            </div>
            <div class="li_left">
              <span class="iconfont icon-right"></span>
            </div>
          </li>
          <li>
            <div class="li_right">
              <img src="http://img60.ddimg.cn/upload_img/00487/11111/wd-012-03.png" alt="">
              <span>积分抵现</span>
            </div>
            <div class="li_left">
              <span class="iconfont icon-right"></span>
            </div>
          </li>
          <li>
            <div class="li_right">
              <img src="http://img62.ddimg.cn/upload_img/00528/1234/111.png" alt="">
              <span>我的电子书</span>
            </div>
            <div class="li_left">
             <span class="iconfont icon-right"></span>
            </div>
          </li>
          <li>
            <div class="li_right">
              <img src="http://img61.ddimg.cn/upload_img/00487/11111/wd-012-04.png" alt="">
              <span>我的礼品卡</span>
            </div>
            <div class="li_left">
              <span class="iconfont icon-right"></span>
            </div>
          </li>
          <li>
            <div class="li_right">
               <img src="http://img63.ddimg.cn/upload_img/00487/11111/wd-012-05.png" alt="">
               <span>收货地址</span>
            </div>
            <div class="li_left">
              <span class="iconfont icon-right"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tag: false,
      name: ''
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    login () {
      this.$router.push('/login')
    },
    collectiongoods () {
      console.log(1)
      this.$router.push('/collection')
    },
    collectionshop () {
      console.log(2)
      this.$router.push('/collectionshop')
    }
    // change () {
    //    let text = document.getElementById('text')
    //    console.log(text)
    //    let name = localStorage.getItem('username')
    //    text.innerHTML = name.replace(name.substring(3, 8), '****')
    // }
  },
  beforeRouteEnter (to, from, next) {
    // if (to.name === 'user') {
    //   if (localStorage.getItem('isLogin') === 'ok') {
    //     next('/user/login')
    //   } else {
    //     next('/user/nologin')
    //   }
    // } else {
    //   next()
    // }
    next(vm => {
      if (to.name === 'user') {
        if (vm.$store.state.loginState === 'ok') {
          vm.tag = true
          let name1 = localStorage.getItem('username')
          vm.name = name1.replace(name1.substring(3, 8), '****')
          // vm.$router.replace('/user/login')
        } else {
          // vm.$router.replace('/user/nologin')
          vm.tag = false
        }
      } else {
        next()
      }
    })
  }
  // watch: {
  //   $route (newVal, oldVal) {
  //     if (newVal.name === 'user') {
  //       if (localStorage.getItem('isLogin') === 'ok') {
  //         this.$router.push('/user/login')
  //       } else {
  //         this.$router.push('/user/nologin')
  //       }
  //     }
  //   }
  // }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.content{
  background:#efefef;
}
.headerview{
  background: #fff;
  height:1.5rem;
  background-image: url('http://img61.ddimg.cn/upload_img/00610/home/user-bg.jpg');
  background-size:100% 100%;
  line-height: 1.5rem;
  .rl{
    width: 100%;
    height:100%;
    color: #fff;
    text-align: center;
    position: relative;
    span{
      position: absolute;
      width:0.8rem;
      height:0.4rem;
      left:0;
      right:0;
      bottom:0;
      top:0;
      margin:auto;
      border:1px solid #fff;
      border-radius:0.2rem;
      line-height: 0.4rem;
    }
  }
}
.nav{
  background: #fff;
  ul{
    @include flexbox();
    @include justify-content($justify-content:space-around);
    @include align-items();
    font-size:12px;
    height:0.6rem;
    border-bottom:1px solid #efefef;
    i{
      width:1px;
      height:0.4rem;
      background:#efefef;
    }
    li{
      width:33%;
      text-align: center;
    }
  }
}
.Order{
  background: #fff;
  @include flexbox();
    @include justify-content($justify-content:space-between);
    @include align-items();
    height:0.5rem;
    font-size:12px;
    line-height: 0.3rem;
    border:1px solid #efefef;
    img{
      width:20%;
      margin-right:3px;
      margin-left:5px;
      vertical-align: middle;
    }
    .Order_right{
      height:100%;
       line-height: 0.5rem;
       margin-left:10px;
    }
    .Order_left{
      margin-right:10px;
    }
}
.power{
  background: #fff;
  ul{
     @include flexbox();
    @include justify-content($justify-content:space-around);
    @include align-items();
    font-size:12px;
    padding-top:5px;
    li{
      text-align: center;
      img{
        width:50%;
      }
    }
  }
}
.vip{
  background: #fff;
  margin-top: 10px;
   @include flexbox();
    @include justify-content($justify-content:space-between);
    @include align-items();
    font-size:12px;
    height:0.5rem;
    .vip_left{
      line-height: 0.5rem;
      margin-left:10px;
      img{
        width:10%;
        margin-right:4px;
      }
    }
    .vip_right{
      line-height: 0.5rem;
      margin-right:10px;
    }
}
.function{
  margin-top:10px;
  background:#fff;
  ul{
    li{
      border-bottom:1px solid #efefef;
       @include flexbox();
       @include justify-content($justify-content:space-between);
       @include align-items();
       font-size:12px;
       height:0.4rem;
       .li_right{
         width:1.2rem;
       }
       .li_left{
         margin-right:10px;
       }
       img{
         width:20%;
         margin-left:10px;
         margin-right:5px;
       }
    }
  }
}
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
        width:100%;
        height:0.2rem;
        line-height:0.2rem;
        padding-top:1.2rem;
     };
 }
</style>
