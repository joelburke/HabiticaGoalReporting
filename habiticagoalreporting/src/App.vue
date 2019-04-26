<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <ul>
        <li><router-link to="/HelloWorld">Go Hello World</router-link></li>
        <li><router-link to="/ApiTest">Go to Api Test</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HabiticaApiTest from './components/HabiticaApiTest.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    HabiticaApiTest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
