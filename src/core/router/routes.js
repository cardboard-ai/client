import Login from '@/modules/Auth/Pages/Login.vue';
import Register from '@/modules/Auth/Pages/Register.vue';
import Auth from '@/core/layouts/Auth';
import CreateWorkspace from '@/modules/Auth/Pages/CreateWorkspace.vue';
import WorkspaceStyle from '@/modules/Auth/Pages/WorkspaceStyle.vue';
import ConnectGitHub from '@/modules/Auth/Pages/ConnectGitHub.vue';
import ConnectJira from '@/modules/Auth/Pages/ConnectJira.vue';
import AddRepository from '@/modules/Auth/Pages/AddRepository.vue';
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
        path: '/onboarding',
        component: Auth,
        children: [
            {
                path: 'create-workspace',
                name: 'create-workspace',
                component: CreateWorkspace,
                meta: {
                    middleware: [Authenticate]
                }
            },
            {
                path: 'workspace-style',
                name: 'workspace-style',
                component: WorkspaceStyle,
                meta: {
                    middleware: [Authenticate]
                }
            },
            {
                path: 'connect-github',
                name: 'connect-github',
                component: ConnectGitHub,
                meta: {
                    middleware: [Authenticate]
                }
            },
            {
                path: 'connect-jira',
                name: 'connect-jira',
                component: ConnectJira,
                meta: {
                    middleware: [Authenticate]
                }
            },
            {
                path: 'add-repository',
                name: 'add-repository',
                component: AddRepository,
                meta: {
                    middleware: [Authenticate]
                }
            },
        ]
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
