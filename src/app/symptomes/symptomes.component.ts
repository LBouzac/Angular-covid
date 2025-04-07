import { Component, OnInit } from '@angular/core';
import { SymptomesService } from './symptomes.service';
import { Observable } from 'rxjs';
import { SymptomesList } from './symptomes.service';
import {AsyncPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-symptomes',
  standalone: true,
  templateUrl: './symptomes.component.html',
  imports: [NgForOf, AsyncPipe],
  styleUrls: ['./symptomes.component.css']
})
export class SymptomesComponent implements OnInit {
  symptomes$: Observable<SymptomesList[]>;

  constructor(private symptomesService: SymptomesService) {
    this.symptomes$ = this.symptomesService.symptomes$;
  }

  ngOnInit(): void {}
}
