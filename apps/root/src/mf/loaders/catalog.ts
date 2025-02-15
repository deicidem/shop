import type { CatalogRoutes } from '@mf-catalog/routes';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { type RouteRecord, type RouteRecordRaw, RouterView } from 'vue-router';

export const catalogRouteKey = 'catalog';

export const catalogRouteWrapper: RouteRecordRaw = {
    path: '/catalog',
    name: catalogRouteKey,
    component: RouterView,
};

export async function loadCatalogRoutes() {
    console.log('load catalog routes');

    try {
        const importRes = await loadRemote('catalog/routes') as any;
        return importRes.default as CatalogRoutes;
    }
    catch (error) {
        console.error(error);
    }
}
