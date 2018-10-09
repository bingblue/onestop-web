<template>
  <div>
    <a class="btn-user" href="javascript:;"></a>
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
  </div>
</template>

<script>
export default {
  name: 'DropDownMenu',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
a
  display inline-block
  width 45px
  height 45px
.btn-search
  background url(../assets/icon_search.png)
.btn-user
  background url(../assets/icon_user.png)
</style>
