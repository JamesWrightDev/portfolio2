<template>
        <v-flex xs12 md4>
              <v-card class='gradient'> 
                <img class='mt-2'height='100px':src='img' alt="">
                <v-flex>
                  <div>
                    <p class='text-1'>{{description}}</p><br>
                  </div>
                </v-flex>
                  <v-flex>
                    <v-btn color="secondary" :href='demoUrl'>Demo</v-btn>
                    <v-btn flat color="black" :href='gitHub'>Github</v-btn>
                  </v-flex>
            </v-card>
          </v-flex>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:['title','description','gitHub', 'img', 'demoUrl'],
    
}
</script>
<style>
  
</style>
