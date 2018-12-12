<template>
  <div>

  <vue-stripe-checkout
      ref="checkoutRef"
      :image="image"
      :name="name"
      :description="description"
      :currency="currency"
      :amount="amount"
      :allow-remember-me="false"
      panel-label="Betala"
      @done="done"
      @opened="opened"
      @closed="closed"
    ></vue-stripe-checkout>

    <v-btn large color="info" @click="checkout">Betala</v-btn>
  </div>
</template>

<script>


export default {
  data() {
    return {
      image: 'https://i.imgur.com/HhqxVCW.jpg',
      name: '',
      description: 'Tönt By Sweden',
      currency: 'Sek',
      amount: 0
    }
  },
  // computed:{
  //   tamount(){
  //     return this.$store.getters.getTotalSum
  //   }


  // },
  mounted(){
    let payopt = this.$store.getters.getTotalSum
    this.amount = payopt * 100
    console.log(this.amount)
  },


  methods: {
    async checkout () {
      // token - is the token object
      // args - is an object containing the billing and shipping address if enabled
      const { token, args } = await this.$refs.checkoutRef.open();
      console.log( 'token', {token, args})
    },
    done ({token, args}) {
      // token - is the token object
      console.log('inne i done' ,{token})
      this.$store.dispatch('payWithCard', {token})
      // args - is an object containing the billing and shipping address if enabled
      // do stuff...
    },
    opened () {
      // do stuff 
    },
    closed () {
      // do stuff 
    }
  }
  
}
</script>

