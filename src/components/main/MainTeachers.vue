<template>
  <section class="teachers-section">
    <h2 class="title">Сотрудники кафедры</h2>
    <div class="tiles-grid">
      <div
          v-for="teacher in teachers"
          :key="teacher.id"
          @click="showDetails(teacher)"
          class="teacher-tile"
      >
        <p class="teacher-name">{{ teacher.name }}</p>
        <p class="teacher-position">{{ teacher.position }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import teachersData from "@/assets/mock-JSON/mock-teachers.json";

// Список преподавателей и выбранный преподаватель
const teachers = ref(teachersData);
const selectedTeacher = ref(null);

</script>

<style scoped>
.teachers-section {
  @apply mt-4 text-white w-full;
}

.title {
  @apply text-2xl font-semibold mb-4;
}

.tiles-grid {
  @apply grid grid-cols-3 gap-4;
}

.teacher-tile {
  @apply p-6 border-2 border-purpleVMiIT rounded-lg text-center cursor-pointer;
  @apply transition-transform transform hover:bg-gradient-to-b from-purpleVMiIT to-gradbot hover:scale-105 hover:border-0;
}

.teacher-name {
  @apply text-lg font-semibold mb-2;
}

.teacher-position {
  @apply text-sm font-medium text-white text-opacity-50;
}
</style>
