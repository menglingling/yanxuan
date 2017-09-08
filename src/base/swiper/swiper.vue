<template>
  <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(banner,index) in banners" :key="index">
        <img v-if="banner.picUrl" :src="banner.picUrl">
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
var dataList=[{
    "expireTime": 1505750400000,
    "id": 1152001,
    "name": "活动 四舍不五入",
    "onlineTime": 1504195200000,
    "picUrl": "http://yanxuan.nosdn.127.net/630439320dae9f1ce3afef3c39721383.jpg",
    "targetUrl": "https://m.you.163.com/act/pub/DxDpYNfbBd.html"
  }, {
    "expireTime": 1505059200000,
    "id": 1153000,
    "name": "活动 教师节",
    "onlineTime": 1504281600000,
    "picUrl": "http://yanxuan.nosdn.127.net/64c4ddaf3478e392f944d46de428e3ce.jpg",
    "targetUrl": "https://m.you.163.com/act/pub/kETktM9upf.html"
  }, {
    "expireTime": 1505491200000,
    "id": 1151001,
    "name": "新人导购页",
    "onlineTime": 1503331200000,
    "picUrl": "http://yanxuan.nosdn.127.net/53253b41f5a7ee060a7f0cef3bc81304.jpg",
    "targetUrl": "https://m.you.163.com/act/static/gFcfccQHOT.html"
  }, {
    "expireTime": 1514649600000,
    "id": 1100000,
    "name": "类目 鞋靴",
    "onlineTime": 1497801600000,
    "picUrl": "http://yanxuan.nosdn.127.net/f6096ceae7a4ddca6f1974aff28296e9.jpg",
    "targetUrl": "http://you.163.com/item/list?categoryId=1008000&subCategoryId=1008003"
  }, {
    "expireTime": 1514649600000,
    "id": 1132007,
    "name": "类目 居家",
    "onlineTime": 1497801600000,
    "picUrl": "http://yanxuan.nosdn.127.net/5100f0176e27a167cc2aea08b1bd11d8.jpg",
    "targetUrl": "http://you.163.com/item/list?categoryId=1005000&subCategoryId=1008008"
  }]
export default {
  data () {
    return {
      banners: dataList,
      swiperOption: {
        notNextTick: true,
        //autoplay: 1000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.swiper-wrapper {
  margin-top: 10px;
  height: 230px;
}

// .swiper-wrapper img {
//   width: 100%;
//   height: 100%;
// }


</style>
