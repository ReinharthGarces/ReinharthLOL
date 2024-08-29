import { Injectable } from '@angular/core';
import { environment } from '../../environments/environmet.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private apiURL = environment.apiURL
  constructor(private http: HttpClient) { }

  getAllChampions(): Observable<any> {
    return this.http.get(this.apiURL).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
