<template>
  <div>
    <p>03 Word Round</p>
    <p>Each player can look at their word by pressing your name. Don't forget to hide it by pressing your name again before passing it to the next player! If someone doesn't know what their word is, don't be afraid to "re-roll" the words.</p>
    <button @click="assignRandomWords">GENERATE WORDS</button>
    <div>
    <span v-for="player in players" v-bind:key="player.id" class="list-item">
      <DisplayPlayerWord v-bind:player="player" />
    </span>
    </div>
    <div>
    <router-link to="/statements">Statement Round</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import DisplayPlayerWord from "./DisplayPlayerWord.vue";

export default {
  components: {
    DisplayPlayerWord
  },
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