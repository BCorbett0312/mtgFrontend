import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authUrl: string;

  constructor(private http: HttpClient) {
    this.authUrl = environment.apiUrl + '/signin';
  }


  signin(username: string, password: string): Observable <string> {
    return this.http.post(this.authUrl, {}, {
      params: {username, password},
      responseType: 'text'
    });
  }


}
