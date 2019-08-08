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

  getCards(token: string): Observable <Card[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Access-Control-Allow-Credentials',  'true');
    return this.http.get<Card[]>(this.cardUrl, {headers});
  }

  postCard(card: Card) {
    this.cardToPersist = card;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.token);
    this.http.post(this.cardUrl, this.cardToPersist, {headers}).subscribe();

  }






}
