<template>
	<div>
	<v-layout row wrap justify-end=true>
          <v-flex md12 xs12>
			<h1 class="text-md-left text-sm-center  display-4">Hey,</h1>
			<h1 class="text-md-left text-sm-center display-4">I'm James.</h1>
			<h1 class="text-md-left text-sm-center display-4 font-weight-black secondary--text">I like building things.</h1>
            </v-flex>  
        </v-layout>
        <v-layout row wrap justify-end=true>
          <v-flex md12 xs12 ma-5 pa-5>
          		<v-btn outline fab color="teal">
      				<v-icon>keyboard_arrow_down</v-icon>
    			</v-btn>
            </v-flex>  
        </v-layout>
        <v-layout row wrap justify-end=true>
          <v-flex md xs12 secondary>
          		<h2 class="text-md-center text-sm-center font-weight-medium white--text display-2 ">About</h2>
				<v-card>Hello</v-card>          		
        </v-flex>  
        </v-layout>	
        <v-layout row wrap justify-end=true>
          <v-flex md xs12 >
          		<h2 class="text-md-center text-sm-center font-weight-black display-2">Skills</h2>
            </v-flex>  
        </v-layout>		
		
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
<style scoped>
	.red-text{
		color: red;
	}
</style>