<template>
  <div class="achievements">
    <h2 class="title">Достижения <span class="highlight">в учебе</span></h2>
    <div class="separator"></div> <!-- Верхняя линия -->

    <div v-for="(achievement, index) in achievements" :key="achievement.id">
      <div class="achievement">
        <p>{{ achievement.text }}</p>
        <span>{{ achievement.date }}</span>
      </div>
      <div class="separator"></div> <!-- Разделители между достижениями и нижняя линия -->
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps(["student"]);
const achievements = computed(() => props.student?.achievements || []);
</script>

<style scoped>
.title {
  @apply mt-[2.6vw] text-3xl font-bold mb-[3%];
}

.highlight {
  @apply text-[#7D61F2];
}

.achievements {
  @apply mt-5 w-full pb-[60px];
}

.separator {
  @apply w-full border-b-[2px];
}

.achievement {
  @apply flex justify-between w-full py-5;
}

.achievement p {
  font-size: clamp(1.1rem, 1.54vw, 2rem);
}

.achievement span {
  @apply opacity-50 text-[#7D61F2];
  font-size: clamp(1.1rem, 1.6vw, 2rem);
}
</style>