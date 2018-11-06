<template>
    <v-layout row wrap justify-center=true>
          <v-flex v-for="project in projects" :key="`6${i}`" md6 xs12>
              <v-card class="pa-2">
                  <project 
                    :title=project.title 
                    :description=project.description
                ></project>

              </v-card>
                
          </v-flex>
         
       </v-layout>
    

</template>
<script>
import Project from './project.vue'

export default {
    data(){
        return{
            projects:[
                {title: 'Find Me a Pint', description: 'A nifty mobile app that will find the cheapest, best or closest pub near you!'},
                {title: 'Book Worm', description: 'A book-focused social network for book worms. Built on'},    
                            
            ]
        }
    },
    components:{
        Project,
    }
    
}
</script>
<style>

</style>
