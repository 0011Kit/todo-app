<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-background text-gray-800 dark:bg-gray-900 dark:text-gray-100">
    <!-- Sidebar start -->
    <Sidebar :showSidebar="showSidebar" />
    <!-- Sidebar toggle -->
    <div
      class="fixed bottom-4 left-4 z-50 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      @click="showSidebar = !showSidebar"
    >
      <Icon
        :icon="showSidebar ? 'tabler:chevrons-left' : 'tabler:chevrons-right'"
        width="28"
        height="28"
        class="dark:text-gray-200"
      />
    </div>
    <!-- Sidebar end -->

    <main class="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-background dark:bg-gray-900">
      <!-- the login bar start -->
      <div class="flex flex-row sm:flex-row justify-end sm:items-center mb-4 gap-4">
        <!-- Dark toggle -->
        <div @click="toggleDark" class="cursor-pointer">
          <Icon
            v-if="isDark"
            icon="tabler:sun-filled"
            width="25"
            height="25"
            class="hover:text-primary text-gray-300"
          />
          <Icon
            v-else
            icon="tabler:moon-filled"
            width="25"
            height="25"
            class="hover:text-primary text-gray-400"
          />
        </div> 
          
        <!-- User Info -->
        <div class="flex items-center gap-3 text-gray-600 hover:text-primary font-bold dark:text-gray-500">
          <Icon icon="tabler:user-circle" width="25" height="25" />
          <span>{{ currentUser || 'UserName' }}</span>
        </div>

        <div class="flex items-center gap-4">
          

          <!-- Dropdown -->
          <NuxtLink to="/login" class="flex items-center">
            <Icon
              icon="tabler:chevron-down"
              width="25"
              height="25"
              class="hover:text-primary dark:text-gray-500"
            />
          </NuxtLink>
        </div>
      </div>
      <!-- the login bar end -->

      <slot />
    </main>

    
  </div>
</template>



<script setup>
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
  import { useDarkMode } from '../../composables/useDarkMode'
 import Sidebar from '../../components/side-bar.vue'

  const { isDark, toggleDark } = useDarkMode()
  const showSidebar = ref(true)
  const route = useRoute()
</script>
