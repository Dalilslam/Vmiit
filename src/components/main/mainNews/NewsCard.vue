<template>
  <div
      :class="['news-card', highlight ? 'highlight-card' : '']"
      class="relative"
      :style="{
      display: 'grid',
      gridTemplateAreas: gridTemplateAreas,
      gridTemplateRows: gridTemplateRows,
      gridTemplateColumns: gridTemplateColumns,
    }"
  >
    <!-- Заголовок -->
    <h3 class="news-title text-2xl font-semibold text-purpleVMiIT mb-4 text-center transition" style="grid-area: title">
      {{ news.title }}
    </h3>

    <!-- Контейнер для фото и основного текста -->
    <div class="news-body flex items-center gap-4 mb-4" style="grid-area: description">
      <!-- Основной текст -->
      <p class="news-description text-sm font-medium text-white flex-1 transition">
        {{ news.description }}
      </p>
    </div>

    <!-- Фото -->
    <div v-if="news.image" class="news-image transition flex-shrink-0" style="grid-area: image">
      <img
          :src="news.image"
          alt="News Image"
          class="w-24 h-24 object-cover mx-auto rounded-lg"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  news: {
    type: Object,
    required: true,
  },
  highlight: {
    type: Boolean,
    default: false,
  },
  gridTemplateAreas: {
    type: String,
    default: '',
  },
  gridTemplateRows: {
    type: String,
    default: 'auto auto auto auto', // По умолчанию 4 строки
  },
  gridTemplateColumns: {
    type: String,
    default: '1fr 1fr 1fr 1fr', // По умолчанию 4 колонки
  },
});

const router = useRouter();

// Функция для навигации
const navigateToNews = () => {
  router.push(props.news.link);
};
</script>

<style scoped>
.news-card {
  transition: all 0.3s ease;
  @apply border-2 border-purpleVMiIT p-4 rounded-lg;
  gap: 1rem; /* Отступы между элементами сетки */
}

.news-card:hover {
  transform: scale(1.02);
  @apply border-0 bg-gradient-to-b from-purpleVMiIT to-gradbot;
}

.news-card:hover .news-title {
  transform: scale(1.02);
  color: white;
}

.news-card:hover .news-image img {
  transform: scale(1.02);
}

.news-card:hover .news-description {
  transform: scale(1.02);
  color: white;
}

.news-card:hover .news-button {
  background-color: white;
  color: black;
  transform: scale(1.05);
}

.news-button {
  justify-self: end; /* Выравниваем кнопку по правому краю */
  align-self: end; /* Выравниваем кнопку по нижнему краю */
}
</style>