<template>
  <div class="block">
    <div class="des">
      <div class="title">严选限时购</div>     
      <countdown :remainTime="needList.remainTime"></countdown>
      <div class="next" v-text="'下一场 '+needList.nextStartTime+' 开始'"></div>
    </div>
    <div class="pic">
      <img :src="needList.primaryPicUrl">
    </div>
     <div class="price">
       <div class="activityPrice" v-text="'¥'+needList.activityPrice"></div>
       <div class="originPrice" v-text="'¥'+needList.originPrice"></div>
     </div>
  </div>
</template>

<script>
import countdown from 'base/countdown/countdown'
export default {
  components: {
    countdown
  },
  props: {
     list: [Object]
  },
  data() {
    return {

    }
  },
  computed: {
    needList: function () {
      let nextStartTime = new Date(this.list.nextStartTime)
      nextStartTime = this.$moment(nextStartTime).format("hh:mm")
      this.list.nextStartTime = nextStartTime
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
  position: relative;
  padding: 0.5rem 1rem;
  @include center;
  .des {
    flex: 1;
    .title {
      font-size: 0.6rem;
      letter-spacing: .16rem;
    }
    .next {
      margin-top: 1rem;
      font-size: 0.4rem;
    }
  }
  .pic {
    flex: 1;
    img {
      width: 100%;
    }
  }
  .price{
    @include center;
    flex-direction: column;       
    position: absolute;
    right:1.2rem;
    bottom:1.2rem;   
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    color: #fff;
    font-size: 0.5rem;
    background-color: rgba(244,143,24,.95);
    .originPrice{
      text-decoration: line-through
    }
  }
}
</style>
