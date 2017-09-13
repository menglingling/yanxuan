<template>
  <div class="container">
    <vHeader class="header" slot="recommend">
      <div class="header-top">
        <img class="logo" src="../../assets/logo.png">
        <searchBar class="search"></searchBar>
      </div>
      <div class="header-nav">
        <swiper class="nav" :options="swiperOptions" >
          <template scope="props">
            <span @click="selectNavItem(props.index)" :class="{ cur: curNavItem==props.index }" v-text="props.item"></span>
          </template>
        </swiper>
      </div>
    </vHeader>
    <vMain class="main">
      <swiper v-if="focusList" class="banner" :options="swiperOptions1" :list="focusList">
        <template scope="props">
          <img v-if="props.item.picUrl" :src="props.item.picUrl">
        </template>
      </swiper>
      <servicePolicy class="policy" v-if="policyDescList" :list="policyDescList"></servicePolicy>
      <supply class="supply" v-if="tagList" :list="tagList"></supply>
    </vMain>
    <vFooter class="footer"></vFooter>
  </div>
</template>

<script>
import vHeader from 'components/vHeader/vHeader'
import vMain from 'components/vMain/vMain'
import vFooter from 'components/vFooter/vFooter'
import searchBar from 'components/search/searchBar'
import swiper from 'base/swiper/swiper'
import servicePolicy from 'components/servicePolicy/servicePolicy'
import supply from 'components/recommend/supply'

import {getfocusList,getpolicyDescList,getTagList} from 'api/recommend'
var dataOptions = {
  notNextTick: true,
  autoHeight: true,
  freeMode: true,
  slidesPerView: 'auto',
  freeModeSticky: true,
};
var dataOptions1 = {
  notNextTick: true,
  autoplay: 3000,
  autoHeight: true,
  pagination: '.swiper-pagination',
  paginationClickable: true
};

export default {
  components: {
    vHeader,
    vMain,
    vFooter,
    searchBar,
    swiper,
    servicePolicy,
    supply
  },
  data() {
    return {
      
      swiperOptions: dataOptions,
      swiperOptions1: dataOptions1,
      curNavItem:0,
      focusList:null,
      policyDescList:null,
      tagList:null
    }
  },
  created() {

      setTimeout(() => {
        this._getfocusList();
        this._getpolicyDescList();
        this._getTagList();

      }, 20)
      
  },
  methods: {
    selectNavItem:function(index){
        this.curNavItem=index;
    },
    _getfocusList() {
        getfocusList().then((res) => {
          console.log(res)
           this.focusList=res.data;
        })
      },
    _getpolicyDescList() {
        getpolicyDescList().then((res) => {
          console.log(res)
           this.policyDescList=res.data;           
        })
      },
       _getTagList() {
        getTagList().then((res) => {
          console.log(res)
           this.tagList=res.data;           
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~assets/scss/variable.scss";
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
 
  .header {
     padding: 0 0.4rem;
    .header-top {
      display: flex;
      align-items: center;
       padding: 0.2rem 0;
      .logo {
        width: 3rem;
        height: 1rem;
      }
      .search {
        margin-left: 0.4rem;
        flex: 1;
      }
    }
    .header-nav {
      .nav {
        padding:0.4rem;
        font-size: 0.6rem;
        
        span {
          padding:0.4rem;
        }
        .cur{
          position: relative;
          &:after{
            position: absolute;
            bottom:0;
            left:0;
            content:'';
            width: 100%;
            height: 4px;
            background: $color-text-cur
          }
        }        
      }
    }
  }
  .main {
    flex: 1;
     background:$color-background-d; 
    .banner {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .policy{
      padding:0.4rem;
      background:$color-background; 
    }
    .supply{
      margin-top: 0.3rem;
      padding:0 0.4rem;
      background:$color-background; 
    }
  }
}
</style>
