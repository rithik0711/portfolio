import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@emotion/react': require.resolve('@emotion/react'),
  //     '@emotion/styled': require.resolve('@emotion/styled'),
  //   }
  // }
})
