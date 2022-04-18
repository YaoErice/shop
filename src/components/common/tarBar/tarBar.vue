<template>
  <div class="tarBar">
    <slot></slot>
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

</style>
