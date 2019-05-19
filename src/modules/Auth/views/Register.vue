<template>
    <auth>
        <div class="flex flex-col">
            <div>
                <h1 class="text-xl font-semibold">Cardboard</h1>
            </div>
            <div class="mt-32">
                <h1 class="text-4xl font-hairline">Get started for free</h1>
                <p class="leading-loose text-gray-600 mb-8">No creditcard needed.</p>
                <form v-on:submit.prevent="register">
                    <div class="mb-8">
                        <label class="uppercase text-gray-600 font-bold text-xs tracking-wide" for="name">Fullname</label>
                        <input
                            name="name"
                            v-model="form.name"
                            :class="{'border-red': form.errors.has('name')}"
                            class="bg-gray-100 placeholder:text-gray-500 appearance-none border border-blue-100 rounded w-full py-3 px-3 mt-2 focus:outline-none"
                            id="name"
                            v-validate="'required'"
                            type="text"
                            placeholder="Your Fullname"
                            @keydown="form.resetErrors()"
                        >
                        <div class="text-red fade-enter-active mt-1 text-xs" v-show="form.errors.has('name')">
                            {{ form.errors.get('name') }}
                        </div>
                    </div>
                    <div class="mb-8">
                        <label class="uppercase text-gray-600 font-bold text-xs tracking-wide" for="email">Email address</label>
                        <input
                            name="email"
                            v-model="form.email"
                            :class="{'border-red': form.errors.has('email')}"
                            class="bg-gray-100 placeholder:text-gray-500 appearance-none border border-blue-100 rounded w-full py-3 px-3 mt-2 focus:outline-nones"
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
                        <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded focus:outline-none" type="button" @click="register" :disabled="form.working">
                            <span v-if="form.working" class="opacity-75">
                                Creating an account
                            </span>

                            <span v-else>
                                Create account
                            </span>
                        </button>
                    </div>
                </form>
                <p class="text-center mt-6 text-gray-600">
                    Already have an account?
                    <router-link class="text-blue-500 no-underline" to="/">Sign in</router-link>
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
            form: new Form({
                name: '',
                email: ''
            }, this)
        };
    },
    methods: {
        register() {
            this.form.open('post', 'http://127.0.0.1:8000/api/register');
        }
    }
};
</script>
