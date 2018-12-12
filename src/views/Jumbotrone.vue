<template>
	   <v-img :class="jclass" aspect-ratio="1.7" src="http://lapi.se/storage/head.jpeg" 
       gradient="to top, rgba(13, 3, 29, 0.85), rgba(25, 25, 38, 0.85)">
    <v-container fill-height v-if="home">
    <transition name="slide-fade" type="transform" appear>
      <v-layout class=" pt-4" align-center>

        <v-flex xs12 sm6 md8 offset-sm3 offset-md3>
          <v-img contain src="http://lapi.se/storage/tont1.svg"></v-img>

        </v-flex>

    </v-layout>
      </transition>
    </v-container>                                           
  </v-img>
</template>
<script>
  export default{
    data(){
      return{
         jclass: 'jlarge',
         headerText: '',
         home:true

         
      }
    },
    computed:{
      jumboSize(){
        
        
      }
     
    },
    watch: {
      '$route': function(to, from) {
       
        
        if(this.$route.name == 'home'){

          this.jclass = 'jlarge'
          this.home = true
          
          } 
        
        else{
          this.jclass = 'jsmall'
          this.home = false
          
        }
       
       
      }
  }
   

  }
</script>

<style>
  .jlarge{
    max-height: 300px !important;
  }
  .jsmall{
    max-height: 140px !important;
  }
</style>