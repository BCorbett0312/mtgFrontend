import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Card} from './models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Card[];

  constructor(private http: HttpClient) { }

  getCards(token: string): Observable <Card[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Access-Control-Allow-Credentials',  'true');
    return this.http.get<Card[]>('http://localhost:8080/cards', {headers});
  }

  getCardImages(name: string): Observable <string> {
    const params = new HttpParams().set('exact', name).set('Version', 'normal').set('Format', 'image');
    console.log(params);
    return this.http.get<string>('https://api.scryfall.com/cards/named', {params});
  }





}
