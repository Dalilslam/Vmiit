<template>
  <div id="app" class="app font-manrope" :class="{ 'dark-theme': isDarkTheme }">
    <Header @toggle-theme="toggleTheme" />
    <div class="container mx-auto flex">
      <router-view  />
      <ScienceLayer />
    </div>
  </div>
</template>

<script setup lang="js">
import { ref } from "vue";

import Header from "@/components/Header.vue";
import ScienceLayer from './layers/ScienceLayer.vue';
// Состояние темы
const isDarkTheme = ref(false);

function toggleTheme() {
  isDarkTheme.value = !isDarkTheme.value;
  document.body.className = isDarkTheme.value ? "dark-theme" : "light-theme";
}
</script>

<style scoped>
</style>
