import {Component, Input, OnInit} from '@angular/core';
import {GroupService} from '../services/group.service';
import {TokenService} from '../services/token.service';
import {User} from '../models/user';
import {FriendGroup} from '../models/friendGroup';

@Component({
  selector: 'app-addusertogroup',
  templateUrl: './addusertogroup.component.html',
  styleUrls: ['./addusertogroup.component.scss']
})
export class AddusertogroupComponent implements OnInit {

  @Input()
  group: FriendGroup;


  groupService: GroupService;
  tokenService: TokenService;
  user: User;

  constructor(groupService: GroupService, tokenService: TokenService) {
    this.user = new User();
    this.group = new FriendGroup();
    this.groupService = groupService;
    this.tokenService = tokenService;
  }

  ngOnInit() {
  }

  addUser() {
    this.groupService.addUserToGroup(this.group, this.user).subscribe();
  }

}
