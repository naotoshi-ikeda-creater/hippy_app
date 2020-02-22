import A from "./components/A.vue";
import B from "./components/B.vue";
import C from "./components/C.vue";
import Tasklist from "./components/pages/Tasklist.vue"; //tasklistのインポート

export const routes = [
  { path: "/a", component: A },
  { path: "/b", component: B },
  { path: "/c", component: C },
  { path: "/", component: Tasklist }
];
