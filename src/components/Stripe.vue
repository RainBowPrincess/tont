<template>
  <div>
    <v-btn large color="info" @click="checkout">Betala</v-btn>
  </div>
</template>

<script>


export default {

    
        
      
    data(){
      return{
      
        
        
        
        
         
    }
  },

  computed:{
    tamount(){
      return this.$store.getters.getTotalSum
    }

  },


  methods: {
    checkout() {
      // this.$checkout.close() 
      // is also available.
      this.$checkout.open({
        name: 'Tönt by Sweden',
        currency: 'SEK',
        amount: this.tamount,
        Label: 'Betala',
        token: (token) => {
          token.amount = this.tamount;
          //console.log('Token', token)
          this.$store.dispatch('payWithCard', token)

          
        } 
      });
    }
  }
}
</script>

