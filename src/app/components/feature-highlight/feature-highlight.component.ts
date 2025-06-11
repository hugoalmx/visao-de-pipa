import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-highlight',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './feature-highlight.component.html',
  styleUrls: ['./feature-highlight.component.css']
})
export class FeatureHighlightComponent {
  // Dados do conteúdo
  @Input() title: string = 'Título do Passeio';
  @Input() description: string = 'Descrição padrão do passeio.';
  @Input() imageUrl: string = 'assets/img/placeholder.png'; // Uma imagem padrão

  // Configuração dos botões
  @Input() primaryButtonText: string = 'Ver Mais';
  @Input() primaryButtonLink: string = '/';
  @Input() secondaryButtonText: string = 'Contato';
  @Input() secondaryButtonLink: string = '/contato';

  // Chave para controlar o layout: 'left' ou 'right'
  @Input() imagePosition: 'left' | 'right' = 'left'; 
}
