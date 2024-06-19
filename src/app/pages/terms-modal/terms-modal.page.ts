import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-terms-modal',
  templateUrl: './terms-modal.page.html',
  styleUrls: ['./terms-modal.page.scss'],
})
export class TermsModalPage {

  constructor(private modalController: ModalController) {}

  close() {
    this.modalController.dismiss();
  }

  agree() {
    this.modalController.dismiss(true);
  }
}
