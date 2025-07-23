<template>
  <div>
    <h1 class="text-2xl font-bold mb-6 text-center text-gray-900">Welcome Back</h1>
    <form @submit.prevent="handleLogin" class="space-y-4">
      <input type="text" placeholder="Email" class="w-full px-4 py-2 border rounded-lg" />
      <input type="password" placeholder="Password" class="w-full px-4 py-2 border rounded-lg" />
      <button  type="submit" class="w-full bg-blue-900 text-white py-2 rounded-lg">Login</button>
    </form>
  </div>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router'
definePageMeta({
  layout: 'login'
})

const router = useRouter()
function handleLogin() {
  router.push('/')
}
</script>