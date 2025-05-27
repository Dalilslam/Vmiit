<template>
  <div class="main flex flex-col items-center justify-center">
    <TextAndTiles />
    <MainNews />
    <Announcements />
    <TeachersList />
  </div>
</template>

<script setup>
import TextAndTiles from "@/components/main/TextAndBoxes.vue";
import MainNews from "@/components/main/MainNews.vue";
import Announcements from "@/components/main/MainAnnouncements.vue";
import TeachersList from "@/components/main/MainTeachers.vue";
</script>

<style scoped>
.main {
  margin-left: 10%;
  margin-right: 10%;
}
</style>