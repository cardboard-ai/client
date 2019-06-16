<template>
    <div class="flex">
        <div class="flex w-3/4 sm:flex-1">
            <div class="w-full mt-8 px-8 sm:px-16 xl:px-48">
                <slot></slot>
            </div>
        </div>
        <div class="flex w-1/4 flex-1 min-h-screen bg-img-auth bg-cover bg-no-repeat"></div>
    </div>
</template>
