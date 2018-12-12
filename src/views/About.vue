<template>



	
		<v-card flat class="pa-5" >
				<v-card-text>
				<p class="font-weight-bold mb-4 abouttext">En ide Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>

				<p class="font-weight-regular  abouttext">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
				</v-card-text>
		<v-layout row class="pt-4">
			<v-flex>
				<v-img contain  :src="url + '/storage/about_img.jpg'" aspect-ratio="1.1" ></v-img>
			</v-flex>
			<v-flex d-flex justify-center align-center>
				<div class="title font-weight-light font-italic">Kom på vad det ska stå här!</div>
			</v-flex>
			</v-layout>
				
		</v-card>

</template>
<script>
import { Url } from '../var.js'
	export default{

		data(){
			return{
				url:Url
			}
		}
	}
</script>
<style>
	
.abouttext{

	line-height: 29px;
	font-size: 18px;
}

</style>