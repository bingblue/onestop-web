<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/normalize.css'
export default {
  name: 'App'
}
</script>

<style lang="stylus">
/* ElementUI的backTop组件生效 */
#app
  height 100vh
  overflow auto
</style>
