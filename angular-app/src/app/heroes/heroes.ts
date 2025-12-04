import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {HeroDetail} from '../hero-detail/hero-detail';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.css'],
  imports: [HeroDetail, NgFor],
})
export class Heroes {
  heroes = HEROES;

  selectedHero!: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
