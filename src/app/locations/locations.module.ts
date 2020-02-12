import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { MainComponent } from './main/main.component';
import { LocationsDataTableComponent } from './locations-data-table/locations-data-table.component';
import { TableActionEditComponent } from './table-action-edit/table-action-edit.component';
import { TableActionNewComponent } from './table-action-new/table-action-new.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module/material/material.module';


@NgModule({
  declarations: [MainComponent, LocationsDataTableComponent, TableActionEditComponent, TableActionNewComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [TableActionEditComponent,TableActionNewComponent]
})
export class LocationsModule { }
