<template>
  <div class='page'>
    <v-app>
      <v-content >
        <v-layout row wrap justify-end=true>
          <v-flex md12 xs12>
            <h1 class=" text-xs-left  text-4">Hey,</h1>
            <h1 class="text-xs-left  text-4">I'm James.</h1>
            <h1 class="text-xs-left text-4 font-weight-black secondary--text">I like building things.</h1>
          </v-flex>
          <v-flex md12 xs12 ma->
            <v-btn outline fab color="teal">
              <v-icon>keyboard_arrow_down</v-icon>
            </v-btn>
          </v-flex>
          <v-flex sm6 xs12>
            <h2  class="text-md-center text-sm-center font-weight-medium secondary--text display-2 mt-2 mb-3">About</h2>
            <v-card class='pa-5 ma-2'>
              <p class='body'>I'm a junior front-end web developer with 3 years experience in the commercial sector, focusing on customer experience and tech development.</p>
            </v-card>
          </v-flex>
          <v-flex sm6 xs12 skills>
            <h2 class="text-md-center text-sm-center font-weight-medium black--text display-2 mt-2 mb-3">Skills</h2>
          </v-flex>
        </v-layout>

   
      </v-content>
    </v-app>
  </div>
</template>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style lang="scss">
	.h1{
		font-size: 10em;
		color: red;
	}
	.skills{
		
		
	}
	
</style>