import * as esbuild from 'esbuild';

const settings = {
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.mjs',

  platform: 'node',
  target: 'node22',
  format: 'esm',
  mainFields: ['module', 'main'],
  bundle: true,
  minify: true,
  keepNames: true,
  sourcemap: true
};

await esbuild.build(settings);
