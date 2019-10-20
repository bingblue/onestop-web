<template>
  <h2>
    <span class="hero">{{ hero }}</span>{{ text }}
    <p>{{ subtext }}</p>
  </h2>
</template>

<script>
export default {
  name: 'Title',
  props: {
    hero: {
      type: String,
      required: true,
      default: 'ONE STOP'
    },
    text: {
      type: String,
      required: true,
      default: 'PROMISE'
    },
    subtext: {
      type: String,
      required: true,
      default: '一站承诺'
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
h2
  margin 60px 0 30px
  padding-top 45px
  background url(../../assets/index/title_bg.png) top center no-repeat
  font-size 3.5rem
  color #333
  text-align center
  font-weight 600
  .hero
    color #f91caa
    margin-right 10px
    font-weight 400
  p
    margin-top 5px
    color #767676
    font-size 2.6rem
    font-weight 400
</style>
