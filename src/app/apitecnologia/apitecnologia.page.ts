import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent } from '@ionic/angular';
import { ApitecnologiaService } from '../services/apitecnologia.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-apitecnologia',
  templateUrl: './apitecnologia.page.html',
  styleUrls: ['./apitecnologia.page.scss'],
})
export class ApitecnologiaPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  public pesquisa: string = "";
  public titulo: string = "News Feed";
  public lista_items: any[] = [];
  private page: number = 1;
  private apikey: string = '9c3a884f19142a712e56c8a5f5bf49cf'; // Mantenha a chave segura

  constructor(public apitecnologiaService: ApitecnologiaService, private navCtrl: NavController) { }

  ngOnInit(): void {
    this.carregaPagina();
  }

  carregaPagina() {
    this.apitecnologiaService.getgNews(this.apikey, this.page).subscribe(
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
    this.content?.scrollToTop(300);  // O número 300 representa o tempo de animação em milissegundos
  }

  isDarkMode = false; // Flag to track dark mode state

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode'); // Add/remove dark-mode class
  }
}
