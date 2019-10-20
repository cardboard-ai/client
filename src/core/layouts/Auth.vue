<template>
    <div class="flex">
        <div class="flex w-3/4 sm:flex-1">
            <div class="w-full mt-8 px-4 sm:px-8 md:px-16 xl:px-48">
                <slot></slot>
                <router-view></router-view>
            </div>
        </div>
        <div class="flex w-1/4 flex-1 min-h-screen bg-img-auth bg-cover bg-no-repeat"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        axios.get('user')
            .then((response) => {
                if (response.data instanceof Object) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    if (['login', 'register'].indexOf(this.$router.currentRoute.name) !== -1) {
                        this.$router.push({ name: 'dashboard' });
                    }
                }
            });
    }
}
</script>