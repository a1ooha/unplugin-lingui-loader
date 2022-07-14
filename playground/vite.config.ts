import path from 'path'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'

import LinguiLoader from '../src/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Unocss(),
    LinguiLoader(),
    react({
      babel: { plugins: ['macros'] },
    }),
    Pages(),
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: true,
    }),
  ],
})
