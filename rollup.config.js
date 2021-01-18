import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
// import nested from 'postcss-nested'

export default {
  input: 'src/index.js',
  output: {
    sourcemap: true,
    format: 'cjs',
    file: 'public/build/bundle.js',
  },
  plugins: [
    svelte({
      emitCss: false,
      preprocess: sveltePreprocess({
        // postcss: {
        //   plugins: [ nested() ]
        // }
      }),
    }),
  ],
}
