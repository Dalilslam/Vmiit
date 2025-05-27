<template>
    <div v-for="course in getCourses(year)" :key="course.id" class="course-item">
        <p>{{ truncateText(course.name) }}</p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    year: Number,
    courses: Array,
});

function getCourses(year) {
    return props.courses.filter((course) => course.year === year);
}

function truncateText(text) {
    return text.length > 60 ? text.substring(0, 57) + "..." : text;
}
</script>

<style scoped>
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