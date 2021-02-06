import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/login.vue'
import Principal from '../components/Principal.vue'
import MenuLateral from '../components/MenuLateral.vue'
import MenuSuperior from '../components/MenuSuperior.vue'
import NovoUsuario from '../components/NovoUsuario.vue'
import NovoPost from '../components/NovoPost.vue'
import NovosItens from '../components/NovosItens.vue'
import ListarItens from '../components/ListarItens.vue'
import ListarPost from '../components/ListarPost.vue'


const routes = [
  { path: '/login', name: 'login', component: login },
  { path: '/', name: 'Principal', component: Principal },
  { path: '/MenuLateral', name: 'login', component: MenuLateral },
  { path: '/MenuSuperior', name: 'login', component: MenuSuperior },
  { path: '/NovoUsuario', name: 'login', component: NovoUsuario },
  { path: '/NovoPost', name: 'login', component: NovoPost },
  { path: '/NovosItens', name: 'login', component: NovosItens },
  { path: '/ListarItens', name: 'login', component: ListarItens },
  { path: '/ListarPost', name: 'login', component: ListarPost },
 ]

  const router = createRouter({
  history:
    createWebHistory(process.env.BASE_URL),
  routes
})

export default router 