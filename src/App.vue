<template>
  <div id="app">
    <!-- Build 1.3 -->
    <navigation></navigation>
     <v-app>
      <v-content>
        
        <v-container align-content-center='true' >
          <transition name='router-anim' enter-active-class='animated slideInUp' leave-active-class='animated slideOutRight' >
            <router-view></router-view>
          </transition>
          </v-container>       
        </v-content>
       <!-- <v-footer>
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
  },
  // methods:{
  //   init(){
  //     // butter.post.list({page: 1, page_size: 10}).then(function(response) {
  //     //   console.log(response)
  //     //  });
  //      console.log('hello')
  //   }
  // },
  // beforeMount(){
  //   this.init()
  //   }  
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:   #FDFDFD;
  margin-top: 10px;
}

h1, h2 {
  font-weight: normal;
  background-color:   #FDFDFD;
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
  position: absolute;
  width: 100%;
  margin: 0 auto;
  left:0
}
.text-4{
    font-size: 112px;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -.04em!important;
    font-family: Roboto,sans-serif!important;
    color: #2F4F4F;
}
.gradient{
  height: 300px;
}
.text-1{
    font-size: 1em;
    margin: 0 10px;
    color: #2F4F4F;
  }

@media (max-width: 700px) {
  .text-4{
    font-size: 50px;

  }
}

</style>
