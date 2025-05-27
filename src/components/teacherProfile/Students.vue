<template>
  <div class="students" id='students-section'>
    <div class="students-header">
      <h2>Ученики</h2>
    </div>
    <div class="student-container">
      <div class="student-list">
        <div class="student-item" v-for="student in students" :key="student.id">
          <div class="student-info">
            <div class="student-name">
              <span class="last-name">{{ student.name.split(' ')[0] }}</span>
              <span>{{ student.name.split(' ')[1] }}</span>
              <span>{{ student.name.split(' ')[2] }}</span>
            </div>
            <div class="student-info-parag">{{ student.description }}</div>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>

  
</template>

<script setup>
import { onMounted, ref } from 'vue'

const students = ref([])

onMounted(async () => {
  const data = await import('@/assets/mock-JSON/mock-students.json')
  students.value = data.default
})
</script>

<style scoped>
.students {
  @apply mt-10 px-10 relative;
}

.students-header h2 {
  @apply text-[50px] mb-[47px] leading-none font-bold;
}

/* Исправление прокрутки */
.student-container {
  @apply max-h-[500px] overflow-hidden relative;
}

.student-list {
  @apply text-2xl flex flex-col w-full overflow-y-auto pr-4 max-h-[500px];
}

/* Скролл-бар */
.student-list::-webkit-scrollbar {
  width: 20px;
  
}

.student-list::-webkit-scrollbar-thumb {
  background: #7d61f2;
  border-radius: 10px; /* Закругление */
  height: 100px; /* Высота ползунка */
  width: 80px; /* Ширина ползунка */
}

.student-list::-webkit-scrollbar-track {
  background: transparent;
  border: 2px solid #7d61f2; /* Обводка */
  border-radius: 10px; /* Закругление */
  margin: 20px;
}

.student-item {
  @apply flex flex-col p-5 w-full mb-5;
}

.student-info {
  @apply flex justify-between items-start text-xl font-bold;
}

/* Фамилия выделяется цветом */
.student-name {
  @apply flex flex-col text-white text-4xl;
}

.last-name {
  @apply text-[#7d61f2] font-bold;
}

.student-info-parag {
  @apply text-white text-[1.56rem] leading-8 ml-10 font-normal max-w-[70%];
}

.line {
  @apply mt-5 h-[1px] bg-white w-full;
}
</style>
