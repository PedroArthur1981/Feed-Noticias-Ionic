import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'e8727100-23ab-11ef-aa85-0242ac130004-e8727196-23ab-11ef-aa85-0242ac130004'; // Substitua pela sua chave de API do Storm Glass
  private apiUrl = 'https://api.stormglass.io/v2/weather/point';

  constructor(private http: HttpClient) {}

  getTemperature(lat: number, lng: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', this.apiKey);
    return this.http.get(this.apiUrl, {
      headers: headers,
      params: {
        lat: lat.toString(),
        lng: lng.toString(),
        params: 'airTemperature',
        source: 'sg'
      }
    });
  }
}
