<template>
  <div id="app">
     <v-app>
       <v-container fluid>
         <v-layout row wrap>
           <v-flex xs6>
             <project 
              title='Find Me a Pint'
              description='A nifty mobile app that will find the cheapest, best or closest pub near you!'>
            </project>
           </v-flex>
           <v-flex xs6>
             <project 
              title='Find Me a Pint'
              description='A nifty mobile app that will find the cheapest, best or closest pub near you!'>
            </project>
           </v-flex>
           
         </v-layout>
           <h1>Hi I'm James,</h1>
          

          <project 
            title='Book Worm'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur tincidunt elit in commodo. Sed sollicitudin turpis 
            ligula, id tempus ex euismod nec. In nisl lectus, bibendum nec tincidunt eget, dignissim non massa.'>
          </project>

          <project 
            title='Circles UI Kit'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur tincidunt elit in commodo. Sed sollicitudin turpis 
            ligula, id tempus ex euismod nec. In nisl lectus, bibendum nec tincidunt eget, dignissim non massa.'>
          </project>

       </v-container>

    
      
    
   
    
       </v-app>
  </div>
</template>

<script>
import Project from './components/project.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    Project,
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
