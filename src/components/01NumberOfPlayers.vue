<template>
  <div>
    <div id="list-demo">
      <b-button class="player-change" @click="addPlayer">Add a player</b-button>
      <b-button class="player-change" v-on:click="removePlayer">Remove a player</b-button>
        <transition-group name="list" tag="p">
          <span v-for="player in players" v-bind:key="player.id" class="list-item">
            <div>{{ player.name }} <input placeholder="Change your name!" v-model="test[player.id]">
            <b-button variant="light" class="name-change-btn" v-on:click="changePlayerName({id: player.id, newName: test[player.id]})">Change name</b-button>
            </div>
          </span>
        </transition-group>
    </div>
    <router-link to="/words"><b-button variant="success" class="next-button">Get your words!</b-button></router-link>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: mapState({
    players: state => state.players.players
  }),
    data: function() {
      return {
        test: []
    };
},
  methods: {
    ...mapMutations(['addPlayer', 'removePlayer', 'changePlayerName']),
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
.list-enter, .list-leave-to {
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
div input {
  margin-right: 5px;
  line-height: 2.5em;
}
</style>