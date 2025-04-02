import { Component } from '@angular/core';
import {SymptomesComponent} from '../symptomes/symptomes.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  templateUrl: './accueil.component.html',
  imports: [
    SymptomesComponent
  ],
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {}
