import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import ProjectIndex from './views/ProjectIndex.vue'
import ProjectShow from './views/ProjectShow.vue'

import AppHome from './views/AppHome.vue'
import AppAbouts from './views/AppAbouts.vue'
import AppContacts from './views/AppContacts.vue'

import PageNotFound from './views/PageNotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            // Il path è quella da mettere nel browser, il nome devo ancora capirlo
            path: '/',
            name: 'index',
            component: AppHome,
            props: true,
            meta: { label: 'Home' },
        },
        {
            path: '/projects',
            name: 'projects-list',
            component: ProjectIndex,
            props: true,
            meta: { label: 'Projects' }
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: ProjectShow,
            props: true,
            meta: { label: 'Show' },
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbouts,
            props: true,
            meta: { label: 'About' }
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts,
            props: true,
            meta: { label: 'contacts' }
        },
        {
            // path: "/:catchAll(.*)",
            path: '/:pathMatch(.*)*',
            name: "NotFound",
            component: PageNotFound,
            meta: {
                requiresAuth: false
            }
        }
    ]
})

export { router };
createApp(App)
    .use(router)
    .mount('#app')
