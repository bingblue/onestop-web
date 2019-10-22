<template>
  <header>
    <el-row>
      <el-col :span="4" :offset="3" :xs="{span: 8, offset: 1}" class="logo">
        <router-link to="/" title="one stop">
          <img class="logo-img" src="@/assets/logo.png" alt="one stop logo">
        </router-link>
      </el-col>
      <el-col :span="17" :xs="{span: 3, offset: 11}" class="nav">
        <ul v-show="isShow.menu">
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
          <li class="icon">
            <el-button type="text" class="btn-search">
              <mu-iconfont icon="search" />
            </el-button>
          </li>
          <li class="icon user">
            <mu-dropmenu />
          </li>
        </ul>
        <el-button type="text" class="btn-menu" @click="toggle">
          <mu-iconfont icon="menu" />
        </el-button>
      </el-col>
    </el-row>
  </header>
</template>

<script>
import MuDropmenu from '@/components/layout/Dropmenu'
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  components: {
    MuDropmenu
  },
  data () {
    return {
      isShow: {
        menu: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'nickName'
    ])
  },
  methods: {
    toggle () {
      this.isShow.menu = !this.isShow.menu
    },
    logout () {
      this.$store.commit('LOGOUT')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="stylus">
.logo,
.nav
  text-align center
  padding 50px 0 20px 0
.logo-img
  max-width 400px
  min-width 180px
.nav
  padding-bottom 10px
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
  .icon
    position relative
    top -8px
    .btn-search
      display inline-block
      width auto
      color #999
      font-size 4rem
  .btn-menu
    display none
// 手机端菜单样式
@media screen and (max-width: 768px)
  header
    position fixed
    top 0
    left 0
    width 100%
    z-index 99
    background #fff
  h1
    font-size 2rem
  .logo
    padding 0
    padding-top 15px
  .nav
    padding 0
    ul
      // display none
      position fixed
      top 56px
      left 0
      width 50%
      height calc(100% - 156px)
      z-index 99
      background #fff
      padding-top 100px
      li
        display block
        width 100%
        height auto
        margin-top 30px
      .icon
        position absolute
        top auto
        bottom 0
        width 25%
        right 0
        &.user
          right auto
          left 0
        .btn-search
          font-size 3rem
    .btn-menu
      display block
      float right
      font-size 3rem
      color #ff7edc
</style>
