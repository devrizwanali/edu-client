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
          v-model="user.password"
          type='password'
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        label="Confirm Password"
        label-for="confirmPassword"
      >
        <b-form-input
          id="confirmPassword"
          type="password"
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
  import { mapActions } from 'vuex';
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
      ...mapActions(['register']),
      onSubmit() {
        if(this.user.password !== this.user.confirmPassword) {
          alert('password and confirm password does not match')
          return
        }

        let user = { firstName: this.user.firstName, lastName: this.user.lastName, email: this.user.email, password: this.user.password}
       this.register(user)
        .then(res => {
          alert('Signup successfully!')
          this.$router.push('/dashboard');
        })
        .catch(error => {
          alert('There is something went wrong!')
        })
      }
    }
  }
</script>
