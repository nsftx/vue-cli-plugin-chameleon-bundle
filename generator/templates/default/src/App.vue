<template>
  <div id="app">
    <img src="./assets/logo.png">
    <z-sample message="Hello Chameleon" />
  </div>
</template>

<script>
  import Vue from 'vue';
  import Vuetify from 'vuetify';

  const material = '__CHAMELEON_MATERIAL__';

  Vue.use(Vuetify);
  Vue.use(window[material]);

  export default {
    name: 'app',
  };
</script>

<style>
  #app {
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 4em;
  }

  #app > img {
    margin-bottom: 3em;
  }

  #app > div {
    font-size: 3em;
  }
</style>
