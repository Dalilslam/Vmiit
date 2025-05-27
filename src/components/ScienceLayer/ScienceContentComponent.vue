<template>
  <div v-for="event in currentEvents" :key="event.id" class="news-border">
    <h2 class="news-title">
      <span class="news-title-highlight">{{ event.title }}</span>
    </h2>
    <p class="news-text">{{ event.description }}</p>
    <div v-if="Array.isArray(event.elements) && event.elements.length">
      <ScienceScrollBarComponent 
        :elements="formatElements(event.elements)"
        :card-id="event.id"
      />
    </div>
  </div>
</template>

<script setup>
import ScienceScrollBarComponent from '@/components/ScienceLayer/ScienceScrollBarComponent.vue';
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const eventsData = ref({});
const isLoading = ref(false);

const currentSection = computed(() => {
  const path = route.path.split('/')[1];
  return path === 'contests' ? 'contests' : path;
});

const API_BASE_URL = 'http://176.126.162.10:8000';

const fetchDataFromBackend = async (section, id = null) => {
  try {
    const params = { 
      ...(id && { id }), 
      format: 'api' 
    };
    const response = await axios.get(`${API_BASE_URL}/scienceevent/${section}/`, { params });
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error(`Ошибка при получении данных для раздела ${section}:`, error);
    throw error;
  }
};

const formatElements = (elements) => {
  if (!Array.isArray(elements)) return [];
  
  return elements.map(element => {
    // Если элемент уже объект с полем url (пример: {url: "/media/file.jpg"})
    if (typeof element === 'object' && element.url) {
      return {
        element_url: element.url.startsWith('http') 
          ? element.url 
          : `${API_BASE_URL}${element.url}`,
        type: element.type || 'file'
      };
    }
    // Если элемент - строка (пример: "/media/file.jpg")
    return {
      element_url: typeof element === 'string' && element.startsWith('http') 
        ? element 
        : `${API_BASE_URL}${element}`,
      type: typeof element === 'string' && element.match(/\.(jpg|png|gif)$/) 
        ? 'image' 
        : 'file'
    };
  });
};

const loadEvents = async (section) => {
  if (eventsData.value[section] || isLoading.value) return;
  
  isLoading.value = true;
  try {
    const backendData = await fetchDataFromBackend(section, route.query.id);
    eventsData.value[section] = backendData;
  } catch (error) {
    console.error('Не удалось загрузить данные с бэкенда:', error);
    eventsData.value[section] = [];
  } finally {
    isLoading.value = false;
  }
};

const currentEvents = computed(() => {
  return eventsData.value[currentSection.value] || [];
});

onMounted(() => loadEvents(currentSection.value));
watch(currentSection, (newSection) => loadEvents(newSection));
watch(() => route.query.id, (newId) => {
  if (newId) {
    loadEvents(currentSection.value);
  }
});
</script>

<style>
.news-title {
  @apply text-2xl font-semibold;
}

.news-title-highlight {
  @apply text-violet-500;
}

.news-text {
  @apply text-sm font-medium;
}
.news-border {
  @apply border-2 p-6 rounded-lg mt-5;
  border-color: rgba(125, 97, 242, 1);
}
</style>