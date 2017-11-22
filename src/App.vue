<template lang="pug">
#app
  h1 My SMO RTA history
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
}
</style>
