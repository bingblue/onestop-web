<template>
  <el-row>
    <el-col :span="18" :offset="3" :xs="{span: 22, offset: 1}" class="slide">
      <a href="javascrip:;" @click="pre" class="pre"><img src="@/assets/index/index_slide_pre.png" alt="pre"></a>
      <div class="wrap">
        <ul :style="style" ref="ul">
          <li v-for="(item, index) in slideData" :key="index">
            <router-link :to="item.url" :title="item.name">
              <img :src="item.img" :alt="item.name">
              <span class="name">{{item.name}}</span>
              <span class="price">￥{{item.price}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <a href="javascrip:;" @click="next" class="next"><img src="@/assets/index/index_slide_next.png" alt="pre"></a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Slide',
  data () {
    return {
      slideData: [
        {
          name: '商务帽子',
          price: '30',
          img: '/img/index_slide_4.jpg',
          url: '#'
        }, {
          name: '商务提包',
          price: '330',
          img: '/img/index_slide_1.jpg',
          url: '#'
        }, {
          name: '商务鞋子',
          price: '130',
          img: '/img/index_slide_2.jpg',
          url: '#'
        }, {
          name: '商务眼睛',
          price: '230',
          img: '/img/index_slide_3.jpg',
          url: '#'
        }, {
          name: '商务提包',
          price: '330',
          img: '/img/index_slide_1.jpg',
          url: '#'
        }
      ],
      now: 0,
      style: {
        transform: 'translateX(0px)'
      }
    }
  },
  methods: {
    pre () {
      this.now = this.now - 1 < 0 ? this.slideData.length - 4 : this.now - 1
      this.goTo()
    },
    next () {
      this.now = this.now + 1 > (this.slideData.length - 4) ? 0 : this.now + 1
      this.goTo()
    },
    goTo () {
      // 获取<li>元素
      let domLi = this.$refs.ul.children[0]
      // 计算<li>宽度 + marginRight的值，marginRight为（宽度/7.5），见CSS
      let domDiff = domLi.offsetWidth + (domLi.offsetWidth / 7.5)
      this.style.transform = `translateX(-${this.now * domDiff}px)`
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
    transition 1s
    width 9999px
    li
      float left
      width 15vw
      margin-right 2vw
      @media screen and (max-width: 750px)
        width 19vw
        margin-right 2vw
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
