<template>
    <ul class="service" >
    <li class="service-item" v-for="(item,index) in list">
      <i class="icon-service" :style="{backgroundImage: 'url(' + item.icon + ')'}"></i>
      <span class="service-txt" v-text="item.desc"></span>
    </li>
  </ul>
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
  methods: {
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.service{
 
  display: flex;
  font-size: 0.5rem;
  .service-item{
     display: flex;
     align-items: center;
     justify-content: center;
     flex: 1;
    .icon-service{
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    
  }
  .service-txt{
    margin-left:0.2rem;
  }

  }
  
}
</style>
