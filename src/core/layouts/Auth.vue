<template>
    <div class="flex">
        <div class="flex w-3/4 sm:flex-1">
            <div class="w-full mt-8 px-8 sm:px-16 xl:px-48">
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
        var self = this;
        axios.get('http://127.0.0.1:8000/api/user')
            .then(function(response) {
                if (response.data instanceof Object) {
                    localStorage.setItem('user', JSON.stringify(response.data));

                    if (['login', 'register'].indexOf(self.$router.currentRoute.name) !== -1) {
                        self.$router.push({ name: 'dashboard' });
                    }
                }
            })
            .catch(function(error) {
                //
            });
    }
}
</script>