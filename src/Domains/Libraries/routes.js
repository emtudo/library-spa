import Form from './Views/Form.vue'
import Index from './Views/Index.vue'

const routes = [
  {
    path: '/libraries', component: Index, name: 'libraries'
  },
  {
    path: '/libraries/create', component: Form, name: 'libraries.create'
  }
]

export default routes
