import Form from './Views/LibraryForm.vue'
import Index from './Views/LibraryIndex.vue'

export const routes = [
  {
    path: '/libraries', component: Index, name: 'libraries.index'
  },
  {
    path: '/libraries/create', component: Form, name: 'libraries.create'
  }
]
