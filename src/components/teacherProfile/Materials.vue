<template>
	<div class="materials" id='materials-section'>
	  <div class="materials-header">
		<h2>Учебные <span class="col">материалы</span></h2>
		<div class='line-top'></div>
	  </div>
	  <div class="material-container">
		<div v-for="(category, index) in materials" :key="index" class="category">
		  <div class="category-title" @click="toggleCategory(index)">

			<span class="title-text">{{ category.title }}</span>
			<span class="arrow" :class="{ open: openCategories[index] }">▼</span>
		  </div>
  
		  <!-- Линия под заголовком категории -->
		  <div class="line"></div>
  
		  <div v-show="openCategories[index]" class="files-list">
			<div v-for="(file, fIndex) in category.files" :key="fIndex" class="file-item">
			  <a :href="file.url" class="material-title">{{ file.name }}</a>
			  <div class='line-item'></div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue"
  
  const materials = ref([]);
  const openCategories = ref([]);
  
  onMounted(async () => {
	const data = await import("@/assets/mock-JSON/mock-materials.json");
	materials.value = data.default;
	openCategories.value = new Array(materials.value.length).fill(false);
  });
  
  const toggleCategory = (index) => {
	openCategories.value[index] = !openCategories.value[index];
  };
  </script>
  
  <style scoped>
 
  .col {
	@apply text-[#7d61f2];
  }
  .materials-header {
	@apply text-3xl font-bold ml-10 mr-10;
  }
  
  .materials-header h2 {
	@apply mt-16 text-[50px] font-bold mb-[50px];
  }
  
  .material-container {
	@apply flex flex-col items-center ml-10 mr-10 my-0 m-auto;
  }
  
  .category {
	@apply w-full;
  }
  
  .category-title {
	@apply flex justify-between items-center text-xl cursor-pointer text-2xl mb-[36px] mt-[36px] ; 
	
  }
  .title-text {
	@apply underline; 
  }
  .files-list {
	@apply flex flex-col mt-0 ml-3;
  }
  
  .file-item {
	@apply text-2xl mt-10 underline; 

  }
  .arrow {
	@apply transform transition-transform duration-300 ease-in-out
  }
  
  .arrow.open {
	@apply rotate-180;
  }
  .line-item {
	@apply mt-10 h-[1px] bg-white;
  }
  .line {
	@apply h-[2px] bg-white;

  }
  .line-top {
	@apply h-[2px] bg-white;
	
  }
  </style>
  