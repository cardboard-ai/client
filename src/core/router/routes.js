import Login from '@/modules/Auth/Pages/Login.vue';
import Register from '@/modules/Auth/Pages/Register.vue';
import CreateWorkspace from '@/modules/Auth/Pages/CreateWorkspace.vue';
import Dashboard from '@/modules/Dashboard/Pages/Dashboard.vue';
import Authenticate from '@/core/middleware/authenticate';

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
        path: '/onboarding/create-workspace',
        name: 'create-workspace',
        component: CreateWorkspace,
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
