<template>
  <div class="welcome-text">
      <h1>Добро пожаловать на сайт кафедры</h1>
      <p class="gradient-text">вычислительной механики и информационных технологий</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(180deg, #b949cb 0%, #7D61F2 78%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.welcome-text {
  @apply text-3xl font-bold text-white;
}
</style>