import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environmet.development';

@Injectable({
  providedIn: 'root'
})

export class SpellsService {
  private spellsURL = environment.spellsURL;
  constructor(private http: HttpClient) { }

  getSpells(): Observable<any> {
    return this.http.get(this.spellsURL );
  }
}
