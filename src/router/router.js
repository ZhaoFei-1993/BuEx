import Main from '@/views/Main.vue'

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: () =>
    import ('@/views/login.vue')
}

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: () =>
    import ('@/views/error-page/404.vue')
}

export const page403 = {
  path: '/403',
  meta: {
    title: '403-权限不足'
  },
  name: 'error-403',
  component: () =>
    import ('@//views/error-page/403.vue')
}

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: () =>
    import ('@/views/error-page/500.vue')
}

export const preview = {
  path: '/preview',
  name: 'preview',
  component: () =>
    import ('@/views/form/article-publish/preview.vue')
}

export const locking = {
  path: '/locking',
  name: 'locking',
  component: () =>
    import ('@/views/main-components/lockscreen/components/locking-page.vue')
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Main,
  children: [
    // { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
    {
      path: 'ownspace',
      title: '个人中心',
      name: 'ownspace_index',
      component: () =>
        import ('@/views/own-space/own-space.vue')
    }
    // {
    //   path: 'order/:order_id',
    //   title: '订单详情',
    //   name: 'order-info',
    //   component: () =>
    //     import('@/views/advanced-router/component/order-info.vue')
    // } // 用于展示动态路由
    // { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
    // { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') }
  ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  // {
  //     path: '/mine',
  //     icon: 'key',
  //     name: 'mine',
  //     title: '我的资产',
  //     component: Main,
  //     children: [
  //         { path: 'index', title: '我的资产', name: 'super_index', component: () => import('@/views/mine/mine.vue') }
  //     ]
  // },
  {
    path: '/home',
    icon: 'home',
    name: 'home',
    component: Main,
    children: [{
      path: 'index',
      title: {
        i18n: 'home'
      },
      name: 'home_index',
      component: () =>
        import ('@/views/mine/mine.vue')
    }]
  },
  {
    path: '/market',
    icon: 'ios-pulse',
    name: 'market',
    title: '币币交易',
    component: Main,
    children: [{
        path: 'index',
        title: '市场行情',
        name: 'market_index',
        component: () =>
          import ('@/views/market/market.vue')
      },
      {
        path: 'trade',
        title: '下单交易',
        name: 'market_trade',
        component: () =>
          import ('@/views/market/trade.vue')
      },
      {
        path: 'history',
        title: '委托记录',
        name: 'market_positon',
        component: () =>
          import ('@/views/market/history.vue')
      }
    ]
  },
  {
    path: '/tradeM',
    icon: 'cash',
    name: '/tradeM',
    component: Main,
    children: [{
      path: 'index',
      title: '法币交易',
      name: 'tradeM_index',
      component: () =>
        import ('@/views/market/tradeM.vue')
    }]
  },
  {
    path: '/test',
    icon: 'cash',
    name: '/test',
    component: Main,
    children: [{
      path: 'index',
      title: 'test',
      name: 'test_index',
      component: () =>
        import ('@/views/test/test.vue')
    }]
  }
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  otherRouter,
  preview,
  locking,
  ...appRouter,
  page500,
  page403,
  page404
]