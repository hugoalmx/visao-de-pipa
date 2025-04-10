import { Component } from '@angular/core';
import { FeedbackCardComponent } from './feedback-card/feedback-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [FeedbackCardComponent, NgFor],
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent {
  feedbacks = [
    {
      message: 'Muito massa',
      author: 'Hugo',
      details: 'Sobre o passeio de helicoptero',
      rating: 5,
      image: 'path/to/image.jpg'
    },
    {
      message: 'Cabuloso',
      author: 'Campos',
      details: 'Sobre o passeio de buggy',
      rating: 5,
      image: 'path/to/image.jpg'
    },
    {
      message: 'Incrível',
      author: 'Pedro',
      details: 'Sobre o passeio de jeep',
      rating: 5,
      image: 'path/to/image.jpg'
    }
  ];
}
