<template>
<v-container style="max-width:900px;">
	<v-layout>
		<v-flex xs12>



	
		<v-layout row>
			<v-flex xs12>
				<v-card flat class="text-xs-center bgolor white--text pt-2">
				<h3 class="font-weight-thin">Made the hard way</h3>
				<h3 class=" font-weight-light display-1 ">Våra Mössor</h3>
				<v-divider style="" class="my-2 bgolor"></v-divider>

				</v-card>
			</v-flex>
		</v-layout>
		<v-layout row>
		<v-flex xs12   align-center>
	
	
	  
		
      <!-- <appLoad v-if="loading" color="#6495ed"></appLoad> -->
      
      <AppProduct  :productlist="products" :typeOfProduct="typeOfProduct" :e1="e1"/>
      </v-flex>

      </v-layout>
      	<AppNavBar />

		</v-flex>
	</v-layout>
</v-container>
	


</template>
<script>
	import { mapGetters } from 'vuex'
	
	import Loading from '../shared/Loading.vue'
	import Product from '../components/ProdItemNew.vue'
	import NavBar from '../components/NavBar.vue'
	
export default{
	data(){
		return{
			
			typeOfProduct: 'Mössa',
			
			e1:{
          description:'',
          id:null,
          image:'http://45.76.86.13/storage/capv.jpeg',
          name:'',
          price:500,
          prod_id:'',
          prod_type:'',
          text:'',
         
      		}
  		}
	},
	computed: mapGetters({
	    products: 'productslist',
	    loading: 'getLoading'
	    

  	}),

 

	components:{
		AppProduct: Product,
		AppLoad: Loading,
		AppNavBar: NavBar
	},

	created(){
   
    
    this.$store.dispatch('fetchProducts', 'cap')

  
    
  }

	}
</script>