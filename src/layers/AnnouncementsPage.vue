<template>
  <div class="announcements-page">
    <!-- Контейнер для стрелки и заголовка -->
    <div class="announcements-header">
      <a href="http://localhost:8080" class="back-arrow">
        <span class="material-icons">arrow_back</span>
      </a>
      <h1 class="page-title">
        Объявления <span class="purple-text">кафедры</span>
      </h1>
    </div>

    <AnnouncementsList :announcements="announcements" />
  </div>
</template>

<script>
import AnnouncementsList from '@/components/announcements/AnnouncementsList.vue';
import announcementsData from '@/assets/mock-json/announcements.json';

export default {
  name: 'AnnouncementsPage',
  components: { AnnouncementsList },
  data() {
    return {
      announcements: announcementsData,
    };
  },
};
</script>

<style scoped>
/* Контейнер для заголовка и стрелки */
.announcements-header {
  @apply flex items-center mb-9;
}

.announcements-page {
  @apply bg-black text-white p-6 w-full;
}

.page-title {
  @apply text-3xl font-bold text-white leading-none mb-1;
}

.purple-text {
  @apply text-purple-500;
}

/* Стиль для стрелки */
.back-arrow {
  @apply inline-flex items-center justify-center mr-5 w-[35px] h-[35px] rounded-full bg-purple-600 transition-all duration-300;
}

.material-icons {
  @apply text-white text-[35px] transition-all duration-300;
}

.back-arrow:hover {
  @apply bg-white;
}

.back-arrow:hover .material-icons {
  @apply text-black;
}
</style>
