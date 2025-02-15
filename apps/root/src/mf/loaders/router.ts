import type { Router } from 'vue-router';
import { catalogRouteKey, loadCatalogRoutes } from './catalog';

export async function addMFRoutes(router: Router) {
    const catalogRoutes = await loadCatalogRoutes();
    console.log('catalogRoutes', catalogRoutes);

    if (catalogRoutes) {
        router.addRoute(catalogRouteKey, catalogRoutes[0]);
    }

    router.replace(router.currentRoute.value.fullPath);
}
