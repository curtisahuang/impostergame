<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Welcome />
    <router-view></router-view>
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue"

export default {
  name: 'App',
  components: {
    Welcome,
  }
}
</script>

<style>
body {
  background-color: rgb(122, 122, 122);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3a8ee2;
  margin-top: 60px;
}
div {
  border: 4px dotted blue;
  margin: 25px;
  padding: 25px;
}
</style>
