import staticFiles from 'rollup-plugin-static-files'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import postcssLabFunction from 'postcss-lab-function'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
    plugins: [
        staticFiles({
            include: ['./static']
        }),
        postcss({
            plugins: [
                postcssLabFunction(),
                autoprefixer()
            ]
        }),
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		production && terser(), // minify, but only in production

        !production && serve({
            contentBase: 'public',
            host: 'localhost',
            port: 42735
        }),
        !production && livereload('public')
    ]
}