<template>
  <div class="min-h-screen flex bg-card  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500 ">
    <main class="flex-1 p-6">
      <h1 class="text-2xl font-bold mb-6">Edit Task</h1>

      <form @submit.prevent="handleSubmit" class="space-y-4 max-w-xl">
        <div>
          <label class="block font-semibold">Title</label>
          <input v-model="form.title" type="text" 
          class="w-full p-2 border border-gray-300 rounded
         bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600" required />
        </div>

        <div>
          <label class="block font-semibold">Category</label>
          <select v-model="form.category"  class="w-full p-2 border border-gray-300 rounded
         bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600" required>
            <option value="">Select</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label class="block font-semibold">Due Date</label>
          <input v-model="form.dueDate" type="date"  class="w-full p-2 border border-gray-300 rounded
         bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600" required />
        </div>

      

         <div class="flex items-center gap-2">
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-gray-700 dark:hover:text-slate-500 hover:border hover:border-slate-500">
                Submit
            </button>
            <NuxtLink
                to="/"
                :class="[
                    'block px-3 py-2 rounded text-base justify-items-end',
                    'bg-gray-400 text-background',
                    'hover:bg-sidebar hover:text-primary hover:border hover:border-primary',
                    'dark:bg-gray-800 dark:hover:text-slate-400 dark:border dark:border-slate-500']"
            >
                <span>Cancel</span>
            </NuxtLink>

        </div>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { useTodoStore } from '../../../stores/dbtask'

const route = useRoute()
const router = useRouter()
const todoStore = useTodoStore()

const taskId = Number(route.params.id)
const form = reactive({
  title: '',
  category: '',
  dueDate: '',
  description: '',
})

onMounted(() => {
  const task = todoStore.getTaskById(taskId)
  if (task) {
    form.title = task.title
    form.category = task.category
    form.dueDate = task.dueDate
    form.description = task.description
  } else {
    console.error('Task not found')
    router.push('/') // If task not found, redirect to home
  }
})

const handleSubmit = () => {
  todoStore.updateTask({
    id: taskId,
    ...form,
    completed: false // or preserve original completed value if you prefer
  })

  alert("Task updated successfully!");
  router.push('/')
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
}
</style>
