<template>
  <div class="announcement-item">
    <p class="text">{{ announcement.text }}</p>
    <p v-if="announcement.date" class="date">{{ announcement.date }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  announcement: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.announcement-item {
  @apply border-b-2 border-white pt-2 pb-2 cursor-pointer transition-transform transform hover:scale-105 flex items-center;
}

.text {
  @apply text-white font-medium mr-2;
}

.date {
  @apply text-purpleVMiIT50 font-medium text-sm;
}
</style>