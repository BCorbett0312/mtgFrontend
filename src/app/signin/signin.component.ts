import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {TokenService} from '../services/token.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  username: string;
  password: string;

  authService: AuthService;
  tokenService: TokenService;
  cookieService: CookieService;

  constructor(authService: AuthService, tokenService: TokenService, cookieService: CookieService) {
    this.authService = authService;
    this.tokenService = tokenService;
    this.cookieService = cookieService;
   }

  ngOnInit() {
    if (this.cookieService.check('token')) {
      this.tokenService.token = this.cookieService.get('token');
      this.authService.checkTokenValidity().subscribe(data => this.authService.authUser = data);
      this.tokenService.isLoggedIn = true;
    }

  }

  async signIn() {
    await this.authService.signin(this.username, this.password).subscribe(jwt => {
      this.tokenService.token = jwt;
      this.tokenService.isLoggedIn = true;
      this.cookieService.set('token', this.tokenService.token, );
      this.authService.loadGroupsAndUsers().subscribe(data => this.authService.authUser = data);
    });
  }
}
