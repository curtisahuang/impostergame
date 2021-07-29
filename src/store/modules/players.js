const state = () => ({
  players: [
    {id: 1, name: "Player 1b", word: "Apple", isImposter: false}, 
    {id: 2, name: "Player 2b", word: "Cherry", isImposter: false}, 
    {id: 3, name: "Player 3b", word: "Apple", isImposter: false},
    {id: 4, name: "Player 4b", word: "Apple", isImposter: false},
  ],
  nextPlayer: 5,
  wordbank: [
    ["7-11", "Lawson's", "Family Mart"],
    ["sprite", "vodka", "ginger ale"],
    ["coke", "coffee", "root beer"],
    ["Sashimi", "Nigiri", "Maki sushi"],
    ["Ramen", "Udon", "Soba"],
    ["Milk", "Yogurt", "Cheese", "Ice Cream"]
  ],
})

const getters = {
  returnPlayers: () => {
    return this.players;
  }
}

const mutations = {
  addPlayer: (state) => {
    state.players.push({id: state.nextPlayer, name: `Player ${state.nextPlayer}b`, word: "Apple", isImposter: false})
    state.nextPlayer++;
  },
  removePlayer: (state) => {
    state.players.pop();
    state.nextPlayer--;
  },
  assignRandomWords: function (state) {
    const wordbanklength = state.wordbank.length - 1 ;
    let randomIndex = Math.floor(Math.random() * wordbanklength);
    const categorylength = state.wordbank[randomIndex].length - 1;
    let i1 = Math.floor(Math.random() * categorylength);
    let i2 = Math.floor(Math.random() * categorylength);
    while (i1 === i2) {
      i2 = Math.floor(Math.random() * categorylength);
    }
    const randomWords = [state.wordbank[randomIndex][i1], state.wordbank[randomIndex][i2]];
    for (const player of state.players) {
      player.word = randomWords[0];
    }
    const imposterIndex = Math.floor(Math.random() * state.players.length)
    state.players[imposterIndex].word = randomWords[1];
    state.players[imposterIndex].isImposter = true;
  }
}

export default {
  state,
  getters,
  mutations,
}