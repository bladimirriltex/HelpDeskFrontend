import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'deskweb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PortalWeb" */ '../Layouts/DeskWeb.vue'),
    children:[
      {
        path:"soluciones",
        name:"soluciones",
        component: ()=> import(/* webpackChunkName: "Soluciones" */ '../views/SolucionesDesk.vue')
      },
      {
        path:"articulo-incidente",
        name:"articuloincidente",
        component: ()=> import(/* webpackChunkName: "Incidentes" */ '../views/ArticuloIncidentes.vue')
      }
    ]
  },
  {
    path:"/dashboard",
    name:"dashboard",
    component: ()=> import(/* webpackChunkName: "Incidentes" */ '../Layouts/DashboardHelpDesk.vue'),
  },
  {
    path:"/login",
    name:"login",
    component: ()=> import(/* webpackChunkName: "Incidentes" */ '../views/Login.vue'),
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
