/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app.vue',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        background: '#f6f5ff',
        sidebar: '#edeaff',
        card: '#ffffff',
        selectedRow: '#e9e6fd',

        // Primary and Action Colors
        primary: '#725cff',           // Sidebar active, Add Task button
        danger: '#dc3545',            // Overdue tag, overdue task text
        success: '#28a745',           // Completed tag

        // Text Colors
        text: {
          base: '#1f2937',            // Page title
          sidebar: '#3f3f46',         // Sidebar default text
          muted: '#6b7280',           // Dimmed/inactive text
          faded: '#9ca3af',           // Placeholder text
          header: '#374151',          // Table headers
          secondary: '#4b5563',       // Username (top right)
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Roboto', 'ui-sans-serif', 'system-ui'],
      },
      container: {
        center: true,
        padding: '2rem'
      },
      spacing: {
        'sidebar': '240px', // fixed sidebar width
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 8px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
