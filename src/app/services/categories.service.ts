import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<any>(`${environment.apiBaseUrl}/Category/GetAll`);
  }

  deleteCategory(categoryId) {
    return this.http.delete<any>(`${environment.apiBaseUrl}/Category/deletecategory?categoryId=${categoryId}`)
  }

  addNewCategory(name) {
    let obj = {
      Name: name
    }
    return this.http.post<any>(`${environment.apiBaseUrl}/category/addcategory`, obj);
  }

  getCategoryById(categoryId) {
    return this.http.get<any>(`${environment.apiBaseUrl}/category/getCategory?categoryId=${categoryId}`);
  }

  editCategory(name, categoryId) {
    let obj = {
      Name: name,
      Id: categoryId
    }
    return this.http.post<any>(`${environment.apiBaseUrl}/category/editCategory`, obj);
  }
}
