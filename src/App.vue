<template>
  <div id="app">
     <v-app>
      <navigation></navigation>


      <v-container fluid align-content-center='true' grid-list-xl>
             <router-view></router-view>
       </v-container>
       
        <v-footer>James Wright</v-footer>
       </v-app>
  </div>
</template>

<script>
import ProjectContainer from './components/projectcontainer.vue'
import Navigation from './components/navigation.vue'
import Skills from './components/skills.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    ProjectContainer, Navigation, Skills
  }


}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
