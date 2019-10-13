<template>
  <el-container>
    <el-footer height="auto">
      <div class="menu">
        <ul>
          <li><router-link to="/" title="关于我们">关于我们</router-link></li>
          <li><router-link to="/" title="加入我们">加入我们</router-link></li>
          <li><router-link to="/" title="联系我们">联系我们</router-link></li>
        </ul>
        <ul>
          <li><router-link to="/" title="优惠信息">优惠信息</router-link></li>
          <li><router-link to="/" title="订单状态">订单状态</router-link></li>
          <li><router-link to="/" title="选购帮助">选购帮助</router-link></li>
        </ul>
        <ul>
          <li><router-link to="/" title="隐私">隐私</router-link></li>
          <li><router-link to="/" title="供应商责任">供应商责任</router-link></li>
          <li><router-link to="/" title="质量保证">质量保证</router-link></li>
        </ul>
        <ul>
          <li><router-link to="/" title="关于我们"><img src="" alt=""></router-link></li>
          <li><router-link to="/" title="关于我们"><img src="" alt=""></router-link></li>
          <li><router-link to="/" title="关于我们"><img src="" alt=""></router-link></li>
        </ul>
      </div>
      <p>Copyright © {{ nowYear }} · 滨清科技 , Inc. All Rights Reserved 沪ICP备16024217号</p>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      nowYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="stylus">
footer
  display flex
  flex-direction column
  border-top 1px solid #eee
  justify-content center
  align-items center
  padding 42px 0 20px
  .menu
    width 70%
    text-align center
    ul
      display inline-block
      // width calc(25% - 8px)
      width 25%
      li
        padding 12px 0
        a
          color #828282
          font-size 1.4rem
  p
    display flex
    width 100%
    color #828282
    font-size 1.4rem
    border-top 1px solid #eee
    justify-content center
    align-items center
    margin-top 42px
    padding-top 20px
</style>
