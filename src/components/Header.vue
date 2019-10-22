<template>
  <header>
    <el-row>
      <el-col :span="4" :offset="3" :xs="{span: 6, offset: 1}" class="logo">
        <router-link to="/" title="one stop">
          <img class="logo-img" src="@/assets/logo.png" alt="one stop logo">
        </router-link>
      </el-col>
      <el-col :span="17" class="nav">
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
          <li class="icon">
            <el-button type="text" class="btn-search">
              <mu-iconfont icon="search" />
            </el-button>
          </li>
          <li class="icon">
            <mu-dropmenu />
          </li>
        </ul>
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
.logo,
.nav
  text-align center
  padding 50px 0 20px 0
.logo-img
  max-width 400px
.nav
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
.icon
  position relative
  a
    display inline-block
    width 25%
    color #999
    font-size 4rem
// 手机端菜单样式
@media screen and (max-width: 640px)
  h1
    font-size 2rem
</style>
