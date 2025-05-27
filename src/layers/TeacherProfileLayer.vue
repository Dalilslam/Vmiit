<template>
	<div class="container">
	  <Profile />
	  <Tags />
	  <Materials />
	  <Retakes />
	  <Students />
	</div>
  </template>
  
  
<script>
import Materials from '@/components/teacherProfile/Materials.vue'
import Profile from '@/components/teacherProfile/Profile.vue'
import Retakes from '@/components/teacherProfile/Retakes.vue'
import Students from '@/components/teacherProfile/Students.vue'
import Tags from '@/components/teacherProfile/Tags.vue'
export default {
  components: {
    Profile,
    Tags,
    Materials,
	Retakes,
    Students,
  },
};
</script>
<style>

body {
	font-family: "Manrope", sans-serif;
	margin: 0;
	padding: 0;
	height: 100%;
  }

  </style>
  