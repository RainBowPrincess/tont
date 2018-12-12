<template>
<div>
	<v-container>

      <v-layout row justify-center align-center>
      <v-flex xs12>
        <v-card flat class="text-xs-center bgolor white--text pt-2">
        <h3 class="font-weight-thin"></h3>
        <h3 class=" font-weight-light display-1 ">Clothing</h3>
        <v-divider class="my-2 bgolor"></v-divider>

        </v-card>
      </v-flex>
    </v-layout>



    <v-layout row wrap  align-center>



      <v-flex xs12 sm6 md4 >
        <v-card to="/cap" :class="{'pa-2': $vuetify.breakpoint.mdAndUp}" flat hover>
          <v-img :src="url +  '/storage/cap240.jpg'" height="240px" ></v-img> 
         

          <p class="headline text-xs-center pt-3" ><span class="bbot">Mössor </span></p>
        </v-card>
      </v-flex>

       <v-flex xs12 sm6 md4>
        <v-card to="/hoddie" :class="{'pa-2': $vuetify.breakpoint.mdAndUp}" flat hover style="">
           <v-img :src="url +  '/storage/hoddie240.jpg'" height="240px" ></v-img>
          <p class="headline text-xs-center pt-3" ><span class="bbot">Hoddies </span></p>
        </v-card>
      </v-flex>

       <v-flex xs12 sm6 md4>
        <v-card to="/shirt" :class="{'pa-2': $vuetify.breakpoint.mdAndUp}" flat hover style="">
          <v-img :src="url +  '/storage/tshirt.jpg'" height="240px" ></v-img> 
          <p class="headline text-xs-center pt-3" ><span class="bbot">T-shirts </span></p>
         
        </v-card>
      </v-flex>


         
          
   
      <AppIconRow />

    </v-layout>
  </v-container>
  
  


  </div>
</template>
<script>

import IconRow from '../views/IconRow.vue'
import { Url } from '../var.js'
export default {
    data () {
      return {
        url: Url
       
      }

     },
     components:{
     
     	AppIconRow: IconRow
      
     },
    
    }
	
</script>