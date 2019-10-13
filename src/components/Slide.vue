<template>
  <el-row>
    <el-col :span="18" :offset="3" :xs="{span: 22, offset: 1}" class="slide">
      <a href="javascrip:;" class="pre"><img src="../assets/index_slide_pre.png" alt="pre"></a>
      <div class="wrap">
        <ul>
          <li>
            <router-link to="/" title="">
              <img src="../assets/index_slide_1.jpg" alt="商务提包">
              <span class="name">商务提包</span>
              <span class="price">￥330</span>
            </router-link>
          </li>
          <li>
            <router-link to="/" title="">
              <img src="../assets/index_slide_2.jpg" alt="商务鞋子">
              <span class="name">商务鞋子</span>
              <span class="price">￥230</span>
            </router-link>
          </li>
          <li>
            <router-link to="/" title="">
              <img src="../assets/index_slide_3.jpg" alt="商务眼镜">
              <span class="name">商务眼镜</span>
              <span class="price">￥130</span>
            </router-link>
          </li>
          <li>
            <router-link to="/" title="">
              <img src="../assets/index_slide_4.jpg" alt="商务帽子">
              <span class="name">商务帽子</span>
              <span class="price">￥30</span>
            </router-link>
          </li>
        </ul>
      </div>
      <a href="javascrip:;" class="next"><img src="../assets/index_slide_next.png" alt="pre"></a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Slide',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
.slide
  position relative
  padding 0 4%
  margin-bottom 120px
  .pre, .next
    display inline-block
    width 3%
    height auto
    position absolute
    left 0
    top 35%
  .next
    left auto
    right 0
  .wrap
    overflow hidden
    width 100%
  ul
    li
      float left
      width 22.75%
      margin-right 3%
      &:last-child
        margin-right 0
      img
        margin-bottom 10px
      span
        font-size 1.4rem
        color #333
        display block
        text-align center
        padding 5px 0
      .price
        font-size 1.2rem
</style>
