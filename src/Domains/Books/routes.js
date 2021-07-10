import Form from './Views/BookForm.vue'
import Index from './Views/BookIndex.vue'

export const routes = [
  {
    path: '/books', component: Index, name: 'books.index'
  },
  {
    path: '/books/create', component: Form, name: 'books.create'
  }
]
