import { screens as _screens } from 'tailwindcss/defaultTheme'

export const content = ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"]
export const darkMode = 'media'
export const theme = {
  screens: {
    'xs': '375px',
    ..._screens,
  },
}
export const variants = {
  extend: {},
}
export const plugins = []
