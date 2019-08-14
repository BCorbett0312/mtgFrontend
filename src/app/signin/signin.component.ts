import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {TokenService} from '../services/token.service';
import {CookieService} from 'ngx-cookie-service';
import {map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {GroupService} from '../services/group.service';
import {CardService} from '../services/card.service';

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
  cardService: CardService;
  groupService: GroupService;

  constructor(authService: AuthService, tokenService: TokenService, cookieService: CookieService,
              groupService: GroupService, cardService: CardService) {
    this.authService = authService;
    this.tokenService = tokenService;
    this.cookieService = cookieService;
    this.groupService = groupService;
    this.cardService = cardService;
   }

  async ngOnInit() {

    if (this.cookieService.check('token')) {
      this.tokenService.token = this.cookieService.get('token');
      await this.authService.checkTokenValidity().then(data => this.authService.authUser = data);
      this.updateLoginStatus();
      this.loadUserCardsAndGroups();
    }
  }

  updateLoginStatus() {
    if (this.authService.authUser.username === '') {
      this.tokenService.isLoggedIn = false;
    } else { this.tokenService.isLoggedIn = true; }
  }

  async signIn() {
    await this.authService.signin(this.username, this.password).subscribe(jwt => {
      this.tokenService.token = jwt;
      this.tokenService.isLoggedIn = true;
      this.cookieService.set('token', this.tokenService.token, );
      this.loadUserCardsAndGroups();
    });
  }

  loadUserCardsAndGroups() {
    this.authService.loadUser().subscribe(data => this.authService.authUser = data);
    this.cardService.getCards().subscribe(data => this.authService.authUser.cards = data);
    this.groupService.getGroups().subscribe(data => this.authService.authUser.groups = data);
  }
}
