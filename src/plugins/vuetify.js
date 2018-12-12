import Vue from 'vue'
//import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import { Scroll } from 'vuetify/es5/directives';
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VCard,
  
  
  
  
} from 'vuetify/lib'

Vue.use(Vuetify, {
	components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VCard,


    
    
  },
  directives: {
    Scroll
  },
  iconfont: 'mdi',


})
