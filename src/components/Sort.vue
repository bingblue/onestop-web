<template>
  <ul>
    <li class="active">
      <router-link to="/" title="全部分类">全部分类</router-link>
    </li>
    <li>
      <router-link to="/" title="美妆保养">美妆保养</router-link>
    </li>
    <li>
      <router-link to="/" title="美瞳">美瞳</router-link>
    </li>
    <li>
      <router-link to="/" title="药品、保健品">药品、保健品</router-link>
    </li>
    <li>
      <router-link to="/" title="零食">零食</router-link>
    </li>
    <li>
      <router-link to="/" title="潮流服装">潮流服装</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Sort',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
ul
  width 100%
  margin 20px 0 40px
  li
    display inline-block
    width 16%
    text-align center
    a
      /* 文本溢出省略 */
      display block
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      /* 文本溢出省略END */
      color #b3b3b3
      font-size 2rem
    &.active a, &:hover a
      color #ff81dd

</style>
