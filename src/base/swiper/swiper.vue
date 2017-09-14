<template>
  <swiper ref="mySwiper" :options="options">
    <swiper-slide v-for="(item,index) in list" :key="index">
      <slot :item="item" :index="index"></slot>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
require('assets/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    options: [Object],
    list: [Array]
  },
  data() {
    return {
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
@import "~assets/scss/variable.scss";
.swiper-slide {
  width: auto;
  font-size: 0
}

</style>
