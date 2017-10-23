<template>
  <div class="block">
    <div class="title">
      <span class="title-txt" v-text="needData.name"></span>
      <span class="small-title-txt" v-text="needData.frontName"></span>
    </div>
    <ul class="list">
      <li class="item" v-for="(item ,index) in needData.itemList">
        
         <div class="more" v-if="item.name=='more'" >
            <div class="more-text" v-text="'更多'+needData.name+'好物'"></div>
            <i class="icon-more"></i>
        </div>
        <div v-else>
          <div class="pic">
            <img :src="item.primaryPicUrl" v-lazy="item.primaryPicUrl">
            <div class="simpleDesc" v-text="item.simpleDesc"></div>
          </div>
          <div class="name" v-text="item.name"></div>
          <div class="retailPrice" v-text="'¥'+item.retailPrice"></div>
          <div class="color" v-if="item.colorNum" v-text="item.colorNum+'色可选'"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: [Object]
  },
  data() {
    return {

    }
  },
  computed: {
    needData: function () {
      let itemList = this.data.itemList;
      if (Number.isInteger(itemList.length / 2)) {
        itemList = itemList.slice(0, itemList.length - 1);       
      }
      itemList.push({ 'name': 'more' });
      this.data.itemList = itemList;
      return this.data
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
  padding: 0 0.4rem;
  background-color: $color-background;
  .title {
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
  }
  .small-title-txt{
    font-size: 0.4rem;
  }
  .list {
    font-size: 0.55rem;
    position: relative;
    @include clearfix;
    .item {
      float: left;
      width: 49%;
      margin-bottom: 0.6rem;
      overflow: hidden;
      position: relative;
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
        position: relative;
        height: 6.5rem;
        background-color: $color-background-d;
        img {
          width: 100%;
        }
        .simpleDesc {
          padding: 0.4rem 0.15rem;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          font-size: 0.4rem;
          color: #9F8A60;
          background-color: #F1ECE2;
          @include no-wrap;
        }
      }


      .name {
        margin-top: 0.3rem;
        font-size: 0.45rem;
        color: $color-text;
        @include no-wrap;
      }
      .retailPrice {
        margin-top: 0.3rem;
        font-size: 0.5rem;
        font-weight: bold;
        color: $color-cur;
      }
    }

    .item:nth-child(2n) {
      float: right;
    }
    .more {
      height: 6.5rem;
      @include center;
      flex-direction: column;
      font-size: 0.55rem;
      color: $color-text-l;
      background-color: $color-background-d;
      .more-text{
          margin-bottom: 1rem;
      }
      .icon-more {
        display: block;
        width: 1.2rem;
        height:1.2rem;
        background: url('../../assets/icons/icon-bigger-more.png') no-repeat center center / contain;
      }
    }
  }
}
</style>
