<template>
    <auth>
        <div class="flex flex-col">
            <div>
                <h2>Cardboard</h2>
            </div>
            <div class="mt-32">
                <h1 class="font-hairline">Sign in to dashboard</h1>
                <p class="leading-loose text-grey-dark mb-8">Please enter your credentials to proceed.</p>

                <form v-on:submit.prevent="login">
                    <div class="mb-8">
                        <label class="uppercase text-grey font-bold text-xs tracking-wide" for="email">Email address</label>
                        <input name="email" v-model="form.email" :class="{'border-red': form.errors.has('email')}" class="bg-grey-lighter placeholder:text-grey-dark appearance-none border border-grey rounded w-full py-3 px-3 mt-2 focus:outline-none" id="email" v-validate="'required|email'" type="text" placeholder="Your email address" @keydown="form.resetErrors()">
                        <div class="text-red fade-enter-active mt-1 text-xs" v-show="form.errors.has('email')">
                            {{ form.errors.get('email') }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <button class="w-full bg-blue hover:bg-blue-dark text-white font-bold py-4 px-4 rounded focus:outline-none" type="button" @click="login" :disabled="form.working">
                            <span v-if="form.working" class="opacity-75">
                                Signing in
                            </span>

                            <span v-else>
                                Sign in
                            </span>
                        </button>
                    </div>
                </form>
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
            form: new Form({ email: '' }, this),
        };
    },
    methods: {
        login() {
            this.form.open('post', 'http://127.0.0.1:8000/api/magic/email');
        }
    }
};
</script>
