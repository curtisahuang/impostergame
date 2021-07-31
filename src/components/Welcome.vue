<template>
  <div>
  <h1>Welcome to the Imposter Game</h1>
  <MenuSidebar />
  </div>
</template>

<script>
import MenuSidebar from "./MenuSidebar.vue"
export default {
  components: { MenuSidebar },
}
</script>

<style>
.next-button {
  background-color: rgb(245, 167, 167);
}
</style>