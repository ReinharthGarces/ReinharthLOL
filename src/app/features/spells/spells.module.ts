import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellsRoutingModule } from './spells-routing.module';
import { SpellsComponent } from './spells/spells.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SpellsComponent
  ],
  exports: [
    SpellsComponent
  ],
  imports: [
    CommonModule,
    SpellsRoutingModule,
    SharedModule
  ]
})
export class SpellsModule { }
