import commonjs from '@rollup/plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'

function createEntry(options) {
  const config = {
    plugins: [
      commonjs(),
      VuePlugin()
    ],
    input: 'src/main.js',
    output: {
      exports: 'default',
      format: options.format,
      name: 'VueEdge',
      file: options.file
    }
  }

  return config
}

export default [
  createEntry({ format: 'iife', file: './dist/vue-edge.browser.js' }),
  createEntry({ format: 'cjs', file: './dist/vue-edge.js' }),
]
