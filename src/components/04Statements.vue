<template>
  <div>
    <p>04 Statement Round</p>
    <p>Everyone go around and say one TRUE statement about their secret word.</p>
    <p>If after one round there is not enough confidence, you can go once more around.</p>
    <p>REMEMBER: THERE ARE {{playerCount}} players left and one is an IMPOSTER! If it goes down to 1v1 the imposter wins the game!</p>
    <router-link to="/voting"><button class="next-button">Start Voting</button></router-link>
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