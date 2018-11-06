<template>
    <div class="div">
        <div v-for='project in projects'>
            <project 
            :title=project.title 
            :description=project.description
            ></project>
        </div>
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
             description: 'A nifty mobile app that will find the cheapest, best or closest pub near you!'   
            },
            {
                title: 'Book Worm',
                description: 'A book-focused social network for book worms. Built on'
            }
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
