import { Component, OnInit } from '@angular/core';
import { HeroDetail } from '../hero-detail/hero-detail'; 
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message';
import { NgFor} from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.css'],
  imports: [HeroDetail, NgFor],
})
export class Heroes implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}