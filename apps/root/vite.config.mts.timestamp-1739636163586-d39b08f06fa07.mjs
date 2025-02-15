// vite.config.mts
import { fileURLToPath, URL } from "node:url";
import { federation } from "file:///D:/Code/Study/diplom/shop/node_modules/@module-federation/vite/lib/index.cjs";
import Vue from "file:///D:/Code/Study/diplom/shop/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/Code/Study/diplom/shop/node_modules/unplugin-auto-import/dist/vite.js";
import Fonts from "file:///D:/Code/Study/diplom/shop/node_modules/unplugin-fonts/dist/vite.mjs";
import Components from "file:///D:/Code/Study/diplom/shop/node_modules/unplugin-vue-components/dist/vite.js";
import VueRouter from "file:///D:/Code/Study/diplom/shop/node_modules/unplugin-vue-router/dist/vite.js";
import { defineConfig } from "file:///D:/Code/Study/diplom/shop/node_modules/vite/dist/node/index.js";
import Layouts from "file:///D:/Code/Study/diplom/shop/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Vuetify, { transformAssetUrls } from "file:///D:/Code/Study/diplom/shop/node_modules/vite-plugin-vuetify/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/Code/Study/diplom/shop/apps/root/vite.config.mts";
var vite_config_default = defineConfig({
  plugins: [
    federation({
      name: "root",
      dev: true,
      dts: true,
      filename: "remoteEntry.js",
      manifest: true,
      shared: ["vue", "vuetify"]
    }),
    VueRouter({
      dts: "src/typed-router.d.ts"
    }),
    Layouts(),
    AutoImport({
      imports: [
        "vue",
        {
          "vue-router/auto": ["useRoute", "useRouter"]
        }
      ],
      dts: "src/auto-imports.d.ts",
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    }),
    Components({
      dts: "src/components.d.ts"
    }),
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/settings.scss"
      }
    }),
    Fonts({
      google: {
        families: [{
          name: "Roboto",
          styles: "wght@100;300;400;500;700;900"
        }]
      }
    })
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  define: { "process.env": {} },
  resolve: {
    dedupe: ["vue", "vuetify"],
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    },
    extensions: [
      ".js",
      ".json",
      ".jsx",
      ".mjs",
      ".ts",
      ".tsx",
      ".vue"
    ]
  },
  server: {
    port: 3e3
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern-compiler"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcQ29kZVxcXFxTdHVkeVxcXFxkaXBsb21cXFxcc2hvcFxcXFxhcHBzXFxcXHJvb3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENvZGVcXFxcU3R1ZHlcXFxcZGlwbG9tXFxcXHNob3BcXFxcYXBwc1xcXFxyb290XFxcXHZpdGUuY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ29kZS9TdHVkeS9kaXBsb20vc2hvcC9hcHBzL3Jvb3Qvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5pbXBvcnQgeyBmZWRlcmF0aW9uIH0gZnJvbSAnQG1vZHVsZS1mZWRlcmF0aW9uL3ZpdGUnO1xyXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XHJcbi8vIFBsdWdpbnNcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XHJcbmltcG9ydCBGb250cyBmcm9tICd1bnBsdWdpbi1mb250cy92aXRlJztcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJztcclxuXHJcbi8vIFV0aWxpdGllc1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnO1xyXG5pbXBvcnQgVnVldGlmeSwgeyB0cmFuc2Zvcm1Bc3NldFVybHMgfSBmcm9tICd2aXRlLXBsdWdpbi12dWV0aWZ5JztcclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBmZWRlcmF0aW9uKHtcclxuICAgICAgICAgICAgbmFtZTogJ3Jvb3QnLFxyXG4gICAgICAgICAgICBkZXY6IHRydWUsXHJcbiAgICAgICAgICAgIGR0czogdHJ1ZSxcclxuICAgICAgICAgICAgZmlsZW5hbWU6ICdyZW1vdGVFbnRyeS5qcycsXHJcbiAgICAgICAgICAgIG1hbmlmZXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzaGFyZWQ6IFsndnVlJywgJ3Z1ZXRpZnknXSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBWdWVSb3V0ZXIoe1xyXG4gICAgICAgICAgICBkdHM6ICdzcmMvdHlwZWQtcm91dGVyLmQudHMnLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIExheW91dHMoKSxcclxuICAgICAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgICAgICAgJ3Z1ZScsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3Z1ZS1yb3V0ZXIvYXV0byc6IFsndXNlUm91dGUnLCAndXNlUm91dGVyJ10sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxyXG4gICAgICAgICAgICBlc2xpbnRyYzoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgQ29tcG9uZW50cyh7XHJcbiAgICAgICAgICAgIGR0czogJ3NyYy9jb21wb25lbnRzLmQudHMnLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFZ1ZSh7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7IHRyYW5zZm9ybUFzc2V0VXJscyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS1sb2FkZXIvdHJlZS9tYXN0ZXIvcGFja2FnZXMvdml0ZS1wbHVnaW4jcmVhZG1lXHJcbiAgICAgICAgVnVldGlmeSh7XHJcbiAgICAgICAgICAgIGF1dG9JbXBvcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnRmlsZTogJ3NyYy9zdHlsZXMvc2V0dGluZ3Muc2NzcycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgRm9udHMoe1xyXG4gICAgICAgICAgICBnb29nbGU6IHtcclxuICAgICAgICAgICAgICAgIGZhbWlsaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdSb2JvdG8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogJ3dnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs5MDAnLFxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICB0YXJnZXQ6ICdlc25leHQnLFxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdnVlOiAnVnVlJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZWZpbmU6IHsgJ3Byb2Nlc3MuZW52Jzoge30gfSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgICBkZWR1cGU6IFsndnVlJywgJ3Z1ZXRpZnknXSxcclxuICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4dGVuc2lvbnM6IFtcclxuICAgICAgICAgICAgJy5qcycsXHJcbiAgICAgICAgICAgICcuanNvbicsXHJcbiAgICAgICAgICAgICcuanN4JyxcclxuICAgICAgICAgICAgJy5tanMnLFxyXG4gICAgICAgICAgICAnLnRzJyxcclxuICAgICAgICAgICAgJy50c3gnLFxyXG4gICAgICAgICAgICAnLnZ1ZScsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgICBwb3J0OiAzMDAwLFxyXG4gICAgfSxcclxuICAgIGNzczoge1xyXG4gICAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICAgICAgc2Fzczoge1xyXG4gICAgICAgICAgICAgICAgYXBpOiAnbW9kZXJuLWNvbXBpbGVyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlMsU0FBUyxlQUFlLFdBQVc7QUFDOVUsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTyxTQUFTO0FBRWhCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sV0FBVztBQUNsQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGVBQWU7QUFHdEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sV0FBVywwQkFBMEI7QUFaZ0osSUFBTSwyQ0FBMkM7QUFjN08sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsV0FBVztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsUUFBUSxDQUFDLE9BQU8sU0FBUztBQUFBLElBQzdCLENBQUM7QUFBQSxJQUNELFVBQVU7QUFBQSxNQUNOLEtBQUs7QUFBQSxJQUNULENBQUM7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNMO0FBQUEsUUFDQTtBQUFBLFVBQ0ksbUJBQW1CLENBQUMsWUFBWSxXQUFXO0FBQUEsUUFDL0M7QUFBQSxNQUNKO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDYjtBQUFBLE1BQ0EsYUFBYTtBQUFBLElBQ2pCLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNQLEtBQUs7QUFBQSxJQUNULENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNBLFVBQVUsRUFBRSxtQkFBbUI7QUFBQSxJQUNuQyxDQUFDO0FBQUE7QUFBQSxJQUVELFFBQVE7QUFBQSxNQUNKLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxRQUNKLFlBQVk7QUFBQSxNQUNoQjtBQUFBLElBQ0osQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLE1BQ0YsUUFBUTtBQUFBLFFBQ0osVUFBVSxDQUFDO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsUUFDWixDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0osQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNYLFFBQVE7QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNMLEtBQUs7QUFBQSxRQUNUO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRLEVBQUUsZUFBZSxDQUFDLEVBQUU7QUFBQSxFQUM1QixTQUFTO0FBQUEsSUFDTCxRQUFRLENBQUMsT0FBTyxTQUFTO0FBQUEsSUFDekIsT0FBTztBQUFBLE1BQ0gsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN4RDtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osTUFBTTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNELHFCQUFxQjtBQUFBLE1BQ2pCLE1BQU07QUFBQSxRQUNGLEtBQUs7QUFBQSxNQUNUO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
