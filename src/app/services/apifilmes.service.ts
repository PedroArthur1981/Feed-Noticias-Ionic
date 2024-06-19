import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApifilmesService {
  private basePath: string = 'https://api.themoviedb.org/3';
  private servicePath: string = "/movie/popular?";
  private apiKey: string = "0ecd4b5ee5f5d71dacddab9be42afecc";
  
  constructor(private http: HttpClient) { }

  public getPopularMovies(page: number, language: string) {
    const endpoint = `${this.basePath}${this.servicePath}api_key=${this.apiKey}&language=${language}&page=${page}`;
    console.log("Fetching from endpoint:", endpoint); // Debugging the endpoint URL
    return this.http.get(endpoint);
  }
}
