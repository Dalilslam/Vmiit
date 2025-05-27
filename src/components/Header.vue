<template>
    <header :class="['header', { 'dark-theme': themeStore.isDarkTheme }]">
        <!-- Логотип -->
        <div class="logo">
            <img :src="currentLogo" alt="Логотип" class="logo-img" />
        </div>

        <!-- Навигация -->
        <nav class="nav">
            <router-link to="#" class="nav-link">Студентам</router-link>
            <router-link to="#" class="nav-link">Документооборот</router-link>
            <router-link to="#" class="nav-link">Партнёрам</router-link>
        </nav>

        <!-- Иконки -->
        <div class="icons">
            <img
                :src="currentThemeImage"
                alt="Theme Toggle"
                class="theme-toggle-icon"
                @click="toggleTheme"
            />
        </div>

        <!-- Анимация перехода темы -->
        <div :class="['theme-transition', { active: isTransitioning }]" />
        <hr class="separator mt-2 absolute">
    </header>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useThemeStore } from "@/stores/themeStore"; // Импортируем хранилище
import darkLogo from "@/assets/darkLogo.png";
import lightLogo from "@/assets/lightLogo.png";
import darkThemeStatic from "@/assets/dark-theme-static.svg";
import lightThemeStatic from "@/assets/light-theme-static.svg";

const themeStore = useThemeStore(); // Используем хранилище
const isTransitioning = ref(false);

// Восстановление темы при загрузке компонента
onMounted(() => {
    themeStore.initializeTheme();
});

// Выбор логотипа и иконки темы
const currentLogo = computed(() => (themeStore.isDarkTheme ? darkLogo : lightLogo));
const currentThemeImage = computed(() =>
    themeStore.isDarkTheme ? darkThemeStatic : lightThemeStatic
);

// Переключение темы
function toggleTheme() {
    isTransitioning.value = true;
    setTimeout(() => {
        themeStore.toggleTheme();
        isTransitioning.value = false;
    }, 600);
}
</script>

<style scoped>
.separator {
    color: #000000;
    margin-top: 50px;
    width: 100%;
    margin-left: -1.7%;
    transition: border-color 0.3s ease;

}
/* Хедер */
/* Тема перехода */
.theme-transition {
    @apply fixed inset-0 z-[999] bg-darkThemeBg pointer-events-none transition-[clip-path] ease-custom duration-600;
    clip-path: circle(0% at 100% 0%);
}


.theme-transition.active {
    clip-path: circle(150% at 100% 0%);
}


.header {
    @apply flex justify-between items-center py-4 px-8 bg-white text-black transition-colors duration-300;
}

.header.dark-theme {
    @apply bg-black text-white;
}





/* Навигация */
.nav {
    @apply flex justify-between w-full max-w-[1200px] mx-auto;
}

@media (max-width: 1024px) {
    .nav {
        @apply flex justify-center gap-7;
    }
}

@media (max-width: 768px) {
    .nav {
        @apply flex-col items-center gap-6;
    }
}

.nav-link {
    @apply relative text-xl font-semibold text-current no-underline pb-1 transition-colors duration-300 tracking-wide;
}

.nav-link::after {
    @apply absolute bottom-0 left-0 right-0 h-0.5 bg-transparent opacity-0 transition-opacity transition-colors duration-300;
    content: '';
}

.nav-link:hover::after {
    @apply opacity-100;
}

.header.dark-theme .nav-link:hover::after {
    @apply bg-darkHover;
}

.header:not(.dark-theme) .nav-link:hover::after {
    @apply bg-darkHover;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-img {
    height: 2rem;
    width: auto;
    transition: opacity 0.3s ease;
}

/* Иконки */
.icons {
    @apply flex items-center;
}

.burger-menu {
    @apply text-3xl cursor-pointer ml-4 ;
}

.theme-toggle-icon {
    @apply w-7 h-7 ml-4 cursor-pointer;
}

/* Адаптивность */
@media (max-width: 768px) {
    .nav {
        @apply gap-8; /* Уменьшенное расстояние на мобильных */
    }

    .logo {
        @apply text-lg;
    }

    .burger-menu {
        @apply text-lg;
    }

    .theme-toggle-icon {
        @apply w-6 h-6;
    }
}

</style>