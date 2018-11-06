<template>
    <div>
    <h2>{{title}}</h2>
    <p>{{description}}</p> 

    <v-btn color="success">Demo</v-btn>
    <v-btn color="info">Github</v-btn>
    
    </div> 

</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:['title','description','gitHub', 'img'],
    
}
</script>
<style scoped>

</style>
