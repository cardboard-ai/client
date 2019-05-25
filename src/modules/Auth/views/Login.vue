<template>
    <auth>
        <div class="flex flex-col">
            <div>
                <h1 class="text-xl font-semibold">{{ $t('app') }}</h1>
            </div>
            <div class="mt-32">
                <h1 class="text-black text-4xl font-hairline">
                    {{ $t('heading.login') }}
                </h1>
                <p class="leading-loose text-gray-800 mb-8">
                    {{ $t('leading.login') }}
                </p>
                <div
                    v-if="form.successful"
                    class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert"
                >
                    <span class="block sm:inline">{{ $t('label.logged_in') }}</span>
                </div>
                <form v-on:submit.prevent="login">
                    <div class="mb-8">
                        <label
                            class="uppercase text-gray-600 font-bold text-xs tracking-wide"
                            for="email"
                        >
                            {{ $t('input.email') }}
                        </label>
                        <input
                            name="email"
                            v-model="form.email"
                            :class="{ 'border-red': form.errors.has('email') }"
                            class="bg-gray-100 placeholder:text-gray-500 appearance-none border border-blue-100 rounded w-full py-3 px-3 mt-2 focus:outline-none"
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
                            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded focus:outline-none"
                            type="button"
                            @click="login"
                            :disabled="form.working"
                        >
                            <span v-if="form.working" class="opacity-75">
                                {{ $t('button_in_process.login') }}
                            </span>

                            <span v-else>
                                {{ $t('button.login') }}
                            </span>
                        </button>
                    </div>
                </form>
                <p class="text-center mt-6 text-gray-600">
                    {{ $t("label.no_account") }}
                    <router-link
                        class="text-blue-500 no-underline"
                        to="register"
                    >
                        {{ $t('label.register') }}
                    </router-link>
                </p>
            </div>
        </div>
    </auth>
</template>

<script>
import Auth from '../Auth.vue';

export default {
    name: 'login',
    components: {
        Auth
    },
    data() {
        return {
            form: new Form({ email: '' }, this)
        };
    },
    methods: {
        login() {
            this.form.open('post', 'magic/email');
        }
    }
};
</script>
