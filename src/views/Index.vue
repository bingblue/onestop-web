<template>
  <section>
    <mu-header></mu-header>
    <el-row>
      <el-col :span="24">
        <router-link to="/" title="商品">
          <img src="../assets/home_banner.jpg" alt="精品好货，一网打尽">
        </router-link>
      </el-col>
    </el-row>
    <mu-title></mu-title>
    <el-row>
      <el-col :span="18" :offset="3">
        <img src="../assets/index_bg1.jpg" alt="一站承诺">
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" class="bg-sort">
        <router-link to="/" title="美妆保养">
          <img src="../assets/index_bg_beauty.jpg" alt="美妆保养">
        </router-link>
        <router-link to="/" title="美瞳">
          <img src="../assets/index_bg_cosmetic.jpg" alt="美瞳">
        </router-link>
        <router-link to="/" title="药品、保健品">
          <img src="../assets/index_bg_medicines.jpg" alt="药品、保健品">
        </router-link>
        <router-link to="/" title="零食">
          <img src="../assets/index_bg_snacks.jpg" alt="零食">
        </router-link>
        <router-link to="/" title="潮流服装">
          <img src="../assets/index_bg_trend.jpg" alt="潮流服装">
        </router-link>
      </el-col>
    </el-row>
    <mu-title hero="HOT" text="PRODUCTS" subtext="热卖商品"></mu-title>
    <el-row>
      <el-col :span="12" :offset="6">
        <mu-sort></mu-sort>
      </el-col>
    </el-row>
    <mu-title hero="NEW" text="PRODUCTS" subtext="新品上市"></mu-title>
    <el-row>
      <el-col :span="12" :offset="6">
        <mu-sort></mu-sort>
      </el-col>
    </el-row>
    <mu-footer></mu-footer>
  </section>
</template>

<script>
import MuHeader from '../components/Header'
import MuFooter from '../components/Footer'
import MuTitle from '../components/Title'
import MuSort from '../components/Sort'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    MuHeader,
    MuFooter,
    MuTitle,
    MuSort
  },
  data () {
    return {
      msg: '欢迎来到Vue'
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'nickName'
    ])
  }
}
</script>

<style scoped lang="stylus">
h1
  font-size 24px
  text-align center
  color #0099ff
  margin-bottom 80px
.index
  padding-bottom 400px
button.logout
  float right
.bg-sort
  margin-top 120px
  margin-bottom 120px
  a
    &:nth-child(1) img
      width 58.08%
      margin-right 0.74%
      margin-bottom 10px
    &:nth-child(2) img
      width 41.18%
      margin-bottom 10px
    &:nth-child(3) img
      width 35.96%
      margin-right 0.74%
    &:nth-child(4) img
      width 27.55%
      margin-right 0.74%
    &:nth-child(5) img
      width 35.01%
</style>
