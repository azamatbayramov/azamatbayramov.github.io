import { typescript } from '@rollup/plugin-typescript';
import { terser } from '@rollup/plugin-terser';

export default {
    input: 'comic.ts',
    output: {file: 'dist/bundle.js'},
    plugins: [typescript(), terser()],
};
