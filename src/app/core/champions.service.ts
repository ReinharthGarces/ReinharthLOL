import { Injectable } from '@angular/core';
import { environment } from '../../environments/environmet.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private apiURL = environment.apiURL
  private imgURL = environment.imgURL;
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  getAllChampions(): Observable<any> {
    const URL = `${this.apiURL}.json`;
    return this.http.get(URL).pipe(
      catchError(this.handleError)
    );
  }

  getChampionByName(name: string): Observable<any> {
    const URL = `${this.apiURL}/${name}.json`;
    return this.http.get(URL).pipe(
      catchError(this.handleError)
    );
  }

  // Nuevo método para extraer datos de la habilidad pasiva
  extractPassiveData(champData: any) {
    const passive = champData.passive;
    return {
      name: passive.name,
      description: passive.description,
      imageUrl: `${this.imgURL}/passive/${passive.image.full}`
    };
  }

  // Nuevo método para extraer datos de los hechizos
  extractSpellsData(champData: any) {
    const spellLetters = ['Q', 'W', 'E', 'R'];
    return champData.spells.map((spell: any, index: number) => {
      return {
        name: spell.name,
        letter: spellLetters[index], 
        description: spell.description,
        imageUrl: `${this.imgURL}/spell/${spell.image.full}`
      };
    });
  }
}
