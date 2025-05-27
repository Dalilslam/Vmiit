<template>
  <div class="button-container">
    <router-link
      v-for="button in buttons"
      :key="button.text"
      :to="button.route"
      class="custom-button"
      :class="{ 'active-button': $route.path === button.route }"
    >
      {{ button.text }}
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const buttons = [
  { text: "Конкурсы", route: "/contests" },
  { text: "Олимпиады", route: "/olympiads" },
  { text: "Семинары", route: "/seminars" },
];
</script>

<style scoped>
.button-container {
  @apply flex justify-evenly mb-5 p-1 rounded-lg gap-1;
  backdrop-filter: blur(10px);
}

.custom-button {
  @apply w-1/4 rounded-lg py-2 px-10 text-white transition-all duration-300 cursor-pointer text-center;
  background-color: #7D61F2;
  border: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.custom-button::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(to top, #7D61F2, #B949CB);
  transition: height 0.08s ease;
  z-index: -1;
}

.custom-button:hover::before {
  height: 100%;
}

.active-button {
  background: linear-gradient(to top, #7D61F2, #B949CB);
  box-shadow: 0 4px 10px rgba(125, 97, 242, 0.3);
}

.active-button:hover::before {
  height: 0;
}
</style>