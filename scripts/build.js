require('esbuild').buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  target: ['node14'],
  outdir: 'dist2'
})
