import { Component, OnInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Product {
  Id: number,
  ProductName: string;
  CategoryName: string,
  Price: number,
  Quantity: number
}

@Component({
  selector: 'app-products-data-table',
  templateUrl: './products-data-table.component.html',
  styleUrls: ['./products-data-table.component.scss']
})
export class ProductsDataTableComponent implements OnInit, OnChanges {

  displayedColumns: string[] = ['id', 'productName', 'categoryName', 'price', 'quantity'];
  dataSource: MatTableDataSource<Product>;
  @Input()
  data:any;

  @Output()
  selectedRowId : EventEmitter<number> = new EventEmitter<number>();

  selectedId;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnChanges(changes) {
    console.log(changes);
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  rowClicked(row) {
    this.selectedId = row.id;
    this.selectedRowId.emit(row.id);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
