import { Component, OnInit } from '@angular/core';
import {CardService} from '../services/card.service';
import {TokenService} from '../services/token.service';
import { FormControl } from '@angular/forms';
import {Card} from '../models/card';
import {AutocompleteService} from '../services/autocomplete.service';
import {Catalog} from '../models/catalog';


@Component({
  selector: 'app-addcards',
  templateUrl: './addcards.component.html',
  styleUrls: ['./addcards.component.scss']
})
export class AddcardsComponent implements OnInit {

  cardService: CardService;
  tokenService: TokenService;
  card: Card;
  results: Catalog;
  queryField: FormControl = new FormControl();
  autocompleteService: AutocompleteService;

  constructor(cardService: CardService, tokenService: TokenService, autocompleteService: AutocompleteService) {
    this.cardService = cardService;
    this.tokenService = tokenService;
    this.autocompleteService = autocompleteService;
  }

  ngOnInit() {
    this.queryField.valueChanges
      .subscribe(queryField => this.autocompleteService.search(queryField)
        .subscribe(data => this.results = data));
  }



}
