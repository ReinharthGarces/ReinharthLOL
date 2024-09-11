import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: 'home',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'champions',
    loadChildren: () => import('./features/champions/champions.module').then(m => m.ChampionsModule)
  },
  {
    path: 'spells',
    loadChildren: () => import('./features/spells/spells.module').then(m => m.SpellsModule)
  },
  {
    path: 'runes',
    loadChildren: () => import('./features/runes/runes.module').then(m => m.RunesModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./features/items/items.module').then(m => m.ItemsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
