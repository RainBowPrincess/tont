<template>
  
  <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-toolbar
            color="green accent-3"
            dark
          >

           <v-toolbar-title>Varukorg</v-toolbar-title>
      <v-spacer></v-spacer>
    <v-icon large>shopping_cart</v-icon>
          </v-toolbar>
                   


<v-card v-if="!getvalue" class="white--text bgolor" style="min-height:400px;">
  <v-container>
          <v-layout row>
            <v-flex xs12 class="text-xs-center pa-5">
              <p class="title ">Din kundvagn är tom</p>
            </v-flex>
          </v-layout>
  </v-container>
</v-card>

  <v-card v-else flat class="bgolor" style="min-height:400px;">     
        <AppCartItem
            
              v-for="item in getCart"
              :item="item" 
              :key="item.id" 
              @amount="checkevent($event)"
              @summa="checksumma($event)"/>
      </v-card>

     

        </v-flex>
      </v-layout>

       <v-layout>
                <v-flex xs12>
                <v-divider color="white"></v-divider>
                  <Info :getTotalSum="getTotalSum" :getItemsInCart="getItemsInCart"></Info>
                </v-flex>
              </v-layout>
              <NavBar />
             
    </v-container>
</template>
<script>
import CartItem from '../components/CartItemNew.vue'
import Info from '../components/Info.vue'
import NavBar from '../components/NavBar.vue'
import { mapGetters } from 'vuex'
  export default{
    data(){
      return{
        amMount:null
        
      }
    },
    components:{
      AppCartItem:CartItem,
      Info,
      NavBar


    },
  
      computed: mapGetters([
                         'getCart',
                         'getTotalSum',
                         'getvalue',
                         'getItemsInCart'
                         
                          ]


    ),
  
      
    

  }
</script>