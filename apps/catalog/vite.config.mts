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
    base: 'http://localhost:4174/',
    plugins: [
        federation({
            name: 'remote',
            filename: 'remoteEntry.js',
            exposes: {
                './routes': './src/mf/exposes/routes',
            },
            manifest: true,
            dev: true,
            dts: true,
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
    define: { 'process.env': {} },
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
        port: 3001,
    },
    css: {
        preprocessorOptions: {
            sass: {
                api: 'modern-compiler',
            },
        },
    },
});
