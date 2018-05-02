import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const routes = [
  {
   path: '*',
   component: resolve => require(['@/page/home.vue'], resolve),
  },
  {
    path: '/',
    component: resolve => require(['@/page/home.vue'], resolve),
  },
  {
    path: '/home',
    component: resolve => require(['@/page/home.vue'], resolve),
    children: [
      {
        path: '/mang',
        component: resolve => require(['@/page/mang.vue'], resolve),
        meta: {
          requireAuth: true
        },
      },
      {
        path: '/nang',
        component: resolve => require(['@/page/nang.vue'], resolve),
      }
    ]
  },
]

const router = new Router({
  routes
});

/*var localStorage = window.localStorage

router.beforeEach((to, from, next) => {
  var storage = JSON.parse(localStorage.getItem('USER_INFO'))
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
      if (storage) {  // 通过storage判断是否登录
        next();
      }
      else {
        next({
          path: '/login',
            query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    }
    else {
      next();
    }
  })*/

export default router;