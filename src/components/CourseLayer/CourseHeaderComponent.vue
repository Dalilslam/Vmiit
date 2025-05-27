<template>
    <div class="header">
        <div class="back-arrow relative top-10">
            <router-link to="/">
                <img src="/src/assets/arrow.svg" alt="Back" class="w-10 h-10">
            </router-link>
        </div>
        <span class="text-3xl font-bold text-left ml-20">
            Список <span class="highlight-text">курсовых работ</span>
        </span>
    </div>
</template>

<script setup>
</script>

<style scoped>
.highlight-text {
    color: #7D61F2;
}
</style>