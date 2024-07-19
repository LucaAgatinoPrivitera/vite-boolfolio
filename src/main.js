import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import ProjectIndex from './views/ProjectIndex.vue'
import ProjectShow from './views/ProjectShow.vue'
import AppHome from './views/AppHome.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            // Il path è quella da mettere nel browser, il nome devo ancora capirlo
            path: '/',
            name: 'index',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects-list',
            component: ProjectIndex
        }
    ]
})

export { router };
createApp(App).use(router).mount('#app')
