<template>
  <div>
    <p>03 Word Round</p>
    <p>Each player can look at their word by pressing the reveal. Don't forget to hide it before passing it to the next player!</p>
    <button @click="assignRandomWords">GENERATE WORDS</button>
    <span v-for="player in players" v-bind:key="player.id" class="list-item">
      <div>{{ player.name }} {{ player.word }} </div>
    </span>
    <router-link to="/statements">Statement Round</router-link>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: mapState({
    players: state => state.players.players
  }),
  methods: {
    ...mapMutations(["assignRandomWords"])
  }
}
</script>

<style>

</style>