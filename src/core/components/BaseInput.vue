<template>
    <div>
        <input
            v-bind="$attrs"
            v-model="text"
            :class="{ 'border-red': form.errors.has(this.name) }"
            class="text-gray-900 bg-blue-100 placeholder:text-gray-500 appearance-none border border-blue-200 rounded w-full p-2 mt-2 focus:border-blue-700 focus:outline-none"
            @input="handleInput"
            @keydown="form.resetErrors()"
        />
        <div class="text-red mt-1 mb-0 text-xs" v-show="form.errors.has(this.name)">
            {{ form.errors.get(this.name) }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        form: Object,
        value: String,
        name: String
    },
    data() {
        return {
            text: this.value
        };
    },
    methods: {
        handleInput() {
            this.$emit('input', this.text);
        }
    }
};
</script>
