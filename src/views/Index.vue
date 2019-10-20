<template>
  <section>
    <mu-header />
    <!-- Banner -->
    <el-row>
      <el-col :span="24">
        <router-link to="/" title="商品">
          <img src="@/assets/index/home_banner.jpg" alt="精品好货，一网打尽">
        </router-link>
      </el-col>
    </el-row>
    <!-- 一站承诺 -->
    <mu-title hero="ONE STOP" text="PROMISE" subtext="一站承诺" />
    <el-row>
      <el-col :span="18" :offset="3" :xs="{span: 22, offset: 1}">
        <img src="@/assets/index/index_bg1.jpg" alt="一站承诺">
      </el-col>
    </el-row>
    <el-row class="bg-sort">
      <el-col :span="18" :offset="3" :xs="{span: 22, offset: 1}">
        <router-link to="/" title="美妆保养">
          <img src="@/assets/index/index_bg_beauty.jpg" alt="美妆保养">
        </router-link>
        <router-link to="/" title="美瞳">
          <img src="@/assets/index/index_bg_cosmetic.jpg" alt="美瞳">
        </router-link>
        <router-link to="/" title="药品、保健品">
          <img src="@/assets/index/index_bg_medicines.jpg" alt="药品、保健品">
        </router-link>
        <router-link to="/" title="零食">
          <img src="@/assets/index/index_bg_snacks.jpg" alt="零食">
        </router-link>
        <router-link to="/" title="潮流服装">
          <img src="@/assets/index/index_bg_trend.jpg" alt="潮流服装">
        </router-link>
      </el-col>
    </el-row>
    <!-- 热卖商品 -->
    <mu-title hero="HOT" text="PRODUCTS" subtext="热卖商品" />
    <mu-sort />
    <mu-slide />
    <!-- 新品上市 -->
    <mu-title hero="NEW" text="PRODUCTS" subtext="新品上市" />
    <mu-sort />
    <mu-featured />
    <mu-footer />
  </section>
</template>

<script>
import MuSort from '@/components/index/Sort'
import MuSlide from '@/components/index/Slide'
import MuTitle from '@/components/index/Title'
import MuFeatured from '@/components/index/Featured'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    MuFeatured,
    MuTitle,
    MuSlide,
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
  font-size 2.4rem
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
