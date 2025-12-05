import {Component} from '@angular/core';
import { Heroes } from './heroes/heroes';
import { MessagesComponent } from './messages/messages';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Heroes, MessagesComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Tour of Heroes';
}