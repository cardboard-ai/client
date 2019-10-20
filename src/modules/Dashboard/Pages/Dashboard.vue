<template>
    <App>
        <div class="w-full sm:w-1/2 m-4">
            <div class="bg-white shadow p-8">
                <h1 class="text-gray-900 text-3xl font-hairline leading-tight">Welcome to Cardboard</h1>
                <p class="text-gray-700 mt-2">The matching is operating well. There were 1,963 matches since your last login.</p>
            </div>
        </div>
        <div class="w-full sm:w-1/2 m-4">
            <div class="bg-white shadow p-8">
                <h1 class="text-gray-900 text-3xl font-hairline leading-tight">Welcome to Cardboard</h1>
                <p class="text-gray-700 mt-2">The matching is operating well. There were 1,963 matches since your last login.</p>
            </div>
        </div>
    </App>
</template>

<script>
import App from '@/core/layouts/App';

export default {
    name: 'dashboard',
    components: {
        App
    }
};
</script>
