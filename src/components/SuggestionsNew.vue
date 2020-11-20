<template>
  <div class="center mt-4">
    <b-card class="main-card">
    <h1 class="text-center mb-4">Create suggestion/complaint </h1>
     <b-form @submit.prevent="onSubmit">
      <b-form-group
        label="Title"
        label-for="title"
      >
        <b-form-input
          id="title"
          v-model="sugesstion.title"
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
          v-model="sugesstion.description"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Create</b-button>
    </b-form>
  </b-card>
  </div>
</template>
<script>
  export default {
    name: 'Login',
     data() {
      return {
        sugesstion: {
          title: '',
          description: '',
        }
      }
    },
    methods: {
      onSubmit() {
      }
    }
  }
</script>
