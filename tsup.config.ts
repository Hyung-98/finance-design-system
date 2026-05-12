import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'components/fds/index.ts',
    utils: 'lib/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: {
    compilerOptions: {
      incremental: false,
    },
  },
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'next', 'next-themes'],
})
