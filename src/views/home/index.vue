<template>
  <div class="container">
    <header class="header">
      <div class="header_left">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563795668&di=d8495ee7b9f86f95592890522278183d&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn6.haitou.cc%2Fbrand%2Flogo%2F81%2F34181.png" alt="">
      </div>
      <div class="header_middle">
        <input type="text" @click="serarch">
      </div>
      <div class="header_right">
       <span class = "iconfont icon-fenlei"></span>
      </div>
    </header>
    <div class="content" v-if=!tag>

    </div>
    <div class="content" v-if=tag>
      <div class="banner">
         <van-swipe :autoplay="3000" indicator-color="white" class="bannerbox">
         <van-swipe-item>
           <img src="http://img60.ddimg.cn/upload_img/00803/1/1242x366_lyx_0709-1562920620.jpg">
         </van-swipe-item>
         <van-swipe-item>
           <img src="http://img62.ddimg.cn/upload_img/00678/zsts/1242-366_3-1563156988.jpg">
         </van-swipe-item>
         <van-swipe-item>
           <img src="http://img55.ddimg.cn/216110046839445_y.jpg">
         </van-swipe-item>
         <van-swipe-item>
           <img src="http://img51.ddimg.cn/209270064665671_y.jpg">
         </van-swipe-item>
       </van-swipe>
      </div>
       <div class="kind">
         <ul>
           <li @click="change">
             <img src="http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png" alt="">
           </li>
           <li @click="change">
             <img src="http://img61.ddimg.cn/upload_img/00796/1/xinshu-1563173497.png" alt="">
           </li>
           <li @click="change">
             <img src="http://img62.ddimg.cn/upload_img/00702/B/SY-iCON-3-5.10-1557488951.png" alt="">
           </li>
           <li @click="change">
             <img src="http://img60.ddimg.cn/upload_img/00702/T/icon-cx-1559818801.png" alt="">
           </li>
           <li @click="change">
             <img src="http://img62.ddimg.cn/upload_img/00705/B/icon-5.28-1559032809.png" alt="">
           </li>
         </ul>
       </div>
       <div class="brand">
         <div class="imgbox">
           <img src="http://img61.ddimg.cn/upload_img/00528/000000/biaoti-101-1523330132.jpg" alt="">
         </div>
           <van-swipe :autoplay="3000" indicator-color="white" class="brand_body">
         <van-swipe-item>
            <div class="todayBrand">
              <van-list
                  v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad"
                >
                 <Prolist1 :goodlist1 = "goodlist1"/>
                </van-list>
            </div>
         </van-swipe-item>
         <van-swipe-item>
             <div class="todayBrand">
               <van-list
                  v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad"
                >
                 <Prolist :prolist = "prolist"/>
                </van-list>
             </div>
         </van-swipe-item>
         <van-swipe-item>
             <div class="todayBrand">
              <van-list
                  v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad"
                >
                 <Prolist2 :goodlist3 = "goodlist3"/>
                </van-list>
             </div>
         </van-swipe-item>
       </van-swipe>
       </div>
       <div class="banner">
         <img src="http://img61.ddimg.cn/upload_img/00670/qd/d33333333333-1562817010.jpg" alt="">
       </div>
       <div class="shop">
         <img src="http://img61.ddimg.cn/upload_img/00705/yhj/tslc-bt.jpg" alt="" class="imgc">
         <Prolist3 :prolist3 = "prolist3"></Prolist3>
       </div>
       <div class="love">
         <p><span class="iconfont icon-smile"></span>根据您的喜好，给您的推荐</p>
       </div>
       <div class="recommend">
          <AllProlist :allgoodlist = "allgoodlist"/>
       </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import { Swipe, SwipeItem, List, PullRefresh, Icon } from 'vant'
import Prolist from '@/components/common/Prolist'
import Prolist1 from '@/components/common/Prolist1'
import Prolist2 from '@/components/common/Prolist2'
import Prolist3 from '@/components/common/Prolist3'
import AllProlist from '@/components/common/AllProlist'

Vue.use(Swipe).use(SwipeItem)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Icon)
export default {
  data () {
    return {
      navlistt: [],
      goodlist1: [],
      prolist: [],
      goodlist3: [],
      prolist3: [],
      loading: false,
      finished: false,
      allgoodlist: {},
      tag: true
    }
  },
  components: {
    Prolist,
    Prolist1,
    Prolist2,
    Prolist3,
    AllProlist
  },
  methods: {
    change () {
      this.$router.push('/kind')
    },
    onLoad () {

    },
    serarch () {
      this.tag = !this.tag
    }
  },
  mounted () {
    fetch('http://10.11.56.121:3000/124').then(res => res.json()).then(data => {
      // console.log(data[0].data)
      this.allgoodlist = data[0].data
      this.goodlist1 = data[0].data.literature
      this.prolist = data[0].data.Children_Books
      this.goodlist3 = data[0].data.socialscience
      this.prolist3 = data[0].data.socialscience
      // console.log(this.goodlist1, this.goodlist2, this.goodlist3)
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.banner{
  margin-top:10px;
  height:1.5rem;
}
.header_left{
  height:100%;
  width:20%;
  img{
    width:60%;
  }
}
.header_middle{
  height:100%;
  width:60%;
  line-height: 50px;
      input{
         width:100%;
         height:80%;
         border: 1px solid #efefef;
         border-radius: 20px;
         text-indent: 20px;
      }
}
.header_right{
  height:100%;
  width:20%;
  text-align:center;
  line-height: 50px;
  span {
          @include font-size(24px);
          margin-left:10px;
        }
        p {
          @include font-size(12px);
        }

}
.bannerbox{
   height:100%;
}
.van-swipe {
  height: 1.5rem;
  img {
    width: 100%;
    height:100%;
  }
}
.kind{
   @include rect(100%, 0.8rem);
   ul{
     @include flexbox();
     @include justify-content($justify-content:space-around);
     @include align-items();
     li{
       img{
         width:100%;
         height:80%;
       }
     }
   }
}
.brand{
  height:2.6rem;
}
.brand_body{
  height:74%;
}
.imgbox{
  img{
    width:100%;
  }
}
.banner{
  img{
    width:100%;
  }
}
.shop{
  height:4.4rem;
  overflow: hidden;
  .imgc{
    width:100%;
  }
}
.love{
  text-align: center;
  background: #efefef;
}
</style>
