import { Component } from '@angular/core';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import { CommonModule } from '@angular/common';
import { FeatureHighlightComponent } from '../components/feature-highlight/feature-highlight.component';

@Component({
  selector: 'app-tours',
  imports: [CommonModule, HeroSectionComponent, FeatureHighlightComponent],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {

}
