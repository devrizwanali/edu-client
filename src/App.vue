<template>
  <div id="app" class="wrapper">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/TheHeader';
import Footer from '@/components/TheFooter';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  position: relative;
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.center {
  padding: 10px;
  display: flex;
  justify-content: center;
}

.main-card {
  padding: 20px;
  margin-top: 20px;
  width: 500px
}

.wrapper {
  min-height: 100%;
  margin-bottom: -100px;
  padding-bottom: 100px;
}
</style>
