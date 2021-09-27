// tailwind.config.js

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        18: '4.5rem',
        22: '5.5rem',
      },
      inset: {
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
      },

      minWidth: {
        60: '15rem',
      },
    },
  },
  variants: {
    extend: { opacity: ['group-hover'] },
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        swb: {
          primary: '#009c67',
          'primary-focus': '#008457',
          'primary-content': '#ffffff',
          secondary: '#527dbc',
          'secondary-focus': '#3d5f93',
          'secondary-content': '#ffffff',
          accent: '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          neutral: '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          info: '#2094f3',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',
          '--rounded-btn': '2px',
          '--border-btn': '2px',
        },
      },
    ],
  },
}
