<template>
    <div class="flex flex-col">
        <div>
            <router-link to="/">
                <h1 class="text-gray-900 text-xl font-semibold">{{ $t('app') }}</h1>
            </router-link>
        </div>
        <div class="mt-16 sm:mt-32">
            <div class="text-center">
                <h1 class="text-gray-900 text-2xl sm:text-4xl font-hairline">{{ $t('heading.issue_logic') }}</h1>
                <p class="leading-loose text-gray-700 mb-6">
                    {{ $t('leading.issue_logic') }}
                </p>
            </div>
            <form v-on:submit.prevent="update">
                <div class="mb-6">
                    <label
                        class="uppercase text-gray-500 font-bold text-xs tracking-wider"
                        for="username"
                    >
                        {{ $t('input.when_there_is_a_merge') }}
                    </label>
                    <select class="text-gray-900 bg-blue-100 placeholder:text-gray-500 border border-blue-200 rounded w-full p-2 mt-2 focus:border-blue-700 focus:outline-none" name="merge" v-model="form.merge" v-validate="'required'">
                        <option value="" disabled selected>Select a option</option>
                        <option value="nothing">Do nothing</option>
                        <option value="something">Do something</option>
                    </select>
                </div>
                <div class="mb-6">
                    <label
                        class="uppercase text-gray-500 font-bold text-xs tracking-wider"
                        for="username"
                    >
                        {{ $t('input.when_there_is_a_push') }}
                    </label>
                    <select class="text-gray-900 bg-blue-100 placeholder:text-gray-500 border border-blue-200 rounded w-full p-2 mt-2 focus:border-blue-700 focus:outline-none" name="push" v-model="form.push" v-validate="'required'">
                        <option value="" disabled selected>Select a option</option>
                        <option value="nothing">Do nothing</option>
                        <option value="something">Do something</option>
                    </select>
                </div>
                <div class="mb-6">
                    <label
                        class="uppercase text-gray-500 font-bold text-xs tracking-wider"
                        for="username"
                    >
                        {{ $t('input.opend_merge_request') }}
                    </label>
                    <select class="text-gray-900 bg-blue-100 placeholder:text-gray-500 border border-blue-200 rounded w-full p-2 mt-2 focus:border-blue-700 focus:outline-none" name="request" v-model="form.request" v-validate="'required'">
                        <option value="" disabled selected>Select a option</option>
                        <option value="nothing">Do nothing</option>
                        <option value="something">Do something</option>
                    </select>
                </div>
                <div class="mb-4">
                    <BaseButton
                        :form="form"
                        @click.native="update"
                        :process="$t('button_in_process.start_automating')"
                        :button="$t('button.start_automating')"
                    />
                </div>
            </form>
            <p class="text-center mt-6 text-gray-500">
                {{ $t('label.need_some') }}
                <router-link class="text-blue-700 no-underline lowercase" :to="{ name:'invite-users' }">
                    {{ $t('label.help') }}
                </router-link>
                <span class="lowercase">{{ $t('label.with_the_setup') }}</span>
            </p>
        </div>
    </div>
</template>

<script>
import BaseButton from '@/core/components/BaseButton';

export default {
    name: 'connect-jira',
    components: {
        BaseButton
    },
    data() {
        return {
            form: new Form({
                merge: '',
                push: '',
                request: '',
            }, this),
        };
    },
    methods: {
        update() {
            // To-do
        }
    },
    mounted() {
        localStorage.setItem('onboarding-create-flow', 'issue-logic');

        this.form.merge = '';
        this.form.push = '';
        this.form.request = '';
    }
};
</script>
