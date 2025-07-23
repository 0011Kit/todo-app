<template>
  <div>
    <h1 class="text-4xl font-extrabold mb-4  dark:text-gray-500 ">My Tasks</h1>

    <!-- Search Bar Start -->
    <!-- Search Bar Start -->
    <div class="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
        <select
          v-model="statusFilter"
          class="border px-2 py-1 rounded font-semibold dark:bg-gray-700 dark:hover:text-slate-500 w-full sm:w-auto"
        >
          <option value="">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="overdue">Overdue</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="other">Other</option>
        </select>

        <div class="relative w-full sm:w-64">
          <input
            v-model="searchQuery"
            placeholder="Search"
            class="border px-2 py-1 rounded w-full dark:bg-gray-700"
          />
          <span class="absolute right-3 top-2 text-bold hover:text-primary dark:hover:text-slate-500">
            <Icon icon="tabler:search" width="20" height="20" />
          </span>
        </div>
      </div>

      <NuxtLink
        to="/add-task"
        class="px-3 py-1 rounded text-base bg-primary text-background hover:bg-sidebar hover:text-primary hover:border hover:border-primary dark:bg-gray-700 dark:hover:text-slate-500 hover:border-slate-500"
      >
        Add Task
      </NuxtLink>
    </div>
    <!-- Search Bar End -->

     <!-- Listing Table Start  -->
      <div class="overflow-x-auto">
        <table class="min-w-full border text-sm bg-card dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500 dark:hover:text-gray-300">
          <thead class="bg-card relative dark:bg-gray-800">
            <tr>
              <th class="p-2 text-left indent-5">Task</th>
              <th class="p-2 text-left">Due Date</th>
              <th class="p-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="filteredTasks.length === 0">
              <td colspan="3" class="text-center py-4 text-gray-500 dark:bg-gray-800 ">
                No record found.
              </td>
            </tr>

            <tr v-for="task in filteredTasks" :key="task.id" class="p-2 " >
              <!-- title + tag -->
              <td class="flex items-center gap-2 p-2">
                <input type="checkbox" :checked="task.completed" class="accent-primary dark:accent-gray-500"  @change="toggleTask(task)" />
                <div :class="
                  task.completed ? 'line-through text-gray-400 bg-card  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500 dark:hover:text-gray-300' 
                    : isOverdue(task.dueDate) ? 'text-red-600 dark:text-red-700' : 'text-black dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500'">
                  {{ task.title }}
                </div>            
                <span
                  :class="task.completed
                    ? 'bg-green-600 text-card text-xs rounded p-0.5 dark:bg-green-900 dark:text-gray-300'
                    : isOverdue(task.dueDate)
                      ? 'bg-red-600 text-card text-xs rounded p-0.5  dark:bg-red-900 dark:text-gray-300'
                      : 'text-yellow-600'"
                >
                  {{ task.completed ? 'Completed' : isOverdue(task.dueDate) ? 'Overdue' : '' }}
                </span>
              </td>

              <!-- Due Date -->
              <td>
                <div :class="(isOverdue(task.dueDate) && !task.completed)
                ? 'text-red-600 dark:text-red-700' 
                : 'text-black dark:text-gray-500'">
                  {{ task.dueDate }}
                </div>
              </td>

              <!-- Action Buttons -->
              <td class="text-center space-x-2 reactive flex justify-center items-center">
                <NuxtLink :to="`/edit/${task.id}`" class="text-primary hover:underline dark:text-slate-500 dark:hover:text-slate-300" >
                  <Icon icon="material-symbols:edit" width="24" height="24"></Icon>
                </NuxtLink>                        
                <button @click="deleteTask(task.id)" class="text-red-600 pt-1 items-center hover:underline  dark:text-red-900 dark:hover:text-red-700">
                  <Icon icon="material-symbols:delete-rounded"  width="24" height="24"></Icon>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '../../stores/dbtask'
import { onMounted, computed, ref } from 'vue'
import { Icon } from '@iconify/vue'

const todoStore = useTodoStore();
const statusFilter = ref('');
const searchQuery = ref('');
const cat = ['Work', 'Personal', 'Other'];

onMounted(() => {
  todoStore.loadTasks()
})

//region For filtering (if needed), or use todoStore.tasks directly
const filteredTasks = computed(() => {
  return todoStore.tasks.filter(task => {
    const filter = statusFilter.value;
    const  match =
        (filter == '' ) ||
        (filter === 'completed' && task.completed) ||
        (filter === 'pending' && !task.completed && !isOverdue(task.dueDate)) ||
        (filter === 'overdue' && !task.completed && isOverdue(task.dueDate))||
        (filter === 'work' && task.category.toLowerCase() === 'work') ||
        (filter === 'personal' && task.category.toLowerCase() === 'personal') ||
        (filter === 'other' && task.category.toLowerCase() === 'others');

    const queryMatch = task.title.toLowerCase().includes(searchQuery.value.toLowerCase());

    return match && queryMatch;
  });
});
//endregion

//region Overdue Checker
function isOverdue(dueDate: string): boolean {
  const nowParts = new Date().toISOString().split('T')
  const now = nowParts[0] ?? '' // fallback to empty string if for some reason it's undefined
  return dueDate < now
}
//endregion

//region Toggle task completion
function toggleTask(task: { id: number }) {
  todoStore.toggleComplete(task.id)
}
//endregion

//region Delete task
function deleteTask(id: number) {
  const confirmed = confirm("Are you sure you want to delete this task?");
  if (!confirmed) return
  todoStore.removeTask(id)
}
//endregion
</script>
