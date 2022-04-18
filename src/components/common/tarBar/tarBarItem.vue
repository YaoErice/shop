<template>
  <div class="tarBarItem" @click="itemClick()">
    <div class="icon" v-if="!active">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{isActive:active}">
      <slot class="" name="item-text"></slot>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "tarBarItem",
  data(){
    return{
      // active:true
    }
  },
  props:{
    path:String
  },
  computed:{
    active(){
      return this.$route.path.indexOf(this.path)!==-1
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path).catch(err=>{})
    }
  }
}
</script>

<style scoped>
.tarBarItem{
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.tarBarItem img{
  width: 22px;
  height: 22px;
  vertical-align: middle;
}

.isActive {
  color: #ff5777;
}

</style>
