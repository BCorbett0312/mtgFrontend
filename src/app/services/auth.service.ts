import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authUrl: string;
  public newUserUrl: string;
  public validateUrl: string;
  public authUser: User;


  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.authUrl = environment.apiUrl + '/signin';
    this.newUserUrl = environment.apiUrl + '/signup';
    this.validateUrl = environment.apiUrl + '/me';
    this.authUser = new User();
  }


  signin(username: string, password: string): Observable <string> {
    return this.http.post(this.authUrl, {}, {
      params: {username, password},
      responseType: 'text'
    });
  }

  signup(user: User): Observable <string> {
    return this.http.post(this.newUserUrl, user, {responseType: 'text'});
  }

  async checkTokenValidity() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.token);
    return await this.http.get<User>(this.validateUrl, {headers}).toPromise();
  }

  loadUser(): Observable<User> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.token);
    return this.http.get<User>(this.validateUrl, {headers});
  }


}
