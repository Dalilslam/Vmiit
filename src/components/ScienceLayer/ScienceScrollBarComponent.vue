<template>
  <div class="gallery-container">
    <div class="carousel">
      <button 
        class="nav-button prev-button" 
        @click="prevImage"
        :disabled="elements.length <= 1"
      >
        &lt;
      </button>
      
      <div class="image-container">
        <transition :name="transitionDirection" mode="out-in">
          <div
            :key="currentElementIndex"
            class="carousel-item"
          >
            <img
              v-if="isImage(currentElement.element_url)"
              :src="currentElement.element_url"
              alt="Изображение"
              class="gallery-image"
              @click="openImage(currentElement.element_url)"
              @error="handleImageError"
            />
            <div v-else class="download-container">
              <a 
                :href="currentElement.element_url" 
                :download="extractFileName(currentElement.element_url)" 
                class="download-link"
              >
                <img
                  :src="downloadIcon"
                  alt="Скачать файл"
                  class="download-icon"
                />
                <span class="file-name">{{ extractFileName(currentElement.element_url) }}</span>
              </a>
            </div>
          </div>
        </transition>
      </div>
      
      <button 
        class="nav-button next-button" 
        @click="nextImage"
        :disabled="elements.length <= 1"
      >
        &gt;
      </button>
    </div>

    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content">
        <img :src="currentImage" alt="Увеличенное изображение" />
      </div>
    </div>
  </div>
</template>

<script>
import downloadIcon from '@/svgs/DocumentsDownload.svg';

export default {
  name: 'ScienceScrollBarComponent',
  props: {
    elements: {
      type: Array,
      default: () => [],
      validator: value => value.every(el => el.element_url)
    },
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      currentElementIndex: 0,
      isModalOpen: false,
      currentImage: '',
      downloadIcon,
      transitionDirection: 'slide-next'
    };
  },
  computed: {
    currentElement() {
      if (!this.elements.length) return { element_url: '' };
      return this.elements[this.currentElementIndex];
    }
  },
  methods: {
    nextImage() {
      if (this.elements.length <= 1) return;
      this.transitionDirection = 'slide-next';
      this.currentElementIndex = (this.currentElementIndex + 1) % this.elements.length;
    },
    prevImage() {
      if (this.elements.length <= 1) return;
      this.transitionDirection = 'slide-prev';
      this.currentElementIndex = 
        (this.currentElementIndex - 1 + this.elements.length) % this.elements.length;
    },
    openImage(image) {
      this.currentImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    isImage(url) {
    if (!url) return false;
    // Проверка по расширению и типу
    const isImageExt = url.match(/\.(png|jpg|jpeg|gif|webp|svg|bmp)$/i);
    const element = this.elements[this.currentElementIndex];
    return isImageExt || (element?.type === 'image');
  },
    extractFileName(url) {
      return url?.split('/').pop() || 'file';
    },
    handleImageError(e) {
      e.target.src = 'path/to/default/image.png';
    }
  },
  watch: {
    cardId() {
      this.currentElementIndex = 0;
    }
  }
};
</script>

<style scoped>
.gallery-container {
  @apply p-4 rounded-lg mt-2;
  background-color: rgba(125, 97, 242, 0.3);
}

.carousel {
  @apply flex items-center justify-center relative;
  height: 200px;
}

.nav-button {
  @apply bg-transparent border-none cursor-pointer text-2xl text-white z-10;
  transition: opacity 0.3s;
}

.nav-button:disabled {
  @apply opacity-30 cursor-not-allowed;
}

.prev-button {
  @apply absolute left-2;
}

.next-button {
  @apply absolute right-2;
}

.image-container {
  @apply w-full h-full overflow-hidden flex justify-center items-center;
}

.carousel-item {
  @apply flex justify-center items-center;
  width: 200px;
  height: 200px;
}

.gallery-image {
  @apply max-w-full max-h-full object-contain border-2 rounded-lg cursor-pointer;
  border-color: rgba(125, 97, 242, 1);
}

.download-container {
  @apply flex flex-col items-center justify-center;
  width: 160px;
  height: 160px;
}

.download-link {
  @apply flex flex-col items-center justify-center no-underline;
}

.download-icon {
  @apply object-contain cursor-pointer;
  width: 120px;
  height: 120px;
}

.file-name {
  @apply text-white text-center mt-2 text-sm;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Анимации */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.5s ease;
}

.slide-next-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-next-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-prev-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-prev-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.modal-overlay {
  @apply fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50;
  backdrop-filter: blur(10px);
}

.modal-content {
  @apply max-w-full max-h-screen border-2 bg-white shadow-lg rounded-lg;
}
</style>