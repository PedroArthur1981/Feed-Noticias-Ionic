import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApijornalismoService {
  private chave = 'de5f7a5db7c649deb783b9b19d5fa989';
  private caminho = 'https://newsapi.org/v2/everything';


  constructor(private http: HttpClient) { }

  public getgNews() {
    const url = `${this.caminho}`;
    console.log('Fetching news from:', url);
    return this.http.get(url);
  } 
}
