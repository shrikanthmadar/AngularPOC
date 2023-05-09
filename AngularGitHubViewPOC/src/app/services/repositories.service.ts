import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  BASE_URL = "https://api.github.com";
  constructor(private http:HttpClient) { }

  getRepositories(repoName:any,language:any,userName:any,sortType:any,sortBy:any,perPage:any,pageNumber:any){
    let query = repoName;
    query += language ? `+language:${language}` : "";
    query += userName ? `+user:${userName}` : "";
    query += ` sort:${sortBy}-${sortType}`;
  const url = `${this.BASE_URL}/search/repositories?q=${query}&order=${sortType}&per_page=${perPage}&page=${pageNumber}`;
  return this.http.get(url)
  }
}
