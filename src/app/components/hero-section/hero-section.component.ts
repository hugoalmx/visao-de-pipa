import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// O RouterLink não é mais necessário para esta funcionalidade
// import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  @Input() title: string = 'Título Padrão';
  @Input() subtitle?: string;
  @Input() imageUrl: string = '';
  @Input() buttonText?: string;

  // MODIFICAÇÃO 1: Trocamos o Input para aceitar o ID do alvo do scroll
  @Input() scrollToId?: string;

  // MODIFICAÇÃO 2: Nova função para fazer a rolagem suave
  scrollToTarget(): void {
    // Verifica se um ID foi fornecido
    if (this.scrollToId) {
      const element = document.getElementById(this.scrollToId);
      // Se o elemento com o ID existir, rola até ele
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    }
  }
}
