import { Component, OnInit } from '@angular/core';
import {CardService} from '../services/card.service';
import {TokenService} from '../services/token.service';
import {AuthService} from '../services/auth.service';
import {FriendGroup} from '../models/friendGroup';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GroupService} from '../services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  cardService: CardService;
  tokenService: TokenService;
  authService: AuthService;
  group: FriendGroup;
  groupService: GroupService;

  constructor(cardService: CardService, tokenService: TokenService, authService: AuthService,
              public modalService: NgbModal, groupService: GroupService) {
    this.cardService = cardService;
    this.tokenService = tokenService;
    this.authService = authService;
    this.groupService = groupService;
    this.group = new FriendGroup();
  }

  ngOnInit() {
  }

  createNewGroup() {
    this.modalService.dismissAll();
    this.groupService.createNewGroup(this.group).subscribe();
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
