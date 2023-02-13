import { createRouter, createMemoryHistory  } from 'vue-router'
import HomePage from '@/views/HomePage/HomePage'


const routes = [
  {
    path: '/',
    name: 'homePage',
    components: {
			default: HomePage,
		},
  },
]

const router = createRouter({
  mode: 'history',
  history: createMemoryHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})



export default router
