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
                <div v-if="openYear === year" class="course-list">
                    <div v-for="course in getCourses(year)" :key="course.id" class="course-item">
                        <p>{{ truncateText(course.name) }}</p>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
    years: Array,
    courses: Array,
});

const openYear = ref(null);

function getCourses(year) {
    return props.courses.filter((course) => course.year === year);
}

function toggleYear(year) {
    openYear.value = openYear.value === year ? null : year;
}

function truncateText(text) {
    return text.length > 60 ? text.substring(0, 57) + "..." : text;
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

.course-list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Две колонки */
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
.course-list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Две колонки */
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

.highlight-text {
    color: #7D61F2;
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