import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseUrl='https://api.github.com';

  constructor(private httpClient:HttpClient ) { }

  getSearchUsers(queryParams) : Promise<Object>{
    return this.httpClient.get(`${this.baseUrl}/search/users`, { params:queryParams } ).toPromise();
  }

  getUsersRepoDetails(user){
    return this.httpClient.get(`https://api.github.com/users/${user}/repos`).toPromise()
  }
  
}
