<template>
    <button
        class="w-full bg-blue-700 hover:bg-blue-500 text-white font-bold py-4 px-4 rounded focus:outline-none"
        type="button"
        :disabled="form.running"
    >
        <span v-if="form.running" class="opacity-75">
            {{ this.process }}
        </span>

        <span v-else>
            {{ this.button }}
        </span>
    </button>
</template>

<script>
export default {
    props: {
        form: Object,
        process: String,
        button: String
    }
};
</script>
