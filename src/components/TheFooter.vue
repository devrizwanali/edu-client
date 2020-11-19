<template>
  <div class="footer">
    <b-container fluid>
      <p class="mt-2">&copy; 2020 Copyright: Project Name </p>
    </b-container>
  </div>
</template>
<script>
  export default {
    name: 'Footer',
  }
</script>

<style>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #edc7b7;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  text-align: center;
}
</style>
