<template>
    <Auth>
        <div class="flex flex-col">
            <div>
                <router-link to="/">
                    <h1 class="text-gray-900 text-xl font-semibold">{{ $t('app') }}</h1>
                </router-link>
            </div>
            <div class="mt-8">
                <div class="text-center">
                    <h1 class="text-gray-900 text-4xl font-hairline">{{ $t('heading.register') }}</h1>
                    <p class="leading-loose text-gray-700 mb-6">
                        {{ $t('leading.register') }}
                    </p>
                </div>
                <form v-on:submit.prevent="register">
                    <div class="mb-6 flex -mx-4">
                        <div
                            class="w-1/2 mx-4 p-4 cursor-pointer border border-blue-200 rounded text-center"
                            :class="{ 'border-blue-700 shadow' : newUser === true }"
                            v-on:click="newUser = true"
                        >
                            <div :class="{ 'hidden' : newUser === false }" class="w-5 h-5 bg-blue-700 rounded-full text-white float-right -mt-6 -mr-6">✔</div>

                            <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#2e5bff" class="m-auto">
                                <circle opacity=".2" cx="24" cy="24" r="24"/>
                                <path d="M32.0927834 21.05191818C31.9361106 20.71528182 31.5985197 20.5 31.2272652 20.5h-5.2611364l3.5210001-5.53299091c.1870272-.29393637.1990545-.6664.0314362-.97179091C29.350947 13.68982727 29.0302197 13.5 28.6818107 13.5h-5.72727279c-.34064546 0-.65545455.18149091-.82606364.47625454l-7 12.09090906c-.17099091.2953364-.1713091.6594-.00089091.9550546.17048182.2956546.48573636.4777818.82695454.4777818h5.75024546l-1.58028182 5.7942819c-.11791818.4322818.08075454.8883635.47752727 1.0964545.14050909.0736908.29247273.1092636.44297274.1092636.27446362 0 .54421818-.1183637.73054545-.3397545l10.1818182-12.09090914c.239209-.28394545.2920273-.68084545.1354182-1.01741818zm-8.98621823 8.56411812l.76891818-2.819409c.07827273-.287.01826364-.5941091-.16233636-.8305818-.1806-.2364091-.46110909-.3751364-.75860908-.3751364h-5.34437273l5.89476363-10.1818182H26.942947l-3.521 5.53299092c-.18696365.29393636-.19905455.66640001-.03143637.97185455.16768182.30532726.48840909.49515453.83675455.49515453h4.94830002l-6.06900003 7.2069454z"/>
                            </svg>
                            <p class="text-gray-900 mt-2 font-bold">{{ $t('label.create') }}</p>
                            <p class="text-gray-700">{{ $t('label.create_caption') }}</p>
                        </div>
                        <div
                            class="w-1/2 mx-4 p-4 cursor-pointer border border-blue-200 rounded text-center"
                            :class="{ 'border-blue-700 shadow' : newUser === false }"
                            v-on:click="newUser = false"
                        >
                            <div :class="{ 'hidden' : newUser === true }" class="w-5 h-5 bg-blue-700 rounded-full text-white float-right -mt-6 -mr-6">✔</div>
                            <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#2e5bff" class="m-auto">
                                <circle opacity=".2" cx="24" cy="24" r="24"/>
                                <path d="M24.28947368 31.73988509S18.36842105 24.541144 18.36842105 21.2952538s2.65094556-5.8772041 5.92105263-5.8772041c3.27010712 0 5.92105262 2.6313139 5.92105262 5.8772041 0 3.2458902-5.92105262 10.44463129-5.92105262 10.44463129zm-1.81373711 1.55499619L24.28947369 35.5l1.81373711-2.20511872c.0539482-.06558959.1484901-.18225996.2779073-.34467134.2119803-.26602336.4472328-.56692094.7000731-.89742187.7222073-.94403562 1.4445906-1.94110216 2.1225303-2.95115431.4891911-.72883816.937818-1.43912887 1.3374465-2.12447593 1.2996228-2.22880143 2.0377794-4.06550543 2.0377794-5.68190403C32.5789474 16.6984296 28.8529246 13 24.28947369 13 19.72602279 13 16 16.6984296 16 21.2952538c0 1.6163986.73815664 3.4531026 2.03777942 5.68190403.39962851.68534706.84825541 1.39563777 1.33744637 2.12447593.67793978 1.01005215 1.40032307 2.00711869 2.12253041 2.95115431.25284026.33050093.4880928.63139851.70007305.89742187.12941721.16241138.22395907.27908175.27790732.34467134zM24.28947369 17.736842c-1.96206425 0-3.55263158 1.5905675-3.55263158 3.5526317 0 1.9620642 1.59056733 3.5526316 3.55263158 3.5526316 1.96206421 0 3.55263161-1.5905674 3.55263161-3.5526316 0-1.9620642-1.5905674-3.5526317-3.55263161-3.5526317zm0 2.3684212c.65402142 0 1.18421052.5301891 1.18421052 1.1842105 0 .6540214-.5301891 1.1842105-1.18421052 1.1842105-.65402143 0-1.18421052-.5301891-1.18421052-1.1842105 0-.6540214.53018909-1.1842105 1.18421052-1.1842105z"/>
                            </svg>
                            <p class="text-gray-900 mt-2 font-bold">{{ $t('label.locate') }}</p>
                            <p class="text-gray-700">{{ $t('label.locate_caption') }}</p>
                        </div>
                    </div>
                    <div class="mb-6">
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
                            <input name="terms" v-model="terms" type="checkbox" class="mr-2 leading-tight" v-validate="'required'">
                            <span>
                                {{ $t('label.i_agree_to') }}
                                <span class="text-gray-700">{{ $t('label.terms_and_conditions') }}</span>
                            </span>
                        </label>
                        <div class="text-red mb-0 text-xs" v-show="form.errors.has('terms')">
                            {{ form.errors.get('terms') }}
                        </div>
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
                    email: '',
                },
                this
            ),
            newUser: true,
            terms: false
        };
    },
    methods: {
        register: function() {
            this.form.post('register')
                .then((response) => {
                    if (response) {
                        this.$router.push({ name: 'create-workspace' });
                    }
                }).catch(error => {
                    // Do nothing
                });
        }
    }
};
</script>
