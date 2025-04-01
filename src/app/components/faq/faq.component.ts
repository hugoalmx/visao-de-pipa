import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqItems: FaqItem[] = [
    {
      question: 'É possível personalizar o passeio?',
      answer: 'Sim, oferecemos opções de personalização para atender às suas necessidades específicas. Entre em contato conosco para discutir as possibilidades.'
    },
    {
      question: 'Quais são as políticas de cancelamento e reembolso?',
      answer: 'Nossa política de cancelamento permite reembolso integral até 24 horas antes do passeio. Para cancelamentos com menos de 24 horas, oferecemos reagendamento sem custo adicional.'
    },
    {
      question: 'O passeio é adequado para crianças ou idosos?',
      answer: 'Sim, nossos passeios são adaptados para todas as idades. Oferecemos equipamentos de segurança específicos e guias treinados para garantir uma experiência segura e agradável para todos.'
    }
  ];
}
