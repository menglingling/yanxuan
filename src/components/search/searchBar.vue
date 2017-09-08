<template>
  <div class="search">
      <i class="icon-search"></i>
      <span class="txt-search">搜索商品数量，共有款{{count}}好物</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count:10,
      msg: 'Welcome to Your Vue.js Appgfg'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~assets/scss/variable.scss";
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  background: $color-background-dd;
  border-radius: 10px;
  .icon-search{
    display: block;
    width: .6rem;
    height: .6rem;
    background: url('../../assets/icons/icon-search.png') no-repeat center center /cover;
  }
  .txt-search{
    margin-left: 0.2rem;
    display: block;
    font-size: 0.5rem;
  }
}
</style>
