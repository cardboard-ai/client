<template>
    <div class="flex flex-col">
        <div>
            <router-link to="/">
                <h1 class="text-gray-900 text-xl font-semibold">{{ $t('app') }}</h1>
            </router-link>
        </div>
        <div class="mt-8">
            <div class="text-center">
                <h1 class="text-gray-900 text-4xl font-hairline">{{ $t('heading.connect_jira') }}</h1>
                <p class="leading-loose text-gray-700 mb-6">
                    {{ $t('leading.connect_jira') }}
                </p>
            </div>
            <form v-on:submit.prevent="connect">
                <div class="mb-6">
                    <label
                        class="uppercase text-gray-500 font-bold text-xs tracking-wider"
                        for="username"
                    >
                        {{ $t('input.username') }}
                    </label>
                    <BaseInput
                        id="username"
                        name="username"
                        :form="form"
                        v-model="form.username"
                        v-validate="'required'"
                        :placeholder="$t('input.username')"
                    />
                </div>
                <div class="mb-6">
                    <label class="uppercase text-gray-500 font-bold text-xs tracking-wider" for="password">
                        {{ $t('input.api_token') }}
                    </label>
                    <BaseInput
                        id="password"
                        name="password"
                        :form="form"
                        v-model="form.password"
                        v-validate="'required'"
                        :placeholder="$t('input.api_token')"
                    />
                </div>
                <div class="mb-6">
                    <label class="uppercase text-gray-500 font-bold text-xs tracking-wider" for="base_uri">
                        {{ $t('input.jira_url') }}
                    </label>
                    <BaseInput
                        id="base_uri"
                        name="base_uri"
                        :form="form"
                        v-model="form.base_uri"
                        v-validate="'required|url'"
                        :placeholder="$t('input.jira_url')"
                    />
                </div>
                <div class="mb-4">
                    <BaseButton
                        :form="form"
                        @click.native="connect"
                        :process="$t('button_in_process.connect')"
                        :button="$t('button.connect')"
                    />
                </div>
            </form>
            <p class="text-center mt-6 text-gray-500">
                {{ $t('label.connect_jira_later') }}
                <router-link class="text-blue-700 no-underline" :to="{ name: 'select-repository' }">
                    {{ $t('label.skip') }}
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
    name: 'connect-jira',
    components: {
        BaseInput,
        BaseButton
    },
    data() {
        return {
            workspace: [],
            form: new Form(
                {
                    username: '',
                    password: '',
                    base_uri: '',
                },
                this
            )
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

                    this.skipSetup();
                })
                .catch(function (error) {
                    // Do nothing
                })
        },
        /**
         * Skip this setup when the user has a Jira social account.
         */
        skipSetup() {
            axios.get('workspace/' + this.workspace.id + '/jira/projects')
                .then((response) => {
                    this.$router.push({ name: 'select-repository' })
                });
        },
        /**
         * Create the Jira social account link.
         */
        connect: function() {
            localStorage.setItem('onboarding-create-flow', 'connect-jira');

            this.form.open(
                'post',
                'workspace/' + this.workspace.id + '/jira/login',
                {'routeName':'dashboard'}
            );
        }
    },
    mounted() {
        localStorage.setItem('onboarding-create-flow', 'connect-jira');

        this.getWorkspace();
    }
};
</script>
