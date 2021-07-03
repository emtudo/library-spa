import { createWebHistory, createRouter } from "vue-router";
import Books from '../components/Books.vue'
import { routes as libraryRoutes } from '../Domains/Libraries/index'

const Home = { template: '<div>Home</div>' }

const routes = [
    { path: '/', component: Home, name: 'dashboard' },
    {
        path: '/books', component: Books, name: 'books'
    },
    {
        path: '/authors', component: Books, name: 'authors'
    },
    ...libraryRoutes
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })


export default router
