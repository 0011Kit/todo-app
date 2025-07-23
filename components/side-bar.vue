<template>
    <div>
        <aside v-if="showSidebar"
        class="w-full md:w-64 bg-sidebar border-b md:border-b-0 md:border-r border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
        >
            <div class="flex flex-row items-center mb-6 px-2 gap-2">
                <Icon icon="streamline-color:pie-chart-flat" width="20" height="20" />
                <h2 class="text-xl font-semibold">My To-Do</h2>
            </div>
            <ul class="space-y-2">
                <li>
                <NuxtLink
                    to="/"
                    :class="[
                    'block px-3 py-2 rounded font-semibold',
                    (route.path === '/' || route.path === '/add-task')
                        ? 'bg-primary text-background dark:text-gray-900 dark:bg-slate-600'
                        : 'hover:bg-background dark:hover:bg-gray-700 dark:hover:text-white'
                    ]"
                >
                    <Icon icon="tabler:home" width="20" height="20" class="inline-block mr-2" />
                    <span>My Task</span>
                </NuxtLink>
                </li>
                <li>
                <NuxtLink
                    to="/profile"
                    :class="[
                    'block px-3 py-2 rounded font-semibold',
                    route.path === '/profile'
                        ? 'bg-primary text-background dark:text-gray-900 dark:bg-slate-600'
                        : 'hover:bg-background dark:hover:bg-gray-700 dark:hover:text-white'
                    ]"
                >
                    <Icon icon="tabler:user" width="20" height="20" class="inline-block mr-2" />
                    <span>My Profile</span>
                </NuxtLink>
                </li>
                <li>
                <NuxtLink
                    to="/activity"
                    :class="[
                    'block px-3 py-2 rounded font-semibold',
                    route.path === '/activity'
                        ? 'bg-primary text-background dark:text-gray-900 dark:bg-slate-600'
                        : 'hover:bg-background dark:hover:bg-gray-700 dark:hover:text-white'
                    ]"
                >
                    <Icon icon="tabler:bike" width="20" height="20" class="inline-block mr-2" />
                    <span>My Activity</span>
                </NuxtLink>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const showSidebar = ref(true)
</script>
