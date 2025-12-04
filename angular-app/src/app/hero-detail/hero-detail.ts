import {Component, Input} from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.html',
  styleUrls: ['./hero-detail.css'],
  imports: [FormsModule, NgIf, UpperCasePipe],
})
export class HeroDetail {
  @Input() hero?: Hero;
}