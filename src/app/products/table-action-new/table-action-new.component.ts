import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { MessageDisplayerService } from 'src/app/services/message-displayer.service';
import { LoadingComponent } from 'src/app/loading/loading.component';

@Component({
  selector: 'app-table-action-new',
  templateUrl: './table-action-new.component.html',
  styleUrls: ['./table-action-new.component.scss']
})
export class TableActionNewComponent implements OnInit {

  constructor(private categoriesService: CategoriesService,
     private productService: ProductsService, private messageDisplayer: MessageDisplayerService, private dialog:MatDialog) { }

  categories;
  name;
  quantity;
  price;
  selectedCategory;

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe(res => {
      console.log(res);
      this.categories = res;
    });
  }

  submit() {
    const loadingRef = this.dialog.open(LoadingComponent);
    console.log(this.selectedCategory);
    this.productService.addNewProduct(this.name,this.price,this.quantity,this.selectedCategory).subscribe(res => {
      this.messageDisplayer.displayMessage("Product added");
      loadingRef.close();
    })
  }

}
