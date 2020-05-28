import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseUrl='https://api.github.com';

  constructor(private httpClient:HttpClient ) { }

  getSearchUsers(queryParams) : Promise<Object>{
    // const queryParam = {
    //   q : searchQuery,
    //   page: `${page}`,
    //   per_page: `${perpage}`
    // }
    // const queryParam = {
    //   q : searchQuery,
    //   page: <any>page,
    //   per_page: <any>perpage
    // }
    return this.httpClient.get(`${this.baseUrl}/search/users`, { params:queryParams } ).toPromise();
  }
  
}
