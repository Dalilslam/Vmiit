<template>
  <div class="projects-container" v-if="selectedPartner">
    <h2 class="title">Наши <span class="highlight">проекты</span></h2>
    <div class="project-box fade-in">
      <div class="project-logo-container">
        <div class="logo-wrapper" :key="selectedPartner.logo">
          <a :href="selectedPartner.website" target="_blank">
            <img :src="selectedPartner.logo" :alt="selectedPartner.name" class="project-logo fade-in-logo" />
          </a>
        </div>
      </div>
      <div class="project-list">
        <div v-for="(project, index) in selectedPartner.projects" :key="project.id">
          <div v-if="index === 0" class="thick-line"></div>
          <div v-else-if="index > 0" class="thin-line"></div>
          <div class="project-item fade-in-up" :style="{ 'animation-delay': `${index * 0.1}s` }">
            <a :href="project.link" target="_blank" class="project-link">
              {{ project.name }}
            </a>
          </div>
          <div v-if="index === selectedPartner.projects.length - 1" class="thick-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  selectedPartner: Object
});
</script>

<style scoped>
.title {
  @apply text-3xl font-bold mb-[3%];
}

.highlight {
  @apply text-[#7D61F2];
}

.project-box {
  @apply rounded-[20px] border-[3px] border-[#7D61F2] p-[5.2vw] flex flex-col items-center gap-[5.2vw] w-full mb-[2vw] box-border;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
}

.project-logo-container {
  @apply w-full flex justify-center;
}

.logo-wrapper {
  @apply flex justify-center items-center w-full;
}

.project-logo {
  @apply w-auto h-auto max-w-[32vw] min-w-[300px] max-h-[15vw] min-h-[150px] object-contain;
}

/* Анимация смены логотипа */
.fade-in-logo {
  opacity: 0;
  transform: scale(0.95);
  animation: fadeInLogo 0.6s ease-in-out forwards;
}

@keyframes fadeInLogo {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.project-list {
  @apply w-full p-0 m-0 flex flex-col gap-0;
}

.project-item {
  @apply text-2xl py-[1.64vw] font-medium underline decoration-[1px];
  opacity: 0;
  animation: fadeInUp 0.6s ease-in-out forwards;
}

/* Линии */
.thick-line {
  @apply border-b-[3px];
}

.thin-line {
  @apply w-full border-b;
}

/* Анимация для текста */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .project-logo {
    @apply max-w-full min-w-[200px] max-h-[25vw];
  }

  .project-box {
    @apply p-6;
  }
}
</style>
