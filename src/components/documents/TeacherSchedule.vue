<template>
  <div>
    <h2>Расписание <span>преподавателей</span></h2>

    <!-- Кнопка перехода в Telegram-бот -->
    <button @click="goToTelegram">Перейти в Telegram-бот</button>

    <!-- Кнопка скачивания Excel-файла -->
    <button @click="downloadSchedule">Скачать файл</button>
  </div>
</template>

<script setup>
import axios from "axios";

const telegramBotLink = "https://t.me/math_csu_bot";
const backendUrl = "https://your-backend.com/api/schedule/download"; // Укажи API бэка

// Функция перехода в Telegram-бот
const goToTelegram = () => {
  window.open(telegramBotLink, "_blank"); // Открывает ссылку в новой вкладке
};

// Функция скачивания Excel-файла с бэка
const downloadSchedule = async () => {
  try {
    const response = await axios.get(backendUrl, {
      responseType: "blob", // Получаем бинарные данные (файл)
    });

    // Создаём ссылку для скачивания
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "schedule.xlsx"); // Имя файла
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Ошибка при скачивании файла:", error);
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
}

h2 {
  font-family: Manrope;
  font-weight: 700;
  font-size: 40px;
  line-height: 54.64px;
}

span {
  color: #7D61F2;
}

button {
  width: 276px;
  height: 33px;
  border-radius: 23.89px;
  border-width: 2px;
  margin-left: 20px;
  margin-top: 10px;
  border-color: #7D61F2;
  cursor: pointer;
}

button:hover {
  border-color: transparent;
  background: linear-gradient(#7D61F2, #B949CB);
  color: white;
}
</style>
