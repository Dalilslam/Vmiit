<template>
    <div class="search-bar">
        <input v-model="searchQuery" type="text" placeholder="Поиск по названиям работ, по ФИО студента..." class="placeholder"/>
        <ul v-if="filteredCourses.length > 0" class="dropdown ">
            <li v-for="course in filteredCourses" :key="course.id" @click="selectCourse(course)" class="dropdown-item">
                {{ truncateText(course.name) }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
    courses: Array,
});

const searchQuery = ref("");

const filteredCourses = computed(() =>
    searchQuery.value
        ? props.courses.filter((course) => course.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
        : []
);

function selectCourse(course) {
    alert(`Вы выбрали: ${course.name}`);
    searchQuery.value = "";
}

function truncateText(text) {
    return text.length > 60 ? text.substring(0, 57) + "..." : text;
}
</script>

<style scoped>
.placeholder {
    margin-top: 40px;
    width: 100%;
    padding: 12px;
    border: 2px solid #7D61F280;
    border-radius: 50px;
    background-color: #7D61F2;
    opacity: 0.5;
}

.placeholder:hover {
    opacity: 1;
}

.search-bar input {
    color: #ffffff;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.dropdown {
    list-style: none;
    margin: 5px 0 0 0;
    padding-left: 10px;
    color: #fff;
    background: #7D61F2;
    border: 1px solid gray;
    border-radius: 10px;
    width: 78%;
    position: absolute;
    z-index: 10;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    scrollbar-color: white transparent;
    scrollbar-width: thin;
}

.dropdown-item {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, opacity 0.3s ease;
}


.dropdown-item:hover {
    background-color: #7D61F2;
    opacity: 0.5;
}
</style>