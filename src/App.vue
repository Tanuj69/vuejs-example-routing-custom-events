<template><div id="app">
<router-link class="nav-link" to="/adder">Adder</router-link>
  <router-link class="nav-link" to="/subtracter">Subtracter</router-link>
  <keep-alive>
  <router-view/>
  </keep-alive>
  </div>
</template>

<script>
  import adder from './components/Adder'
  import subtracter from './components/Subtracter'
  export default {
    name: 'App',
  }
</script>

