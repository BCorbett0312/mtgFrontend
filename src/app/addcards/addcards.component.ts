import { Component, OnInit } from '@angular/core';
import {CardService} from '../services/card.service';
import {TokenService} from '../services/token.service';
import { FormControl } from '@angular/forms';
import {Card} from '../models/card';
import {AutocompleteService} from '../services/autocomplete.service';
import {Catalog} from '../models/catalog';
import {debounceTime, map} from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/internal/operators/distinctUntilChanged';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-addcards',
  templateUrl: './addcards.component.html',
  styleUrls: ['./addcards.component.scss']
})
export class AddcardsComponent implements OnInit {

  authService: AuthService;
  cardService: CardService;
  tokenService: TokenService;
  card: Card;
  results: Catalog;
  queryField: FormControl = new FormControl();
  autocompleteService: AutocompleteService;

  constructor(cardService: CardService, tokenService: TokenService, autocompleteService: AutocompleteService, authService: AuthService) {
    this.cardService = cardService;
    this.tokenService = tokenService;
    this.autocompleteService = autocompleteService;
    this.authService = authService;
  }

  ngOnInit() {
    this.queryField.valueChanges
      .subscribe(queryField => this.autocompleteService.search(queryField)
        .subscribe(data => this.results = data));
  }



  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.results.data.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )


  addCard() {
    this.card = new Card();
    this.card.name = (document.getElementById('addcard') as HTMLInputElement).value;
    this.cardService.postCard(this.card).then(data => this.authService.authUser.cards = data);
    }
}
