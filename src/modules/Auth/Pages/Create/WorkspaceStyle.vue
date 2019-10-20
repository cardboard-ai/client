<template>
    <div class="flex flex-col">
        <div>
            <router-link to="/">
                <h1 class="text-gray-900 text-xl font-semibold">{{ $t('app') }}</h1>
            </router-link>
        </div>
        <div class="mt-16 sm:mt-32">
            <div class="text-center">
                <h1 class="text-gray-900 text-2xl sm:text-4xl font-hairline">
                    {{ $t('heading.workspace_style') }}
                </h1>
                <p class="leading-loose text-gray-700 mb-8">
                    {{ $t('leading.workspace_style') }}
                </p>
            </div>
            <div class="flex flex-col mb-6 py-8 px-12 m-2 justify-center shadow-md border rounded">
                <div class="w-3/5 mx-auto p-4 cursor-pointer border border-blue-200 rounded text-center">
                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#2e5bff" class="m-auto">
                        <circle opacity=".2" cx="24" cy="24" r="24"/>
                    </svg>
                    <p class="text-gray-900 mt-2 font-bold">{{ this.workspace.name }}</p>
                    <p class="text-gray-700 mt-2">{{ $t('label.upload_workspace_logo') }}</p>
                </div>
                <router-link :to="{ name:'connect-github' }">
                    <div class="p-3 bg-white text-gray-900 rounded border border-blue-700 font-bold text-center mt-8 hover:bg-blue-700 hover:border-blue-200 hover:text-white">
                        {{ $t('label.skip') }}
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'workspace-style',
    data() {
        return {
            workspace: [],
        };
    },
    methods: {
        getWorkspace() {
            axios.get('workspaces/' + this.$route.params.id)
                .then((response) => {
                    this.workspace = response.data.data;
                })
                .catch((error) => {
                    if (error.response.status === 404 || error.response.status === 403) {
                        this.$router.push({ name: 'create-workspace' });
                    }
                });
        },
    },
    mounted() {
        this.getWorkspace();
    }
};
</script>
