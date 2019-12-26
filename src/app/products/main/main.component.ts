import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/loading/loading.component';
import { TableActionNewComponent } from '../table-action-new/table-action-new.component';
import { TableActionEditComponent } from '../table-action-edit/table-action-edit.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private productsService: ProductsService, private dialog: MatDialog) { }

  data: any;

  dialogRef;
  canEdit = false;

  rowId;

  selectedRowId(event) {
    console.log(event);
    this.rowId = event;
    this.canEdit = true;
  }

  ngOnInit() {
    this.dialogRef = this.dialog.open(LoadingComponent);
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe(res => {
      console.log(res);
      this.data = res;
      this.dialogRef.close();
    });
  }

  addNewProduct() {
    const dialogTable = this.dialog.open(TableActionNewComponent);
    dialogTable.afterClosed().subscribe(res => {
      this.dialogRef = this.dialog.open(LoadingComponent);
      this.getProducts();
    })
  }

  editProduct() {
    console.log(this.rowId);
    this.dialog.open(TableActionEditComponent, { data: { id: this.rowId } });
  }

}
