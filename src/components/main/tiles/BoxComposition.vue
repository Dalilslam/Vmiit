<template>
  <div class="tiles">
    <CenterBox class="tile central-tile" />
    <StudentBox class="tile top-left" />
    <MiniCoursesBox class="tile top-right" />
    <AnnouncementsBox class="tile bottom-left" />
    <NewsBox class="tile bottom-right" />
  </div>
</template>

<script setup>
import CenterBox from './CenterBox.vue';
import StudentBox from './FirstBox.vue';
import MiniCoursesBox from './SecondBox.vue';
import AnnouncementsBox from './ThirdBox.vue';
import NewsBox from './FourthBox.vue';
</script>

<style scoped>
.tiles {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 0;
  width: 100%;
  height: 100%;
}

.tile {
  @apply rounded-3xl;
}

.central-tile {
  grid-column: 5 / 10;
  grid-row: 4 / 9;
  width: 100%;
  height: 100%;
}

.top-left {
  grid-column: 1 / 6;
  grid-row: 1 / 5;
  width: 100%;
  height: 100%;
}

.top-right {
  grid-column: 9 / 13;
  grid-row: 2 / 5;
  width: 100%;
  height: 100%;
}

.bottom-left {
  grid-column: 2 / 6;
  grid-row: 8 / 12;
  width: 100%;
  height: 100%;
}

.bottom-right {
  grid-column: 9 / 13;
  grid-row: 8 / 11;
  width: 100%;
  height: 100%;
}
</style>