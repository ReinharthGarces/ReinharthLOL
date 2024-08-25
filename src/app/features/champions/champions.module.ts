import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsDetailsComponent } from './champions-details/champions-details.component';
import { ChampionsRoutingModule } from './champions-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ChampionsDetailsComponent,
  ],
  exports: [
    ChampionsDetailsComponent,
  ],  
  imports: [
    CommonModule,
    SharedModule,
    ChampionsRoutingModule,
  ]
})
export class ChampionsModule { }
