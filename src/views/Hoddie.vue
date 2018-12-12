<template>
<div>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<v-card flat class="text-xs-center">
				<h3 class="grey--text text--lighten-1 wmed">Made the hard way</h3>
				<h1 class=" grey--text text--darken-1 wthin pt-2">Hoddies</h1>
				<v-divider style="" class="my-3 col"></v-divider>

				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
	<AppProductHoddie />
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<v-card flat class="text-xs-center">
			
				<v-divider style="" class="my-3 col"></v-divider>

				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
	


</div>	
</template>
<script>
	
	import Product from '../components/ProdItemNew.vue'
export default{
	data(){
		return{

			}
		},
	components:{
		AppProduct: Product
	}

	}
</script>