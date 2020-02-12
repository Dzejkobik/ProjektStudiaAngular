import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiUrl = "https://localhost:44380/api"

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(`${this.apiUrl}/countries/getall`);
  }
}
