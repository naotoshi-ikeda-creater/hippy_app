<template>

  <v-app >
    
      <Navbar />
      <v-content>
        <router-view></router-view>
      </v-content>
    
    
  </v-app>
</template>

<script>
import Navbar from './components/globals/Navbar'

export default {
  name: 'app',
  components: {Navbar},
  data (){
    return {

    }
  }
  
}
</script>
