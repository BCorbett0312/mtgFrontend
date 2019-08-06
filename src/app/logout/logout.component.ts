import { Component, OnInit } from '@angular/core';
import {TokenService} from '../services/token.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public tokenService: TokenService, public cookieService: CookieService) { }

  ngOnInit() {
  }

  logout() {
    this.cookieService.deleteAll('/');
    this.tokenService.isLoggedIn = false;
    this.tokenService.token = '';
  }

}
