<template>
<div>
  <v-navigation-drawer
          clipped
          fixed
          v-model="drawer"
          disable-resize-watcher
          app
          dark
          class="bgolor"
        >
         <v-list dense class="pt-0">
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :to="item.link"
          >
            

            <v-list-tile-content>
              <v-list-tile-title class="headline font-weight-light">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
    </v-list>
          
        </v-navigation-drawer>

      <v-toolbar app dense dark flat :class="toolbarclass" style="" v-scroll="onScroll">      
            <div class="infotext text--white hidden-xs-only pt-2">
            <v-icon small>email</v-icon>
            <h5 style="display:inline; font-weight:300;" class="pl-1">tontbysweden@home.se</h5><br>
            <v-icon small>phone</v-icon>
            <h5 style="display:inline; font-weight:300;" class="pl-1">0704831621</h5>
            
            </div>
           
            <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
              <v-toolbar-title></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items class="hidden-xs-only">
                <v-btn flat to="/">Shop</v-btn>
                <v-btn flat to="/about">Om oss</v-btn>
                <v-btn flat to="/contact">Kontakta</v-btn>
                <!-- <v-btn flat to="/">Hem</v-btn> -->


                <v-btn flat to='/cart'>
                <v-badge color="cyan" v-model="show" left>

                <!-- Count items added in cart -->
                  <span slot="badge">{{ count }}</span>
                  <v-icon left>shopping_cart</v-icon>
                </v-badge>Vagn</v-btn>
                
               

                
              </v-toolbar-items>
      </v-toolbar>
  </div>
</template>
<script>
export default{

  data(){
    return{
      offsetTop: 0,
      toolbarclass: 'transparent',
      drawer:false,
      offset: 240,
      cart:false,
      show:true,
      items:[ 

            { title: 'Home', link:'/'},
            { title: 'Mössor', link: '/cap' },
            { title: 'Hoddies', link: '/hoddie' },
            { title: 'Shirts', link: '/tshirt' }


      ]




    }

  },
  computed:{
    count(){
      return this.$store.getters.getItemsInCart
    }

  }, 
  methods:{


       onScroll (e) {

        if( this.offsetTop = window.pageYOffset || document.documentElement.scrollTop){

           this.toolbarclass = 'secondary'
        }else{
           this.toolbarclass = 'transparent'
          
        }
        
        
          
        }
          
        
  },
   watch: {
          '$route': function(to, from) {
            
            if(this.$route.name === 'home'){

              this.offset = 240
              this.cart = false
              
              
            }else{
              this.offset = 100
              this.cart = true
        }
    }
  }
}
  

</script>

<style>
  

</style>
