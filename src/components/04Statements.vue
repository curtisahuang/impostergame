<template>
  <div class="rule-basics">
    <p>Statement Round</p>
    <p>Everyone go around and say one TRUE statement about their secret word.</p>
    <p>If after one round there is not enough confidence, you can go once more around.</p>
    <p>REMEMBER: THERE ARE {{playerCount}} players left and one is the ODDBALL! If there are only 2 players left the ODDBALL wins the game!</p>
    <router-link to="/voting"><b-button variant="success" class="next-button">Start Voting</b-button></router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    playerCount: state => state.players.playerCount
  }),
}
</script>

<style>

</style>