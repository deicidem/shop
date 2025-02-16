import { fileURLToPath, URL } from 'node:url';
import { federation } from '@module-federation/vite';
import Vue from '@vitejs/plugin-vue';
// Plugins
import AutoImport from 'unplugin-auto-import/vite';
import Fonts from 'unplugin-fonts/vite';
import Components from 'unplugin-vue-components/vite';
import VueRouter from 'unplugin-vue-router/vite';

// Utilities
import { defineConfig } from 'vite';
import Layouts from 'vite-plugin-vue-layouts';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [
        federation({
            name: 'root',
            dev: true,
            dts: true,
            filename: 'remoteEntry.js',
            manifest: true,
            shared: ['vue', 'vuetify'],
        }),
        VueRouter({
            dts: 'src/typed-router.d.ts',
        }),
        Layouts(),
        AutoImport({
            imports: [
                'vue',
                {
                    'vue-router/auto': ['useRoute', 'useRouter'],
                },
            ],
            dts: 'src/auto-imports.d.ts',
            eslintrc: {
                enabled: true,
            },
            vueTemplate: true,
        }),
        Components({
            dts: 'src/components.d.ts',
        }),
        Vue({
            template: { transformAssetUrls },
        }),
        // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
        Vuetify({
            autoImport: true,
            styles: {
                configFile: 'src/styles/settings.scss',
            },
        }),
        Fonts({
            google: {
                families: [{
                    name: 'Roboto',
                    styles: 'wght@100;300;400;500;700;900',
                }],
            },
        }),
    ],

    build: {
        target: 'esnext',
        rollupOptions: {
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    define: { 'process.env': {} },
    resolve: {
        dedupe: ['vue', 'vuetify'],
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
    },
    server: {
        port: 3000,
        proxy: {
            // Все запросы к /api будут проксироваться на бекенд
            '/api': {
                target: 'http://localhost:5104', // URL бэкенда
                changeOrigin: true, // Изменить источник запроса, если необходимо
                secure: false, // Если используется HTTP, а не HTTPS
                rewrite: path => path.replace(/^\/api/, ''), // Убираем /api из пути
            },
        },
    },
    css: {
        preprocessorOptions: {
            sass: {
                api: 'modern-compiler',
            },
        },
    },
});
