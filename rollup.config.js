const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

const isProdEnv = process.env.NODE_ENV === 'production';


/** @type {import('rollup').RollupOptions} */
module.exports = {
  input: './src/index.tsx',
  output: [
    {
      file: `./lib/index.js`,
      format: 'commonjs'
    }
  ],
  plugins: [
    nodeResolve({
      extensions,
      modulesOnly: true
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions
    }),
    replace({
      __DEV__: `process.env.NODE_ENV !== 'production'`
    })
  ],
  external: ['react']
};
