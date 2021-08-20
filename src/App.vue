<template>
  <div id="app">
    <b-navbar variant="info" class="navbar" type="light">
      <b-navbar-brand><router-link class = "nav-link" to="/"><a>The Duck Repository Project</a></router-link>      
</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <router-link class = "nav-link" to="/DuckInfo">The Duck Database</router-link>      
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 100px;
}
.navbar {
  margin-bottom: 50px;
}
a{
  color: white;
}
</style>
