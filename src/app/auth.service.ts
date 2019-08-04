import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  signin(username: string, password: string): Observable <string> {
    return this.http.post('http://localhost:8080/signin', {}, {
      params: {username, password},
      responseType: 'text'
    });
  }


}
