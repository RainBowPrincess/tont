<template>
<div> 
<v-card style="" class=" white--text bgolor pa-4" >
  <v-container>
  <v-layout row>
    <v-flex xs12>
      <p class="title pt-4 pb-4">Information</p>

      <v-layout row wrap>
        <v-flex xs12 style="border: 1px solid white"
         class="pb-5">
        <p class="pa-4 title">Shoppingbag</p>



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

  <table style="border-top:1px solid #C5C5C5; height:100px;">
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
  <div class="text-xs-right pt-5 pr-3">
   
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
	export default{
    data: () => ({

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
    computed: mapGetters([
                         'getCart',
                         'getTotalSum'
                         
                          ]


    ),
    components:{

      
    }
    
  }
</script>

<style>







</style>