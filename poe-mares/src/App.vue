<template>
  <div>
    <div class="page-content">
      <menu-superior />

      <div class="page-conteudo-interno">
        <menu-lateral />
       <principal/>
      </div>
    </div>
  </div>
</template>

<script>
import MenuSuperior from "./components/MenuSuperior.vue";
import MenuLateral from "./components/MenuLateral.vue";
import Principal from './components/Principal.vue';





export default {
  name: "App",
  components: {
    MenuSuperior,
    MenuLateral,
    Principal,
  
  },
};
</script>

 <style scoped>
.page-content {
  display: grid;
}
.page-conteudo-interno {
  display: flex;
}
</style>
