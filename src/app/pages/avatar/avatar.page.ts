import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  constructor(private alertCtrl: AlertController) {}

  ngOnInit() {}

  async onDefaultClick() {
    const alert = await this.alertCtrl.create({
      header: 'Botón Default',
      message: 'Has presionado el Botón Default.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async onRoundClick() {
    const alert = await this.alertCtrl.create({
      header: 'Botón Round',
      message: 'Selecciona una acción.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Aceptar presionado');
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'danger',
        },
      ],
    });
    await alert.present();
  }

  async onHeartClick() {
    const alert = await this.alertCtrl.create({
      header: 'Botón Corazón',
      subHeader: '¡Acción!',
      message: 'Has presionado el botón con corazón.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}

