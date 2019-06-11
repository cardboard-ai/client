<template>
    <Auth>
        <div class="flex flex-col">
            <div>
                <router-link to="/">
                    <h1 class="text-gray-900 text-xl font-semibold">{{ $t('app') }}</h1>
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
