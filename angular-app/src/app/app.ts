import {Component} from '@angular/core';
import { Heroes } from './heroes/heroes';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Heroes],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Tour of Heroes';
}