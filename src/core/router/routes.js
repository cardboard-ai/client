import Login from '@/modules/Auth/Pages/Login.vue';
import Register from '@/modules/Auth/Pages/Register.vue';
import CreateWorkspace from '@/modules/Auth/Pages/CreateWorkspace.vue';
import WorkspaceStyle from '@/modules/Auth/Pages/WorkspaceStyle.vue';
import ConnectGitHub from '@/modules/Auth/Pages/ConnectGitHub.vue';
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
        meta: {
            middleware: [Authenticate]
        }
    },
    {
        path: '/onboarding/workspace-style',
        name: 'workspace-style',
        component: WorkspaceStyle,
        meta: {
            middleware: [Authenticate]
        }
    },
    {
        path: '/onboarding/connect-github',
        name: 'connect-github',
        component: ConnectGitHub,
        meta: {
            middleware: [Authenticate]
        }
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
