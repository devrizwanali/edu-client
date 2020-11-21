<template>
  <div class="center mt-4">
    <b-card class="main-card" v-if="suggestionObj">
     <b-form @submit.prevent="onSubmit">
      <b-form-group
        label="Title"
        label-for="title"
      >
        <b-form-input
          id="title"
          v-model="suggestionObj.title"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        label="Description"
        label-for="description"
      >
        <b-form-textarea
          id="textarea"
          v-model="suggestionObj.description"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Update</b-button>
    </b-form>
  </b-card>
  </div>
</template>
<script>
  import {mapGetters, mapActions } from 'vuex'
  export default {
    name: 'Login',
    data() {
      return  {
        suggestionObj: null
      }
    },
    computed: {
      ...mapGetters(['suggestion'])
    },
    watch: {
      suggestion: function() {
        this.suggestionObj = Object.assign({}, this.suggestion);
      }
    },
    mounted() {
      this.$store.dispatch('getSuggestion', this.$route.params.id)
    },
    methods: {
      ...mapActions(['updateSuggestion']),
      onSubmit() {
        this.updateSuggestion({id: this.$route.params.id, suggestion: this.suggestionObj})
          .then(res => {
            alert('Updated successfully!')
            this.$router.push('/dashboard')
          })
          .catch(error => {
            console.log(error)
          })
      },
    }
  }
</script>
