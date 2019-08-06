import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../services/auth.service';

import {User} from '../models/user';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TokenService} from '../services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./signup.component.scss']

})
export class SignupComponent implements OnInit {

  user: User;

  constructor(public authService: AuthService, public modalService: NgbModal, public tokenService: TokenService) {
    this.user = new User();
  }

  ngOnInit() {
  }


  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }


  createNewUser() {
    this.modalService.dismissAll();
    this.authService.signup(this.user).subscribe(jwt => this.tokenService.token = jwt);
  }




}
