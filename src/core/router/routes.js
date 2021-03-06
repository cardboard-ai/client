import i18n from '@/core/locales';
import Login from '@/modules/Auth/Pages/Login.vue';
import Register from '@/modules/Auth/Pages/Register.vue';
import Auth from '@/core/layouts/Auth';

import CreateWorkspace from '@/modules/Auth/Pages/Create/CreateWorkspace.vue';
import WorkspaceStyle from '@/modules/Auth/Pages/Create/WorkspaceStyle.vue';
import ConnectGitHub from '@/modules/Auth/Pages/Create/ConnectGitHub.vue';
import ConnectJira from '@/modules/Auth/Pages/Create/ConnectJira.vue';
import SelectRepository from '@/modules/Auth/Pages/Create/SelectRepository.vue';
import SelectProject from '@/modules/Auth/Pages/Create/SelectProject.vue';
import IssueLogic from '@/modules/Auth/Pages/Create/IssueLogic.vue';

import LocateWorkspace from '@/modules/Auth/Pages/Locate/LocateWorkspace.vue';

import Dashboard from '@/modules/Dashboard/Pages/Dashboard.vue';
import Authenticate from '@/core/middleware/authenticate';
import RedirectToOnboarding from '@/core/middleware/redirect-to-onboarding';

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
                    title: i18n.t('title.create_workspace'),
                    middleware: [Authenticate]
                }
            },
            {
                path: ':id/workspace-style',
                name: 'workspace-style',
                component: WorkspaceStyle,
                meta: {
                    title: i18n.t('title.workspace_style'),
                    middleware: [Authenticate]
                }
            },
            {
                path: ':id/connect-github',
                name: 'connect-github',
                component: ConnectGitHub,
                meta: {
                    title: i18n.t('title.connect_github'),
                    middleware: [Authenticate]
                }
            },
            {
                path: ':id/connect-jira',
                name: 'connect-jira',
                component: ConnectJira,
                meta: {
                    title: i18n.t('title.connect_jira'),
                    middleware: [Authenticate]
                }
            },
            {
                path: ':id/select-repository',
                name: 'select-repository',
                component: SelectRepository,
                meta: {
                    title: i18n.t('title.select_repository'),
                    middleware: [Authenticate]
                }
            },
            {
                path: ':id/select-project',
                name: 'select-project',
                component: SelectProject,
                meta: {
                    title: i18n.t('title.select_project'),
                    middleware: [Authenticate]
                }
            },
            {
                path: ':id/issue-logic',
                name: 'issue-logic',
                component: IssueLogic,
                meta: {
                    title: i18n.t('title.issue_logic'),
                    middleware: [Authenticate]
                }
            },
            {
                path: 'locate-workspace',
                name: 'locate-workspace',
                component: LocateWorkspace,
                meta: {
                    title: i18n.t('title.locate_workspace'),
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
            title: i18n.t('title.dashboard'),
            middleware: [Authenticate, RedirectToOnboarding]
        }
    }
];
