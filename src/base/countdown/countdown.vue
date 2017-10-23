<template>
  <div class="countdown">
    <span class="hours" v-text="retime.hours"></span>
    <span class="colon">:</span>
    <span class="mins"  v-text="retime.mins"></span>
    <span class="colon">:</span>
    <span class="secs"  v-text="retime.secs"></span>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    remainTime: [Number]
  },
  data() {
    return {
      _remainTime:0,
      time:10,
      retime:
      {
        hours: 0,
        mins: 0,
        secs: 0
      }
    }
  },
  computed: {

  },
  created() {
     this._remainTime=this.remainTime;
     this.countdown();
  },
  methods: {
    countdown() {
    this._remainTime=this._remainTime-1000;
    this.retime.hours = this.$moment(this._remainTime).format("hh");
    this.retime.mins = this.$moment(this._remainTime).format("mm");
    this.retime.secs = this.$moment(this._remainTime).format("ss"); 
    let _this=this;
    setTimeout(function(){
        _this.countdown()
      }, 1000) 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~assets/scss/variable.scss";
@import "~assets/scss/mixin.scss";
.countdown{
  margin-top: 0.6rem;
  font-size: 0.55rem;
  display: flex;
  color: #000;
  .hours,.mins,.secs,.colon{
       padding: 0.1rem;
       @include center;
  }
  .hours,.mins,.secs{
    width: 1rem;
    height: 1rem;
    color: #fff;
    background: #444;
    border-radius: 5px;
  }
}
</style>
