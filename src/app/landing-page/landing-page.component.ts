import { Component } from '@angular/core';
import { IntroductionComponent } from '../components/introduction/introduction.component';
import { BestTourComponent } from '../components/best-tour/best-tour.component';
import { FaqComponent } from '../components/faq/faq.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { FeedbacksComponent } from '../components/feedbacks/feedbacks.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [IntroductionComponent, BestTourComponent, FaqComponent, AboutUsComponent, FeedbacksComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {}
