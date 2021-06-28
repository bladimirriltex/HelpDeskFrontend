import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [

  {
    path: '',
    name: 'deskweb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PortalWeb" */ '../views/Bienvenidos.vue'),
  },
  {
    path: '/',
    name: 'deskweb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PortalWeb" */ '../Layouts/DeskWeb.vue'),
    children:[
      {
        path:"/soluciones",
        name:"soluciones",
        component: ()=> import(/* webpackChunkName: "Soluciones" */ '../views/SolucionesDesk.vue')
      },
      {
        path:"/articulosol",
        name:"articulosolucion",
        component: ()=> import(/* webpackChunkName: "ArticuloSolucion"*/'../views/SolucionArticulo.vue')
      },
      {
        path:"/articulo",
        name:"articulo",
        component: ()=> import(/* webpackChunkName: "Incidentes" */ '../views/ArticuloIncidentes.vue'),
        children:[
          {
            path:"/articulosol",
            name:"articulosolucion",
            component: ()=> import(/* webpackChunkName: "ArticuloSolucion"*/'../views/SolucionArticulo.vue')
          }
        ]
      },
      
    ]
  },

  {
    path:"/dashboard",
    name:"dashboard",
    component: ()=> import(/* webpackChunkName: "Incidentes" */ '../Layouts/DashboardHelpDesk.vue'),
    children:[
      {
        path:"",
        name:"tablero",
        component: ()=> import(/* webpackChunkName: "Usuarios"*/'../views/Tablero.vue')
      },
      {
        path:"/usuarios",
        name:"usuarios",
        component: ()=> import(/* webpackChunkName: "Usuarios"*/'../views/Usuarios.vue')
      },
      {
        path:"/incidentes/",
        name:"incidentes",
        component: ()=> import(/* webpackChunkName: "Incidentes"*/'../components/TablaIncidentes.vue'),
        
      },
      {
        path:"/incidentes/:incidente",
        name:"incidente",
        props:true,
        component: ()=> import(/* webpackChunkName: "VerIncidente"*/'../views/Incidente.vue')

      }
     
    ]
  },

  {
    path:"/dashboardusuario",
    name:"dashboard",
    component: ()=> import(/* webpackChunkName: "Incidentes" */ '../Layouts/DashboardUser.vue'),
    children:[
      {
        path:"",
        name:"tablaincidentesusuario",
        component: ()=> import(/* webpackChunkName: "Usuarios"*/'../components/TablaincidentesUsuario.vue')
      },
      {
        path:":incidente",
        name:"incidenteuser",
        props:true,
        component: ()=> import(/* webpackChunkName: "VerIncidente"*/'../views/Incidente.vue')

      }     
    ]
  },
  {
    path:"/login",
    name:"login",
    component: ()=> import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
  },

  {
    path:"/prueba",
    name:"prueba",
    component: ()=> import(/* webpackChunkName: "Login" */ '../Layouts/DashboardUser.vue'),
  },
  {
    path:"/404",
    alias:"*",
    name: "notFound",
    component: ()=> import("../views/404Page.vue")
  }
  
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
