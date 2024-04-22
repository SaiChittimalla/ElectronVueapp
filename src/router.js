import { createRouter, createWebHistory } from "vue-router";
import HomePage from './components/HomePage.vue';
import HomeView from './components/HomeView.vue';
import ProfilePage from './components/ProfilePage.vue';
import ContactPage from './components/ContactPage.vue';
import ImagePage from './components/ImagePage.vue';

const routes = [

    {
        path: '/',
        component: HomePage
    },
    {
        path: '/homeview',
        component: HomeView
    },
    {
        path: '/ProfilePage',
        component: ProfilePage
    },
    {
        path: '/ContactPage',
        component: ContactPage
    },
    {
        path: '/ImagePage',
        component: ImagePage
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;