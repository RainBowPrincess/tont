<template>

        <v-card flat  class="white--text bgolor">
              <v-layout row wrap align-center>
                <v-flex xs12 sm6>
                  <v-img :src="o1.image" aspect-ratio="1.3"></v-img> 
                </v-flex>


                
                <v-flex xs12 sm6   class="pt-2 pl-2 pr-2">
                <v-layout>
                      <v-flex xs7 class="pl-2">
                         <div class="headline ">{{ typeOfProduct }}</div>
                            <div class="" style="font-weight:300; line-height:20px;">
                          <p>Mjuk och skön stickad mössa i beanie-modell.
                          med reflexlogo mitt fram.  En storlek.</p>
                        </div>
                      </v-flex>


                      <v-flex xs5 d-flex class="">
                      <div  v-if="getvalue" class="text-xs-center">

                          <v-btn v-if="$vuetify.breakpoint.xsOnly"  to="/cart"  dark   color="green accent-3" class="white--text">
                              <v-icon>shopping_cart</v-icon>
                          </v-btn>


                          <v-btn v-else color="green accent-3" class="white--text" to="/cart"><v-icon>shopping_cart</v-icon>
                          Varukorg</v-btn>
                      </div>

                    
                      </v-flex>
                    </v-layout>

                    
                    <v-layout  row wrap class="pt-2"> 
                    <v-flex d-flex   align-center xs6  class="pl-2">
                    
                    <v-select 
                    
                      dark
                      :items="productlist"
                      v-model="o1"
                      
                      return-object
                      :label="lable"
                      
                      outline
                      style="max-width:160px;"

                      
                      
                    ></v-select>
                  </v-flex>



                  <v-flex d-flex xs6  class="pt-2">
                    <div class="text-xs-center">
                      <v-btn dark flat class="plus-btn" @click="decrement">-</v-btn>
                      <h3 id="qty">{{ amount }}</h3>
                      
                      <v-btn dark flat class="plus-btn" @click="increment">+</v-btn>
                      </div>  
                  </v-flex>
                </v-layout>

                  <v-layout row wrap>
                    <v-flex xs12 d-flex :class="{'pt-4': $vuetify.breakpoint.smAndDown, 'padd1': $vuetify.breakpoint.mdAndUp }">


                      

                      <v-btn 
                        large 
                        
                        style="min-width:200px;"
                        class="col white--text"
                        :loading="getLoading"   
                        @click="addToCart">
                        <v-icon left v-show="btnvlaue">done</v-icon>{{ btntext }}
                        </v-btn>
                      </v-flex>

                  </v-layout>
              </v-flex> 
               
              
              </v-layout>

                <v-snackbar
                                absolute
                                :timeout="timeout"
                                :top="y === 'top'"
                                
                                :right="x === 'right'"
                                
                                :multi-line="mode === 'multi-line'"
                                :vertical="mode === 'vertical'"
                                v-model="snackbar"
                            >
                              {{ text }}
                              <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
                    </v-snackbar>
              </v-card>

 


</template>
<script>
import { mapGetters } from 'vuex'
  export default{
    props: ['productlist', 'typeOfProduct', 'e1'], 
        
      
    data(){
      return{
        //o1: {},
        o1: this.e1,
        snackbar:false,
        timeout: 6000,
        y: 'top',
        x: 'left',
        mode: '',
        text: 'Du glömde välja färg',
        btntext: 'LÄGG I VARUKORG',
        btnvlaue:false,
        show:false,
        amount: 1,
        lable: 'Färg',
        padd: 'padd1',
        ShowBasket:false,
                 
    }
  },
 

     methods:{
          increment(){
            this.amount++
          },
          decrement(){
            if(this.amount > 1){
               this.amount--
            }
            
          },
          stwitt(){
            var url = "http://google.com"
            var text = 'kolla'
            window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

          },
          sface(){
            var url = "google.se";
            window.open('http://facebook.com/sharer/sharer.php?u='+encodeURIComponent(url), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

          },
   

         addToCart(){
            if(this.o1.text === ""){
              this.snackbar = true
            }else{
              this.o1.qty = this.amount  
              this.$store.dispatch('addToCartTest', this.o1)
             
              
              this.amount = 1

              this.btntext =  'TILLAGT'
              this.btnvlaue = true;
                                
           setTimeout(() => {
          

          this.btntext = 'LÄGG I VARUKORG'
          this.btnvlaue = false

            
        }, 1400);


        }
              

              
              
            }

        


        

        
          

  },
  computed: {...mapGetters([
                         'getLoading',
                         'getCart',
                         
                         'getvalue',
                          ]
     
      

      
    ),
    
  }
    

  
}

</script>
<style>


.prodColor{
  background-color: #404254;
}

/*.cell {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto; 

    padding: 0px;
  
    margin: 0px;

    background-color: #404254;
    border: 1px solid #404254;
    text-align: center;

}*/

img {max-width:100%; min-width: 160px; min-height: 160px;}

.colshoser{
margin-top:-14px;

}
  
 
  #qty{
    display:inline; 
    line-height:30px;
    vertical-align: middle;
}


#chooser{
  height: 42px;
}

.placement{
   margin-bottom: 400px;
}
.padd1{

  padding-top:40px;
}
.padd0{
  padding-top:0px;
}

/*.primary--text {
    color: white !important;
}*/



</style>