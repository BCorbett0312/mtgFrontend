import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token: string;
  isLoggedIn = false;

  constructor() {

  }

}
