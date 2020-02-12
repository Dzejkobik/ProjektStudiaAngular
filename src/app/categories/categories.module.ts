import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module/material/material.module';
import { TableActionEditComponent } from './table-action-edit/table-action-edit.component';
import { TableActionNewComponent } from './table-action-new/table-action-new.component';
import { MainComponent } from './main/main.component';
import { CategoryDataTableComponent } from './category-data-table/category-data-table.component';


@NgModule({
  declarations: [TableActionEditComponent,TableActionNewComponent,MainComponent,CategoryDataTableComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    TableActionEditComponent,
    TableActionNewComponent
  ]
})
export class CategoriesModule { }
