<template>
    <Auth>
        <div class="flex flex-col">
            <div>
                <h1 class="text-gray-900 text-xl font-semibold">{{ $t('app') }}</h1>
            </div>
            <div class="mt-20">
                <h1 class="text-gray-900 text-4xl font-hairline">
                    {{ $t('heading.login') }}
                </h1>
                <p class="leading-loose text-gray-700 mb-8">
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
                            class="uppercase text-gray-500 font-bold text-xs tracking-wider"
                            for="email"
                        >
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
                    <div class="mb-4">
                        <BaseButton
                            :form="form"
                            @click.native="login"
                            :process="$t('button_in_process.login')"
                            :button="$t('button.login')"
                        />
                    </div>
                </form>
                <p class="text-center mt-6 text-gray-500">
                    {{ $t("label.no_account") }}
                    <router-link
                        class="text-blue-700 no-underline"
                        to="register"
                    >
                        {{ $t('label.register') }}
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
    name: 'login',
    components: {
        Auth,
        BaseInput,
        BaseButton
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
