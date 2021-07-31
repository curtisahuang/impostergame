<template>

  <div id="app">
  <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <Welcome />
      <div class="content">
      <transition name="custom-classes-transition"
        enter-active-class="animated bounce"
        leave-active-class="animated bounceOutRight" mode="out-in">
        <router-view></router-view>
      </transition>
      </div>
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
html {
  background-color: rgb(73, 73, 151);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fafafa;
  background-color: rgb(73, 73, 151);
  margin-top: 2rem;
  margin-left: 0;
  margin-right: 0;
  padding: 1rem 5%;
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
.rout-view-leave-active, .rout-view-enter-active {
  transition: all 1s;
}
.rout-view-enter, .rout-view-leave-to {
  opacity: 0;
}
.content {
  margin-top: 2rem;
}
</style>
