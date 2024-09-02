import { Injectable } from '@angular/core';
import { environment } from '../../environments/environmet.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private apiURL = environment.apiURL
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  getAllChampions(): Observable<any> {
    const url = `${this.apiURL}.json`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getChampionByName(name: string): Observable<any> {
    const url = `${this.apiURL}/${name}.json`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
}
