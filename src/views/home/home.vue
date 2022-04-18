<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">
        <p>购物街</p>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "@/components/common/navBar/navBar";
export default {
  name: "home",
  components:{
    navBar
  }
}
</script>

<style scoped>
.home-nav {
  background: #ff5777;
}
.home-nav p{
  color: #ffffff;
}
</style>
