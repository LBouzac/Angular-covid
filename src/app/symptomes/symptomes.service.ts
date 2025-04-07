import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs';

const obs$ = ajax.getJSON('./assets/symptomes.json').pipe(
  map((data: any) => {
    const symptomes = data.map((item: any) => ({
      name: item.name,
      description: item.description,
      img: item.img
    }));

    return symptomes;
  })
);

export interface SymptomesList {
  name: string;
  description: string;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class SymptomesService {
  private symptomesSubject = new BehaviorSubject<SymptomesList[]>([]);

  symptomes$ = this.symptomesSubject.asObservable();

  constructor() {
    obs$.subscribe(symptomes => this.symptomesSubject.next(symptomes));
  }
}
