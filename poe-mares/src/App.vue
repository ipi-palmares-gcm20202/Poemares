<template>
  <div>
    <router-view />

    <div>
      <div class="page-content">
        <menu-superior />

        <div class="page-conteudo-interno">
          <menu-lateral />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuSuperior from "./MenuSuperior.vue";
import MenuLateral from "./MenuLateral.vue";
export default {
  name: "App",
  components: {
  MenuSuperior,
  MenuLateral,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
