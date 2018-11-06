<template>
    <div>
       
        <v-layout row wrap justify-end=true>
          <v-flex md3>
              <ul>
                  <v-list v-for='project in projects'>{{project.title}}</v-list>
             </ul>
            </v-flex>  
          <v-flex v-for="project in projects" :key="`6${i}`" md9 xs12>
              <v-card class="pa-2">
                  <project 
                    :title=project.title 
                    :description=project.description
                ></project>
              </v-card>              
          </v-flex>
       </v-layout>

    </div>
    
    

</template>
<script>
import Project from './project.vue'

export default {
    data(){
        return{
            projects:[
                {title: 'Find Me a Pint', description: 'A nifty mobile app that will find the cheapest, best or closest pub near you!'},
                             
                            
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
