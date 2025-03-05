import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SymptomesComponent } from './symptomes/symptomes.component';

export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'symptomes', component: SymptomesComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];
