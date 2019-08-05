import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Card} from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardToPersist: Card;

  url = 'http://localhost:8080/cards';


  constructor(private http: HttpClient) { }

  getCards(token: string): Observable <Card[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Access-Control-Allow-Credentials',  'true');
    return this.http.get<Card[]>(this.url, {headers});
  }

  getCardImages(name: string): Observable <string> {
    const params = new HttpParams().set('exact', name).set('Version', 'normal').set('Format', 'image');
    console.log(params);
    return this.http.get<string>('https://api.scryfall.com/cards/named', {params});
  }

  postCard(card: Card, token: string) {
    this.cardToPersist = card;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    this.http.post(this.url, this.cardToPersist, {headers}).subscribe();

  }






}
