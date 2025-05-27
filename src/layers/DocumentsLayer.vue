<script setup>
import Timetable from "@/components/documents/Timetable.vue";
import TeacherSchedule from "@/components/documents/TeacherSchedule.vue";
// import SubjectsAndTeachers from "@/components/documents/"; тут должен был быть Subject... но такой компоненты нет
import Diplomas from "@/components/documents/Diplomas.vue";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
    <!-- Расписание преподавателей -->
    <section>
      <TeacherSchedule />
    </section>

    <!-- Расписание звонков -->
    <section>
      <Timetable />
    </section>

    <!-- Курсовые и дипломы -->
    <section>
      <Diplomas />
    </section>

    <!-- Предметы и преподаватели -->
    <section>
      <SubjectsAndTeachers />
    </section>
</template>

<style scoped>

section {
  padding-top: 74px;
  padding-left: 20px;
  display: block;
  width: 1593px;
}


</style>
