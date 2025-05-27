<template>
  <div class="container">
    <h2>Курсовые <span>и дипломы</span></h2>
    <div class="button-container">
      <button>Список курсовых работ</button>
      <button>Список дипломных работ</button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  width: 100%;
  font-family: Manrope;
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


.button-container {
  padding-top: 44px;
  display: flex; /* Размещаем кнопки в строку */
  justify-content: center; /* Центрируем кнопки */
  gap: 20px; /* Отступ между кнопками */
  margin-top: 10px;
  width: 100%; /* Растягиваем контейнер */
}

/* Стили для кнопок */
button {
  width: 777px; /* Ширина кнопок */
  height: 96px;
  border-radius: 20px;
  border-width: 2px;
  border-color: #7D61F2;
  font-weight: bold;
  font-size: 32px;
  cursor: pointer;
}

button:hover {
  border-color: transparent;
  background: linear-gradient(#7D61F2, #B949CB);
}

</style>
