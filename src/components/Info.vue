<template>
<div>
	<v-card dark class=" pa-3 bgolor">
<v-container>
	<v-layout row wrap justify-space-around class="bglight">

		<v-flex xs12 sm3  class="">
			
				<v-card dark flat class="pa-3 bglight text-xs-center">
				<v-layout>
					<v-flex>
						<v-icon x-large>shopping_cart</v-icon>
					</v-flex>
					<v-flex>
						<div>Antal</div>
						<div class="title">{{getItemsInCart}} st</div>
					</v-flex>
				</v-layout>
					
			</v-card>

		</v-flex>


		<v-flex xs12 sm3  class="">
		<v-card dark flat class="pa-3 bglight text-xs-center">
					
				<v-layout>
					<v-flex class="">
						<v-icon x-large>send</v-icon>
						
						
					</v-flex>
					<v-flex >
						<div>Leverans</div>
						<div class="title">Gratis</div>
					</v-flex>
				</v-layout>
					
			</v-card>

			
		</v-flex>
		<v-flex xs12 sm3>
		<v-card dark flat class="pa-3 bglight text-xs-center">
					
				<v-layout>
					<v-flex  class="">
						<v-icon x-large>done</v-icon>
						
						
					</v-flex>
					<v-flex>
						<div>Summa</div>
						<div class="title">{{getTotalSum}} Kr</div>
					</v-flex>
				</v-layout>
				</v-card>	
		

			
		</v-flex>

	</v-layout>
</v-container>
</v-card>
</div>

</template>
<script>
	export default{
		data(){

			return{

			}

		},
		props: ['getTotalSum', 'getItemsInCart']




	}

</script>
<style>
	
	.infocard{

		border-radius: 20px;
	}
</style>