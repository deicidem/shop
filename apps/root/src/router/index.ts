import { catalogRouteWrapper } from '@/mf/loaders/catalog';
import { addMFRoutes } from '@/mf/loaders/router';
import { setupLayouts } from 'virtual:generated-layouts';
// Composables
import { createRouter, createWebHistory, RouterView } from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...setupLayouts(routes),
        ...setupLayouts([catalogRouteWrapper]),
    ],
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
    if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
        if (!localStorage.getItem('vuetify:dynamic-reload')) {
            console.warn('Reloading page to fix dynamic import error');
            localStorage.setItem('vuetify:dynamic-reload', 'true');
            location.assign(to.fullPath);
        }
        else {
            console.error('Dynamic import error, reloading page did not fix it', err);
        }
    }
    else {
        console.error(err);
    }
});

router.isReady().then(() => {
    addMFRoutes(router);
    localStorage.removeItem('vuetify:dynamic-reload');
});

export default router;
