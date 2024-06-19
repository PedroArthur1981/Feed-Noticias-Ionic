import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-desenvolvedores',
  templateUrl: './desenvolvedores.page.html',
  styleUrls: ['./desenvolvedores.page.scss'],
})
export class DesenvolvedoresPage implements OnInit {
  photos = [
    { src: 'assets/img/Braga.png', name: 'Matheus Braga Diamante Matrícula: 23101406' },
    { src: 'assets/img/Daniel.png', name: 'Daniel Vitor de Souza Matrícula: 23102667' },
    { src: 'assets/img/Leonardo.png', name: 'Leonardo dos Santos de Andrade Matrícula: 23103259' },
    { src: 'assets/img/Pedro Arthur.png', name: 'Pedro Arthur O. M. da Silva Matrícula: 23101580' },
    { src: 'assets/img/Ruy.png', name: 'Rui Francisco Gomes Filho Matrícula: 23102716' },
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }
}
