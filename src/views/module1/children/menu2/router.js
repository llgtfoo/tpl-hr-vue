export default () => ({
  path: '/module1/menu2',
  component: () => import('./views/index.vue'),
  meta: {
    title: '实有房屋',
  },
})