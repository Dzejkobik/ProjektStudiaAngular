import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Product } from 'src/app/products/products-data-table/products-data-table.component';

@Component({
  selector: 'app-locations-data-table',
  templateUrl: './locations-data-table.component.html',
  styleUrls: ['./locations-data-table.component.scss']
})
export class LocationsDataTableComponent implements OnInit {

  displayedColumns: string[] = ['locationId', 'streetAddress', 'postalCode', 'city', 'stateProvince','countryId'];
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
