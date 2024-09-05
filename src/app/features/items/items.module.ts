import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items/items.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  exports:[
    ItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
