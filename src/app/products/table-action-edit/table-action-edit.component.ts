import { Component, OnInit, Inject } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { MessageDisplayerService } from 'src/app/services/message-displayer.service';
import { MatDialog } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-table-action-edit',
  templateUrl: './table-action-edit.component.html',
  styleUrls: ['./table-action-edit.component.scss']
})
export class TableActionEditComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private categoriesService: CategoriesService,
    private productService: ProductsService, private messageDisplayer: MessageDisplayerService, private dialog: MatDialog) { }

  categories;
  name;
  quantity;
  price;
  selectedCategory;

  ngOnInit() {
    console.log(this.data);
    this.categoriesService.getAllCategories().subscribe(res => {
      this.categories = res;
    });
    this.productService.getProductById(this.data.id).subscribe(res => {
      console.log(res);
      this.selectedCategory = res.categoryId;
      this.name = res.productName;
      this.quantity = res.quantity;
      this.price = res.price;
    })
  }

}
