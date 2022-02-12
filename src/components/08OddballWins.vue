<template>
  <div>
    <p>The Oddball has won! Well played! {{oddball}} was the Oddball! Kindly reveal your words to each other now.</p>
    <router-link to="/words"><b-button class="next-button">Play again and get new words!</b-button></router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    oddball: state => state.players.oddball
  }),
}
</script>

<style>

</style>