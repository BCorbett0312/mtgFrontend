import {FriendGroup} from './friendGroup';
import {Card} from './card';

export class User {

  id: number;
  username: string;
  password: string;
  email: string;
  groups: FriendGroup[];
  cards: Card[];
}
