import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantesComponent } from './plantes/plantes.component';
import { HistoriqueComponent } from './historique/historique.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'plantes', component: PlantesComponent },
      { path: 'historique', component: HistoriqueComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./authentification/authentification.component').then(
        (m) => m.AuthentificationComponent
      ),
  },
];
