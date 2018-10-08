<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="6" class="text-center header-logo">
        <router-link to="/" title="one stop">
          <img class="header-logo-img" src="../assets/logo_index.png" alt="one stop logo">
        </router-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="header-nav">
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
            <icon name="search"></icon>
          </li>
          <li class="header-icon submenu">
            <icon name="regular/user"></icon>
            <ul>
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
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
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
.header-logo
  padding 50px 0
.text-center
  text-align center
.header-logo-img
  max-width 570px
.header-nav
  text-align center
  &>ul>li
    display inline-block
    width 10%
    span
      display block
      color #999
      font-size 1.8rem
      text-align center
      &:nth-child(2n)
        font-size 1.4rem
.header-icon
  .fa-icon
    font-size 3.5rem
    position relative
    top -0.9rem
.submenu
  ul
    display none
</style>
