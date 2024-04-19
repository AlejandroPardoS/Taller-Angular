import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './Serie';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }

  getAverage(series: Array<Serie>): Observable<number> {
    return new Observable<number>(subscriber => {
    const total = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const average = total / series.length;
    subscriber.next(average);
    subscriber.complete();
  });
  }
}  
