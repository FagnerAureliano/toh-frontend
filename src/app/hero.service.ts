import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './heroes.mock';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id === id)!;
    console.log(hero);

    this.messageService.add(`HeroService: fetched heroes ${id}`);
    return of(hero);
  }
}
