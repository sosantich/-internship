import { Component } from '@angular/core';
import { Heroes } from './heroes/heroes';
import { MessagesComponent } from './messages/messages';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Heroes, MessagesComponent, RouterOutlet, RouterLink, Dashboard],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Tour of Heroes';
}