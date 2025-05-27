<template>
  <div class="container">
    <PartnersList @select-partner="updateSelectedPartner"/>
    <ProjectsInfo :selectedPartner="selectedPartner"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PartnersList from '@/components/partners/PartnersList.vue';
import ProjectsInfo from '@/components/partners/ProjectsInfo.vue';

const selectedPartner = ref(null);

const updateSelectedPartner = (partner) => {
  selectedPartner.value = partner;
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
</style>

