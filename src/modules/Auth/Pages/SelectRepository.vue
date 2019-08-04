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
                    {{ $t('heading.select_repository') }}
                </h1>
                <p class="leading-loose text-gray-700 mb-4">
                    {{ $t('leading.select_repository') }}
                </p>
            </div>
            <div class="mb-6">
                <input class="text-gray-900 bg-blue-100 placeholder:text-gray-500 appearance-none border border-blue-200 rounded w-full p-2 mt-2 focus:outline-none" :placeholder="$t('label.search_repositories')" v-model="search">
            </div>
            <div v-for="repository in filteredRepositories.slice(0, 4)">
                <div class="flex mb-6 py-8 px-12 shadow-md border rounded">
                    <div>
                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#2e5bff" class="m-auto">
                            <circle opacity=".2" cx="24" cy="24" r="24"/>
                        </svg>
                    </div>
                    <div class="align-middle">{{ repository.full_name }}</div>
                </div>
            </div>
            <p class="text-center mt-6 text-gray-500">
                {{ $t("label.want_to") }}
                <router-link
                    class="text-blue-700 no-underline lowercase"
                    :to="{ name:'register' }"
                >
                    {{ $t('label.join_workspace') }}<span class="text-gray-500">{{ $t('label.question_mark') }}</span> 
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
import BaseInput from '@/core/components/BaseInput';
import BaseButton from '@/core/components/BaseButton';
import { last, toArray } from 'underscore';

export default {
    name: 'select-repository',
    components: {
        BaseInput,
        BaseButton
    },
    data() {
        return {
            workspace: [],
            allRepositories: [],
            search: '',
            searchResults: []
        };
    },
    computed: {
        filteredRepositories() {
            return this.allRepositories.filter(repository => {
                return repository.full_name.toLowerCase().includes(this.search.toLowerCase())
            });
        }
    },
    methods: {
        getWorkspace() {
            axios.get(process.env.VUE_APP_ROOT_API + 'workspaces')
                .then((response) => {
                    this.workspace = last(toArray(response.data));

                    this.getAllRepositories(this.workspace.id);
                });
        },
        getAllRepositories(workspaceId) {
            axios.get(process.env.VUE_APP_ROOT_API + 'workspace/' + workspaceId + '/github/repositories')
                .then((response) => {
                    this.allRepositories = toArray(response.data);
                });
        }
    },
    mounted() {
        this.getWorkspace();
    }
};
</script>
