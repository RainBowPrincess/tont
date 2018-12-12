<template>
  <!-- <v-progress-linear height="4" v-bind:indeterminate="true"></v-progress-linear> -->
  <v-container>
  	<v-layout row>
  		<v-flex xs12 d-flex justiy-center>

	  		<v-progress-circular
	      indeterminate
	      :color="color"
	      size="128"
    ></v-progress-circular>
  			
  		</v-flex>
  	</v-layout>
  </v-container>
  
    
   
   
</template>
<script>
  export default{

    props: ['color']
  }
</script>