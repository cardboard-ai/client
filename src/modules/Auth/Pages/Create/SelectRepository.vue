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
                    {{ $t('heading.select_repository') }}
                </h1>
                <p class="leading-loose text-gray-700 mb-4">
                    {{ $t('leading.select_repository') }}
                </p>
            </div>
            <div class="mb-6">
                <input class="text-gray-900 bg-blue-100 placeholder:text-gray-500 appearance-none border border-blue-200 rounded w-full p-2 mt-2 focus:outline-none" :placeholder="$t('label.search_repositories')" v-model="search">
            </div>
            <div v-for="repository in filteredRepositories.slice(0, resultAmount)">
                <div v-on:click="storeRepository(repository.id)"class="flex items-center mb-5 py-4 px-12 shadow-md border rounded cursor-pointer hover:bg-gray-200">
                    <div>
                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#2e5bff" class="m-auto">
                            <circle opacity=".2" cx="24" cy="24" r="24"/>
                            <text x="11" y="30" class="text-xl uppercase">
                                {{ getFirstCharFromTitle(repository.full_name) }}
                            </text>
                        </svg>
                    </div>
                    <div class="align-bottom ml-6">{{ repository.full_name }}</div>
                </div>
            </div>
            <div class="text-gray-700" v-if="filteredRepositories.length == 0">{{ $t('label.no_result') }}</div>
            <div class="text-center text-gray-500" v-if="filteredRepositories.length - resultAmount > 0">
                <div class="border inline-block align-middle w-1/3"></div>
                <div
                    v-on:click="addResultAmount"
                    v-if="filteredRepositories.length - resultAmount > 0"
                    class="cursor-pointer inline-block w-1/3 uppercase text-sm"
                >
                    Load {{ filteredRepositories.length - resultAmount }} more
                </div>
                <div class="border inline-block align-middle w-1/3"></div>
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
            form: new Form({ repository: '' }, this),
            allRepositories: [],
            search: '',
            searchResults: [],
            resultAmount: 4,
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
        /**
         * Get all the repositories based on the workspace ID.
         */
        getRepositories() {
            axios.get('workspace/' + this.$route.params.id + '/github/repositories')
                .then((response) => {
                    this.allRepositories = toArray(response.data);
                });
        },
        /**
         * Get the first character from the repository name for the dynamic SVG.
         */
        getFirstCharFromTitle(repositoryName) {
            var nameIntAfterSlash = repositoryName.lastIndexOf('/') + 1;

            return repositoryName.substring(nameIntAfterSlash, nameIntAfterSlash + 2);
        },
        /**
         * Add the amount of repositories that should be shown.
         */
        addResultAmount() {
            if (this.resultAmount < this.filteredRepositories.length) {
                this.resultAmount = this.resultAmount + 4;
            }
        },
        /**
         * Store the repository based on the repository ID.
         */
        storeRepository(repositoryId) {
            this.form.repository = repositoryId;

            this.form.post('workspace/' + this.$route.params.id + '/github/repositories')
                .then(response => {
                    this.$router.push({
                        name: 'connect-jira',
                        params: {
                            id: response.data.id
                        }
                    });
                }).catch(error => {
                    // Do nothing
                });
        }
    },
    mounted() {
        this.getRepositories();
    }
};
</script>
