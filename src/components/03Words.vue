<template>
  <div>
    <p>Word Round</p>
    <p class="rule-basics">Each player can look at their word by clicking their name. Don't forget to hide it by pressing the name again before passing it to the next player! If someone doesn't know what their word is, don't be afraid to click "GENERATE NEW WORDS" again.</p>
    <div class="spacer"></div>
    <b-button @click="assignRandomWords" variant="light">GENERATE NEW WORDS</b-button>
    <div class="button-box">
    <div v-for="player in players" v-bind:key="player.id" class="word-box">
      <DisplayPlayerWord v-bind:player="player" />
    </div>
    </div>
    <div>
    <router-link to="/statements"><b-button variant="success" class="next-button">Statement Round</b-button></router-link>
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
  },
  mounted() {
    this.assignRandomWords()
  },
}
</script>

<style>
.button-box {
  padding: 3%;
}
.word-box {
  display: flex;
  align-content: center;
  justify-content: center;;
}
</style>