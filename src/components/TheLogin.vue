<template>
  <div class="center mt-4">
  	<b-card class="main-card">
  	<h1 class="text-center mb-4">Login</h1>
     <b-form @submit.prevent="loginUser">
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
          type="password"
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
  import { mapActions } from 'vuex';
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
      ...mapActions(['login']),
      loginUser() {
       this.login(this.user)
        .then(res => {
          this.$router.push('/dashboard');
        })
        .catch(error => {
          alert('Invalid email or password!')
        })
      }
    }
  }
</script>
