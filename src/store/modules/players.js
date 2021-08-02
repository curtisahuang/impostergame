import router from "../../router";
import wordbank from "./wordbank"

const state = () => ({
  players: [
    {id: 1, name: "Player 1", word: null, isOddball: false, isAlive: true}, 
    {id: 2, name: "Player 2", word: null, isOddball: false, isAlive: true}, 
    {id: 3, name: "Player 3", word: null, isOddball: false, isAlive: true},
    {id: 4, name: "Player 4", word: null, isOddball: false, isAlive: true},
  ],
  nextPlayer: 5,
  playerCount: 4,
  wordbank,
  oddball: null,
})

const getters = {
  returnPlayers: () => {
    return this.players;
  }
}

const mutations = {
  addPlayer: (state) => {
    if (state.players.length < 20) {
      state.players.push({id: state.nextPlayer, name: `Player ${state.nextPlayer}`, word: null, isOddball: false, isAlive: true})
      state.nextPlayer++;
      state.playerCount++;
    }
  },
  removePlayer: (state) => {
    if (state.players.length > 3) {
      state.players.pop();
      state.nextPlayer--;
      state.playerCount--;
    }
  },
  changePlayerName: (state, {id, newName}) => {
    for (const player of state.players) {
      if (player.id === id) {
        player.name = newName;
      }
    }
  },
  assignRandomWords: function (state) {
    const wordbanklength = state.wordbank.length;
    let randomIndex = Math.floor(Math.random() * wordbanklength);
    let randomAssign = Math.random();
    let randomWords;
    if (randomAssign < 0.5) {
      randomWords = [state.wordbank[randomIndex][0], state.wordbank[randomIndex][1]];
    } else {
      randomWords = [state.wordbank[randomIndex][1], state.wordbank[randomIndex][0]];      
    }
    for (const player of state.players) {
      player.word = randomWords[0];
      player.isOddball = false;
      player.isAlive = true;
    }
    const oddballIndex = Math.floor(Math.random() * state.players.length)
    state.players[oddballIndex].word = randomWords[1];
    state.players[oddballIndex].isOddball = true;
    state.playerCount = state.players.length;
    state.oddball = state.players[oddballIndex].name;
  },
  executePlayer: function (state, userID) {
    for (const player of state.players) {
      if (player.id === userID) {
        player.isAlive = false;
        state.playerCount--;
        if (player.isOddball) {
          router.push("/gameends")
        } else if (state.playerCount == 2) {
          router.push("oddballwins")
        } else {
          router.push("/gamecontinues")
        }
      }
    }
  }
  // selectRandomName: function (state) {
  //   const randomIndex = Math.floor(Math.random() * state.players.length)
  //   return state.players[randomIndex].name;
  // }
}

export default {
  state,
  getters,
  mutations,
}