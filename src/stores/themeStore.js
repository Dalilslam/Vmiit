import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
    state: () => ({
        isDarkTheme: false, // По умолчанию светлая тема
    }),
    actions: {
        // Переключение темы
        toggleTheme() {
            this.isDarkTheme = !this.isDarkTheme;
            localStorage.setItem("theme", this.isDarkTheme ? "dark" : "light");
            this.applyTheme();
        },
        // Применение темы
        applyTheme() {
            document.body.style.backgroundColor = this.isDarkTheme ? "#000" : "#fff";
            document.body.style.color = this.isDarkTheme ? "#fff" : "#000";
        },
        // Восстановление темы из localStorage
        initializeTheme() {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme) {
                this.isDarkTheme = savedTheme === "dark";
                this.applyTheme();
            }
        },
    },
});