<template>
  <div class="tarBar">
    <div class="tarBarItem">
      首页
    </div>
    <div class="tarBarItem">
      分类
    </div>
    <div class="tarBarItem">
      购物车
    </div>
    <div class="tarBarItem">
      我的
    </div>
  </div>
</template>

<script>
export default {
  name: 'tarBar'
}
</script>

<style scoped>
  .tarBar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #f6f6f6;
    height: 49px;
    box-shadow: 0 2px 16px rgba(0,0,0,.3);
  }
  .tarBar .tarBarItem{
    flex: 1;
    display: flex;
    font-size: 16px;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
</style>
