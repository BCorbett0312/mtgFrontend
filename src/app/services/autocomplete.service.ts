import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Catalog} from '../models/catalog';


@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  url = 'https://api.scryfall.com/cards/autocomplete?q=';

  constructor(private http: HttpClient) { }

  search(queryString: string) {
    let sendTo = this.url + queryString;
    console.log(sendTo);
    return this.http.get<Catalog>(sendTo);
  }
}
