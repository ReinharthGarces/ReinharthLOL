import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsDetailsComponent } from './champions-details/champions-details.component';
import { ChampionsComponent } from './champions/champions.component';

const routes: Routes = [
  {
    path: '',
    component: ChampionsComponent
  },
  {
    path: 'details/:name',
    component: ChampionsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampionsRoutingModule { }
