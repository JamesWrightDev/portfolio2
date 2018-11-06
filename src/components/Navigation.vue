<template>
  <v-tabs fixed-tabs slider-color="#2DAC8C" >
    <v-tab
      v-for="tab in tabs"
      :key="tab[i]"
      :to='tab.url'

      >
       {{ tab.name }}
    </v-tab>
  </v-tabs>
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
