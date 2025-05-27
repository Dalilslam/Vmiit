<template>
  <div class="partners-container">
    <h2 class="title">Наши <span class="highlight">партнеры</span></h2>
    <div class="partners-logo-container">
      <div class="grid-container">
        <div
            v-for="partner in partners"
            :key="partner.id"
            class="partner-box"
            :class="{ 'selected': userHasSelected && selectedPartner === partner }"
            @click="selectPartner(partner)"
        >
          <img :src="partner.logo" :alt="partner.name" class="partner-logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, onMounted } from 'vue';
import partnersData from '@/assets/mock-JSON/mock-partners.json';

const partners = ref([]);
const selectedPartner = ref(null);
const userHasSelected = ref(false); // Новый флаг, отслеживающий выбор вручную
const emit = defineEmits(['select-partner']);

onMounted(() => {
  partners.value = partnersData;
  if (partners.value.length > 0) {
    selectedPartner.value = partners.value[0]; // Первая компания выбирается, но не заливается
    emit('select-partner', selectedPartner.value);
  }
});

const selectPartner = (partner) => {
  selectedPartner.value = partner;
  userHasSelected.value = true; // Пользователь сделал выбор
  emit('select-partner', partner);
};
</script>

<style scoped>
.title {
  @apply text-3xl font-bold mt-[2vw] mb-[3%];
}

.highlight {
  @apply text-[#7D61F2];
}

.partners-logo-container {
  @apply w-4/5 mx-auto;
}

/* Сетка для логотипов компаний */
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 блока в строке */
  gap: 1.5vw;
  justify-content: center;
  margin-bottom: 5%;
}

/* Блок с логотипами */
.partner-box {
  width: 15.6vw;
  height: 15.6vw;
  min-width: 150px;
  min-height: 150px;
  border-radius: 20px;
  border: 3px solid #7D61F2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
}

.partner-box:hover{
  background: linear-gradient(180deg, #7d61f2 0%, #B949CB 100%);
  transform: scale(1.04); /* Увеличение кнопки при наведении */
  border: none;

}
.partner-box.selected{
  background: #7d61f2;
  border: none;
}

.partner-logo {
  @apply max-w-[80%] max-h-[80%];
}

/* Адаптивность: для экранов меньше 768px уменьшаем количество колонок */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr); /* 3 блока в строке на средних экранах */
  }
}

/* Адаптивность: для экранов меньше 480px */
@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* 2 блока в строке на маленьких экранах */
  }
}
</style>
