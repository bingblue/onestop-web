<template>
  <div @mouseenter="show = true" @mouseleave="show = false">
    <el-button type="text" class="btn-user"><mu-iconfont icon="user" /></el-button>
    <ul class="submenu triangle" v-if="show">
      <li>
        <router-link to="/cart" title="我的购物车">
          我的购物车
        </router-link>
      </li>
      <li>
        <router-link to="/order" title="我的订单">
          我的订单
        </router-link>
      </li>
      <li>
        <router-link to="/order" title="安全退出">
          安全退出
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dropmenu',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped lang="stylus">
.btn-user
  display inline-block
  font-size 4rem
  color #999
.submenu
  position absolute
  z-index 99
  width 165px
  border-radius 5px
  left 50%
  top 110%
  transform translateX(-50%)
  border 1px solid #888
  background #fff
  li
    a
      display inline-block
      padding 10px 0px
      width 100%
      height auto
      text-align center
      color #000
      font-size 1.6rem
.triangle::before
  content ' '
  display block
  width 0
  height 0
  border-width 0 10px 10px
  border-style solid
  border-color transparent transparent #888
  position absolute
  top -10px
  left 50%
  margin-left -10px
.triangle::after
  content ' '
  display block
  width 0
  height 0
  border-width 0 10px 10px
  border-style solid
  border-color transparent transparent #fff
  position absolute
  top -9px
  left 50%
  margin-left -10px

// 手机端菜单样式
@media screen and (max-width: 768px)
  .btn-user
    font-size 3rem
</style>
