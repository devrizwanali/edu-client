<template>
  <div class="center mt-4">
    <b-card class="main-card">
      <h1 class="text-center mb-4">Details</h1>
       <b-card-text v-if="experience">
         <p>Title: {{experience.title}}</p>
         <p>Description: {{experience.description}}</p>
       </b-card-text>
     </b-card>
  </div>
</template>
<script>
  import {mapGetters, mapActions } from 'vuex'
  export default {
    name: 'ExperienceDetails',
     data() {
      return {
      }
    },
    computed: {
      ...mapGetters(['experience'])
    },
    mounted() {
      this.$store.dispatch('getExperience', this.$route.params.id)
    }
  }
</script>
