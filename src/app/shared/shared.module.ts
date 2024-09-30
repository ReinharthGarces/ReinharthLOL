import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateTagPipe } from './pipes/translate-tag.pipe';
import { AppTitleSizeDirective } from './directives/title-style.directive';
import { CleanTextPipe } from './pipes/clean-text.pipe';
import { FilterSpellsPipe } from './pipes/filter-spells.pipe';
import { FilterItemsPipe } from './pipes/filter-items.pipe';
import { CleanItemsTextPipe } from './pipes/clean-items-text.pipe';


const materialComponents = [
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatBadgeModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatSidenavModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatTableModule,
  MatListModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatSelectModule,
  MatExpansionModule,
  MatGridListModule,
  MatSnackBarModule
];

@NgModule({
  imports: [ materialComponents ],
  exports: [ 
    materialComponents,
    TranslateTagPipe,
    CleanTextPipe,
    CleanItemsTextPipe,
    FilterSpellsPipe,
    FilterItemsPipe,
    AppTitleSizeDirective
  ],
  declarations: [
    TranslateTagPipe,
    AppTitleSizeDirective,
    CleanTextPipe,
    CleanItemsTextPipe,
    FilterSpellsPipe,
    FilterItemsPipe,
  ]
})

export class SharedModule { }
