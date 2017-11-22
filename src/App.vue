<template lang="pug">
#app
  router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
h1 {
  font-weight: normal;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
  text-align: center;
  .rta-history {
    width: 900px;
    margin: 0 auto;
  }
}
</style>
