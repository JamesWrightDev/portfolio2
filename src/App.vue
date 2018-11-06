<template>
  <div id="app">
     <v-app>
       <ProjectContainer></ProjectContainer>
       <!-- <v-container fluid>
         <v-layout row wrap>
           <v-flex xs6>
             <project 
              title='Find Me a Pint'
              description='A nifty mobile app that will find the cheapest, best or closest pub near you!'>
            </project>
           </v-flex>
           <v-flex xs6>
             <project 
              title='Book Worm'
              description='A book-focused social network for book worms. Built on'>
            </project>
           </v-flex>
           
         </v-layout>
       </v-container> -->

    
      
    
   
      <v-footer>James Wright</v-footer>
       </v-app>
  </div>
</template>

<script>
import ProjectContainer from './components/projectcontainer.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    ProjectContainer
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
