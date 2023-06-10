import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailsComponent } from './components/heroe-details/hero-details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [HeroesComponent, HeroDetailsComponent],
  imports: [CommonModule, MaterialModule, HeroesRoutingModule, FormsModule],
})
export class HeroesModule {}
