<template>
<div> 
<v-card class=" white--text bgolor pa-4" dark>
  <v-container>
  <v-layout row wrap>
    <v-flex xs12 sm7 class="pr-4">
      <p class="title pt-4 pb-4">Leveransadress</p>
      <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="adress.fname"
            :rules="nameRules"
            
            label="Förnamn"
            required
            outline
            color="succes"
          ></v-text-field>
          <v-text-field
            v-model="adress.sname"
            :rules="nameRules"
            
            label="Efternamn"
            required
            outline
            color="succes"
          ></v-text-field>

           <v-text-field
            v-model="adress.adress"
            :rules="nameRules"
            
            label="Adress"
            required
            outline
            color="succes"
          ></v-text-field>

          </v-text-field>
           <v-text-field
            v-model="adress.pnumber"
            :rules="nameRules"
            
            label="Postnummer"
            required
            outline
            color="succes"
          ></v-text-field>
           <v-text-field
            v-model="adress.city"
            :rules="nameRules"
            
            label="Stad"
            required
            outline
            color="succes"
          ></v-text-field>
          <v-text-field
            v-model="adress.email"
            :rules="emailRules"
            label="E-mail"
            required
            outline
            color="succes"
          ></v-text-field>
          </v-form>
          <v-layout row class="text-xs-center">
          <div>
          <v-btn
              large 
              @click="clear"
              flat
              class="">Rensa formuläret</v-btn>
              <v-btn 
              large 
              flat 
              outline 
              dark 
              class="font-weight-thin" 
              :disabled="!valid"  
              @click="submit" >Till betalning<v-icon right large>arrow_right_alt</v-icon></v-btn>
              </div>
              </v-layout>
      </v-flex>



      <v-flex xs12 sm5 class="pa-2">

      <p class=""></p>

      <v-layout row wrap>
        <v-flex xs12 class="">
        <p class="subheading font-weight-light">I din varukorg</p>



         <v-data-table
            :headers="headers"
            :items="getCart"
            hide-actions
            id="kolla"
            
          >
          <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.qty }}</td>
              <td class="text-xs-left">{{ props.item.price}} kr</td>
              
          </template>

  </v-data-table>

  <table style="">
      <tr>
        <td>Summa</td>
        <td class="text-xs-right pr-5">{{ getTotalSum}} kr</td>
      </tr>
      
  </table>
  <div class="pl-4" id="chinf">
  <p>Leverans</p>
  <ul class="pl-4">
    <li>Standard leverans 3-5 dagar</li>
    <li>Leveranskostnad ingår i priset</li>
  </ul>
  <p>Returer</p>
  <ul class="pl-4">
    <li>Returer via postombud</li>
    <li>Kontakta oss om du har problem med varan</li>
  </ul>

  </div>
  <div class="text-xs-center text-sm-right pt-5 pr-3">
   
   <v-btn 
              large 
              flat 
              outline 
              dark 
              class="font-weight-thin" 
              
              to="/cart">Ändra något</v-btn>
  </div>
  

    </v-flex>
    </v-layout>
     
      </v-flex>
  </v-layout>



  

   

   
  
      
  
</v-container>

</v-card>


</div>



 
</template>

<script>
  
import { mapGetters } from 'vuex'
  export default {
    data: () => ({
      profile:{},
      valid: true,
     /* p:{}, */
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
       headers: [
          {
            text: 'Produkt',
            align: 'left',
            sortable: false,
            value: 'name',
            
          },
          { text: 'Antal', value: 'antal', sortable: false },
          { text: 'Pris', value: 'price', sortable: false }
          ]
         
     
     
     
    }),

    methods: {
      
        
      
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          this.$store.commit('setAdress',this.profile)
         this.$router.push('/payment')
        }
      },
      clear () {
        this.$refs.form.reset()
        this.$store.commit('clearAdress')
      }
    },
    

      computed: {
        adress(){
          this.profile = this.$store.getters.getAdress
            return this.$store.getters.getAdress
            },
            ...mapGetters([
                         'getCart',
                         'getTotalSum'
                         
                          ]


    ),
      }
       
  }
  
</script>
<style>



</style>