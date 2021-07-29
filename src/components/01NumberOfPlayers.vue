<template>
  <div>
    <div id="list-demo">
      <button class="player-change" @click="addPlayer">Add</button>
      <button class="player-change" v-on:click="removePlayer">Remove</button>
        <transition-group name="list" tag="p">
          <span v-for="player in players" v-bind:key="player.id" class="list-item">
            <div>{{ player.name }} <input placeholder="Not Functioning Yet">
            <button class="name-change-btn" v-on:click="changeName(player.id, testword)">Change name</button>
            </div>
          </span>
        </transition-group>
    </div>
    <router-link to="/words">Get Your Words!</router-link>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: mapState({
    players: state => state.players.players
  }),
  methods: {
    ...mapMutations(['addPlayer', 'removePlayer']),
    // changeName: function (changeid, newName) {
    //   console.log(newName);
    //   const actualId = changeid - 1;
    //   this.players[actualId].name = newName;
    // }
  }
}
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.name-change-btn {
  padding: 5px;
}

.player-change {
  padding: 5px 10px;
  margin: 10px;
}
</style>