<template>
  <div class="block">
    <ul class="list">
      <li class="item" v-for="(item,index) in list">
        <cateListItem :data="item"></cateListItem>
      </li>
    </ul>
  </div>
</template>

<script>
import cateListItem from 'components/recommend/cateListItem'
export default {
  props: {
    list: [Array]
  },
  components: {
    cateListItem
  },
  data() {
    return {
       
    }
  },
  computed: {

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
  .list{
    .item{
      margin-top: 0.3rem;
    }
  }
}
</style>
