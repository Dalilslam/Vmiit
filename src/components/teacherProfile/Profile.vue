<template>
  <div class='container'>
    <div class="profile">
      <div class='photo-container'>
        <div class="photo-background"></div>
        <img class='profile-img' :src="teacher.photo" alt="Фото преподавателя" />
      </div>
      <div class="profile-info">
        <h1>{{ teacher.name }}</h1>
        <div class="profile-details">
          <span class="profile-detail">Должность: {{ teacher.position }}</span>
          <span class="profile-detail">Учёное звание: {{ teacher.rank }}</span>
          <span class="profile-detail">Общий стаж работы (лет): {{ teacher.experience }}</span>
          <span class="profile-detail">Учёная степень: {{ teacher.degree }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const teacher = ref({}) // Инициализируем как пустой объект

onMounted(async () => {
  const data = await import('@/assets/mock-JSON/mock-teacher.json')
  Object.assign(teacher.value, data.default) // Заполняем данные из JSON
})
</script>
  
  <style scoped>

.container {
  @apply mt-8 max-w-full my-0 m-auto pl-48;
  
}
.photo-background {
  @apply absolute w-full h-full;
  background: url('@/assets/images/background_profile.svg') no-repeat center;
  background-size: cover; /* Чтобы фон занимал весь контейнер */
  z-index: -1;
}
.profile {
  @apply flex justify-center items-center gap-32 w-full relative gap-[60px];
  align-items: flex-start;
}

.profile-info {
  @apply flex flex-col items-start;
}

.profile-img {
  @apply relative w-[90%] h-full object-cover mr-10 z-[1];
}


.photo-container {
  @apply relative w-[410px] h-[318px] flex justify-center items-end mr-10;
}


.profile-info h1 {
  @apply text-[50px] mb-10 leading-none whitespace-nowrap font-bold;
}

.profile-info span {
  @apply py-1 px-3.5 rounded-2xl text-xl mr-3.5 mb-3 text-center inline-block whitespace-normal;
}
.profile-info span {
  @apply rounded-[20px] border-[3px] border-[#7d61f2];
}

.contact {
  @apply text-2xl text-[#7D61F2];
}


  </style>
  