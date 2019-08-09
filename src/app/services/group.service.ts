import { Injectable } from '@angular/core';
import {FriendGroup} from '../models/friendGroup';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TokenService} from './token.service';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groupToPersist: FriendGroup;
  groupUrl: string;

  constructor(private http: HttpClient, public tokenService: TokenService) {
    this.groupUrl = environment.apiUrl + '/group';
  }

  async createNewGroup(group: FriendGroup) {
    this.groupToPersist = group;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.token);
    return this.http.post(this.groupUrl, this.groupToPersist, {headers}).toPromise();
  }

  getGroups(): Observable<FriendGroup[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.token);
    return this.http.get<FriendGroup[]>(this.groupUrl, {headers});
  }

  addUserToGroup(group: FriendGroup, user: User) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.token);
    const params = new HttpParams().set('groupName', group.name).set('userName', user.username);
    return this.http.post(this.groupUrl + '/invite', {}, {headers, params});
  }

}
