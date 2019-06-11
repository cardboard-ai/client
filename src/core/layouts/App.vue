<template>
    <div class="min-h-screen bg-gray-400">
            <div class="w-full mx-auto">
        <nav class="flex items-center justify-between flex-wrap bg-white p-4 px-6 mb-16 rounded-sm">
            <div class="w-32 text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" class="fill-current text-gray-600">
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
            </div>
            <div class="flex container mx-auto px-6">
                <div class="flex w-1/3 items-center flex-shrink-0 text-gray-900 mr-6">
                    <span class="font-semibold text-lg tracking-tight">Cardboard</span>
                </div>
                <div class="w-1/2 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="mt-2 mr-2 fill-current text-gray-600">
                        <path class="flex-1" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                    </svg>
                    <input class="flex-1 text-gray-900 bg-white placeholder:text-gray-500 appearance-none border-0 rounded w-full py-1 px-3 focus:outline-none" placeholder="Search here for projects, analytics and help">
                </div>
                <div class="mr-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-current text-gray-600 mt-2">
                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"/>
                    </svg>
                </div>
                <div class="border border-gray-400 -m-4"></div>
                <div class="w-1/6 ml-10">
                    <img class="inline rounded-full w-10" src="https://avatars0.githubusercontent.com/u/17195019" title="Daan de Vos" alt="Daan de Vos">
                    <p class="ml-4 inline text-gray-700">Daan de Vos</p>
                </div>
            </div>
        </nav>
            </div>

        <div class="w-full mx-auto">
            <div class="flex">
                <div class="max-w-32">
                    <ul class="list-none">
                        <li>
                            <router-link to="dashboard" title="Overview" class="flex justify-start nav-item">
                                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-600">
                                    <path d="M5 3h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v4h4V5H5zm10-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v4h4V5h-4zM5 13h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2zm0 2v4h4v-4H5zm10-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2zm0 2v4h4v-4h-4z"/>
                                </svg>
                                <div class="ml-3 mt-px">Overview</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="dashboard" title="Analytics" class="flex justify-start nav-item">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-current text-gray-600">
                                    <path d="M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z"/>
                                </svg>
                                <div class="ml-3 mt-px">Analytics</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="dashboard" title="Projects" class="flex justify-start nav-item">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-current text-gray-600">
                                    <path d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"/>
                                </svg>
                                <div class="ml-3 mt-px">Projects</div>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="flex container mx-auto">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
