<template>
  <div>
    <p>The ODDBALL has won! Well played! {{oddball}} was the ODDBALL!</p>
    <router-link to="/words"><b-button class="next-button">Get new words!</b-button></router-link>
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