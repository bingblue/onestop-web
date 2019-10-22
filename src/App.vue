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
/* 移动端Header会固定，需要设置padding-top */
@media screen and (max-width: 768px)
  body
    padding-top 56px
    #app
      height calc(100vh - 56px)
</style>
