import { Route } from '@angular/router';

import { SampleMaterialComponent } from './';

export const SAMPLEMATERIAL_ROUTE: Route = {
    path: 'samplematerial',
    component: SampleMaterialComponent,
    data: {
        authorities: [],
        pageTitle: 'localversionApp.samplematerial.title'
    }
};
