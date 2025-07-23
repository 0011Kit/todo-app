import { useState } from "nuxt/app"

export function useDarkMode() {
  const isDark = useState('isDark', () => {
    if (process.client) {
      return localStorage.getItem('theme') === 'dark'
    }
    return false
  })

  const toggleDark = () => {
    isDark.value = !isDark.value
    const html = document.documentElement
    if (isDark.value) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return { isDark, toggleDark }
}
