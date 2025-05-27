<template>
    <div v-for="courseLevel in [2, 3]" :key="courseLevel">
        <div v-if="hasCourses(year, courseLevel)" @click="toggleCourse(courseLevel)" class="course-header">
            <span class="text-2xl font-bold">
                <span class="highlight-text">{{ courseLevel }}</span> <span>курс</span>
            </span>
            <span class="arrow-icon" :class="{ 'rotated': openCourse === courseLevel }">
                <img src="/src/assets/list-arrow.svg" alt="Back" class="w-5 h-5">
            </span>
        </div>

        <transition name="expand">
            <div v-if="openCourse === courseLevel" class="course-list">
                <div v-for="course in getCourses(year, courseLevel)" :key="course.id" class="course-item">
                    <p>{{ truncateText(course.name) }}</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
    year: Number,
    courses: Array,
});

const openCourse = ref(null);

function getCourses(year, level) {
    return props.courses.filter((course) => course.year === year && course.level === level);
}

function hasCourses(year, level) {
    return getCourses(year, level).length > 0;
}

function toggleCourse(level) {
    openCourse.value = openCourse.value === level ? null : level;
}

function truncateText(text) {
    return text.length > 60 ? text.substring(0, 57) + "..." : text;
}
</script>

<style scoped>
.course-header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    border-bottom: 2px solid #ddd;
}

.course-list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-height: 300px;
    overflow-y: auto;
    padding-bottom: 20px;
    border-bottom: 2px solid #ddd;
    scrollbar-color: #7D61F2 transparent;
    scrollbar-width: thin;
}

.course-item {
    width: 97%;
    height: 105px;
    padding: 1rem;
    border-radius: 20px;
    border: 2px solid #7D61F2;
    transition: border-color 0.3s ease, transform 0.3s ease;
}

.course-item:hover {
    background: linear-gradient(#7D61F2, #B949CB);
    color: #fff;
    border-color: transparent;
}
</style>