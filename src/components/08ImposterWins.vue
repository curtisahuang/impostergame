<template>
  <div>
    <p>The Imposter has won! Well played Imposter! {{imposter}} was the imposter!</p>
    <router-link to="/words"><b-button class="next-button">Get new words!</b-button></router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    imposter: state => state.players.imposter
  }),
}
</script>

<style>

</style>