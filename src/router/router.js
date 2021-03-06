import Vue from 'vue'
import Router from 'vue-router'
import DuckInfo from '@/components/DuckInfo'
import UserSubmission from '@/components/UserSubmission'
import AdminLogin from '@/components/AdminLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/DuckInfo',
      name: 'DuckInfo',
      component: DuckInfo
    },
    {
      path: '/',
      name: 'UserSubmission',
      component: UserSubmission
    },
  ]
})
