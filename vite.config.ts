import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// export default defineConfig({
//   server: {
//     port: 3000,
//   },
// })
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
  }
})
