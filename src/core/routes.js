import Login from '../modules/Auth/Pages/Login.vue';
import Register from '../modules/Auth/Pages/Register.vue';
import Dashboard from '../modules/Dashboard/Pages/Dashboard.vue';
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
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            middleware: [Authenticate]
        }
    }
];
