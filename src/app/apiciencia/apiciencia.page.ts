import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ApiciencaService } from '../services/apicienca.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-apiciencia',
  templateUrl: './apiciencia.page.html',
  styleUrls: ['./apiciencia.page.scss'],
})
export class ApicienciaPage implements OnInit {

  @ViewChild('content', { static: false }) content: IonContent;

  public pesquisa: string = "";
  public titulo: string = "News Feed";
  public lista_items: any[] = [];
  private page: number = 1;
  private apikey: string = '5d346a5a6c20aa6dee8462ffadb65df8'; // Mantenha a chave segura

  constructor(public apiciencaService: ApiciencaService, private navCtrl: NavController) { }

  ngOnInit(): void {
    this.carregaPagina();
  }

  carregaPagina() {
    this.apiciencaService.getgNews(this.apikey, this.page).subscribe(
      (data: any) => {
        if (data && data.articles) {
          this.lista_items = [...this.lista_items, ...data.articles];
        }
      },
      error => {
        console.error('Error fetching news:', error);
      }
    );
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.page++;
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
