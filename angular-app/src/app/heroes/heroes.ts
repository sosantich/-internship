import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetail } from '../hero-detail/hero-detail';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message';
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,              // <- обязательно для маршрута в standalone-приложении
  selector: 'app-heroes',
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.css'],
  imports: [CommonModule, HeroDetail, RouterLink], // <- CommonModule даёт *ngFor/*ngIf
})
export class Heroes implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}