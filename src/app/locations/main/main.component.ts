import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/loading/loading.component';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { LocationsService } from 'src/app/services/locations.service';
import { TableActionNewComponent } from '../table-action-new/table-action-new.component';
import { TableActionEditComponent } from '../table-action-edit/table-action-edit.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private locationsService: LocationsService, private dialog: MatDialog) { }

  data: any;

  dialogRef;
  canEditOrDelete = false;

  rowId;

  selectedRowId(event) {
    console.log(event);
    this.rowId = event;
    this.canEditOrDelete = true;
  }

  ngOnInit() {
    this.dialogRef = this.dialog.open(LoadingComponent);
    this.getLocations();
  }

  getLocations() {
    this.locationsService.getAll().subscribe(res => {
      console.log(res);
      res.forEach(x => {
        x.id = x.locationId;
      });
      this.data = res;
      this.dialogRef.close();
    });
  }

  addLocation() {
    const dialogTable = this.dialog.open(TableActionNewComponent);
    dialogTable.afterClosed().subscribe(res => {
      this.dialogRef = this.dialog.open(LoadingComponent);
      this.getLocations();
    })
  }

  editLocation() {
    console.log(this.rowId);
    const dialogTable = this.dialog.open(TableActionEditComponent, { data: { id: this.rowId } });
    dialogTable.afterClosed().subscribe(res => {
      this.dialogRef = this.dialog.open(LoadingComponent);
      this.getLocations();
    })
  }

  deleteLocation() {
    const dialogComponent = this.dialog.open(DialogComponent,{data:
      {dataToDisplay:"Are you sure you want to delete selected location?"}});
    dialogComponent.afterClosed().subscribe(res => {
      if (res === "true") {
        this.dialogRef = this.dialog.open(LoadingComponent);
        this.locationsService.delete(this.rowId).subscribe(res => {
          this.getLocations();
          this.rowId = null;
        })
      }
    });
  }

}
