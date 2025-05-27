<template>
  <div class="student-info">
    <img src="@/assets/img/arrow_back.svg" alt="Назад" class="back-arrow" @click="goBack"/>
    <div class="photo-container">
      <div class="background"></div>
      <img :src="student.photo" :alt="student.name" class="student-photo"/>
    </div>
    <div class="tags-container">
      <h2 class="student-name">{{ student.name }}</h2>
      <div class="tags">
        <span v-for="tag in student.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  student: Object
});

const router = useRouter();
const goBack = () => router.back();
</script>

<style scoped>
.student-info {
  @apply relative flex flex-row items-start gap-[1.2vw] mt-[3vw];
}

.back-arrow {
  @apply w-full max-w-[2.4vw] min-w-[30px] cursor-pointer;
}

.photo-container {
  @apply relative w-full max-w-[16.93vw] min-w-[100px] flex justify-center items-end ml-[1vw] mr-[2.8vw];
  aspect-ratio: 16.93 / 18.9;
}

.background {
  @apply absolute inset-0 bg-no-repeat bg-center bg-contain;
  background-image: url('@/assets/img/profile_background.svg');
}

.student-photo {
  @apply absolute bottom-[0.08vw] w-full h-auto max-h-[90%] object-contain;
}

.tags-container {
  @apply flex flex-col justify-start items-start gap-[1vw];
}

.student-name {
  @apply font-bold mt-[0.6vw];
  font-size: clamp(1.1rem, 2.6vw, 5rem);
}

.tags {
  @apply flex flex-row justify-start gap-[0.7vw] mt-[0.4vw] flex-wrap;
}

.tag {
  @apply p-[0.3vw_0.6vw] rounded-[16px] border-[3px] border-[#7D61F2] bg-transparent text-base font-light;
}

@media (max-width: 480px) {
  .back-arrow {
    @apply hidden;
  }

  .photo-container {
    @apply w-[40%] min-w-[130px] flex justify-center items-center;
  }

  .student-name {
    @apply text-3xl font-bold text-left;
  }
}
</style>