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
import Butter from 'buttercms'
export const butter = Butter('c99a1b8e3c9cf596fb9d85b04bcb5c71a7dddcca')

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
                description: "Bookworm is a book review platform developed in Php, Laravel and Javascript. It's still in beta right now, but give it a try!", github:'https://github.com/JamesWrightDev/findmeapint2', 
                url:'https://sheltered-coast-26478.herokuapp.com/', img:'https://res.cloudinary.com/dnwvgr424/image/upload/v1541630428/findmeapint.png'
                },
                {
                title: 'Circles UI Kit', 
                description: 'A micro ui framework designed and built for rapid prototyping, built using SASS', github:'https://github.com/JamesWrightDev/findmeapint2', 
                url:'https://evening-cove-60863.herokuapp.com/', img:'https://res.cloudinary.com/dnwvgr424/image/upload/v1541687724/logo.png'
                },
                



                
               

                            
            ]
        }
    },
    components:{
        Project,
    },
    methods:{
    init(){
      butter.post.list({page: 1, page_size: 10}).then(function(response) {
        console.log(response)
        for(i; i<response.length; i++){
            console.log(response[i].data)
        }
       });
       console.log('hello')
    }
  },
    beforeMount(){
        this.init();
    }
    
}
</script>
<style scoped>
</style>
