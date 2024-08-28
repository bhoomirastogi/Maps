<script setup>
import main1 from "./components/main.vue"
import navbar from "./components/navbar.vue";
</script>

<template>
  <navbar/> 
  <router-view />
  <!-- <main1/> -->

</template>

<style>
html,
body {
  height: 100vh;
  width: 100vw;
  margin: 0 !important;
  padding: 0;
  overflow-x: hidden;
}
</style>
