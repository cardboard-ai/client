<template>
    <div class="flex">
        <div class="flex-1">
            <div class="mt-16 px-32">
                <slot></slot>
            </div>
        </div>
        <div class="flex-1 min-h-screen md:inline-block hidden bg-img-auth bg-cover bg-no-repeat"></div>
    </div>
</template>
