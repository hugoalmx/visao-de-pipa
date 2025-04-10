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
      answer: 'Sim, oferecemos opções de personalização para atender às suas necessidades específicas. Com exceção do jeep 4x4, que é um passeio único e não pode ser personalizado. Entre em contato conosco para discutir as possibilidades.'
    },
    {
      question: 'Quais são as políticas de cancelamento e reembolso?',
      answer: 'Nossa política de cancelamento permite reembolso integral até 5 dias antes do passeio. Para cancelamentos com menos de 5 dias, oferecemos reembolso de 50% do valor do passeio.'
    },
    {
      question: 'O passeio é adequado para crianças ou idosos?',
      answer: 'Sim, nossos passeios são adaptados para todas as idades. Oferecemos equipamentos de segurança específicos e guias treinados para garantir uma experiência segura e agradável para todos.'
    },
    {
      question: 'Como posso entrar em contato em caso de emergência?',
      answer: 'Você pode entrar em contato conosco através do nosso WhatsApp (55 84 99999-9999).'
    }
  ];
}
