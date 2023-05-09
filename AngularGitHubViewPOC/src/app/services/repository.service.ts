import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  BASE_URL = "https://api.github.com";
  constructor(private http:HttpClient) { }

  getRepository(owner:any,name:any){
    let url = `${this.BASE_URL}/repos/${owner}/${name}`;
    return this.http.get(url);
  }

}
