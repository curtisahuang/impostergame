<template>
  <div @click="myFilter" id="player-words">
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
    }
  }
}
</script>

<style>
#player-words {
  height: 200px;
  width: 300px;
  background-color: pink;
  border: none;
}
</style>