<template>
    <div class='page'>
      <v-app>
        <v-container grid-list-lg >
          <v-layout row wrap>
            
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
        

    </div>
    
    

</template>
<script>
import Project from './project.vue'

export default {
    data(){
        return{
            projects:[
                {
                title: 'Find Me a Pint', 
                description: 'A nifty web app that will find the cheapest, best or closest pub near you! Built using: Laravel, PHP, Javascript and the Google Places API' , github:'https://github.com/JamesWrightDev/findmeapint2', 
                url:'https://evening-cove-60863.herokuapp.com/', img:'https://res.cloudinary.com/dnwvgr424/image/upload/v1541630428/findmeapint.png'
                },
                {
                title: 'Book Worm', 
                description: "Bookworm is a book review platform developed in PHP, Laravel and Javascript. It's still in beta right now, but give it a try!", github:'https://github.com/JamesWrightDev/bookworm', 
                url:'https://sheltered-coast-26478.herokuapp.com/', img:'https://res.cloudinary.com/dnwvgr424/image/upload/v1541789241/logo.png'
                },
                {
                title: 'Circles UI Kit', 
                description: 'A micro ui framework designed and built for rapid prototyping, built using SASS', github:'https://github.com/JamesWrightDev/Circles-UI-Framework', 
                url:'https://jameswrightdev.github.io/Circles-UI-Framework/', img:'https://res.cloudinary.com/dnwvgr424/image/upload/v1541788782/circles.png'
                },
                



                
               

                            
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
