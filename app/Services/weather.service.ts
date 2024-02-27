import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  BaseURL = 'https://api.openweathermap.org/data/2.5/weather'
  APIKey = 'a953c86926aa8452f4184b17663d9bcd'
  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable <WeatherData> {
    return this.http.get<WeatherData>(this.BaseURL, {
      params: new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('mode', 'json')
      .set('appid', this.APIKey)
    })
  }
}
