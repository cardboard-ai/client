<template>
    <auth>
        <div class="flex flex-col">
            <div>
                <h1 class="text-xl font-semibold">Cardboard</h1>
            </div>
            <div class="mt-32">
                <h1 class="text-4xl font-hairline">Sign in to Cardboard</h1>
                <p class="leading-loose text-gray-600 mb-8">Please enter your credentials to proceed.</p>

                <div v-if="form.successful" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <span class="block sm:inline">We have e-mailed you a magic link! By clicking on this link you are logged in immediately.</span>
                </div>
                <form v-on:submit.prevent="login">
                    <div class="mb-8">
                        <label class="uppercase text-gray-600 font-bold text-xs tracking-wide" for="email">Email address</label>
                        <input
                            name="email"
                            v-model="form.email"
                            :class="{'border-red': form.errors.has('email')}"
                            class="bg-gray-100 placeholder:text-gray-500 appearance-none border border-blue-100 rounded w-full py-3 px-3 mt-2 focus:outline-none"
                            id="email"
                            v-validate="'required|email'"
                            type="text"
                            placeholder="Your email address"
                            @keydown="form.resetErrors()"
                        >
                        <div class="text-red fade-enter-active mt-1 text-xs" v-show="form.errors.has('email')">
                            {{ form.errors.get('email') }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded focus:outline-none" type="button" @click="login" :disabled="form.working">
                            <span v-if="form.working" class="opacity-75">
                                Signing in
                            </span>

                            <span v-else>
                                Sign in
                            </span>
                        </button>
                    </div>
                </form>
                <p class="text-center mt-6 text-gray-600">
                    Don't have an account yet?
                    <router-link class="text-blue-500 no-underline" to="register">Sign up</router-link>
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
            this.form.open('post', 'http://127.0.0.1:8000/api/magic/email');
        }
    }
};
</script>
