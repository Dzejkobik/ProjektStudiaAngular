import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(`${environment.apiBaseUrl}/product/allproducts`);
  }

  addNewProduct(name,price,quantity,category) {
    let obj = {
      Name: name,
      Price: price,
      Quantity: quantity,
      CategoryId: category
    }
    return this.http.post<any>(`${environment.apiBaseUrl}/product/addProduct`,obj);
  }

  getProductById(productId) {
    return this.http.get<any>(`${environment.apiBaseUrl}/product/getproduct?productId=${productId}`);
  }
}
