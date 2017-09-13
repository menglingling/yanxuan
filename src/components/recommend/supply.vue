<template>
  <div class="supply">
    <div class="title">
      <span class="title-txt">品牌制造商直供</span>
      <i class="icon-more"></i>
    </div>
    <ul class="list">
      <li class="item" v-for="(item ,index) in needList">
        <div class="des">
          <div class="name" v-text="item.name"></div>
          <div class="price">{{item.floorPrice}}元起</div>
          <div class="tag" v-if="item.newOnShelf">
            <i class="icon-more"></i>
          </div>
        </div>
        <img class="pic" :src="item.picUrl">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: [Array]
  },
  data() {
    return {
       
    }
  },
  computed: {
    needList: function () {
      return this.list.slice(0,4)
    }
  },
  methods: {

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~assets/scss/variable.scss";
.supply {
  .title {
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    .icon-more {
      display: block;
      width: .6rem;
      height: .6rem;
      background: url('../../assets/icons/icon-more.png') no-repeat center center / 100% 100%;
    }
    .title-txt {
      margin-right: 0.1rem;
    }
  }
  .list {
    font-size: 0.55rem;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
    .item {
      float: left;
      width: 7rem;
      margin-bottom: 0.2rem;
      overflow: hidden;
      position: relative;
      background-color: $color-background-d;
      .des {
        position: absolute;
        top: .5rem;
        left: .5rem;
        .price {
          margin-top: 0.3rem;
        }
        .tag {
          margin-top: 0.3rem;
          .icon-more {
            display: block;
            width: 1.2rem;
            height: 0.6rem;
            background: url('../../assets/icons/icon-new.png') no-repeat center center /100% 100%;
          }
        }
      }
      .pic {
        width: 100%;
      }
    }
    .item:nth-child(2n) {
      margin-left: 0.2rem;
    }
  }
}
</style>
