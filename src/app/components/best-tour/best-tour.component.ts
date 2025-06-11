import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Tour {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  routePath: string;
}

@Component({
  selector: 'app-best-tour',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './best-tour.component.html',
  styleUrl: './best-tour.component.css'
})
export class BestTourComponent {
  tours: Tour[] = [
    {
      title: 'Passeio de Jeep',
      description: 'Explore o melhor de Pipa com duas rotas cheias de emoção e paisagens de tirar o fôlego!',
      image: 'assets/img/tour-example-image.png',
      buttonText: 'VER PASSEIO',
      routePath: '/passeios'
    },
    {
      title: 'Passeio de Buggy',
      description: 'Do sul ao norte, explore cada curva da costa em um passeio de buggy que você nunca vai esquecer!',
      image: 'assets/img/tour-example-image.png',
      buttonText: 'VER PASSEIO',
      routePath: '/passeios'
    },
    {
      title: 'Passeio de Quadriciclo',
      description: 'Acelere por 18km de aventura entre mirantes, falésias e piscinas naturais!',
      image: 'assets/img/tour-example-image.png',
      buttonText: 'VER PASSEIO',
      routePath: '/passeios'
      
    }
  ];
}
