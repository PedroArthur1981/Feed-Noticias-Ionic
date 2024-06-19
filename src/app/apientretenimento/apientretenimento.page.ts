import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent } from '@ionic/angular';
import { ApientretenimentoService } from '../services/apientretenimento.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-apientretenimento',
  templateUrl: './apientretenimento.page.html',
  styleUrls: ['./apientretenimento.page.scss'],
})
export class ApientretenimentoPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  public pesquisa: string = "";
  public titulo: string = "News Feed";
  public lista_items: any[] = [];
  private page: number = 1;
  private apikey: string = '2c130973503602314ec0151cf00d5c6f'; // Mantenha a chave segura

  constructor(public apientretenimentoService: ApientretenimentoService, private navCtrl: NavController) { }

  ngOnInit(): void {
    this.carregaPagina();
  }

  carregaPagina() {
    this.apientretenimentoService.getgNews(this.apikey, this.page).subscribe(
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
