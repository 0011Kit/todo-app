import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: [] as Task[],
  }),

  actions: {
    loadTasks() {
      if (process.client) {
        const saved = localStorage.getItem('tasks')
        this.tasks = saved ? JSON.parse(saved) : []
      }
    },

    saveTasks() {
      if (process.client) {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    },

    addTask(task: Task) {
      this.tasks.push(task)
      this.saveTasks()
    },

    removeTask(id: number) {
      this.tasks = this.tasks.filter(task => task.id !== id)
      this.saveTasks()
    },

    toggleComplete(id: number) {
      const task = this.tasks.find(t => t.id === id)
      if (task) {
        task.completed = !task.completed
        this.saveTasks()
      }
    },
    updateTask(updatedTask: { id: number; title: string; category: string; dueDate: string; description: string; completed: boolean }) {
      const index = this.tasks.findIndex(task => task.id === updatedTask.id)
      if (index !== -1) {
        this.tasks[index] = updatedTask
        this.saveTasks() // if you’re persisting to localStorage
      }
    },
    getTaskById(id: number) {
      return this.tasks.find(task => task.id === id)
    }
  },
})

interface Task {
  id: number
  title: string
  category: string
  dueDate: string
  description: string
  completed: boolean
}
