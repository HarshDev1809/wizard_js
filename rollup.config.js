import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',              // Entry point of your package
  output: {
    file: 'dist/wizard_js.js',    // Output file for browser use
    format: 'umd',                // Universal Module Definition
    name: 'wizardJs',             // Global variable name in browsers
    sourcemap: true               // Generate source maps for debugging
  },
  plugins: [
    resolve(),                    // Resolves file paths (e.g., './src/helper/chunk')
    commonjs()                    // Converts CommonJS (require) to ESM for bundling
  ]
};