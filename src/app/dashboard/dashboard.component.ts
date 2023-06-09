import { Component, OnInit } from '@angular/core';
import { HeroService } from '../core/services/hero.service';
import { Hero } from '../core/models/hero.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private route: Router) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService
      .getAll()
      .subscribe((res) => (this.heroes = res.slice(1, 5)));
  }
  onSelected(hero: Hero): void {
    this.route.navigate(['/heroes', hero.id]);
  }
}
