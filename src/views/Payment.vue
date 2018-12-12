<template>

	<v-container fluid style="max-width:800px;">
		<v-card style="background-color: #25294f;" flat class="white--text">
					<v-layout row wrap >
						<v-flex xs12 sm6  class="pa-4 text-xs-center" align-center>
							<div class="headline pb-3">Kontakt</div>
							

							<div class="font-weight-light subheading ">{{ getAdress.email }}</div>
							
						</v-flex>
					
					
				
					
						<v-flex  xs12 sm6 class="pa-4 text-xs-center" align-center  >
							<div class="headline pb-3">Adress</div>
							
							<div class="subheading  font-weight-light pb-2" id="adressText">
								<p>{{ getAdress.fname }}</p>
								<p>{{ getAdress.adress }}</p>
								<p>{{getAdress.pnumber}}  {{getAdress.city}}</p>

							</div>
						</v-flex>
						

					</v-layout>
						<v-layout row>
						<v-flex xs12 d-flex justify-center>
						
						<v-divider color="white" style="max-width:80%;"></v-divider>
						</v-flex>
					</v-layout>

					<v-layout row wrap>

						<v-flex xs12 sm6 class="pa-4">
							<div class="text-xs-center"><v-icon x-large color="white">info</v-icon></div>
							<div class="info-text text-xs-center title font-weight-light pt-3">Vänligen kontrollera leveransadressen</div>
						</v-flex>

						<v-flex xs12 sm6 class="pa-4">
							
							
							<div class="text-xs-center pt-4">
							<v-btn large flat dark outline to="/checkout"><v-icon> keyboard_arrow_left</v-icon>Ändra Något</v-btn>
							</div>

						</v-flex>
					
				</v-layout>
			</v-card>
			</transition>


			</v-flex>
		</v-layout>

		<v-layout row class="mt-5">
			<v-flex>
				<v-card color="" class="">
					<v-layout row>
						<v-flex d-flex align-center class="pl-4 pr-2">
							<div class="subheading"></div>
							<v-img :src="url +  '/storage/p/1.png'" max-width="64px"></v-img>
							<v-img :src="url +  '/storage/p/2.png'" max-width="64px"></v-img>
							<v-img :src="url +  '/storage/p/3.png'" max-width="64px"></v-img>
							<v-img :src="url +  '/storage/p/sl.png'" max-width="90px"></v-img>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex xs12 sm6>
							
								<v-btn flat color="info"><v-icon> keyboard_arrow_left</v-icon>Läs mer om säkerhet vid betalning</v-btn>
							
						</v-flex>
						<v-flex xs12 sm6 class="text-xs-center text-sm-right ">
							
							<div>
								<appStripe></appStripe>
							</div>
							
						</v-flex>
					</v-layout>
					
				</v-card>

			</v-flex>
		</v-layout>
		
	</v-container>






</template>
<script>
import Loading from '../shared/Loading.vue'
import StripeUpdated from '../components/Stripe-updated.vue'
import { Url } from '../var.js'
import { mapGetters } from 'vuex'
	export default{
    data: () => ({
    	loading: true,
     saker: 'kolla om funkar',
     url: Url
     
	          
    
    }),
    beforeEnter: (to, from, next) => {

				
				
			 	if(store.getters.getAdress == false){
					
			 		next('/');
			 	}else{
			 		console.log('beforeEnter true')
			 		next();

			 	}

        		
      		 },
    computed: mapGetters([
                         'getAdress',
                         'getSum',
                         'getMessage',
                         'getTransaction',
                         // 'getordnr'
                         
                          ]


    ),
    components:{
    appStripe: StripeUpdated,
    appLoad: Loading
      
    },
    watch:{
    	getTransaction(value){
    		
    			this.$router.push('/payresult')
    	}

    },
    
  
  methods:{

  	testOrder(){

  			this.$store.dispatch('payWithCard')

  	}

  	
  }

}
</script>

<style>

.paycard{

	display: flex;
	justify-content: center;
	align-items: center;
}
.cont-box{
	border: 1px solid black;

}

#outerContainer p{

	font-size: 18px;
	padding-bottom: 0px;
	margin-bottom: 0px;


}
#adressText p{
	padding: 0px;
	margin:0px;
	
}
.infobox{
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 200px;
	background-color: lightgreen;

}
	
</style>