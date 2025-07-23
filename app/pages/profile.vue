<template>
    <div>
        <h1 class="text-4xl font-extrabold mb-4">My Profile</h1>
    </div>
    <div class="min-h-screen flex flex-col items-center justify-center bg-card text-center p-6 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500 dark:hover:text-gray-300">    
        <img
            :src="isDark ? maintenanceDark : maintenanceLight"
            alt="Under Maintenance"
            class="w-64 mb-6"
        />
        
        <h1 class="text-3xl font-bold text-gray-800 mb-2">We'll be back soon!</h1>
        <p class="text-gray-600 mb-4">
            This page is currently under maintenance. Please check back later.
        </p>
        <NuxtLink to="/" class="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 dark:text-gray-400 dark:bg-gray-700 dark:hover:text-slate-500 hover:border hover:border-slate-500">
            Go to Homepage
        </NuxtLink>
    </div>
</template>

<script setup>
import maintenanceLight from '../assets/photo/maintenance.jpg'
import maintenanceDark from '../assets/photo/maintenanceBlack.png'

const isDark = useState('isDark', () => false)
</script>
