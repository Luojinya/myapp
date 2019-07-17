<template>
  <div class="container">
    <header class="header hea1">
      <van-icon class="hea1_1" size="0.25rem" name="arrow-left" />
      <van-search class="ss" placeholder="搜索商品/店铺/种类" />
      <van-icon class="hea1_1" size="0.25rem" name="ellipsis" />
    </header>
    <div class="content">
      <div class="main0">
        <div>
          <van-sidebar v-model="activeKey" @change="getchange" >
            <van-sidebar-item title="图书" />
            <van-sidebar-item title="童书" />
            <van-sidebar-item title="电子书" />
            <van-sidebar-item title="网络文学" />
            <van-sidebar-item title="创意文学" />
          </van-sidebar>
        </div>
        <!-- 数据内容 -->
        <div>
          <div class="mg img1"><img :src="navherf[activeKey]" alt="广告图"></div>
            <van-grid :column-num="2" class="mg">
              <van-grid-item
                v-for="value in 2"
                gutter="10"
                :key="value"
                icon=""
                text="进入当当书城 >"
              />
            </van-grid>

          <van-grid :column-num="3" class="mg">
            <van-grid-item v-for="value in 6" :key="value" :icon= "imgs[value]" :text="infs[value]" @click="ckmg(ids[value])" />
          </van-grid>

          <div class="m0">
            <div class="m1">
              <span>小说 <van-icon name="arrow" /> </span> 
              <span>畅销榜<van-icon name="arrow" /> </span> 
            </div>
            <div class="m2">
              <ul class="m2_1">
                <li> <span>社会</span> </li>
                <li> <span>侦探/悬疑/推理</span> </li>
                <li> <span>情感</span> </li>
              </ul>
            </div>
            <div class="m2">
              <ul class="m2_1">
                <li> <span>世界名著</span> </li>
                <li> <span>历史</span> </li>
                <li> <span>情感</span> </li>
              </ul>
            </div>
            <div class="m2">
              <ul class="m2_1">
                <li> <span>言情</span> </li>
                <li> <span>科幻</span> </li>
                <li> <span>未解之谜</span> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
// import { NavBar } from 'vant'
import { Icon , Search ,Sidebar, SidebarItem, Grid, GridItem } from 'vant'
// Vue.use(NavBar )
Vue.use(Icon )
Vue.use(Search)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Grid).use(GridItem)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default {
  data() {
    return {
      activeKey: 0,
      navherf:[],
      infot:[],
      imgs:[],
      infs:[],
      ids:[]
    };
  },
  mounted(){
    fetch('http://10.11.56.121:3000/124').then(res=>res.json()).then(data=>{
      var info=data[0].data ,arr=[],arr1=[],arr2=[],arrid=[]
      for(var key in info){
        if (info[key].length>5){
          arr2.push(key)
        }
      }
      var infr=info[arr2[this.activeKey]]
      for(var i=0;i<infr.length;i++){
        arr.push(infr[i].src)
        arrid.push(infr[i].goods_id)
        let s=infr[i].short_name
        if(s.length>=4){
          s = s.slice(0,3)+"..."
        }
        arr1.push(s)
      }
      this.imgs=arr
      this.infs=arr1
      this.infot=arr2
      this.ids=arrid
    })

    this.navherf=[
      "http://img62.ddimg.cn/ddreader/dangebook/7ysd-886x315.jpg",
     " http://img61.ddimg.cn/upload_img/00796/1/886-315-1563159506.jpg",
      "http://img62.ddimg.cn/upload_img/00785/ts0711_0722/886-315-1562725432.jpg",
      "http://img63.ddimg.cn/ddreader/1111/lixiangguo886-315.jpg",
      "http://img63.ddimg.cn/ww/9/10/ddflxm531.jpg",
      "http://img52.ddimg.cn/117110046750112_y.jpg"
    ]
  },
  methods:{
    getchange(){
      fetch('http://10.11.56.121:3000/124').then(res=>res.json()).then(data=>{
        var info=data[0].data ,arr=[],arr1=[],arr2=[],arrid=[]
        for(var key in info){
          if (info[key].length>5){
            arr2.push(key)
          }
        }
        var infr=info[arr2[this.activeKey]]
        for(var i=0;i<infr.length;i++){
          arr.push(infr[i].src)
          arrid.push(infr[i].goods_id)
          let s=infr[i].short_name
          if(s.length>=4){
            s = s.slice(0,3)+"..."
          }
          arr1.push(s)
        }

        //随机获得6个不重复的数字
        var tab=[]
        while(true){
          var num=getRandomInt(0,infr.length-1)
          if(tab.indexOf(num) === -1){
            tab.push(num)
          }
          if(tab.length===7){break}
        }
        let ar0=[],ar1=[],arid=[]
        for (let i = 0; i < tab.length; i++) {
          ar0.push(arr[tab[i]])
          ar1.push(arr1[tab[i]])
          arid.push(arrid[tab[i]])
        }
        this.imgs=ar0
        this.infs=ar1
        this.ids=arid
      })
    },
    ckmg(id){
      //console.log(id)
      this.$router.push({ path: '/detail/' + id })
    }
  }
  
};

</script>

<style lang="scss">
  .hea1{
    display:flex;
    background-color: #fff !important;
    .ss{
      border-radius: 20px;
      background-color: red;
    }
  }
  .hea1_1{
    color:#555;
    padding-top:0.1rem;
  }
  .img1{
    background-color: #fff;
    width: 100%;
    height: 1rem;
    text-align: center;
    overflow: hidden;
    img{
      // height: 100%;
      width:100%;
    }
  }
  .main0{
    display:flex;
  }
  .mg{
    padding:10px;
  }
  .m0{
    padding:10px;
    // border:1px solid #ccc;
    // min-height: 300px;
    .m1{
      font-size: 12px;
      overflow: auto;
      span:first-child{
        float: left;
      }
      span:last-child{
        float: right;
        color:#999;
      }
    }
    .m2{
      border-bottom: 1px solid #ccc;
      font-size:10px;
      ul{
        display: flex;
        margin: 10px 0;
        li{
          text-align: center;
          flex:1;
          width:50px;
          border-left:1px solid #ccc;
        }
        li:first-child{
          border:none;
        }
      }
    }
    .m2:last-child{
      border:none
    }
  }
</style>
