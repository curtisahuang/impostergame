<template>
  <div>
    <p>05 Voting Round! VOTE OUT THE FAKER</p>
    <p>Blindly accuse people! See who has shifty eyes!</p>
    <div v-for="player in players" v-bind:key="player.id">
      <span v-if="player.isAlive">
        <button @click="executePlayer(player.id)">EXECUTE {{player.name}}!! {{player.word}}</button>
      </span>
      <span v-else>
        {{player.name}} is dead 
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState({
    players: state => state.players.players
  }),
  methods: {
    ...mapMutations(["executePlayer"])
  }
}
</script>

<style>

</style>