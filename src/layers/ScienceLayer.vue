<template>
  <div class ="container">
    <ScienceHeaderComponent />
    <ScienceButtonComponent />
    <ScienceContentComponent />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ScienceButtonComponent from '@/components/ScienceLayer/ScienceButtonComponent.vue';
import ScienceContentComponent from '@/components/ScienceLayer/ScienceContentComponent.vue';
import ScienceHeaderComponent from '@/components/ScienceLayer/ScienceHeaderComponent.vue';

export default {
  components: {
    ScienceButtonComponent,
    ScienceHeaderComponent,
    ScienceContentComponent,
  }
}
</script>

<style scoped>
</style>