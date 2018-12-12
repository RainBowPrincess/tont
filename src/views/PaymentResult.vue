<template>
	<div>

				<v-card

					style="background-color: #25294f; min-height: 280px;" 
					flat class="white--text paycard loadingcard" 
					v-if="getTransaction == 'process'">
					<appLoad color="white" />
				</v-card>
			<v-card 
					v-else-if="getTransaction == 'success'"
					style="background-color: #25294f; min-height: 280px;" 
					flat class="white--text"> 
					
					<v-layout row wrap align-center style="min-height:280px;">
							<v-flex xs12>
								<p class="display-2 font-weight-light text-xs-center">
								Tack!</p>
								<p class="display-1 font-weight-light text-xs-center">Din beställning är på väg</p>

							</v-flex>
						
							<v-flex xs12>
								<p class="	title 
											text-xs-center
											font-weight-light">Ditt ordernummer: {{ getordnr }}</p>
							</v-flex>

							
							
						
						
					</v-layout>
					
				</v-card>

				<v-card v-else style="background-color: #25294f; min-height: 280px;" 
					flat class="white--text">

					<v-layout row wrap align-center style="min-height:280px;">
							<v-flex xs12>
								<p class="display-2 font-weight-light text-xs-center">Tyvärr!</p>
								<p class="display-1 font-weight-light text-xs-center">Något oväntat fel inträffade.</p>
							</v-flex>
	
							<v-flex xs12>
								<p class="title text-xs-center font-weight-light">Försök gärna igen.</p>
							</v-flex>
					</v-layout>
				</v-card>
</div>
</template>

<script>

	import Loading from '../shared/Loading.vue'
	export default{

		data(){
			return{

				kolla: true,
				trans: ''
			}

		},
		components:{

			appLoad: Loading
		},

	

			
		

		computed:{

			getTransaction(){
				return this.$store.getters.getTransaction
			},
			getordnr(){
				return this.$store.getters.getordnr
			}
			
		},
		beforeRouteLeave (to, from, next){

			
				this.$store.commit('resetState');
				next();

			}
			
			

		



		


	}
</script>
<style>
	.loadingcard{
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>