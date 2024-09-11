import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunesRoutingModule } from './runes-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RunesComponent } from './runes/runes.component';


@NgModule({
  declarations: [
    RunesComponent
  ],
  exports: [
    RunesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RunesRoutingModule
  ]
})
export class RunesModule { }
