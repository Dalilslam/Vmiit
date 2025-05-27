<template>
    <section class="courses-page">
        <HeaderComponent />
        <SearchBarComponent :courses="courses" />
        <hr class="separator mt-2">
        <YearListComponent :years="years" :courses="courses" />
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeaderComponent from "@/components/CertificateLayer/CertificateHeaderComponent.vue";
import SearchBarComponent from "@/components/CertificateLayer/CertificateSearchBarComponent.vue";
import YearListComponent from "@/components/CertificateLayer/CertificateYearListComponent.vue";

const courses = ref([]);
const years = ref([]);

async function fetchCourses() {
    try {
        const response = await fetch("/src/assets/mock-jsons/Certificate-mock.json");
        if (!response.ok) {
            throw new Error("Ошибка загрузки данных: " + response.statusText);
        }
        const data = await response.json();
        courses.value = data;
        years.value = [...new Set(data.map((course) => course.year))];
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }
}

onMounted(fetchCourses);
</script>

<style scoped>
.courses-page {
    width: 100%;
    max-width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

.separator {
    border-bottom: 1px solid #ddd;
    margin-top: 3%;
    width: 100%;
}


</style>