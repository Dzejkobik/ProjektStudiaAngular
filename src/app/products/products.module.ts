import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MainComponent } from './main/main.component';
import { ProductsDataTableComponent } from './products-data-table/products-data-table.component';
import { MaterialModule } from '../material-module/material/material.module';
import { TableActionNewComponent } from './table-action-new/table-action-new.component';
import { FormsModule } from '@angular/forms';
import { TableActionEditComponent } from './table-action-edit/table-action-edit.component';


@NgModule({
  declarations: [MainComponent, ProductsDataTableComponent, TableActionNewComponent, TableActionEditComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    TableActionNewComponent,
    TableActionEditComponent
  ]
})
export class ProductsModule { }
