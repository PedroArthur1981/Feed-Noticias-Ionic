import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { ApiesporteService } from '../services/apiesporte.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  public pesquisa: string = "";
  public titulo: string = "News Feed";
  public lista_items: any[] = [];
  private page: number = 1;
  private apikey: string = 'b5ce9112fd886cb41c7fb1d4400b53c0'; // Mantenha a chave segura

  constructor(public apiesporteService: ApiesporteService, private navCtrl: NavController) { }

  ngOnInit(): void {
    this.carregaPagina();
  }

  carregaPagina() {
    this.apiesporteService.getgNews(this.apikey, this.page).subscribe(
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
