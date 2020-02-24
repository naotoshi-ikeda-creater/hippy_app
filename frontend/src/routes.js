import A from "./components/A.vue";
import B from "./components/B.vue";
import C from "./components/C.vue";
import Tasklist from "./components/parts/Tasklist.vue"; //tasklistのインポート
import Badge from "./components/parts/Badge.vue";

export const routes = [
  { path: "/a", component: A },
  { path: "/b", component: B },
  { path: "/c", component: C },
  { path: "/", component: Tasklist },
  { path: "/d", component: Badge }
];
