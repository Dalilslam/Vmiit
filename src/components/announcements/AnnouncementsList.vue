<template>
  <ul class="announcements-list">
    <li 
      v-for="(item, index) in sortedAnnouncements" 
      :key="item.id" 
      class="announcement-item"
    >
      <!-- Заголовок объявления, дата и стрелка -->
      <div class="flex justify-between items-center cursor-pointer" @click="toggleAnnouncement(item.id)">
        <div class="flex flex-col">
          <h2 class="announcement-title">{{ item.title }}</h2>
          <span class="announcement-date">{{ item.date }}</span>
        </div>
        <span 
          :class="{ 'rotate-180': openIds.includes(item.id) }" 
          class="announcement-arrow"
        >
          ^
        </span>
      </div>
      
      <!-- Контейнер для анимации -->
      <div class="content-wrapper" :class="{ 'open': openIds.includes(item.id) }">
        <p class="announcement-description">{{ item.description }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AnnouncementsList',
  props: {
    announcements: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openIds: [], // Массив с ID открытых объявлений
    };
  },
  computed: {
    sortedAnnouncements() {
      return [...this.announcements].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  },
  methods: {
    toggleAnnouncement(id) {
      if (this.openIds.includes(id)) {
        this.openIds = this.openIds.filter(itemId => itemId !== id);
      } else {
        this.openIds.push(id);
      }
    },
  },
};
</script>

<style scoped>
.announcements-list {
  @apply bg-black rounded-lg;
}

.announcement-item {
  @apply px-10 py-4 border-t border-white transition-all duration-500 ease-in-out; /* Отступы */
}

.announcement-item:last-child {
  @apply border-b border-white;
}

.announcement-title {
  @apply text-lg font-medium text-white;
}

.announcement-date {
  @apply text-purple-800 text-sm mt-1;
}

/* Обертка для анимации */
.content-wrapper {
  @apply bg-purple-800 bg-opacity-60 px-4 py-4 rounded-lg overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 pt-0 pb-0;
}

/* Открытое состояние */
.content-wrapper.open {
  @apply opacity-100 transition-all duration-300 ease-in-out px-4 py-4 mt-3 rounded-lg bg-purple-800 bg-opacity-50 max-h-[132px] pt-4 pb-4;
}

/* Описание с ограничением на 5 строк */
.announcement-description {
  @apply text-white text-sm; /* Параметры для текста */
  display: -webkit-box;
  -webkit-line-clamp: 5; /* Ограничение на 5 строк */
  -webkit-box-orient: vertical;
  overflow: hidden; /* Скрыть текст, который не помещается */
}

/* Анимация стрелки */
.announcement-arrow {
  @apply cursor-pointer text-white text-2xl transition-transform duration-300;
}

</style>
