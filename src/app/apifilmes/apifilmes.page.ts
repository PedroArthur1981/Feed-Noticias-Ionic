import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NavController, IonContent } from '@ionic/angular';
import { ApifilmesService } from '../services/apifilmes.service';

interface ApiResponse {
  results: Movie[];
  total_pages: number;
}

interface Movie {
  title: string;
  vote_average: number;
  backdrop_path: string;
  overview: string;
}

@Component({
  selector: 'app-apifilmes',
  templateUrl: './apifilmes.page.html',
  styleUrls: ['./apifilmes.page.scss'],
  providers: [ApifilmesService]
})
export class ApifilmesPage implements OnInit {
  listaFilmes: Movie[] = [];
  currentPage = 1;

  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(
    private apifilmesService: ApifilmesService,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) { }

  ngOnInit(): void {
    this.carregarFilmes(this.currentPage);
  }

  async carregarFilmes(page: number) {
    this.apifilmesService.getPopularMovies(page, 'pt-BR').subscribe({
      next: (data: ApiResponse) => {
        if (data && data.results) {
          this.listaFilmes = this.listaFilmes.concat(data.results);
        } else {
          console.error('Unexpected API response structure:', data);
        }
      },
      error: (error: any) => {
        console.error('Erro ao carregar filmes:', error);
      }
    });
  }

  loadMoreFilmes(event: any) {
    this.currentPage++;
    this.carregarFilmes(this.currentPage).then(() => {
      event.target.complete();
    });
  }

  handleRefresh(event: any) {
    this.currentPage = 1; // Reset back to the first page
    this.listaFilmes = []; // Clear the current list
    this.carregarFilmes(this.currentPage).then(() => {
      event.target.complete();
    });
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
