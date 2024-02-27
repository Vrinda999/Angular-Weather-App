import { Component, OnInit } from '@angular/core';
import { WeatherService } from './Services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  city: string = 'New Delhi';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.city = '';
  }

  onSubmit() {
    this.getWeatherData(this.city);
    this.city = '';
  }

  private getWeatherData(city: string) {
    this.weatherService.getWeatherData(city)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    })
  }
}
