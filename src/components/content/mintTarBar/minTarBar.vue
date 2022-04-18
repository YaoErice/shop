<template>
  <tar-bar>
    <tar-bar-item path="/home">
      <img slot="item-icon" src="../../../assets/img/tarbar/home.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tarbar/home_active.svg" alt="">
      <span slot="item-text">首页</span>
    </tar-bar-item>
    <tar-bar-item path="/category">
      <img slot="item-icon" src="../../../assets/img/tarbar/category.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tarbar/category_active.svg" alt="">
      <span slot="item-text">分类</span>
    </tar-bar-item>
    <tar-bar-item path="/cart">
      <img slot="item-icon" src="../../../assets/img/tarbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tarbar/shopcart_active.svg" alt="">
      <span slot="item-text">购物车</span>
    </tar-bar-item>
    <tar-bar-item path="/profile">
      <img slot="item-icon" src="../../../assets/img/tarbar/profile.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tarbar/profile_active.svg" alt="">
      <span slot="item-text">我的</span>
    </tar-bar-item>
  </tar-bar>
</template>

<script>
import tarBar from "@/components/common/tarBar/tarBar";
import tarBarItem from "@/components/common/tarBar/tarBarItem";
export default {
  name: "minTarBar",
  components: {
    tarBar,
    tarBarItem
  }
}
</script>

<style scoped>

</style>
