<template>
    <div>
         <h2>{{title}}</h2>
            <p>{{description}}</p> 
            <v-btn color="#3A343B" class="white--text">Demo</v-btn>
            <v-btn color="#2DAC8C" class="white--text">Github</v-btn>
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
.success{
    background-color:#fad705;
}
</style>
