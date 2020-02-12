import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  apiUrl = "https://localhost:44380/api"
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(`${this.apiUrl}/locations/getall`)
  }

  getById(id) {
    return this.http.get<any>(`${this.apiUrl}/locations/getById/${id}`)
  }

  update(id,obj) {
    return this.http.put<any>(`${this.apiUrl}/locations/update/${id}`,obj);
  }

  delete(id) {
    return this.http.delete<any>(`${this.apiUrl}/locations/delete/${id}`);
  }
  
  add(obj) {
    return this.http.post<any>(`${this.apiUrl}/locations/add`,obj);
  }
}
