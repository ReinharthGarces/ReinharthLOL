import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environmet.development';

@Injectable({
  providedIn: 'root'
})

export class RunesService {
  private runesURL = environment.runesURL;
  constructor(private http: HttpClient) { }

  getRunes(): Observable<any> {
    return this.http.get(this.runesURL);
  }
}

