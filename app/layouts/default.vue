<template>
  <div class="flex min-h-screen bg-background text-gray-800 dark:bg-gray-900 dark:text-gray-100">
    <!-- Sidebar start-->
    <aside v-if="showSidebar" class="w-64 bg-sidebar border-r border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500 dark:hover:text-gray-300">
      <div class="flex flex-row items-center mb-6 px-2 gap-2">
        <Icon icon="streamline-color:pie-chart-flat" width="20" height="20" />
        <h2 class="text-xl font-semibold">My To-Do</h2>
      </div>
      <ul class="space-y-2">
        <li>
          <NuxtLink to="/" :class="[ 
            'block px-3 py-2 rounded font-semibold',
            (route.path === '/' || route.path === '/add-task') 
              ? 'bg-primary text-background dark:text-gray-900 dark:bg-slate-600' 
              : 'hover:bg-background dark:hover:bg-gray-700 dark:hover:text-white'
          ]">
            <Icon icon="tabler:home" width="20" height="20" class="inline-block mr-2" />
            <span>My Task</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profile" :class="[
            'block px-3 py-2 rounded font-semibold',
            route.path === '/profile' 
              ? 'bg-primary text-background dark:text-gray-900 dark:bg-slate-600' 
              : 'hover:bg-background dark:hover:bg-gray-700 dark:hover:text-white'
          ]">
            <Icon icon="tabler:user" width="20" height="20" class="inline-block mr-2" />
            <span>My Profile</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/activity" :class="[
            'block px-3 py-2 rounded font-semibold',
            route.path === '/activity' 
              ? 'bg-primary text-background dark:text-gray-900 dark:bg-slate-600' 
              : 'hover:bg-background dark:hover:bg-gray-700 dark:hover:text-white'
          ]">
            <Icon icon="tabler:bike" width="20" height="20" class="inline-block mr-2" />
            <span>My Activity</span>
          </NuxtLink>
        </li>
      </ul>
    </aside>
    <!-- Sidebar end-->

    <main class="flex-1 p-6 overflow-y-auto bg-background dark:bg-gray-900">
      <!-- the login bar start -->
      <div class="flex flex-row justify-end items-center bg-background p-4 gap-3 dark:bg-gray-900">
        <!-- Dark toggle -->
        <div @click="toggleDark" class="cursor-pointer">
          <Icon v-if="isDark" icon="tabler:sun-filled" width="25" height="25"
            class="inline-block mr-2 hover:text-primary text-bold text-gray-300" />
          <Icon v-else icon="tabler:moon-filled" width="25" height="25"
            class="text-gray-400 inline-block mr-2 hover:text-primary text-bold" />
        </div>

        <!-- User Info -->
        <div class="flex flex-row gap-3 content-center text-gray-600 hover:text-primary text-bold dark:text-gray-500">
          <Icon icon="tabler:user-circle" width="25" height="25" />
          <span>{{ currentUser || 'UserName' }}</span>
        </div>

        <!-- Dropdown -->
        <NuxtLink to="/login" class="flex">
          <Icon icon="tabler:chevron-down" width="25" height="25"
            class="inline-block mr-2 hover:text-primary text-bold dark:text-gray-500" />
        </NuxtLink>
      </div>
      <!-- the login bar end -->

      <slot />
    </main>

    <!-- Sidebar toggle -->
    <div
      class="fixed bottom-4 left-4 z-50 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      @click="showSidebar = !showSidebar">
      <Icon :icon="showSidebar ? 'tabler:chevrons-left' : 'tabler:chevrons-right'" width="28" height="28"
        class="dark:text-gray-200" />
    </div>
  </div>
</template>


<script setup>
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
  import { useDarkMode } from '../../composables/useDarkMode'
  
  const { isDark, toggleDark } = useDarkMode()
  const showSidebar = ref(true)
  const route = useRoute()
</script>
