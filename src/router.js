import Vue from 'vue'
import Router from 'vue-router'
import { store } from './store.js'
//import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Landing.vue')
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
     {
      path: '/cap',
      name: 'cap',
     
      component: () => import(/* webpackChunkName: "about" */ './views/Cap.vue')
    },
     {
      path: '/hoddie',
      name: 'hoddie',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Hoddie.vue')
    },
     {
      path: '/tshirt',
      name: 'tshirt',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Shirt.vue')
    },
     {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },
     {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Cart.vue')
    },
     {
      path: '/checkout',
      name: 'checkout',
      beforeEnter: (to, from, next) => {

        
        
        if(store.getters.getvalue == false){
          
          next('/cart');
        }else{
          
          next();

        }

            
         },
      component: () => import(/* webpackChunkName: "about" */ './views/Checkout.vue')
    },
    {
      path: '/message',
      name: 'message',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Message.vue')
    },
    {
      path: '/payment',
      name: 'payment',
        beforeEnter: (to, from, next) => {

        
        
      if(store.getters.getvalue == false){
          
          next('/cart');
        }else if(store.getters.getCheckAdress == false){
          
          next('/checkout');

        }else{
          next();
        }

            
           },
      
      component: () => import(/* webpackChunkName: "about" */ './views/Payment.vue')
    },
     {
      path: '/payresult',
      name: 'payresult',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/PaymentResult.vue')
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
