import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-feedback-card',
  imports: [NgFor],
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.css']
})
export class FeedbackCardComponent {
  @Input() feedback!: { message: string; author: string; details: string; rating: number; image: string };
}
