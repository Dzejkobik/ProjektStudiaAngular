import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { LoadingComponent } from 'src/app/loading/loading.component';
import { TableActionNewComponent } from '../table-action-new/table-action-new.component';
import { TableActionEditComponent } from '../table-action-edit/table-action-edit.component';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private categoriesService: CategoriesService, private dialog: MatDialog) { }

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
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getAllCategories().subscribe(res => {
      console.log(res);
      this.data = res;
      this.dialogRef.close();
    });
  }

  addNewCategory() {
    const dialogTable = this.dialog.open(TableActionNewComponent);
    dialogTable.afterClosed().subscribe(res => {
      this.dialogRef = this.dialog.open(LoadingComponent);
      this.getCategories();
    })
  }

  editCategory() {
    console.log(this.rowId);
    const dialogTable = this.dialog.open(TableActionEditComponent, { data: { id: this.rowId } });
    dialogTable.afterClosed().subscribe(res => {
      this.dialogRef = this.dialog.open(LoadingComponent);
      this.getCategories();
    })
  }

  deleteCategory() {
    const dialogComponent = this.dialog.open(DialogComponent,{data:
      {dataToDisplay:"Are you sure you want to delete selected category?"}});
    dialogComponent.afterClosed().subscribe(res => {
      if (res === "true") {
        this.dialogRef = this.dialog.open(LoadingComponent);
        this.categoriesService.deleteCategory(this.rowId).subscribe(res => {
          this.getCategories();
        })
      }
    });
  }

}
