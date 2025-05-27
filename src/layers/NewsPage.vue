<template>
  <div class="news-page">
    <!-- Контейнер для стрелки и заголовка -->
    <div class="news-header">
      <a href="http://localhost:8080" class="back-arrow">
        <span class="material-icons">arrow_back</span>
      </a>
      <h1 class="news-title">
        Новости <span class="purple-text">кафедры</span>
      </h1>
    </div>

    <NewsList :news="paginatedNews" />

    <!-- Улучшенная пагинация -->
    <div class="pagination">
      <!-- Кнопка "Назад" -->
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1" 
        class="page-arrow"
      >
        <span class="material-icons">arrow_back</span>
      </button>

      <!-- Кнопки с номерами страниц -->
      <button 
        v-for="page in totalPages" 
        :key="page" 
        @click="setPage(page)" 
        :class="{ 'active-page': currentPage === page }"
        class="page-btn"
      >
        {{ page }}
      </button>

      <!-- Кнопка "Вперед" -->
      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages" 
        class="page-arrow"
      >
        <span class="material-icons">arrow_forward</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import NewsList from '@/components/news/NewsList.vue';
import newsData from '@/assets/mock-json/news.json';

const news = ref(newsData);
const currentPage = ref(1);
const newsPerPage = 8;

// Отсортируем новости по дате (по убыванию)
const sortedNews = computed(() => {
  return [...news.value].sort((a, b) => new Date(b.date) - new Date(a.date));
});

const paginatedNews = computed(() => {
  const startIndex = (currentPage.value - 1) * newsPerPage;
  return sortedNews.value.slice(startIndex, startIndex + newsPerPage);
});

const totalPages = computed(() => Math.ceil(sortedNews.value.length / newsPerPage));

const setPage = (page) => {
  currentPage.value = page;
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Динамическая предзагрузка изображений
onMounted(() => {
  const preloadImages = newsData.map(item => item.imagePath).filter(path => path);

  preloadImages.forEach(imagePath => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = `/src/assets/mock-images/${imagePath}`;
    link.as = 'image';
    document.head.appendChild(link);
  });
});
</script>

<style scoped>
/* Контейнер для заголовка и стрелки */
.news-header {
  @apply flex items-center mb-9;
}

.news-page {
  @apply bg-black text-white p-6;
}

.news-title {
  @apply text-3xl font-bold text-white leading-none mb-1;
}

.purple-text {
  @apply text-purple-500;
}

/* Сетка для новостей: по 2 новости в строке */
.news-list {
  @apply grid grid-cols-2 gap-6;
}

/* На экранах меньше 1080px, новости по 1 в строке */
@media (max-width: 1080px) {
  .news-list {
    @apply grid-cols-1;
  }
}

/* Пагинация */
.pagination {
  @apply flex justify-center items-center gap-4 mt-12;
}

/* Кнопки страниц */
.page-btn {
  @apply bg-gray-700 text-white px-4 py-2 rounded-[20px] transition-all duration-300 cursor-pointer text-lg;
}

.page-btn:hover {
  @apply bg-white text-black;
}

/* Активная страница */
.active-page {
  @apply bg-purple-600 text-white;
}

.active-page:hover {
  @apply bg-white text-black;
}

/* Стрелки для перехода между страницами */
.page-arrow {
  @apply inline-flex items-center justify-center w-[40px] h-[30px] rounded-full bg-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed;
}

.page-arrow .material-icons {
  @apply text-white text-[32px] transition-all duration-300;
}

.page-arrow:hover:not(:disabled) {
  @apply bg-white;
}

.page-arrow:hover:not(:disabled) .material-icons {
  @apply text-black;
}

/* Стиль для стрелки "назад" в заголовке */
.back-arrow {
  @apply inline-flex items-center justify-center mr-5 w-[40px] h-[40px] rounded-full bg-purple-600 transition-all duration-300;
}

.back-arrow .material-icons {
  @apply text-white text-[35px] transition-all duration-300;
}

.back-arrow:hover {
  @apply bg-white;
}

.back-arrow:hover .material-icons {
  @apply text-black;
}

</style>
