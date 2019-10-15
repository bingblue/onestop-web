<template>
<footer>
  <el-row>
    <el-col class="wall" :span="16" :offset="4" :xs="{span: 20, offset: 2}">
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
      </div>
      <div class="footer-bg">
        <router-link to="/" title="recommend"><img src="@/assets/footer_bg.png"/></router-link>
      </div>
    </el-col>
  </el-row>
  <el-row class="copyright">
    <el-col :span="24">
      <span>Copyright © {{ nowYear }} · 滨清科技 , Inc. Rights Reserved </span>
      <span>沪ICP备16024217号</span>
    </el-col>
  </el-row>
  <el-backtop target=".scroll" />
</footer>
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
  border-top 1px solid #eee
  padding 42px 0 20px
  .wall
    display flex
    align-items center
  .menu
    float left
    width 70%
    text-align left
    @media screen and (max-width: 640px)
      width 100%
      text-align center
    ul
      display inline-block
      width 33.3%
      a
        display inline-block
        padding 12px 0
        color #828282
        font-size 1.4rem
        @media screen and (min-width: 1800px)
          padding 20px 0
          font-size 1.6rem
  .footer-bg
    float left
    width 30%
    @media screen and (max-width: 640px)
      display none
    img
      @media screen and (min-width: 1800px)
        width auto
        height 100%
        max-height 100%
  .copyright
    text-align center
    color #828282
    font-size 1.4rem
    border-top 1px solid #eee
    margin-top 42px
    padding-top 20px
    span
      @media screen and (max-width: 640px)
        display inline-block
        width 100%
</style>
