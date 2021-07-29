import Vue from "vue";
import Router from "vue-router";
import NumberOfPlayers from "./components/01NumberOfPlayers";
import NamesOfPlayers from "./components/02NamesOfPlayers";
import Words from "./components/03Words";
import Statements from "./components/04Statements";
import Voting from "./components/05Voting";
import GameContinues from "./components/06GameContinues";
import GameEnds from "./components/07GameEnds";

Vue.use(Router);

export const routes = [
  {
    path: "/numberofplayers",
    name: "Number Of Players",
    component: NumberOfPlayers,
  },
  {
    path: "/namesofplayers",
    name: "Names Of Players",
    component: NamesOfPlayers,
  },
  {
    path: "/words",
    name: "Words",
    component: Words,
  },
  {
    path: "/statements",
    name: "Statements Round",
    component: Statements,
  },
  {
    path: "/voting",
    name: "Voting Round",
    component: Voting,
  },
  {
    path: "/gamecontinues",
    name: "Game Continues",
    component: GameContinues,
  },
  {
    path: "/gameends",
    name: "Game Ends",
    component: GameEnds,
  },
]

export const router = new Router({
  routes
});

export default router;