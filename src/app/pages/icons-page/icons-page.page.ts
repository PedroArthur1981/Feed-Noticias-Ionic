import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-icons-page',
  templateUrl: './icons-page.page.html',
  styleUrls: ['./icons-page.page.scss']
})
export class IconsPagePage {

  constructor(private navCtrl: NavController) { }

  isDarkMode = false; // Flag to track dark mode state

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode'); // Add/remove dark-mode class
  }

  applyFlip(event: Event) {
    const target = event.currentTarget as HTMLElement;
    target.classList.add('flip');
    setTimeout(() => target.classList.remove('flip'), 600); // Remove a classe após a animação
  }

  goToTabs1() {
    this.navCtrl.navigateForward('/tabs1');
  }

  goToTabs2() {
    this.navCtrl.navigateForward('/tabs2');
  }

  goToApiFilme() {
    this.navCtrl.navigateForward('/apifilmes');
  }

  goToApiTecnologia() {
    this.navCtrl.navigateForward('/apitecnologia');
  }

  goToApiEntretenimento() {
    this.navCtrl.navigateForward('/apientretenimento');
  }

  goToApiFinancas() {
    this.navCtrl.navigateForward('/apifinancas');
  }

  goToApiCiencia() {
    this.navCtrl.navigateForward('/apiciencia');
  }

  goToApiSaude() {
    this.navCtrl.navigateForward('/apisaude');
  }

  goToDevelopers() {
    this.navCtrl.navigateForward('/desenvolvedores'); // Certifique-se de que a rota para a página de desenvolvedores está correta
  }
}
