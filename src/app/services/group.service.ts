import { Injectable } from '@angular/core';
import {FriendGroup} from '../models/friendGroup';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TokenService} from './token.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groupToPersist: FriendGroup;
  groupUrl: string;

  constructor(private http: HttpClient, public tokenService: TokenService) {
    this.groupUrl = environment.apiUrl + '/group';
  }

  createNewGroup(group: FriendGroup): Observable<FriendGroup> {
    this.groupToPersist = group;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.token);
    return this.http.post<FriendGroup>(this.groupUrl, this.groupToPersist, {headers});
  }

}
