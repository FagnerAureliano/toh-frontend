import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Observable, of, tap } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(
    private http: HttpClient,
    private messageService: MessagesService
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`fetched ${heroes.length}  hero(es)`)));
  }
  getHero(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap((hero) => this.log(`fetched hero id=${id} and name=${hero.name}`))
      );
  }
  log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
