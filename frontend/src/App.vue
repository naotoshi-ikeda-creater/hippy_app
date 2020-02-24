<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/globals/Navbar";
import KProgress from "k-progress";

export default {
  name: "app",
  components: { Navbar },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
#app {
  --background-color: #eeeeee;
  background-color: var(--background-color);
}
</style>
