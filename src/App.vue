<template>
  <div id="app">
     <v-app>
      <v-content>
        <navigation></navigation>
        <v-container fluid align-content-center='true' grid-list-xl>
          <transition name='router-anim' enter-active-class='animated fadeInLeft' leave-active-class='animated fadeOutRight' >
            <router-view></router-view>
          </transition>
        </v-container>       
        </v-content>
   <!--     <v-footer class="pa-4">
        <v-spacer></v-spacer>
         <div>
            
           Built by James Wright in Vue.js
         </div>
         <v-spacer></v-spacer>
       </v-footer> -->
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
  background-color:   #f9f9f9;
  margin-top: 40px;
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
.page{
  position:absolute;
  width: inherit;
}
.text-4{
    font-size: 112px;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -.04em!important;
    font-family: Roboto,sans-serif!important;
    color: #2F4F4F;
}
@media (max-width: 700px) {
  .text-4{
    font-size: 50px;

  }
}

</style>
