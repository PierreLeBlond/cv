import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie'],
			urlPatterns: [
				{
					pattern: '/:path(.*)?',
					localized: [
						['en', '/:path(.*)?/en'],
						// ✅ make sure to match the least specific path last
						['fr', '/:path(.*)?']
					]
				}
			]
		})
	]
});
