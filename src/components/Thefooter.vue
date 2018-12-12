<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
    
      
      	<v-layout row class="col pa-5">
      		<v-flex xs12 class="text-xs-center">

          
      		<span class="subheading">Få kontakt med oss på sociala nätverk!</span>

           <div class="iconss">
            
            
            <a href="http://twitter.com/share?url=  " ><v-img :src="url +  '/storage/p/twitter1.png'" width="24px"></v-img></a>
            
           
            <a href="http://facebook.com/sharer/sharer.php?u=" ><v-img :src="url +  '/storage/p/facebook2.png'" width="24px"></v-img></a>
           
          </div>
          

          
        </v-flex>
       
              
              
             

        </v-layout>
      

      <v-layout row>
            
        </v-layout>
          

     

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>Tönt</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
import { Url } from '../var.js'

  export default {
    data: () => ({
      icons: [{
      	 path: '1', class:'fa fa-facebook-square', url: 'https://www.facebook.com/tontbysweden/', link:'http://facebook.com/sharer/sharer.php?u='},
      	{path:'2',class:'fa fa-twitter-square',url: 'http://google.com', link: 'http://twitter.com/share?url='}


      
        
      ],
      url:Url
    }),
    methods:{

    	
		      sface( link , url){
		      	console.log('sface blev anropad', url)
		        //var url = ;
		        window.open( link +encodeURIComponent(url), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

		      }
    }
  }
</script>
<style>
  
  .iconss{
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .iconss a{

    padding-right: 10px;
    padding-top: 10px;
  }
</style>