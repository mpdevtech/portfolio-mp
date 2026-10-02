import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { projects } from './src/data/projects.ts'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-mp/',
  plugins: [react(), {
    name: 'static-project-pages',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const index = bundle['index.html']
      if (!index || index.type !== 'asset') throw new Error('Build sem index.html')
      // Pages does not provide an SPA fallback. Emit entry points for each case.
      for (const project of projects) {
        this.emitFile({ type: 'asset', fileName: `projetos/${project.slug}/index.html`, source: index.source })
      }
      this.emitFile({ type: 'asset', fileName: '404.html', source: index.source })
    },
  }],
})
