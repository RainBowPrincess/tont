import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', 
  
  storage: window.localStorage, 

})


function initialState(){

  return {

    products:[],
    cart:[],
    ordnr: null,
    loading:false,
    transaction:'',
    message:true,
    ordnr: '',
    adress:{},
    totalSum:0,
    itemsincart:0 
  }
}


export const  store = new Vuex.Store({
state:{

	products:[],
  cart:[],
  ordnr: null,
  loading:false,
  transaction:'',
  message:true,
  ordnr: '',
 
  adress:{},

  totalSum:0, 
  itemsincart:0 
  

},


/****
    Getters
****/

 getters:{ 

    productslist(state){
      return state.products
    },
    getCart(state){
      return state.cart  
    },
   
    getCheckProduct(state){
      return state.cart.prod_id

    },
    getLoading(state){
      return state.loading
    },
    getordnr(state){
      return state.ordnr
    },



 

    getItemsInCart(state){
      
      return state.itemsincart

  },




    getTotalSum(state){
    
        return state.totalSum
      
    },
    getAdress(state){

      return state.adress

  },
    getCheckAdress( state){
       if(Object.keys(state.adress).length === 0){
      
        return false
      }else{
        return true
      }

    },

   
    getvalue(state){
      
      if(state.cart && state.cart.length === 0){
        return false
      }else{
        return true
      }
    },

    getMessage( state){
      return state.message
    },

    getTransaction(state){
      return state.transaction;

    }
   

   




  },

/****
    mutations
****/


  mutations:{
    
    setTotalSum(state, payload){

     
     if(state.cart === undefined || state.cart.length == 0){
        state.totalSum = 0

     }else{

      var amount = state.cart.map(item => item.totalPrice).reduce((prev, next) => prev + next);
      state.totalSum = amount

     }



     
     
    },
     setItemsInCart(state, payload){

     
     if(state.cart === undefined || state.cart.length == 0){
        state.itemsincart = 0

     }else{

      var amount = state.cart.map(item => item.qty).reduce((prev, next) => prev + next);
      state.itemsincart = amount

     }



     
     
    },



    SET_PRODUCTS(state, payload){
      state.products = payload
    },


    ADD_TO_CART(state, payload){

     
      const prodId = payload.id
      const qty = payload.qty
      const totalProdPrice = payload.qty * payload.price
      const record = state.cart.find(product => product.id === prodId)
      
    if (!record) {
      state.cart.push({
        id: prodId,
        qty: qty,
        name: payload.name,
        price: payload.price,
        totalPrice: totalProdPrice,
        
        text: payload.text  
      })
    } else {
      
      
        if(!payload.mode){
          record.qty += qty
          record.totalPrice += totalProdPrice
        }else{

          record.qty = qty
          record.totalPrice = totalProdPrice
        }
      
    }
    
  },
  ADD_ORDNR(state, payload){
    state.ordnr = payload
  },


  REMOVE_FROM_CART(state, payload){
    const index = state.cart.findIndex(x => x.id == payload.id);
    state.cart.splice(index,1);
    },
   setLoading(state, payload){
      state.loading = payload
    },

    setAdress(state, payload){
      state.adress = payload
    },
    updateAdress(state, payload){
      state.adress.adress = payload
    },
    clearAdress(state){
      var adress = {}
      state.adress = adress
    },
    setMessage(state, payload){
      state.message = payload;
    },
    resetState(state){

      const s = initialState()
      
       Object.keys(s).forEach(key => {
        state[key] = s[key]
      })
      
      


    },
    setTransaktion(state, payload){ 
      state.transaction = payload;

    }
   



},  
  




  

/****
    actions
****/

  actions:{

  		
  		async fetchProducts({ commit,state }, payload){
             
  			try {
  				 const products = await axios.get('/products/' +  payload)
  			   commit('SET_PRODUCTS',products.data.products)
           
          }catch(error){
          
  				console.log('error', error)



  			}

  		},



       async payWithCard({ commit, state, getters }, payload){
            //commit('setTransaktion', 'process')
            var completeCart = getters.getCart
            var adress = getters.getAdress
            var amount = getters.getTotalSum
            console.log('payload', payload)
            var tok = payload.token
            tok.amount = amount
            console.log('tok', tok)
            completeCart.push(adress)
            completeCart.push(tok)
            console.log('inne i store', completeCart)
          try{

            const orderInfo = await axios.post('/orders', completeCart)
            

            const mess = orderInfo.data.message
            const ordernr = orderInfo.data.ordernr
            
            commit('setTransaktion', 'success')
            state.ordnr = ordernr
            
           
            


           }catch(error){
            commit('setTransaktion', 'error')
            console.log(error)

           }


            
       },




     

 
      



      async addToCartTest({ commit, state }, payload){
        
       try{
        commit('ADD_TO_CART', payload)
        

        commit('setTotalSum')
        commit('setItemsInCart')

        
       }catch(error){
         console.log(error)
       } 
        
        
        

           
      },

      async removeFromCart({ commit, state }, payload){
        
       try{
        commit('REMOVE_FROM_CART', payload)
        

        commit('setTotalSum')
        commit('setItemsInCart')
        
       }catch(error){
         console.log(error)
       } 
        
        
        

           
      },





     

     
      async postQuest({ commit,state }, payload){

          try {
              
               commit('setMessage', true)
               
               
          }catch(error){
                commit('setMessage', false)
            console.log(error)
          }

      },








    
  },
  plugins: [vuexLocalStorage.plugin]



});


