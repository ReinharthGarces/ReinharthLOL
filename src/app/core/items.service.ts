import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environmet.development';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  private itemsURL = environment.itemsURL;
  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    return this.http.get(this.itemsURL);
  }
}
