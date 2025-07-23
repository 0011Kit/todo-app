<!-- /pages/add-task.vue -->
<template>
  <div class="min-h-screen flex bg-card  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500 ">
    <main class="flex-1 p-6">
      <h1 class="text-2xl font-bold mb-6">Add New Task</h1>

      <form @submit.prevent="handleSubmit" class="space-y-4 max-w-xl ">
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
import { reactive } from 'vue'
import { useTodoStore } from '../../stores/dbtask'
import { useRouter } from 'vue-router'

const router = useRouter()
const todoStore = useTodoStore()

const form = reactive({
  title: '',
  category: '',
  dueDate: '',
  description: ''
})

const handleSubmit = () => {
  const newTask = {
    id: Date.now(),
    title: form.title,
    category: form.category,
    dueDate: form.dueDate,
    description: form.description,
    completed: false
  }

  todoStore.addTask(newTask)

  // Optional: Clear form
  form.title = ''
  form.category = ''
  form.dueDate = ''
  form.description = ''

  alert("Task added successfully!");
  router.push('/')
}
</script>

