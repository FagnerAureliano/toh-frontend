import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  hero!: Hero;
  isEditing!: boolean;
  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getHero();
  }
  isFormValid(): boolean {
    return !!this.hero.name.trim();
  }
  getHero(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId === 'new') {
      this.isEditing = false;
      this.hero = { name: '' } as Hero;
    } else {
      this.isEditing = true;
      const id = Number(paramId);
      this.heroService.getOne(id).subscribe((res) => (this.hero = res));
    }
  }

  goBack() {
    this.location.back();
  }
  create(): void {
    this.heroService.create(this.hero).subscribe(() => this.goBack());
  }
  update(): void {
    this.heroService.update(this.hero).subscribe(() => this.goBack());
  }
}
