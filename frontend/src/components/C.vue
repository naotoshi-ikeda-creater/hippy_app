<template>
  <v-app id="app"> 
    <v-btn>Vuetifyのボタン</v-btn> 
    <div>  
      <p>{{ message }}</p>
    </div>
  </v-app> 
</template>

<script>
export default {
  data: function() {
    return {
      message: "Test Vutify C"
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>