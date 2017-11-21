<template lang="pug">
h1 {{ msg }}
</template>

<script>
export default {
  name: 'LineChart',
  data () {
    return {
      msg: 'Line Graph'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
</style>
