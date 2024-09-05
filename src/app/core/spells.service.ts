import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  private apiUrl = 'https://ddragon.leagueoflegends.com/cdn/14.17.1/data/es_ES/summoner.json';

  constructor(private http: HttpClient) { }

  getSpells(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
