<template>
  <div id="app">  
    <vHeader></vHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from 'components/vHeader/vHeader'
export default {
  components: {
    vHeader
  }
}
</script>

<style>
#app {}
</style>


