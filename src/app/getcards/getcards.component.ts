import { Component, OnInit } from '@angular/core';
import {Card} from '../models/card';
import {CardService} from '../card.service';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-getcards',
  templateUrl: './getcards.component.html',
  styleUrls: ['./getcards.component.scss']
})
export class GetcardsComponent implements OnInit {

  cards: Card[];
  cardService: CardService;
  tokenService: TokenService;

  constructor(cardService: CardService, tokenService: TokenService) {
    this.cardService = cardService;
    this.tokenService = tokenService;
  }

  ngOnInit() {
  }

  getCards() {
    this.cardService.getCards(this.tokenService.token).subscribe(cards => this.cards = cards);
  }

}
