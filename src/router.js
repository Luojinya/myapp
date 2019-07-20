import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/detail/:id',
      name: 'detail',
      components: {
        default: () => import('./views/detail/index.vue')
      }
    },
    {
      path: '/collection',
      name: 'collection',
      components: {
        default: () => import('./views/collection/index.vue')
      }
    },
    {
      path: '/collectionshop',
      name: 'collectionshop',
      components: {
        default: () => import('./views/collectionshop/index.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('./views/login/index.vue')
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('./views/register/index.vue')
      }
    },
    {
      path: '/home', // 浏览器地址输入/home时
      name: 'home', // 路由的名字----命名路由
      components: {
        default: () => import('./views/home/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/kind', // 浏览器地址输入/home时
      name: 'kind', // 路由的名字----命名路由
      component: () => import('./views/kind/index.vue')
    },
    {
      path: '/cart', // 浏览器地址输入/home时
      name: 'cart', // 路由的名字----命名路由
      components: {
        default: () => import('./views/cart/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/user', // 浏览器地址输入/home时
      name: 'user', // 路由的名字----命名路由
      components: {
        default: () => import('./views/user/index.vue'),
        footer: Footer
      }
      // children: [
      //   {
      //     path: 'nologin',
      //     component: () => import('@/components/user/Nologin.vue')
      //   },
      //   {
      //     path: 'login',
      //     component: () => import('@/components/user/Login.vue')
      //   }
      // ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
