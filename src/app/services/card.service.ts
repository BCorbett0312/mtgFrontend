import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Card} from '../models/card';
import {environment} from '../../environments/environment';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardToPersist: Card;
  cardUrl: string;




  constructor(private http: HttpClient, public tokenService: TokenService) {
    this.cardUrl = environment.apiUrl + '/cards';
  }

  getCards(): Observable <Card[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.token)
      .set('Access-Control-Allow-Credentials',  'true');
    return this.http.get<Card[]>(this.cardUrl, {headers});
  }

  async postCard(card: Card) {
    this.cardToPersist = card;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.token);
    return await this.http.post<Card[]>(this.cardUrl, this.cardToPersist, {headers}).toPromise();

  }

  getGroupCards(groupId: number): Observable <Card[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.token)
      .set('Access-Control-Allow-Credentials',  'true');
    return this.http.get<Card[]>(this.cardUrl + '/' + groupId, {headers});

  }






}
