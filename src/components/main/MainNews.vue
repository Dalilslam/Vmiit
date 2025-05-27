<template>
  <section class="main-news">
    <div class="header">
      <h2>Новости</h2>
      <router-link to="#" class="all-news-link">Все новости</router-link>
    </div>

    <div class="news-grid">
      <!-- Карточка 1 -->
      <NewsCard
          :news="NewsData[0]"
          :grid-template-areas="`
          'title title title title'
          'image description description description'
          'image description description description'
          '. . . .'
        `"
          class="card-one"
      />

      <!-- Карточка 2 -->
      <NewsCard
          :news="NewsData[1]"
          :grid-template-areas="`
          'title title title title'
          'image image description description'
          'image image description description'
          '. . . .'
        `"
          class="card-two"
      />

      <!-- Карточка 3 -->
      <NewsCard
          :news="NewsData[2]"
          :grid-template-areas="`
          'title title title title'
          'description description description description'
          '. . . .'
        `"
          class="card-three"
      />

      <!-- Карточка 4 -->
      <NewsCard
          :news="NewsData[3]"
          :grid-template-areas="`
          'title title title title title title title title'
          'image description description description description description description description'
          'image description description description description description description description'
          '. . . . . . . .'
        `"
          class="card-four"
      />
    </div>
  </section>
</template>

<script setup>
import NewsCard from './mainNews/NewsCard.vue';
import NewsData from '@/assets/mock-JSON/mock-main-news.json';
</script>

<style scoped>

.header {
  @apply flex justify-between items-center mb-4;
}

.header h2 {
  @apply text-2xl font-semibold text-white;
}

.all-news-link {
  @apply py-2 px-4 bg-purpleVMiIT text-white text-sm font-medium rounded-lg hover:bg-white hover:text-black transition;
}

.news-grid {
  @apply grid gap-4;
  grid-template-columns: repeat(4, 1fr); /* 4 равные колонки */
  grid-template-rows: auto;
  grid-template-areas:
    "card-one card-one card-two card-two"
    "card-three card-three card-two card-two"
    "card-four card-four card-four card-four";
}

.card-one {
  grid-area: card-one;
}

.card-two {
  grid-area: card-two;
}

.card-three {
  grid-area: card-three;
}

.card-four {
  grid-area: card-four;
}
</style>