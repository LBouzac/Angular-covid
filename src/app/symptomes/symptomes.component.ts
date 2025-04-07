import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface SymptomesList {
  name: string;
  description: string;
  img?: string;
}

@Component({
  selector: 'app-symptomes',
  standalone: true,
  templateUrl: './symptomes.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./symptomes.component.css']
})


export class SymptomesComponent {

  symptomes: SymptomesList[] = [
    { name: 'Forte fièvre',
      description: 'Une forte fièvre dans le cadre de la COVID-19 est généralement définie comme une température supérieure à 39 °C et peut être un signe d\'infection, mais elle peut également être absente ou légère chez certaines personnes.',
      img: './assets/img/fievre.png'
    },
    { name: 'Toux',
      description: 'La toux due à la Covid-19 se distingue par ses intonations spécifiques et peut être légère ou persistante, mais elle devient rarement chronique; pour confirmer la présence du virus, un test de dépistage PCR est nécessaire.',
      img: './assets/img/toux.png'
    },
    { name: 'Gorge irritée',
      description: 'L\'odynophagie aiguë est un nouveau symptôme du Covid-19, particulièrement associé au variant Omicron, se manifestant par un mal de gorge persistant et des douleurs lors de la déglutition.',
      img: './assets/img/gorge.png'
    },
    { name: 'Migraine',
      description: 'La migraine après COVID-19 peut survenir en raison de l\'impact du virus sur les nerfs et d\'une augmentation du stress, affectant ainsi la qualité de vie ; elle peut durer de quelques heures à plusieurs jours et nécessite souvent un traitement par médicaments antidouleur ou triptans.',
      img: './assets/img/tete.png'
    }
  ];

  constructor() { }

}

