<template>
        <v-flex xs12 md6>
              <v-card>
                <v-img height="100px" >
                </v-img>
                <v-flex>
                  <div>
                    <p class="display-1 secondary--text">{{title}}</p><br>
                    <p class='body'>{{description}}</p><br>
                  </div>
                </v-flex>
                  <v-flex>
                    <v-btn color="secondary">Demo</v-btn>
                    <v-btn flat color="black">Github</v-btn>
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
    props:['title','description','gitHub', 'img'],
    
}
</script>
<style scoped>

</style>
