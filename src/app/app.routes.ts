import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ToursComponent } from './tours/tours.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
    {
        path: 'FAQ',
        component: LandingPageComponent,
    },
    {
        path: 'passeios',
        component: ToursComponent,
    },
    {
        path: '**',
        redirectTo: '',
    }
];
