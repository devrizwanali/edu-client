<template>
  <div class="center mt-4">
    <b-card class="main-card">
      <h1 class="text-center mb-4">Details</h1>
       <b-card-text v-if="suggestion">
         <p>Title: {{suggestion.title}}</p>
         <p>Description: {{suggestion.description}}</p>
       </b-card-text>
     </b-card>
  </div>
</template>
<script>
  import {mapGetters, mapActions } from 'vuex'
  export default {
    name: 'SuggestionDetails',
     data() {
      return {
      }
    },
    computed: {
      ...mapGetters(['suggestion'])
    },
    mounted() {
      this.$store.dispatch('getSuggestion', this.$route.params.id)
    }
  }
</script>
