import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tour {
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

@Component({
  selector: 'app-best-tour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-tour.component.html',
  styleUrl: './best-tour.component.css'
})
export class BestTourComponent {
  tours: Tour[] = [
    {
      title: 'Passeio de Lancha',
      description: 'Explore as belas praias de Pipa em um passeio de lancha exclusivo. Visite pontos paradisíacos e mergulhe em águas cristalinas.',
      image: 'assets/img/tour-example-image.png',
      buttonText: 'VER PASSEIO'
    },
    {
      title: 'Passeio de Buggy',
      description: 'Aventure-se pelas dunas e praias de Pipa em um passeio de buggy emocionante. Conheça os melhores pontos turísticos da região.',
      image: 'assets/img/tour-example-image.png',
      buttonText: 'VER PASSEIO'
    },
    {
      title: 'Passeio de Stand Up',
      description: 'Experimente a sensação de navegar sobre as águas em um passeio de stand up paddle. Ideal para iniciantes e experientes.',
      image: 'assets/img/tour-example-image.png',
      buttonText: 'VER PASSEIO'
    }
  ];
}
