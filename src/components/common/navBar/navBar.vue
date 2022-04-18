<template>
  <div class="navBar">
    <div class="leftNav">
      <slot name="left"></slot>
    </div>
    <div class="centerNav">
      <slot name="center"></slot>
    </div>
    <div class="rightNav">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar"
}
</script>

<style scoped>
  .navBar {
    height: 44px;
    line-height: 44px;
    display: grid;
    grid-template-columns: 60px calc(100% - 60px - 60px) 60px;
    justify-content: space-between;
  }

  .centerNav{
    text-align: center;
    font-size: 16px;
  }
</style>
