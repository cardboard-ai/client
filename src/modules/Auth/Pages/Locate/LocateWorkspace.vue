<template>
    <div class="flex flex-col">
        <div>
            <router-link to="/">
                <h1 class="text-gray-900 text-xl font-semibold">{{ $t('app') }}</h1>
            </router-link>
        </div>
        <div class="mt-32">
            <div class="text-center">
                <h1 class="text-gray-900 text-2xl sm:text-4xl font-hairline">
                    {{ $t('heading.locate_workspace') }}
                </h1>
                <p class="leading-loose text-gray-700 mb-4">
                    {{ $t('leading.locate_workspace') }}
                </p>
            </div>
            <div class="mb-6">
                <input class="text-gray-900 bg-blue-100 placeholder:text-gray-500 appearance-none border border-blue-200 rounded w-full p-2 mt-2 focus:outline-none" :placeholder="$t('label.search_workspaces')" v-model="search">
            </div>
            <div v-for="invitation in filteredInvitations.slice(0, resultAmount)">
                <div v-on:click="acceptInvitation(invitation.id)" class="flex items-center mb-5 py-4 px-12 shadow-md border rounded cursor-pointer hover:bg-gray-200">
                    <div>
                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#2e5bff" class="m-auto">
                            <circle opacity=".2" cx="24" cy="24" r="24"/>
                            <text x="11" y="30" class="text-xl uppercase">
                                {{ getFirstCharFromTitle(invitation.workspace.name) }}
                            </text>
                        </svg>
                    </div>
                    <div class="align-bottom ml-6">{{ invitation.workspace.name }}</div>
                </div>
            </div>
            <div class="text-gray-700" v-if="filteredInvitations.length == 0">{{ $t('label.no_result') }}</div>
            <div class="text-center text-gray-500" v-if="filteredInvitations.length - resultAmount > 0">
                <div class="border inline-block align-middle w-1/3"></div>
                <div
                    v-on:click="addResultAmount"
                    v-if="filteredInvitations.length - resultAmount > 0"
                    class="cursor-pointer inline-block w-1/3 uppercase text-sm"
                >
                    Load {{ filteredInvitations.length - resultAmount }} more
                </div>
                <div class="border inline-block align-middle w-1/3"></div>
            </div>
            <p class="text-center mt-6 text-gray-500">
                {{ $t("label.want_to") }}
                <router-link
                    class="text-blue-700 no-underline lowercase"
                    :to="{ name:'create-workspace' }"
                >
                    {{ $t('heading.create_workspace') }}<span class="text-gray-500">{{ $t('label.question_mark') }}</span> 
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
    name: 'locate-workspace',
    components: {
        BaseInput,
        BaseButton
    },
    data() {
        return {
            invitations: [],
            search: '',
            searchResults: [],
            resultAmount: 4,
        };
    },
    computed: {
        filteredInvitations() {
            return this.invitations.filter(invitation => {
                return invitation.workspace.name.toLowerCase().includes(this.search.toLowerCase())
            });
        }
    },
    methods: {
        /**
         * Get all the invitations.
         */
        getInvitations() {
            axios.get('invitations')
                .then((response) => {
                    console.log(response);
                    this.invitations = toArray(response.data);
                });
        },
        /**
         * Get the first character from the project name for the dynamic SVG.
         */
        getFirstCharFromTitle(workspaceName) {
            var nameIntAfterSlash = workspaceName.lastIndexOf('/') + 1;

            return workspaceName.substring(nameIntAfterSlash, nameIntAfterSlash + 2);
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
         * Accept the invitation by deleting the invite and joining the workspace.
         */
        acceptInvitation(invitationId) {
            axios.get('invitations/' + invitationId)
                .then(response => {
                    this.$router.push({ name: 'dashboard' });
                }).catch(error => {
                    // Do nothing
                });
        }
    },
    mounted() {
        this.getInvitations();
    }
};
</script>
