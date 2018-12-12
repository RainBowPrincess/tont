<template>


  
    <v-layout row wrap class="bgolor" >
      <v-flex xs12 sm4 class="pa-4 text-xs-center">
        
           
            
            <p class="subheading white--text  pb-4">Ta ingen skit. Stå upp för dig själv & andra!</p>

            <v-flex xs12 d-flex justify-center align-center>
             <v-img :src="url +  '/storage/p/support.png'" max-width="84px" class=""></v-img>
            </v-flex>            
          


       
    </v-flex>
         <v-flex xs12 sm4 class="pa-4 text-xs-center">
        
           
            
            <p class="subheading white--text  pb-4">Mjuka sköna Kläder med street/klassisk stil</p>

            <v-flex xs12 d-flex justify-center align-center>
             <v-img :src="url +  '/storage/p/rating.png'" max-width="84px" class=""></v-img>
            </v-flex>            
          


       
    </v-flex>
         <v-flex xs12 sm4 class="pa-4 text-xs-center">
        
           
            <div class="icrow">
            <p class="subheading white--text  pb-4">Coolt att vara tönt. Våga vara TÖNT</p>
            </div>
            <v-flex xs12 d-flex justify-center align-center>
             <v-img :src="url +  '/storage/p/hand.png'" max-width="84px" class=""></v-img>
            </v-flex>            
          


       
    </v-flex>
    </v-layout>
    <!-- <v-layout row>
      <v-flex xs12 class="text-xs-right bgolor pt-4 pl-3">
        <v-btn flat large outline class="" style="min-width:200px;" color="white">Läs mer</v-btn>
      </v-flex>
    </v-layout> -->
    
    

</template>
<script>
import { Url } from '../var.js'
  export default{
     data: () => ({
      
     
     url: Url
     
            
    
    }),

    components: {
    
  }


  }

</script>

<style>
.icrow{
  height: 92px; 

  /*background-color:lightgreen;*/
}
.iconrow{
  width: 100%;
}
 

</style>
