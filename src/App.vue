<template>
  <div id="app">
    <Welcome />
          <transition name="fade" mode="out-in">
    <router-view></router-view>
          </transition>
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue"

export default {
  name: 'App',
  components: {
    Welcome,
  },
}
</script>

<style>
body {
  background-color: rgb(255, 255, 255);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fafafa;
  background-color: rgb(73, 73, 151);
  margin-top: 30px;
  margin-left: 0;
  margin-right: 0;
  padding: 15px 5%;
  height: 100%
}
button {
  padding: 20px;
  margin: 10px;
  border: none;
  border-radius: 10px;
}
div {
  margin: 5px;;
}
</style>
