import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RunesService {

  private apiUrl = 'https://ddragon.leagueoflegends.com/cdn/14.17.1/data/es_ES/runesReforged.json';

  constructor(private http: HttpClient) { }

  getRunes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

