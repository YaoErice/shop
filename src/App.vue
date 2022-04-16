<template>
  <div id="app">
    <tar-bar></tar-bar>
  </div>
</template>

<script>

import tarBar from "@/components/tarBar";

export default {
  name: 'app',
  components: {
    tarBar
  }
}
</script>

<style>
@import "/src/assets/css/index.css";
</style>
