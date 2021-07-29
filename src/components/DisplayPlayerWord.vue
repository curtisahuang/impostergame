<template>
  <div @click="myFilter">
  {{player.name}}
  <div v-if="isActive">{{player.word}}</div>
  </div>
</template>

<script>
export default {
  props: ['player'],
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    myFilter: function() {
      this.isActive = !this.isActive;
      console.log("Toggles?")
    }
  }
}
</script>

<style>

</style>