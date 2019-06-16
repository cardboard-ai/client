<template>
    <div class="flex">
        <div class="flex-1 md:flex md:w-3/4">
            <div class="mt-8 px-8 sm:px-16 xl:px-48">
                <slot></slot>
            </div>
        </div>
        <div class="flex-1 md:flex md:w-1/4 min-h-screen bg-img-auth bg-cover bg-no-repeat"></div>
    </div>
</template>
