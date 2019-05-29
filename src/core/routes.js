import Login from '../modules/Auth/Pages/Login.vue';
import Register from '../modules/Auth/Pages/Register.vue';
import Authenticate from './middleware/authenticate';

export default [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: function() {
    //         return import(/* webpackChunkName: "about" */ './views/About.vue');
    //     }
    // }
];
