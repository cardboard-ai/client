<template>
    <div class="flex">
        <div class="flex-1">
            <div class="mt-16 px-32">
                <slot></slot>
            </div>
        </div>
        <div class="flex-1 h-screen md:inline-block hidden bg-img-auth"></div>
    </div>
</template>
