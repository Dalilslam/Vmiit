<template>
  <section class="announcements font-manrope">
    <div class="header">
      <h2 class="title">Объявления</h2>
      <router-link to="#" class="all-announcements-link font-manrope">Все объявления</router-link>
    </div>
    <div class="announcement-list">
      <AnnouncementItem
          v-for="announcement in AnnouncementsData"
          :key="announcement.id"
          :announcement="announcement"
          @show-modal="showModal"
      />
    </div>
    <!-- Модальное окно -->
    <Modal v-if="selectedAnnouncement" :announcement="selectedAnnouncement" @close="closeModal" />
    <!-- Затемнение и блюр -->
    <div v-if="selectedAnnouncement" class="backdrop-blur"></div>
  </section>
</template>

<script setup>
import AnnouncementItem from './mainAnnouncements/AnnouncementItem.vue';
import AnnouncementsData from '@/assets/mock-JSON/mock-announcements.json';
</script>

<style scoped>
.header {
  @apply flex justify-between items-center;
}

.all-announcements-link {
  @apply py-2 px-4 bg-purpleVMiIT text-white text-sm font-medium rounded-lg hover:bg-white hover:text-black transition;
}

.announcements {
  @apply mt-4 w-full relative;
}

.title {
  @apply text-white text-2xl font-semibold mb-2 border-white;
}

.announcement-list {
  @apply flex flex-col gap-2;
}

/* Затемнение и блюр фона */
.backdrop-blur {
  @apply fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40;
}
</style>

