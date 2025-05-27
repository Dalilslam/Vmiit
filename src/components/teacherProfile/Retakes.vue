<template>
	<div class="retake" id='retakes-section'>
	  <div class="retake-header">
		<h2>Пересдачи</h2>
	  </div>
	  <div class="retake-container">
		<table>
		  <thead>
			<tr>
			  <th>Группа</th>
			  <th>Предмет</th>
			  <th>Тип пересдачи</th>
			  <th>Дата пересдачи</th>
			  <th>Время пересдачи</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="(retake, index) in retakes" :key="index">
			  <td>{{ retake.group }}</td>
			  <td>{{ retake.subject }}</td>
			  <td>{{ retake.type }}</td>
			  <td>{{ retake.retakeDate }}</td>
			  <td>{{ retake.retakeTime }}</td>
			</tr>
		  </tbody>
		</table>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  
  // Реф для хранения данных о пересдачах
  const retakes = ref([])
  
  // Загружаем данные из mock-JSON
  onMounted(async () => {
	const data = await import('@/assets/mock-JSON/mock-retakes.json')
	retakes.value = data.default 
  })
  </script>
  
  <style scoped>
 .retake {
  @apply mt-10;
}

.retake-header {
  @apply text-[3.13rem] leading-none font-bold ml-10 mb-5;
}

.retake-container {
  @apply flex flex-col  my-0 m-auto;
}

.retake table {
  @apply text-center text-3xl my-0 ml-10 mr-10 mb-3 border-collapse;
}

.retake table th {
  @apply p-10;
}

.retake table td {
  @apply p-10 font-bold;
}

.retake table th {
  @apply text-[#7D61F2];
}

.retake table tr {
	border-bottom: 3px solid;
  }
  </style>
  