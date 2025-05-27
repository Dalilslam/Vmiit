<template>
	<div class="tags">
	  <button
		v-for="tag in tags"
		:key="tag"
		class="tag-btn"
		@click="goToTag(tag)"
	  >
		{{ tag }}
	  </button>
	</div>
  </template>
  
  <script setup>
import { ref } from 'vue'

const tags = ref(['Учебные материалы', 'Пересдачи','Ученики']);

const goToTag = (tag) => {
  const sectionIds = {
    'Учебные материалы': 'materials-section',
    'Ученики': 'students-section',
    'Пересдачи': 'retakes-section'
  };

  const element = document.getElementById(sectionIds[tag]);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
  
  <style scoped>
.tags {
  @apply flex justify-center flex-wrap gap-[0.63rem] mt-20 ml-24 font-medium;
}

.tags button {
  @apply  py-2 px-5 rounded-2xl text-xl font-normal;
}
.tags button {
  width: 269px;
  border: 2px solid #7d61f2;
  border-radius: 20px;
  transition: background 0.5s ease, transform 0.3s ease, color 0.3s;

}

.tags button:hover {
  /* background: linear-gradient(180deg, #7d61f2 0%, #b949cb 100%); */
  background: linear-gradient(180deg, #7d61f2 0%, #b949cb 100%);
  transform: scale(1.03); /* Увеличение кнопки при наведении */
  border: none;
}

  </style>
  