import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit, OnDestroy {
  private audio: HTMLAudioElement;

  constructor(private router: Router) { }

  ngOnInit() {
    // Reproduzir o áudio automaticamente ao abrir a tela
    this.audio = new Audio('assets/audio/risada-coringa-joker.mp3');
    this.audio.play();

    // Definindo o temporizador para redirecionar após 5 segundos
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 9000); // 9000 milissegundos = 9 segundos
  }

  ngOnDestroy() {
    // Parar o áudio quando o componente for destruído
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0; // Reiniciar o áudio
    }
  }
}
