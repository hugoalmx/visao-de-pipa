import { Component } from '@angular/core';
import { IntroductionComponent } from '../components/introduction/introduction.component';
import { BestTourComponent } from '../components/best-tour/best-tour.component';
import { FaqComponent } from '../components/faq/faq.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [IntroductionComponent, BestTourComponent, FaqComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {}
