import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent } from '@ionic/angular';
import { ApifinancasService } from '../services/apifinancas.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-apifinancas',
  templateUrl: './apifinancas.page.html',
  styleUrls: ['./apifinancas.page.scss'],
})
export class ApifinancasPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  public pesquisa: string = "";
  public titulo: string = "News Feed";
  public lista_items: any[] = [];
  private page: number = 1;
  private apikey: string = 'cf9cc60e309996d4902e099b268484d3'; // Mantenha a chave segura

  constructor(public apifinancasService: ApifinancasService, private navCtrl: NavController) { }

  ngOnInit(): void {
    this.carregaPagina();
  }

  carregaPagina() {
    this.apifinancasService.getgNews(this.apikey, this.page).subscribe(
      (data: any) => {
        console.log('API Response:', data);
        if (data && data.articles) {
          this.lista_items = [...this.lista_items, ...data.articles];
          console.log(this.lista_items);
        } else {
          console.log('No results found in response');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.page++; // Incrementa a página para buscar mais resultados
    this.carregaPagina();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  goToTabTelaInicial() {
    this.navCtrl.navigateForward('/tab-tela-inicial');
  }

  scrollToTop() {
    if (this.content) {
      this.content.scrollToTop(300);  // O número 300 representa o tempo de animação em milissegundos
    }
  }

  isDarkMode = false; // Flag to track dark mode state

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode'); // Add/remove dark-mode class
  }
}
