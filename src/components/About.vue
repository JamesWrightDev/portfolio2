<template>
  <div class='page' id='page'>
    <v-app>
      <v-content >
        <v-layout row wrap justify-end=true>
          <v-flex md12 xs12 ml-3 class='full-page'>
            <h1 class=" text-xs-left  text-4">Hey,</h1>
            <h1 class="text-xs-left  text-4">I'm James.</h1>
            <h1 class="text-xs-left text-4 font-weight-black secondary--text">I like building things.</h1>
            <v-btn class='margin-top-large' outline fab color="secondary" href='#bio'>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-btn>
          </v-flex>
          <v-flex sm6 xs12 mt-5 mb-5 class=''>
          	<div id="bio">
          		<h2  class="text-md-center text-sm-center font-weight-medium secondary--text display-2 mt-2 mb-3">About</h2>
           		 <v-card class='home-card pa-3' color=primary >
              <p class='p white--text'>I'm a junior front-end web developer with 3 years experience in the commercial sector, focusing on customer experience and tech development. Currently seeking my first web devloper position.</p>
            </v-card>
          	</div>
            
          </v-flex>
          <v-flex sm6 xs12 skills mt-5 mb-5 >
            <h2 class="text-md-center text-sm-center font-weight-medium secondary--text display-2 mt-2 mb-3">Skills</h2>
            <v-card class='skill-card pa-3 font-weight-thin' >
            	<ul >
            	 <v-chip color=primary outline v-for='skill in skills' :key="skill.name">{{skill}}</v-chip>
            	</ul>
            </v-card>
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
				skills:['HTML','Css','Javascript','Sass','Vue.js','Jquery','Php','Laravel','Git','G	ulp']

			}
		}
	}
</script>
<style lang="scss">
	html {
		scroll-behavior: smooth;
	}
	.p{
		font-size: 1.6em;
	}
	ul li{
		font-weight: 100;
	}
	.home-card{
		width: 80%;
		margin: 0 auto;
	}
	.skill-card{
		width: 50%;
		margin: 0 auto;
		font-size: 1.4em;
	}
	.h1{
		font-size: 10em;
		color: red;
	}
	.full-page{
		height: 100vh;
	}
	.margin-top-large{
		margin-top: 12em;
	}
	
</style>