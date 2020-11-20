<template>
  <b-navbar toggleable="lg"  class="navbar-horizontal header">
    <b-navbar-brand @click="goToHome" class="navbar">Project Name</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <li class="nav-item">
          <router-link 
            :to="{ name: 'Login' }"
            class="heading nav-link"
          >Login</router-link>
        </li>
        <li class="nav-item">
          <router-link 
            :to="{ name: 'Signup' }"
            class="heading nav-link"
          >Register</router-link>
        </li>
        <li class="nav-item">
          <router-link 
            :to="{ name: 'Help' }"
            class="heading nav-link"
          >Help/FAQs</router-link>
        </li>
        <b-nav-item-dropdown right v-if="isLoggedIn">
          <template #button-content>
            <em>{{currentUser.firstName}} {{currentUser.lastName}}</em>
          </template>
          <b-dropdown-item @click="LogOut">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'Header',
    methods: {
      ...mapActions(['signOut']),
      goToHome () {
        this.$router.push('/')
      },
      LogOut() {
        this.signOut()
        this.$router.push('/login')
      }
    },
    computed: {
      ...mapGetters(['isLoggedIn', 'currentUser'])
    }
  }
</script>
<style>
.navbar {
  cursor: pointer;
  background: #edc7b7;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
}

.heading {
  color: rgba(0, 0, 0, 0.5);
}

</style>
