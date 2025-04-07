import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SymptomesComponent } from './symptomes/symptomes.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';

export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'symptomes', component: SymptomesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];
