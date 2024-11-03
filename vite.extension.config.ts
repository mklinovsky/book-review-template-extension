import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		emptyOutDir: false,
		target: 'esnext',
		rollupOptions: {
			input: ['./src/extension-scripts/content-script.ts'],
			output: {
				entryFileNames: 'assets/[name].js',
			},
		},
	},
});
