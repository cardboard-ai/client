<template>
    <Auth>
        <div class="flex flex-col">
            <div>
                <router-link to="/">
                    <h1 class="text-gray-900 text-xl font-semibold">{{ $t('app') }}</h1>
                </router-link>
            </div>
            <div class="mt-20">
                <h1 class="text-gray-900 text-4xl font-hairline">{{ $t('heading.register') }}</h1>
                <p class="leading-loose text-gray-700 mb-8">
                    {{ $t('leading.register') }}
                </p>
                <form v-on:submit.prevent="register">
                    <div class="mb-8 flex -mx-4">
                        <div
                            class="w-1/2 mx-4 p-4 cursor-pointer border border-blue-200 rounded text-center"
                            :class="{ 'border-blue-700 shadow' : newUser === true }"
                            v-on:click="newUser = true"
                        >
                            <div :class="{ 'hidden' : newUser === false }" class="w-5 h-5 bg-blue-700 rounded-full text-white float-right -mt-6 -mr-6">✔</div>
                            <p class="text-gray-900 mt-4 font-bold">Create</p>
                            <p class="text-gray-700">Make a new workspace</p>
                        </div>
                        <div
                            class="w-1/2 mx-4 p-4 cursor-pointer border border-blue-200 rounded text-center"
                            :class="{ 'border-blue-700 shadow' : newUser === false }"
                            v-on:click="newUser = false"
                        >
                            <div :class="{ 'hidden' : newUser === true }" class="w-5 h-5 bg-blue-700 rounded-full text-white float-right -mt-6 -mr-6">✔</div>
                            <p class="text-gray-900 mt-4 font-bold">Locate</p>
                            <p class="text-gray-700">Join an existing workspace</p>
                        </div>
                    </div>
                    <div class="mb-8">
                        <label
                            class="uppercase text-gray-500 font-bold text-xs tracking-wider"
                            for="name"
                        >
                            {{ $t('input.full_name') }}
                        </label>
                        <BaseInput
                            id="name"
                            name="name"
                            :form="form"
                            v-model="form.name"
                            v-validate="'required'"
                            :placeholder="$t('input.full_name')"
                        />
                    </div>
                    <div class="mb-6">
                        <label class="uppercase text-gray-500 font-bold text-xs tracking-wider" for="email">
                            {{ $t('input.email') }}
                        </label>
                        <BaseInput
                            id="email"
                            name="email"
                            :form="form"
                            v-model="form.email"
                            v-validate="'required|email'"
                            :placeholder="$t('input.email')"
                        />
                    </div>
                    <div class="mb-6">
                        <label class="text-gray-500">
                            <input class="mr-2 leading-tight" type="checkbox">
                            <span>I agree to the <span class="text-gray-700">terms and conditions</span></span>
                        </label>
                    </div>
                    <div class="mb-4">
                        <BaseButton
                            :form="form"
                            @click.native="register"
                            :process="$t('button_in_process.register')"
                            :button="$t('button.register')"
                        />
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
    </Auth>
</template>

<script>
import Auth from '@/core/layouts/Auth';
import BaseInput from '@/core/components/BaseInput';
import BaseButton from '@/core/components/BaseButton';

export default {
    name: 'register',
    components: {
        Auth,
        BaseInput,
        BaseButton
    },
    data() {
        return {
            form: new Form(
                {
                    name: '',
                    email: ''
                },
                this
            ),
            newUser: true
        };
    },
    methods: {
        register() {
            this.form.open('post', 'register');
        }
    }
};
</script>
