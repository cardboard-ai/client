<template>
    <div class="flex flex-col">
        <div>
            <router-link to="/">
                <h1 class="text-gray-900 text-xl font-semibold">{{ $t('app') }}</h1>
            </router-link>
        </div>
        <div class="mt-32">
            <div class="text-center">
                <h1 class="text-gray-900 text-4xl font-hairline">
                    {{ $t('heading.create_workspace') }}
                </h1>
                <p class="leading-loose text-gray-700 mb-8">
                    {{ $t('leading.create_workspace') }}
                </p>
            </div>
            <form v-on:submit.prevent="create">
                <div class="mb-6">
                    <label
                        class="uppercase text-gray-500 font-bold text-xs tracking-wider"
                        for="name"
                    >
                        {{ $t('input.workspace_name') }}
                    </label>
                    <BaseInput
                        id="name"
                        name="workspace_name"
                        :form="form"
                        v-model="form.name"
                        v-validate="'required'"
                        placeholder="Cardboard.ai"
                    />
                    <div class="text-red mt-1 mb-0 text-xs" v-show="form.errors.has('slug')">
                        {{ form.errors.get('slug') }}
                    </div>
                </div>
                <div class="mb-4">
                    <BaseButton
                        :form="form"
                        @click.native="create"
                        :process="$t('button_in_process.create_workspace')"
                        :button="$t('button.create_workspace')"
                    />
                </div>
            </form>
            <p class="text-center mt-6 text-gray-500">
                {{ $t("label.want_to") }}
                <router-link
                    class="text-blue-700 no-underline lowercase"
                    :to="{ name:'register' }"
                >
                    {{ $t('label.join_workspace') }}<span class="text-gray-500">{{ $t('label.question_mark') }}</span> 
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
import BaseInput from '@/core/components/BaseInput';
import BaseButton from '@/core/components/BaseButton';

export default {
    name: 'create-workspace',
    components: {
        BaseInput,
        BaseButton
    },
    data() {
        return {
            form: new Form({ name: '' }, this)
        };
    },
    methods: {
        /**
         * Create the workspace and redirect to the workspace style setup page.
         */
        create() {
            this.form.post('workspaces')
                .then(response => {
                    if (response.data) {
                        this.$router.push({
                            name: 'workspace-style',
                            params: {
                                id: response.data.id
                            }
                        });
                    }
                });
        }
    },
    mounted() {
        localStorage.setItem('onboarding-create-flow', 'create-workspace');
    }
};
</script>
