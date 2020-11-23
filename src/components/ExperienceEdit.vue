<template>
  <div class="center mt-4">
    <b-card class="main-card" v-if="experienceObj">
     <b-form @submit.prevent="onSubmit">
      <b-form-group
        label="Title"
        label-for="title"
      >
        <b-form-input
          id="title"
          v-model="experienceObj.title"
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
          v-model="experienceObj.description"
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
        experienceObj: null
      }
    },
    computed: {
      ...mapGetters(['experience'])
    },
    watch: {
      experience: function() {
        this.experienceObj = Object.assign({}, this.experience);
      }
    },
    mounted() {
      this.$store.dispatch('getExperience', this.$route.params.id)
    },
    methods: {
      ...mapActions(['updateExperience']),
      onSubmit() {
        this.updateExperience({id: this.$route.params.id, experience: this.experienceObj})
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
