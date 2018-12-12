<template>
<v-app>
   
     <AppToolbar/>
      <AppJumbo />
      
      <v-container class="main-wrapper">
        <v-layout row>
            <v-flex xs12>
               <transition name="fade" type="transition">
                <router-view></router-view>
               </transition>
            </v-flex>
          </v-layout>
    </v-container>
    <AppFooter/>
  </v-app>
</template>

<script>
import Header from './components/TheHeader.vue'
import Footer from './components/Thefooter.vue'
import Jumbo from   './views/Jumbotrone.vue'

  export default {
    data () {
      return {
       
      }
    },
    
    components:{
      AppToolbar:Header,
      AppFooter:Footer,
      AppJumbo: Jumbo
      
    }
  }

</script>


<style>

a {
    text-decoration: none;
  }
.container{

  /*padding: 0px !important;*/
}


.main-wrapper{

  max-width:1000px !important; 
  width: 100% !important;
 
 
  margin-bottom: 40px;
  margin-top: 40px;
}

.bbot{
  border-bottom: 1px solid black;
}






.tdesc{

  font-weight:300; line-height:20px;
}

.col{
  background-color: #6495ed !important;

}
.ccol{

  background-color: #434355 !important;
}
.bluecol{
  background-color: #29C0E7;
}
.tcol{
  color:#dee1f2;
}

.bgolor{

background-color: #282337 !important;
  
  }
.bglight{
  background-color: #302943 !important;
}

.plus-btn{
  min-width: 40px !important;
  max-width: 40px !important;
  height: 40px !important;
  line-height: 40px !important;
  border:1px solid white !important;
  /*color: blue;*/
  
}

.plus-btn-small{
  min-width: 20px !important;
  max-width: 20px !important;
  height: 20px !important;
  line-height: 14px !important;
  border:1px solid white !important;
  padding:10px; 
  margin:0px;

  
  
}

.headcontainer{
    
    padding: 0px 0px !important;
  }

/* Animation Only Fade */
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .2s;
}

.fade-enter-active {
  transition-delay: .14s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}



.slide-fade-enter{
  opacity: 0;
  transform: translateY(20px);
}
.slide-fade-enter-active {
  /*transition: all .8s ease;*/
  transition: all 1s;
}
.slide-fade-leave{
}
.slide-fade-leave-active {
  transition: all 0s;
  opacity: 0;
  
}

table {
   
    border-collapse: collapse;
    width: 100%;

    

}

table.table thead th {
  font-weight:bold;
  font-size: 16px;


}

#kolla th, tr{
color: white;
font-size: 14px;
border-color: white;



}


tr, td{
  padding-left: 22px;
  background-color: #404254;
  color:white;
}

li {
  font-size: small;
  color:black;
  color:white;

}
#chinf p{
  font-weight: bold;
  font-size: 18px;
  padding-top: 20px;
}

.theme--light.v-table thead tr:first-child {
    border-bottom: 1px solid #404254;
}

@media screen and (max-width: 600px) {
  .container {
    padding: 0px !important;
  }
}



</style>

