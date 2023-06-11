import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MODULES = [
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatButtonModule,
  MatTooltipModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatProgressBarModule,
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class MaterialModule {}
