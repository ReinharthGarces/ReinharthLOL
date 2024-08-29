import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsDetailsComponent } from './features/champions/champions-details/champions-details.component';

const routes: Routes = [{
    path: 'champions',
    loadChildren: () => import('./features/champions/champions.module').then(m => m.ChampionsModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
