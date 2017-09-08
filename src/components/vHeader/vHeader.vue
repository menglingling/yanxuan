<template>
    <div class="header">
        <div class="header-top">
            <img class="logo" src="../../assets/logo.png">
            <searchBar class="search"></searchBar>
        </div>
        <div class="header-nav">
            
        </div>
    </div>
</template>

<script>
import searchBar from 'components/search/searchBar'
export default {
    components: {
        searchBar
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
.header {
    .header-top {
        display: flex;
        align-items: center;
        padding: 0.2rem 0.4rem;
        .logo {
            width: 3rem;
            height: 1rem;
        }
        .search {
            margin-left: 0.4rem;
            flex: 1;
        }
    }
}
</style>
