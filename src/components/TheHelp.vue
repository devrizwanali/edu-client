<template>
  <div class="center mt-4">
    <b-card class="main-card">
      <b-card-text>
       <div>
          <b-link v-b-toggle.q-1 class="heading">Question 1</b-link>
          <b-collapse id="q-1">
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, d</p>
          </b-collapse>
       </div>
        <div>
          <b-link v-b-toggle.q-2 class="heading">Question 2</b-link>
          <b-collapse id="q-2">
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, d</p>
          </b-collapse>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
  export default {
    name: 'Login',
  }
</script>

<style scoped>
.heading:hover {
  text-decoration: none !important;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
}
</style>
