<template>
<div>
<v-card class="bgolor pa-4" dark>
	<v-container>
		<v-layout row justify-center >
			<v-flex xs12 sm8 class="contact-form mb-2" >
				<p class="headline">Du är alltid välkommen att kontakta oss.</p>
				<p class="title font-weight-light">Vi återkommer så fort vi kan. Offtast innom 24 timmar.</p>

				
  </v-flex>
  </v-layout>

  <v-layout row justify-center>
    <v-flex xs12 sm8 class="contact-form">
      <h3 class="pb-4 pt-5">Skicka en fråga.</h3>
      <v-form ref="form" dark v-model="valid" lazy-validation>

      	<v-select
          :items="items"
          v-model="quest.rubrik"
          label="Välj ämne"
          outline
          color="succes"
          
        ></v-select>


         <v-textarea
          outline
          name=""
          label="Skriv ditt meddelande här"
          v-model="quest.text"
          clearable
          no-resize
          color="succes"
        ></v-textarea>
          <v-text-field
            label="Ditt Namn"
            outline
            v-model="quest.name"
            :rules="nameRules"
            clearable
            color="succes"

          ></v-text-field>

             <v-text-field
            label="E-post adress"
            outline
            v-model="quest.email"
            :rules="emailRules"
            clearable
            color="succes"
          ></v-text-field>
             <v-text-field
            label="Telefonnummer"
            outline
            v-model="quest.phnum"
            clearable
            color="succes"
          ></v-text-field>
           
          </v-form>
          <v-flex xs12 class="text-xs-right">
          <div>
              <v-btn
               large
               flat
               outline
              @click="submit"
              :disabled="!valid" 
              class="">Skicka din fråga<v-icon  right>send</v-icon></v-btn>
              </div>
            </v-flex>
      </v-flex>
  </v-layout>

  


   
  
      


 



		
		</v-layout>
	</v-container>
  </v-card>
  </div>

</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
    items:['Faktura','betalning', 'Leverans', 'Retur', 'Övrigt'],
      quest:{},
      valid: true,
    
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
     
     
     
    }),

    methods: {
      
        
      
      submit () {
        if (this.$refs.form.validate()) {
        
          this.$store.dispatch('postQuest',this.quest)
         this.$router.push('/message') 
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    },

    computed:{...mapGetters([
                         'getLoading',
                         
                         'getMessage',
                          ]
     
      

      
    )
      },

  
   
  }
</script>
<style>
  .contact-form{
   background-color:#302943; 
   padding: 10px;
    
  }
 
</style>