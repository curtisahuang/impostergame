<template>
  <div>
    <p>05 Voting Round! VOTE OUT THE FAKER</p>
    <p>Blindly accuse people! See who has shifty eyes!</p>
    <div v-for="player in players" v-bind:key="player.id">
      <button>EXECUTE {{player.name}}!!</button>
    </div>
    <router-link to="/gamecontinues">Failed Vote </router-link>
    <router-link to="/gameends">Successful Vote</router-link>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

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