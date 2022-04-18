<template>
  <div id="app">
    <router-view></router-view>
   <min-tar-bar></min-tar-bar>
  </div>
</template>

<script>

import minTarBar from "@/components/content/mintTarBar/minTarBar";

export default {
  name: 'app',
  components: {
    minTarBar
  }
}
</script>

<style>
@import "/src/assets/css/base.css";
@import "/src/assets/css/normalize.css";
</style>
