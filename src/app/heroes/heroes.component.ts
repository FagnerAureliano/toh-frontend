import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HEROES } from '../heroes.mock';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero!: Hero;
  constructor(
    private heroService: HeroService,
    private messageService: MessagesService
  ) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((res) => {
      this.heroes = res;
    });
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`Hero Component: Selected Hero id=${hero.id}`);
  }
}
