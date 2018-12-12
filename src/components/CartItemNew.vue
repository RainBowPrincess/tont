<template>

<div>



      
          <v-layout row>
            <v-flex xs12 d-flex  justify-end align-center class="pl-4 white--text">
              
             

                <div class="">{{amount}} st</div>
                  
                <div  class="">
                   <v-btn flat :class="{'plus-btn-small':$vuetify.breakpoint.xsOnly, 'plus-btn':$vuetify.breakpoint.smAndUp, 'white--text': true }" @click="decrement">-</v-btn> <v-btn  flat :class="{'plus-btn-small':$vuetify.breakpoint.xsOnly, 'plus-btn':$vuetify.breakpoint.smAndUp, 'white--text': true}" @click="increment">+</v-btn>
                </div>
                
                
                <div class="body-2">{{ cartItem.totalPrice }} kr</div>
               
               
                <v-flex class="text-xs-center">
                      <v-btn v-if="$vuetify.breakpoint.xsOnly" fab  small dark  left  color="error">
                          <v-icon>delete</v-icon>
                      </v-btn>
                      <v-btn v-else  dark left color="error"  @click="del">Ta bort</v-btn>
                </v-flex>
                </v-flex>
              </v-layout>
          

      
      <v-divider></v-divider>


</div>
</template>
<script>
  export default{

    data(){
      return{
        amount:this.item.qty,
        
        newAmount: null,
        cartItem: this.item,
        
        
        
      }
    },
    props: ['item'], 
  methods:{
          increment(){
            this.amount++
            console.log('amount++', this.amount)
            
          },
          decrement(){
            if(this.amount > 1){
               this.amount--
               
            }
            
          },
          del(){
            this.$store.dispatch('removeFromCart', this.cartItem)

              
          }


      },
      watch:{
        amount: function(val){
          
          this.cartItem.qty = val
          this.cartItem.mode = true
          this.$store.dispatch('addToCartTest', this.cartItem)
          

          }

      },
      computed:{
        summa(){
          return this.cartItem.price * this.amount
        }
        

      }


  


}
</script>
<style>

.sommar:hover{
  background-color: #484057;
}




</style>