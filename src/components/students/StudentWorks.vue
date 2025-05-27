<template>
  <div class="student-works">
    <a
        v-if="student.works.masters"
        :href="student.works.masters.link"
        target="_blank"
        class="work-box gradient"
    >
      <h3 class="highlight title">Магистерская диссертация</h3>
      <p class="topic">{{ student.works.masters.topic }}</p>
    </a>
    <a
        v-if="student.works.diploma"
        :href="student.works.diploma.link"
        target="_blank"
        class="work-box gradient"
    >
      <h3 class="highlight title">Дипломная работа</h3>
      <p class="topic">{{ student.works.diploma.topic }}</p>
    </a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  student: Object
});
</script>

<style scoped>
.student-works {
  @apply flex justify-between w-full mt-[4vw] mx-auto gap-[4vw];
}

.work-box {
  @apply flex-1 p-[2vw] rounded-[20px] text-center transition-all duration-300 flex flex-col items-center justify-start no-underline;
}

.title {
  @apply font-bold mt-[-0.4vw] mb-[1.5vw] min-h-[3vw] flex items-center justify-center;
  font-size: clamp(1.4rem, 2vw, 2rem);
}

.topic {
  @apply font-medium text-center max-w-[90%] break-words whitespace-normal mb-[1.5vw] leading-relaxed;
  font-size: clamp(1.2rem, 1.6vw, 1.6rem);
}

.highlight {
  @apply text-[#7D61F2];
}

.gradient {
  @apply relative bg-transparent border-[3px] border-[#7D61F2] pb-[2vw] transition-all duration-300;
}

.gradient::before {
  content: "";
  @apply absolute top-[-3px] left-[-3px] right-[-3px] bottom-[-3px] bg-gradient-to-b from-[#7D61F2] to-[#B949CB] -z-10 opacity-0 transition-opacity duration-300;
  border-radius: inherit;
}

.gradient:hover {
  @apply bg-gradient-to-b from-[#7D61F2] to-[#B949CB] scale-[1.03] border-transparent;
}

.gradient:hover::before {
  @apply opacity-100;
}

.gradient:hover .highlight,
.work-box:hover {
  @apply text-white;
}

@media (max-width: 480px) {
  .student-works {
    @apply flex-col items-center gap-[2vw];
  }
  .work-box {
    @apply w-full max-w-[100%];
  }
}
</style>