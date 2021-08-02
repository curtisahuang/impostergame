<template>
  <div>Here the basic gameplay loop:
    <ol class="rule-basics">
      <div class="spacer"></div>
      <li>Everyone is going to be given a word.</li>
      <li>One person's word is going to be different.</li>
      <li>The words are going to be similar.</li>
      <li>Everyone says a true statement about their word.</li>
      <li>All the players will vote to execute someone.</li>
      <li>The oddball wins if they are one of the last players.</li>
      <li>The group wins if they can identify the oddball.</li>
      <li>Have fun!</li>
    </ol>
    <router-link to="/numberofplayers"><b-button>Start A New Game</b-button></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.spacer {
  height: 1rem;
}
.rule-basics {
  line-height: 3rem;
}
</style>