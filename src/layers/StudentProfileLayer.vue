<template>
  <div class="main">
    <div v-if="student">
      <StudentInfo :student="student" />
      <StudentWorks :student="student" />
      <StudentAchievements :student="student" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import StudentInfo from '@/components/students/StudentInfo.vue';
import StudentWorks from '@/components/students/StudentWorks.vue';
import StudentAchievements from '@/components/students/StudentAchievements.vue';
import studentsData from '@/assets/mock-JSON/mock-studet.json';


const route = useRoute();
const student = ref(null);

onMounted(() => {
  const studentId = parseInt(route.params.id, 10);
  student.value = studentsData.find(s => s.id === studentId);
});
</script>

<style scoped>
.main{
  width: 80%;
  margin:0 auto;
}
</style>