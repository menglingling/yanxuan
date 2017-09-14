<template>
  <ul class="nav">
    <li class="nav-item" v-for="(item ,index) in data" @click="" :class="{ cur: curNavItem==index }" @click="selectNavItem(index)">
         <i class="nav-item-icon" :class="item.icon"></i>
         <span class="nav-item-txt" v-text="item.name"></span> 
    </li>
  </ul>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      curNavItem: 0,
      data:[
        {
          icon:'home',
          name:'首页'
        },
        {
          icon:'topic',
          name:'专题'
        },
        {
          icon:'cate',
          name:'分类'
        },
        {
          icon:'cart',
          name:'购物车'
        },
        {
          icon:'ucenter',
          name:'个人'
        }
      ]
    }
  },
   methods: {
    selectNavItem: function (index) {
      this.curNavItem = index;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~assets/scss/variable.scss";
@import "~assets/scss/mixin.scss";
.nav{
  background-color: #fafafa;
  padding: 0.2rem;
  display: flex;
  font-size: 0.45rem;
  .nav-item{
   flex: 1;
   @include center;
   flex-direction: column;
   .nav-item-icon{
     margin-bottom: 0.2rem;
     display: block;
     width: 0.8rem;
     height: 0.8rem;
     background-image:  url('../../assets/images/nav.png');
     background-repeat: no-repeat;
     background-size: 100%;

   }
   .home{
     background-position: 0 55%;
   }
   .topic{
     background-position: 0 78%;
   }
   .cate{
     background-position: 0 33%;
   }
   .cart{
     background-position: 0 11%;
   }
   .ucenter{
     background-position: 0 100%;
   }
   

  }
  .cur{
    .nav-item-txt{
      color: $color-cur;
    }
    .home{
     background-position: 0 43.5%;
   }
   .topic{
     background-position: 0 66.5%;
   }
   .cate{
     background-position: 0 22%;
   }
   .cart{
     background-position: 0 0%;
   }
   .ucenter{
     background-position: 0 89%;
   }

  }
}
</style>
