<template> 
  <div class="news-list">
    <div 
      v-for="item in news" 
      :key="item.id" 
      class="news-card"
    >
      <a :href="`/news/${item.id}`" class="news-link">
        <h2 class="news-card-title">{{ item.title }}</h2>
        <div class="news-content">
          <img v-if="item.imagePath" :src="`/src/assets/mock-images/${item.imagePath}`" alt="News Image" class="news-img" />
          <p class="news-description">{{ item.description }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  news: Array
});
</script>

<style scoped>
.news-list {
  @apply grid gap-6 grid-cols-2 md:grid-cols-2;
}

.news-card {
  @apply bg-black outline outline-2 outline-purple-500 rounded-[20px] p-5 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-b from-purple-500 to-pink-500 hover:outline-none;
}

.news-link {
  @apply flex flex-col h-full text-white;
}

.news-card-title {
  @apply text-lg font-semibold text-center mb-3;
}

.news-content {
  @apply flex gap-4;
}

.news-img {
  @apply w-[200px] h-[200px] object-cover rounded-[20px] outline outline-1 outline-purple-500; /* или убрать object-cover или анимация*/
}

.news-card:hover .news-img {
  @apply outline-none;
}

.news-description {
  @apply flex-1 text-sm text-gray-300 overflow-hidden;
  max-height: 4.8em; /* Ограничение высоты на 4 строки */
  line-height: 1.2em;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
}
</style>
