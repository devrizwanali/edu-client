<template>
  <div class="center mt-4">
  	<b-card class="main-card">
  	<h1 class="text-center mb-4">Login</h1>
     <b-form @submit.prevent="onSubmit">
      <b-form-group
        label="Email"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="user.email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        label="Password"
        label-for="password"
      >
        <b-form-input
          id="password"
          v-model="user.password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-card>
  </div>
</template>
<script>
  export default {
    name: 'Login',
     data() {
      return {
        user: {
          email: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit() {
      }
    }
  }
</script>
