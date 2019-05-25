<template>
    <auth>
        <div class="flex flex-col">
            <div>
                <router-link to="/">
                    <h1 class="text-xl font-semibold">{{ $t('app') }}</h1>
                </router-link>
            </div>
            <div class="mt-32">
                <h1 class="text-gray-900 text-4xl font-hairline">{{ $t('heading.register') }}</h1>
                <p class="leading-loose text-gray-700 mb-8">
                    {{ $t('leading.register') }}
                </p>
                <form v-on:submit.prevent="register">
                    <div class="mb-8">
                        <label
                            class="uppercase text-gray-500 font-bold text-xs tracking-wide"
                            for="name"
                        >
                            {{ $t('input.full_name') }}
                        </label>
                        <input
                            name="name"
                            v-model="form.name"
                            :class="{ 'border-red': form.errors.has('name') }"
                            class="bg-blue-100 placeholder:text-gray-900 appearance-none border border-blue-200 rounded w-full py-3 px-3 mt-2 focus:outline-none"
                            id="name"
                            v-validate="'required'"
                            type="text"
                            :placeholder="$t('input.full_name')"
                            @keydown="form.resetErrors()"
                        />
                        <div
                            class="text-red fade-enter-active mt-1 text-xs"
                            v-show="form.errors.has('name')"
                        >
                            {{ form.errors.get('name') }}
                        </div>
                    </div>
                    <div class="mb-8">
                        <label
                            class="uppercase text-gray-500 font-bold text-xs tracking-wide"
                            for="email"
                            >
                            {{ $t('input.email') }}
                        </label>
                        <input
                            name="email"
                            v-model="form.email"
                            :class="{ 'border-red': form.errors.has('email') }"
                            class="bg-blue-100 placeholder:text-gray-900 appearance-none border border-blue-200 rounded w-full py-3 px-3 mt-2 focus:outline-nones"
                            id="email"
                            v-validate="'required|email'"
                            type="text"
                            :placeholder="$t('input.email')"
                            @keydown="form.resetErrors()"
                        />
                        <div
                            class="text-red fade-enter-active mt-1 text-xs"
                            v-show="form.errors.has('email')"
                        >
                            {{ form.errors.get('email') }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <button
                            class="w-full bg-blue-700 hover:bg-blue-500 text-white font-bold py-4 px-4 rounded focus:outline-none"
                            type="button"
                            @click="register"
                            :disabled="form.running"
                        >
                            <span v-if="form.running" class="opacity-75">
                                {{ $t('button_in_process.register') }}
                            </span>

                            <span v-else>
                                {{ $t('button.register') }}
                            </span>
                        </button>
                    </div>
                </form>
                <p class="text-center mt-6 text-gray-500">
                    {{ $t('label.already_account') }}
                    <router-link class="text-blue-700 no-underline" to="/">
                        {{ $t('button.login') }}
                    </router-link>
                </p>
            </div>
        </div>
    </auth>
</template>

<script>
import Auth from '../Auth.vue';

export default {
    name: 'register',
    components: {
        Auth
    },
    data() {
        return {
            form: new Form(
                {
                    name: '',
                    email: ''
                },
                this
            )
        };
    },
    methods: {
        register() {
            this.form.open('post', 'register');
        }
    }
};
</script>
