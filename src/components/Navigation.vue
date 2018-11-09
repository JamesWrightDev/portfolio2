<template>
<div>
  <v-toolbar flat color="white"  scroll-off-screen
      >
    <v-tabs right slider-color="#2DAC8C" >
      <v-tab
        v-for="tab in tabs"
        :key="tab.name"
        :to='tab.url'

        >
        {{ tab.name }}
      </v-tab>
  </v-tabs>

  </v-toolbar>
    


</div>

</template>
<script>
export default {
  data(){
    return{
      tabs:[
      {name: 'About', url: '/'},
      {name:'Projects', url: 'projects'},
      {name:'Contact', url: 'contact'},

      ]
    }
  }
}
</script>
