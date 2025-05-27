<template>
  <div class="main-content flex justify-between items-center" style="height: 500px; padding-top: 50px; padding-bottom: 50px">
    <!-- WelcomeText-->
    <div style="width: 50%; /*margin-left: 9%;*/">
      <WelcomeText />
    </div>

    <!-- Композиция плиток -->
    <div class="h-full" style="width: 50%; /*margin-right: 9%;*/">
      <TilesComposition />
    </div>
  </div>
</template>

<script setup>
import WelcomeText from './WelcomeText.vue';
import TilesComposition from "@/components/main/tiles/BoxComposition.vue";
</script>

<style scoped>

</style>