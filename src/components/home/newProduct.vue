<template>
  <div class="block">
    <div class="title">
      <span class="title-txt">周一周四 · 新品首发</span>
      <div class="more">
        <span class="more-txt">查看全部</span>
        <i class="icon-more"></i>
      </div>
    </div>
    <div class="list">
      <swiper v-if="list" :options="swiperOptions" :list="needList">
        <template scope="props">
          <div class="item more" v-if="props.item.name=='more'">
                     查看全部
          </div>
          <div class="item" v-else>
            <img v-lazy="props.item.listPicUrl" class="pic" :src="props.item.listPicUrl">
            <div class="tag">
              <span class="tag-item" v-for="(subitem ,index) in props.item.itemTagList.slice(0,2)" v-text="subitem.name"></span>
            </div>
            <div class="name" v-text="props.item.name"></div>
            <div class="simpleDesc" v-text="props.item.simpleDesc"></div>
            <div class="retailPrice" v-text="'¥'+props.item.retailPrice"></div>
            <div class="color" v-if="props.item.colorNum" v-text="props.item.colorNum+'色可选'"></div>
          </div>
          <!--<span @click="selectNavItem(props.index)" :class="{ cur: curNavItem==props.index }" v-text="props.item.name"></span>-->
        </template>
      </swiper>
    </div>
  </div>
</template>

<script>
import swiper from 'base/swiper/swiper'
export default {
  components: {
    swiper
  },
  props: {
    list: [Array]
  },
  data() {
    return {
      swiperOptions: {
        notNextTick: true,
        autoHeight: true,
        freeMode: true,
        slidesPerView: 'auto',
        freeModeSticky: true,
        spaceBetween: 15
      }
    }
  },
  computed: {
    needList: function () {
      this.list.push({'name':'more'})
      return this.list
    }
  },
  methods: {

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~assets/scss/variable.scss";
@import "~assets/scss/mixin.scss";
.block {
  .title {
    display: flex;
    @include center;
    flex-direction: column;
    font-size: 0.6rem;
    color: #8BA0B6;
    height: 4.5rem;
    background: url('../../assets/images/new.png') no-repeat center center / 100% 100%;
    .title-txt {
    }
    .more {
      margin-top: 0.4rem;
      padding: 0.3rem 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.45rem;
      background-color: #D8E5F1;
      .more-txt {}
      .icon-more {
        margin-left: 0.1rem;
        display: block;
        width: 0.2rem;
        height: 0.4rem;
        background: url('../../assets/icons/icon-arrow-right.png') no-repeat center center /100% 100%;
      }
    }
  }
  .list {
    padding: 0.5rem;
    padding-bottom: 0.2rem;
    font-size: 0.55rem;
    background-color: $color-background;
    height: 8.2rem;
    .item {
      width: 4.5rem;
      font-size: 0.5rem;
      .color {
        position: absolute;
        top: 0.3rem;
        left: 0.3rem;
        padding: 0.05rem;
        width: 0.5rem;
        color: #b4a078;
        font-size: 0.3rem;
        text-align: center;
        border: 1px solid #b4a078;
        line-height: 1.2;
      }
      .pic {
        width: 100%;
        height: 4.5rem;
        background-color: $color-background-d;
      }
      .tag {
        margin-top: 0.2rem;
        color: $color-text-lll;
        font-size: 0.3rem;
        .tag-item {
          display: inline-block;
          padding: 0.08rem 0.2rem;        
          &:nth-child(1) {
            background-color: #e5686d;
          }
          &:nth-child(2) {
            background-color: #f48f18;
          }
        }
        .tag-item+.tag-item{
          margin-left: 0.2rem;
        }
      }

      .name {
        margin-top: 0.3rem;
        font-size: 0.45rem;
        color: $color-text;
        @include no-wrap;
      }
      .simpleDesc {
        margin-top: 0.3rem;
        font-size: 0.4rem;
        color: $color-text-l;
        @include no-wrap;
      }
      .retailPrice {
        margin-top: 0.3rem;
        font-size: 0.5rem;
        color: $color-cur;
      }
    }
    .more{
       height: 6rem;
       border:0.15rem solid $color-background-d;
       display: flex;
       justify-content: center;
       align-items: center;
       color: $color-text-l;
    }
  }
}
</style>
