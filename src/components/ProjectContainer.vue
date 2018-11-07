<template>
    <div class='page'>
      <v-app>
        <v-content >
          <v-layout row wrap >
            
            <project 
              v-for='project in projects' 
              :title='project.title'
              :description='project.description'>
              
            </project>
      
          </v-layout>
        </v-content>
      </v-app>
        

    </div>
    
    

</template>
<script>
import Project from './project.vue'

export default {
    data(){
        return{
            projects:[
                {title: 'Find Me a Pint', description: 'A nifty mobile app that will find the cheapest, best or closest pub near you!'},
                 {title: 'Find Me a Pint', description: 'A nifty mobile app that will find the cheapest, best or closest pub near you!'},
               

                            
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
