<template>
    <div class="years-list">
        <div v-for="year in years" :key="year">
            <div @click="toggleYear(year)" class="year-header">
                <h2 class="text-3xl font-bold">{{ year }}</h2>
                <span class="arrow-icon" :class="{ 'rotated': openYear === year }">
                    <img src="/src/assets/list-arrow.svg" alt="Back" class="w-5 h-5">
                </span>
            </div>

            <transition name="expand">
                <div v-if="openYear === year" class="courses-container">
                    <CourseListComponent :year="year" :courses="courses" />
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import CourseListComponent from "./CourseListComponent.vue";

const props = defineProps({
    years: Array,
    courses: Array,
});

const openYear = ref(null);

function toggleYear(year) {
    openYear.value = openYear.value === year ? null : year;
}
</script>

<style scoped>
.years-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.year-header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    border-bottom: 2px solid #ddd;
}

.arrow-icon {
    color: #ddd;
    transition: transform 0.3s ease;
}

.arrow-icon.rotated {
    transform: rotate(180deg);
}

.expand-enter-active, .expand-leave-active {
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
    overflow: hidden;
}

.expand-enter-from, .expand-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>