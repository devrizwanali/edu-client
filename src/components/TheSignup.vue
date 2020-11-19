<template>
  <div class="center mt-4">
    <b-card class="main-card">
    <h1 class="text-center mb-4" >Sign up</h1>
     <b-form @submit.prevent="onSubmit">
      <b-form-group
        label="First Name"
        label-for="firstName"
      >
        <b-form-input
          id="firstName"
          v-model="user.firstName"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Last Name"
        label-for="lastName"
      >
        <b-form-input
          id="lastName"
          v-model="user.lastName"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

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
          v-model="user.name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        label="Confirm Password"
        label-for="confirmPassword"
      >
        <b-form-input
          id="confirmPassword"
          v-model="user.confirmPassword"
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
    name: 'Signup',
     data() {
      return {
        user: {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          confirmPassword: ''
        },
      }
    },
    methods: {
      onSubmit(evt) {
      },
      onReset(evt) {
      }
    }
  }
</script>
