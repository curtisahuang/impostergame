import Vue from "vue";
import VueRouter from "vue-router";
import NumberOfPlayers from "./components/01NumberOfPlayers";
import Words from "./components/03Words";
import Statements from "./components/04Statements";
import Voting from "./components/05Voting";
import GameContinues from "./components/06GameContinues";
import GameEnds from "./components/07GameEnds";
import ImposterWins from "./components/08ImposterWins";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/numberofplayers",
    name: "Number Of Players",
    component:NumberOfPlayers,
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
  {
    path: "/imposterwins",
    name: "Imposter Wins",
    component: ImposterWins,
  },
]

export const router = new VueRouter({
  mode: "history",
  routes
});

export default router;