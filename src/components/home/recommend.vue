<template>
  <div class="container">
    <vHeader class="fixed header" slot="recommend">
      <div class="header-top">
        <img class="logo" src="../../assets/logo.png">
        <searchBar class="search"></searchBar>
      </div>
      <div class="header-nav">
        <swiper v-if="headCateList" class="nav" :options="swiperOptions" :list="headCateList">
          <template scope="props">
            <span @click="selectNavItem(props.index)" :class="{ cur: curNavItem==props.index }" v-text="props.item.name"></span>
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
      <newProduct class="newProduct" v-if="newItemList" :list="newItemList"></newProduct>
      <popular class="popular" v-if="popularItemList" :list="popularItemList"></popular>
      <flashSale class="flashSale"  v-if="flashSaleIndexVO" :list="flashSaleIndexVO"></flashSale>
      <cateList :list="cateList"></cateList>
      <transition name="slide">      
      <cateList class="headCateListCur" v-if="headCateListCurList" :list="headCateListCurList.subCateList">
        <div slot="banner">
             <img class="pic" :src="headCateListCurList.bannerUrl">
        </div>
      </cateList>
      </transition>
    </vMain>
  </div>
</template>

<script>
import vHeader from 'components/vHeader/vHeader'
import vMain from 'components/vMain/vMain'
import searchBar from 'components/search/searchBar'
import swiper from 'base/swiper/swiper'
import servicePolicy from 'components/servicePolicy/servicePolicy'
import supply from 'components/home/supply'
import newProduct from 'components/home/newProduct'
import popular from 'components/home/popular'
import flashSale from 'components/home/flashSale'
import cateList from 'components/home/cateList'


import { getheadCateList, getfocusList, getpolicyDescList, getTagList, getnewItemList, getpopularItemList,getflashSaleIndexVO,getcateList } from 'api/home'
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
    searchBar,
    swiper,
    servicePolicy,
    supply,
    newProduct,
    popular,
    flashSale,
    cateList
  },
  data() {
    return {
      swiperOptions: dataOptions,
      swiperOptions1: dataOptions1,
      curNavItem: 0,
      headCateList: null,
      focusList: null,
      policyDescList: null,
      tagList: null,
      newItemList: null,
      popularItemList: null,
      flashSaleIndexVO:null,
      cateList:null,
      headCateListCurList:null,
    }
  },
  created() {

    setTimeout(() => {
      this._getheadCateList();
      this._getfocusList();
      this._getpolicyDescList();
      this._getTagList();
      this._getnewItemList();
      this._getpopularItemList();
      this._getflashSaleIndexVO();
      this._getcateList();
    }, 20)

  },
  methods: {
    selectNavItem: function (index) {
      this.curNavItem = index;
      if(index!=0){
         this.headCateListCurList=this.headCateList[index]
      }else{
          this.headCateListCurList=null;
      }

    },
    _getheadCateList() {
      getheadCateList().then((res) => {
        res.data.unshift({name:'推荐'});
        this.headCateList = res.data;
      })
    },
    _getfocusList() {
      getfocusList().then((res) => {
        this.focusList = res.data;
      })
    },
    _getpolicyDescList() {
      getpolicyDescList().then((res) => {
        this.policyDescList = res.data;
      })
    },
    _getTagList() {
      getTagList().then((res) => {
        this.tagList = res.data;
      })
    },
    _getnewItemList() {
      getnewItemList().then((res) => {
        this.newItemList = res.data;
      })
    },
    _getpopularItemList() {
      getpopularItemList().then((res) => {
        this.popularItemList = res.data;
      })
    },
    _getflashSaleIndexVO() {
      getflashSaleIndexVO().then((res) => {
        this.flashSaleIndexVO = res.data;
      })
    },
    _getcateList() {
      getcateList().then((res) => {
        this.cateList = res.data;
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
    background: $color-background;
    .header-top {
      display: flex;
      align-items: center;
      padding: 0.3rem 0;
      .logo {
        width: 2rem;
        height: 0.6rem;
      }
      .search {
        margin-left: 0.4rem;
        flex: 1;
      }
    }
    .header-nav {
      .nav {        
        span {
          display: block;
          padding:0.3rem;
          font-size: 0.48rem;
        }
        .cur {
          position: relative;
          &:after {
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';
            width: 100%;
            height: 2px;
            background: $color-cur
          }
        }
      }
    }
  }
  .main {
    position: relative;
    margin-top:2.7rem;
    flex: 1;
    background: $color-background-d;
    .banner {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .policy {
      padding: 0.4rem;
      background: $color-background;
    }
    .supply {
      margin-top: 0.3rem;
      padding: 0 0.3rem;
      background: $color-background;
    }
    .newProduct {
      margin-top: 0.3rem;
      background: $color-background;
    }
    .popular {
      margin-top: 0.3rem;
      background: $color-background;
    }
    .flashSale {
      margin-top: 0.3rem;
      background: $color-background;
    }
    .headCateListCur{
      position:absolute;
      top:0;
      left:0;
      z-index: 1;
      .pic{
        width: 100%;
      }
    }
  }
}

  .slide-enter-active, .slide-leave-active{
    transition: all 0.3s
  }


  .slide-enter, .slide-leave-to{
    transform: translate3d(100%, 0, 0)
}
</style>
