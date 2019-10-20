<template>
  <header>
    <el-row>
      <el-col :span="4" :offset="3" :xs="{span: 6, offset: 1}" class="text-center header-logo">
        <router-link to="/" title="one stop">
          <img class="header-logo-img" src="@/assets/logo.png" alt="one stop logo">
        </router-link>
      </el-col>
      <el-col :span="17" class="header-nav">
        <ul>
          <li>
            <router-link to="/" title="首页">
              <span>首页</span><span>HOME</span>
            </router-link>
          </li>
          <li>
            <router-link to="/shop" title="商品">
              <span>商品</span><span>SHOP</span>
            </router-link>
          </li>
          <li>
            <router-link to="/" title="新品">
              <span>新品</span><span>NEW</span>
            </router-link>
          </li>
          <li>
            <router-link to="/" title="联系我们">
              <span>联系我们</span><span>CONTACT</span>
            </router-link>
          </li>
          <li>
            <router-link to="/" title="关注我们">
              <span>关注我们</span><span>SUBSCRIBE</span>
            </router-link>
          </li>
          <li class="header-icon">
            <a class="btn-search" href="javascript:;">
              <img src="@/assets/icon_search.png" alt="搜索">
            </a>
          </li>
          <li class="header-icon">
            <mu-ddm />
          </li>
        </ul>
      </el-col>
    </el-row>
  </header>
</template>

<script>
import MuDdm from '@/components/layout/DropDownMenu'
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  components: {
    MuDdm
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'user',
      'nickName'
    ])
  },
  methods: {
    logout () {
      this.$store.commit('LOGOUT')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="stylus">
.header-logo,
.header-nav
  padding 50px 0 20px 0
.text-center
  text-align center
.header-logo-img
  max-width 400px
.header-nav
  text-align center
  padding-bottom 30px
  &>ul>li
    display inline-block
    width 10%
    span
      display block
      color #999
      font-size 1.8rem
      text-align center
      /* 文本溢出省略 */
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      /* 文本溢出省略END */
      @media screen and (min-width: 1800px)
        font-size 2.8rem
      &:nth-child(2n)
        font-size 1.4rem
        @media screen and (min-width: 1800px)
          font-size 1.8rem
.header-icon
  position relative
  a
    display inline-block
    width 25%
  .btn-search
    img
      float left
      min-width 40px
// 手机端菜单样式
@media screen and (max-width: 640px)
  h1
    font-size 2rem
</style>
