<template>
  <div class="slide">
    <ul>
      <li>
        <router-link to="/" title="某某新款帽子JANS">
          <img src="../assets/index_featured_1.jpg" alt="精选商品">
          <span class="name">某某新款帽子JANS</span>
          <span class="address">美国 · 需要提前5天预约</span>
          <span class="info">查看详情</span>
          <span class="share">分享</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" title="某某新款帽子JANS">
          <img src="../assets/index_featured_1.jpg" alt="精选商品">
          <span class="name">某某新款帽子JANS</span>
          <span class="address">美国 · 需要提前5天预约</span>
          <span class="info">查看详情</span>
          <span class="share">分享</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" title="某某新款帽子JANS">
          <img src="../assets/index_featured_1.jpg" alt="精选商品">
          <span class="name">某某新款帽子JANS</span>
          <span class="address">美国 · 需要提前5天预约</span>
          <span class="info">查看详情</span>
          <span class="share">分享</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" title="某某新款帽子JANS">
          <img src="../assets/index_featured_1.jpg" alt="精选商品">
          <span class="name">某某新款帽子JANS</span>
          <span class="address">美国 · 需要提前5天预约</span>
          <span class="info">查看详情</span>
          <span class="share">分享</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Featured',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
.slide
  position relative
  width 74%
  padding 0 4%
  margin 0 auto
  ul
    width 100%
    text-align center
    li
      width 40%
      @media screen and (max-width: 640px)
        width 90%
      display inline-block
      margin 20px 5% 60px
      img
        border 1px solid #f0f4f7
      span
        display block
        color #b3b3bb
        text-align left
      .name
        color #ff81dd
        font-size 2.3rem
        margin 30px 0 15px 0
      .address
        margin-bottom 35px
      .info,
      .share
        float left
        font-size 1.2rem
      .share
        margin-left 30px
</style>
