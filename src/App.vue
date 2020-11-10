<template>
  <div id="app">
    <div id="nav">
     <Reservation2></Reservation2>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Reservation2 from './components/Reservation2.vue';
import {Component,Vue} from 'vue-property-decorator';


@Component({
  components:{
    Reservation2
  }

})
  export default class App extends Vue {
    
  }


</script>


<style>


</style>
