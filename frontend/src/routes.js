import Tasklist from "./components/Tasklist.vue";
import Home from "./components/Home.vue";

export const routes = [
  { path: "/tasklist", component: Tasklist },
  { path: "/", component: Home }
];
