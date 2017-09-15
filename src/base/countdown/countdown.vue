<template>
  <div class="countdown">
    <span class="hours"></span>
    <span class="colon"></span>
    <span class="mins"></span>
    <span class="colon"></span>
    <span class="secs"></span>
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
      retime:
        {
          hours: 0,
          mins: 0,
          secs: 0
        }
    }
  },
  created (){
    this.countdown(this.remainTime);
  },
  methods: {
    countdown(time) {       
      this.countdownInner(time);
    },
    countdownInner(time){
        time--;
        this.retime.hours = this.$moment(time).format("hh");
        this.retime.mins = this.$moment(time).format("mm");
        this.retime.secs = this.$moment(time).format("ss");
        console.log(this.retime.hours+":"+this.retime.mins+":"+this.retime.secs)
        //setTimeout(this.countdownInner(time), 1000)
        return this.retime;
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
