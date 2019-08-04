import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {TokenService} from '../services/token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Input()
  username: string;
  @Input()
  password: string;
  // @Input()
  // jwt: string;

  authService: AuthService;
  tokenService: TokenService;

  constructor(authService: AuthService, tokenService: TokenService) {
    this.authService = authService;
    this.tokenService = tokenService;
   }

  ngOnInit() {
  }

  signIn() {
    this.authService.signin(this.username, this.password).subscribe(jwt => {
      this.tokenService.token = jwt;
    });
  }

}
