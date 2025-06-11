import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Importações necessárias do Angular Router
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  // 2. Adicionado RouterLink para que os links funcionem corretamente
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  // 3. Nova variável para controlar qual link exibir
  isOnPasseiosPage = false;

  private destroy$ = new Subject<void>();

  // 4. Injetando o serviço Router
  constructor(private router: Router) {}

  ngOnInit(): void {
    // 5. Lógica para verificar a URL atual sempre que a rota mudar
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe((event: NavigationEnd) => {
      // Atualiza a variável se a URL for exatamente '/passeios'
      this.isOnPasseiosPage = event.urlAfterRedirects === '/passeios';
    });
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
