<template>
  <div class="news-details-container">
    <div class="news-header">
      <router-link to="/news" class="back-arrow">
        <span class="material-icons">arrow_back</span>
      </router-link>
      <h1 class="news-title">{{ news.title }}</h1>
    </div>

    <p class="news-date">Дата публикации: {{ formattedDate }}</p>

    <!-- Слайдер с изображениями -->
    <div v-if="news.images && news.images.length > 0" class="image-slider">
      <button v-if="canSlidePrev && shouldShowButtons" class="slider-btn prev-btn" @click="prevSlide">
        <span class="material-icons">arrow_back</span>
      </button>

      <div class="slider-wrapper">
        <div class="slider-inner" :style="sliderStyle">
          <img 
            v-for="(image, index) in news.images" 
            :key="index"
            :src="`/src/assets/mock-images/${image}`" 
            alt="News Image" 
            class="slider-img"
          />
        </div>
      </div>

      <button v-if="canSlideNext && shouldShowButtons" class="slider-btn next-btn" @click="nextSlide">
        <span class="material-icons">arrow_forward</span>
      </button>
    </div>

    <div class="news-description" v-html="formattedDescription"></div>
  </div>
</template>


<script>
import newsData from '@/assets/mock-json/news.json';

export default {
  name: 'NewsDetails',
  data() {
    return {
      news: {},
      currentSlide: 0,
      containerWidth: 0,
      imageWidth: 0,
      maxSlide: 0,
    };
  },
  computed: {
    formattedDate() {
      const date = new Date(this.news.date);
      return date.toLocaleDateString();
    },
    formattedDescription() {
      return this.news.description ? this.news.description.replace(/\n\n/g, '<br /><br />') : '';
    },
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentSlide}px)`,
        transition: 'transform 0.3s ease',
      };
    },
    canSlideNext() {
      return this.currentSlide + this.containerWidth < this.maxSlide;
    },
    canSlidePrev() {
      return this.currentSlide > 0;
    },
    shouldShowButtons() {
      return this.news.images.length * (this.imageWidth + 16) > this.containerWidth;
    }
  },
  created() {
    const newsId = this.$route.params.id;
    const newsItem = newsData.find((item) => item.id === parseInt(newsId));

    if (newsItem) {
      this.news = newsItem;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.updateSizes();
      setTimeout(this.updateSizes, 100);
      window.addEventListener('resize', this.updateSizes);
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateSizes);
  },
  methods: {
    updateSizes() {
      this.$nextTick(() => {
        const sliderWrapper = this.$el.querySelector('.slider-wrapper');
        const imageElement = this.$el.querySelector('.slider-img');

        if (sliderWrapper && imageElement) {
          this.containerWidth = sliderWrapper.offsetWidth;
          this.imageWidth = imageElement.offsetWidth;
          this.maxSlide = this.news.images.length * (this.imageWidth + 16);
          console.log("Updated sizes:", {
            containerWidth: this.containerWidth,
            imageWidth: this.imageWidth,
            maxSlide: this.maxSlide
          });
        }
      });
    },
    nextSlide() {
      if (this.canSlideNext) {
        const remainingSpace = this.maxSlide - (this.currentSlide + this.containerWidth);
        if (remainingSpace < this.containerWidth) {
          this.currentSlide += remainingSpace;
        } else {
          this.currentSlide += this.containerWidth;
        }
        console.log("Next Slide:", this.currentSlide);
      }
    },
    prevSlide() {
      if (this.canSlidePrev) {
        if (this.currentSlide < this.containerWidth) {
          this.currentSlide = 0;
        } else {
          this.currentSlide -= this.containerWidth;
        }
        console.log("Prev Slide:", this.currentSlide);
      }
    }
  }
};
</script>

<style scoped>
/* Контейнер страницы */
.news-details-container {
  @apply bg-black text-white p-6;
}

/* Контейнер заголовка и стрелки */
.news-header {
  @apply flex items-center mb-9;
}

/* Стрелка "Назад" */
.back-arrow {
  @apply inline-flex items-center justify-center mr-5 w-[40px] h-[40px] rounded-full bg-purple-600 transition-all duration-300 flex-shrink-0 aspect-square;
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

/* Заголовок */
.news-title {
  @apply text-3xl font-bold text-white leading-none mb-1;
}

/* Дата */
.news-date {
  @apply text-lg text-purple-800 mb-5;
}

/* Слайдер */
.image-slider {
  @apply relative mb-5;
}

.slider-wrapper {
  @apply relative w-full overflow-hidden;
}

.slider-inner {
  @apply flex gap-4; /* Промежутки между картинками */
}

.slider-img {
  @apply h-[400px] object-cover rounded-lg shadow-lg flex-shrink-0;
}

/* Кнопки слайдера */
.slider-btn {
  @apply absolute top-1/2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300;
  z-index: 10;
  cursor: pointer;
}

.slider-btn .material-icons {
  @apply text-3xl;
}

.slider-btn:hover {
  @apply bg-white text-black;
}

.prev-btn {
  @apply left-3;
}

.next-btn {
  @apply right-3;
}

/* Слайдер */
.image-slider {
  @apply relative mb-5;
}

.slider-wrapper {
  @apply relative w-full overflow-hidden;
}

.slider-inner {
  @apply flex gap-4;
}

.slider-img {
  @apply h-[400px] object-cover rounded-lg shadow-lg flex-shrink-0;
}

/* Описание */
.news-description {
  @apply text-gray-300 text-lg leading-relaxed mt-5;
}
</style>
