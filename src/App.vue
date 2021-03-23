<template>
  <div id="app">
    <Startquiz/>
  </div>
</template>

<script>
import Startquiz from './components/Startquiz.vue'

export default {
  name: 'App',
  components: {
    Startquiz
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
 
}
body{
  background-color: #262626;
   font-family: 'Roboto', sans-serif;
  
}
</style>
