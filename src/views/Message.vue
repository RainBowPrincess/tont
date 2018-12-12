<template>
	<div>
		<v-card class="bgolor" dark>
			<v-container v-if="getMessage">
		<v-layout d-flex class="text-xs-center" style="height:200px;" align-center>


		<div>
		<v-avatar color="white" size="128">
			<v-avatar class="green accent-3" size="96">
      		
      			<v-icon large dark>done</v-icon>
    		</v-avatar>
    	</v-avatar>
		</div>


	</v-layout>
	<v-layout align-center class="text-xs-center">
		<v-flex>
		<p class="title font-weight-light">Din Fråga har skickats!</p>
		</v-flex>

	</v-layout>
	
	</v-container>

			<v-container v-else>
		<v-layout d-flex class="text-xs-center" style="height:200px;" align-center>


		<div>
		<v-avatar color="white" size="128">
			<v-avatar class="red accent-3" size="96">
      		
      			<v-icon large dark>done</v-icon>
    		</v-avatar>
    	</v-avatar>
		</div>


	</v-layout>
	<v-layout align-center class="text-xs-center">
		<v-flex>
		<p class="title font-weight-light">Något gick fel försök igen senare</p>
		</v-flex>

	</v-layout>
	
	</v-container>

	
	<v-layout row class="mt-4">
					<v-flex xs12 align-center>
				<v-card flat class="bgolor white--text pa-2 text-xs-center">
			

				

				<v-btn large flat to="/" dark class="font-weight-thin">Tillbaka<v-icon right large>arrow_right_alt</v-icon></v-btn>
				

				</v-card>
			</v-flex>
		</v-layout>



		</v-card>
	</div>
	
</template>
<script>

	export default{
	data(){
		return{

		}
	},

	computed:{

		getMessage(){
			return this.$store.getters.getMessage;
		}
	}
	
}

</script>