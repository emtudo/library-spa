import { createWebHistory, createRouter } from "vue-router";
import { routes as authorRoutes } from '../Domains/Authors/index'
import { routes as bookRoutes } from '../Domains/Books/index'
import { routes as libraryRoutes } from '../Domains/Libraries/index'

const Home = { template: '<div>Home</div>' }

const routes = [
    { path: '/', component: Home, name: 'dashboard' },
    ...authorRoutes,
    ...bookRoutes,
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
