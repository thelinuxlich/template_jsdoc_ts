import { defineConfig } from 'vitest/config'
import path from 'path'
import url from 'url'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/index.js'
      ),
      name: 'Template_JSDOC',
      fileName: format => `${format}.js`,
    },
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    includeSource: ['src/**/*.{js,ts}'],
    globals: true,
  },
})
