import * as esbuild from 'esbuild';
import esbuildPluginTsc from 'esbuild-plugin-tsc';

const settings = {
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  platform: 'node',
  target: 'node20',
  format: 'esm',
  bundle: true,
  minify: true,
  keepNames: true,
  sourcemap: true,
  plugins: [
    esbuildPluginTsc({
      force: true
    })
  ]
};

await esbuild.build(settings);
