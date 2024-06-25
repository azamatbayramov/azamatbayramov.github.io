import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/comic.ts',
    output: {file: 'dist/bundle.js'},
    plugins: [resolve(), typescript(), terser()],
};
