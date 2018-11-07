<template>
        <v-flex xs12 md6>
              <v-card>
                <img height='200px':src='img' alt="">
                <v-flex>
                  <div>
                    <p class="display-1 secondary--text">{{title}}</p><br>
                    <p class='body'>{{description}}</p><br>
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
<style scoped>

</style>
