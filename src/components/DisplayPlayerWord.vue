<template>
  <div @click="myFilter" id="player-words">
  {{player.name}}
  <div class="word-div">
    <span v-if="isActive">{{player.word}}</span>
    <span v-else>Reveal Word</span>
  </div>
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
  height: 100px;
  width: 200px;
  background-color: rgb(5, 9, 70);
  border: none;
  border-radius: 10px;
}
#secret-word {
  padding: 0px;
  margin: 0px;
}
.word-div {
  height: 1.5rem;
}
</style>