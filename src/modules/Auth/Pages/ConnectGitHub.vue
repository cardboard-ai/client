<template>
    <div class="flex flex-col">
        <div>
            <router-link to="/">
                <h1 class="text-gray-900 text-xl font-semibold">{{ $t('app') }}</h1>
            </router-link>
        </div>
        <div class="mt-32">
            <div class="text-center">
                <h1 class="text-gray-900 text-4xl font-hairline">
                    {{ $t('heading.connect_github') }}
                </h1>
                <p class="leading-loose text-gray-700 mb-8">
                    {{ $t('leading.connect_github') }}
                </p>
            </div>
            <div class="flex flex-col mb-6 py-8 px-12 m-2 justify-center shadow-md border rounded">
                <div @click="redirectToGitHub()" class="w-3/5 mx-auto p-4 cursor-pointer border border-blue-200 rounded text-center">
                    <svg class="mx-auto" width="33" height="33" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M16.2886 0C7.2936 0-.0004 7.293-.0004 16.291c0 7.196 4.667 13.301 11.141 15.456.815.149 1.112-.354 1.112-.786 0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184-.741-1.882-1.809-2.382-1.809-2.382-1.479-1.011.112-.991.112-.991 1.635.116 2.495 1.679 2.495 1.679 1.453 2.489 3.812 1.77 4.741 1.354.148-1.053.568-1.771 1.034-2.178-3.617-.411-7.42-1.809-7.42-8.051 0-1.778.635-3.232 1.677-4.371-.168-.412-.727-2.068.159-4.311 0 0 1.368-.438 4.48 1.67 1.299-.362 2.693-.542 4.078-.549 1.383.007 2.777.187 4.078.549 3.11-2.108 4.475-1.67 4.475-1.67.889 2.243.33 3.899.162 4.311 1.044 1.139 1.675 2.593 1.675 4.371 0 6.258-3.809 7.635-7.438 8.038.585.503 1.106 1.497 1.106 3.017 0 2.177-.02 3.934-.02 4.468 0 .436.293.943 1.12.784 6.467-2.159 11.131-8.26 11.131-15.454C32.5796 7.293 25.2856 0 16.2886 0" fill="#221e1b"/>
                    </svg>
                    <p class="text-gray-900 mt-2 font-bold">{{ $t('label.github') }}</p>
                    <p class="text-gray-700 mt-2">{{ $t('label.connect_with_oauth') }}</p>
                </div>
                <router-link :to="{ name:'connect-jira' }">
                    <div class="p-3 bg-white text-gray-900 rounded border border-blue-700 font-bold text-center mt-8 hover:bg-blue-700 hover:border-blue-200 hover:text-white">
                        {{ $t('label.skip') }}
                    </div>
                </router-link>
            </div>
            <p class="m-2 text-gray-500">
                {{ $t('caption.github_privacy_explanation') }}
                <span class="text-blue-700 lowercase cursor-pointer">{{ $t('label.privacy_terms') }}</span>
            </p>
        </div>
    </div>
</template>

<script>
import { last, toArray } from 'underscore';

export default {
    name: 'connect-github',
    data() {
        return {
            workspace: []
        };
    },
    methods: {
        /**
         * Get the last created workspace from the user.
         */
        getWorkspace() {
            axios.get('workspaces')
                .then((response) => {
                    this.workspace = last(toArray(response.data));
                });
        },
        /**
         * Redirect the user to the the GitHub oAuth page.
         */
        redirectToGitHub() {
            localStorage.setItem('onboarding-create-flow', 'connect-github-clicked');
            var url = process.env.VUE_APP_ROOT_API + 'workspace/' + this.workspace.id + '/github/login';

            window.open(url, '_self');
        }
    },
    mounted() {
        this.getWorkspace();
    }
};
</script>
