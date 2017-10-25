import {Component, OnInit} from '@angular/core';
import {Hero} from './model/Hero';
import {HeroService} from './hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) {
  }

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(result => {
      this.heroes = result;
    });
  }
}
