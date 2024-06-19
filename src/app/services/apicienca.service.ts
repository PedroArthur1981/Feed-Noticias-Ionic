import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiciencaService {
  private urlBase: string = 'https://gnews.io/api/v4/top-headlines?category=science&lang=pt&country=br';

  constructor(private http: HttpClient) { }

  public getgNews(apikey: string, page: number) {
    const fullUrl = `${this.urlBase}&max=10&page=${page}&apikey=${apikey}`;
    console.log('Fetching news from:', fullUrl);
    return this.http.get(fullUrl);
  }
}




