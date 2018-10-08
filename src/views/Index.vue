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
    <mu-footer></mu-footer>
  </section>
</template>

<script>
import MuHeader from '../components/Header'
import MuFooter from '../components/Footer'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    MuHeader,
    MuFooter
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

<style scoped>
h1 {
  font-size: 24px;
  text-align: center;
  color: #0099ff;
  margin-bottom: 80px;
}
.index {
  padding-bottom: 400px;
}
button.logout {
  float: right;
}
</style>
