import Form from './Views/AuthorForm.vue'
import Index from './Views/AuthorIndex.vue'

export const routes = [
  {
    path: '/authors', component: Index, name: 'authors.index'
  },
  {
    path: '/authors/create', component: Form, name: 'authors.create'
  }
]
