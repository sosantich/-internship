import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { HeroDetail } from '../hero-detail/hero-detail';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message';
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.css'],
  imports: [CommonModule, HeroDetail, RouterLink],
  
})
export class Heroes implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe({
      next: heroes => {
        this.heroes = heroes;

        this.cdr.detectChanges();
      },
    });
  }
  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}
delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero.id).subscribe();
}
}