<template>
    <div class='page'>
      <v-app>
        <v-container grid-list-lg >
          <v-layout row wrap >
            
            <project 
              v-for='project in projects' 
              :key="project.title"
              :title='project.title'
              :description='project.description'
              :gitHub='project.github'
              :demoUrl='project.url'
              :img='project.img'>

              
            </project>
      
          </v-layout>
        </v-container>
      </v-app>
        <img src="../assets/img/findmeapint.png" alt="">

    </div>
    
    

</template>
<script>
import Project from './project.vue'

export default {
    data(){
        return{
            projects:[
                {title: 'Find Me a Pint', description: 'A nifty mobile app that will find the cheapest, best or closest pub near you!', github:'https://github.com/JamesWrightDev/findmeapint2', url:'https://evening-cove-60863.herokuapp.com/', img:'https://res.cloudinary.com/dnwvgr424/image/upload/v1541630428/findmeapint.png'},
                
               

                            
            ]
        }
    },
    components:{
        Project,
    }
    
}
</script>
<style scoped>
</style>
