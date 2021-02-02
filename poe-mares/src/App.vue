<template>
	<div>
		<div class="page-content">
			<menu-superior />
			
			<div class="page-conteudo-interno">
				<menu-lateral />
				<novos-itens/>
			</div>
		</div>
	</div>
</template>

<script>
import MenuSuperior from'./components/MenuSuperior.vue'
import MenuLateral from './components/MenuLateral.vue'
import NovosItens from './components/NovosItens.vue'



export default {
  name: 'App',
  components: {
    MenuSuperior,
    MenuLateral,
    NovosItens,   
  }
}
 </script>

 <style scoped>
 .page-content{
	 display:grid;
 }
 .page-conteudo-interno{
	 display:flex;
 }
 </style>

