import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface atualizada para incluir campos opcionais para o WhatsApp
interface FaqItem {
  question: string;
  answer: string;
  whatsappNumber?: string; // Número para gerar o link (ex: 5583991653804)
  whatsappText?: string;   // Texto que será clicável (ex: WhatsApp)
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
      question: 'Vocês oferecem passeios personalizados ou posso alterar o roteiro?',
      answer:
        'Sim, adoramos criar experiências únicas! A maioria dos nossos passeios privativos pode ser totalmente personalizada. Podemos ajustar o itinerário, o tempo de parada em cada local e até incluir lugares especiais do seu interesse. Como funciona a personalização? Basta entrar em contato com nossa equipe, nos contar suas ideias, e montaremos um roteiro perfeito para você!'
    
    },
    {
      question: 'Quais são as políticas de cancelamento e reembolso?',
      answer:  'Nossa política de cancelamento permite reembolso integral até 5 dias antes do passeio. Para cancelamentos com menos de 5 dias, oferecemos reembolso de 50% do valor do passeio.' 
    },
    
    {
      // --- MODIFICAÇÃO AQUI ---
      question: 'Como posso entrar em contato em caso de emergência?',
      // O texto da resposta foi dividido para isolar o link
      answer: 'Você pode entrar em contato conosco através do nosso ', 
      // O número de WhatsApp, sem máscara, para criar o link
      whatsappNumber: '5583991653804', 
      // O texto que o usuário verá e clicará
      whatsappText: 'WhatsApp (+55 83 99165-3804).' 
    }
  ];
}
