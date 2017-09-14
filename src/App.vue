<template>
  <div id="app">
    <div class="content scroll">
      <router-view></router-view>
    </div>
    <vFooter class="footer"></vFooter>
  </div>
</template>

<script>
import vFooter from 'components/vFooter/vFooter'
export default {
  components: {
    vFooter
  },
}
</script>

<style scoped lang="scss">
#app {

    height: 100%;
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
    }
}
</style>


